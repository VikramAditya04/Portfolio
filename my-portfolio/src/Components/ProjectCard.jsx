import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  techStack = [], 
  gradientFrom = 'from-violet-950/90',
  gradientVia = 'via-purple-900/80',
  gradientTo = 'to-fuchsia-950/90',
  borderGlow = 'from-violet-500 via-purple-500 to-fuchsia-500',
  imageUrl = '',
  liveLink = '',
  githubLink = ''
}) => {
  return (
    <div className="relative group ">
      {/* Animated gradient border with sharp edges */}
      <div className={`absolute -inset-[2px] bg-gradient-to-r ${borderGlow} rounded-[28px] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`}></div>
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${borderGlow} rounded-[28px] opacity-60 group-hover:opacity-100 transition-all duration-500`}></div>
      
      {/* Main glass card */}
      <div className={`relative h-[700px] lg:h-[500px]  bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} backdrop-blur-3xl rounded-[26px] p-10 lg:p-14 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden`}>
        {/* Ambient light effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {title}
            </h2>
            
            <p className="text-gray-300/90 text-lg leading-relaxed font-light">
              {description}
            </p>
            
            {/* Tech Stack with Logos */}
            {techStack.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="group/tech relative"
                    >
                      {/* Glow on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover/tech:opacity-40 blur transition duration-300"></div>
                      
                      <div className="relative flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
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
                  className="group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 blur transition duration-300"></div>
                  <div className={`relative flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r ${borderGlow} text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Live View</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 to-white/5 rounded-xl opacity-0 group-hover/btn:opacity-100 transition duration-300"></div>
                  <div className="relative flex items-center gap-3 px-7 py-3.5 bg-white/5 backdrop-blur-xl text-white rounded-xl font-semibold border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub Repo</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Image - Premium Glass Container */}
          <div className="flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-lg">
              {/* Multi-layer glow effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${borderGlow} rounded-[32px] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-700`}></div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${borderGlow} rounded-[32px] opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500`}></div>
              
              {/* Premium glass frame */}
              <div className="relative">
                {/* Outer glass layer */}
                <div className="absolute -inset-[3px] bg-gradient-to-br from-white/30 via-white/10 to-white/5 rounded-[32px] backdrop-blur-xl"></div>
                
                {/* Inner content */}
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-[30px] p-3 border-2 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                  <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                    {imageUrl ? (
                      <div className="relative w-full aspect-[4/3]">
                        <img 
                          src={imageUrl} 
                          alt={title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                        <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
    </div>
  );
};
export default ProjectCard;