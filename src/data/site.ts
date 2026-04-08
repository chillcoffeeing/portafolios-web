export const siteConfig = {
  name: 'Victor Veliz',
  title: 'Victor Veliz — Full-Stack Developer & Software Architect',
  description:
    'Diseño y construyo soluciones escalables — desde la arquitectura hasta producción. Especializado en Node.js, Astro, Vue.js, React Native y arquitecturas de sistemas.',
  url: 'https://portafolio-victor-veliz.netlify.app/',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/chillcoffeeing',
    linkedin: 'https://www.linkedin.com/in/victor-veliz-09807522a/',
    email: 'mailto:victorveliz98.vv@gmail.com',
  },
} as const;

export const navLinks = [
  { label: 'Proyectos', href: '/projects', icon: 'ph:code-duotone' },
  { label: 'Sobre Mí', href: '/about', icon: 'ph:user-duotone' },
  { label: 'Contacto', href: '/contact', icon: 'ph:chat-circle-dots-duotone' },
] as const;
