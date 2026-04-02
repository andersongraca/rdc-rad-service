// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {
    // Navigation Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            const icon = navToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
                const icon = navToggle.querySelector("i");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            });
        });
    }

    // Hero Carousel (if present)
    const slides = document.querySelectorAll(".hero-slide");
    const indicators = document.querySelectorAll(".indicator");
    const heroTitle = document.getElementById("heroTitle");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroDescription = document.getElementById("heroDescription");
    const heroBtn = document.getElementById("heroBtn");
    
    const slideData = [
        {
            title: "RDC RAD SERVICE",
            subtitle: "Física Médica e Radioproteção",
            description: "Na RDC RAD SERVICE, estamos comprometidos em fornecer soluções abrangentes e especializadas em proteção radiológica para hospitais, clínicas e centros de imagem.",
            btnText: "Agende uma visita"
        },
        {
            title: "RDC RAD SERVICE",
            subtitle: "Física Médica e Radioproteção",
            description: "Nosso especialista Matheus Alexandre trabalha para garantir a segurança dos pacientes, funcionários e público em geral, mantendo o mais alto padrão de qualidade.",
            btnText: "Conheça nossos serviços"
        }
    ];

    let currentSlide = 0;

    if (slides.length > 0 && heroTitle && heroSubtitle && heroDescription && heroBtn) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            indicators.forEach(indicator => indicator.classList.remove("active"));
            
            slides[index].classList.add("active");
            indicators[index].classList.add("active");
            
            const content = slideData[index];
            
            heroTitle.style.opacity = "0";
            heroSubtitle.style.opacity = "0";
            heroDescription.style.opacity = "0";
            heroBtn.style.opacity = "0";
            
            setTimeout(() => {
                heroTitle.textContent = content.title;
                heroSubtitle.textContent = content.subtitle;
                heroDescription.textContent = content.description;
                heroBtn.textContent = content.btnText;
                
                heroTitle.style.opacity = "1";
                heroSubtitle.style.opacity = "1";
                heroDescription.style.opacity = "1";
                heroBtn.style.opacity = "1";
            }, 300);
            
            currentSlide = index;
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                showSlide(index);
            });
        });

        setTimeout(() => {
            const firstTitle = slideData[0].title;
            typeWriter(heroTitle, firstTitle, 80);
        }, 1000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");
        
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // Contact form handling (if present)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const nome = formData.get("nome");
            const email = formData.get("email");
            const assunto = formData.get("assunto");
            const mensagem = formData.get("mensagem");
            
            const whatsappMessage = `Olá! Gostaria de entrar em contato.\n\nNome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
            
            const whatsappUrl = `https://wa.me/5579991625962?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, "_blank");
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".service-card, .team-card, .testimonial-card, .value-card, .client-card");
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

    // Add hover effects to client cards
    const clientCards = document.querySelectorAll(".client-card");
    clientCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        });
    });

    // Add loading animation to page
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Parallax effect for hero section
    window.addEventListener("scroll", function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            ripple.classList.add("ripple-effect");
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement("style");
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add typing effect to hero title on first load
    function typeWriter(element, text, speed = 100) {
        element.innerHTML = "";
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Add scroll-to-top functionality
    const scrollToTop = document.createElement("button");
    scrollToTop.innerHTML = "<i class=\"fas fa-arrow-up\"></i>";
    scrollToTop.className = "scroll-to-top";
    scrollToTop.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 40px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: var(--dark);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        font-size: 18px;
    `;
    
    document.body.appendChild(scrollToTop);
    
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTop.style.opacity = "1";
            scrollToTop.style.visibility = "visible";
        } else {
            scrollToTop.style.opacity = "0";
            scrollToTop.style.visibility = "hidden";
        }
    });
    
    scrollToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Add mobile-specific optimizations
    if (window.innerWidth <= 768) {
        const style = document.createElement("style");
        style.textContent = `
            @media (max-width: 768px) {
                .hero {
                    transform: none !important;
                }
                
                .service-card:hover,
                .team-card:hover,
                .value-card:hover {
                    transform: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Service Worker for offline functionality (optional)
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/sw.js")
                .then(registration => {
                    console.log("SW registered: ", registration);
                })
                .catch(registrationError => {
                    console.log("SW registration failed: ", registrationError);
                });
        });
    }

    // Logo Carousel (if present)
    const logoCarousel = document.querySelector(".logo-carousel-container");
    const logoTrack = document.querySelector(".logo-carousel-track");
    
    if (logoCarousel && logoTrack) {
        logoCarousel.addEventListener("mouseenter", function() {
            logoTrack.style.animationPlayState = "paused";
        });
        
        logoCarousel.addEventListener("mouseleave", function() {
            logoTrack.style.animationPlayState = "running";
        });
    }

    // Testimonials Carousel (if present)
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const testimonialIndicators = document.querySelectorAll(".testimonial-indicator");
    let currentTestimonial = 0;

    if (testimonialCards.length > 0 && testimonialIndicators.length > 0) {
        function showTestimonial(index) {
            testimonialCards.forEach(card => card.classList.remove("active"));
            testimonialIndicators.forEach(indicator => indicator.classList.remove("active"));
            
            testimonialCards[index].classList.add("active");
            testimonialIndicators[index].classList.add("active");
            
            currentTestimonial = index;
        }

        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 6000);

        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                showTestimonial(index);
            });
        });
    }
});

