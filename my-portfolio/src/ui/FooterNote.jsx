import { useEffect, useState } from "react";

export default function FooterNote() {
  const icons = ["✨", "❤️", "⚡"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 900); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-400 text-sm flex items-center gap-2 pt-8">
      <p>
        Design & built by <span className="font-medium text-white">Vikram Aditya</span>
      </p>

      <span className="relative inline-block w-5 h-5">
        <span
          key={index}
          className="absolute inset-0 flex items-center justify-center animate-fade"
        >
          {icons[index]}
        </span>
      </span>

      <span className="text-gray-300">· 2025</span>
    </div>
  );
}
