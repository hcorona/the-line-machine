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
    { name: "cosmic frost", colors: ["#00FF87", "#FFD600", "#FF2A6D"] },
    { name: "infra blaze", colors: ["#FF3B30", "#FFD600", "#1E1E1E"] },
    { name: "sunset venom", colors: ["#FF6F00", "#FF2A6D", "#001F3F"] },
    { name: "voltage drip", colors: ["#FCEE09", "#00F0FF", "#0A0A0A"] },
    { name: "arctic chrome", colors: ["#00F0FF", "#C0C0C0", "#3A86FF"] },
    { name: "neon lava", colors: ["#FF0054", "#FF8E00", "#2B2B2B"] },
    { name: "electric jungle", colors: ["#00FF87", "#FF1B1C", "#002F2F"] },
    { name: "plasma teal", colors: ["#00B2FF", "#00FFB3", "#0E0E0E"] },
    { name: "heat surge", colors: ["#FFD600", "#FF2A6D", "#4A4A4A"] },
    { name: "midnight citrus", colors: ["#FFB300", "#001F3F", "#FFD600"] },
    { name: "burnout neon", colors: ["#FF006E", "#00F0FF", "#262626"] },
    { name: "cyber blaze", colors: ["#FF1B1C", "#00FFB3", "#202020"] },
    { name: "ice magma", colors: ["#00F0FF", "#FF0054", "#121212"] },
    { name: "steel coral", colors: ["#FF2A6D", "#3A86FF", "#B0BEC5"] },
    { name: "storm glitch", colors: ["#00B2FF", "#FFD600", "#263238"] },
    { name: "toxic dusk", colors: ["#00FF87", "#FF006E", "#333333"] },
    { name: "turbo flare", colors: ["#FFBE0B", "#00F0FF", "#000000"] },
    { name: "glacier venom", colors: ["#00FFB3", "#8338EC", "#111111"] },
    { name: "supernova heat", colors: ["#FF2A6D", "#FFD600", "#2F2F2F"] },
    { name: "carbon mint", colors: ["#00FFB3", "#3A86FF", "#2C2C2C"] },
    { name: "hyperstrike", colors: ["#FF0054", "#FFD600", "#1B1B1B"] },
    { name: "citrus blast", colors: ["#FFB300", "#00F0FF", "#232323"] },
    { name: "lava burst", colors: ["#FF1B1C", "#FFBE0B", "#001F1F"] },
    { name: "midnight plasma", colors: ["#00F0FF", "#FF2A6D", "#181818"] },
    { name: "hurricane chrome", colors: ["#00B2FF", "#FFD600", "#3A3A3A"] },
    { name: "matrix dusk", colors: ["#00FFB3", "#FF0054", "#101010"] },
    { name: "cyber citrus", colors: ["#FFB300", "#00F0FF", "#000000"] },
    { name: "heat frost", colors: ["#FF2A6D", "#00FF87", "#2D2D2D"] },
    { name: "optic flame", colors: ["#FF006E", "#FFD600", "#3A3A3A"] },
    { name: "tropical steel", colors: ["#00FFB3", "#3A86FF", "#1E1E1E"] },
    { name: "electric mirage", colors: ["#FF0054", "#00B2FF", "#282828"] },
    { name: "sunrise voltage", colors: ["#FFBE0B", "#FF1B1C", "#121212"] },
    { name: "nuclear frost", colors: ["#00F0FF", "#FFD600", "#0C0C0C"] },
    { name: "optic overload", colors: ["#00B2FF", "#FF2A6D", "#101010"] },
    { name: "lava mint", colors: ["#00FFB3", "#FF0054", "#222222"] },
    { name: "neon carbon", colors: ["#FF006E", "#00F0FF", "#1A1A1A"] },
    { name: "plasma burst", colors: ["#FF1B1C", "#FFD600", "#191919"] },
    { name: "signal heat", colors: ["#00F0FF", "#FFBE0B", "#333333"] },
    { name: "chrome overload", colors: ["#FF2A6D", "#00B2FF", "#1F1F1F"] },
    { name: "tiger glare", colors: ["#FFD600", "#FF0054", "#121212"] },
    { name: "vivid shock", colors: ["#FFB300", "#00FFB3", "#1B1B1B"] },
    { name: "electric surge", colors: ["#FF006E", "#FFD600", "#2E2E2E"] },
    { name: "cosmic pulse", colors: ["#00F0FF", "#FF2A6D", "#262626"] },
    { name: "plasma glitch", colors: ["#FF1B1C", "#00B2FF", "#0A0A0A"] },
    { name: "sunset drift", colors: ["#FFD600", "#FF0054", "#3A3A3A"] },
    { name: "acid flash", colors: ["#00FF87", "#FFBE0B", "#181818"] },
    { name: "laser heat", colors: ["#FF2A6D", "#00F0FF", "#101010"] },
    { name: "chrome pulse", colors: ["#00B2FF", "#FFD600", "#1E1E1E"] },
    { name: "optic blaze", colors: ["#FF0054", "#FFBE0B", "#222222"] },
    { name: "pixel glare", colors: ["#FF006E", "#00FFB3", "#121212"] },
    { name: "turbo storm", colors: ["#00F0FF", "#FF1B1C", "#262626"] },
    { name: "lunar heat", colors: ["#FF2A6D", "#FFD600", "#000000"] },
    { name: "neon flame", colors: ["#FFD600", "#00B2FF", "#1A1A1A"] },
    { name: "electric storm", colors: ["#FF0054", "#00FFB3", "#333333"] },
    { name: "cosmic charge", colors: ["#FFBE0B", "#00F0FF", "#222222"] },
    { name: "plasma frost", colors: ["#00FF87", "#FF2A6D", "#121212"] },
    { name: "sunset surge", colors: ["#FF006E", "#FFD600", "#1F1F1F"] },
  ];

