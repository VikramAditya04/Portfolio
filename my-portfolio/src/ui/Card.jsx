import React from "react";

/* Card Wrapper */
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-xl 
      shadow-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
};

/* Card Content */
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-4 text-white ${className}`}>
      {children}
    </div>
  );
};
