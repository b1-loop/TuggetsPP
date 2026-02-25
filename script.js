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

        // Stäng menyn vid tap utanför menypanelen (fungerar på riktiga mobila enheter)
        document.addEventListener('touchstart', function (e) {
            if (mainNav.classList.contains('open') &&
                !mainNav.contains(e.target) &&
                !hamburger.contains(e.target)) {
                e.preventDefault();
                hamburger.classList.remove('active');
                mainNav.classList.remove('open');
                navOverlay.classList.remove('visible');
                document.body.style.overflow = '';
            }
        }, { passive: false });

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
                            link.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
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

    // --- Menu Search ---
    var searchInput = document.getElementById('menuSearch');
    var noResultsMsg = document.getElementById('searchNoResults');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var query = this.value.toLowerCase().trim();
            var totalVisible = 0;

            document.querySelectorAll('.menu-category').forEach(function (category) {
                var cards = category.querySelectorAll('.menu-card');
                var visibleInCat = 0;

                cards.forEach(function (card) {
                    if (!query || card.textContent.toLowerCase().includes(query)) {
                        card.classList.remove('search-hidden');
                        visibleInCat++;
                        totalVisible++;
                    } else {
                        card.classList.add('search-hidden');
                    }
                });

                if (cards.length > 0) {
                    category.classList.toggle('search-hidden', visibleInCat === 0);
                }
            });

            if (noResultsMsg) {
                noResultsMsg.classList.toggle('visible', totalVisible === 0 && query.length > 0);
            }
        });
    }

    // --- Open/Closed Status ---
    function getOpenStatus() {
        var now = new Date();
        var day = now.getDay();
        var t = now.getHours() * 60 + now.getMinutes();
        return day >= 1 && day <= 5 ? (t >= 660 && t < 1260) : (t >= 720 && t < 1260);
    }

    var openStatusEl = document.getElementById('openStatus');
    if (openStatusEl) {
        var isOpen = getOpenStatus();
        openStatusEl.classList.toggle('closed', !isOpen);
        var statusTextEl = openStatusEl.querySelector('[data-i18n]');
        if (statusTextEl) {
            statusTextEl.setAttribute('data-i18n', isOpen ? 'status_open' : 'status_closed');
            if (typeof applyTranslations === 'function') {
                applyTranslations(localStorage.getItem('tuggets_lang') || 'sv');
            }
        }
    }

    // --- Dynamic Copyright Year ---
    var copyrightEl = document.querySelector('.copyright p');
    if (copyrightEl) {
        copyrightEl.textContent = '\u00A9 ' + new Date().getFullYear() + ' Tuggets Pizzeria.';
    }

});
