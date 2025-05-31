// Color palettes: each palette has 3 highly distinct colors and a random two-word English name
const colorPalettes = [
  { name: "crystal echo", colors: ["#FF0054", "#00B2FF", "#FFD600"] },
  { name: "neon thunder", colors: ["#00FFB3", "#FF2A6D", "#3A86FF"] },
  { name: "vivid forest", colors: ["#FFBE0B", "#8338EC", "#00B140"] },
  { name: "electric dusk", colors: ["#FF006E", "#00F0FF", "#FFB300"] },
  { name: "cosmic blaze", colors: ["#FF1B1C", "#00FF87", "#3A86FF"] },
  { name: "tiger mint", colors: ["#FF6F00", "#00FFB3", "#3A86FF"] },
  { name: "plasma wave", colors: ["#FF0054", "#00F0FF", "#FFD600"] },
  { name: "cobalt flame", colors: ["#3A86FF", "#FF006E", "#FFD600"] },
  { name: "sunset glitch", colors: ["#FFBE0B", "#8338EC", "#FF006E"] },
  { name: "acid jungle", colors: ["#00FF87", "#FF1B1C", "#FFD600"] },
  { name: "pixel storm", colors: ["#FF0054", "#00B2FF", "#FFBE0B"] },
  { name: "chrome berry", colors: ["#8338EC", "#FF2A6D", "#FFD600"] },
  { name: "laser canyon", colors: ["#00F0FF", "#FFB300", "#FF006E"] },
  { name: "signal frost", colors: ["#00FFB3", "#FF1B1C", "#3A86FF"] },
  { name: "hyper lemon", colors: ["#FFD600", "#00B2FF", "#FF0054"] },
  { name: "optic magma", colors: ["#FF2A6D", "#00FF87", "#3A86FF"] },
  { name: "prism riot", colors: ["#FFBE0B", "#00F0FF", "#FF006E"] },
  { name: "static coral", colors: ["#FF1B1C", "#00B2FF", "#FFD600"] },
  { name: "turbo grape", colors: ["#8338EC", "#FFB300", "#00FFB3"] },
  { name: "lunar blaze", colors: ["#FF0054", "#FFD600", "#00FF87"] },
  { name: "neon canyon", colors: ["#00F0FF", "#FF2A6D", "#FFBE0B"] },
  { name: "signal mint", colors: ["#00FFB3", "#FF006E", "#FFD600"] },
  { name: "optic berry", colors: ["#8338EC", "#00B2FF", "#FF1B1C"] },
  { name: "pixel magma", colors: ["#FFB300", "#00FF87", "#FF0054"] },
  { name: "chrome dusk", colors: ["#3A86FF", "#FFD600", "#FF2A6D"] },
  { name: "tiger frost", colors: ["#00FFB3", "#FFBE0B", "#FF006E"] },
  { name: "vivid glitch", colors: ["#FF1B1C", "#00F0FF", "#8338EC"] },
  { name: "electric coral", colors: ["#FF0054", "#FFD600", "#00B2FF"] },
  { name: "cosmic canyon", colors: ["#00FF87", "#FFB300", "#3A86FF"] },
  { name: "plasma storm", colors: ["#FF2A6D", "#00B2FF", "#FFD600"] },
  { name: "sunset riot", colors: ["#FFBE0B", "#00FFB3", "#FF1B1C"] },
  { name: "acid dusk", colors: ["#00F0FF", "#FF006E", "#FFD600"] },
  { name: "laser mint", colors: ["#00FFB3", "#FFB300", "#8338EC"] },
  { name: "chrome magma", colors: ["#FF0054", "#FFD600", "#3A86FF"] },
  { name: "optic storm", colors: ["#00B2FF", "#FF2A6D", "#FFBE0B"] },
  { name: "hyper frost", colors: ["#00FF87", "#FF1B1C", "#FFD600"] },
  { name: "prism dusk", colors: ["#FF006E", "#00F0FF", "#FFBE0B"] },
  { name: "static grape", colors: ["#8338EC", "#FFD600", "#00FFB3"] },
  { name: "turbo berry", colors: ["#FF2A6D", "#00B2FF", "#FFB300"] },
  { name: "lunar jungle", colors: ["#00FF87", "#FFBE0B", "#FF0054"] },
  { name: "neon blaze", colors: ["#FF1B1C", "#00F0FF", "#FFD600"] },
  { name: "signal canyon", colors: ["#00B2FF", "#FF006E", "#FFBE0B"] },
  { name: "optic frost", colors: ["#00FFB3", "#8338EC", "#FFD600"] },
  { name: "pixel dusk", colors: ["#FFB300", "#00F0FF", "#FF0054"] },
  { name: "chrome riot", colors: ["#FF2A6D", "#FFD600", "#3A86FF"] },
  { name: "tiger coral", colors: ["#FFBE0B", "#00FF87", "#FF1B1C"] },
  { name: "vivid mint", colors: ["#00FFB3", "#FFB300", "#FF0054"] },
  { name: "electric storm", colors: ["#00F0FF", "#FF2A6D", "#FFD600"] },
  { name: "cosmic dusk", colors: ["#FF1B1C", "#00B2FF", "#FFBE0B"] },
  { name: "plasma frost", colors: ["#00FF87", "#FFD600", "#3A86FF"] },
  { name: "sunset berry", colors: ["#8338EC", "#FFB300", "#FF0054"] },
  { name: "acid riot", colors: ["#FF2A6D", "#00F0FF", "#FFD600"] },
  { name: "laser dusk", colors: ["#FF006E", "#00FFB3", "#FFBE0B"] },
  { name: "chrome jungle", colors: ["#00FF87", "#FFD600", "#FF1B1C"] },
  { name: "optic coral", colors: ["#FF0054", "#00B2FF", "#FFB300"] },
  { name: "hyper berry", colors: ["#8338EC", "#FFD600", "#00F0FF"] },
  { name: "prism mint", colors: ["#00FFB3", "#FF2A6D", "#FFD600"] },
  { name: "static dusk", colors: ["#FFB300", "#00F0FF", "#FF006E"] },
  { name: "turbo frost", colors: ["#00FF87", "#FFD600", "#3A86FF"] },
  { name: "lunar riot", colors: ["#FF2A6D", "#00B2FF", "#FFD600"] },
  { name: "neon coral", colors: ["#FF0054", "#00F0FF", "#FFBE0B"] },
  { name: "signal dusk", colors: ["#FFB300", "#00FFB3", "#FF006E"] },
  { name: "optic jungle", colors: ["#00FF87", "#FFD600", "#8338EC"] },
  { name: "pixel riot", colors: ["#FF2A6D", "#00B2FF", "#FFD600"] },
  { name: "chrome mint", colors: ["#00FFB3", "#FFB300", "#FF0054"] },
  { name: "tiger dusk", colors: ["#FF006E", "#FFD600", "#3A86FF"] },
  { name: "vivid coral", colors: ["#FF0054", "#00F0FF", "#FFD600"] },
  { name: "electric berry", colors: ["#8338EC", "#FFB300", "#00FFB3"] },
  { name: "cosmic frost", colors: ["#00FF87", "#FFD600", "#FF2A6D"] },
  { name: "plasma dusk", colors: ["#FF006E", "#00F0FF", "#FFBE0B"] },
  { name: "sunset mint", colors: ["#00FFB3", "#FFD600", "#3A86FF"] },
  { name: "acid berry", colors: ["#8338EC", "#FF2A6D", "#FFD600"] },
  { name: "laser riot", colors: ["#FF2A6D", "#00F0FF", "#FFD600"] },
  { name: "chrome dusk", colors: ["#FFB300", "#00FFB3", "#FF0054"] },
  { name: "optic mint", colors: ["#00FFB3", "#FFD600", "#3A86FF"] },
  { name: "hyper dusk", colors: ["#FF006E", "#00F0FF", "#FFBE0B"] },
  { name: "prism coral", colors: ["#FF0054", "#FFD600", "#00B2FF"] },
  { name: "static frost", colors: ["#00FF87", "#FFD600", "#3A86FF"] },
  { name: "turbo dusk", colors: ["#FFB300", "#00F0FF", "#FF2A6D"] },
  { name: "lunar coral", colors: ["#FF0054", "#00FFB3", "#FFD600"] },
  { name: "neon berry", colors: ["#8338EC", "#FFD600", "#00F0FF"] },
  { name: "signal riot", colors: ["#FF2A6D", "#00B2FF", "#FFD600"] },
  { name: "optic dusk", colors: ["#FFB300", "#00F0FF", "#FF006E"] },
  { name: "pixel coral", colors: ["#FF0054", "#FFD600", "#00B2FF"] },
  { name: "chrome berry", colors: ["#8338EC", "#FFB300", "#00FFB3"] },
  { name: "tiger frost", colors: ["#00FF87", "#FFD600", "#3A86FF"] }
];

