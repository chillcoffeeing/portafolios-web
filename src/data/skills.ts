export interface Skill {
  name: string;
  icon: string; // simple-icons name
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Express', icon: 'simple-icons:express' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Supabase', icon: 'simple-icons:supabase' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
      { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: 'simple-icons:react' },
      { name: 'Expo', icon: 'simple-icons:expo' },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Redis', icon: 'simple-icons:redis' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Nginx', icon: 'simple-icons:nginx' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare' },
      { name: 'AWS', icon: 'simple-icons:amazonaws' },
    ],
  },
  {
    title: 'IA & Automatización',
    skills: [
      { name: 'OpenAI', icon: 'simple-icons:openai' },
      { name: 'Claude Code', icon: 'simple-icons:anthropic' },
      { name: 'n8n', icon: 'simple-icons:n8n' },
    ],
  },
];
