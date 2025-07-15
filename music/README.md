# 🎵 Música de Fondo - Instrucciones

## Canción: "Hello" de Adele

Para que funcione la música de fondo, necesitas descargar la canción "Hello" de Adele y colocarla en la carpeta `music/`.

### Pasos para agregar la música:

1. **Descarga la canción "Hello" de Adele** desde una fuente legal como:
   - Spotify (para uso personal)
   - Apple Music
   - YouTube Music
   - Amazon Music
   - Comprarla en plataformas digitales

2. **Convierte el archivo a formato web**:
   - Formato recomendado: MP3 (más compatible)
   - Formato alternativo: OGG (para navegadores que no soportan MP3)

3. **Coloca los archivos en la carpeta `music/`**:
   ```
   music/
   ├── hello-adele.mp3
   └── hello-adele.ogg (opcional)
   ```

4. **Nombres de archivo exactos**:
   - `hello-adele.mp3`
   - `hello-adele.ogg` (opcional)

### Alternativas si no puedes conseguir "Hello" de Adele:

Si no puedes conseguir "Hello" de Adele, puedes usar cualquier otra canción. Solo necesitas:

1. **Cambiar el nombre del archivo** a `hello-adele.mp3` (o cambiar el código HTML)
2. **Actualizar el título** en el HTML:
   ```html
   <div class="music-title">Tu Canción - Artista</div>
   ```

### Cambiar la canción en el código:

Si quieres usar una canción diferente, edita estas líneas en `index.html`:

```html
<!-- Cambiar el título mostrado -->
<div class="music-title">Hello - Adele</div>

<!-- Cambiar los archivos de audio -->
<audio id="backgroundMusic" loop>
    <source src="music/tu-cancion.mp3" type="audio/mpeg">
    <source src="music/tu-cancion.ogg" type="audio/ogg">
</audio>
```

### Notas importantes:

- **Derechos de autor**: Asegúrate de tener los derechos necesarios para usar la música
- **Tamaño del archivo**: Las canciones grandes pueden hacer que la página cargue lentamente
- **Formato**: MP3 es el más compatible con todos los navegadores
- **Volumen**: El reproductor está configurado al 30% por defecto

### Funcionalidades del reproductor:

- ✅ Reproducción/pausa con botón
- ✅ Control de volumen (silenciar/activar)
- ✅ Barra de progreso
- ✅ Repetición automática (loop)
- ✅ Se oculta al hacer scroll hacia abajo
- ✅ Diseño responsivo para móviles

### Si no quieres música:

Si prefieres no tener música de fondo, puedes ocultar el reproductor agregando este CSS:

```css
.music-player {
    display: none !important;
}
```

¡La landing page funcionará perfectamente con o sin música! 🎉
