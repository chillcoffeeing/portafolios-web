# Portfolio Web — Victor

## Proyecto
Portfolio personal de Victor, desarrollador Full-Stack & Arquitecto de Software.
Objetivo: venderse como fullstack especializado en arquitecturas escalables, patrones de diseño de software y soluciones de producción completas.

## Stack del Portfolio
- **Framework:** Astro 5 (última versión estable) — aprovechando al máximo sus capacidades
- **UI Components:** Vue 3 (ecosystem principal de Victor)
- **Styling:** Tailwind CSS v4
- **Idioma del sitio:** Español (principal) con soporte i18n para Inglés
- **Deploy target:** Cloudflare Pages

## Filosofía Astro — Máxima Expresión
Usar todas las features avanzadas de Astro que aporten valor real:
- **View Transitions API** — transiciones fluidas entre páginas sin SPA
- **Content Collections** — para proyectos, skills, experiencia (type-safe con Zod)
- **Server Islands** — componentes dinámicos dentro de páginas estáticas
- **Astro Actions** — para el formulario de contacto (type-safe server functions)
- **Middleware** — para i18n routing, headers de seguridad
- **Hybrid Rendering** — páginas estáticas + rutas SSR donde sea necesario
- **Image Optimization** — `astro:assets` para todas las imágenes
- **Prefetching** — navegación instantánea con prefetch en hover/viewport
- **Client Directives** — `client:visible`, `client:idle`, `client:media` para hidratación inteligente
- **MDX** — para contenido rico en secciones de detalle de proyecto

## Reglas de Desarrollo

### Arquitectura
- Respetar la estructura definida en `/doc/STRUCTURE.md`
- Componentes Astro por defecto, Vue solo cuando se necesite interactividad real
- Zero JavaScript innecesario — Islands Architecture estricta
- Type-safe en todo: TypeScript strict, schemas Zod en content collections

### Código
- TypeScript strict en todo el proyecto
- Componentes pequeños y composables
- CSS via Tailwind — no estilos inline ni CSS modules
- Nombres de archivos en kebab-case
- Componentes en PascalCase

### Contenido
- Los proyectos NO se nombran por su nombre real, se presentan por su stack/dominio tecnológico
- Ejemplo: "FitCoach" → "Mobile Fitness Platform" o "Expo + Supabase + AI"
- El foco siempre es la arquitectura y decisiones técnicas, no el producto en sí

### Performance
- Target: 100 en Lighthouse (Performance, SEO, Accessibility, Best Practices)
- Imágenes en formato WebP/AVIF con fallback
- Fonts con `font-display: swap` y preload
- Critical CSS inline

### SEO
- Meta tags dinámicos por página
- Open Graph y Twitter Cards
- Schema.org JSON-LD (Person, WebSite, CreativeWork)
- Sitemap automático
- robots.txt

## Comandos
```bash
npm run dev       # Dev server
npm run build     # Build de producción
npm run preview   # Preview del build
```
