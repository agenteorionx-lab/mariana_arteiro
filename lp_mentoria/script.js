document.addEventListener('DOMContentLoaded', () => {
    // 1. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // 2. DYNAMIC SPEAKERS LIST FOR SWIPER
    const speakers = [
        {
            name: "Adriana Pacheco",
            theme: "Estruturas internacionais de PPS: joint tenancy with rights of survivorship",
            cv: "",
            img: "assets/palestrantes/adriana-pacheco.webp"
        },
        {
            name: "Alessandro Meliso",
            theme: "Proteção patrimonial: técnicas de defesa no processo executivo",
            cv: "O Professor Alessandro Meliso foi Juiz de Direito por mais de 21 anos, é Mestre em Ciências Jurídicas pela Faculdade de Direito Universidade Clássica de Lisboa.",
            img: "assets/palestrantes/alessandro-meliso.webp"
        },
        {
            name: "Alex Finizola",
            theme: "Planejamento internacionais",
            cv: "Mestrando em Contabilidade e Direito Tributário (FUCAPE). Pós-graduado/LLM em PPS (FGV SP). Vice-presidente do Grupo de Estudos de PPS e Holdings da OAB SP.",
            img: "assets/palestrantes/alex-finizola.webp"
        },
        {
            name: "Alexandre Arregui",
            theme: "Offshore e Trusts",
            cv: "Especialista em PPS Internacional. Pós-graduado pela PUCRS, The Geneva Graduate Institute, ITESO, Université de Genève e Sotheby’s Institute.",
            img: "assets/palestrantes/alexandre-arregui.webp"
        },
        {
            name: "Ana C. Brochado",
            theme: "Herança digital e os desafios do planejamento sucessório",
            cv: "",
            img: "assets/palestrantes/ana-carolina.webp"
        },
        {
            name: "Felipe Esteves",
            theme: "Holding rural",
            cv: "Advogado especialista em contratos e planejamento tributário no agronegócio.",
            img: "assets/palestrantes/felipe-esteves.webp"
        },
        {
            name: "Isabella Paranaguá",
            theme: "Contratos de namoro e união estável",
            cv: "Conselheira federal da OAB. Presidente da Comissão Nacional de Sucessões do CFOAB. Pós-doutora pela Universidade de Birmingham.",
            img: "assets/palestrantes/isabella-paranagua.webp"
        },
        {
            name: "Jefferson Valentin",
            theme: "Reflexos da Reforma Tributária nos Planejamentos",
            cv: "Auditor Fiscal da Receita Estadual de São Paulo, Inspetor de Fiscalização do ITCMD.",
            img: "assets/palestrantes/jefferson-valentin.webp"
        },
        {
            name: "João Teixeira",
            theme: "Governança",
            cv: "Conselheiro Consultivo Certificado. Consultor em PPS e Governança Familiar há 16 anos. Professor de Governança Corporativa em MBA.",
            img: "assets/palestrantes/joao-teixeira.webp"
        },
        {
            name: "Jonatas Albino",
            theme: "ITCMD na visão da SEFAZ/SP",
            cv: "Chefe do Núcleo de fiscalização de ITCMD na UGC/ITCMD da SEFAZ/SP.",
            img: "assets/palestrantes/jonatas-albino.webp"
        },
        {
            name: "Líbera Copetti",
            theme: "PPS no agronegócio",
            cv: "Professora. Mestre em Direito. Presidente da Comissão Nacional do Agronegócio do IBDFAM.",
            img: "assets/palestrantes/libera-copetti.webp"
        },
        {
            name: "Luiz Couto",
            theme: "Técnicas de venda para PPS",
            cv: "Advogado público concursado. Especialista em PPS pela FGV. Planejador Financeiro Certificado e Consultor de Valores Mobiliários.",
            img: "assets/palestrantes/luiz-couto.webp"
        },
        {
            name: "Mariana Maduro",
            theme: "S/A como instrumento de planejamento patrimonial e sucessório",
            cv: "Advogada especializada em Direito Societário e M&A. Professora de Direito Empresarial (FGV, IBMEC, PUC, EMERJ e UERJ).",
            img: "assets/palestrantes/mariana-maduro.png"
        },
        {
            name: "Mario Delgado",
            theme: "Cuidados no planejamento da partilha de participação",
            cv: "Mestre em Direito Civil (PUC-SP).",
            img: "assets/palestrantes/mario-delgado.webp"
        },
        {
            name: "Bia Machnick",
            theme: "Precificação e negociação de honorários na prática",
            cv: "Professora e consultora em gestão Financeira. Autora de 5 livros na área de Finanças e Formação de preços.",
            img: "assets/palestrantes/bia-machnick.png"
        },
        {
            name: "Juliana Guerra",
            theme: "O mapa dos conflitos societários aplicado ao PPS",
            cv: "Advogada há 15 anos, Mestre em Psicanálise e Práticas Sociais, com atuação em advocacia empresarial societária.",
            img: "assets/palestrantes/juliana-guerra.webp"
        },
        {
            name: "Silvia Marzagão",
            theme: "Atendimento ao cliente",
            cv: "Presidenta da Comissão da Advocacia de Família e Sucessões da OAB/SP.",
            img: "assets/palestrantes/silvia-marzagao.webp"
        },
        {
            name: "Marcia Ferreira",
            theme: "Contabilidade para holdings",
            cv: "Dra. em Ciências Contábeis (UnB). Sócia da Ferreira Holding Auditores. Autora de Contabilidade Introdutória de Holding.",
            img: "assets/palestrantes/marcia-ferreira.webp"
        },
        {
            name: "Pablo Arruda",
            theme: "O confronto entre os artigos 110 e 116 no CNT",
            cv: "Advogado e professor de Direito Empresarial há mais de 2 décadas.",
            img: "assets/palestrantes/pablo-arruda.webp"
        },
        {
            name: "Rodrigo Mazzei",
            theme: "Partilha em vida e seus efeitos para o PPS",
            cv: "Professor da UFES (graduação e PPGDir) e da FUCAPE Business School.",
            img: "assets/palestrantes/rodrigo-mazzei.webp"
        },
        {
            name: "Vanessa Chincoli",
            theme: "Cláusulas testamentárias",
            cv: "Mestre em Direito pela UFRGS. Advogada e professora de Direito de Família e Sucessões.",
            img: "assets/palestrantes/vanessa-chincoli.webp"
        },
        {
            name: "Hygoor Jorge",
            theme: "Ativos securitários",
            cv: "Professor da LLM em Direito Empresarial. Membro do IBEF. Mestrando em Contabilidade Tributária pela FUCAPE/RJ.",
            img: "assets/palestrantes/hygoor-jorge.webp"
        },
        {
            name: "Fernando Alberto",
            theme: "Nua-propriedade como estratégia tributária",
            cv: "Advogado com formação em Administração de Empresas e Contabilidade. Pós-graduado em PPS pela FGV Law. MBA em Holding.",
            img: "assets/palestrantes/fernando-alberto.webp"
        },
        {
            name: "Rosana P. Muknicka",
            theme: "Tratamento de dados no PPS",
            cv: "Especialista em Direito Digital com mais de 25 anos de experiência. Graduada em Direito pela USP.",
            img: "assets/palestrantes/mentoria-pps-e-holdings-rosana-p-muknicka.webp"
        },
        {
            name: "Elielton Souza",
            theme: "Integralização de imóveis rurais na PJ",
            cv: "Contador com quase 10 anos em escritório de contabilidade. Instrutor de cursos na área fiscal e tributária.",
            img: "assets/palestrantes/mentoria-pps-e-holdings-elielton-souza.webp"
        },
        {
            name: "Frederico Bastos",
            theme: "Prática em Planejamento Internacional",
            cv: "Professor de Direito Tributário no Insper, Ibmec e FGV. Mestre pela FGV. Coordenador do OTT do Insper.",
            img: "assets/palestrantes/frederico-mariana.webp"
        }
    ];

    const wrapper = document.getElementById('speakers-wrapper');

    speakers.forEach(speaker => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.setAttribute('data-name', speaker.name);
        
        slide.innerHTML = `
            <div class="speaker-card">
                <span class="bonus-tag">BÔNUS</span>
                <img src="${speaker.img}" alt="${speaker.name}" class="speaker-img" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/a00000/FAEABC?text=Foto+Indisponível';">
                <div class="speaker-info">
                    <h4 class="speaker-name">${speaker.name}</h4>
                    <p class="speaker-theme">${speaker.theme}</p>
                    ${speaker.cv ? `<p class="speaker-cv">${speaker.cv}</p>` : ''}
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });

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

    const swiper = new Swiper('.specialistsSlider', swiperOptions);

    // Pausa adicional para dispositivos de toque
    const sliderEl = document.querySelector('.specialistsSlider');
    if (sliderEl) {
        sliderEl.addEventListener('touchstart', () => {
            swiper.autoplay.stop();
        });
        sliderEl.addEventListener('touchend', () => {
            swiper.autoplay.start();
        });
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
