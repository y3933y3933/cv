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
  name: "林蕎安",
  initials: "Joanne",
  location: "台北市, 臺灣",
  locationLink: "https://maps.app.goo.gl/xEAVZEACqQwGyaV77",
  about: "前端工程師，文件寫手與效率追求者",
  summary:
    "擔任前端工程師 4 年，擁有從 0 到 1 建置前端專案經驗，熟悉React/Next、Angular、TypeScript、Tailwind CSS。",
  avatarUrl: "",
  personalWebsiteUrl: "https://y3933y3933.github.io/",
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
      school: "國立臺灣大學 National Taiwan University",
      degree: "心理系學士 Bachelor's Degrees in Psychology",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "萬通教育 OneClass",
      link: "https://tutor.oneclass.com.tw/",
      badges: [],
      title: "Senior Frontend Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "．從 0 到 1 建置Next專案，開發 to C 產品頁面，導入Tailwind CSS、Zod、Shadcn/ui等技術。\n．推動團隊撰寫工程技術文件、主動分享技術新知與學習資源、擔任Code Review角色。",
    },
    {
      company: "多奇數位 Duotify",
      link: "https://www.duotify.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "．從 0 到 1 建置Angular專案，開發政府基金資訊前後台，\n．擔任前端技術窗口，與客戶、設計、後端廠商協作，開發基富通前台頁面。",
    },
    {
      company: "昕力資訊 TPIsoftware",
      link: "https://www.tpisoftware.com/",
      badges: [],
      title: "Frontend Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
        "．使用 Angular 開發銀行後台系統\n．Vue2+開發公司內部系統。\n．舉辦Electron技術分享會。",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Angular",
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
      description: "國中小線上家教課程介紹與購買平台",
      logo: ConsultlyLogo,
      link: {
        label: "OneClass Now",
        href: "https://oneclassnow.oneclass.com.tw/",
      },
    },
    {
      title: "基金資訊觀測站",
      techStack: ["Angular", "Tailwind.css", "Highchart.js", "Nx"],
      description: "政府基金資訊前台",
      logo: MonitoLogo,
      link: {
        label: "基金資訊觀測站",
        href: "https://www.fundclear.com.tw/home",
      },
    },
    {
      title: "基富通官網",
      techStack: [
        "Angular",
        "Tailwind",
        "Highchart.js",
        "Storybook",
        "Google Analytics",
      ],
      description: "全台最大專營網路基金交易平台",
      logo: JarockiMeLogo,
      link: {
        label: "基富通官網",
        href: "https://www.fundrich.com.tw/2022OfficialWeb/",
      },
    },
  ],
} as const;
