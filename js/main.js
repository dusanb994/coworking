(function () {
  'use strict';

  /* --- Mobile Navigation --- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-label', isOpen ? 'Zatvori meni' : 'Otvori meni');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-label', 'Otvori meni');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-label', 'Otvori meni');
        document.body.style.overflow = '';
      }
    });
  }

  /* --- Sticky Header Shadow --- */
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* --- Scroll Reveal --- */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* --- Contact Form Validation --- */
  const contactForm = document.getElementById('contactForm');
  const formBody = document.getElementById('formBody');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const fields = contactForm.querySelectorAll('[required]');

      fields.forEach(function (field) {
        const group = field.closest('.form-group');
        if (!group) return;

        group.classList.remove('error');

        if (field.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!field.value.trim() || !emailPattern.test(field.value.trim())) {
            group.classList.add('error');
            isValid = false;
          }
        } else if (field.tagName === 'SELECT') {
          if (!field.value) {
            group.classList.add('error');
            isValid = false;
          }
        } else if (!field.value.trim()) {
          group.classList.add('error');
          isValid = false;
        }
      });

      if (isValid && formBody && formSuccess) {
        formBody.classList.add('hidden');
        formSuccess.classList.add('visible');
      }
    });

    contactForm.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('error');
      });
    });
  }
})();
