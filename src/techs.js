import {
  FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithubAlt, FaBootstrap,
  FaNodeJs, FaReact, FaWordpress
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineFitScreen } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript, SiNextdotjs, SiNestjs, SiExpress, SiMongodb, SiPostgresql,
  SiPrisma, SiRedis, SiPuppeteer, SiSwagger, SiJsonwebtokens, SiDocker,
  SiGithubactions, SiLinux, SiNginx, SiVercel, SiPostman
} from "react-icons/si";

// Single source of truth for every technology shown on the site.
// Keys are matched case-insensitively against project `techs` entries.
export const techs = {
  html: { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
  css: { icon: FaCss3Alt, label: "CSS", color: "text-blue-500" },
  javascript: { icon: IoLogoJavascript, label: "JavaScript", color: "text-yellow-400" },
  typescript: { icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
  react: { icon: FaReact, label: "React", color: "text-cyan-400" },
  nextjs: { icon: SiNextdotjs, label: "Next.js", color: "text-gray-500 dark:text-white" },
  tailwind: { icon: RiTailwindCssFill, label: "Tailwind", color: "text-cyan-400" },
  sass: { icon: FaSass, label: "Sass", color: "text-pink-500" },
  bootstrap: { icon: FaBootstrap, label: "Bootstrap", color: "text-purple-500" },
  responsive: { icon: MdOutlineFitScreen, label: "Responsive", color: "text-green-400" },
  nodejs: { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
  nestjs: { icon: SiNestjs, label: "NestJS", color: "text-red-500" },
  express: { icon: SiExpress, label: "Express.js", color: "text-gray-400" },
  jwt: { icon: SiJsonwebtokens, label: "JWT Auth", color: "text-pink-400" },
  swagger: { icon: SiSwagger, label: "Swagger", color: "text-green-500" },
  puppeteer: { icon: SiPuppeteer, label: "Puppeteer", color: "text-emerald-500" },
  wordpress: { icon: FaWordpress, label: "WordPress", color: "text-blue-400" },
  mongodb: { icon: SiMongodb, label: "MongoDB", color: "text-green-600" },
  postgresql: { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-400" },
  prisma: { icon: SiPrisma, label: "Prisma", color: "text-indigo-400" },
  redis: { icon: SiRedis, label: "Redis", color: "text-red-600" },
  docker: { icon: SiDocker, label: "Docker", color: "text-sky-500" },
  githubactions: { icon: SiGithubactions, label: "GitHub Actions", color: "text-blue-500" },
  linux: { icon: SiLinux, label: "Linux", color: "text-yellow-500" },
  nginx: { icon: SiNginx, label: "Nginx", color: "text-green-600" },
  vercel: { icon: SiVercel, label: "Vercel", color: "text-gray-500 dark:text-white" },
  git: { icon: FaGitAlt, label: "Git", color: "text-orange-600" },
  github: { icon: FaGithubAlt, label: "GitHub", color: "text-gray-500 dark:text-white" },
  postman: { icon: SiPostman, label: "Postman", color: "text-orange-500" },
};

// Skill groups; `key` maps to translations `skills.categories.<key>`.
export const skillCategories = [
  { key: "frontend", emoji: "🎨", items: ["html", "css", "javascript", "typescript", "react", "nextjs", "tailwind", "sass", "bootstrap", "responsive"] },
  { key: "backend", emoji: "⚙️", items: ["nodejs", "nestjs", "express", "jwt", "swagger", "puppeteer", "wordpress"] },
  { key: "databases", emoji: "🗄️", items: ["postgresql", "prisma", "mongodb", "redis"] },
  { key: "devops", emoji: "🚀", items: ["docker", "githubactions", "linux", "nginx", "vercel"] },
  { key: "tools", emoji: "🛠️", items: ["git", "github", "postman"] },
];

export function findTech(name) {
  return techs[name.toLowerCase().replace(/[\s.]/g, "")];
}