// Get canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Get control elements
const lineCountSlider = document.getElementById('lineCount');
const lineCountValue = document.getElementById('lineCountValue');
const lineThicknessSlider = document.getElementById('lineThickness');
const lineThicknessValue = document.getElementById('lineThicknessValue');
const lineAlphaSlider = document.getElementById('lineAlpha');
const lineAlphaValue = document.getElementById('lineAlphaValue');
// const generateBtn = document.getElementById('generateBtn'); // Not used
const exportBtn = document.getElementById('exportBtn');
const colorBtns = document.querySelectorAll('.color-btn');
const distributionBtns = document.querySelectorAll('.distribution-btn');
const aspectBtns = document.querySelectorAll('.aspect-btn');
const modeBtns = document.querySelectorAll('.mode-btn');

// Drawing configuration with Instagram standard sizes
const config = {
    lineWidth: 10,
    canvasWidth: 1080,
    canvasHeight: 1080,
    lineAlpha: 100, // Initialize transparency to 100% (fully opaque)
    currentColors: getRandomPalette(),
    currentDistribution: 'normal', // Default to normal, as uniform/beta are not in UI
    currentMode: 'segmented',
    useCustomAngles: false,
    customAngles: [0, 5, 2],
    aspectRatios: {
        '1:1': { width: 1080, height: 1080 },     // Instagram square
        '4:3': { width: 1080, height: 810 },      // Instagram landscape
        '3:4': { width: 810, height: 1080 },      // Instagram portrait
        '16:9': { width: 1080, height: 607 }      // Instagram wide
    },
    currentRatio: '1:1'
};

