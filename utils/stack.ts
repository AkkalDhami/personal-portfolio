import { TECH_ICONS } from "./icon-map";
import { IconType } from "react-icons";

export interface IStack {
  label: string;
  value: string;
  icon: IconType;
  category: string;
}

export interface ICategory {
  title: string;
  description: string;
  stacks: IStack[];
}

export const STACKS: IStack[] = [
  {
    label: "Next.js",
    value: "nextjs",
    icon: TECH_ICONS.NEXTJS,
    category: "frontend"
  },
  {
    label: "TypeScript",
    value: "typescript",
    icon: TECH_ICONS.TYPESCRIPT,
    category: "frontend"
  },
  {
    label: "React.js",
    value: "react",
    icon: TECH_ICONS.REACT,
    category: "frontend"
  },
  {
    label: "JavaScript",
    value: "javascript",
    icon: TECH_ICONS.JAVASCRIPT,
    category: "frontend"
  },
  {
    label: "Tailwind CSS",
    value: "tailwind",
    icon: TECH_ICONS.TAILWIND,
    category: "frontend"
  },
  {
    label: "React Query",
    value: "reactquery",
    icon: TECH_ICONS.REACTQUERY,
    category: "frontend"
  },
  {
    label: "Redux Toolkit",
    value: "redux",
    icon: TECH_ICONS.REDUX,
    category: "frontend"
  },
  {
    label: "Shadcn UI",
    value: "shadcnui",
    icon: TECH_ICONS.SHADCNUI,
    category: "frontend"
  },
  {
    label: "MySQL",
    value: "mysql",
    icon: TECH_ICONS.MYSQL,
    category: "database"
  },
  {
    label: "MongoDB",
    value: "mongodb",
    icon: TECH_ICONS.MONGODB,
    category: "database"
  },
  {
    label: "PostgreSQL",
    value: "postgresql",
    icon: TECH_ICONS.POSTGRESQL,
    category: "database"
  },
  {
    label: "Redis",
    value: "redis",
    icon: TECH_ICONS.REDIS,
    category: "database"
  },
  {
    label: "Node.js",
    value: "nodejs",
    icon: TECH_ICONS.NODEJS,
    category: "backend"
  },
  {
    label: "Express",
    value: "express",
    icon: TECH_ICONS.EXPRESS,
    category: "backend"
  },
  {
    label: "Git",
    value: "git",
    icon: TECH_ICONS.GIT,
    category: "tools"
  },
  {
    label: "GitHub",
    value: "github",
    icon: TECH_ICONS.GITHUB,
    category: "tools"
  },
  {
    label: "Figma",
    value: "figma",
    icon: TECH_ICONS.FIGMA,
    category: "tools"
  },
  {
    label: "Postman",
    value: "postman",
    icon: TECH_ICONS.POSTMAN,
    category: "tools"
  },
  {
    label: "ESLint",
    value: "eslint",
    icon: TECH_ICONS.ESLINT,
    category: "tools"
  },
  {
    label: "Prettier",
    value: "prettier",
    icon: TECH_ICONS.PRETTIER,
    category: "tools"
  },
  {
    label: "NPM",
    value: "npm",
    icon: TECH_ICONS.NPM,
    category: "tools"
  },
  {
    label: "VSCode",
    value: "vscode",
    icon: TECH_ICONS.VSCODE,
    category: "tools"
  }
];

export const HOME_PAGE_STACKS = STACKS.filter(stack =>
  [
    "nextjs",
    "typescript",
    "react",
    "javascript",
    "mongodb",
    "nodejs",
    "mysql"
  ].includes(stack.value)
);

export const FRONTEND_STACKS = STACKS.filter(
  stack => stack.category === "frontend"
);

export const BACKEND_STACKS = STACKS.filter(
  stack => stack.category === "backend"
);

export const DATABASE_STACKS = STACKS.filter(
  stack => stack.category === "database"
);

export const TOOLS_STACKS = STACKS.filter(stack => stack.category === "tools");
