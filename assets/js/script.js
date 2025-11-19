// ============================================
// LANDING PAGE - ESMALTAÇÃO EM GEL LUCRATIVA
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.module-card, .benefit-card, .bonus-item, .for-who-card'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ============================================
    // CTA BUTTON TRACKING
    // ============================================
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-final');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track CTA click (can be integrated with Google Analytics or other tools)
            const buttonText = this.querySelector('span')?.textContent || 'CTA Click';
            console.log('CTA Clicked:', buttonText);

            // Push event to dataLayer for GTM
            if (typeof window.dataLayer !== 'undefined') {
                window.dataLayer.push({
                    'event': 'cta_click',
                    'button_text': buttonText,
                    'button_location': this.closest('section')?.className || 'unknown'
                });
                console.log('CTA event pushed to dataLayer');
            } else {
                console.warn('dataLayer not available');
            }

            // Optional: Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': buttonText,
                    'value': 1
                });
                console.log('gtag event sent');
            } else {
                console.warn('gtag not available');
            }

            // Optional: Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
                console.log('Facebook Pixel Lead event sent');
            } else {
                console.warn('fbq (Facebook Pixel) not available - Check if Pixel is loaded via GTM');
            }
        });
    });

    // ============================================
    // SCROLL PROGRESS INDICATOR
    // ============================================
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        // You can use this to show a progress bar if needed
        // For now, we'll just add a class when user scrolls past hero
        if (scrollTop > windowHeight * 0.8) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateScrollProgress);

    // ============================================
    // LAZY LOAD IMAGES (if you add images later)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // COUNTDOWN TIMER (Optional - for urgency)
    // ============================================
    function startCountdown(duration, display) {
        let timer = duration, hours, minutes, seconds;

        const interval = setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (display) {
                display.textContent = hours + ":" + minutes + ":" + seconds;
            }

            if (--timer < 0) {
                clearInterval(interval);
                if (display) {
                    display.textContent = "Oferta Expirada";
                }
            }
        }, 1000);
    }

    // Uncomment to activate countdown (24 hours = 86400 seconds)
    // const countdownDisplay = document.querySelector('#countdown');
    // if (countdownDisplay) {
    //     startCountdown(86400, countdownDisplay);
    // }

    // ============================================
    // VIEWPORT HEIGHT FIX FOR MOBILE
    // ============================================
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();
    window.addEventListener('resize', setVH);

    // ============================================
    // FORM VALIDATION (if you add forms later)
    // ============================================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Submit form or send data
                console.log('Form is valid, submitting...');
                // form.submit();
            } else {
                console.log('Please fill all required fields');
            }
        });
    });

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log(
        '%c✨ Esmaltação em Gel Lucrativa ✨',
        'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #EDB7E9 0%, #C88DD9 100%); color: white; padding: 10px 20px; border-radius: 8px;'
    );
    console.log(
        '%cLanding Page desenvolvida com ❤️',
        'font-size: 14px; color: #7A7A7A;'
    );

    // ============================================
    // INITIALIZE
    // ============================================
    console.log('✅ JavaScript initialized successfully');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 */
function scrollToElement(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