// Get canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Get control elements
const lineCountSlider = document.getElementById('lineCount');
const lineCountValue = document.getElementById('lineCountValue');
const lineCountInput = document.getElementById('lineCountInput');
const lineThicknessSlider = document.getElementById('lineThickness');
const lineThicknessValue = document.getElementById('lineThicknessValue');
const lineThicknessInput = document.getElementById('lineThicknessInput');
const lineAlphaSlider = document.getElementById('lineAlpha');
const lineAlphaValue = document.getElementById('lineAlphaValue');
const lineAlphaInput = document.getElementById('lineAlphaInput');

const exportBtn = document.getElementById('exportBtn');
const colorBtns = document.querySelectorAll('.color-btn');
const distributionBtns = document.querySelectorAll('.distribution-btn');
const aspectBtns = document.querySelectorAll('.aspect-btn');
const modeBtns = document.querySelectorAll('.mode-btn');

// Color picker elements
const primaryColorPicker = document.getElementById('primaryColor');
const primaryColorHex = document.getElementById('primaryColorHex');
const secondaryColorPicker = document.getElementById('secondaryColor');
const secondaryColorHex = document.getElementById('secondaryColorHex');
const tertiaryColorPicker = document.getElementById('tertiaryColor');
const tertiaryColorHex = document.getElementById('tertiaryColorHex');

// Get random palette for initial load
function getRandomPalette() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    return randomPalette.colors;
}

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
    circleGradientAngles: [270, 270, 270], // Default angles for circle gradients (270° = top to bottom)
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

// Store current rectangle data
let currentRectangles = [];

// Store current circle data
let currentCircles = [];

