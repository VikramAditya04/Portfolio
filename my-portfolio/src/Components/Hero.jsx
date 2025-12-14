import React from 'react'
import { HoverBorderGradient } from '../ui/HoverBorderGradient.jsx';


export default function Hero() {
  return (
    <>
        {/* Main content container */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Hero section with title and description */}
        <div className="text-center mb-12">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-light mb-8">
            <span className="text-white">Hey, </span>
            <span className="text-white italic">I'm Vikram</span>
          </h1>
          
          {/* Description text */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">Web developer based in Noida</span> <br /> I enjoy building user-friendly web applications.
            <br />
           
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex gap-4 mb-32">
          {/* Resume button with icon */}
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient
              as="button"
              containerClassName="rounded-full"
              className="bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 hover:cursor-pointer flex items-center gap-2"
            >
              <span>Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </HoverBorderGradient>
          </a>

          {/* Get in touch button */}
          <a href="https://www.linkedin.com/in/vikramaditya04/" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient
              as="button"
              containerClassName="rounded-full"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2 hover:cursor-pointer"
            >
              <span>Get In Touch</span>
            </HoverBorderGradient>
          </a>
        </div>

        {/* Planet/Globe curved horizon effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none" style={{overflow: 'visible'}}>
          {/* SVG for perfect curved horizon line */}
          <svg 
            className="absolute bottom-0 left-0 right-0 w-full" 
            style={{overflow: 'visible'}}
            viewBox="0 0 1920 350" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Glow filter for the line */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dark planet background - ellipse bottom half */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="black"
              opacity="1"
            />
            
            {/* Main bright white curved horizon line */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="white"
              strokeWidth="3"
              filter="url(#glow)"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.6))'
              }}
            />
            
            {/* Additional glow layer */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="7"
              style={{
                filter: 'blur(8px)'
              }}
            />
            
            {/* Outer glow layer */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="15"
              style={{
                filter: 'blur(15px)'
              }}
            />
          </svg>
        </div>
      </div>

    </>
  )
}


