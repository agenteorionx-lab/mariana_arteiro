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
    // 3. Signature Animation (Optional delay)
    // ==========================================
    const signature = document.querySelector('.signature-container');
    if (signature) {
        signature.style.opacity = '0';
        signature.style.transition = 'opacity 2s ease 1s';
        setTimeout(() => {
            signature.style.opacity = '1';
        }, 500);
    }
});
