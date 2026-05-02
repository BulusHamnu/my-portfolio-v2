import { type LucideIcon } from "lucide-react";
import {
  Html5,
  Javascript,
  Typescript,
  Python,
  Nodedotjs,
  Expressdotjs,
  React,
  Flask,
  TailwindCss,
  Mongodb,
  // Postgresql,
  Redis,
  Supabase,
  Github,
  Linux,
  Figma,
  //   AzureArcPostgresql,
} from "@thesvg/react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const languages: Skill[] = [
  {
    name: "JavaScript",
    icon: Javascript,
  },
  {
    name: "TypeScript",
    icon: Typescript,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "HTML+CSS",
    icon: Html5,
  },
];

export const frameworks: Skill[] = [
  {
    name: "NodeJs",
    icon: Nodedotjs,
  },
  {
    name: "ExpressJS",
    icon: Expressdotjs,
  },
  {
    name: "Flask.py",
    icon: Flask,
  },
  {
    name: "ReactJS",
    icon: React,
  },
  {
    name: "TailWind",
    icon: TailwindCss,
  },
];

export const databases: Skill[] = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Redis",
    icon: Redis,
  },
  //   {
  //     name: "PostgreSQL",
  //     icon: AzureArcPostgresql,
  //   },
];

export const tools: Skill[] = [
  {
    name: "Supabase",
    icon: Supabase,
  },
  {
    name: "Git+GitHub",
    icon: Github,
  },
  {
    name: "Linus",
    icon: Linux,
  },
  {
    name: "Figma",
    icon: Figma,
  },
];
