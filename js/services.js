// ─── SERVICES DIALOG ───
const serviceData = {
  branding: {
    title: 'Branding & Identity',
    desc: 'We translate founder vision into a clear brand position and a visual system that feels unmistakably yours.',
    bullets: ['Positioning, naming, and brand architecture', 'Logo systems, typography, and art direction', 'Guidelines that keep teams aligned'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/c0345e0a-b047-4b1e-b92e-886e86d85169_carw_16x9x32.jpg?h=4b7dba68d9bfa87dbdabaebbfd66fc70',
    alt: 'Logo exploration grid'
  },
  'design-systems': {
    title: 'Design Systems',
    desc: 'Build a design language that speeds decision-making and keeps products consistent as they grow.',
    bullets: ['Component libraries and patterns', 'Design tokens with usage guidance', 'Figma + dev handoff support'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/03307dd6-8cc9-4348-84fd-7e2c5360407c_rwc_0x318x3333x1878x32.png?h=f181c1110af6a1ef9cd761ba63ffd383',
    alt: 'Interface system with modular cards'
  },
  'product-ux': {
    title: 'Product Design & UX',
    desc: 'We turn complexity into clarity with research-led UX and UI that feels effortless to use.',
    bullets: ['Research, journeys, and prioritization', 'Wireframes, prototypes, and testing', 'Polished UI for web or product'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/d47546ca-e828-44d9-b17d-bdefea7bd811_rwc_0x303x3333x1879x32.png?h=73352cad3e93d30357e5eeabbb538c61',
    alt: 'Product UI screens'
  },
  'web-dev': {
    title: 'Web Design & Development',
    desc: 'Premium web experiences that load fast, tell a story, and work beautifully on every screen.',
    bullets: ['Custom UX + visual design', 'Performance-minded front-end builds', 'Launch support and iteration'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/0ed4b0ee-67d2-4150-8ea7-7fa8c52d49b2_rwc_0x0x1920x1082x32.jpg?h=6fb5e6c8965631d1d3c0950ffd0726d1',
    alt: 'Website hero visual'
  },
  'ad-creative': {
    title: 'Ad Creative & Performance',
    desc: 'Bold, flexible ad creative designed to test, learn, and scale across channels.',
    bullets: ['High-volume ad production', 'Platform-optimized templates', 'Performance-led variants'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/deadb6bc-cc68-4ee0-8841-143e903d68f9_rwc_20x28x561x316x32.jpg?h=502ec8559a1d3c3e3a88cd6239a4d12b',
    alt: 'Campaign creative layout'
  },
  social: {
    title: 'Social Media Creative',
    desc: 'We build social systems that feel cohesive while keeping content fresh and timely.',
    bullets: ['Branded templates and design rules', 'Motion or video-ready assets', 'Content series and launch kits'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/aedc5cef-9175-426e-a099-ef305435fa70_carw_16x9x32.png?h=5be2ff1afe297683150768c847553829',
    alt: 'Lifestyle brand visuals'
  },
  motion: {
    title: 'Motion Design & Video',
    desc: 'Motion that adds clarity, rhythm, and energy — from explainers to launch moments.',
    bullets: ['Storyboarding and art direction', '2D/3D motion and micro-interactions', 'Video edits for web or social'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/0a170bfb-f80a-4076-a971-2683c722a7d7_carw_16x9x32.jpg?h=7ca8e5830fef688ba2dede5a46bac1dd',
    alt: 'Dynamic brand visuals'
  },
  presentation: {
    title: 'Presentation Design',
    desc: 'Presentations that persuade and align. We shape the narrative and design so your message lands.',
    bullets: ['Narrative structure + storytelling', 'Custom slide systems', 'Pitch, sales, and keynote decks'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/d47546ca-e828-44d9-b17d-bdefea7bd811_rwc_0x303x3333x1879x32.png?h=73352cad3e93d30357e5eeabbb538c61',
    alt: 'Presentation slide layout'
  },
  photography: {
    title: 'Photography',
    desc: 'Authentic, art-directed photography that captures real moments and elevates the brand.',
    bullets: ['Creative direction + shot planning', 'On-site or studio shoots', 'Post-production and delivery'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/b84c5715-cfad-4db0-a9c2-76d0ddde0394_carw_16x9x32.jpg?h=faca1d401eb81f1247fa48e27b24711c',
    alt: 'Studio photography'
  },
  illustration: {
    title: 'Illustration & Iconography',
    desc: 'Illustration and icon systems that give your brand a unique voice — playful or precise.',
    bullets: ['Bespoke illustration styles', 'Icon libraries and spot art', 'Scalable assets for web and print'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/3dc2a6ad-9d5e-43d3-8dbe-923a3bf9f6e9_carw_16x9x32.jpg?h=5118ba0c4b4d9ac95e1527c40af2c6a2',
    alt: 'Illustrated brand artwork'
  },
  email: {
    title: 'Email Design',
    desc: 'Email that feels clear, human, and on-brand — from newsletters to lifecycle campaigns.',
    bullets: ['Newsletter and lifecycle systems', 'Mobile-first layouts', 'Campaign creative + A/B variants'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/653efb29-9632-4a05-ba4b-983ce74d9b95_carw_16x9x32.png?h=a0cd0e17261be9f66826cedc2f820225',
    alt: 'Email campaign layout'
  },
  print: {
    title: 'Print & Packaging',
    desc: 'Tactile experiences that feel premium and memorable, from packaging to event collateral.',
    bullets: ['Packaging and label systems', 'Brochures, posters, and signage', 'Production-ready print files'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/deadb6bc-cc68-4ee0-8841-143e903d68f9_rwc_20x28x561x316x32.jpg?h=502ec8559a1d3c3e3a88cd6239a4d12b',
    alt: 'Print materials'
  },
  campaign: {
    title: 'Campaign Strategy',
    desc: 'Campaigns that connect messaging, creative direction, and rollout planning.',
    bullets: ['Campaign positioning + messaging', 'Creative direction and rollout plan', 'Multi-channel asset systems'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/ddf68579-ddc7-473c-8a00-81c477a6629e_rwc_0x0x1493x842x32.png?h=8dcc717ed81b7dfb6d7f70ef408afb8f',
    alt: 'Campaign visuals'
  },
  'ai-creative': {
    title: 'AI-Powered Creative',
    desc: 'We use AI to accelerate exploration while keeping craft and judgment firmly human-led.',
    bullets: ['Rapid concept exploration', 'Asset variations at scale', 'Human-led art direction'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/0a170bfb-f80a-4076-a971-2683c722a7d7_carw_16x9x32.jpg?h=7ca8e5830fef688ba2dede5a46bac1dd',
    alt: 'Creative experiments'
  },
  copy: {
    title: 'Copywriting & Content',
    desc: 'Words that sound like you and clarify value across web, campaigns, and product stories.',
    bullets: ['Website and product copy', 'Brand voice and messaging frameworks', 'Campaign and launch narratives'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/59166a4d-a703-43cf-b7ef-b1a8b23352c1_rwc_194x257x995x560x32.png?h=2577acdeb2c3f9b3bc6e57ab1d3a9a35',
    alt: 'Brand identity layout'
  },
  ebooks: {
    title: 'eBooks & Report Design',
    desc: 'Long-form content with a premium, editorial feel — readable, structured, and beautifully designed.',
    bullets: ['Editorial art direction', 'Infographics and layout systems', 'Designed PDFs or digital reports'],
    image: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/aedc5cef-9175-426e-a099-ef305435fa70_carw_16x9x32.png?h=5be2ff1afe297683150768c847553829',
    alt: 'Editorial layout'
  }
};

const serviceModal = document.getElementById('serviceModal');
const serviceScrim = document.getElementById('serviceScrim');
const serviceTitle = document.getElementById('serviceTitle');
const serviceDesc = document.getElementById('serviceDesc');
const serviceList = document.getElementById('serviceList');
const serviceImage = document.getElementById('serviceImage');
let activeServiceTitle = '';

function openServiceModal(key) {
  const data = serviceData[key];
  if (!data) return;
  activeServiceTitle = data.title;
  serviceTitle.textContent = data.title;
  serviceDesc.textContent = data.desc;
  serviceImage.src = data.image;
  serviceImage.alt = data.alt || data.title;
  serviceList.innerHTML = '';
  data.bullets.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    serviceList.appendChild(li);
  });
  serviceModal.classList.add('open');
  serviceScrim.classList.add('open');
  serviceModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Trap focus inside modal
  const closeBtn = serviceModal.querySelector('.service-close');
  if (closeBtn) closeBtn.focus();
}

function closeServiceModal() {
  serviceModal.classList.remove('open');
  serviceScrim.classList.remove('open');
  serviceModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openChatFromService() {
  const prompt = activeServiceTitle
    ? `I'd like to start a project for ${activeServiceTitle}.`
    : 'I would like to start a project.';
  closeServiceModal();
  openChatWithPrompt(prompt);
}

function openChatWithPrompt(text) {
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  if (!panel.classList.contains('open')) {
    fab.classList.add('open');
    panel.classList.add('open');
  }
  const input = document.getElementById('chatInput');
  input.value = text;
  input.style.height = 'auto';
  setTimeout(() => input.focus(), 200);
}

document.querySelectorAll('.svc-row[data-service]').forEach(row => {
  row.addEventListener('click', () => openServiceModal(row.dataset.service));
  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openServiceModal(row.dataset.service);
    }
  });
});

serviceScrim.addEventListener('click', closeServiceModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && serviceModal.classList.contains('open')) {
    closeServiceModal();
  }
});
