import React from 'react'
import { HoverBorderGradient } from '../ui/HoverBorderGradient.jsx';
import Particles from '../ui/Particles.jsx';
import { SparklesCore } from '../ui/Sparkles.jsx';
import LightRays from '../ui/LightRays.jsx';
import ShinyText from '../ui/ShinyText.jsx';

export default function Hero() {
  return (
    <>
      {/* Stars background effect - Creates twinkling stars across the page */}
            <div className="absolute inset-0 top-6 bottom-0 z-0 pointer-events-none overflow-hidden">

                        {/* Layer 1 — Light Rays */}
                <div className="absolute inset-0 z-10">
                    <LightRays
                      raysOrigin="bottom-center"
                      raysColor="#ffffff"
                      raysSpeed={1}
                      lightSpread={1}
                      rayLength={1}
                      followMouse={true}
                      mouseInfluence={0.3}  
                      noiseAmount={0}
                      distortion={0}
                      />
                </div>

                        {/* Layer 2 — Sparkles */}
                <div className="absolute inset-0 z-20 flex justify-center mix-blend-screen">
                      <SparklesCore
                        background="transparent"
                        minSize={0.2}
                        maxSize={0.8}
                        particleDensity={20}
                        className="w-[85%] h-full"
                        particleColor="#FFFFFF"
                      />
                  </div>

            </div>
        {/* Main content container */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-screen px-4 gap-4 ">

      <div className="flex items-center justify-center m-2 hover:cursor-pointer">
      <div className="relative flex items-center gap-3 px-4 py-1 bg-black backdrop-blur-sm border border-gray-700 rounded-full ">
        {/* Blinking Green Dot */}
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <ShinyText
          size="sm"
          weight="medium" 
          baseColor="white"
          shineColor="white"
          intensity={0.9}
          speed={5}
          direction="left-to-right"
          className="relative text-sm"
        >
          Open to opportunities
        </ShinyText>
      </div>
    </div>

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
              animated={true}
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
          <a href="mailto:vikramaadi9798@gmail.com" target="_blank" rel="noopener noreferrer">
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
            viewBox="0 0 1920 270" 
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


