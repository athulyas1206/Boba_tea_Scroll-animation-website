# HAUT BOBA — Artisanal Scroll Experience & Recipe Mixology

An ultra-premium, cinematic scroll-driven web application showcasing artisanal boba tea mixology. Built with Next.js 14, TypeScript, Tailwind CSS, GSAP ScrollTrigger, and Lenis smooth scrolling.

![HAUT BOBA Preview](public/frames/chocolate/ezgif-frame-001.jpg)

---

## ✨ Features

- 📜 **Cinematic 72-Frame Canvas Animation**: Smooth 60FPS scroll-driven canvas image sequence for 3 signature flavors.
- 🫐 **Signature Flavor Switching**: Seamlessly toggle between Belgian Chocolate, Wild Alpine Strawberry, and Nordic Wild Blueberry.
- 🍹 **Interactive Mixology Masterclass**: Detailed ingredient breakdown, flavor notes, step-by-step masterclass, and pairing guides.
- ⚡ **Smooth Lenis Scroll Engine**: Enhanced luxury inertial scrolling experience.
- 🎨 **Sophisticated Design Aesthetics**: Rich dark mode, glassmorphism UI, custom ambient radial glows, and responsive typography.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation & Canvas**: [GSAP](https://gsap.com/) & ScrollTrigger Plugin
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Repository Structure

```
boba_tea/
├── public/
│   └── frames/
│       ├── blueberry/    # 72 image frames for Nordic Wild Blueberry
│       ├── chocolate/    # 72 image frames for Belgian Chocolate
│       └── strawberry/   # 72 image frames for Wild Alpine Strawberry
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles & Tailwind imports
│   │   ├── layout.tsx    # Root layout with Lenis provider
│   │   └── page.tsx      # Main application page & flavor configuration
│   ├── components/
│   │   ├── BobaSequenceCanvas.tsx  # Interactive GSAP ScrollTrigger canvas
│   │   ├── FlavorSelector.tsx      # Interactive flavor selection pills
│   │   ├── LoadingScreen.tsx       # Preloader with progress indicator
│   │   ├── Navbar.tsx              # Glassmorphism header & dropdown nav
│   │   ├── RecipeSection.tsx       # Mixology recipe masterclass
│   │   └── ScrollIndicator.tsx     # Animated scroll guide
│   ├── hooks/
│   │   ├── useImagePreloader.ts    # Sequence asset preloading hook
│   │   └── useLenis.ts             # Lenis smooth scroll hook
│   └── lib/
│       └── utils.ts                # Class name merging utility (cn)
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18.x or later** installed on your system.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/boba-tea-cinematic.git
cd boba-tea-cinematic
npm install
```

### 3. Running Development Server
Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Building for Production
To generate a production-ready build:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
