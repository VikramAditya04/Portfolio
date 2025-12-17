import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { HoverBorderGradient } from "../ui/HoverBorderGradient.jsx";

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

export function NavBar({ items = [], className = "", logoUrl = "", resumeUrl = "#" }) {
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

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-6xl transition-all duration-300 pointer-events-none", 
        // Mobile bottom / Desktop top
        "bottom-6 md:top-6",
        scrolled && "md:top-4",
        className
      )}
    >
      {/* This wrapper is CLICKABLE */}
      <div className="flex items-center md:justify-between justify-center gap-4 pointer-events-auto w-full">
        
        {/* Logo */}
        <a 
          href="#hero" 
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden cursor-pointer"
        >
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-xl md:text-2xl">VA</span>
          )}
        </a>

        {/* Navigation */}
        <div 
          className={cn(
            "flex items-center gap-2 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300",
            "bg-white/5 border border-white/10",
            "hover:bg-white/10 hover:border-white/20",
            "px-3 py-3"
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative text-sm font-medium rounded-full transition-all duration-300 cursor-pointer",
                  "px-5 py-2.5 md:px-6",
                  isActive 
                    ? "text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden inline-flex">
                  {Icon && <Icon size={18} strokeWidth={2.5} />}
                </span>

                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                      boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2) inset"
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <a href={resumeUrl} className="hidden md:flex items-center justify-center cursor-pointer">
          <HoverBorderGradient
            as="button"
            containerClassName="rounded-full cursor-pointer"
            className="bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2"
          >
            <span>Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </HoverBorderGradient>
        </a>

      </div>
    </div>
  );
}
