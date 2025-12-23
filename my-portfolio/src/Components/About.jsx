import ScrollTimeline from "../ui/ScrollTimeline";

const events = [
  {
    year: "2022",
    title: "Intermediate School",
    subtitle: "K.L.S. College Nawada",
    description: "12th Completed with 75% marks in Science Stream.",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    subtitle: "Galgotias University",
    description: "Pursuing B.Tech with a focus on Software Development and Data Structures.",
  },
]

const AboutmeText = [
  {
  paragraph: `Hi there!
I'm a web developer who enjoys building scalable, user-friendly applications and bringing ideas to life through code. I'm pursuing a Bachelor of Technology in Computer Science and Engineering, with a strong interest in full-stack development using the MERN stack.

I love working with modern web technologies and experimenting with new tools to improve performance, design, and user experience. I'm skilled in Java, JavaScript, Python, React, Node.js, Express, and MongoDB, and I enjoy creating clean, responsive, and intuitive interfaces.

I'm always eager to learn, take on new challenges, and collaborate with other developers. I'm excited to grow as a MERN stack developer, build impactful projects, and contribute meaningfully to the tech industry.`
}

]

export default function About() {
  return (
    <>  
  
    <div className="flex items-center justify-center gap-3 mb-6 mt-12">
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>

      <span className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase">ABOUT</span>

      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>

    <ScrollTimeline 
      events={events}
      title="My Journey so far"
      subtitle="Scroll to explore the timeline"
      aboutTitle="About Me"
      aboutText={AboutmeText[0].paragraph}
      animationOrder="sequential"
      progressIndicator={true}
      cardAlignment="Right"
      revealAnimation="fade"
      darkMode={true}
    />
    </>
  )
}