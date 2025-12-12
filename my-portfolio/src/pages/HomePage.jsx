import React from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react';  
import Particles from '../ui/Particles.jsx';
import { NavBar } from '../Components/NavBar.jsx';
import LogoLoop from "../ui/LogoLoop";
import { HoverBorderGradient } from '../ui/HoverBorderGradient';
import ProjectCard from '../Components/ProjectCard';
import { projects } from "../Components/ProjectData";

import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiGit,
  SiFigma
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-[40px] text-[#61DAFB]" />,
    label: "React"
  },
  {
    node: <SiHtml5 className="text-[40px] text-[#E34F26]" />, 
  },
  {
    node: <SiCss3 className="text-[40px] text-[#3178C6]" />, 
    label: "CSS"
  },
  {
    node: <SiJavascript className="text-[40px] text-[#F7DF1E]" />, 
    label: "JavaScript"
  },
  {
    node: <SiTailwindcss className="text-[40px] text-[#38BDF8]" />, 
    label: "Tailwind CSS"
  },
  {
    node: <SiVite className="text-[40px] text-[#3178C6]" />, 
    label: "Vite"
  },
  {
    node: <SiNodedotjs className="text-[40px] text-[#3178C6]" />,
    label: "Node.js"
  },
  {
    node: <SiExpress className="text-[40px] text-[#FFFFFF]" />, 
    label: "Express"
  },
  {
    node: <SiGithub className="text-[40px] text-[#FFFFFF]" />, 
    label: "GitHub"
  },
  {
    node: <SiGit className="text-[40px] text-[#F05032]" />, 
    label: "Git"
  },
  {
    node: <SiFigma className="text-[40px] text-[#FFFFFF]" />, 
    label: "Figma"
  }
];
// (you’re not using this yet, so either use it or delete it to avoid warnings)
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const navItems = [
  { name: 'Home', url: '#', icon: Home },
  { name: 'About', url: '#', icon: User },
  { name: 'Projects', url: '#', icon: Briefcase },
  { name: 'Resume', url: '#', icon: FileText }
];

export default function HomePage() {
  return (
    <>  
    <div className="min-h-screen bg-[#010617]
  bg-[radial-gradient(circle_at_bottom,_rgba(88,28,135,0.85)_0,_rgba(15,23,42,1)_45%,_#020617_80%)] relative overflow-hidden">
    
         {/* Navbar at top */}
      <NavBar items={navItems} />

      {/* Stars background effect - Creates twinkling stars across the page */}
      <div className="absolute inset-0"> 
        <Particles
            particleColors={['#F9F8F6', '#F9F8F6', '#F9F8F6']}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={true}
           disableRotation={false} 
        />
      </div>

      {/* Main content container */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-screen px-4">
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
          
          {/* Get in touch button */}
          <HoverBorderGradient
            as="button"
            containerClassName="rounded-full"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2 hover:cursor-pointer"
          >
            <span>Get In Touch</span>
          </HoverBorderGradient>
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

      {/* Tools marquee - Scrolling logos at the bottom */}
      <div className="h-full relative overflow-hidden z-[50] top-0">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology logos"
        renderItem={(item) => (
          <div className="flex flex-col items-center gap-2">
            {/* Icon */}
            <span>
              {item.node}
            </span>
            {/* Label below */}
            <span className="text-xs text-gray-300">
              {item.label}
            </span>
          </div>
        )}
      />
    </div>
        
    </div>

      {/* Project Section Scroll Stack */}
<div
  className="project-section bg-gradient-to-b from-[black] via-[#010617] to-[#0f172a] px-4"
>
  <div className="max-w-6xl mx-auto text-center pt-32 pb-8">
    <div className="flex items-center justify-center gap-3 mb-6">
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>

      <span className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase">PROJECTS</span>

      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300">A Glimpse Into My Craft</h2>
  </div>

  {/* Important: keep this wrapper WITHOUT overflow-hidden so page can scroll */}
  <div className="relative flex flex-col h-[20rem] max-w-6xl mx-auto gap-6 mt-12"
     style={{ height: `${projects.length * 700}px` }}>
  
  {projects.map((project, index) => (
    <div 
      key={index}
      className="w-full"
      style={{
        position: 'sticky',
        top: `${150 + index * 10}px`,
      }}
    >
      <ProjectCard {...project} />
    </div>
  ))}

</div>
</div>

      
    </>
  );
}