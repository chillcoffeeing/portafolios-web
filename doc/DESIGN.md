# Sistema de Diseño

## Identidad Visual

### Filosofía
Diseño minimalista, técnico y profesional. Transmite ingeniería de software seria sin ser aburrido.
Inspiración: portfolios de ingenieros de Vercel, Stripe, Linear.

### Paleta de Colores

```
--color-bg:          #0a0a0b        (fondo principal — casi negro)
--color-bg-subtle:   #141416        (fondo de cards y secciones)
--color-bg-muted:    #1c1c21        (fondo hover, bordes sutiles)
--color-border:      #2a2a30        (bordes)
--color-text:        #ededef        (texto principal)
--color-text-muted:  #8a8a8e        (texto secundario)
--color-accent:      #3b82f6        (azul — CTAs, links, badges)
--color-accent-hover:#2563eb        (azul hover)
--color-success:     #22c55e        (disponibilidad, estados OK)
--color-tag-bg:      #1e293b        (fondo de tech badges)
--color-tag-text:    #94a3b8        (texto de tech badges)
```

### Tema
- **Dark mode por defecto** — es lo esperado en portfolios de desarrolladores
- Light mode como alternativa (toggle en header)
- Transición suave entre temas via CSS custom properties

### Tipografía

```
--font-heading: 'Inter', system-ui, sans-serif    (títulos — bold, tight tracking)
--font-body:    'Inter', system-ui, sans-serif     (cuerpo — regular, buena legibilidad)
--font-mono:    'JetBrains Mono', monospace        (código, tech badges)
```

**Escala tipográfica:**
| Elemento | Size | Weight | Tracking |
|----------|------|--------|----------|
| Hero title | 4rem (64px) | 800 | -0.04em |
| Section title | 2rem (32px) | 700 | -0.02em |
| Card title | 1.25rem (20px) | 600 | -0.01em |
| Body | 1rem (16px) | 400 | 0 |
| Caption / tags | 0.8rem (12.8px) | 500 | 0.02em |
| Code / mono | 0.875rem (14px) | 400 | 0 |

## Componentes UI

### Cards de Proyecto
```
┌─────────────────────────────────────────────┐
│  [Screenshot / Diagrama de Arquitectura]     │
│                                              │
│  ● Full-Stack                                │
│  Ecosistema Cashback Multi-plataforma        │
│                                              │
│  Arquitectura escalable con colas Redis,     │
│  integración de redes de afiliados...        │
│                                              │
│  ┌──────┐ ┌────────┐ ┌──────┐ ┌─────┐       │
│  │Laravel│ │Filament│ │Docker│ │Redis│ ...   │
│  └──────┘ └────────┘ └──────┘ └─────┘       │
│                                              │
│  Ver detalle →                               │
└─────────────────────────────────────────────┘
```

- Borde sutil `1px solid var(--color-border)`
- Hover: borde cambia a `var(--color-accent)` con transición
- Border-radius: `12px`
- Padding: `24px`
- Background: `var(--color-bg-subtle)`

### Tech Badges
- Font mono, tamaño caption
- Background: `var(--color-tag-bg)`
- Color: `var(--color-tag-text)`
- Border-radius: `6px`
- Padding: `4px 10px`
- Con icono del framework/tool a la izquierda (via Iconify)

### Botones
| Variante | Estilo |
|----------|--------|
| Primary | `bg-accent`, `text-white`, hover scale sutil |
| Secondary | `border-accent`, `text-accent`, hover fill |
| Ghost | solo texto, hover underline |

### Header / Navegación
- Sticky con `backdrop-filter: blur(12px)`
- Logo/nombre a la izquierda
- Links: Proyectos, Sobre Mí, Contacto
- Theme toggle + Language toggle a la derecha
- Mobile: hamburger → slide menu

## Animaciones y Micro-interacciones

### View Transitions
- **Página → Página:** fade con slide sutil (200ms)
- **Card → Detalle:** morph de la card al hero del detalle
- **Header:** persiste entre páginas (`transition:persist`)

### Scroll Animations
- Secciones entran con fade-up al ser visibles (`client:visible`)
- Stagger en grids de tech badges y cards (50ms entre items)
- Sin animaciones excesivas — profesional y limpio

### Hover States
- Cards: borde se ilumina + shadow sutil
- Botones: scale 1.02 + cambio de color
- Links: underline animado de izquierda a derecha
- Tech badges: leve brillo

## Responsive Breakpoints

```
sm:  640px   — mobile landscape
md:  768px   — tablet
lg:  1024px  — desktop
xl:  1280px  — wide desktop
```

### Layout por Breakpoint
- **Mobile (< 768px):** stack vertical, hero compacto, menú hamburger, cards full-width
- **Tablet (768-1024px):** grid 2 cols para projects, nav visible
- **Desktop (> 1024px):** grid 3 cols para projects, layout amplio con márgenes generosos

## Accesibilidad
- Contraste mínimo AA (4.5:1) en todos los textos
- Focus rings visibles en todos los interactivos
- Aria labels en iconos y elementos interactivos
- Skip to content link
- Navegación por teclado completa
- `prefers-reduced-motion` respetado
