# Estructura del Portfolio

## Arquitectura de Carpetas

```
portfolio-web/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── CLAUDE.md
├── doc/
│   ├── STRUCTURE.md          # Este archivo
│   ├── DESIGN.md             # Sistema de diseño y UI
│   └── CONTENT.md            # Contenido y copy del sitio
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── fonts/
├── src/
│   ├── assets/
│   │   └── images/           # Imágenes optimizadas por Astro
│   ├── components/
│   │   ├── ui/               # Primitivos UI reutilizables (Button, Card, Badge, etc.)
│   │   ├── layout/           # Header, Footer, Navigation, MobileMenu
│   │   ├── sections/         # Secciones de página (Hero, About, Projects, Skills, Contact)
│   │   └── vue/              # Componentes Vue interactivos (islands)
│   ├── content/
│   │   ├── config.ts         # Content Collections schemas (Zod)
│   │   └── projects/         # Archivos MDX de cada proyecto
│   ├── data/
│   │   ├── skills.ts         # Stack tecnológico categorizado
│   │   ├── experience.ts     # Timeline profesional
│   │   └── site.ts           # Metadata del sitio
│   ├── i18n/
│   │   ├── ui.ts             # Traducciones de UI
│   │   ├── utils.ts          # Helpers de i18n
│   │   └── locales/
│   │       ├── es.json
│   │       └── en.json
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Layout raíz (head, SEO, scripts)
│   │   └── ProjectLayout.astro # Layout para detalle de proyecto
│   ├── middleware/
│   │   └── index.ts          # i18n redirect, security headers
│   ├── pages/
│   │   ├── index.astro       # Landing page principal
│   │   ├── projects/
│   │   │   ├── index.astro   # Grid de proyectos
│   │   │   └── [slug].astro  # Detalle de proyecto (Content Collection)
│   │   ├── about.astro       # Sobre mí + timeline
│   │   └── contact.astro     # Formulario de contacto (Astro Actions)
│   ├── styles/
│   │   └── global.css        # Tailwind directives + custom properties
│   ├── utils/
│   │   ├── seo.ts            # Generador de meta tags y JSON-LD
│   │   └── animations.ts     # Config de View Transitions
│   └── actions/
│       └── contact.ts        # Astro Action para formulario de contacto
└── .vscode/
    └── settings.json
```

## Páginas y Rutas

| Ruta | Archivo | Rendering | Descripción |
|------|---------|-----------|-------------|
| `/` | `index.astro` | Static (SSG) | Landing page — Hero + secciones principales |
| `/projects` | `projects/index.astro` | Static (SSG) | Grid filtrable de proyectos |
| `/projects/[slug]` | `projects/[slug].astro` | Static (SSG) | Detalle de proyecto desde Content Collection |
| `/about` | `about.astro` | Static (SSG) | Perfil, timeline, competencias |
| `/contact` | `contact.astro` | Hybrid (SSR action) | Formulario con Astro Actions |

## Secciones de la Landing (`index.astro`)

### 1. Hero
- Nombre: **Victor**
- Título: **Full-Stack Developer & Software Architect**
- Tagline: _"Diseño y construyo soluciones escalables — desde la arquitectura hasta producción"_
- CTA primario: "Ver Proyectos" → `/projects`
- CTA secundario: "Contactar" → `/contact`
- Fondo: patrón geométrico sutil o gradiente animado con CSS

### 2. Sobre Mí (resumen)
- Párrafo corto (3-4 líneas) del perfil profesional
- Enfoque en: arquitecturas escalables, fullstack, producción real
- Link a "Leer más" → `/about`

### 3. Stack Tecnológico
- Grid visual con iconos/logos de cada tecnología
- Agrupado por categorías:
  - **Backend:** Laravel, Node.js, Express, FastAPI, Supabase
  - **Frontend:** Astro, Vue.js, React, Tailwind CSS
  - **Mobile:** React Native, Expo, NativeWind
  - **Bases de Datos:** PostgreSQL, MongoDB, Redis, Supabase
  - **DevOps:** Docker, Nginx, GitHub Actions, Cloudflare, AWS S3
  - **IA & Automatización:** OpenAI, Groq, LangChain, n8n
  - **Tiempo Real:** Socket.IO, WebSockets, Supabase Realtime

