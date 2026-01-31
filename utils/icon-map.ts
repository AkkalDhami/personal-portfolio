import type { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiJavascript,
  SiShadcnui,
  SiRedux,
  SiReactquery,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiEslint,
  SiPrettier
} from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { Code } from "lucide-react";

export type TechStack =
  | "NEXTJS"
  | "REACT"
  | "NODEJS"
  | "MONGODB"
  | "TAILWIND"
  | "TYPESCRIPT"
  | "MYSQL"
  | "POSTGRESQL"
  | "REDIS"
  | "EXPRESS"
  | "JAVASCRIPT"
  | "SHADCNUI"
  | "REACTQUERY"
  | "REDUX"
  | "GIT"
  | "GITHUB"
  | "FIGMA"
  | "POSTMAN"
  | "ESLINT"
  | "PRETTIER"
  | "NPM"
  | "VSCODE"
  | "DEFAULT";

export const TECH_ICONS: Record<TechStack, IconType> = {
  REACT: FaReact,
  NODEJS: FaNodeJs,
  MONGODB: SiMongodb,
  TAILWIND: SiTailwindcss,
  NEXTJS: SiNextdotjs,
  TYPESCRIPT: SiTypescript,
  MYSQL: SiMysql,
  POSTGRESQL: SiPostgresql,
  REDIS: SiRedis,
  EXPRESS: SiExpress,
  JAVASCRIPT: SiJavascript,
  SHADCNUI: SiShadcnui,
  REACTQUERY: SiReactquery,
  REDUX: SiRedux,
  GIT: SiGit,
  GITHUB: SiGithub,
  FIGMA: SiFigma,
  POSTMAN: SiPostman,
  ESLINT: SiEslint,
  PRETTIER: SiPrettier,
  NPM: FaNpm,
  VSCODE: VscVscode,
  DEFAULT: Code
};