// Store current line paths and colors
let currentLinePaths = [];
let currentLineColors = [];

// Add these distribution functions:

// Box-Muller transform for normal distribution
function normalRandom(mean = 0, stdDev = 1) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdDev + mean;
}

// Exponential distribution
function exponentialRandom(lambda = 1) {
    return -Math.log(1 - Math.random()) / lambda;
}

// Get random angle based on selected distribution
function getRandomAngle() {
    const minAngle = -Math.PI / 2; // -90 degrees
    const maxAngle = Math.PI / 2;  // +90 degrees
    const range = maxAngle - minAngle;
    
    let normalizedValue;
    
    switch (config.currentDistribution) {
        // REMOVING 'uniform' as it's not in UI and randomizeSettings only uses normal/exponential
        /* case 'uniform':
            normalizedValue = Math.random();
            break; */
            
        case 'normal':
            // Normal distribution centered at 0 (vertical), std dev = 0.3
            let normal = normalRandom(0, 0.3);
            // Clamp to [-1, 1] and normalize to [0, 1]
            normal = Math.max(-1, Math.min(1, normal));
            normalizedValue = (normal + 1) / 2;
            break;
            
        case 'exponential':
            // Exponential distribution, reflected for symmetry
            let exp = exponentialRandom(2);
            if (Math.random() < 0.5) exp = -exp; // Make symmetric
            exp = Math.max(-2, Math.min(2, exp)); // Clamp
            normalizedValue = (exp + 2) / 4; // Normalize to [0, 1]
            break;
            
        // REMOVING 'beta' as it's not in UI
        /* case 'beta':
            // Beta distribution with shape parameters for interesting curves
            normalizedValue = betaRandom(0.5, 0.5); // U-shaped (favors extremes)
            break; */
            
        default: // Default to normal if something unexpected happens
            let defaultNormal = normalRandom(0, 0.3);
            defaultNormal = Math.max(-1, Math.min(1, defaultNormal));
            normalizedValue = (defaultNormal + 1) / 2;
    }
    
    return minAngle + normalizedValue * range;
}

// Get fixed angle based on selected distribution (for straight line mode)
function getFixedAngle() {
    const minAngle = -Math.PI / 2; // -90 degrees
    const maxAngle = Math.PI / 2;  // +90 degrees
    const range = maxAngle - minAngle;
    
    let normalizedValue;
    
    switch (config.currentDistribution) {
         // REMOVING 'uniform' as it's not in UI
        /* case 'uniform':
            normalizedValue = 0.5; // Middle angle (vertical)
            break; */
            
        case 'normal':
            normalizedValue = 0.3; // Slight left lean
            break;
            
        case 'exponential':
            normalizedValue = 0.8; // Strong right lean
            break;
            
        // REMOVING 'beta' as it's not in UI
        /* case 'beta':
            normalizedValue = 0.2; // Strong left lean
            break; */
            
        default: // Default to normal's fixed angle
            normalizedValue = 0.3;
    }
    
    return minAngle + normalizedValue * range;
}

