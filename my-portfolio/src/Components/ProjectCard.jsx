import React from 'react';
import GlowingCards, { GlowingCard } from "../ui/GlowingCard";
import GitHubButton from '../ui/GitHubButton';
import CheckLiveButton from '../ui/CheckLiveButton';
import ComingSoonButton from '../ui/ComingSoonButton';

const ProjectCard = ({
  title,
  description,
  techStack = [],
  gradientFrom = '',
  gradientVia = '',
  gradientTo = '',
  borderGlow = '#10b981',
  imageUrl = '',
  ComingSoon = '', 
  liveLink = '',
  githubLink = ''
}) => {
  return (
    <div className="relative">
      {/* Animated gradient border with sharp edges */}
      <GlowingCards
        enableGlow={true}
        glowRadius={35}
        glowOpacity={1}
        animationDuration={500}
        gap="3rem"
        responsive={true}
        enableHover={true}
      >
        <GlowingCard glowColor={borderGlow} className="space-y-4">
          {/* Main glass card */}
          <div className={`relative height-full
              bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} 
              backdrop-blur-3xl 
              border-[0.5px] border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
              rounded-4xl 
              px-5 py-8
              sm:px-8 sm:py-10
              lg:px-14 lg:py-12 
              overflow-hidden`}>
            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 z-10">
                <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                  {title}
                </h2>
                
                <p className="text-gray-300/90 text-lg leading-relaxed font-light">
                  {description}
                </p>

                {/* Tech Stack with Logos */}
                {techStack.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="group/tech relative"
                        >
                          {/* Glow on hover */}
                          <div className="absolute -inset-1 bg-gradient-to-br from-[#7A69F9] via-[#F26378] to-[#F5833F]
                             rounded-xl opacity-0 group-hover/tech:opacity-30 blur transition duration-300"></div>
                          <div className="relative flex items-center gap-2 px-1 py-1 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <span className="hidden text-sm font-medium text-white/90">{tech.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative"
                    >
                      <CheckLiveButton />
                    </a>
                  )}

                  {ComingSoon && (
                    <a
                      href={ComingSoon}
                      rel="noopener noreferrer"
                      className="group/btn relative"
                    > 
                      <ComingSoonButton />
                    </a>
                  )}

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative"
                    >
                      <GitHubButton />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Image - Premium Glass Container */}
              <div className="flex justify-center lg:justify-end z-10">
                <div className="relative w-full max-w-lg group/image">
                  {/* Multi-layer glow effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${borderGlow} rounded-[32px] opacity-20 group-hover/image:opacity-40 blur-3xl transition-all duration-700`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${borderGlow} rounded-[32px] opacity-30 group-hover/image:opacity-50 blur-xl transition-all duration-500`}></div>

                  {/* Premium glass frame */}
                  <div className="relative">
                    {/* Outer glass layer */}
                    {/* <div className="absolute -inset-[3px] bg-gradient-to-br from-white/30 via-white/10 to-white/5 rounded-[32px] backdrop-blur-xl"></div> */}

                    {/* Inner content */}
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-[30px] p-3 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                        {imageUrl ? (
                          <div className="relative w-full h-full aspect-[5/3] overflow-hidden">
                            <img
                              src={imageUrl}
                              alt={title}
                              className="absolute inset-0 w-full h-full object-cover     overflow-hidden"
                            />
                          </div>
                        ) : (
                          <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                            <svg
                              className="w-32 h-32 text-white/20"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Glass reflection overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>
      </GlowingCards>
    </div>
  );
};

export default ProjectCard;