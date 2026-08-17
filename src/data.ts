import type { Experience, Project } from "./types";

import studyFlow from "./assets/imageProjectsFrontEnd/studyFlow.png";
import ecommerce from "./assets/imageProjectsFrontEnd/e-commerce.png"

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Estudos Independentes",
    role: "Desenvolvedor Front-End — Autodidata",
    period: "Ago 2025 — Presente",
    description:
      "Estudo independente de desenvolvimento web através de cursos, projetos práticos e desenvolvimento de aplicações reais. Foco em React, TypeScript, JavaScript, APIs, Firebase e construção de interfaces responsivas.",
  },
  {
    id: "exp-2",
    company: "UniAlfa",
    role: "Análise e Desenvolvimento de Sistemas",
    period: "Ago 2026 — Presente",
    description:
      "Graduação em Análise e Desenvolvimento de Sistemas, aprofundando conhecimentos em programação, banco de dados, engenharia de software e desenvolvimento de sistemas. Atualmente direcionando os estudos para Front-End e iniciando a preparação para Back-End com o objetivo de atuar como desenvolvedor Full Stack.",
  },
];

export const frontendProjects: Project[] = [
  {
    id: "fe-1",
    title: "StudyFlow",
    description:
      "SaaS para organização de estudos com tarefas, categorias, Pomodoro e acompanhamento de progresso.",
    longDescription:
      "Aplicação web desenvolvida para ajudar estudantes a organizar sua rotina de estudos. Possui autenticação de usuários, gerenciamento de tarefas e categorias, timer Pomodoro e cards de resumo. A aplicação utiliza React e TypeScript no Front-End e Firebase para autenticação e persistência dos dados.",
    image: studyFlow,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Vite",
    ],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/SaaS",
    liveUrl: "https://study-flow-beta-tawny.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Autenticação de usuários com Firebase",
      "Gerenciamento de tarefas e categorias",
      "Timer Pomodoro integrado",
      "Persistência de dados com Firestore",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-2",
    title: "E-commerce",
    description:
      "Aplicação de e-commerce desenvolvida para praticar construção de interfaces e gerenciamento de estado.",
    longDescription:
      "Projeto de e-commerce desenvolvido com React e TypeScript, explorando construção de interfaces, componentes reutilizáveis, organização de páginas e criação de uma experiência de compra responsiva.",
    image:ecommerce,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/E-commerce",
    liveUrl: "https://e-commerce-dusky-sigma-29.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Interface de e-commerce responsiva",
      "Componentização com React",
      "Desenvolvimento utilizando TypeScript",
      "Estilização com Tailwind CSS",
    ],
  },

  {
    id: "fe-3",
    title: "Chronos Pomodoro",
    description:
      "Aplicação de produtividade baseada na técnica Pomodoro para gerenciamento de tempo.",
    longDescription:
      "Aplicação web de produtividade baseada na técnica Pomodoro. O usuário pode controlar sessões de foco e descanso, personalizar os tempos e utilizar um sistema de gerenciamento de estado global com Context API.",
    image: "/src/assets/hero.png",
    technologies: ["React", "TypeScript", "Context API", "Vite", "CSS Modules"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/chronos-pomodoro",
    liveUrl: "https://chronos-pomodoro-pi-rust.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Timer regressivo de foco e descanso",
      "Configuração personalizada dos tempos",
      "Gerenciamento de estado com Context API",
      "Validação de regras de negócio",
      "Estrutura organizada e componentizada",
    ],
  },

  {
    id: "fe-4",
    title: "Crypto Dash",
    description: "Dashboard de criptomoedas desenvolvido com consumo de API.",
    longDescription:
      "Aplicação desenvolvida para praticar consumo de APIs e construção de dashboards com informações relacionadas ao mercado de criptomoedas.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "API REST", "Vite", "CSS"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/cripto-dash",
    liveUrl: "https://cripto-dash-wine.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Consumo de API externa",
      "Exibição dinâmica de dados",
      "Construção de dashboard",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-5",
    title: "Catálogo de Filmes",
    description: "Catálogo de filmes utilizando dados reais de uma API.",
    longDescription:
      "Aplicação de catálogo de filmes desenvolvida com React e integração com uma API externa. O projeto trabalha listagem, busca, navegação e apresentação de informações sobre filmes.",
    image: "/src/assets/hero.png",
    technologies: [
      "React",
      "JavaScript",
      "React Router DOM",
      "CSS Modules",
      "API REST",
    ],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/catalogo-de-filmes",
    liveUrl: "https://catalogo-de-filmes-smoky.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Integração com API externa",
      "Busca de filmes",
      "Navegação entre páginas",
      "Exibição dinâmica de dados",
      "Layout responsivo",
    ],
  },

  {
    id: "fe-6",
    title: "Buscador do GitHub",
    description:
      "Aplicação para pesquisar usuários do GitHub utilizando a GitHub API.",
    longDescription:
      "Aplicação Front-End desenvolvida com React e TypeScript que permite pesquisar usuários do GitHub e visualizar informações de seus perfis. O projeto foi desenvolvido para praticar consumo de APIs, tipagem, componentização e navegação.",
    image: "/src/assets/hero.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "GitHub API",
    ],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/buscador-do-github",
    liveUrl: "https://buscador-do-github.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Consumo da GitHub API",
      "Pesquisa de usuários",
      "Tratamento de dados da API",
      "Tipagem com TypeScript",
      "Navegação com React Router",
    ],
  },

  {
    id: "fe-7",
    title: "Linktree com Firebase",
    description:
      "Página de links personalizada desenvolvida com React, TypeScript e Firebase.",
    longDescription:
      "Aplicação inspirada em plataformas de agregação de links, desenvolvida para praticar React, TypeScript, Firebase e construção de interfaces responsivas.",
    image: "/src/assets/hero.png",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/linktree-firebase",
    liveUrl: "https://linktree-firebase-inky.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Integração com Firebase",
      "Desenvolvimento com TypeScript",
      "Interface responsiva",
      "Estilização com Tailwind CSS",
    ],
  },

  {
    id: "fe-8",
    title: "To-Do List com useReducer e TypeScript",
    description:
      "Gerenciador de tarefas desenvolvido para praticar useReducer e TypeScript.",
    longDescription:
      "Aplicação de lista de tarefas desenvolvida com React e TypeScript, com foco no gerenciamento de estado utilizando useReducer e na organização de uma aplicação React tipada.",
    image: "/src/assets/hero.png",
    technologies: ["React", "TypeScript", "useReducer", "Vite"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/Todo-List-com-useReducer-e-typescript",
    liveUrl: "https://todo-list-com-use-reducer-e-typescr.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Gerenciamento de estado com useReducer",
      "Tipagem utilizando TypeScript",
      "Componentização com React",
      "Organização de estado e ações",
    ],
  },

  {
    id: "fe-9",
    title: "Mini Blog",
    description:
      "Blog com autenticação e gerenciamento de publicações utilizando Firebase.",
    longDescription:
      "Aplicação de blog desenvolvida com React e Firebase. O projeto permite autenticação de usuários e gerenciamento de publicações, servindo como prática de integração entre Front-End e serviços de backend.",
    image: "/src/assets/hero.png",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Firestore",
      "React Router",
    ],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/mini-blog",
    liveUrl: "https://mini-blog-seven-phi.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Autenticação de usuários",
      "Integração com Firestore",
      "Gerenciamento de publicações",
      "Navegação com React Router",
    ],
  },

  {
    id: "fe-10",
    title: "Spotify Clone",
    description:
      "Interface inspirada no Spotify desenvolvida para praticar React e construção de interfaces.",
    longDescription:
      "Projeto de reprodução de interface inspirado no Spotify, desenvolvido durante os estudos de React para praticar componentização, estruturação de layouts e desenvolvimento de interfaces modernas.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/spotify-clone",
    liveUrl: "https://spotify-clone-psi-ten.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Construção de interface inspirada no Spotify",
      "Componentização com React",
      "Organização de layout",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-11",
    title: "Cronômetro",
    description:
      "Aplicação de cronômetro desenvolvida para praticar lógica e controle de tempo.",
    longDescription:
      "Projeto desenvolvido durante os estudos de JavaScript e React para praticar lógica de programação, gerenciamento de estado e controle de tempo.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/timer",
    liveUrl: "https://cron-metro-murex.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Controle de tempo",
      "Gerenciamento de estado",
      "Interação com a interface",
      "Prática de lógica de programação",
    ],
  },

  {
    id: "fe-12",
    title: "Secret Word",
    description:
      "Jogo de palavras desenvolvido com React e refatorado utilizando Context API e React Router.",
    longDescription:
      "Jogo de palavras desenvolvido durante os estudos de React. O projeto foi posteriormente refatorado para aplicar conceitos de Context API e roteamento, permitindo praticar gerenciamento de estado e organização de aplicações React.",
    image: "/src/assets/hero.png",
    technologies: [
      "React",
      "JavaScript",
      "Context API",
      "React Router",
      "Vite",
    ],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/secret-word",
    liveUrl: "https://secret-word-iota-woad.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Lógica de jogo",
      "Refatoração utilizando Context API",
      "Navegação com React Router",
      "Componentização",
    ],
  },

  {
    id: "fe-13",
    title: "Jogo da Velha",
    description:
      "Jogo da Velha desenvolvido em React com diferentes níveis de dificuldade.",
    longDescription:
      "Jogo da Velha desenvolvido para praticar lógica de programação, gerenciamento de estado e organização de componentes. O projeto possui diferentes níveis de dificuldade e inteligência artificial.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/jogo-da-velha",
    liveUrl: "https://jogo-da-velha-six-fawn.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Inteligência artificial",
      "Três níveis de dificuldade",
      "Lógica de jogo",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-14",
    title: "Jogo da Forca",
    description:
      "Jogo da Forca desenvolvido com React e diferentes categorias de palavras.",
    longDescription:
      "Jogo desenvolvido durante os estudos de React para praticar lógica de programação, gerenciamento de estado e construção de interfaces interativas.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/Jogo-Da-Forca",
    liveUrl: "https://jogo-da-forca-5doc.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Sorteio de palavras",
      "Sistema de tentativas",
      "Categorias de palavras",
      "Interface interativa",
    ],
  },

  {
    id: "fe-15",
    title: "Conversor de Moedas",
    description: "Conversor de moedas desenvolvido com consumo de API.",
    longDescription:
      "Aplicação desenvolvida para praticar consumo de APIs, requisições assíncronas e manipulação de dados em uma interface React.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "API REST", "Vite", "CSS"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/conversor-de-moedas",
    liveUrl: "https://conversor-de-moedas-1pwe.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Consumo de API",
      "Conversão dinâmica de moedas",
      "Requisições assíncronas",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-16",
    title: "Calculadora de Juros Compostos",
    description:
      "Calculadora para simulação de investimentos utilizando juros compostos.",
    longDescription:
      "Aplicação desenvolvida para praticar lógica de programação, cálculos financeiros e construção de interfaces interativas.",
    image: "/src/assets/hero.png",
    technologies: [
      "React",
      "JavaScript",
      "React Router DOM",
      "React Hooks",
      "CSS",
    ],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/calculadora-de-juros-compostos",
    liveUrl: "https://calculadora-de-juros-compostos-iota.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Cálculo de juros compostos",
      "Simulação de investimentos",
      "Manipulação de dados através de formulários",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-17",
    title: "Previsão do Tempo v1",
    description:
      "Aplicação de previsão do tempo utilizando dados obtidos através de API.",
    longDescription:
      "Projeto desenvolvido para praticar integração de aplicações React com APIs externas e apresentação de informações meteorológicas em uma interface web.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "API REST", "Vite", "CSS"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/previsao-do-tempo",
    liveUrl: "https://previsao-do-tempo-one-jet.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Consumo de API externa",
      "Informações meteorológicas",
      "Requisições assíncronas",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-18",
    title: "Previsão do Tempo v2",
    description:
      "Versão evoluída de uma aplicação de previsão do tempo com recursos adicionais.",
    longDescription:
      "Segunda versão do projeto de previsão do tempo, desenvolvida para evoluir os conhecimentos adquiridos na primeira versão e trabalhar novos recursos, integração com API e experiência do usuário.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "API REST", "HTML", "CSS"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/previs-o-do-tempo-2",
    liveUrl: "https://previsao-do-tempo-2.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Integração com API de clima",
      "Busca por cidade",
      "Informações meteorológicas",
      "Evolução em relação à primeira versão",
    ],
  },

  {
    id: "fe-19",
    title: "Relógio Mundial",
    description:
      "Aplicação para visualizar horários de diferentes regiões do mundo.",
    longDescription:
      "Projeto desenvolvido para praticar manipulação de datas e horários, trabalhando com diferentes fusos horários e atualização dinâmica das informações apresentadas na interface.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/relogio-mundial",
    liveUrl: "https://relogio-mundial-wheat.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Manipulação de datas e horários",
      "Diferentes fusos horários",
      "Atualização dinâmica",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-20",
    title: "Preço Teto",
    description: "Aplicação para cálculo de preço teto de investimentos.",
    longDescription:
      "Projeto desenvolvido para praticar React, TypeScript e construção de uma aplicação baseada em cálculos financeiros. O usuário pode informar dados e utilizar a aplicação para realizar estimativas de preço teto.",
    image: "/src/assets/hero.png",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/pre-o0-teto",
    liveUrl: "https://preco-teto-eight.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Cálculos financeiros",
      "Interface interativa",
      "Desenvolvimento com TypeScript",
      "Interface responsiva",
    ],
  },

  {
    id: "fe-21",
    title: "Landing Page",
    description:
      "Landing page desenvolvida para praticar criação de interfaces modernas e responsivas.",
    longDescription:
      "Projeto desenvolvido durante os estudos de Front-End para praticar estruturação de páginas, estilização e adaptação de interfaces para diferentes tamanhos de tela.",
    image: "/src/assets/hero.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/landing-page",
    liveUrl: "https://landing-page-nine-rosy.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Design responsivo",
      "Estruturação de interface",
      "HTML semântico",
      "Estilização com CSS",
    ],
  },

  {
    id: "fe-22",
    title: "Álbum de Fotos",
    description:
      "Galeria de imagens desenvolvida para praticar construção de interfaces responsivas.",
    longDescription:
      "Projeto de galeria de fotos desenvolvido para praticar organização visual de imagens, estilização e construção de uma interface adaptável para diferentes dispositivos.",
    image: "/src/assets/hero.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/gabrielcavalcantedossantos1/album-de-fotos",
    liveUrl: "https://album-de-fotos-ruddy.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Galeria de imagens",
      "Layout responsivo",
      "Organização visual",
      "Prática de HTML, CSS e JavaScript",
    ],
  },

  {
    id: "fe-23",
    title: "Lista de Tarefas",
    description:
      "Aplicação de gerenciamento de tarefas desenvolvida para praticar React.",
    longDescription:
      "Projeto de lista de tarefas criado durante os estudos de React para praticar gerenciamento de estado, componentes e interação com o usuário.",
    image: "/src/assets/hero.png",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    githubUrl:
      "https://github.com/gabrielcavalcantedossantos1/lista-de-tarefas",
    liveUrl: "https://lista-de-tarefas-eight-nu.vercel.app/",
    status: "completed",
    year: 2026,
    highlights: [
      "Gerenciamento de tarefas",
      "Manipulação de estado",
      "Componentização com React",
      "Interface responsiva",
    ],
  },
];

export const backendProjects: Project[] = [];

export const projectsByCategory = {
  frontend: frontendProjects,
  backend: backendProjects,
} as const;

export const projectsArray = [
  {
    category: "frontend",
    projects: frontendProjects,
  },
  {
    category: "backend",
    projects: backendProjects,
  },
] as const;