// Randomize initial settings
function randomizeSettings() {
    // Random number of lines (5-50)
    const randomLineCount = Math.floor(Math.random() * 46) + 5;
    lineCountSlider.value = randomLineCount;
    lineCountValue.textContent = randomLineCount;
    
    // Random weight (3-25)
    const randomWeight = Math.floor(Math.random() * 23) + 3;
    lineThicknessSlider.value = randomWeight;
    lineThicknessValue.textContent = randomWeight + 'px';
    config.lineWidth = randomWeight;
    
    // Random transparency (40-100%)
    const randomAlpha = Math.floor(Math.random() * 61) + 40;
    lineAlphaSlider.value = randomAlpha;
    lineAlphaValue.textContent = randomAlpha + '%';
    config.lineAlpha = randomAlpha;
    
    // Random color harmony
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    config.currentColors = randomPalette.colors;
    
    // Update color button active state to show "Color Harmony" is selected
    colorBtns.forEach(btn => btn.classList.remove('active'));
    const harmonyBtn = document.querySelector('.color-btn[data-type="harmony"]');
    if (harmonyBtn) harmonyBtn.classList.add('active');
    
    // Random distribution (normal or exponential)
    const distributions = ['normal', 'exponential'];
    const randomDistribution = distributions[Math.floor(Math.random() * distributions.length)];
    config.currentDistribution = randomDistribution;
    
    // Update distribution button active state
    distributionBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.distribution === randomDistribution) {
            btn.classList.add('active');
        }
    });
}

// Initialize the application
function init() {
    // Randomize initial settings first
    randomizeSettings();
    
    // Set initial canvas size
    updateCanvasSize();
    
    // Generate initial drawing
    generateDrawing();
    
    // Add event listeners with mobile optimizations
    lineCountSlider.addEventListener('input', throttle(updateLineCount, 100));
    lineThicknessSlider.addEventListener('input', throttle(updateLineThickness, 50));
    lineAlphaSlider.addEventListener('input', throttle(updateLineAlpha, 50));
    exportBtn.addEventListener('click', exportToPNG);
    
    // Add color palette event listeners
    colorBtns.forEach(btn => {
        btn.addEventListener('click', selectColorPalette);
        // Add touch feedback for mobile
        btn.addEventListener('touchstart', addTouchFeedback);
        btn.addEventListener('touchend', removeTouchFeedback);
    });
    
    // Add distribution event listeners
    distributionBtns.forEach(btn => {
        btn.addEventListener('click', selectDistribution);
        btn.addEventListener('touchstart', addTouchFeedback);
        btn.addEventListener('touchend', removeTouchFeedback);
    });
    
    // Add aspect ratio event listeners
    aspectBtns.forEach(btn => {
        btn.addEventListener('click', selectAspectRatio);
        btn.addEventListener('touchstart', addTouchFeedback);
        btn.addEventListener('touchend', removeTouchFeedback);
    });
    
    // Add mode event listeners
    modeBtns.forEach(btn => {
        btn.addEventListener('click', selectMode);
        btn.addEventListener('touchstart', addTouchFeedback);
        btn.addEventListener('touchend', removeTouchFeedback);
    });
    
    // Add custom angles event listeners
    document.getElementById('useCustomAngles').addEventListener('click', toggleCustomAngles);
    document.getElementById('angle1').addEventListener('input', updateCustomAngles);
    document.getElementById('angle2').addEventListener('input', updateCustomAngles);
    document.getElementById('angle3').addEventListener('input', updateCustomAngles);
    
    // Add window resize listener for mobile orientation changes
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Prevent iOS zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    const shuffleBtn = document.getElementById('shuffleBtn');
    shuffleBtn.addEventListener('click', () => {
        randomizeSettings();
        generateDrawing();
    });
}

