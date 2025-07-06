# The Line Machine

A creative art generation tool that creates beautiful abstract compositions - inspired by Carlos Cruz Diez's Couleur additive and multiple other artists. Generate unique images with customizable parameters including line counts, angles, colors, and probability distributions.

## Features

### 🎨 **Art Generation Modes**
- **Segmented Lines**: Lines that change angle every 100 pixels for organic, flowing compositions
- **Continuous Lines**: Clean geometric lines with consistent angles
- **Rectangle Mode**: Abstract geometric compositions with rotated rectangles using distribution-based positioning
- **Custom Angles**: Define your own set of 3 angles for precise control in continuous mode

### 🌈 **Color System**
- **80+ Color Harmonies**: Curated palettes with creative names like "cosmic blaze" and "electric dusk"
- **Black**: Classic monochrome compositions
- **Gray**: Sophisticated grayscale artwork
- **Custom Colors**: Individual color picker controls for primary, secondary, and tertiary colors
- **Live Color Updates**: Change colors without regenerating shapes - colors apply to existing artwork

### 📐 **Instagram-Ready Formats**
- **1:1** Square (1080×1080px) 
- **4:3** Landscape (1080×810px) 
- **3:4** Portrait (810×1080px) 
- **16:9** Wide (1080×607px) 

### 📊 **Probability Distributions**
- **Normal**: Favors vertical lines with gentle curves, centered rectangle positioning
- **Exponential**: Creates dramatic angular compositions, varied rectangle scales and positions

### 🎲 **Randomization**
- **Shuffle**: Randomizes lines (5-50), weight (3-25px), transparency (40-100%), colors, and distributions
- **Instant Generation**: One-click randomization for endless creativity
- **Shape Persistence**: Color and transparency changes preserve existing shapes

### 💾 **Smart Export**
- High-quality PNG export (full resolution)
- Descriptive filenames: `{mode}-{palette}-{timestamp}.png`
- Examples: `rectangle-cosmic-blaze-20241201-143052.png`, `segmented-black-20241201-143125.png`
- Optimized for social media sharing

## How to Use

1. **Open `index.html`** in any modern web browser
2. **Choose Your Mode**:
   - **Segmented**: Organic flowing lines
   - **Continuous**: Geometric straight lines with custom angles
   - **Rectangle**: Abstract geometric shapes
3. **Adjust Parameters**:
   - **Lines**: Control density (5-50 lines) - applies to line modes
   - **Weight**: Set line thickness (3-25px) 
   - **Transparency**: Adjust opacity (0-100%) for all modes
   - **Colors**: Choose from harmonies, black, gray, or create custom palettes
   - **Distribution**: Select normal or exponential for angle/positioning behavior
   - **Format**: Pick your desired aspect ratio
4. **Live Editing**: Change colors and transparency without regenerating shapes
5. **Generate**: Click 🔀 to randomize everything or adjust individual controls
6. **Export**: Click 💾 to download your creation with descriptive filename

## Technical Features

- **Shape Persistence**: Color changes apply to existing artwork without regeneration
- **Mobile Optimized**: Touch-friendly interface with responsive design
- **High-DPI Support**: Crisp rendering on retina displays
- **Performance Optimized**: Throttled controls and efficient canvas rendering

---

This project was built with ❤️ by [@hcorona](https://github.com/hcorona) using [Cursor](https://cursor.sh/) and its AI tools as a fun personal experiment in creative coding and generative art.

 