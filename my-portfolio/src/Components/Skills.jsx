import React from 'react'
import SpotlightCard from '../ui/Cards/SpotlightCard';
import analysisImg from '../assets/Skills/Business Plan.png';
import uiuxImg from '../assets/Skills/UI-UX design.png';
import developmentImg from '../assets/Skills/Development.png';
import testingImg from '../assets/Skills/Usability testing.png';

function Skills() {
  return (
    <>  
    <div className="max-w-6xl mx-auto text-center pt-32 pb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
              </svg> 
              <span className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase">SKILLS</span>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300">Skills & Methodology</h2>
        </div>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      
      {/* Card 1 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(255, 165, 0, 0.2)"
      >
        <img
          src={analysisImg}
          alt="User & Business Analysis"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          User & Business Analysis
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Understand user needs and business goals to define clear requirements,
          features, and technical direction before development begins.
        </p>
      </SpotlightCard>

      {/* Card 2 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(0, 122, 255, 0.2)"
      >
        <img
          src={uiuxImg}
          alt="UI/UX Design"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          UI/UX & Design Systems
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Design intuitive, accessible interfaces and reusable design systems
          that ensure consistent and engaging user experiences.
        </p>
      </SpotlightCard>

      {/* Card 3 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(234, 179, 8, 0.2)"
      >
        <img
          src={developmentImg}
          alt="Full Stack Development"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          Full-Stack Development
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Build scalable and responsive web applications by transforming designs
          into robust frontend and backend solutions.
        </p>
      </SpotlightCard>

      {/* Card 4 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(34, 197, 94, 0.2)"
      >
        <img
          src={testingImg}
          alt="Testing & Deployment"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          Testing & Deployment
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Test with real users, fix issues, deploy confidently, and continuously
          optimize performance based on feedback.
        </p>
      </SpotlightCard>

    </div>
    </>
  )
}

export default Skills;