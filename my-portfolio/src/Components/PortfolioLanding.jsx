import React from 'react';
import Particles from './Particles';

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-green-950 to-purple-900 relative overflow-hidden">
      {/* Stars background effect - Creates twinkling stars across the page */}
      <div className="absolute inset-0">
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={75}
            moveParticlesOnHover={false}
            alphaParticles={false}
           disableRotation={false} 
        />
      </div>

      {/* <div className="absolute inset-0 top-5 w-full" >
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={80}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
    />
      </div> */}

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Hero section with title and description */}
        <div className="text-center mb-12">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-light mb-8">
            <span className="text-white">Hey, </span>
            <span className="text-white italic">I'm Vikram.</span>
          </h1>
          
          {/* Description text */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Web developer based out of Noida with <span className="text-white font-semibold">2+ years</span> of experience
            <br />
           
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex gap-4 mb-32">
          {/* Resume button with icon */}
          <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2 border border-gray-600/30">
            Resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
          
          {/* Get in touch button */}
          <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-medium">
            Get In Touch
          </button>
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
              strokeWidth="8"
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

      {/* Tools marquee - Scrolling logos at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden z-20">
        <div className="flex items-center gap-12 animate-scroll">
          {/* Maze logo */}
          <img src="https://cdn.cdnlogo.com/logos/m/20/maze.svg" alt="Maze" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          
          {/* Balsamiq text */}
          <span className="text-white/60 text-2xl font-light hover:text-white/100 transition-colors">balsamiq</span>
          
          {/* Whimsical logo and text */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded transform rotate-45" />
            <span className="text-white/60 text-xl font-medium hover:text-white/100 transition-colors">Whimsical</span>
          </div>
          
          {/* Figma logo */}
          <img src="https://cdn.cdnlogo.com/logos/f/23/figma.svg" alt="Figma" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          
          {/* Framer logo and text */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded transform -skew-x-12" />
            <span className="text-white/60 text-xl font-bold hover:text-white/100 transition-colors">Framer</span>
          </div>
          
          {/* Notion logo and text */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="text-white/60 text-xl font-medium hover:text-white/100 transition-colors">Notion</span>
          </div>
          
          {/* Miro logo and text */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold italic">m</span>
            </div>
            <span className="text-white/60 text-xl font-bold hover:text-white/100 transition-colors">miro</span>
          </div>
          
          {/* Useberry logo and text */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg" />
            <span className="text-white/60 text-xl font-medium hover:text-white/100 transition-colors">useberry</span>
          </div>
          
          {/* Repeat all logos for seamless infinite scroll */}
          <img src="https://cdn.cdnlogo.com/logos/m/20/maze.svg" alt="Maze" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <span className="text-white/60 text-2xl font-light hover:text-white/100 transition-colors">balsamiq</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded transform rotate-45" />
            <span className="text-white/60 text-xl font-medium hover:text-white/100 transition-colors">Whimsical</span>
          </div>
          <img src="https://cdn.cdnlogo.com/logos/f/23/figma.svg" alt="Figma" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* CSS animations and keyframes */}
      <style jsx>{`
        /* Twinkling animation for stars */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        /* Horizontal scrolling animation for tool logos */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Apply scroll animation */
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}