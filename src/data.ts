import type { Project } from './types'

export const frontendProjects: Project[] = [
  {
    id: 'fe-1',
    title: 'Dashboard Analytics',
    description: 'Painel interativo com gráficos em tempo real e filtros avançados.',
    longDescription:
      'Dashboard completo para visualização de métricas de negócio. Inclui gráficos responsivos, exportação de relatórios em PDF e tema claro/escuro persistente.',
    image: '/src/assets/hero.png',
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seu-usuario/dashboard-analytics',
    liveUrl: 'https://dashboard-exemplo.vercel.app',
    status: 'completed',
    year: 2025,
    highlights: [
      'Gráficos interativos com drill-down por período',
      'Lazy loading de módulos para performance',
      'Design system reutilizável com tokens CSS',
    ],
  },
  {
    id: 'fe-2',
    title: 'E-commerce UI',
    description: 'Loja virtual com carrinho, checkout e catálogo de produtos.',
    longDescription:
      'Interface de e-commerce moderna com fluxo de compra otimizado, busca com debounce, filtros por categoria e animações suaves entre páginas.',
    image: '/src/assets/hero.png',
    technologies: ['React', 'TypeScript', 'Zustand', 'CSS Modules'],
    githubUrl: 'https://github.com/seu-usuario/ecommerce-ui',
    liveUrl: 'https://loja-exemplo.vercel.app',
    status: 'completed',
    year: 2024,
    highlights: [
      'Estado global leve com Zustand',
      'Skeleton loading em todas as listagens',
      'Layout responsivo mobile-first',
    ],
  },
  {
    id: 'fe-3',
    title: 'Task Manager Pro',
    description: 'Gerenciador de tarefas com drag-and-drop e colaboração em equipe.',
    longDescription:
      'Aplicação estilo Kanban com colunas personalizáveis, arrastar e soltar tarefas, etiquetas coloridas e modo de visualização em lista ou board.',
    image: '/src/assets/hero.png',
    technologies: ['React', 'TypeScript', 'dnd-kit', 'Framer Motion'],
    githubUrl: 'https://github.com/seu-usuario/task-manager',
    status: 'in-progress',
    year: 2026,
    highlights: [
      'Drag-and-drop acessível com dnd-kit',
      'Animações fluidas entre estados',
      'Persistência local com IndexedDB',
    ],
  },
  {
    id: 'fe-4',
    title: 'Portfolio Generator',
    description: 'Gerador de portfólios a partir de templates configuráveis.',
    longDescription:
      'Ferramenta que permite criar portfólios personalizados escolhendo templates, cores e seções. Preview em tempo real e exportação estática.',
    image: '/src/assets/hero.png',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Variables'],
    githubUrl: 'https://github.com/seu-usuario/portfolio-generator',
    liveUrl: 'https://portfolio-gen.vercel.app',
    status: 'completed',
    year: 2024,
    highlights: [
      'Preview ao vivo das alterações',
      '3 templates distintos prontos para uso',
      'Exportação como site estático',
    ],
  },
]

export const backendProjects: Project[] = [
  {
    id: 'be-1',
    title: 'Auth API',
    description: 'API de autenticação com JWT, refresh tokens e controle de roles.',
    longDescription:
      'Serviço RESTful completo para autenticação de usuários. Implementa registro, login, refresh token rotation, middleware de autorização por roles e rate limiting.',
    image: '/src/assets/hero.png',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/seu-usuario/auth-api',
    status: 'completed',
    year: 2025,
    highlights: [
      'Refresh token rotation com blacklist',
      'Validação com Zod em todas as rotas',
      'Documentação Swagger/OpenAPI',
    ],
  },
  {
    id: 'be-2',
    title: 'Blog CMS API',
    description: 'Headless CMS para gerenciamento de posts, categorias e mídia.',
    longDescription:
      'API REST para um CMS de blog com CRUD de posts, upload de imagens, categorias aninhadas, paginação cursor-based e busca full-text.',
    image: '/src/assets/hero.png',
    technologies: ['Node.js', 'Fastify', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/seu-usuario/blog-cms-api',
    status: 'completed',
    year: 2024,
    highlights: [
      'Upload de mídia para S3 com URLs assinadas',
      'Paginação eficiente com cursor',
      'Cache de queries frequentes com Redis',
    ],
  },
  {
    id: 'be-3',
    title: 'Payment Gateway',
    description: 'Integração com gateways de pagamento e webhooks de confirmação.',
    longDescription:
      'Microsserviço para processamento de pagamentos com suporte a múltiplos provedores, filas de retry para webhooks e logs estruturados para auditoria.',
    image: '/src/assets/hero.png',
    technologies: ['Node.js', 'Express', 'Stripe', 'BullMQ', 'PostgreSQL'],
    githubUrl: 'https://github.com/seu-usuario/payment-gateway',
    status: 'in-progress',
    year: 2026,
    highlights: [
      'Webhooks com retry exponencial',
      'Idempotência em todas as transações',
      'Logs estruturados com correlation ID',
    ],
  },
  {
    id: 'be-4',
    title: 'Real-time Chat Server',
    description: 'Servidor WebSocket para chat em tempo real com salas e presença.',
    longDescription:
      'Backend de chat em tempo real usando WebSockets. Suporta salas privadas e públicas, indicador de digitação, histórico de mensagens e status online/offline.',
    image: '/src/assets/hero.png',
    technologies: ['Node.js', 'Socket.io', 'Redis', 'MongoDB'],
    githubUrl: 'https://github.com/seu-usuario/chat-server',
    status: 'completed',
    year: 2024,
    highlights: [
      'Escalabilidade horizontal com Redis adapter',
      'Presença de usuários em tempo real',
      'Histórico paginado de mensagens',
    ],
  },
]

export const projectsByCategory = {
  frontend: frontendProjects,
  backend: backendProjects,
} as const

export const projectsArray = [
  { category: 'frontend', projects: frontendProjects },
  { category: 'backend', projects: backendProjects },
] as const


