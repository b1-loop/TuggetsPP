document.addEventListener('DOMContentLoaded', function () {

    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navOverlay = document.querySelector('.nav-overlay');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('open');
            navOverlay.classList.toggle('visible');
            document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mainNav.classList.remove('open');
                navOverlay.classList.remove('visible');
                document.body.style.overflow = '';
            });
        }

        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mainNav.classList.remove('open');
                navOverlay.classList.remove('visible');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Scroll Fade-In Animations ---
    var fadeTargets = document.querySelectorAll('.menu-card, .footer-col, .story-text');
    fadeTargets.forEach(function (el) { el.classList.add('fade-in'); });

    var fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0) {
        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        fadeElements.forEach(function (el) { fadeObserver.observe(el); });
    }

    // --- Active Menu Category Highlighting ---
    var categoryNav = document.querySelector('.menu-category-nav');
    var menuCategories = document.querySelectorAll('.menu-category');

    if (categoryNav && menuCategories.length > 0) {
        var categoryLinks = categoryNav.querySelectorAll('a');

        var categoryObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    categoryLinks.forEach(function (link) {
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-25% 0px -65% 0px' });

        menuCategories.forEach(function (cat) { categoryObserver.observe(cat); });
    }

    // --- Scroll-to-Top Button ---
    var scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Dynamic Copyright Year ---
    var copyrightEl = document.querySelector('.copyright p');
    if (copyrightEl) {
        copyrightEl.textContent = '\u00A9 ' + new Date().getFullYear() + ' Tuggets Pizzeria.';
    }

});
