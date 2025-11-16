// COVER Website - Interactive Features

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip empty hash or just '#'
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(168, 85, 247, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards, gameplay steps, etc.
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .gameplay-step, .screenshot-placeholder, .contact-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isOpen = answer.style.maxHeight;

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.maxHeight = null;
        });

        // Toggle current FAQ
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Glitch effect on hero title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00de,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff
            `;
            setTimeout(() => {
                glitchText.style.textShadow = '';
            }, 100);
        }
    }, 200);
}

// Neon line animation intensity variation
const neonLines = document.querySelectorAll('.neon-line');
neonLines.forEach((line, index) => {
    setInterval(() => {
        const randomOpacity = 0.3 + Math.random() * 0.5;
        line.style.opacity = randomOpacity;
    }, 1000 + index * 500);
});

// Download button click tracking (replace with your analytics)
document.querySelectorAll('.store-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add your analytics tracking here
        console.log('Store button clicked:', button.classList.contains('app-store') ? 'App Store' : 'Google Play');

        // If you haven't set up real links yet, prevent default
        if (button.getAttribute('href') === '#') {
            e.preventDefault();
            alert('App Store links coming soon! The game is currently in development.');
        }
    });
});

// Mobile menu toggle (if you want to add a hamburger menu later)
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const navbar = document.querySelector('.navbar .container');
        const navMenu = document.querySelector('.nav-menu');

        if (!document.querySelector('.hamburger')) {
            const hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = `
                display: block;
                background: none;
                border: none;
                color: var(--neon-purple);
                font-size: 28px;
                cursor: pointer;
            `;

            hamburger.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                if (navMenu.style.display === 'flex') {
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '60px';
                    navMenu.style.right = '20px';
                    navMenu.style.background = 'rgba(0, 0, 0, 0.98)';
                    navMenu.style.padding = '20px';
                    navMenu.style.borderRadius = '8px';
                    navMenu.style.border = '2px solid var(--neon-purple)';
                }
            });

            navbar.appendChild(hamburger);
        }
    }
}

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add particle effect on mouse move (optional, CPU-intensive)
let particlesEnabled = false;
if (particlesEnabled) {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--neon-purple);
                border-radius: 50%;
                pointer-events: none;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                opacity: 1;
                box-shadow: 0 0 10px var(--neon-purple);
                z-index: 9999;
            `;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.style.transition = 'opacity 1s, transform 1s';
                particle.style.opacity = '0';
                particle.style.transform = 'translateY(50px)';
            }, 10);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });
}

console.log('%c COVER - The Ultimate Path Puzzle Game ', 'background: #a855f7; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with ❤️ for puzzle lovers ', 'color: #22d3ee; font-size: 14px;');
