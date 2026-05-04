# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The app will open at http://localhost:3000

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── Button/          # Primary, Nav, and Mega button variants
│   │   └── Eyebrow/         # Section label with decorative line
│   ├── layout/              # Layout components
│   │   ├── Navigation/      # Top navigation bar
│   │   ├── ProgressBar/     # Scene progress indicator
│   │   └── Controls/        # Bottom controls with dots and play/pause
│   ├── scenes/              # All 7 scene components
│   │   ├── HeroScene/       # Main hero section
│   │   ├── StatScene/       # 17 sec statistic
│   │   ├── GapScene/        # Comparison table
│   │   ├── SolutionScene/   # Feature grid
│   │   ├── ResultsScene/    # Results with counter animations
│   │   ├── HowScene/        # 5-step process
│   │   └── CTAScene/        # Final call-to-action
│   ├── BackgroundBlobs/     # Animated background elements
│   ├── ChatDemo/            # Floating chat simulation
│   └── Scene/               # Scene wrapper with animations
├── hooks/
│   ├── useSceneRotation.js  # Auto-rotation logic with pause/resume
│   └── useChatSimulation.js # Chat message simulation
├── styles/
│   ├── variables.css        # CSS custom properties
│   └── global.css           # Global styles and reset
├── App.jsx                  # Main application component
└── index.jsx                # React entry point
```

## Key Features

### 1. Scene Auto-Rotation
- Scenes automatically rotate every 6-11 seconds
- Hover over the stage to pause
- Click scene dots to jump to specific scenes
- Use arrow keys ← → to navigate
- Press spacebar to pause/play

### 2. Chat Demo
- **Hero Mode**: Large, centered chat in Scene 1
- **Corner Mode**: Compact chat in Scenes 2-7
- Simulates real conversation flow
- Auto-restarts when returning to Scene 1

### 3. Animations
- Staggered entrance animations for scene elements
- Animated background blobs with morphing
- Counter animations in Results scene
- Progress bar fills for each scene

### 4. Responsive Design
- Desktop-first approach
- Tablet optimizations
- Mobile breakpoints at 800px, 700px, 600px
- Chat demo hides on screens < 900px

## Customization

### Modifying Scene Durations
Edit `SCENE_DURATIONS` array in [src/App.jsx](src/App.jsx):
```javascript
const SCENE_DURATIONS = [11000, 6500, 9000, 9000, 7500, 9000, 8000];
```

### Changing Colors
Edit CSS variables in [src/styles/variables.css](src/styles/variables.css):
```css
:root {
  --bg: #ffffff;
  --ink: #000000;
  --amber: #000000;
  /* ... */
}
```

### Adding New Scenes
1. Create new scene component in `src/components/scenes/`
2. Add to App.jsx imports and scene list
3. Update SCENE_DURATIONS and SCENE_TITLES arrays
4. Increment total count in Controls component

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Supports prefers-reduced-motion for accessibility

## Performance

- Uses CSS animations (GPU-accelerated)
- Lazy scene transitions with opacity
- Optimized re-renders with React hooks
- Lightweight dependencies

## Troubleshooting

**Animations not working:**
- Check if prefers-reduced-motion is enabled in OS
- Ensure CSS files are properly imported

**Chat not showing:**
- Verify screen width > 900px
- Check chat simulation hook is running

**Scene rotation stuck:**
- Check browser console for errors
- Verify all scene durations are valid numbers

## Development Tips

- Use React DevTools to inspect component state
- Check browser console for warnings
- Test on different screen sizes using DevTools
- Verify keyboard navigation works

## Building for Production

The build creates an optimized production bundle:
```bash
npm run build
```

Output goes to `build/` folder, ready for deployment to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## License

All rights reserved.
