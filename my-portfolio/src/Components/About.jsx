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
    <ScrollTimeline 
      events={events}
      title="My Journey"
      subtitle="Scroll to explore the timeline"
      aboutTitle="About Me"
      aboutText={AboutmeText[0].paragraph}
      animationOrder="sequential"
      progressIndicator={true}
      cardAlignment="Right"
      revealAnimation="fade"
      darkMode={true}
    />
  )
}