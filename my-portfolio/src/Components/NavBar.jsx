// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// /**
//  * Lightweight classname helper (same idea as classnames/cn)
//  * Keeps this file self-contained so it works without "@/lib/utils" alias.
//  */
// function cn(...args) {
//   return args
//     .flatMap((a) => {
//       if (!a) return [];
//       if (typeof a === "string") return a;
//       if (Array.isArray(a)) return a;
//       return a ? String(a) : "";
//     })
//     .filter(Boolean)
//     .join(" ");
// }

// /**
//  * NavBar
//  * - Accepts items: [{ name, url, icon }]
//  * - className: optional container className
//  */
// export function NavBar({ items = [], className = "" }) {
//   const [activeTab, setActiveTab] = useState(items?.[0]?.name || "");
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className={cn(
//         "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
//         className
//       )}
//     >
//       <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
//         {items.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.name;

//           return (
//             // Using <a> instead of next/link so this works in Vite projects.
//             <a
//               key={item.name}
//               href={item.url}
//               onClick={(e) => {
//                 // If the URL is an anchor on the same page we let default behavior happen.
//                 // Still set active tab so UI updates immediately.
//                 setActiveTab(item.name);
//               }}
//               className={cn(
//                 "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
//                 "text-foreground/80 hover:text-primary",
//                 isActive && "bg-muted text-primary"
//               )}
//             >
//               {/* full label on md+ screens, icon on small screens */}
//               <span className="hidden md:inline">{item.name}</span>
//               <span className="md:hidden inline-flex">
//                 {Icon ? <Icon size={18} strokeWidth={2.5} /> : item.name}
//               </span>

//               {isActive && (
//                 <motion.div
//                   layoutId="lamp"
//                   className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
//                   initial={false}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 30,
//                   }}
//                 >
//                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
//                     <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
//                     <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
//                     <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
//                   </div>
//                 </motion.div>
//               )}
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Utility function to merge classnames
 */
function cn(...args) {
  return args
    .flatMap((a) => {
      if (!a) return [];
      if (typeof a === "string") return a;
      if (Array.isArray(a)) return a;
      return a ? String(a) : "";
    })
    .filter(Boolean)
    .join(" ");
}

/**
 * Modern Glassy NavBar Component
 * Perfect for dark gradient backgrounds with glassmorphism effect
 * 
 * Props:
 * - items: Array of { name, url, icon? }
 * - className: Additional container classes
 */
export function NavBar({ items = [], className = "" }) {
  const [activeTab, setActiveTab] = useState(items?.[0]?.name || "");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll effect for extra polish
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "top-4" : "top-6",
        className
      )}
    >
      {/* Glassy navbar container with modern styling */}
      <div 
        className={cn(
          "flex items-center gap-2 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300",
          "bg-white/5 border border-white/10",
          "hover:bg-white/10 hover:border-white/20",
          "px-3 py-3"
        )}
        style={{
          boxShadow: scrolled 
            ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            : "0 12px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-medium rounded-full transition-all duration-300",
                "px-5 py-2.5 md:px-6",
                isActive 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              {/* Desktop: Show full label */}
              <span className="hidden md:inline relative z-10">{item.name}</span>
              
              {/* Mobile: Show icon or first letter */}
              <span className="md:hidden inline-flex relative z-10">
                {Icon ? <Icon size={18} strokeWidth={2.5} /> : item.name}
              </span>

              {/* Active tab background with glow effect */}
              {isActive && (
                <motion.div
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 rounded-full -z-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                    boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2) inset"
                  }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}