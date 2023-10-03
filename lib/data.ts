import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wheelOfMisfortune from "@/public/wheelofmisfortune.jpg";
import travlan from "@/public/travlan.png";
import MyTasks from "@/public/MyTasks.png"
import { AiFillHtml5 } from 'react-icons/ai';


// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    icon: AiFillHtml5,
  },
  
] as const;