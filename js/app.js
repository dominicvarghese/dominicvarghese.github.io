document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Scrolled State
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Simple toggle for now, CSS would need to handle the display change
        const isClosed = navLinks.style.display === 'none' || navLinks.style.display === '';

        if (isClosed) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--nav-bg)';
            navLinks.style.padding = '1rem';
            navLinks.style.textAlign = 'center';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Fix for resizing window restoring nav
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.width = 'auto';
            navLinks.style.padding = '0';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // 3. Typing Effect
    const typingText = document.querySelector('.typing-text');
    const phrases = ['Materials Scientist', 'Researcher', 'Problem Solver'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // 4. Scroll Animations (IntersectionObserver)
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');

                // Special handling for skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const barFill = entry.target.querySelector('.skill-bar-fill');
                    const targetWidth = barFill.getAttribute('data-width');
                    barFill.style.width = targetWidth;
                }

                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});
