// All site content lives here. Edit this file to update the portfolio —
// no component changes needed.

export type Thumb =
  | "gpu"
  | "parts"
  | "video"
  | "chat"
  | "mail"
  | "rooms"
  | "graph"
  | "pulse"
  | "rail"
  | "label"
  | "form"
  | "ticket"
  | "call"
  | "profile"
  | "game";

export interface Project {
  title: string;
  /** Who it was built for, or where. Client names are intentionally anonymised. */
  madeAt: string;
  period: string;
  summary: string;
  /** What I personally owned. Shown on featured cards. */
  role?: string;
  tech: string[];
  link?: { href: string; label: string };
  thumb: Thumb;
  featured?: boolean;
}

export interface Role {
  title: string;
  period: string;
}

export interface Job {
  company: string;
  href?: string;
  location: string;
  period: string;
  roles: Role[];
  summary: string;
  highlights: string[];
  tech: string[];
}

export const profile = {
  name: "Manvi Sharma",
  title: "Senior Full-Stack Engineer",
  tagline:
    "I build TypeScript products end to end, from the database schema and APIs to interfaces people enjoy using.",
  location: "Bengaluru, India",
  email: "mnvsgautam9@gmail.com",
  resume: "/Manvi_Sharma_Resume.pdf",
  about: [
    "I've been shipping production software for clients since 2019, when I joined GeekyAnts as an intern and was put straight onto live client projects. Since then I've worked across the whole stack: React, Next.js and React Native on the front, Node.js and NestJS on the back, and PostgreSQL, MongoDB and Redis underneath.",
    "Today I'm a Senior Consultant at Thoughtworks, building a GPU capacity marketplace for a global leader in AI computing. Before that I led product builds at Glue Labs, owning architecture, APIs and delivery, and mentored more than 20 engineers along the way.",
    "I care about accessible, fast interfaces and backends that are easy to reason about. I'm most at home on small teams that own a product from idea to production.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/manvigautam09" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manvigautam09/" },
    { label: "Medium", href: "https://medium.com/@mnvsgautam09" },
    { label: "X", href: "https://x.com/manvigautam09" },
  ],
} as const;

export const experience: Job[] = [
  {
    company: "Thoughtworks",
    href: "https://www.thoughtworks.com",
    location: "Bengaluru",
    period: "Mar 2025 – Present",
    roles: [{ title: "Senior Consultant, Developer", period: "Mar 2025 – Present" }],
    summary:
      "Full-stack consultant on enterprise client programs, moving between frontend leadership and backend work as each team needs.",
    highlights: [
      "Building a GPU capacity marketplace for a global leader in AI computing: token-based access control for three roles, a multi-party contract workflow, and decision tools for buyers, providers and admins.",
      "Helped grow that product from an internal Thoughtworks initiative into a billable client engagement in 2026.",
      "Earlier at Thoughtworks, I was the only senior frontend developer on the India side of a B2B parts ordering platform for a Fortune 500 agricultural machinery maker, across four to five teams.",
      "Picked up Java to contribute across the stack, and mentored junior developers in React through pairing. Several still reach out for technical and career advice.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Python", "Java", "RBAC", "SigNoz", "Datadog"],
  },
  {
    company: "Glue Labs",
    href: "https://gluelabs.com",
    location: "Delhi",
    period: "Dec 2021 – Jan 2025",
    roles: [{ title: "Senior Software Engineer", period: "Dec 2021 – Jan 2025" }],
    summary:
      "Tech lead for in-house products and UI lead for client work in social learning, healthcare and data tooling.",
    highlights: [
      "Led Video Maker and the Mailer App end to end, designing the database schemas and NestJS APIs. The new data layer cut retrieval time by 40%.",
      "Led development, testing and debugging of key product features, cutting post-release bug reports by 30%.",
      "Built client web apps for a social learning platform, a heart-care analytics tool, a cancer-care hospital finder and a customised data-labelling tool.",
      "Interviewed and mentored 20+ interns, 85% of whom moved into full-time engineering roles. Co-authored the intern training program, cutting onboarding time by 40%.",
    ],
    tech: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Redux-Saga", "Apollo", "D3"],
  },
  {
    company: "GeekyAnts",
    href: "https://geekyants.com",
    location: "Bengaluru",
    period: "Feb 2019 – Dec 2021",
    roles: [
      { title: "Software Engineer", period: "Jul 2020 – Dec 2021" },
      { title: "Software Engineer Intern", period: "Feb 2019 – Jun 2020" },
    ],
    summary:
      "Joined as an intern and, after a three-month training program, worked full time on live client projects while finishing my degree.",
    highlights: [
      "Built the graphical editor of a cloud engineering tool that defines streaming calculations and deploys them to an edge engine.",
      "Built a reporting dashboard for railway axle-box readings, designing its UI component library.",
      "Shipped a React Native movie-booking app and a Vue + Agora video-calling app, and helped train the next intern batch.",
    ],
    tech: ["React", "Redux-Saga", "TypeScript", "React Native", "Vue", "Fabric.js", "Firebase", "Agora"],
  },
];

