// Crear imágenes SVG locales para evitar dependencias externas
const images = {
    'giuliana1.svg': createSVG('📸 Giuliana 1', '#e91e63', '#ffffff', 800, 600),
    'giuliana2.svg': createSVG('📸 Giuliana 2', '#ff6b9d', '#ffffff', 800, 600),
    'giuliana3.svg': createSVG('📸 Giuliana 3', '#ffd700', '#333333', 800, 600),
    'gallery1.svg': createSVG('📸 Galería 1', '#e91e63', '#ffffff', 400, 300),
    'gallery2.svg': createSVG('📸 Galería 2', '#ff6b9d', '#ffffff', 400, 300),
    'gallery3.svg': createSVG('📸 Galería 3', '#ffd700', '#333333', 400, 300),
    'gallery4.svg': createSVG('📸 Galería 4', '#9c27b0', '#ffffff', 400, 300),
    'gallery5.svg': createSVG('📸 Galería 5', '#e91e63', '#ffffff', 400, 300),
    'gallery6.svg': createSVG('📸 Galería 6', '#ff6b9d', '#ffffff', 400, 300)
};

function createSVG(text, bgColor, textColor, width, height) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${bgColor}cc;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="${width}" height="${height}" fill="url(#gradient)"/>
            <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/8}" fill="rgba(255,255,255,0.2)"/>
            <text x="${width/2}" y="${height/2}" font-family="Arial, sans-serif" font-size="${Math.min(width, height)/15}" fill="${textColor}" text-anchor="middle" dy="0.3em">${text}</text>
            <text x="${width/2}" y="${height/2 + 30}" font-family="Arial, sans-serif" font-size="${Math.min(width, height)/25}" fill="${textColor}" text-anchor="middle" dy="0.3em">${width}x${height}px</text>
        </svg>
    `)}`;
}

// Función para reemplazar URLs de placeholder
function replaceImages() {
    const imageElements = document.querySelectorAll('img');
    imageElements.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.includes('placeholder.com')) {
            // Determinar qué imagen usar basándose en el alt text
            const alt = img.getAttribute('alt') || '';
            let newSrc = '';
            
            if (alt.includes('Giuliana 1')) newSrc = images['giuliana1.svg'];
            else if (alt.includes('Giuliana 2')) newSrc = images['giuliana2.svg'];
            else if (alt.includes('Giuliana 3')) newSrc = images['giuliana3.svg'];
            else if (alt.includes('Galería 1')) newSrc = images['gallery1.svg'];
            else if (alt.includes('Galería 2')) newSrc = images['gallery2.svg'];
            else if (alt.includes('Galería 3')) newSrc = images['gallery3.svg'];
            else if (alt.includes('Galería 4')) newSrc = images['gallery4.svg'];
            else if (alt.includes('Galería 5')) newSrc = images['gallery5.svg'];
            else if (alt.includes('Galería 6')) newSrc = images['gallery6.svg'];
            
            if (newSrc) {
                img.src = newSrc;
            }
        }
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceImages);
} else {
    replaceImages();
}