// Update canvas size based on aspect ratio
function updateCanvasSize() {
    const ratio = config.aspectRatios[config.currentRatio];
    config.canvasWidth = ratio.width;
    config.canvasHeight = ratio.height;
    
    // Get device pixel ratio for high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    // Set high-resolution internal canvas dimensions
    canvas.width = config.canvasWidth * dpr;
    canvas.height = config.canvasHeight * dpr;
    
    // Reset and configure canvas context
    setupCanvasContext(dpr);
    
    // Set display size (CSS pixels)
    canvas.style.width = config.canvasWidth + 'px';
    canvas.style.height = config.canvasHeight + 'px';
    
    // Scale canvas for mobile display while maintaining quality
    scaleCanvasForMobile();
}

// Setup canvas context with proper scaling and quality settings
function setupCanvasContext(dpr) {
    // Scale the canvas context to match device pixel ratio
    ctx.scale(dpr, dpr);
    
    // Set high-quality rendering properties
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Set line rendering properties for crisp lines
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
}

// Scale canvas appropriately for all devices
function scaleCanvasForMobile() {
    const container = canvas.parentElement;
    const containerWidth = container.clientWidth - 40; // Account for padding
    
    // On desktop, allow more freedom for aspect ratios
    if (window.innerWidth >= 1200) {
        // Desktop: show natural size up to reasonable limits
        const maxWidth = Math.min(containerWidth, 600);
        const maxHeight = window.innerHeight * 0.7;
        
        const scaleX = maxWidth / config.canvasWidth;
        const scaleY = maxHeight / config.canvasHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        
        canvas.style.width = (config.canvasWidth * scale) + 'px';
        canvas.style.height = (config.canvasHeight * scale) + 'px';
    } else if (window.innerWidth >= 768) {
        // Tablet: moderate scaling
        const maxWidth = containerWidth;
        const maxHeight = window.innerHeight * 0.6;
        
        const scaleX = maxWidth / config.canvasWidth;
        const scaleY = maxHeight / config.canvasHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        
        canvas.style.width = (config.canvasWidth * scale) + 'px';
        canvas.style.height = (config.canvasHeight * scale) + 'px';
    } else {
        // Mobile: conservative scaling
        const maxWidth = containerWidth;
        const maxHeight = window.innerHeight * 0.45;
        
        const scaleX = maxWidth / config.canvasWidth;
        const scaleY = maxHeight / config.canvasHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        
        canvas.style.width = (config.canvasWidth * scale) + 'px';
        canvas.style.height = (config.canvasHeight * scale) + 'px';
    }
}

// Select aspect ratio
function selectAspectRatio(event) {
    // const aspectBtns = document.querySelectorAll('.aspect-btn'); // Already selected globally
    // Remove active class from all buttons
    aspectBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update current ratio
    config.currentRatio = event.target.dataset.ratio;
    
    // Update canvas size and regenerate
    updateCanvasSize();
    generateDrawing();
}

// Update line count display and regenerate
function updateLineCount() {
    const count = lineCountSlider.value;
    lineCountValue.textContent = count;
    generateDrawing();
}

// Update line thickness display and redraw with same paths
function updateLineThickness() {
    const thickness = lineThicknessSlider.value;
    lineThicknessValue.textContent = thickness;
    config.lineWidth = parseInt(thickness);
    redrawCurrentPaths();
}

// Update line alpha display and update config.lineAlpha
function updateLineAlpha() {
    const alpha = lineAlphaSlider.value;
    lineAlphaValue.textContent = alpha;
    config.lineAlpha = parseFloat(alpha);
    redrawCurrentPaths();
}

// Select color palette
function selectColorPalette(event) {
    // Remove active class from all buttons
    colorBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Check if this is a color harmony button
    if (event.target.dataset.type === 'harmony') {
        const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
        config.currentColors = randomPalette.colors;
    } else {
        // Update current colors from data attribute
        config.currentColors = JSON.parse(event.target.dataset.colors);
    }
    
    // Regenerate drawing with new colors
    generateDrawing();
}

// Get random color from current palette
function getRandomColor() {
    return config.currentColors[Math.floor(Math.random() * config.currentColors.length)];
}

// Generate new line paths and draw them
function generateDrawing() {
    const lineCount = parseInt(lineCountSlider.value);
    
    if (lineCount <= 0) {
        clearCanvas();
        return;
    }
    
    // Generate new paths
    generateLinePaths(lineCount);
    
    // Draw the paths
    redrawCurrentPaths();
}

