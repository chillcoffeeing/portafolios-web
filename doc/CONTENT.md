# Contenido del Portfolio

## Datos Personales
- **Nombre:** Victor
- **Título:** Desarrollador Full-Stack & Arquitecto de Software
- **Tagline:** _"Diseño y construyo soluciones escalables — desde la arquitectura hasta producción"_
- **Disponibilidad:** Disponible para proyectos

## Perfil Profesional (About)

Desarrollador full-stack con enfoque en arquitecturas escalables, sostenibles y desacopladas. Especializado en el ecosistema Node.js/TypeScript para backend y frontend, con dominio de frameworks como Express, Fastify, NestJS y Astro.

Experiencia gestionando servidores VPS (Ubuntu/Debian), automatizaciones de flujos con n8n, y pipelines CI/CD. Capacidad demostrada para integrar IA generativa (LLMs, embeddings, agentes) en cualquier modelo de proyecto. Llevo productos completos desde el diseño de arquitectura hasta el despliegue y monitoreo en producción.

## Stack Tecnológico Completo

### Backend
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| Laravel 12 | Avanzado | Voolty, Loterías, Horóscopo |
| Node.js / Express | Avanzado | Tech Assessment, Freelancer |
| FastAPI (Python) | Intermedio-Alto | Freelancer |
| Supabase (BaaS) | Avanzado | FitCoach |

### Frontend Web
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| Astro 5 (SSR/SSG) | Avanzado | Consultas, Loterías, Voolty, Hub, Horóscopo |
| Vue.js 3 | Avanzado | Múltiples proyectos Astro |
| React 18/19 | Avanzado | Tech Assessment, Freelancer, Mobile apps |
| Tailwind CSS v4 | Avanzado | Todos |

### Mobile
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| React Native (Expo) | Avanzado | FitCoach, Voolty, Hub Descuentos |
| NativeWind | Avanzado | FitCoach |
| Zustand | Avanzado | FitCoach |

### Bases de Datos
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| PostgreSQL | Avanzado | Voolty, Loterías, Horóscopo, Freelancer |
| MongoDB | Intermedio | Tech Assessment |
| Redis | Intermedio-Alto | Voolty, Freelancer |
| Supabase | Avanzado | FitCoach |

### DevOps & Infraestructura
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| Docker | Intermedio-Alto | Voolty, Freelancer |
| Nginx | Avanzado | VPS deployments |
| GitHub Actions | Intermedio-Alto | Voolty |
| Cloudflare Pages/Workers | Avanzado | Astro projects |
| AWS S3 | Intermedio | Voolty, Loterías |
| VPS (Ubuntu/Debian) | Avanzado | Múltiples |

### IA & Automatización
| Tech | Nivel | Proyectos |
|------|-------|-----------|
| OpenAI API | Intermedio-Alto | Horóscopo |
| Groq / Llama | Intermedio-Alto | FitCoach |
| n8n | Avanzado | FitCoach, Loterías |

---

## Proyectos — Contenido Detallado

### 1. Plataforma Fitness con IA
- **Tipo:** Mobile
- **Stack:** Expo, React Native, Supabase, TanStack Query, Zustand, NativeWind, n8n, Groq AI
- **Arquitectura:** Modular mobile-first con BaaS
- **Descripción:**
  App móvil multiplataforma que conecta entrenadores con atletas. Arquitectura modular con Supabase como BaaS, Edge Functions serverless, planes de entrenamiento con multimedia (video, GIF), logbook, calendario, notificaciones push y recomendaciones generadas por IA con Groq/Llama 3.3 70B. Automatizaciones con n8n para onboarding y notificaciones.
- **Highlights:**
  - Integración de IA generativa para recomendaciones personalizadas de entrenamiento
  - Arquitectura modular: hooks, services, stores separados por dominio
  - Edge Functions serverless para lógica de negocio sin servidor propio
  - Automatización de workflows con n8n (onboarding, push notifications)
  - State management con Zustand + TanStack Query para cache inteligente

### 2. Ecosistema Cashback Multi-plataforma
- **Tipo:** Full-Stack
- **Stack:** Laravel 12, Filament 4, Expo, PostgreSQL, Redis, Docker, AWS S3, Cloudflare, VPS
- **Arquitectura:** Monolito modular con colas y multi-app
- **Descripción:**
  Ecosistema completo (app móvil + API REST + sitio web + panel admin) para compras con cashback. Arquitectura escalable con colas Redis, integración de redes de afiliados (Awin, FlexOffers, CJ, Soicos), sistema de retiros, programa de referidos y portal de partners.
- **Highlights:**
  - Ecosistema de 4 aplicaciones: mobile app, REST API, website SSR, admin panel
  - Pipeline de colas con Redis + Laravel Horizon para procesamiento asíncrono
  - Integración con 4+ redes de afiliados internacionales
  - Deploy automatizado en VPS con Docker, Nginx y GitHub Actions
  - Panel admin con Filament 4: auditoría, gestión de usuarios, reportes
  - Sistema de retiros con validaciones y estados transaccionales

