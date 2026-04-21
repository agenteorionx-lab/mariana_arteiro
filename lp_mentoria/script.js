document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-enabled');
    // 1. SCROLL REVEAL ANIMATION (DISABLED FOR STABILITY)
    /*
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const revealOnScroll = () => { ... };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    */

    // 2. DYNAMIC SPEAKERS LIST (MOVED TO STATIC HTML FOR STABILITY)


    // 3. INITIALIZE SWIPER CAROUSEL (Otimizado para Mobile vs Desktop)
    const isMobile = window.innerWidth < 992;

    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: !isMobile, // Desativa loop infinito no mobile para economizar DOM/Memória
        speed: isMobile ? 600 : 8000, /* Velocidade normal no mobile, ticker no desktop */
        allowTouchMove: true,
        autoplay: isMobile ? {
            delay: 3000,
            disableOnInteraction: false,
        } : {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 }
        }
    };

    if (typeof Swiper !== 'undefined' && document.querySelector('.specialistsSlider')) {
        try {
            const swiper = new Swiper('.specialistsSlider', swiperOptions);

            // Pausa adicional para dispositivos de toque
            const sliderEl = document.querySelector('.specialistsSlider');
            if (sliderEl) {
                sliderEl.addEventListener('touchstart', () => {
                    if (swiper.autoplay) swiper.autoplay.stop();
                });
                sliderEl.addEventListener('touchend', () => {
                    if (swiper.autoplay) swiper.autoplay.start();
                });
            }
        } catch (e) {
            console.error("Erro ao inicializar Swiper:", e);
        }
    }

    // 4. HEADER SCROLL EFFECT
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.85)';
                header.style.boxShadow = 'none';
            }
        });
    }

    // 5. FAQ ACCORDION LOGIC
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        if (summary) {
            summary.addEventListener('click', (e) => {
                // Se o item que clicamos NÃO está aberto, queremos abrir ele e FECHAR os outros
                if (!item.hasAttribute('open')) {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.removeAttribute('open');
                        }
                    });
                }
            });
        }
    });

});