// Generate line paths without drawing - FIXED PADDING
function generateLinePaths(lineCount) {
    currentLinePaths = [];
    currentLineColors = [];
    
    // Calculate spacing between lines
    const totalDrawingWidth = config.canvasWidth - config.lineWidth;
    const spacing = totalDrawingWidth / (lineCount + 1);
    
    // Drawing area parameters - NO PADDING
    const startY = 0;
    const endY = config.canvasHeight;
    
    if (config.currentMode === 'continuous') {
        // Continuous line mode - use custom angles or distribution-based angle
        
        for (let i = 1; i <= lineCount; i++) {
            const startX = spacing * i + (config.lineWidth / 2);
            
            // Use consecutive colors instead of random
            const colorIndex = (i - 1) % config.currentColors.length;
            const lineColor = config.currentColors[colorIndex];
            
            const linePath = [];
            currentLineColors.push(lineColor);
            
            // Calculate angle - either custom or from distribution
            let angle;
            if (config.useCustomAngles) {
                // Use custom angles, cycling through the 3 angles
                const angleIndex = (i - 1) % config.customAngles.length;
                angle = config.customAngles[angleIndex] * (Math.PI / 180); // Convert degrees to radians
            } else {
                // Use distribution-based angle
                angle = getFixedAngle();
            }
            
            // Calculate end point based on angle
            const canvasHeight = config.canvasHeight;
            const deltaX = Math.sin(angle) * canvasHeight;
            const endX = startX + deltaX;
            
            // Ensure end point stays within canvas bounds
            const boundedEndX = Math.max(config.lineWidth/2, 
                                Math.min(config.canvasWidth - config.lineWidth/2, endX));
            
            // Create straight line path
            linePath.push({ x: startX, y: startY });
            linePath.push({ x: boundedEndX, y: endY });
            
            currentLinePaths.push(linePath);
        }
    } else {
        // Segmented line mode - original behavior
        const baseSegmentLength = 100;
        
        for (let i = 1; i <= lineCount; i++) {
            const startX = spacing * i + (config.lineWidth / 2);
            const randomColor = getRandomColor();
            
            const linePath = [];
            currentLineColors.push(randomColor);
            
            // Start position
            let currentX = startX;
            let currentY = startY;
            linePath.push({ x: currentX, y: currentY });
            
            // Generate segments until we reach the bottom
            while (currentY < endY - 10) {
                const remainingHeight = endY - currentY;
                let randomAngle = getRandomAngle();
                
                // Calculate segment length and ensure minimum vertical progress
                let segmentLength = baseSegmentLength;
                let deltaX = Math.sin(randomAngle) * segmentLength;
                let deltaY = Math.cos(randomAngle) * segmentLength;
                
                // Ensure we make at least some vertical progress
                if (Math.abs(deltaY) < 20) {
                    deltaY = Math.max(20, remainingHeight);
                    segmentLength = deltaY / Math.cos(randomAngle);
                    deltaX = Math.sin(randomAngle) * segmentLength;
                }
                
                // If this would overshoot the bottom, adjust to land exactly at bottom
                if (currentY + deltaY > endY) {
                    deltaY = endY - currentY;
                    segmentLength = deltaY / Math.cos(randomAngle);
                    deltaX = Math.sin(randomAngle) * segmentLength;
                }
                
                const nextX = currentX + deltaX;
                const nextY = currentY + deltaY;
                
                // Ensure we don't go outside canvas bounds horizontally
                const boundedNextX = Math.max(config.lineWidth/2, 
                                    Math.min(config.canvasWidth - config.lineWidth/2, nextX));
                
                linePath.push({ x: boundedNextX, y: nextY });
                
                // Update current position
                currentX = boundedNextX;
                currentY = nextY;
            }
            
            currentLinePaths.push(linePath);
        }
    }
}

// Redraw existing paths with current settings
function redrawCurrentPaths() {
    clearCanvas();
    
    if (currentLinePaths.length === 0) return;
    
    // Set line style
    ctx.lineWidth = config.lineWidth;
    
    // Draw each stored path
    for (let i = 0; i < currentLinePaths.length; i++) {
        const path = currentLinePaths[i];
        const color = currentLineColors[i];
        
        // Apply alpha to color
        ctx.strokeStyle = hexToRgba(color, config.lineAlpha / 100);
        ctx.beginPath();
        
        // Draw the path
        ctx.moveTo(path[0].x, path[0].y);
        for (let j = 1; j < path.length; j++) {
            ctx.lineTo(path[j].x, path[j].y);
        }
        
        ctx.stroke();
    }
}

