
const GALLERY_CONFIG = {

  // ForenSys Vision 
  vision: [
    { src: '/imagenes/vision_panel.png', caption: 'Panel Principal' },
    { src: '/imagenes/vision_1.png', caption: 'Reconocimiento facial en vivo' },
  ],

  // ForenSys Lab 
  lab: [
    { src: '/imagenes/vision_panel.png', caption: 'Panel Principal' },
  ],

  //  Videos demo 
  videos: [
    { src: '/imagenes/video.mp4', caption: 'Demo ForenSys Vision' },
  ],

};



// ── Navbar scroll effect ──────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav ────────────────────────────
const hamburger = document.getElementById('navHamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Reveal on scroll ──────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter animation ─────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const isFloat = target % 1 !== 0;
  const duration = 1800;
  const steps = 60;
  let current = 0;
  const increment = target / steps;
  const interval = duration / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = (isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
  }, interval);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ── Uptime counter ────────────────────────
let startTime = Date.now();
const uptimeEl = document.getElementById('uptimeCounter');
if (uptimeEl) {
  setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    uptimeEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

// ── Particle canvas ───────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PARTICLE_COUNT = 60;
const particles = [];

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.radius = Math.random() * 1.5 + 0.3;
    this.alpha = Math.random() * 0.4 + 0.1;
    this.color = Math.random() > 0.5 ? '56,189,248' : '167,139,250';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.12;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── Gallery renderer ──────────────────────
function buildGallery() {
  const visionGrid = document.getElementById('galleryVision');
  const labGrid = document.getElementById('galleryLab');
  const videoGrid = document.getElementById('galleryVideo');

  // Images – Vision
  if (GALLERY_CONFIG.vision.length > 0) {
    GALLERY_CONFIG.vision.forEach(item => {
      const wrap = buildImageCard(item);
      visionGrid.appendChild(wrap);
    });
  } else {
    visionGrid.appendChild(buildEmptyState('Agrega rutas en GALLERY_CONFIG.vision'));
  }

  // Images – Lab
  if (GALLERY_CONFIG.lab.length > 0) {
    GALLERY_CONFIG.lab.forEach(item => {
      const wrap = buildImageCard(item);
      labGrid.appendChild(wrap);
    });
  } else {
    labGrid.appendChild(buildEmptyState('Agrega rutas en GALLERY_CONFIG.lab'));
  }

  // Videos
  if (GALLERY_CONFIG.videos.length > 0) {
    GALLERY_CONFIG.videos.forEach(item => {
      const wrap = buildVideoCard(item);
      videoGrid.appendChild(wrap);
    });
  } else {
    videoGrid.appendChild(buildEmptyState('Agrega rutas en GALLERY_CONFIG.videos'));
  }

  // Attach reveal to newly created items
  document.querySelectorAll('.gallery-item').forEach(el => revealObserver.observe(el));
}

function buildImageCard({ src, caption }) {
  const wrap = document.createElement('div');
  wrap.className = 'gallery-item reveal';

  const img = document.createElement('img');
  img.src = src;
  img.alt = caption || '';
  img.className = 'gallery-img';
  img.loading = 'lazy';
  img.addEventListener('click', () => openLightbox(src, caption));

  wrap.appendChild(img);

  if (caption) {
    const cap = document.createElement('div');
    cap.className = 'gallery-caption';
    cap.textContent = caption;
    wrap.appendChild(cap);
  }

  return wrap;
}

function buildVideoCard({ src, caption }) {
  const wrap = document.createElement('div');
  wrap.className = 'gallery-item gallery-item--video reveal';

  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  video.className = 'gallery-video';
  video.preload = 'metadata';

  wrap.appendChild(video);

  if (caption) {
    const cap = document.createElement('div');
    cap.className = 'gallery-caption';
    cap.textContent = caption;
    wrap.appendChild(cap);
  }

  return wrap;
}

function buildEmptyState(hint) {
  const el = document.createElement('div');
  el.className = 'gallery-empty';
  el.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="36" height="36">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
    <span>Sin contenido aún</span>
    <code>${hint}</code>`;
  return el;
}

// ── Gallery tabs ──────────────────────────
const tabs = document.querySelectorAll('.tab-btn');
const galleries = {
  vision: document.getElementById('galleryVision'),
  lab: document.getElementById('galleryLab'),
  video: document.getElementById('galleryVideo'),
};

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('tab-active'));
    btn.classList.add('tab-active');
    const target = btn.dataset.tab;
    Object.entries(galleries).forEach(([key, el]) => {
      el.classList.toggle('hidden', key !== target);
    });
  });
});

// ── Lightbox ──────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption || '';
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Smooth stagger for cards ──────────────
document.querySelectorAll('.modules-grid, .tech-grid, .metrics-grid, .download-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 100}ms`;
  });
});

// ── Init ──────────────────────────────────
buildGallery();
