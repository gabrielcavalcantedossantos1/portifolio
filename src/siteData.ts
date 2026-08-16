import type { Experience, PersonalInfo, Skill } from './types'
import { frontendProjects, backendProjects } from './data'

export const personalInfo: PersonalInfo = {
  name: 'Gabriel',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Construo experiências digitais com foco em performance, acessibilidade e código limpo.',
  bio: 'Desenvolvedor apaixonado por transformar ideias em produtos reais. Trabalho com React, TypeScript e Node.js, sempre buscando equilíbrio entre design elegante e arquitetura sólida. Acredito em código legível, testes quando fazem sentido e entrega contínua de valor.',
  location: 'Brasil',
  email: 'seu.email@exemplo.com',
  availableForWork: true,
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/seu-usuario',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/seu-usuario',
      icon: 'linkedin',
    },
    {
      label: 'E-mail',
      url: 'mailto:seu.email@exemplo.com',
      icon: 'email',
    },
  ],
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Vite', category: 'tools' },
]

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Empresa Tech',
    role: 'Desenvolvedor Full Stack',
    period: '2024 — Presente',
    description:
      'Desenvolvimento de features end-to-end, code reviews e mentoria de desenvolvedores júnior.',
  },
  {
    id: 'exp-2',
    company: 'Startup XYZ',
    role: 'Desenvolvedor Front-end',
    period: '2022 — 2024',
    description:
      'Construção de interfaces React, integração com APIs REST e otimização de performance.',
  },
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
] as const

export const portfolioStats = {
  frontendProjects: frontendProjects.length,
  backendProjects: backendProjects.length,
  totalTechnologies: skills.length,
  yearsOfExperience: 3,
} as const
