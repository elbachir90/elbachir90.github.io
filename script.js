// ==================== MODE SOMBRE/CLAIR ====================

// Initialisation du thème au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le thème sauvegardé ou utiliser le mode clair par défaut
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Mettre à jour l'icône du bouton
    updateThemeIcon(currentTheme);

    // Initialiser toutes les animations
    initAnimations();

    // Créer le système de particules
    createParticles();
});

// Fonction pour basculer entre mode clair et sombre
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Ajouter une transition smooth
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';

    // Appliquer le nouveau thème
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Mettre à jour l'icône
    updateThemeIcon(newTheme);

    // Animation du bouton
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
}

// Mettre à jour l'icône du bouton de thème
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'light' ? '🌙' : '☀️';
        themeToggle.setAttribute('aria-label',
            theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'
        );
    }
}

// ==================== ANIMATIONS ====================

function initAnimations() {
    // Animation des cartes au scroll
    animateOnScroll();

    // Animation du hero
    animateHero();

    // Animation des compteurs (si nécessaire)
    animateNumbers();

    // Effet parallax subtil
    parallaxEffect();

    // Animation des boutons
    animateButtons();
}

// Animation des éléments au scroll avec Intersection Observer
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Observer toutes les cartes de cours
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observer les sections de matières
    const subjectSections = document.querySelectorAll('.subject-section');
    subjectSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.15}s`;
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observer les info-sections
    const infoSections = document.querySelectorAll('.info-section');
    infoSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Animation du hero au chargement
function animateHero() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Animation des nombres (effet de compteur)
function animateNumbers() {
    const badges = document.querySelectorAll('.date-badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(-3deg)';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Effet parallax subtil sur le hero
function parallaxEffect() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Animations des boutons
function animateButtons() {
    const buttons = document.querySelectorAll('.course-link, .cta-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ==================== EFFETS INTERACTIFS ====================

// Effet de particules au survol des cartes
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.course-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Animation du logo au chargement
window.addEventListener('load', function() {
    const logo = document.querySelector('.logo-section img');
    if (logo) {
        logo.style.animation = 'bounce 1s ease';
    }
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation de typing pour le titre (optionnel)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Effet de brillance sur les tags
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// ==================== UTILITAIRES ====================

// Détection du scroll pour le header
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Fonction pour afficher un message de bienvenue (optionnel)
function showWelcomeMessage() {
    console.log('%c🎓 Bienvenue sur la Plateforme BTS CIEL! ',
        'background: #3498db; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%cCette plateforme a été conçue avec ❤️ pour vos étudiants',
        'color: #2c3e50; font-size: 14px;');
}

showWelcomeMessage();

// ==================== SYSTÈME DE PARTICULES ====================

function createParticles() {
    const particlesContainer = document.getElementById('particles-background');
    const particleCount = 50; // Nombre de particules

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Position aléatoire
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    // Taille aléatoire
    const size = Math.random() * 4 + 2;

    // Durée d'animation aléatoire
    const duration = Math.random() * 20 + 15;

    // Délai aléatoire
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: ${startY}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(52, 152, 219, 0.8) 0%, rgba(52, 152, 219, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: float ${duration}s ease-in-out ${delay}s infinite;
        opacity: 0.6;
    `;

    container.appendChild(particle);
}

// Ajouter l'animation CSS pour les particules via JavaScript
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            opacity: 1;
        }
    }

    [data-theme="dark"] .particle {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%) !important;
    }
`;
document.head.appendChild(styleSheet);

// ==================== ANIMATIONS 3D AVANCÉES POUR LES CARTES ====================

// Ajouter effet de flip au clic sur les cartes
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.course-card');

    cards.forEach(card => {
        // Effet 3D au mouvement de la souris
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });

        // Effet de flip au double-clic
        card.addEventListener('dblclick', function() {
            card.classList.add('flip');
            setTimeout(() => {
                card.classList.remove('flip');
            }, 600);
        });
    });
});

// Ajouter animation de float aléatoire à certaines cartes
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        if (index % 2 === 0) {
            setTimeout(() => {
                card.classList.add('float');
            }, index * 200);
        }
    });
});

// ==================== ANIMATIONS DE TITRE SPECTACULAIRES ====================

// Animation de glitch pour le titre principal
function addGlitchEffect() {
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            setTimeout(() => {
                this.classList.remove('glitch');
            }, 500);
        });
    }
}

window.addEventListener('load', addGlitchEffect);

// Effet de particules au clic
document.addEventListener('click', function(e) {
    createClickParticles(e.clientX, e.clientY);
});

function createClickParticles(x, y) {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 2;

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;

        document.body.appendChild(particle);

        let posX = x;
        let posY = y;
        let opacity = 1;

        const animate = () => {
            posX += Math.cos(angle) * velocity * 3;
            posY += Math.sin(angle) * velocity * 3;
            opacity -= 0.02;

            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}
