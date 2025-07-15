# 🚀 Guía de Despliegue - GitHub Pages

## Método 1: Usando GitHub Desktop (Más Fácil)

### Paso 1: Instalar GitHub Desktop
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Instala y conecta tu cuenta de GitHub

### Paso 2: Crear repositorio
1. En GitHub Desktop: File → New Repository
2. Nombre: `giuliana-15-anos`
3. Ubicación: Selecciona la carpeta padre de tu proyecto
4. Hacer público el repositorio

### Paso 3: Subir archivos
1. Arrastra todos los archivos del proyecto a la carpeta del repositorio
2. En GitHub Desktop verás los cambios
3. Escribe un commit message: "Primer commit - Landing page Giuliana 15 años"
4. Click en "Commit to main"
5. Click en "Publish repository"

### Paso 4: Activar GitHub Pages
1. Ve a tu repositorio en GitHub.com
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

¡Listo! Tu página estará disponible en: `https://tu-usuario.github.io/giuliana-15-anos/`

---

## Método 2: Usando Git desde Terminal

```bash
# Navegar a tu carpeta del proyecto
cd "d:\proyectos\chuni"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Primer commit - Landing page Giuliana 15 años"

# Agregar repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/giuliana-15-anos.git

# Subir archivos
git push -u origin main
```

Luego activar GitHub Pages en la configuración del repositorio.

---

## Método 3: Subida Manual por Web

1. Crea el repositorio en GitHub.com
2. Click en "uploading an existing file"
3. Arrastra todos los archivos
4. Commit changes
5. Activar GitHub Pages en Settings

---

## 🌐 Otras Alternativas de Hosting Gratuito

### Netlify (Muy fácil)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. ¡Listo! Te da una URL automáticamente

### Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Deploy automático

### Surge.sh
```bash
# Instalar surge
npm install -g surge

# Navegar a tu proyecto
cd "d:\proyectos\chuni"

# Desplegar
surge
```

---

## 📝 Consejos Importantes

1. **Música**: GitHub Pages no incluye archivos de música por copyright. Usa un servicio como:
   - Google Drive (hacer público)
   - Dropbox (enlace directo)
   - SoundCloud (embed)

2. **Imágenes**: Optimiza las imágenes antes de subirlas para carga rápida

3. **Dominio personalizado**: Puedes agregar tu propio dominio en GitHub Pages

4. **SSL**: GitHub Pages incluye HTTPS automáticamente

5. **Actualizaciones**: Cada vez que hagas push, la página se actualiza automáticamente

¡Elige el método que te resulte más cómodo! 🎉