// Image layer functionality
let uploadedImage = null;
let imageElement = null; // Preloaded image element
let imagePosition = { x: 0, y: 0 };
let imageSize = { width: 200, height: 200 };
let imageOriginalAspectRatio = 1; // Store original aspect ratio
let imageLayerPosition = 1; // Default: between 1st and 2nd rectangle
let imageOpacity = 1.0;
let imageAngle = 0; // Rotation angle in degrees
let isDraggingImage = false;
let dragOffset = { x: 0, y: 0 };

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
    lineCountInput.value = randomLineCount;
    
    // Random weight (3-25)
    const randomWeight = Math.floor(Math.random() * 23) + 3;
    lineThicknessSlider.value = randomWeight;
    lineThicknessValue.textContent = randomWeight + 'px';
    lineThicknessInput.value = randomWeight;
    config.lineWidth = randomWeight;
    
    // Random transparency (40-100%)
    const randomAlpha = Math.floor(Math.random() * 61) + 40;
    lineAlphaSlider.value = randomAlpha;
    lineAlphaValue.textContent = randomAlpha + '%';
    lineAlphaInput.value = randomAlpha;
    config.lineAlpha = randomAlpha;
    
    // Random color harmony
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    config.currentColors = randomPalette.colors;
    
    // Update the palette name display
    const paletteNameDisplay = document.getElementById('paletteNameDisplay');
    if (paletteNameDisplay) {
        paletteNameDisplay.textContent = randomPalette.name;
    }
    
    // Update color pickers and hex inputs
    primaryColorPicker.value = randomPalette.colors[0];
    primaryColorHex.value = randomPalette.colors[0];
    secondaryColorPicker.value = randomPalette.colors[1];
    secondaryColorHex.value = randomPalette.colors[1];
    tertiaryColorPicker.value = randomPalette.colors[2];
    tertiaryColorHex.value = randomPalette.colors[2];
    
    // Update color button active state to show "Color Harmony" is selected
    colorBtns.forEach(btn => btn.classList.remove('active'));
    const harmonyBtn = document.querySelector('.color-btn[data-type="harmony"]');
    if (harmonyBtn) harmonyBtn.classList.add('active');
    
    // Random distribution (normal, exponential, or concentric)
    const distributions = ['normal', 'exponential', 'concentric'];
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
    
    // Add event listeners for Enter key on text inputs
    lineCountInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            updateLineCountFromInput();
        }
    });
    lineThicknessInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            updateLineThicknessFromInput();
        }
    });
    lineAlphaInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            updateLineAlphaFromInput();
        }
    });
    
    // Color picker event listeners
    primaryColorPicker.addEventListener('input', () => updateColorFromPicker('primary'));
    primaryColorHex.addEventListener('input', () => updateColorFromHex('primary'));
    secondaryColorPicker.addEventListener('input', () => updateColorFromPicker('secondary'));
    secondaryColorHex.addEventListener('input', () => updateColorFromHex('secondary'));
    tertiaryColorPicker.addEventListener('input', () => updateColorFromPicker('tertiary'));
    tertiaryColorHex.addEventListener('input', () => updateColorFromHex('tertiary'));

    // Image upload event listeners
    const imageUpload = document.getElementById('imageUpload');
    const clearImageBtn = document.getElementById('clearImageBtn');
    const imageLayerSelect = document.getElementById('imageLayerPosition');
    const imageSizeSlider = document.getElementById('imageSize');
    const imageSizeValue = document.getElementById('imageSizeValue');
    const imageAngleSlider = document.getElementById('imageAngle');
    const imageAngleValue = document.getElementById('imageAngleValue');

    imageUpload.addEventListener('change', handleImageUpload);
    clearImageBtn.addEventListener('click', clearImage);
    imageLayerSelect.addEventListener('change', updateImageLayerPosition);
    imageSizeSlider.addEventListener('input', updateImageSize);
    imageAngleSlider.addEventListener('input', updateImageAngle);

    // Canvas interaction for image dragging
    canvas.addEventListener('mousedown', handleCanvasMouseDown);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('mouseup', handleCanvasMouseUp);
    canvas.addEventListener('touchstart', handleCanvasTouchStart);
    canvas.addEventListener('touchmove', handleCanvasTouchMove);
    canvas.addEventListener('touchend', handleCanvasTouchEnd);
    
    // Add event listeners for color pickers
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
    
    // Add custom angles event listeners - check if elements exist first
    const angle1 = document.getElementById('angle1');
    const angle2 = document.getElementById('angle2');
    const angle3 = document.getElementById('angle3');
    
    if (angle1) angle1.addEventListener('input', updateCustomAngles);
    if (angle2) angle2.addEventListener('input', updateCustomAngles);
    if (angle3) angle3.addEventListener('input', updateCustomAngles);
    
    // Add circle gradient angle event listeners - check if elements exist first
    const circle1Angle = document.getElementById('circle1Angle');
    const circle2Angle = document.getElementById('circle2Angle');
    const circle3Angle = document.getElementById('circle3Angle');
    
    if (circle1Angle) circle1Angle.addEventListener('input', updateCircleGradientAngles);
    if (circle2Angle) circle2Angle.addEventListener('input', updateCircleGradientAngles);
    if (circle3Angle) circle3Angle.addEventListener('input', updateCircleGradientAngles);
    
    // Add window resize listener for mobile orientation changes
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Prevent iOS zoom on double tap but allow scrolling
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            // Only prevent default if the target is not scrollable content
            const target = event.target.closest('.sheet-content, .controls-column, .bottom-sheet');
            if (!target) {
                event.preventDefault();
            }
        }
        lastTouchEnd = now;
    }, { passive: false });

    const shuffleBtn = document.getElementById('shuffleBtn');
    shuffleBtn.addEventListener('click', () => {
        randomizeSettings();
        generateDrawing();
    });

    exportBtn.addEventListener('click', exportToPNG);

    // Initialize the drawing
    generateDrawing();
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
    // Remove active class from all buttons
    aspectBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update current ratio
    config.currentRatio = event.target.dataset.ratio;
    
    // Update canvas size without regenerating
    updateCanvasSize();
    if (config.currentMode === 'rectangle') {
        redrawCurrentRectangles();
    } else if (config.currentMode === 'circles') {
        redrawCurrentCircles();
    } else {
        redrawCurrentPaths();
    }
}

// Update line count display and regenerate
function updateLineCount() {
    const count = lineCountSlider.value;
    lineCountValue.textContent = count;
    lineCountInput.value = count;
    generateDrawing();
}

// Update line thickness display and redraw with same paths
function updateLineThickness() {
    const thickness = lineThicknessSlider.value;
    lineThicknessValue.textContent = thickness + 'px';
    lineThicknessInput.value = thickness;
    config.lineWidth = parseInt(thickness);
    redrawCurrentPaths();
}

// Update line alpha display and update config.lineAlpha
function updateLineAlpha() {
    const alpha = lineAlphaSlider.value;
    lineAlphaValue.textContent = alpha + '%';
    lineAlphaInput.value = alpha;
    config.lineAlpha = parseFloat(alpha);
    
    // Update transparency based on current mode
    if (config.currentMode === 'rectangle') {
        redrawCurrentRectangles();
    } else if (config.currentMode === 'circles') {
        redrawCurrentCircles();
    } else {
        redrawCurrentPaths();
    }
}

