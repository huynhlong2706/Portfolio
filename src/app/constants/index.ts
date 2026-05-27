// Tokyo Night Color Theme
export const COLORS = {
  background: '#1a1b26',
  foreground: '#c0caf5',
  card: '#24283b',
  border: '#414868',
  primary: '#7aa2f7',
  accent: '#bb9af7',
  green: '#9ece6a',
  yellow: '#e0af68',
  pink: '#f7768e',
  muted: '#9aa5ce',
  cyan: '#7dcfff',
} as const;

// Project Data
export const PROJECTS = [
  {
    id: 1,
    title: "Football Analytics Platform",
    description: "Real-time statistics and match analysis for professional teams",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "WebSocket", "D3.js"],
    stats: "⚽ 100+ Matches Analyzed",
  },
  {
    id: 2,
    title: "Stadium Booking App",
    description: "Mobile application for booking football pitches and organizing matches",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React Native", "Firebase", "Maps API"],
    stats: "🏟️ 50+ Stadiums",
  },
  {
    id: 3,
    title: "Player Performance Tracker",
    description: "Dashboard for tracking player statistics and performance metrics",
    image: "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["TypeScript", "Recharts", "PostgreSQL"],
    stats: "📊 1000+ Players",
  },
];

// Skills Data
export const SKILLS_CATEGORIES = [
  { name: "Frontend Development", color: "from-[#7aa2f7] to-[#7dcfff]" },
  { name: "UI/UX Design", color: "from-[#bb9af7] to-[#f7768e]" },
  { name: "Full Stack Development", color: "from-[#9ece6a] to-[#e0af68]" },
] as const;

export const TECHNICAL_SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
] as const;

// Navigation Items
export const NAV_ITEMS = ["About", "Education", "Experience", "Projects", "Skills", "Contact"] as const;

// Achievement Stats
export const ACHIEVEMENT_STATS = [
  { icon: "🏆", value: "50+", label: "Projects" },
  { icon: "⚡", value: "100+", label: "Commits" },
  { icon: "🎯", value: "5Y", label: "Experience" },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  { name: "GitHub", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Email", url: "#" },
] as const;
