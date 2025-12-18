import React from 'react';
import logo from '../assets/Logo VA.png';
import { Home, User, Briefcase, Mail} from 'lucide-react';  
import Particles from '../ui/Particles.jsx';
import { NavBar } from '../Components/NavBar.jsx';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import ProjectCard from '../Components/ProjectCard';
import { projects } from "../Components/ProjectData";
import About from '../Components/About';


// Function to calculate sticky top position based on index and screen size
const getStickyTop = (index) => {
  if (window.innerWidth < 640) {
    // Mobile
    return 0 + index * 5;
  } else if (window.innerWidth < 1024) {
    // Tablet
    return 75 + index * 10;
  } else {
    // Desktop
    return 150 + index * 10;
  }
};

const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export default function HomePage() {
  return (
    <> 
    <main >
    <section id="hero">
    <div className="min-h-screen bg-[#010617]
  bg-[radial-gradient(circle_at_bottom,_rgba(88,28,135,0.85)_0,_rgba(15,23,42,1)_45%,_#020617_80%)] relative overflow-hidden">

    
      {/* Navbar at top */}
      <NavBar 
        items={navItems} 
        logoUrl={logo}
        resumeUrl="/path-to-your-resume.pdf"
      />

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
      
      {/* Main Hero Content */}
      <Hero />

      {/* Tools marquee - Scrolling logos at the bottom */}
      <Skills />
        
    </div>
</section> 



      {/* Project Section Scroll Stack */}
      
<section id='projects'
  className="project-section  bg-gradient-to-b from-[black] via-[#010617] to-[black] px-4 "
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
  <div className="relative flex flex-col h-full max-w-5xl mx-auto gap-6 mt-12">
  
  {projects.map((project, index) => (
    <div 
      key={index}
      className="w-full"
      style={{
        position: "sticky",
        top: `${getStickyTop(index)}px`,
      }}
    >
      <ProjectCard {...project} />
    </div>
  ))}
</div>
</section>
      {/* About Section*/}   
    <section id="about" className="bg-black py-20 px-4">  
      <About />
    </section>  
    </main>
    </>
  );
}