// Update line count from text input
function updateLineCountFromInput() {
    const count = parseInt(lineCountInput.value);
    if (count >= 1 && count <= 100) {
        lineCountSlider.value = count;
        lineCountValue.textContent = count;
    generateDrawing();
}
}

// Update line thickness from text input
function updateLineThicknessFromInput() {
    const thickness = parseInt(lineThicknessInput.value);
    if (thickness >= 1 && thickness <= 30) {
        lineThicknessSlider.value = thickness;
        lineThicknessValue.textContent = thickness + 'px';
        config.lineWidth = thickness;
        redrawCurrentPaths();
    }
}

// Update line alpha from text input
function updateLineAlphaFromInput() {
    const alpha = parseInt(lineAlphaInput.value);
    if (alpha >= 0 && alpha <= 100) {
        lineAlphaSlider.value = alpha;
        lineAlphaValue.textContent = alpha + '%';
        config.lineAlpha = parseFloat(alpha);
        
        // Update transparency based on current mode
        if (config.currentMode === 'rectangle') {
            redrawCurrentRectangles();
        } else if (config.currentMode === 'circles') {
            redrawCurrentCircles();
        } else {
            redrawCurrentPaths();
        }
    }
}

// Update color from color picker
function updateColorFromPicker(colorType) {
    let picker, hexInput;
    switch(colorType) {
        case 'primary':
            picker = primaryColorPicker;
            hexInput = primaryColorHex;
            break;
        case 'secondary':
            picker = secondaryColorPicker;
            hexInput = secondaryColorHex;
            break;
        case 'tertiary':
            picker = tertiaryColorPicker;
            hexInput = tertiaryColorHex;
            break;
    }
    
    const color = picker.value;
    hexInput.value = color;
    
    // Update config colors
    const colors = [primaryColorPicker.value, secondaryColorPicker.value, tertiaryColorPicker.value];
    config.currentColors = colors;
    
    // Apply new colors to existing shapes
    updateColors();
}

// Update color from hex input
function updateColorFromHex(colorType) {
    let picker, hexInput;
    switch(colorType) {
        case 'primary':
            picker = primaryColorPicker;
            hexInput = primaryColorHex;
            break;
        case 'secondary':
            picker = secondaryColorPicker;
            hexInput = secondaryColorHex;
            break;
        case 'tertiary':
            picker = tertiaryColorPicker;
            hexInput = tertiaryColorHex;
            break;
    }
    
    const hexValue = hexInput.value;
    // Validate hex color format
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
        picker.value = hexValue;
        
        // Update config colors
        const colors = [primaryColorPicker.value, secondaryColorPicker.value, tertiaryColorPicker.value];
        config.currentColors = colors;
        
        // Apply new colors to existing shapes
        updateColors();
    }
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
        
        // Update the palette name display
        const paletteNameDisplay = document.getElementById('paletteNameDisplay');
        if (paletteNameDisplay) {
            paletteNameDisplay.textContent = randomPalette.name;
        }
        
        // Update color pickers and hex inputs
        primaryColorPicker.value = randomPalette.colors[0];
        primaryColorHex.value = randomPalette.colors[0];
        secondaryColorPicker.value = randomPalette.colors[1];
        secondaryColorHex.value = randomPalette.colors[1];
        tertiaryColorPicker.value = randomPalette.colors[2];
        tertiaryColorHex.value = randomPalette.colors[2];
    } else {
        // Update current colors from data attribute
        const colors = JSON.parse(event.target.dataset.colors);
        config.currentColors = colors;
        
        // Clear the palette name display for non-harmony palettes
        const paletteNameDisplay = document.getElementById('paletteNameDisplay');
        if (paletteNameDisplay) {
            paletteNameDisplay.textContent = '';
        }
        
        // Update color pickers and hex inputs
        primaryColorPicker.value = colors[0];
        primaryColorHex.value = colors[0];
        secondaryColorPicker.value = colors[1];
        secondaryColorHex.value = colors[1];
        tertiaryColorPicker.value = colors[2];
        tertiaryColorHex.value = colors[2];
    }
    
    // Apply new colors to existing shapes
    updateColors();
}

// Get random color from current palette
function getRandomColor() {
    return config.currentColors[Math.floor(Math.random() * config.currentColors.length)];
}

