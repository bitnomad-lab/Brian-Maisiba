# Brian Maisiba - Portfolio

A high-performance, cyber-themed personal portfolio built with Next.js 14, featuring glassmorphism design, interactive animations, and real-time data simulations.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Command Palette**: cmdk
- **Language**: TypeScript

## ✨ Features

- **Cyber-Grid Minimalism**: Deep charcoal background with Electric Blue and Matrix Green accents
- **Glassmorphism UI**: Frosted glass effect cards with smooth hover transitions
- **Terminal Typing Effect**: Dynamic skill showcase in hero section
- **Interactive Grid Background**: Canvas-based particle system that reacts to mouse movement
- **Command Palette**: CMD+K interface for quick navigation
- **Live Data Simulation**: Real-time whale alert feed for SOL_SENTINEL_01 project
- **Responsive Design**: Fully optimized for all screen sizes
- **Performance Optimized**: Built for Vercel deployment with optimal loading times

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- Background: `#050505` (Deep Charcoal)
- Primary: `#0070f3` (Electric Blue)
- Accent: `#00ff41` (Matrix Green)

### Components
- Glassmorphism cards with `backdrop-blur-xl`
- Glowing borders and shadows
- Smooth Framer Motion animations
- Interactive hover states

## 🗂️ Project Structure

```
brian-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── Hero.tsx            # Hero section with typing effect
│   ├── SkillMatrix.tsx     # Three-module skill display
│   ├── Projects.tsx        # Featured projects with live data
│   ├── Timeline.tsx        # Education & experience timeline
│   ├── Navigation.tsx      # Sticky glassmorphism nav
│   ├── Footer.tsx          # Footer with status indicator
│   ├── GridBackground.tsx  # Animated canvas background
│   └── CommandPalette.tsx  # CMD+K navigation interface
├── public/
│   └── Brian.jpeg          # Profile image
└── package.json
```

## 🎯 Key Sections

1. **Hero**: Terminal-style typing effect with 3D glowing profile image
2. **Skill Matrix**: Three modules (Engineering, Design, Systems)
3. **Projects**: Featured SOL_SENTINEL_01 with live Telegram alert simulation
4. **Timeline**: Vertical timeline showing education and experience
5. **Footer**: Social links with operational status indicator

## ⌨️ Keyboard Shortcuts

- `CMD/CTRL + K`: Open command palette
- `Arrow Keys`: Navigate command palette
- `ESC`: Close command palette

## 🚀 Deployment

Optimized for Vercel deployment:

```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repository to Vercel for automatic deployments
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

Update personal information in:
- `components/Hero.tsx` - Name, bio, location
- `components/SkillMatrix.tsx` - Skills and competencies
- `components/Projects.tsx` - Project details
- `components/Timeline.tsx` - Education and experience
- `components/Footer.tsx` - Social links

## 📄 License

© 2024 Brian Maisiba. All rights reserved.

---

Built with ❤️ using Next.js 14
