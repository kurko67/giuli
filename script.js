// Función para el reproductor de música
function initMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const musicToggle = document.getElementById('musicToggle');
    const volumeBtn = document.getElementById('musicVolume');
    const audio = document.getElementById('backgroundMusic');
    const progressBar = document.getElementById('progressBar');
    
    let isPlaying = false;
    let isMuted = false;
    
    // Función para reproducir/pausar
    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            musicToggle.classList.remove('playing');
            isPlaying = false;
        } else {
            audio.play().catch(e => {
                console.log('Error al reproducir:', e);
                // Mostrar mensaje al usuario si no puede reproducir automáticamente
                showMusicMessage();
            });
            musicToggle.classList.add('playing');
            isPlaying = true;
        }
    }
    
    // Función para mostrar/ocultar volumen
    function toggleMute() {
        if (isMuted) {
            audio.muted = false;
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            volumeBtn.classList.remove('muted');
            isMuted = false;
        } else {
            audio.muted = true;
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            volumeBtn.classList.add('muted');
            isMuted = true;
        }
    }
    
    // Función para mostrar mensaje sobre reproducción automática
    function showMusicMessage() {
        const notification = document.createElement('div');
        notification.className = 'music-notification';
        notification.innerHTML = `
            <i class="fas fa-music"></i>
            <span>Haz clic para reproducir la música</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #e91e63, #ff6b9d);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 9999;
            animation: slideInDown 0.3s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        document.body.appendChild(notification);
        
        notification.addEventListener('click', () => {
            toggleMusic();
            notification.remove();
        });
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutUp 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Actualizar barra de progreso
    function updateProgress() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';
        }
    }
    
    // Event listeners
    musicToggle.addEventListener('click', toggleMusic);
    volumeBtn.addEventListener('click', toggleMute);
    audio.addEventListener('timeupdate', updateProgress);
    
    // Configurar volumen inicial
    audio.volume = 0.3; // 30% de volumen inicial
    
    // Intentar reproducir automáticamente después de una interacción del usuario
    document.addEventListener('click', function autoPlay() {
        if (!isPlaying) {
            audio.play().then(() => {
                musicToggle.classList.add('playing');
                isPlaying = true;
            }).catch(e => {
                console.log('No se pudo reproducir automáticamente');
            });
        }
        document.removeEventListener('click', autoPlay);
    }, { once: true });
    
    // Mostrar/ocultar reproductor con scroll
    let lastScrollTop = 0;
    let isPlayerHovered = false;
    
    // Detectar hover sobre el reproductor
    musicPlayer.addEventListener('mouseenter', () => {
        isPlayerHovered = true;
        musicPlayer.style.transform = 'translateY(-5px)';
    });
    
    musicPlayer.addEventListener('mouseleave', () => {
        isPlayerHovered = false;
        // Restaurar estado según scroll
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            const isMobileScreen = window.innerWidth <= 768;
            if (isMobileScreen) {
                musicPlayer.style.transform = 'translateY(70%)';
            } else {
                musicPlayer.style.transform = 'translateY(60%)';
            }
        } else {
            musicPlayer.style.transform = 'translateY(0)';
        }
    });
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isMobileScreen = window.innerWidth <= 768;
        
        // No ocultar si el usuario está con hover
        if (isPlayerHovered) {
            return;
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Scrolling down - comportamiento diferente para móvil y desktop
            if (isMobileScreen) {
                musicPlayer.style.transform = 'translateY(70%)';
            } else {
                musicPlayer.style.transform = 'translateY(60%)';
            }
        } else {
            // Scrolling up - mostrar completamente
            musicPlayer.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Función para el contador regresivo
function initCountdown() {
    const targetDate = new Date('2025-09-18T21:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Actualizar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Crear notificación de éxito
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '¡Copiado al portapapeles!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #e91e63, #ff6b9d);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    });
}

// Función para abrir el mapa
function openMap() {
    const address = 'Av. Principal 123, Ciudad';
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
}

// Función para el navbar transparente
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(233, 30, 99, 0.95), rgba(255, 107, 157, 0.95))';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        }
    });
}

// Función para el smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Cerrar el navbar en mobile
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// Función para el botón back to top
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para animaciones on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    document.querySelectorAll('.event-card, .dress-card, .gallery-item, .gift-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Función para el carrusel automático
function initCarousel() {
    const carousel = document.querySelector('#heroCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000,
        wrap: true,
        touch: true
    });
}

// Función para efecto parallax en el hero
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.carousel-item img');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Función para precargar imágenes
function preloadImages() {
    const imageUrls = [
        'images/giuliana1.jpg',
        'images/giuliana2.jpg',
        'images/giuliana3.jpg',
        'images/gallery1.jpg',
        'images/gallery2.jpg',
        'images/gallery3.jpg',
        'images/gallery4.jpg',
        'images/gallery5.jpg',
        'images/gallery6.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Función para crear efecto de partículas
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            animation: float 6s linear infinite;
            opacity: 0.7;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }
    
    // Crear partículas ocasionalmente
    setInterval(createParticle, 3000);
}

// Añadir estilos adicionales para animaciones
function addAnimationStyles() {
    const styles = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes slideInDown {
            from {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutUp {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particle {
            box-shadow: 0 0 10px #ffd700;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Función para manejar el redimensionamiento de ventana
function handleResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalcular dimensiones si es necesario
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.height = '100vh';
            }
        }, 250);
    });
}

// Función para detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Función para optimizar rendimiento en móviles
function optimizeForMobile() {
    if (isMobile()) {
        // Reducir animaciones en móviles
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Desactivar parallax en móviles
        return false;
    }
    return true;
}

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funciones
    initMusicPlayer();
    initCountdown();
    initNavbar();
    initSmoothScroll();
    initBackToTop();
    initScrollAnimations();
    initCarousel();
    handleResize();
    addAnimationStyles();
    preloadImages();
    
    // Solo activar parallax y partículas en desktop
    if (optimizeForMobile()) {
        initParallax();
        createParticles();
    }
    
    // Añadir clase para indicar que JS está cargado
    document.body.classList.add('js-loaded');
});

// Función para manejar errores de carga de imágenes
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Reemplazar con imagen placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZjlmYSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2Njg3OTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+';
            this.alt = 'Imagen no disponible';
        });
    });
}

// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Función para validar formularios (si se añaden en el futuro)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Función para mostrar loading
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading-overlay';
    loading.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
        </div>
    `;
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    document.body.appendChild(loading);
    return loading;
}

// Función para ocultar loading
function hideLoading(loadingElement) {
    if (loadingElement) {
        loadingElement.remove();
    }
}

// Función para modo oscuro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Aplicar tema guardado
function applyTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Función para compartir en redes sociales
function shareOnSocial(platform) {
    const url = window.location.href;
    const text = '¡Estás invitado a los 15 años de Giuliana! 🎉';
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'instagram':
            // Instagram no permite compartir URLs directamente
            copyToClipboard(url);
            alert('¡Enlace copiado! Puedes pegarlo en tu historia de Instagram.');
            return;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Añadir event listeners para compartir
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.includes('facebook') ? 'facebook' :
                            this.querySelector('i').className.includes('whatsapp') ? 'whatsapp' :
                            this.querySelector('i').className.includes('instagram') ? 'instagram' : '';
            
            if (platform) {
                shareOnSocial(platform);
            }
        });
    });
});

// Función para lazy loading de imágenes
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Añadir a la inicialización
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    applyTheme();
});
