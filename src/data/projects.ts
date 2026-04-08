export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: 'web' | 'mobile' | 'fullstack';
  featured: boolean;
  order: number;
  stack: string[];
  architecture: string;
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'fitness-ai-platform',
    title: 'Plataforma Fitness con IA',
    subtitle: 'App móvil multiplataforma con recomendaciones generadas por IA',
    type: 'mobile',
    featured: true,
    order: 1,
    stack: ['Expo', 'React Native', 'Supabase', 'TanStack Query', 'Zustand', 'NativeWind', 'n8n', 'Groq AI'],
    architecture: 'Modular mobile-first con BaaS',
    description:
      'App móvil multiplataforma que conecta entrenadores con atletas. Arquitectura modular con Supabase como BaaS, Edge Functions serverless, planes de entrenamiento con multimedia, logbook, calendario, notificaciones push y recomendaciones generadas por IA con Groq/Llama 3.3 70B.',
    highlights: [
      'Integración de IA generativa para recomendaciones personalizadas',
      'Edge Functions serverless para lógica de negocio',
      'Automatización de workflows con n8n',
      'State management con Zustand + TanStack Query',
    ],
  },
  {
    slug: 'cashback-ecosystem',
    title: 'Ecosistema Cashback Multi-plataforma',
    subtitle: 'App + API + Website + Admin Panel con colas Redis y afiliados',
    type: 'fullstack',
    featured: true,
    order: 2,
    stack: ['Laravel 12', 'Filament 4', 'Expo', 'PostgreSQL', 'Redis', 'Docker', 'AWS S3', 'Cloudflare', 'GitHub Actions'],
    architecture: 'Monolito modular con colas y multi-app',
    description:
      'Ecosistema completo de 4 aplicaciones para compras con cashback. Arquitectura escalable con colas Redis, integración de redes de afiliados internacionales, sistema de retiros, programa de referidos y portal de partners.',
    highlights: [
      'Ecosistema de 4 apps: mobile, REST API, website SSR, admin panel',
      'Pipeline de colas con Redis + Laravel Horizon',
      'Integración con 4+ redes de afiliados internacionales',
      'Deploy automatizado con Docker, Nginx y GitHub Actions',
      'Auditoría completa con Laravel Auditing',
    ],
  },
  {
    slug: 'citizen-services-portal',
    title: 'Portal de Servicios Ciudadanos (120+ páginas)',
    subtitle: 'Plataforma masiva SSR/SSG con calculadoras y SEO avanzado',
    type: 'web',
    featured: true,
    order: 3,
    stack: ['Astro', 'Vue.js 3', 'Tailwind CSS', 'Chart.js', 'Cloudflare Workers', 'Sentry'],
    architecture: 'JAMstack con rendering híbrido',
    description:
      'Portal masivo con 120+ páginas: calculadoras financieras (ISR, IVA, aguinaldo), plantillas de contratos, guías de trámites, conversor de divisas. En producción en medio de alto tráfico nacional.',
    highlights: [
      '120+ páginas con rendering híbrido SSR/SSG',
      'Calculadoras financieras interactivas con precisión decimal',
      'SEO técnico: Schema.org, sitemap dinámico, meta tags',
      'Deploy en Cloudflare Workers — latencia mínima en LATAM',
    ],
  },
  {
    slug: 'realtime-results-whitelabel',
    title: 'Plataforma de Resultados en Tiempo Real',
    subtitle: 'Sistema white-label con scraping automatizado y SEO',
    type: 'fullstack',
    featured: true,
    order: 4,
    stack: ['Laravel 12', 'Filament 4', 'Astro', 'Vue.js 3', 'n8n', 'Schema.org'],
    architecture: 'Backend monolítico + Frontend desacoplado + White-label',
    description:
      'Plataforma de resultados con verificador, estadísticas históricas, calendario interactivo y generador. Arquitectura white-label con variante para Radio Fórmula.',
    highlights: [
      'Arquitectura white-label: mismo core, múltiples marcas',
      'Scraping automatizado con n8n',
      'SEO avanzado con Schema.org para rich snippets',
      'Build variants con cross-env',
    ],
  },
  {
    slug: 'freelancer-marketplace',
    title: 'Marketplace con Pagos Crypto y Chat RT',
    subtitle: 'Microservicios con WebSockets, Celery y pagos dual',
    type: 'fullstack',
    featured: false,
    order: 5,
    stack: ['FastAPI', 'Astro', 'React', 'PostgreSQL', 'Socket.IO', 'Redis', 'Docker', 'Celery'],
    architecture: 'Microservicios con WebSockets',
    description:
      'Marketplace para freelancers con pagos en crypto y fiat, chat en tiempo real con Socket.IO, sistema de reseñas y gestión de proyectos end-to-end.',
    highlights: [
      'FastAPI + SQLAlchemy async para alto rendimiento',
      'Chat en tiempo real con Socket.IO bidireccional',
      'Pagos dual: crypto (Binance Pay) + fiat (Payoneer)',
      'Task queue con Celery + Redis',
    ],
  },
  {
    slug: 'ai-content-platform',
    title: 'Content Platform con IA Generativa',
    subtitle: 'Multi-proveedor AI con generación asíncrona',
    type: 'fullstack',
    featured: false,
    order: 6,
    stack: ['Laravel 12', 'Astro', 'OpenAI', 'Gemini AI', 'Filament', 'Laravel Horizon', 'Sentry'],
    architecture: 'Laravel MVC + Frontend Astro desacoplado',
    description:
      'Plataforma de contenido generado por IA con integración multi-proveedor (OpenAI, Gemini). Panel admin con Filament y colas para generación asíncrona.',
    highlights: [
      'Integración multi-proveedor: OpenAI + Google Gemini',
      'Generación asíncrona con Laravel Horizon',
      'Panel admin completo con Filament',
      'Monitoreo con Sentry en producción',
    ],
  },
  {
    slug: 'enterprise-dashboard',
    title: 'Dashboard Empresarial',
    subtitle: 'MERN Stack con visualización de datos y PDF generation',
    type: 'fullstack',
    featured: false,
    order: 7,
    stack: ['React', 'Express', 'MongoDB', 'MUI', 'Redux Toolkit', 'Recharts'],
    architecture: 'MERN Stack',
    description:
      'Dashboard empresarial con visualización de datos, gestión de calendario, chat integrado, generación de PDFs y módulos administrativos.',
    highlights: [
      'UI rica con Material-UI + DataGrid',
      'Generación de PDFs con múltiples engines',
      'Visualización con Recharts y FullCalendar',
      'State management con Redux Toolkit',
    ],
  },
  {
    slug: 'deals-multiplatform',
    title: 'Plataforma de Ofertas Mobile + Web',
    subtitle: 'Desarrollo paralelo mobile + web con stacks complementarios',
    type: 'fullstack',
    featured: false,
    order: 8,
    stack: ['Expo', 'React Native', 'Astro', 'Vue.js 3', 'Tailwind CSS', 'Zod'],
    architecture: 'Multi-plataforma con frontend compartido',
    description:
      'App móvil y sitio web para descubrir y gestionar descuentos y ofertas. Desarrollo paralelo con Expo para nativo y Astro para SEO web.',
    highlights: [
      'Desarrollo paralelo mobile + web',
      'Astro SSR para SEO + Expo para experiencia nativa',
      'Validación con Zod, image optimization con Sharp',
    ],
  },
];
