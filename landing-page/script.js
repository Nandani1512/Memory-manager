// =============================================
// ByteLook Landing Page — Interactions
// =============================================

(function () {
  'use strict';

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ---- Scroll-reveal animation using IntersectionObserver ----
  const revealTargets = document.querySelectorAll(
    '.feature-card, .metric-pill'
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger the animation based on the element's position among siblings
          const parent = entry.target.parentElement;
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Parallax on hero glow orbs (subtle mouse movement) ----
  const heroSection = document.getElementById('hero');
  const glowOrbs = document.querySelectorAll('.hero__bg-glow');

  if (heroSection && glowOrbs.length) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      glowOrbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }
  // ---- Download button handler ----
  const toast = document.getElementById('download-toast');
  const toastClose = document.getElementById('toast-close');
  let toastTimer = null;

  function showToast() {
    toast.classList.add('toast--visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('toast--visible');
    }, 6000);
  }

  // Show a confirmation toast when download starts (don't block the actual download)
  document.querySelectorAll('#hero-download-btn, #nav-download-btn, #download-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast();
    });
  });

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('toast--visible');
      clearTimeout(toastTimer);
    });
  }
})();
