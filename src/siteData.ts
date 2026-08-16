import type { Experience, PersonalInfo, Skill } from "./types";
import {
  experiences as portfolioExperiences,
  frontendProjects,
  backendProjects,
} from "./data";

export const personalInfo: PersonalInfo = {
  name: "Gabriel Cavalcante dos Santos",
  role: "Desenvolvedor Front-End",
  tagline:
    "Desenvolvedor Front-End em evolução, com o objetivo de me tornar Full Stack.",
  bio: "Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-End em formação. Tenho experiência prática desenvolvendo projetos com React, TypeScript, JavaScript e Tailwind CSS. Gosto de transformar ideias em aplicações reais, criando interfaces modernas, responsivas e funcionais. Atualmente, meu foco está no desenvolvimento Front-End, enquanto estudo Back-End para ampliar minhas habilidades e me tornar um desenvolvedor Full Stack.",
  location: "Goianira, Goiás, Brasil",
  email: "gabrielcavalcantedossantos1@gmail.com",
  availableForWork: true,

  social: [
    {
      label: "GitHub",
      url: "https://github.com/gabrielcavalcantedossantos1",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gabrielc-dev/",
      icon: "linkedin",
    },
    {
      label: "E-mail",
      url: "mailto:gabrielcavalcantedossantos1@gmail.com",
      icon: "email",
    },
  ],
};

export const skills: Skill[] = [
  // Front-End
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Router", category: "frontend" },

  // Back-End / Estudos
  { name: "C", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Firestore", category: "backend" },
  { name: "JSON Server", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // Ferramentas
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "npm", category: "tools" },
];

export const experiences: Experience[] = portfolioExperiences;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
] as const;

const now = new Date();
const lastYear = now.getFullYear() - 1;
const studyStart = new Date(lastYear, 7, 1); // agosto do ano passado

function calculateYears(start: Date, end = new Date()) {
  let years = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < start.getDate())) {
    years--;
  }
  return years;
}

export const portfolioStats = {
  frontendProjects: frontendProjects.length,
  backendProjects: backendProjects.length,
  totalTechnologies: skills.length,
  yearsOfStudies: calculateYears(studyStart, now),
} as const;
