import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wheelOfMisfortune from "@/public/wheelofmisfortune.jpg";
import travlan from "@/public/travlan.png";
import MyTasks from "@/public/MyTasks.png"
import { SiCss3, SiNextdotjs, SiDart, SiKotlin, SiLinux, SiWindows11, SiC, SiCplusplus } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact, BiLogoPhp, BiLogoPython, BiLogoGithub, BiLogoHtml5 } from 'react-icons/bi';




export const links = [
  {
    name: "Acceuil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Licence en Systèmes d'informations",
    location: "Université Abderrahmane Mira, Bejaia, Algerie",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Master en Ingenierie du logiciel",
    location: "Université des sciences et de la technologie Houari Boumediene, Bab Ezzouar, Algerie",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Wheel Of Misfortune",
    description:
      "Application Android pour créer et faire tourner des roues personnalisables pour prendre des décisions aléatoires.",
    tags: ["Android Studio", "Kotlin", "SQLite", "Figma"],
    imageUrl: wheelOfMisfortune,
    type: "portrait",
    githubUrl: "https://github.com/RacimFethallah/Wheel-of-misfortune",
  },
  {
    title: "Travlan",
    description:
      "Application web pour la planification de voyages en ligne.",
    tags: ["Html", "Css", "JavaScript", "PHP", "MariaDB", "PHPMyAdmin"],
    imageUrl: travlan,
    type: "landscape",
    githubUrl: "https://github.com/RacimFethallah/Travlan",
  },
  {
    title: "MyTasks",
    description:
      "Application web TODO List minimaliste.",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: MyTasks,
    type: "landscape",
    githubUrl: "https://github.com/RacimFethallah/MyTasks",
  },
  

] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: BiLogoHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    name: "React Native",
    icon: BiLogoReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "PHP",
    icon: BiLogoPhp,
  },
  {
    name: "Python",
    icon: BiLogoPython,
  },
  {
    name: "C",
    icon: SiC,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
  },
  {
    name: "Git",
    icon: BiLogoGithub,
  },
  {
    name: "GNU/Linux",
    icon: SiLinux,
  },
  {
    name: "Windows",
    icon: SiWindows11,
  },
  
  
] as const;