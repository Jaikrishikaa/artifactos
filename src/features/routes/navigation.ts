export const navItems = [
  { label: 'Dashboard', to: '/workspace?page=overview' },
  { label: 'Projects', to: '/workspace?page=project' },
  { label: 'AI Chat', to: '/workspace?page=chat' },
  { label: 'Prompts', to: '/workspace?page=prompt' },
  { label: 'Artifacts', to: '/workspace?page=artifact' },
  { label: 'Reviews', to: '/workspace?page=inbox' },
  { label: 'Settings', to: '/workspace?page=settings' },
  { label: 'Logout', to: '/login' },
] as const
