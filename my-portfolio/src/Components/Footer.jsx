import React from 'react'
import { SparklesCore } from '../ui/Sparkles.jsx';
import LightRays from '../ui/LightRays.jsx';
import { HoverBorderGradient } from '../ui/HoverBorderGradient.jsx';
import SocialButton from '../ui/Buttons/SocialButton.jsx';
import TiltedCard from '../ui/Cards/TiltedCard.jsx';
import vikramImg from '../assets/Vikram.png';
import FooterNote from '../ui/FooterNote.jsx';
import logo from '../assets/Logo VA.png';

function Footer() {
  return (
    <>
    <footer className="bg-black text-gray-400 py-6 pt-40 relative overflow-hidden">

      <div
        className="
          footer-content 
          flex flex-col md:flex-row
          max-w-6xl mx-auto px-4
          items-center md:items-start
          justify-between
          text-center md:text-left      /* center text on mobile */
          gap-10
          pb-32 md:pb-10
        "
      >

        {/* LEFT SIDE */}
        <div className="leftside w-full md:w-1/2 flex flex-col items-center md:items-start">
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-light mb-4">
              <span className="text-white">Lets, </span>
              <span className="text-white italic">connect</span>
            </h1>

            <p className="text-gray-300 text-sm max-w-xl leading-relaxed mx-auto md:mx-0">
              I’m open for collaborations, freelance work, and full-time roles.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex gap-2 mb-10 md:mb-24 justify-center md:justify-end">
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
          <div>
            <FooterNote />
          </div>
        </div>

        {/*Right side Card and SOCIALS */}
        <div className="rightside w-full md:w-1/2 flex flex-col items-center md:items-end gap-10">
            <div>
              <TiltedCard
                imageSrc={vikramImg}
                altText="Vikram Aditya"
                captionText="Vikram Aditya - Web Developer"
                containerHeight="300px"
                containerWidth="250px"
                imageHeight="300px"
                imageWidth="250px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <img src={logo} alt="Logo VA" />
                }
              />
            </div>
        
        <div className="flex gap-2 justify-center align-center">
          <SocialButton platform="linkedin" href="https://www.linkedin.com/in/vikramaditya04/" tooltip="LinkedIn" />
          <SocialButton platform="github" href="https://github.com/VikramAditya04" tooltip="GitHub" />
          <SocialButton platform="leetcode" href="https://leetcode.com/u/Vikram_Aditya_04/" tooltip="LeetCode" />
          <SocialButton platform="instagram" href="https://www.instagram.com/_aadi_04/" tooltip="Instagram" />
          <SocialButton platform="twitter" href="https://x.com/Aadi_04__" tooltip="Twitter" />
          <SocialButton platform="whatsapp" href="https://wa.me/+919798018793?text=Hello Vikram!" tooltip="WhatsApp" />
        </div>
      </div>
      </div>

        {/* Stars background effect - Creates twinkling stars across the page */}
                   <div className="absolute inset-0 top-0 bottom-0 z-0  pointer-events-none overflow-hidden">

                        {/* Layer 1 — Light Rays */}
                        <div className="absolute inset-0 z-10">
                            <LightRays
                            raysOrigin="bottom-center"
                            raysColor="#ffffff"
                            raysSpeed={1}
                            lightSpread={1}
                            rayLength={0.5}
                            followMouse={true}
                            mouseInfluence={0.2}
                            noiseAmount={0}
                            distortion={0}
                            />
                        </div>

                        {/* Layer 2 — Sparkles */}
                        <div className="absolute inset-0 z-20 pt-50 flex justify-center mix-blend-screen">
                            <SparklesCore
                            background="transparent"
                            minSize={0.2}
                            maxSize={0.8}
                            particleDensity={25}
                            className="w-[30%] h-full"
                            particleColor="#FFFFFF"
                            />
                        </div>

                        </div>
                    
            {/* Planet/Globe curved horizon effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none" style={{overflow: 'visible'}}>
                    
          {/* SVG for perfect curved horizon line */}
          <svg 
            className="absolute bottom-0 left-0 right-0 w-full" 
            style={{overflow: 'visible'}}
            viewBox="0 0 1920 160" 
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
              strokeWidth="5"
              opacity={0.7}
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
        </footer>
    </>
  )
}

export default Footer;