import React from 'react'
import LogoLoop from "../ui/LogoLoop";
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
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

export default function Skills() {
  return (
    <>
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
    </>
  )
}

