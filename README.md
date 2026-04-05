# Yashraj Yadav - Portfolio

Personal developer portfolio built with Next.js 16.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, rough-notation
- **Fonts:** Funnel Display, Manrope, JetBrains Mono (via next/font)
- **Theme:** next-themes (dark/light mode)
- **Audio:** Custom Web Audio API sound effects

## Getting Started

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

## Project Structure

```
app/
├── page.tsx          # Home page
├── projects/         # Projects page
├── layout.tsx        # Root layout
└── globals.css       # Global styles

components/
├── navbar.tsx        # Navigation
├── highlight.tsx     # Rough notation wrapper
├── project-card.tsx  # Project cards
├── theme-toggle.tsx  # Dark/light toggle
└── typewriter.tsx    # Typewriter effect
```

## Features

- Dark/light theme with smooth transitions
- Subtle highlight animations (rough-notation)
- Typewriter effect for role text
- Sound effects on theme toggle and navigation
- Responsive design
- Custom fonts: Funnel Display, Manrope, JetBrains Mono

## Deployment

Deploy to Vercel:

```bash
# Push to GitHub and connect to Vercel
# Or use CLI:
npm i -g vercel
vercel
```