### 4. Proyectos Destacados
- 3-4 proyectos hero en cards grandes
- Cada card muestra: stack badges, descripción de arquitectura, tipo (Web/Mobile/Full-Stack)
- CTA: "Ver todos" → `/projects`

### 5. Arquitectura & Patrones
- Sección que demuestra las competencias de arquitectura:
  - Diagramas simplificados de arquitecturas implementadas
  - Patrones usados: MVC, Repository, Service Layer, Event-Driven, CQRS
  - Decisiones técnicas reales tomadas en proyectos

### 6. Contacto (resumen)
- Mini formulario o CTA directo
- Links a GitHub, LinkedIn, email

## Proyectos — Content Collection

Cada proyecto se define como MDX en `src/content/projects/` con este schema:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                    // Nombre orientado al stack, no al producto
    subtitle: z.string(),                 // Descripción corta
    type: z.enum(['web', 'mobile', 'fullstack']),
    featured: z.boolean().default(false),
    order: z.number(),
    stack: z.array(z.string()),           // Tags de tecnologías
    architecture: z.string(),             // Patrón arquitectónico principal
    highlights: z.array(z.string()),      // Logros técnicos clave
    image: z.string().optional(),         // Screenshot o diagrama
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
```

### Mapeo de Proyectos Reales → Portfolio

| Proyecto Real | Título en Portfolio | Tipo | Stack Principal |
|---|---|---|---|
| FitCoach v2 | Plataforma Fitness con IA | Mobile | Expo, React Native, Supabase, Zustand, n8n, Groq AI |
| Voolty (app + backend + web) | Ecosistema Cashback Multi-plataforma | Full-Stack | Laravel 12, Filament 4, Expo, PostgreSQL, Redis, Docker, AWS S3 |
| Consultas El Universal | Portal de Servicios Ciudadanos (120+ páginas) | Web | Astro SSR/SSG, Vue.js 3, Chart.js, Cloudflare, SEO |
| Loterías (back + front + radio fórmula) | Plataforma de Resultados en Tiempo Real | Full-Stack | Laravel 12, Astro, Vue.js 3, n8n, White-label |
| Plataforma Freelancer | Marketplace con Pagos Crypto y Chat RT | Full-Stack | FastAPI, Astro, React, PostgreSQL, Socket.IO, Redis, Docker |
| Hub Descuentos (app + web) | Plataforma de Ofertas Mobile + Web | Full-Stack | Expo, Astro, Vue.js 3, Tailwind CSS |
| Horóscopo (back + site) | Content Platform con IA Generativa | Full-Stack | Laravel 12, Astro, OpenAI, Gemini AI, Filament |
| Tech Assessment | Dashboard Empresarial MERN | Full-Stack | React, Express, MongoDB, MUI, Redux, PDF Generation |

## Features de Astro Utilizadas

### View Transitions
- Transiciones suaves entre todas las páginas
- `transition:name` en elementos que persisten (header, logos de tech)
- `transition:animate` personalizado por sección
- Fallback graceful para navegadores sin soporte

### Content Collections
- Proyectos tipados con Zod
- Queries type-safe con `getCollection()`
- MDX para contenido rico en detalle de proyecto

### Server Islands
- Componentes dinámicos:
  - Contador de visitas (si se implementa)
  - Estado de disponibilidad ("Disponible para proyectos")
  - Últimos commits de GitHub

### Astro Actions
- Formulario de contacto con validación server-side
- Rate limiting en middleware
- Respuesta type-safe

### Client Directives
- `client:visible` — animaciones y gráficos que aparecen al hacer scroll
- `client:idle` — menú mobile, theme switcher
- `client:media="(max-width: 768px)"` — componentes solo mobile

### Image Optimization
- Todas las imágenes via `<Image />` de `astro:assets`
- Formatos WebP/AVIF automáticos
- Lazy loading nativo
- Aspect ratio definido para evitar CLS

### Prefetching
- `prefetch` en hover para links de navegación
- `prefetch` en viewport para cards de proyectos visibles

### i18n
- Routing con middleware
- Detección de idioma del navegador
- Contenido traducido via JSON locales
- URL canónicas con hreflang
