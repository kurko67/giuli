# 🎉 Landing Page - Giuliana 15 Años

Una elegante y responsiva landing page para la invitación de cumpleaños de 15 años de Giuliana, desarrollada con HTML5, CSS3, Bootstrap 5 y JavaScript.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Slider de Fotos**: Carrusel automático con fotos de Giuliana
- **Música de Fondo**: Reproductor con "Hello" de Adele y controles
- **Contador Regresivo**: Cuenta atrás hasta el 18 de Septiembre 2025
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales elegantes y sutiles
- **Información Completa**: Fecha, ubicación, dress code y más
- **Sección de Regalos**: Datos bancarios y Mercado Pago
- **Galería de Fotos**: Presentación elegante de momentos especiales

## 📁 Estructura del Proyecto

```
chuni/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript funcional
├── image-guide.html    # Guía para las imágenes
├── README.md           # Este archivo
├── music/              # Carpeta para la música
│   ├── hello-adele.mp3 # Canción de fondo (descargar)
│   ├── hello-adele.ogg # Formato alternativo (opcional)
│   └── README.md       # Instrucciones para la música
└── images/             # Carpeta para las imágenes
    ├── giuliana1.jpg   # Imagen 1 del slider (800x600px)
    ├── giuliana2.jpg   # Imagen 2 del slider (800x600px)
    ├── giuliana3.jpg   # Imagen 3 del slider (800x600px)
    ├── gallery1.jpg    # Imagen 1 de la galería (400x300px)
    ├── gallery2.jpg    # Imagen 2 de la galería (400x300px)
    ├── gallery3.jpg    # Imagen 3 de la galería (400x300px)
    ├── gallery4.jpg    # Imagen 4 de la galería (400x300px)
    ├── gallery5.jpg    # Imagen 5 de la galería (400x300px)
    └── gallery6.jpg    # Imagen 6 de la galería (400x300px)
```

## 🎨 Secciones Incluidas

### 1. **Hero Section**
- Slider con 3 fotos de Giuliana
- Título elegante "Giuliana 15 Años"
- Navegación fija en la parte superior

### 2. **Información del Evento**
- Fecha: Jueves, 18 de Septiembre 2025
- Hora: 21:00 hrs
- Ubicación: Salón de Eventos "La Terraza"
- Botón para ver en Google Maps

### 3. **Dress Code**
- Especificaciones para caballeros
- Especificaciones para damas
- Colores recomendados y no permitidos

### 4. **Galería de Fotos**
- 6 fotos en diseño de grilla
- Efectos hover elegantes
- Diseño responsivo

### 5. **Contador Regresivo**
- Cuenta atrás hasta el 18/09/2025 a las 21:00
- Muestra días, horas, minutos y segundos
- Actualización en tiempo real

### 6. **Sección de Regalos**
- Datos para transferencia bancaria
- Información de Mercado Pago
- Botones para copiar información

### 7. **Footer**
- Mensaje de agradecimiento personalizado
- Enlaces a redes sociales
- Diseño elegante con decoraciones

## 🚀 Cómo Usar

1. **Añadir la Música**:
   - Descarga "Hello" de Adele (o cualquier canción)
   - Colócala en la carpeta `music/` como `hello-adele.mp3`
   - Lee las instrucciones en `music/README.md`

2. **Añadir las Imágenes**:
   - Coloca las fotos de Giuliana en la carpeta `images/`
   - Usa los nombres exactos: `giuliana1.jpg`, `giuliana2.jpg`, etc.
   - Abre `image-guide.html` para ver las especificaciones

3. **Personalizar Información**:
   - Edita `index.html` para cambiar:
     - Nombre y edad
     - Fecha y hora del evento
     - Dirección del lugar
     - Datos bancarios
     - Mensaje del footer

4. **Personalizar Colores**:
   - Edita `styles.css` para cambiar la paleta de colores
   - Variables CSS en `:root` para fácil personalización

5. **Abrir la Página**:
   - Simplemente abre `index.html` en tu navegador
   - Para desarrollo, usa un servidor local (Live Server en VS Code)

## 🎯 Personalización Rápida

### Cambiar Datos del Evento
```html
<!-- En index.html, sección #evento -->
<p>Jueves, 18 de Septiembre</p>  <!-- Cambiar fecha -->
<p>21:00 hrs</p>                <!-- Cambiar hora -->
<p>Salón de Eventos "La Terraza"</p> <!-- Cambiar lugar -->
```

### Cambiar Datos Bancarios
```html
<!-- En index.html, sección #regalo -->
<p><strong>Cuenta:</strong> 1234567890</p>           <!-- Tu número de cuenta -->
<p><strong>CBU:</strong> 1234567890123456789012</p>  <!-- Tu CBU -->
<p><strong>Alias:</strong> giuliana.15años</p>       <!-- Tu alias MP -->
```

### Cambiar Fecha del Contador
```javascript
// En script.js, función initCountdown()
const targetDate = new Date('2025-09-18T21:00:00').getTime(); // Cambiar fecha
```

## 🎨 Colores del Tema

- **Primario**: #e91e63 (Rosa vibrante)
- **Secundario**: #ff6b9d (Rosa claro)
- **Acento**: #ffd700 (Dorado)
- **Texto**: #333 (Gris oscuro)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Chrome Mobile
- ✅ Responsive design para todos los tamaños
- ✅ Optimizado para dispositivos táctiles

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones y diseño moderno
- **Bootstrap 5**: Sistema de grillas y componentes
- **JavaScript**: Funcionalidad interactiva
- **Font Awesome**: Iconos elegantes
- **Google Fonts**: Tipografías Dancing Script y Poppins

## 💡 Consejos para las Fotos

1. **Slider Principal** (800x600px):
   - Usa las mejores fotos de Giuliana
   - Buena iluminación y calidad
   - Fotos que transmitan alegría

2. **Galería** (400x300px):
   - Mezcla fotos individuales y grupales
   - Diferentes momentos y expresiones
   - Mantén un estilo coherente

3. **Optimización**:
   - Comprime las imágenes (80-90% calidad)
   - Usa formato JPG para fotos
   - Asegúrate de que carguen rápido

## 🎉 Funcionalidades Especiales

- **Partículas Doradas**: Efecto visual sutil
- **Scroll Parallax**: Movimiento suave en hero
- **Navegación Inteligente**: Se adapta al scroll
- **Botón Back to Top**: Aparece al hacer scroll
- **Animaciones On Scroll**: Elementos aparecen gradualmente
- **Copiar al Portapapeles**: Para datos bancarios
- **Integración con Maps**: Botón para ver ubicación

## 📞 Soporte

Si necesitas ayuda con la personalización o tienes algún problema, no dudes en consultar. La landing page está diseñada para ser fácil de personalizar y mantener.

¡Que tengas una celebración increíble! 🎊✨
