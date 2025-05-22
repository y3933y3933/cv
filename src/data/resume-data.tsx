import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chiao-An Lin",
  initials: "Joanne",
  location: "Taipei, Taiwan",
  locationLink: "https://maps.app.goo.gl/xEAVZEACqQwGyaV77",
  about: "Frontend Developer",
  summary:
    "4 years of experience as a frontend developer, proficient in building frontend projects from scratch. Skilled in React/Next, Angular, TypeScript, and Tailwind CSS.",
  avatarUrl: "",
  personalWebsiteUrl: "https://blog-flax-five.vercel.app/",
  contact: {
    email: "y3933y3933@gmail.com",
    tel: "+886 9 1658 8526",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/y3933y3933",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamster3933/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "National Taiwan University",
      degree: "Bachelor's Degrees in Psychology",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "OneClass",
      link: "https://tutor.oneclass.com.tw/",
      badges: [],
      title: "Senior Frontend Developer",
      // logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description: [
        "Spearheaded the development of a Next.js project from inception, leveraging Tailwind CSS and Shadcn/ui to accelerate UI component creation and streamline the design process.",
        "Led the maintenance and refactoring of a React-based admin dashboard, improving performance and code maintainability.",
        "Championing the creation and maintenance of comprehensive technical documentation",
        "Mentoring junior engineers, facilitating their professional growth and skill development",
      ],
    },
    {
      company: "Duotify",
      link: "https://www.duotify.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description: [
        "Led the development of an Angular 15+ project using Nx architecture for a government fund information platform.",
        "Acted as the frontend technical liaison, collaborating with stakeholders to define specifications and assess feasibility.",
      ],
    },
    {
      company: "TPIsoftware",
      link: "https://www.tpisoftware.com/",
      badges: [],
      title: "Frontend Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description: [
        "Built internal company systems with Vue 2+.",
        "Developed a bank’s back-office system using Angular.",
        "Served as the presenter for Electron technology sharing sessions, fostering knowledge exchange within the team.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Angular",
    "Angular Material",
    "Rxjs",
    "Tailwind.css",
  ],
  projects: [
    {
      title: "OneClass Now",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind.css",
        "Shadcn/ui",
        "Swr",
        "Zod",
        "React hook form",
      ],
      description:
        "An online tutoring platform for elementary and middle school students, where users can log in/register, browse course information, and purchase courses.",
      logo: ConsultlyLogo,
      link: {
        label: "OneClass Now",
        href: "https://oneclassnow.oneclass.com.tw/",
      },
    },
    {
      title: "Fund Information Observatory",
      techStack: ["Angular", "Tailwind.css", "Highchart.js", "Nx"],
      description:
        "A government fund information system with frontend and backend functionalities. ",
      logo: MonitoLogo,
      link: {
        label: "Fund Information Observatory",
        href: "https://www.fundclear.com.tw/home",
      },
    },
    {
      title: "FundRich Official Website",
      techStack: [
        "Angular",
        "Tailwind",
        "Highchart.js",
        "Storybook",
        "Google Analytics",
      ],
      description:
        "The largest online fund trading platform in Taiwan, where users can log in/register, view fund information, fund earnings, and conduct fund transactions.",
      logo: JarockiMeLogo,
      link: {
        label: "FundRich Official Website",
        href: "https://www.fundrich.com.tw/2022OfficialWeb/",
      },
    },
  ],
} as const;