### 3. Portal de Servicios Ciudadanos (120+ páginas)
- **Tipo:** Web
- **Stack:** Astro SSR/SSG, Vue.js 3, Tailwind CSS, Chart.js, Cloudflare
- **Arquitectura:** JAMstack con rendering híbrido
- **Descripción:**
  Portal masivo con 120+ páginas para ciudadanos mexicanos: calculadoras financieras (ISR, IVA, aguinaldo), plantillas de contratos, guías de trámites (CURP, RFC), conversor de divisas. En producción en sitio de alto tráfico.
- **Highlights:**
  - 120+ páginas con rendering híbrido SSR/SSG optimizado
  - Calculadoras financieras interactivas con Chart.js y Decimal.js (precisión)
  - SEO técnico avanzado: Schema.org, sitemap dinámico, meta tags por página
  - Deploy en Cloudflare Workers para latencia mínima en LATAM
  - Producción en medio de alto tráfico nacional

### 4. Plataforma de Resultados en Tiempo Real + White-label
- **Tipo:** Full-Stack
- **Stack:** Laravel 12, Filament 4, Astro, Vue.js 3, n8n, Schema.org
- **Arquitectura:** Backend monolítico + Frontend desacoplado + White-label
- **Descripción:**
  Plataforma de resultados de lotería mexicana con verificador de boletos, estadísticas históricas, calendario interactivo y generador de números. Variante white-label para Radio Fórmula.
- **Highlights:**
  - Arquitectura white-label: mismo core, múltiples marcas con build variants
  - Scraping automatizado con n8n y pipelines de datos
  - SEO avanzado con Schema.org para rich snippets en Google
  - Panel admin con Filament para gestión de contenido editorial
  - Build variants con cross-env para diferentes clientes

### 5. Marketplace con Pagos Crypto y Chat en Tiempo Real
- **Tipo:** Full-Stack
- **Stack:** FastAPI, Astro, React, PostgreSQL, Socket.IO, Redis, Docker, Celery
- **Arquitectura:** Microservicios con WebSockets
- **Descripción:**
  Marketplace para freelancers con pagos en crypto (Binance Pay) y fiat (Payoneer), chat en tiempo real con Socket.IO, sistema de reseñas y gestión de proyectos end-to-end.
- **Highlights:**
  - Backend Python con FastAPI + SQLAlchemy async para alto rendimiento
  - Chat en tiempo real con Socket.IO bidireccional
  - Integración de pagos dual: crypto (Binance Pay) + fiat (Payoneer)
  - Task queue con Celery + Redis para operaciones pesadas
  - Migraciones de BD con Alembic, JWT auth, password hashing seguro

### 6. Content Platform con IA Generativa
- **Tipo:** Full-Stack
- **Stack:** Laravel 12, Astro, OpenAI, Gemini AI, Filament, Sentry
- **Arquitectura:** Laravel MVC + Frontend Astro desacoplado
- **Descripción:**
  Plataforma de contenido generado por IA con integración de múltiples proveedores (OpenAI, Gemini). Panel admin con Filament para gestión editorial y colas para generación asíncrona.
- **Highlights:**
  - Integración multi-proveedor de IA: OpenAI + Google Gemini
  - Generación de contenido asíncrona con Laravel Horizon
  - Panel admin completo con Filament para gestión editorial
  - Monitoreo con Sentry para tracking de errores en producción

### 7. Dashboard Empresarial
- **Tipo:** Full-Stack
- **Stack:** React, Express, MongoDB, MUI, Redux Toolkit, Recharts, PDF Generation
- **Arquitectura:** MERN Stack clásico
- **Descripción:**
  Dashboard empresarial con visualización de datos, gestión de calendario, chat integrado, generación de PDFs y múltiples módulos administrativos.
- **Highlights:**
  - UI rica con Material-UI + DataGrid para tablas de datos complejas
  - Generación de PDFs con múltiples engines (jsPDF, pdfmake, react-pdf)
  - Visualización de datos con Recharts y FullCalendar
  - State management escalable con Redux Toolkit
  - Auth con JWT + bcrypt + OTP

### 8. Plataforma de Ofertas Mobile + Web
- **Tipo:** Full-Stack
- **Stack:** Expo, React Native, Astro, Vue.js 3, Tailwind CSS
- **Arquitectura:** Multi-plataforma con frontend compartido
- **Descripción:**
  App móvil y sitio web para descubrir y gestionar descuentos y ofertas de tiendas.
- **Highlights:**
  - Desarrollo paralelo mobile + web con stacks complementarios
  - Astro SSR para SEO en web + Expo para experiencia nativa
  - Validación con Zod, image optimization con Sharp

---

## Competencias Clave (para sección About)

### Arquitectura & Diseño
- Arquitecturas escalables y sostenibles
- Diseño e implementación de APIs REST
- Patrones: MVC, Repository, Service Layer, Event-Driven
- Sistemas white-label y multi-tenant
- Separación backend/frontend desacoplada

### Desarrollo
- Full-stack TypeScript / PHP / Python
- Apps móviles multiplataforma con Expo
- Frontends de alto rendimiento con Astro
- Paneles admin con Filament

### DevOps & Producción
- Servidores VPS (Linux/Nginx/Docker)
- CI/CD con GitHub Actions
- Deploy en Cloudflare, Railway, VPS
- Monitoreo con Sentry

### Innovación
- Integración de IA generativa en productos
- Automatización de workflows con n8n
- Tiempo real con WebSockets
- Integración de pasarelas de pago (crypto + fiat)