// Generate new rectangles with random sizes, positions, and angles
function generateRectangles() {
    currentRectangles = [];
    const w = config.canvasWidth;
    const h = config.canvasHeight;
    
    function getRandomRect() {
        // Use normal or exponential distribution for size and position
        let rw, rh, rx, ry, angle;
        if (config.currentDistribution === 'normal') {
            rw = Math.max(80, Math.min(w * 0.8, Math.abs(normalRandom(w * 0.5, w * 0.18))));
            rh = Math.max(80, Math.min(h * 0.8, Math.abs(normalRandom(h * 0.5, h * 0.18))));
            rx = Math.max(0, Math.min(w - rw, normalRandom(w * 0.5, w * 0.22)));
            ry = Math.max(0, Math.min(h - rh, normalRandom(h * 0.5, h * 0.22)));
            angle = normalRandom(0, Math.PI/8); // random angle, mean 0, stddev ~22deg
        } else {
            rw = Math.max(80, Math.min(w * 0.8, exponentialRandom(1.2) * w * 0.5));
            rh = Math.max(80, Math.min(h * 0.8, exponentialRandom(1.2) * h * 0.5));
            rx = Math.max(0, Math.min(w - rw, exponentialRandom(1.2) * w * 0.5));
            ry = Math.max(0, Math.min(h - rh, exponentialRandom(1.2) * h * 0.5));
            angle = (Math.random() - 0.5) * Math.PI/2; // random angle, -45 to +45 deg
        }
        return {rw, rh, rx, ry, angle};
    }
    
    // Generate 3 rectangles
    for (let i = 0; i < 3; i++) {
        currentRectangles.push(getRandomRect());
    }
    
    // Draw them for the first time
    redrawCurrentRectangles();
}

// Redraw existing rectangles with current colors and alpha, including image layer
function redrawCurrentRectangles() {
    clearCanvas();
    const colors = config.currentColors;
    const alpha = config.lineAlpha / 100;
    
    // Draw rectangles and image in the correct order based on imageLayerPosition
    for (let i = 0; i < currentRectangles.length; i++) {
        // Draw image before this rectangle if imageLayerPosition matches
        if (uploadedImage && imageLayerPosition === i) {
            drawImageLayer();
        }
        
        // Draw rectangle
        const rect = currentRectangles[i];
        const color = colors[i % colors.length];
        const {rw, rh, rx, ry, angle} = rect;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        // Move to rectangle center, rotate, then draw
        ctx.translate(rx + rw/2, ry + rh/2);
        ctx.rotate(angle);
        ctx.fillStyle = color;
        ctx.fillRect(-rw/2, -rh/2, rw, rh);
        ctx.restore();
    }
    
    // Draw image on top if imageLayerPosition is after all rectangles
    if (uploadedImage && imageLayerPosition >= currentRectangles.length) {
        drawImageLayer();
    }
}

// Draw the uploaded image at the current position and size
function drawImageLayer() {
    if (!imageElement) return;
    
    ctx.save();
    ctx.globalAlpha = imageOpacity;
    
    // Apply rotation if needed
    if (imageAngle !== 0) {
        // Move to center of image, rotate, then draw
        const centerX = imagePosition.x + imageSize.width / 2;
        const centerY = imagePosition.y + imageSize.height / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate(imageAngle * Math.PI / 180); // Convert degrees to radians
        ctx.drawImage(imageElement, -imageSize.width / 2, -imageSize.height / 2, imageSize.width, imageSize.height);
    } else {
        // No rotation, draw normally
        ctx.drawImage(imageElement, imagePosition.x, imagePosition.y, imageSize.width, imageSize.height);
    }
    
    ctx.restore();
}



// Generate new circles with random sizes and positions
function generateCircles() {
    currentCircles = [];
    const w = config.canvasWidth;
    const h = config.canvasHeight;
    
    function getRandomCircle() {
        // Use normal, exponential, or concentric distribution for size and position
        let radius, cx, cy;
        if (config.currentDistribution === 'normal') {
            // Generate radius between 60-300px for better visibility
            radius = Math.max(60, Math.min(300, Math.abs(normalRandom(150, 50))));
            // Center position with some variation
            cx = Math.max(radius, Math.min(w - radius, normalRandom(w * 0.5, w * 0.15)));
            cy = Math.max(radius, Math.min(h - radius, normalRandom(h * 0.5, h * 0.15)));
        } else if (config.currentDistribution === 'exponential') {
            // Exponential distribution for more varied sizes
            radius = Math.max(60, Math.min(300, exponentialRandom(0.8) * 200 + 60));
            cx = Math.max(radius, Math.min(w - radius, Math.random() * (w - 2 * radius) + radius));
            cy = Math.max(radius, Math.min(h - radius, Math.random() * (h - 2 * radius) + radius));
        } else if (config.currentDistribution === 'concentric') {
            // Concentric circles - same center, different sizes
            cx = w * 0.5; // Center horizontally
            cy = h * 0.5; // Center vertically
            // Generate different radius for each circle (will be overridden below)
            radius = 100; // Placeholder, will be set based on circle index
        }
        return {radius, cx, cy};
    }
    
    // Generate 3 circles
    for (let i = 0; i < 3; i++) {
        const circle = getRandomCircle();
        
        // For concentric distribution, override radius based on circle index
        if (config.currentDistribution === 'concentric') {
            // Create concentric circles with same radius: all the same size
            const radius = Math.min(w, h) * 0.3; // Same radius for all circles
            circle.radius = Math.max(100, radius); // Ensure good visibility
        }
        
        currentCircles.push(circle);
    }
    
    // Draw them for the first time
    redrawCurrentCircles();
}

