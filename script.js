document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Current Year Footer
    // ==========================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 2. Scroll Reveal Animation
    // ==========================================
    const observeElements = document.querySelectorAll('.fade-in-up, .alert-container, .problems-grid, .learning-list, .learning-disclaimer');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.4 /* Dispara quando 40% do bloco estiver visível (mais ao meio) */
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observeElements.forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // 4. Global Premium Smooth Scroll (40% Slower)
    // ==========================================
    const smoothScroll = (target, duration) => {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const time = Math.min(progress / duration, 1);
            
            /* Easing function: easeInOutCubic para maior fluidez */
            const ease = time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + distance * ease);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Aplica o scroll para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId.length > 1) {
                e.preventDefault();
                smoothScroll(targetId, 1800); /* 1.8 segundos para ser bem visível e premium */
            }
        });
    });
});