// Helper: Convert hex color to rgba string with alpha
function hexToRgba(hex, alpha) {
    let c = hex.replace('#', '');
    if (c.length === 3) {
        c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r},${g},${b},${alpha})`;
}

// Clear the canvas - NO PADDING
function clearCanvas() {
    ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    
    // Clean white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
}

// Export canvas as PNG - HIGH QUALITY EXPORT
function exportToPNG() {
    // Export directly from the high-resolution canvas
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    link.download = `lines-${config.currentRatio}-${timestamp}.png`;
    
    // Use the high-resolution canvas directly for maximum quality
    link.href = canvas.toDataURL('image/png');
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show feedback
    showExportFeedback();
}

// Show export feedback
function showExportFeedback() {
    const originalText = exportBtn.textContent;
    exportBtn.textContent = 'Exported!';
    exportBtn.style.background = '#28a745'; // Consider using CSS classes for state changes
    
    setTimeout(() => {
        exportBtn.textContent = originalText;
        exportBtn.style.background = '#6f42c1'; // Consider using CSS classes for state changes
    }, 2000);
}

// Draw line - REMOVING AS UNUSED
/*
function drawLine(startX, startY, endX, endY, width = config.lineWidth, color = '#333333') {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}
*/

// Select distribution function
function selectDistribution(event) {
    // const distributionBtns = document.querySelectorAll('.distribution-btn'); // Already selected globally
    // Remove active class from all buttons
    distributionBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update current distribution
    config.currentDistribution = event.target.dataset.distribution;
    
    // Regenerate drawing with new distribution
    generateDrawing();
}

// Select line mode
function selectMode(event) {
    // const modeBtns = document.querySelectorAll('.mode-btn'); // Already selected globally
    // Remove active class from all buttons
    modeBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    event.target.classList.add('active');
    // Update current mode
    config.currentMode = event.target.dataset.mode;
    // Only try to show/hide custom angles if the element exists
    const customAnglesCard = document.getElementById('customAnglesCard');
    if (customAnglesCard) {
        if (config.currentMode === 'continuous') {
            customAnglesCard.style.display = 'flex';
        } else {
            customAnglesCard.style.display = 'none';
            config.useCustomAngles = false;
            const useCustomAnglesBtn = document.getElementById('useCustomAngles');
            if (useCustomAnglesBtn) useCustomAnglesBtn.classList.remove('active');
        }
    }
    // Regenerate drawing with new mode
    generateDrawing();
}

// Toggle custom angles mode
function toggleCustomAngles() {
    const button = document.getElementById('useCustomAngles');
    config.useCustomAngles = !config.useCustomAngles;
    
    if (config.useCustomAngles) {
        button.classList.add('active');
        updateCustomAngles(); // Update angles from inputs
    } else {
        button.classList.remove('active');
    }
    
    generateDrawing();
}

// Update custom angles from input fields
function updateCustomAngles() {
    if (config.useCustomAngles) {
        config.customAngles[0] = parseFloat(document.getElementById('angle1').value);
        config.customAngles[1] = parseFloat(document.getElementById('angle2').value);
        config.customAngles[2] = parseFloat(document.getElementById('angle3').value);
        generateDrawing();
    }
}

// Get random palette for initial load
function getRandomPalette() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    return randomPalette.colors;
}

// Handle window resize (debounced for performance)
let resizeTimeout;
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Check if device pixel ratio has changed
        const currentDpr = window.devicePixelRatio || 1;
        const canvasDpr = canvas.width / config.canvasWidth;
        
        // If DPR changed, reconfigure the entire canvas
        if (Math.abs(currentDpr - canvasDpr) > 0.1) {
            updateCanvasSize();
            generateDrawing(); // Regenerate at new resolution
        } else {
            // Just rescale display
            scaleCanvasForMobile();
        }
    }, 100);
}

// Handle orientation changes on mobile
function handleOrientationChange() {
    // Wait for orientation change to complete
    setTimeout(() => {
        scaleCanvasForMobile();
    }, 200);
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add touch feedback for better mobile UX
function addTouchFeedback(event) {
    event.target.style.transform = 'scale(0.95)';
    event.target.style.opacity = '0.8';
}

function removeTouchFeedback(event) {
    event.target.style.transform = 'scale(1)';
    event.target.style.opacity = '1';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init); 