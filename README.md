# The Line Machine

A creative art generation tool that creates beautiful abstract compositions - inspired by Carlos Cruz Diez's Couleur additive and multiple other artists. Generate unique images with customizable parameters including line counts, angles, colors, probability distributions, and gradient effects.

## Features

### 🎨 **Art Generation Modes**
- **Segmented Lines**: Lines that change angle every 100 pixels for organic, flowing compositions
- **Continuous Lines**: Clean geometric lines with consistent angles
- **Rectangle Mode**: Abstract geometric compositions with rotated rectangles using distribution-based positioning
  - **Image Layer Support**: Upload and position images within rectangle compositions with rotation and scaling
- **Circles Mode**: Organic circular compositions with linear gradients and distribution-based sizing/positioning
  - **Gradient Control**: Individual gradient angle control (0-360°) for each of the three circles
  - **Linear Gradients**: From 10% opacity to 100% opacity based on angle direction
- **Custom Angles**: Define your own set of 3 angles for precise control in continuous mode

### 🌈 **Color System**
- **80+ Color Harmonies**: Curated palettes with creative names like "cosmic blaze" and "electric dusk"
- **Black**: Classic monochrome compositions
- **Gray**: Sophisticated grayscale artwork
- **Custom Colors**: Individual color picker controls for primary, secondary, and tertiary colors
- **Live Color Updates**: Change colors without regenerating shapes - colors apply to existing artwork
- **Gradient Effects**: Circles feature linear gradients with customizable angles

### 📐 **Instagram-Ready Formats**
- **1:1** Square (1080×1080px) 
- **4:3** Landscape (1080×810px) 
- **3:4** Portrait (810×1080px) 
- **16:9** Wide (1080×607px) 

### 📊 **Probability Distributions**
- **Normal**: Favors vertical lines with gentle curves, centered positioning with natural variation
- **Exponential**: Creates dramatic angular compositions, varied scales and clustered positioning
- **Concentric**: All circles share the same center point and size (circles mode only)

### 🎨 **Advanced Circle Features**
- **Gradient Angles**: Individual control over gradient direction for each circle (0-360°)
  - **0°**: Left to right gradient
  - **90°**: Bottom to top gradient  
  - **180°**: Right to left gradient
  - **270°**: Top to bottom gradient (default)
- **Distribution Modes**: Normal (random), Exponential (clustered), Concentric (centered)
- **Gradient Opacity**: Linear gradients from 10% to 100% opacity

### 🖼️ **Image Layer System** (Rectangle Mode)
- **Image Upload**: Support for common image formats
- **Layer Positioning**: Place images behind, between, or in front of rectangles
- **Interactive Positioning**: Drag images directly on the canvas
- **Size Control**: Resize images while maintaining aspect ratio
- **Rotation**: Rotate images from -180° to +180°
- **Smart Bounds**: Automatic boundary detection to keep images within canvas

### 🎲 **Randomization**
- **Shuffle**: Randomizes lines (5-50), weight (3-25px), transparency (40-100%), colors, and distributions
- **Instant Generation**: One-click randomization for endless creativity
- **Shape Persistence**: Color and transparency changes preserve existing shapes

### 💾 **Smart Export**
- High-quality PNG export (full resolution)
- Descriptive filenames: `{mode}-{palette}-{timestamp}.png`
- Examples: `circles-cosmic-blaze-20241201-143052.png`, `rectangle-black-20241201-143125.png`
- Optimized for social media sharing

## How to Use

1. **Open `index.html`** in any modern web browser
2. **Choose Your Mode**:
   - **Segmented**: Organic flowing lines
   - **Continuous**: Geometric straight lines with custom angles
   - **Rectangle**: Abstract geometric shapes with optional image layers
   - **Circles**: Gradient circles with customizable angles
3. **Adjust Parameters**:
   - **Lines**: Control density (5-50 lines) - applies to line modes
   - **Weight**: Set line thickness (3-25px) 
   - **Transparency**: Adjust opacity (0-100%) for all modes
   - **Colors**: Choose from harmonies, black, gray, or create custom palettes
   - **Distribution**: Select normal, exponential, or concentric for positioning behavior
   - **Format**: Pick your desired aspect ratio
4. **Mode-Specific Controls**:
   - **Circles**: Adjust individual gradient angles for each circle (0-360°)
   - **Rectangle**: Upload images, position layers, resize and rotate
5. **Live Editing**: Change colors and transparency without regenerating shapes
6. **Generate**: Click 🔀 to randomize everything or adjust individual controls
7. **Export**: Click 💾 to download your creation with descriptive filename

## Technical Features

- **Shape Persistence**: Color changes apply to existing artwork without regeneration
- **Mobile Optimized**: Touch-friendly interface with responsive design
- **High-DPI Support**: Crisp rendering on retina displays
- **Performance Optimized**: Throttled controls and efficient canvas rendering
- **Interactive Canvas**: Drag-and-drop image positioning with real-time feedback
- **Gradient Rendering**: High-quality linear gradients with customizable angles

---

This project was built with ❤️ by [@hcorona](https://github.com/hcorona) using [Cursor](https://cursor.sh/) and its AI tools as a fun personal experiment in creative coding and generative art.

 