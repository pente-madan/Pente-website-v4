# Pente AI Website - React Application

A modern, animated React website for Pente Sites AI sales agent platform, featuring auto-rotating scenes, interactive chat simulation, and smooth animations.

## Features

- 🎨 **7 Interactive Scenes** - Auto-rotating presentation with smooth transitions
- 💬 **Chat Simulation** - Real-time chat demo with animated messages
- 🎯 **Animated Backgrounds** - Floating blobs with smooth animations
- 📱 **Fully Responsive** - Mobile-friendly design
- ⚡ **Modern React** - Built with React 18 hooks and functional components
- 🎭 **Smooth Animations** - CSS animations with reduced-motion support

## Project Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button/
│   │   └── Eyebrow/
│   ├── layout/              # Layout components
│   │   ├── Navigation/
│   │   ├── ProgressBar/
│   │   └── Controls/
│   ├── scenes/              # Scene components (7 scenes)
│   │   ├── HeroScene/
│   │   ├── StatScene/
│   │   ├── GapScene/
│   │   ├── SolutionScene/
│   │   ├── ResultsScene/
│   │   ├── HowScene/
│   │   └── CTAScene/
│   ├── BackgroundBlobs/     # Animated background
│   ├── ChatDemo/            # Chat simulation
│   └── Scene/               # Scene wrapper component
├── hooks/                   # Custom React hooks
│   ├── useSceneRotation.js  # Scene navigation logic
│   └── useChatSimulation.js # Chat animation logic
├── styles/                  # Global styles
│   ├── variables.css        # CSS custom properties
│   └── global.css           # Global styles
├── App.jsx                  # Main app component
└── index.jsx                # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Key Features

### Scene Navigation

- **Auto-rotation** - Scenes automatically rotate with configurable durations
- **Manual control** - Click dots to navigate between scenes
- **Keyboard navigation** - Use arrow keys to navigate, spacebar to pause/play
- **Hover pause** - Hover over stage to pause rotation

### Chat Demo

- **Contextual positioning** - Hero mode in first scene, corner mode in others
- **Animated messages** - Smooth message animations with typing indicators
- **Lead status tracking** - Real-time status updates

### Animations

- **Entrance animations** - Staggered animations for scene elements
- **Background blobs** - Morphing, drifting animated blobs
- **Progress bar** - Animated progress indicators for each scene
- **Reduced motion** - Respects user's motion preferences

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and tablet devices

## Technologies Used

- React 18
- CSS3 with custom properties
- Modern JavaScript (ES6+)
- Google Fonts (Fraunces, Geist, JetBrains Mono)

## Original Design

This React application is a conversion of the original HTML prototype maintaining the exact same UI, styling, and animations.

## License

All rights reserved.
slides website 
