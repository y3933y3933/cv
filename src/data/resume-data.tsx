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
    "I’m a software developer with 4 years of frontend experience, proficient in JavaScript, TypeScript, and frameworks like React and Angular. \n\nRecently, I’ve expanded into backend development using TypeScript, Express.js, Drizzle ORM, PostgreSQL, and am learning Go.",
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
      company: "Performics",
      link: "https://taiwan.publicisgroupe.com",
      badges: [],
      title: "Frontend Developer",
      start: "2024",
      end: "2024",
      description: [
        "Developed automation scripts using Google Apps Script to integrate Google Analytics data with internal tools.",
      ],
    },
    {
      company: "OneClass",
      link: "https://tutor.oneclass.com.tw/",
      badges: [],
      title: "Senior Frontend Developer",
      // logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description: [
        "Led the development of a Next.js project, leveraging Tailwind CSS and Shadcn/ui to accelerate UI component creation and streamline design processes.",
        "Maintained and refactored a React-based admin dashboard, improving performance and code maintainability.",
        "Created and maintained comprehensive technical documentation for the team.",
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
    "Go",
    "PostgreSQL",
    "Express",
    "Gin",
    "React",
    "Angular",
    "Next",
    "Angular Material",
    "Tailwind.css",
    "Shadcn/ui",
    "Rxjs",
    "Tanstack Query",
  ],
  projects: [
    {
      title: "Todo API",
      techStack: [
        "TypeScript",
        "Express.js",
        "Drizzle ORM",
        "PostgreSQL",
        "JWT Authentication",
      ],
      description:
        "A backend API service for managing todo items, supporting CRUD operations. The service includes secure user authentication with JWT and uses PostgreSQL for data storage.",
      link: {
        label: "Todo API Repository",
        href: "https://github.com/y3933y3933/todo-api-ts", // Replace with your actual repository link
      },
    },
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
