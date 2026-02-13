// ─── NAV SCROLL EFFECT ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE NAV TOGGLE ───
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const navScrim = document.getElementById('navScrim');

function toggleNav() {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  if (navScrim) navScrim.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  if (navScrim) navScrim.classList.remove('open');
  document.body.style.overflow = '';
}

// Close nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', closeNav);
});

// Close nav when scrim is clicked
if (navScrim) navScrim.addEventListener('click', closeNav);

// Close nav on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav();
});

// ─── HERO CAROUSEL + 3D HOVER ───
const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(heroCarousel.querySelectorAll('.carousel-dot'));
  const prevBtn = heroCarousel.querySelector('[data-carousel-prev]');
  const nextBtn = heroCarousel.querySelector('[data-carousel-next]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let currentIndex = 0;
  let autoTimer = null;

  const setSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === currentIndex));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIndex);
      dot.setAttribute('aria-selected', i === currentIndex);
    });
  };

  const nextSlide = () => setSlide(currentIndex + 1);
  const prevSlide = () => setSlide(currentIndex - 1);

  const startAuto = () => {
    if (prefersReducedMotion) return;
    stopAuto();
    autoTimer = setInterval(nextSlide, 4500);
  };

  const stopAuto = () => {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  };

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAuto();
  });
  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAuto();
  });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      setSlide(i);
      startAuto();
    });
  });

  heroCarousel.addEventListener('mouseenter', stopAuto);
  heroCarousel.addEventListener('mouseleave', startAuto);
  heroCarousel.addEventListener('focusin', stopAuto);
  heroCarousel.addEventListener('focusout', startAuto);
  startAuto();

  if (supportsHover && !prefersReducedMotion) {
    const handleMove = (event) => {
      const rect = heroCarousel.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const tiltX = (y * -10).toFixed(2);
      const tiltY = (x * 10).toFixed(2);
      heroCarousel.style.setProperty('--tilt-x', `${tiltX}deg`);
      heroCarousel.style.setProperty('--tilt-y', `${tiltY}deg`);
      heroCarousel.classList.add('is-tilting');
    };

    const resetTilt = () => {
      heroCarousel.classList.remove('is-tilting');
      heroCarousel.style.setProperty('--tilt-x', '0deg');
      heroCarousel.style.setProperty('--tilt-y', '0deg');
    };

    heroCarousel.addEventListener('mousemove', handleMove);
    heroCarousel.addEventListener('mouseleave', resetTilt);
  }
}

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// ─── SECTION AWARENESS TRACKER ───
let currentVisibleSection = 'hero';

const sectionMap = {
  'hero': { name: 'Hero / Homepage', context: 'The visitor is on the main homepage hero section, seeing the studio tagline, featured project carousel, and call-to-action buttons.' },
  'work': { name: 'Selected Work', context: 'The visitor is browsing the case studies / portfolio section, looking at project cards for clients like Friends of the Wissahickon, Salus, Barstool Sportsbook, and others.' },
  'about': { name: 'About the Studio', context: 'The visitor is reading about Iron Peony\'s story, studio stats (200+ projects, 50+ brands), and the studio\'s approach to craft and strategy.' },
  'team': { name: 'Meet the Team', context: 'The visitor is looking at the team section, seeing team member cards for Thomas Miller, Ashley, Kendra, Ava, Savanna, and Gabriel.' },
  'capabilities': { name: 'Services & Capabilities', context: 'The visitor is exploring the services grid, which lists all 16 service offerings including Branding, Design Systems, UX, Photography, and more.' },
  'contact': { name: 'Contact / CTA', context: 'The visitor is at the "Let\'s Work Together" contact section at the bottom of the page — they may be ready to start a project.' }
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      const id = entry.target.id || entry.target.className.split(' ')[0];
      if (sectionMap[id]) {
        currentVisibleSection = id;
      }
    }
  });
}, { threshold: [0.3, 0.6] });

document.querySelectorAll('section[id], section.hero, section.about').forEach(sec => {
  sectionObserver.observe(sec);
});
const heroEl = document.querySelector('.hero');
if (heroEl) {
  heroEl.id = heroEl.id || 'hero';
  sectionObserver.observe(heroEl);
}

function getCurrentVisibleSection() {
  return currentVisibleSection;
}

function getSectionContext() {
  const section = sectionMap[currentVisibleSection];
  if (!section) return '';
  return `\n\nCURRENT PAGE CONTEXT:\nThe visitor is currently viewing the "${section.name}" section of the Iron Peony website. ${section.context} Tailor your response to be relevant to what they're currently looking at when appropriate.`;
}

// ─── OFFLINE / ONLINE DETECTION ───
const offlineBanner = document.getElementById('offlineBanner');

function updateOnlineStatus() {
  if (!navigator.onLine) {
    if (offlineBanner) offlineBanner.classList.add('visible');
    document.getElementById('chatFab')?.setAttribute('disabled', '');
    document.getElementById('voiceFab')?.setAttribute('disabled', '');
  } else {
    if (offlineBanner) offlineBanner.classList.remove('visible');
    document.getElementById('chatFab')?.removeAttribute('disabled');
    document.getElementById('voiceFab')?.removeAttribute('disabled');
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();
