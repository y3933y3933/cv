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
  about: "前端工程師",
  summary:
    "擔任前端工程師 4 年，擁有從 0 到 1 建置前端專案經驗，熟悉React/Next、Angular、TypeScript、Tailwind CSS。\n文件寫手與技術潮流追求者，近期愛用工具是 Cursor Code Editor 、 Supermaven 與 Arc Browser。",
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
      description: [
        "從 0 到 1 建置 Next 專案，使用 <span style='color: rgb(217 119 6); font-weight: semibold;'>Tailwind CSS</span> 與 <span style='color: rgb(217 119 6); font-weight: semibold;'> Shadcn/ui </span> 加速切版與建置 UI 元件、透過 <span style='color: rgb(217 119 6); font-weight: semibold;'>Zod</span> 與 <span style='color: rgb(217 119 6); font-weight: semibold;'>React-hook-form</span> 簡化表單檢核流程、使用 <span style='color: rgb(217 119 6); font-weight: semibold;'>SWR</span> 優化頁面資料讀取。",
        ,
        "維護與重構 <span style='color: rgb(217 119 6); font-weight: semibold;'>React</span> 後台專案、並使用 <span style='color: rgb(217 119 6); font-weight: semibold;'>React Query</span> 串接 API。",
        "推動團隊撰寫工程技術文件、主動分享技術新知與學習資源、擔任Code Review角色。",
      ],
    },
    {
      company: "多奇數位 Duotify",
      link: "https://www.duotify.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description: [
        "從 0 到 1 建置  <span style='color: rgb(217 119 6); font-weight: semibold;'>Angular 15+</span> 專案，使用 <span style='color: rgb(217 119 6); font-weight: semibold;'>Nx</span> 架構開發政府基金資訊前後台，透過 <span style='color: rgb(217 119 6); font-weight: semibold;'> Angular CDK </span>、<span style='color: rgb(217 119 6); font-weight: semibold;'> Angular Material </span> 與 <span style='color: rgb(217 119 6); font-weight: semibold;'> Tailwind CSS </span> 開發 UI 元件、採用<span style='color: rgb(217 119 6); font-weight: semibold;'> Openapi-generator </span>工具自動生成 API Service。",
        "擔任前端技術窗口，與客戶、設計、後端廠商協作，討論前後端規格與評估需求可行性，使用 <span style='color: rgb(217 119 6); font-weight: semibold;'>Angular</span> 開發基富通前台頁面，整合第三方服務，如：<span style='color: rgb(217 119 6); font-weight: semibold;'> Google Analytics </span> 服務、<span style='color: rgb(217 119 6); font-weight: semibold;'> Highchart.js </span> 開發基金圖表。",
      ],
    },
    {
      company: "昕力資訊 TPIsoftware",
      link: "https://www.tpisoftware.com/",
      badges: [],
      title: "Frontend Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description: [
        "使用 <span style='color: rgb(217 119 6); font-weight: semibold;'> Angular </span> 開發銀行後台系統",
        " <span style='color: rgb(217 119 6); font-weight: semibold;'>Vue2+</span> 開發公司內部系統。",
        "擔任 <span style='color: rgb(217 119 6); font-weight: semibold;'>Electron</span> 技術分享主講者。",
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
        "國中小線上家教課程介紹與購買平台，使用者可以登入/註冊，瀏覽課程資訊、購買課程。",
      logo: ConsultlyLogo,
      link: {
        label: "OneClass Now",
        href: "https://oneclassnow.oneclass.com.tw/",
      },
    },
    {
      title: "基金資訊觀測站",
      techStack: ["Angular", "Tailwind.css", "Highchart.js", "Nx"],
      description:
        "政府基金資訊前後台，前台可查看基金資訊，後台有發布文章、權限管理等功能。",
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
      description:
        "全台最大專營網路基金交易平台，使用者可以登入/註冊，能夠查看基金資訊、基金盈利、並進行基金交易。",
      logo: JarockiMeLogo,
      link: {
        label: "基富通官網",
        href: "https://www.fundrich.com.tw/2022OfficialWeb/",
      },
    },
  ],
} as const;
