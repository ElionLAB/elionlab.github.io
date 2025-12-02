/**
 * LM Research Lab - Main JavaScript
 * Vanilla JS for interactivity
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            navMenu.setAttribute('aria-hidden', !isExpanded);
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        });
    }

    /**
     * Header Scroll Effect
     */
    function initHeaderScroll() {
        if (!header) return;

        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add shadow when scrolled
            if (currentScroll > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }

    /**
     * Active Navigation Link
     */
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Lazy Loading Images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Animation on Scroll
     */
    function initScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(el => animationObserver.observe(el));
        }
    }

    /**
     * Initialize all functions
     */
    function init() {
        initMobileMenu();
        initHeaderScroll();
        setActiveNavLink();
        initSmoothScroll();
        initLazyLoading();
        initScrollAnimations();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

