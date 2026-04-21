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


    // 3. INITIALIZE SWIPER CAROUSEL (Ultra-Otimizado para Estabilidade Mobile)
    const isMobile = window.innerWidth < 992;

    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false, // Desativa loop para economizar memória e evitar crash no mobile
        grabCursor: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        speed: 600, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true // Ajuda na performance com muitos slides
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            992: { 
                slidesPerView: 3, 
                spaceBetween: 30,
                loop: true, // Reativa loop apenas no desktop se necessário
                speed: 8000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                }
            },
            1200: { slidesPerView: 4, spaceBetween: 30, loop: true, speed: 8000, autoplay: { delay: 0 } }
        }
    };

    if (typeof Swiper !== 'undefined' && document.querySelector('.specialistsSlider')) {
        try {
            const swiper = new Swiper('.specialistsSlider', swiperOptions);
        } catch (e) {
            console.error("Erro Swiper:", e);
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