export const projects: Project[] = [
  {
    title: "GPU capacity marketplace",
    madeAt: "Thoughtworks, for a global leader in AI computing",
    period: "2026 – now",
    summary:
      "A marketplace where certified cloud partners list GPU capacity by platform, quantity and data-centre location, and enterprise buyers find and contract it. Buyers can request capacity from several providers at once; providers accept or counter-offer, and either side can renegotiate or cancel.",
    role: "Token-based access control for three roles, the multi-stage contract workflow with counterparties hidden until acceptance to prevent bias, a global map view, provider comparison graphs, and an admin review queue that approves capacity before it goes live.",
    tech: ["Next.js", "TypeScript", "Python", "RBAC", "SigNoz"],
    thumb: "gpu",
    featured: true,
  },
  {
    title: "Video Maker",
    madeAt: "Glue Labs",
    period: "",
    summary:
      "An internal product that turns animated web scenes into videos. Puppeteer captures each frame and FFmpeg stitches them together at a steady frame rate.",
    role: "Tech lead. Designed the schema and every NestJS API, cutting data retrieval time by 40%, and guided the frontend team.",
    tech: ["Next.js", "NestJS", "PixiJS", "Puppeteer", "FFmpeg", "TypeScript"],
    thumb: "video",
    featured: true,
  },
  {
    title: "Dashgen",
    madeAt: "Contributor",
    period: "",
    summary:
      "An AI assistant hub where people chat with several leading models from one place and keep their API keys secure.",
    role: "Improved the chat interface and its accessibility.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "LangChain", "Zustand"],
    link: { href: "https://dashgen.in", label: "dashgen.in" },
    thumb: "chat",
    featured: true,
  },
  {
    title: "B2B parts ordering platform",
    madeAt: "Thoughtworks, for a Fortune 500 agricultural machinery maker",
    period: "2025 – 2026",
    summary:
      "The platform dealers use to place bulk orders for machine parts, built across four to five delivery teams.",
    role: "Owned the inventory pages, which show available stock next to dealer requests the warehouse can't yet fill. The go-to engineer for critical frontend bugs.",
    tech: ["React", "Java", "Datadog"],
    thumb: "parts",
    featured: true,
  },
  {
    title: "Mailer App",
    madeAt: "Glue Labs",
    period: "",
    summary:
      "An email deployment system that replaced static MJML emails with dynamic templates people can edit themselves.",
    role: "Designed the backend architecture and APIs, and the React Email template system.",
    tech: ["Next.js", "NestJS", "React Email", "TypeScript"],
    thumb: "mail",
    featured: true,
  },
  {
    title: "FIFO",
    madeAt: "Glue Labs",
    period: "",
    summary:
      "A social learning platform where people post what they've learned, host live audio and video rooms, and chat in shared spaces and lounges.",
    role: "Built core web features, including live sessions with Agora.",
    tech: ["React", "Redux-Saga", "Apollo Client", "Material UI", "Agora"],
    thumb: "rooms",
    featured: true,
  },
  {
    title: "Heart-care analytics",
    madeAt: "Glue Labs, client project",
    period: "",
    summary:
      "Doctors log patient data daily, and patients see their progress and treatment updates as charts.",
    role: "Built the web app and its dashboards.",
    tech: ["Next.js", "React Query", "Recharts", "Superset"],
    thumb: "pulse",
    featured: true,
  },
  {
    title: "Streaming calculation editor",
    madeAt: "GeekyAnts, client project",
    period: "",
    summary:
      "A cloud tool for defining functions, models and calculations in a graphical editor, then deploying them to an edge calculation engine.",
    role: "Built the drag-and-drop graphical editor.",
    tech: ["React", "Redux-Saga", "TypeScript", "Fabric.js", "React DnD"],
    thumb: "graph",
    featured: true,
  },
  {
    title: "FIFO Admin",
    madeAt: "Glue Labs",
    period: "",
    summary: "An analytics and moderation portal for FIFO, showing user activity over time and letting admins limit misuse.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "GraphQL"],
    thumb: "pulse",
  },
  {
    title: "Data-labelling tool",
    madeAt: "Glue Labs, client project",
    period: "",
    summary: "A customised Label Studio for labelling audio, text, images, video and time series to train ML models.",
    tech: ["React", "MobX", "D3", "Python", "Django"],
    thumb: "label",
  },
  {
    title: "Cancer-care hospital finder",
    madeAt: "Glue Labs, client project",
    period: "",
    summary: "Patients fill in their treatment history and see nearby hospitals and clinics that fit. Certified in Unqork for this project.",
    tech: ["Unqork"],
    thumb: "form",
  },
  {
    title: "Railway axle-box dashboard",
    madeAt: "GeekyAnts, client project",
    period: "",
    summary: "Reports and analysis of axle-box readings across trains, filtered and organised for maintenance teams.",
    tech: ["React", "Redux-Saga", "SCSS", "Reactstrap"],
    thumb: "rail",
  },
  {
    title: "BookMyShow clone",
    madeAt: "GeekyAnts",
    period: "",
    summary: "A movie-booking app with Google, Facebook and phone sign-in. Presented at the company demo day.",
    tech: ["React Native", "Redux-Thunk", "Firebase"],
    thumb: "ticket",
  },
  {
    title: "Video calling app",
    madeAt: "GeekyAnts",
    period: "",
    summary: "Create or join a room and talk with friends, with audio and video controls.",
    tech: ["Vue", "Agora"],
    thumb: "call",
  },
  {
    title: "GitHub profile viewer",
    madeAt: "Side project",
    period: "",
    summary: "Look up any public GitHub profile. Built to try out Recoil state management.",
    tech: ["React", "Recoil", "GitHub API"],
    thumb: "profile",
  },
  {
    title: "Snake game",
    madeAt: "Side project",
    period: "",
    summary: "The classic snake game for mobile.",
    tech: ["React Native", "Expo"],
    link: { href: "https://github.com/manvigautam09/SnakeGameExpo", label: "Source on GitHub" },
    thumb: "game",
  },
  {
    title: "PixiJS demo",
    madeAt: "Side project",
    period: "",
    summary: "Experiments with PixiJS rendering.",
    tech: ["PixiJS", "JavaScript"],
    link: { href: "https://github.com/manvigautam09/pixi-demo-app", label: "Source on GitHub" },
    thumb: "video",
  },
];

export const stack: { group: string; note: string; items: string[] }[] = [
  {
    group: "Languages",
    note: "TypeScript everywhere I can; Java and Python on client backends.",
    items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS", "Python", "Java"],
  },
  {
    group: "Frontend",
    note: "Seven years of React, from client dashboards to graphical editors.",
    items: ["React", "Next.js", "React Native", "Vue", "Tailwind CSS", "Redux", "Zustand", "React Query", "Apollo Client", "D3", "Recharts"],
  },
  {
    group: "Backend",
    note: "API and schema design for products I've led.",
    items: ["Node.js", "NestJS", "Express", "REST", "GraphQL", "Role-based access control", "Puppeteer", "FFmpeg"],
  },
  {
    group: "Data",
    note: "Relational first, with caching where it pays off.",
    items: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Firebase"],
  },
  {
    group: "Tooling and observability",
    note: "What I use to ship and keep things running.",
    items: ["Git", "Jest", "Datadog", "SigNoz", "GitHub Copilot", "Heroku", "Jira"],
  },
];
