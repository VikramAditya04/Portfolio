import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./Card";
import { Calendar } from "lucide-react";

const LINE_LEFT_CLASS = "left-6"; // SINGLE SOURCE OF TRUTH

const DEFAULT_EVENTS = [
  {
    year: "2022",
    title: "Intermediate School",
    subtitle: "K.L.S. College Nawada",
    description: "12th Completed with 75% marks in Science Stream.",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    subtitle: "Galgotias University",
    description:
      "Pursuing B.Tech with a focus on Software Development and Data Structures.",
  },
];

const ScrollTimeline = forwardRef((props, outerRef) => {
  const {
    events = DEFAULT_EVENTS,
    title = "My Journey",
    subtitle = "Scroll to explore the timeline",
    aboutTitle = "About Me",
    aboutText = "",
    className = "",
    lineColor = "bg-white/20",
    progressIndicator = true,
    parallaxIntensity = 0.2,
    progressLineWidth = 2,
    progressLineCap = "round",
    darkMode = true,
  } = props;

  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["10%", "100%"]
  );

  useEffect(() => {
    const unsub = scrollYProgress.onChange((v) => {
      const idx = Math.floor(v * events.length);
      if (idx !== activeIndex && idx >= 0) {
        setActiveIndex(idx);
      }
    });
    return () => unsub();
  }, [scrollYProgress, events.length, activeIndex]);

  return (
    <section
      ref={outerRef}
      className={cn(
        "relative min-h-screen w-full",
        darkMode && "bg-black text-white",
        className
      )}
    >
      {/* HEADER */}
      <div className="text-center pb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-white/70">{subtitle}</p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">

        {/* LEFT – ABOUT ME */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {aboutTitle}
            </h3>
            <p className="text-left text-white/80 leading-relaxed">
              {aboutText}
            </p>
          </motion.div>
        </div>

        {/* RIGHT – TIMELINE */}
        <div ref={timelineRef} className="relative">

          {/* STATIC LINE */}
          <div
            className={cn(
              "absolute top-0 h-full",
              LINE_LEFT_CLASS,
              lineColor
            )}
            style={{ width: progressLineWidth }}
          />

          {/* PROGRESS LINE */}
          {progressIndicator && (
            <>
              <motion.div
                className={cn(
                  "absolute top-0 z-10",
                  LINE_LEFT_CLASS
                )}
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  borderRadius:
                    progressLineCap === "round" ? "9999px" : "0px",
                  background:
                    "linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)",
                  boxShadow: `
                    0 0 15px rgba(99,102,241,0.5),
                    0 0 25px rgba(168,85,247,0.3)
                  `,
                }}
              />

              {/* COMET */}
              <motion.div
                className={cn(
                  "absolute z-20",
                  LINE_LEFT_CLASS
                )}
                style={{
                  top: progressHeight,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                    boxShadow: `
                      0 0 15px 4px rgba(168,85,247,0.6),
                      0 0 25px 8px rgba(99,102,241,0.4),
                      0 0 40px 15px rgba(34,211,238,0.2)
                    `,
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          {/* EVENTS */}
          <div className="space-y-20 pl-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                     {/* DOT */}
                <div
                  className="absolute top-20 z-20"
                  style={{
                    left: `-2.5rem`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full bg-black border-4",
                      index <= activeIndex
                        ? "border-primary"
                        : "border-white/30"
                    )}
                  />
                </div>


                {/* CARD */}
                <Card className="bg-black/60 border border-white/10 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-bold text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="text-white/70 mb-2">
                        {event.subtitle}
                      </p>
                    )}
                    <p className="text-white/70">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ScrollTimeline;
