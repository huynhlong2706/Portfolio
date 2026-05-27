# ⚽ Football-Themed Portfolio

A modern, responsive portfolio website with Tokyo Night color theme and football/soccer design elements.

## 🎨 Features

- **Tokyo Night Theme**: Beautiful dark color scheme inspired by Tokyo Night
- **Football Elements**: Soccer-themed animations and design throughout
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Motion/React animations for engaging user experience
- **Loading Animation**: Custom soccer ball rolling animation
- **Component-Based**: Clean, maintainable code structure

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion/React** - Animations (formerly Framer Motion)
- **Vite** - Build tool
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Top navigation bar
│   │   ├── Hero.tsx          # Hero/landing section
│   │   ├── About.tsx         # About section
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Contact.tsx       # Contact section
│   │   ├── Footer.tsx        # Footer
│   │   ├── SoccerLoader.tsx  # Loading animation
│   │   └── index.ts          # Component exports
│   ├── constants/
│   │   └── index.ts          # App constants and data
│   └── App.tsx               # Main app component
├── styles/
│   ├── theme.css             # Tokyo Night theme colors
│   └── fonts.css             # Font imports
└── ...
```

## 🎨 Tokyo Night Colors

```typescript
COLORS = {
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
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at the preview URL provided by the environment.

## 📝 Customization Guide

### Update Personal Information

Edit `src/app/constants/index.ts`:

```typescript
// Update projects
export const PROJECTS = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "image-url",
    tags: ["React", "TypeScript"],
    stats: "⚽ Stats here",
  },
];

// Update skills
export const TECHNICAL_SKILLS = [
  "Your", "Skills", "Here"
];
```

### Modify Hero Section

Edit `src/app/components/Hero.tsx`:
- Change name in the `<h1>` tag
- Update job title in `<h2>`
- Modify bio text in `<p>`

### Update Social Links

Edit `src/app/constants/index.ts`:

```typescript
export const SOCIAL_LINKS = [
  { name: "GitHub", url: "your-github-url" },
  { name: "LinkedIn", url: "your-linkedin-url" },
  { name: "Email", url: "mailto:your-email" },
];
```

### Change Colors

Edit `src/styles/theme.css` to modify the Tokyo Night colors or add your own theme.

## 🎯 Key Features Explained

### Soccer Loader

The custom loading animation features:
- Rotating soccer ball with realistic design
- Smooth animations using Motion/React
- Tokyo Night themed colors
- Vietnamese text support

### Formation Diagram

The Skills section includes a unique 4-3-3 formation diagram representing the tech stack architecture:
- Frontend (striker)
- API/DB/Cache (midfield)
- Infrastructure (defense)

### Responsive Design

All components are fully responsive with:
- Mobile-first approach
- Tailwind CSS responsive utilities
- Smooth transitions between breakpoints

## 📦 Build

```bash
# Build for production
pnpm build
```

Note: This is a Figma Make project with special build configuration. Do NOT run `vite build` manually.

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

MIT License - feel free to use this project as a template for your portfolio.

## 🙏 Credits

- Design inspiration: Tokyo Night color scheme
- Icons: Lucide React
- Images: Unsplash
- Animations: Motion/React

---

Made with ⚽ passion and 💻 code