// Redraw existing circles with current colors and alpha
function redrawCurrentCircles() {
    clearCanvas();
    const colors = config.currentColors;
    const alpha = config.lineAlpha / 100;
    
    // Ensure we have the proper context setup
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    currentCircles.forEach((circle, index) => {
        const color = colors[index % colors.length];
        const {radius, cx, cy} = circle;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create linear gradient with angle control
        let gradientAngle = 270; // Default: top to bottom (270 degrees)
        
        // Use custom gradient angle for all circle modes
        if (config.circleGradientAngles) {
            gradientAngle = config.circleGradientAngles[index] || 270;
        }
        
        // Convert angle to radians and calculate gradient endpoints
        const angleRad = (gradientAngle * Math.PI) / 180;
        const startX = cx - Math.cos(angleRad) * radius;
        const startY = cy - Math.sin(angleRad) * radius;
        const endX = cx + Math.cos(angleRad) * radius;
        const endY = cy + Math.sin(angleRad) * radius;
        
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, color + '1A'); // 10% opacity at start
        gradient.addColorStop(1, color + 'FF'); // 100% opacity at end
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    });
}



// Generate drawing based on current mode
function generateDrawing() {
    if (config.currentMode === 'rectangle') {
        generateRectangles();
        return;
    }
    if (config.currentMode === 'circles') {
        generateCircles();
        return;
    }
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

// Patch selectMode to show distribution section for rectangle mode too
function selectMode(event) {
    // Remove active class from all buttons
    modeBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    event.target.classList.add('active');
    // Update current mode
    config.currentMode = event.target.dataset.mode;
    
    // Show/hide custom angles section
    const customAnglesCard = document.getElementById('customAnglesCard');
    if (customAnglesCard) {
        if (config.currentMode === 'continuous') {
            customAnglesCard.style.display = 'flex';
            config.useCustomAngles = true;
        } else {
            customAnglesCard.style.display = 'none';
            config.useCustomAngles = false;
        }
    }
    
    // Show/hide distribution section based on mode
    const distributionSection = document.getElementById('distributionSection');
    if (distributionSection) {
        if (config.currentMode === 'continuous') {
            distributionSection.style.display = 'none';
        } else {
            distributionSection.style.display = 'block';
        }
    }

    // Show/hide image layer section for rectangle mode
    const imageLayerSection = document.getElementById('imageLayerSection');
    if (imageLayerSection) {
        if (config.currentMode === 'rectangle') {
            imageLayerSection.style.display = 'block';
        } else {
            imageLayerSection.style.display = 'none';
        }
    }

    // Show/hide circle angles section for all circle modes
    const circleAnglesSection = document.getElementById('circleAnglesSection');
    if (circleAnglesSection) {
        if (config.currentMode === 'circles') {
            circleAnglesSection.style.display = 'block';
        } else {
            circleAnglesSection.style.display = 'none';
        }
    }
    
    // Regenerate drawing with new mode
    generateDrawing();
}

// Update custom angles from input fields
function updateCustomAngles() {
    // Check if elements exist before accessing them
    const angle1 = document.getElementById('angle1');
    const angle2 = document.getElementById('angle2');
    const angle3 = document.getElementById('angle3');
    
    if (!angle1 || !angle2 || !angle3) {
        return;
    }
    
    // Automatically enable custom angles when inputs change
    config.useCustomAngles = true;
    config.customAngles[0] = parseFloat(angle1.value);
    config.customAngles[1] = parseFloat(angle2.value);
    config.customAngles[2] = parseFloat(angle3.value);
    

    
    generateDrawing();
}

// Update circle gradient angles from input fields
function updateCircleGradientAngles() {
    // Check if elements exist before accessing them
    const circle1Angle = document.getElementById('circle1Angle');
    const circle2Angle = document.getElementById('circle2Angle');
    const circle3Angle = document.getElementById('circle3Angle');
    
    const circle1AngleValue = document.getElementById('circle1AngleValue');
    const circle2AngleValue = document.getElementById('circle2AngleValue');
    const circle3AngleValue = document.getElementById('circle3AngleValue');
    
    if (!circle1Angle || !circle2Angle || !circle3Angle) {
        return;
    }
    
    // Update the config with new angles
    config.circleGradientAngles[0] = parseFloat(circle1Angle.value);
    config.circleGradientAngles[1] = parseFloat(circle2Angle.value);
    config.circleGradientAngles[2] = parseFloat(circle3Angle.value);
    
    // Update the display values
    if (circle1AngleValue) circle1AngleValue.textContent = circle1Angle.value + '°';
    if (circle2AngleValue) circle2AngleValue.textContent = circle2Angle.value + '°';
    if (circle3AngleValue) circle3AngleValue.textContent = circle3Angle.value + '°';
    
    // Redraw circles with new angles
    if (config.currentMode === 'circles') {
        redrawCurrentCircles();
    }
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

// Restore generateLinePaths for line modes
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
            const boundedEndX = Math.max(config.lineWidth/2, Math.min(config.canvasWidth - config.lineWidth/2, endX));
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
                const boundedNextX = Math.max(config.lineWidth/2, Math.min(config.canvasWidth - config.lineWidth/2, nextX));
                linePath.push({ x: boundedNextX, y: nextY });
                // Update current position
                currentX = boundedNextX;
                currentY = nextY;
            }
            currentLinePaths.push(linePath);
        }
    }
}

