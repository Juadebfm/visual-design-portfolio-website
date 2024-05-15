import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiZig,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "BusinessDay FX Website",
    description:
      "This is a FX Exchange, market-data and market news website, a subsidiary of Bussiness Day Nigeria.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/Juadebfm/bdfx.git",
    demo: "bdfx-b6kl.vercel.app/",
    image: "/projects/bsd.png",
    available: true,
  },
  {
    id: 1,
    name: "BMT X SCFN",
    description:
      "Project built as a collaborative effort with friends including myself(Frontend), Yusuf Adebayo(UI/UX Designer), Martins(Backend), and Cyril(Admin Dashboard)",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/Juadebfm/bmt.git",
    demo: "https://scfn-luth-transplant.sicklecellfoundation.com/",
    image: "/projects/BMT.png",
    available: true,
  },
  {
    id: 2,
    name: "DCOSS Associates Ltd",
    description:
      "Landing page for DCOSS Associates LTD. A treasury management company",
    technologies: [SiHtml5, SiCss3, SiJavascript, SiFigma, SiFramer],
    techNames: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Figma",
      "Framer Motion",
    ],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://www.figma.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/Juadebfm/dcoss_fixed.git",
    demo: "https://dcossassociates.com/",
    image: "/projects/dc.png",
    available: true,
  },

  {
    id: 3,
    name: "Coming Soon",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: [SiZig],
    techNames: ["Zig"],
    techLinks: ["https://www.ziglang.org/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/construction.webp",
    available: false,
  },
];