function redrawCurrentPaths() {
    clearCanvas();
    ctx.lineWidth = config.lineWidth;
    ctx.globalAlpha = config.lineAlpha / 100;
    currentLinePaths.forEach((path, index) => {
        ctx.strokeStyle = currentLineColors[index];
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
    });
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function generateFilename() {
    // Get figure type
    const figureType = config.currentMode;
    
    // Get palette name
    let paletteName = 'custom';
    
    // Check if current colors match any predefined palette
    const currentColorsStr = JSON.stringify(config.currentColors.sort());
    
    // Check for special palettes first
    if (JSON.stringify(['#000000', '#000000', '#000000']) === currentColorsStr) {
        paletteName = 'black';
    } else if (JSON.stringify(['#2c3e50', '#34495e', '#7f8c8d'].sort()) === currentColorsStr) {
        paletteName = 'gray';
    } else {
        // Check against color palettes
        for (const palette of colorPalettes) {
            if (JSON.stringify(palette.colors.slice().sort()) === currentColorsStr) {
                paletteName = palette.name.replace(/\s+/g, '-');
                break;
            }
        }
    }
    
    // Generate timestamp
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;
    
    return `${figureType}-${paletteName}-${timestamp}.png`;
}

function exportToPNG() {
    const link = document.createElement('a');
    link.download = generateFilename();
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function selectDistribution(event) {
    // Remove active class from all distribution buttons
    distributionBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    event.target.classList.add('active');
    // Update current distribution
    config.currentDistribution = event.target.dataset.distribution;
    
    // Show/hide circle angles section for all circle modes
    const circleAnglesSection = document.getElementById('circleAnglesSection');
    if (circleAnglesSection) {
        if (config.currentMode === 'circles') {
            circleAnglesSection.style.display = 'block';
        } else {
            circleAnglesSection.style.display = 'none';
        }
    }
    
    // Regenerate drawing with new distribution
    generateDrawing();
}

function updateLineColors() {
    // Update colors for existing lines based on current mode
    if (config.currentMode === 'continuous') {
        // Continuous mode uses consecutive colors
        currentLineColors = [];
        for (let i = 0; i < currentLinePaths.length; i++) {
            const colorIndex = i % config.currentColors.length;
            currentLineColors.push(config.currentColors[colorIndex]);
        }
    } else {
        // Segmented mode uses random colors from the palette
        currentLineColors = [];
        for (let i = 0; i < currentLinePaths.length; i++) {
            currentLineColors.push(getRandomColor());
        }
    }
}

function updateColors() {
    if (config.currentMode === 'rectangle') {
        redrawCurrentRectangles();
    } else if (config.currentMode === 'circles') {
        redrawCurrentCircles();
    } else {
        // Update line colors to use new palette, then redraw
        updateLineColors();
        redrawCurrentPaths();
    }
}

// Image upload event handlers
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = e.target.result;
            
            // Preload the image element
            imageElement = new Image();
            imageElement.onload = function() {
                // Store original aspect ratio
                imageOriginalAspectRatio = imageElement.width / imageElement.height;
                
                // Calculate appropriate size maintaining aspect ratio
                const maxSize = 200;
                
                if (imageOriginalAspectRatio > 1) {
                    // Landscape
                    imageSize.width = maxSize;
                    imageSize.height = maxSize / imageOriginalAspectRatio;
                } else {
                    // Portrait or square
                    imageSize.height = maxSize;
                    imageSize.width = maxSize * imageOriginalAspectRatio;
                }
                
                // Center the image on the canvas
                imagePosition = { 
                    x: (config.canvasWidth - imageSize.width) / 2, 
                    y: (config.canvasHeight - imageSize.height) / 2 
                };
                
                imageLayerPosition = 1; // Default: between 1st and 2nd rectangle
                imageOpacity = 1.0;
                imageAngle = 0; // Reset rotation
                isDraggingImage = false;
                dragOffset = { x: 0, y: 0 };
                
                // Reset sliders to default values
                document.getElementById('imageSize').value = 200;
                document.getElementById('imageSizeValue').textContent = '200px';
                document.getElementById('imageAngle').value = 0;
                document.getElementById('imageAngleValue').textContent = '0°';
                
                // Show image controls
                document.getElementById('clearImageBtn').style.display = 'inline-block';
                document.getElementById('layerPositionRow').style.display = 'flex';
                document.getElementById('imageSizeRow').style.display = 'flex';
                document.getElementById('imageAngleRow').style.display = 'flex';
                document.getElementById('imageInstructions').style.display = 'block';
                
                generateDrawing();
            };
            imageElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function clearImage() {
    uploadedImage = null;
    imageElement = null;
    
    // Hide image controls
    document.getElementById('clearImageBtn').style.display = 'none';
    document.getElementById('layerPositionRow').style.display = 'none';
    document.getElementById('imageSizeRow').style.display = 'none';
    document.getElementById('imageAngleRow').style.display = 'none';
    document.getElementById('imageInstructions').style.display = 'none';
    
    // Reset file input
    document.getElementById('imageUpload').value = '';
    
    generateDrawing();
}

function updateImageLayerPosition(event) {
    imageLayerPosition = parseInt(event.target.value);
    redrawCurrentRectangles(); // Just redraw, don't regenerate
}

function updateImageSize(event) {
    const size = parseInt(event.target.value);
    document.getElementById('imageSizeValue').textContent = size + 'px';
    
    // Maintain aspect ratio when resizing
    if (imageOriginalAspectRatio > 1) {
        // Landscape
        imageSize.width = size;
        imageSize.height = size / imageOriginalAspectRatio;
    } else {
        // Portrait or square
        imageSize.height = size;
        imageSize.width = size * imageOriginalAspectRatio;
    }
    
    // Keep image within canvas bounds
    imagePosition.x = Math.max(0, Math.min(config.canvasWidth - imageSize.width, imagePosition.x));
    imagePosition.y = Math.max(0, Math.min(config.canvasHeight - imageSize.height, imagePosition.y));
    
    redrawCurrentRectangles(); // Just redraw, don't regenerate
}

function updateImageAngle(event) {
    imageAngle = parseInt(event.target.value);
    document.getElementById('imageAngleValue').textContent = imageAngle + '°';
    redrawCurrentRectangles(); // Just redraw, don't regenerate
}



// Canvas interaction for image dragging
function getCanvasCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = config.canvasWidth / rect.width;
    const scaleY = config.canvasHeight / rect.height;
    
    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
}

function isPointInImage(x, y) {
    return uploadedImage && 
           x >= imagePosition.x && 
           x <= imagePosition.x + imageSize.width &&
           y >= imagePosition.y && 
           y <= imagePosition.y + imageSize.height;
}

function handleCanvasMouseDown(event) {
    if (event.button === 0 && uploadedImage && config.currentMode === 'rectangle') {
        const coords = getCanvasCoordinates(event);
        if (isPointInImage(coords.x, coords.y)) {
            isDraggingImage = true;
            dragOffset.x = coords.x - imagePosition.x;
            dragOffset.y = coords.y - imagePosition.y;
            event.preventDefault();
        }
    }
}

function handleCanvasMouseMove(event) {
    if (isDraggingImage && uploadedImage) {
        const coords = getCanvasCoordinates(event);
        imagePosition.x = Math.max(0, Math.min(config.canvasWidth - imageSize.width, coords.x - dragOffset.x));
        imagePosition.y = Math.max(0, Math.min(config.canvasHeight - imageSize.height, coords.y - dragOffset.y));
        redrawCurrentRectangles(); // Just redraw, don't regenerate
        event.preventDefault();
    }
}

function handleCanvasMouseUp(event) {
    if (isDraggingImage) {
        isDraggingImage = false;
        event.preventDefault();
    }
}

function handleCanvasTouchStart(event) {
    if (event.touches.length === 1 && uploadedImage && config.currentMode === 'rectangle') {
        const touch = event.touches[0];
        const coords = getCanvasCoordinates(touch);
        if (isPointInImage(coords.x, coords.y)) {
            isDraggingImage = true;
            dragOffset.x = coords.x - imagePosition.x;
            dragOffset.y = coords.y - imagePosition.y;
            event.preventDefault();
        }
    }
}

function handleCanvasTouchMove(event) {
    if (isDraggingImage && uploadedImage && event.touches.length === 1) {
        const touch = event.touches[0];
        const coords = getCanvasCoordinates(touch);
        imagePosition.x = Math.max(0, Math.min(config.canvasWidth - imageSize.width, coords.x - dragOffset.x));
        imagePosition.y = Math.max(0, Math.min(config.canvasHeight - imageSize.height, coords.y - dragOffset.y));
        redrawCurrentRectangles(); // Just redraw, don't regenerate
        event.preventDefault();
    }
}

function handleCanvasTouchEnd(event) {
    if (isDraggingImage) {
        isDraggingImage = false;
        event.preventDefault();
    }
} 