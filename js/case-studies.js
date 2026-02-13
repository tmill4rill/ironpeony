/* ─── CASE STUDY DATA ─── */
const caseStudies = {
  fow: {
    title: 'Friends of the Wissahickon',
    subtitle: '100 Years of Wild — Paper Project',
    tags: ['Branding', 'Print', 'Artisan Craft'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/ddf68579-ddc7-473c-8a00-81c477a6629e_rwc_0x0x1493x842x32.png?h=8dcc717ed81b7dfb6d7f70ef408afb8f',
    meta: { Client: 'Friends of the Wissahickon', Industry: 'Nonprofit / Conservation', Services: 'Print Design, Screen Printing, Artisan Papermaking', Year: '2024' },
    body: `
      <h3>The Brief</h3>
      <p>Iron Peony collaborated with Friends of the Wissahickon (FOW) and Historic RittenhouseTown to celebrate FOW's 100th anniversary, themed "100 Years of Wild." In honor of this milestone, we crafted a limited collection of handmade paper, capturing the essence of the Wissahickon's wild beauty.</p>

      <h3>The Process</h3>
      <p>Each piece was meticulously created at Historic RittenhouseTown, using artisanal techniques like pulp-pulling and screen printing to achieve natural textures that reflect the park's rugged landscape. We designed custom molds and deckles for both small and large format prints, embedding real flowers and organic materials into the paper itself.</p>
      <ul>
        <li>Custom mold and deckle fabrication for small and large format paper</li>
        <li>Pulp-pulling with embedded wildflowers and natural fibers</li>
        <li>Screen printing in both green and black colorways</li>
        <li>QR code sticker production for digital engagement</li>
        <li>Small format stamp production for limited edition pieces</li>
      </ul>

      <h3>The Impact</h3>
      <p>These unique papers became the perfect foundation for one-of-a-kind artworks, showcased at the gala's charity auction to support the preservation of this cherished green space for future generations. The collection celebrated the intersection of art, conservation, and community.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/ddf68579-ddc7-473c-8a00-81c477a6629e_rwc_0x0x1493x842x32.png?h=8dcc717ed81b7dfb6d7f70ef408afb8f'
    ]
  },
  salus: {
    title: 'Salus at Drexel University',
    subtitle: 'Bringing Healthcare on the Move',
    tags: ['Branding', 'Vehicle Wrap', 'Pattern Design'],
    heroImg: 'assets/case-studies/salus/salus-cover.png',
    meta: { Client: 'Salus University / Drexel University', Industry: 'Healthcare / Education', Services: 'Vehicle Wrap Design, Pattern Design, Brand Alignment', Year: '2023' },
    body: `
      <h3>The Brief</h3>
      <p>The Mobile Health Unit Bus wrap design for Salus at Drexel University presented an exciting opportunity to blend creativity with community service. This project was all about making healthcare resources more accessible, and our design aimed to reflect the mission of Salus University and Drexel University to provide essential services in a visually engaging and impactful way.</p>

      <h3>Design Highlights</h3>
      <ul>
        <li><strong>Visual Identity:</strong> Utilized bold and bright brand colors to create a friendly and approachable look, ensuring the bus is easily identifiable and inviting</li>
        <li><strong>Informative Elements:</strong> Included clear and concise information about the healthcare services offered, making it easy for community members to understand the resources available</li>
        <li><strong>Brand Alignment:</strong> Ensured design elements were consistent with branding guidelines of both Salus and Drexel University, maintaining a cohesive and professional appearance</li>
        <li><strong>Custom Pattern:</strong> Developed a bespoke pattern system that ties the wrap together and reinforces the institutional partnership</li>
      </ul>

      <h3>The Result</h3>
      <p>The final bus wrap transformed the Mobile Health Unit into a moving billboard for community wellness — approachable, professional, and unmistakably connected to both institutions it represents.</p>
    `,
    gallery: [
      { src: 'assets/case-studies/salus/salus-pattern-01.png', alt: 'Salus at Drexel custom pattern exploration' },
      { src: 'assets/case-studies/salus/salus-pattern-02.png', alt: 'Salus at Drexel pattern system detail' }
    ]
  },
  barstool: {
    title: 'Barstool Sportsbook',
    subtitle: 'Shareable Betslip — Innovative Sports Betting Experience',
    tags: ['UX Design', 'Product Design', 'Mobile App'],
    heroImg: 'assets/case-studies/barstool/barstool-cover.png',
    meta: { Client: 'Penn National Gaming / Barstool Sportsbook', Industry: 'Sports Entertainment / Fintech', Services: 'UX Design, Product Strategy, Social Features', Year: '2021–2022' },
    stats: [
      { num: '1.06M', label: 'Total Shares' },
      { num: '85%', label: 'Active Betslip Shares' },
      { num: '67%', label: 'Parlay Share Rate' },
      { num: '80,960', label: 'Bet Additions from Shares' }
    ],
    body: `
      <h3>Overview</h3>
      <p>In early 2021, Barstool Sportsbook introduced the Parlay Sharing Flow / Shareable Betslip feature, designed to enhance user engagement by allowing bettors to share their betslips with friends easily. This feature aimed to increase user interaction and drive higher bet placements through social sharing.</p>

      <h3>The Problem</h3>
      <p>Prior to the introduction of the shareable betslip feature, users had no efficient way to share their betting picks with friends. Sharing involved screenshots, raised privacy concerns around wagered amounts, and severely limited the potential for social engagement and collaborative betting.</p>

      <h3>The Solution</h3>
      <p>The Parlay Sharing Flow was developed to allow users to generate a unique link to their active betslip, which they could share with friends. This link enabled recipients to add the shared bet directly to their own betslip with just a few clicks — creating a truly collaborative betting experience.</p>
      <ul>
        <li>Recipients can add individual bets from the shared slip to their own betslip</li>
        <li>Option to hide wager amounts for privacy</li>
        <li>Specially formatted betslip shareable to social media platforms</li>
        <li>Customizable cover image for social shares</li>
        <li>Shareable closed betslip for post-game bragging rights</li>
      </ul>

      <h3>Implementation</h3>
      <p>The feature was implemented with a focus on user-friendly design and seamless integration into the existing betting flow. Key aspects included a prominent share button on the betslip screen, a streamlined process for generating and sharing the betslip link, and an intuitive interface for recipients to add shared bets to their own betslip with confirmation of bets being added.</p>

      <h3>Impact & Results</h3>
      <p>The Parlay Sharing Flow not only increased user engagement but also contributed to higher profitability for Barstool Sportsbook. By making it easier for users to share and place bets, the feature fostered a sense of community and collaboration among bettors. The feature was utilized 1.06 million times from early 2021 to fall 2022.</p>

      <h3>Conclusion</h3>
      <p>The successful implementation and positive reception of the Parlay Sharing Flow highlights the importance of social features in enhancing user experience and driving business growth. The feature's ability to generate significant engagement and profitability underscores its value to both users and the business.</p>
    `,
    galleryLayout: 'single-col',
    gallery: [
      { src: 'assets/case-studies/barstool/barstool-flow.png', alt: 'Barstool Sportsbook shareable betslip flow' },
      { src: 'assets/case-studies/barstool/barstool-betslip-01.png', alt: 'Barstool Sportsbook betslip share preview' },
      { src: 'assets/case-studies/barstool/barstool-betslip-02.png', alt: 'Barstool Sportsbook betslip share detail' }
    ]
  },
  aaa: {
    title: 'AAA Mid-Atlantic',
    subtitle: 'Comprehensive Campaign Management',
    tags: ['Campaign', 'Print Design', 'Digital Banners'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/deadb6bc-cc68-4ee0-8841-143e903d68f9_rwc_20x28x561x316x32.jpg?h=502ec8559a1d3c3e3a88cd6239a4d12b',
    meta: { Client: 'AAA Mid-Atlantic', Industry: 'Insurance / Travel / Automotive', Services: 'Print Design, Digital Banners, Campaign Creative', Year: 'Ongoing' },
    body: `
      <h3>The Brief</h3>
      <p>At AAA Mid-Atlantic, the focus is on creating dynamic and effective campaigns across multiple channels. Our team was tasked with developing a variety of media assets to ensure that each campaign was fresh, engaging, and impactful.</p>

      <h3>The Work</h3>
      <p>From print to digital, every piece was crafted with attention to detail and a commitment to maintaining AAA Mid-Atlantic's high standards. Our collaborative approach allowed us to deliver cohesive and powerful campaign materials that resonated with their audience.</p>
      <ul>
        <li><strong>Print Design:</strong> Full suite of print collateral including direct mail, brochures, and in-branch materials</li>
        <li><strong>Digital Banners:</strong> Responsive display ad creative across multiple sizes and formats</li>
        <li><strong>Campaign Continuity:</strong> Ensured visual and tonal consistency across all touchpoints</li>
      </ul>

      <h3>The Result</h3>
      <p>A multi-channel campaign system that maintained brand consistency while adapting creative messaging across print, digital, and environmental formats — all delivered at the pace and scale AAA's marketing team required.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/deadb6bc-cc68-4ee0-8841-143e903d68f9_rwc_20x28x561x316x32.jpg?h=502ec8559a1d3c3e3a88cd6239a4d12b'
    ]
  },
  caesar: {
    title: 'Caesar Rodney Half Marathon',
    subtitle: 'Supporting Community Traditions',
    tags: ['Branding', 'Event Design', 'Campaign'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/653efb29-9632-4a05-ba4b-983ce74d9b95_carw_16x9x32.png?h=a0cd0e17261be9f66826cedc2f820225',
    meta: { Client: 'Caesar Rodney Half Marathon', Industry: 'Sports / Community Events', Services: 'Event Branding, Marketing Materials, Campaign Design', Year: '2016–Present' },
    body: `
      <h3>The Brief</h3>
      <p>The Caesar Rodney Half Marathon has been a beloved event in Wilmington, Delaware for over 50 years, embodying a spirit of community and tradition. Our team was honored to contribute to the marketing and branding efforts for this iconic race.</p>

      <h3>The Approach</h3>
      <p>We focused on creating materials that reflected the event's storied history while engaging new participants. By leveraging our creative expertise, we helped enhance the marathon's visibility and community impact through a cohesive campaign system spanning multiple years.</p>
      <ul>
        <li>Race branding and visual identity refresh</li>
        <li>Multi-year campaign creative with evolving themes</li>
        <li>Print materials including posters, banners, and race-day signage</li>
        <li>Digital marketing assets for social media and web promotion</li>
      </ul>

      <h3>The Impact</h3>
      <p>The refreshed branding helped modernize the event's image while honoring its five-decade legacy, contributing to continued strong participation and community engagement year after year.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/653efb29-9632-4a05-ba4b-983ce74d9b95_carw_16x9x32.png?h=a0cd0e17261be9f66826cedc2f820225'
    ]
  },
  kevlar: {
    title: 'Kevlar\u00AE',
    subtitle: 'Showcasing Innovation and Excellence',
    tags: ['Web Design', 'Email Design', 'Digital'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/0a170bfb-f80a-4076-a971-2683c722a7d7_carw_16x9x32.jpg?h=7ca8e5830fef688ba2dede5a46bac1dd',
    meta: { Client: 'DuPont / Kevlar\u00AE', Industry: 'Manufacturing / Materials Science', Services: 'Landing Page Design, Email Design, Hero Imagery', Year: '2019' },
    body: `
      <h3>The Brief</h3>
      <p>Working with Kevlar\u00AE presented an exciting opportunity to tell the story of a brand synonymous with innovation and excellence. Our challenge was to maintain the integrity of Kevlar's\u00AE well-established brand while introducing new and interesting elements to their visual identity.</p>

      <h3>The Work</h3>
      <p>Our team collaborated closely to design a landing page that was both informative and visually striking, ensuring that the brand's message of innovation was communicated effectively. The project spanned multiple digital touchpoints:</p>
      <ul>
        <li><strong>Landing Page Design:</strong> A visually compelling page that tells the Kevlar\u00AE innovation story</li>
        <li><strong>Hero Slider Imagery:</strong> Dynamic hero visuals showcasing Kevlar\u00AE applications across industries</li>
        <li><strong>Email Design:</strong> A suite of email templates consistent with the refreshed digital language</li>
      </ul>

      <h3>The Result</h3>
      <p>A cohesive digital presence that honored Kevlar's\u00AE legacy while pushing the visual language forward — balancing the technical credibility expected from DuPont with an engaging, modern design approach.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/0a170bfb-f80a-4076-a971-2683c722a7d7_carw_16x9x32.jpg?h=7ca8e5830fef688ba2dede5a46bac1dd'
    ]
  },
  oneoncology: {
    title: 'OneOncology',
    subtitle: 'Branding & Logo Development',
    tags: ['Branding', 'Logo Design', 'Healthcare'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/59166a4d-a703-43cf-b7ef-b1a8b23352c1_rwc_194x257x995x560x32.png?h=2577acdeb2c3f9b3bc6e57ab1d3a9a35',
    meta: { Client: 'OneOncology (via MC3)', Industry: 'Healthcare / Oncology', Services: 'Logo Design, Branding Concepts, Visual Identity', Year: '2023' },
    body: `
      <h3>The Brief</h3>
      <p>Iron Peony partnered with MC3 to create a series of logos and branding concepts for OneOncology, a network dedicated to advancing cancer care through collaboration, innovation, and patient-centered treatment. Our goal was to craft a visual identity that encapsulated OneOncology's mission of unity, care, and forward-thinking healthcare solutions.</p>

      <h3>Design Concepts</h3>
      <p>With a focus on inclusivity, collaboration, and impact, we explored multiple typographic and iconographic treatments that reinforced the power of "One" — a key element of OneOncology's name and mission:</p>
      <ul>
        <li><strong>Every Patient Deserves One:</strong> A radiant, energetic glow surrounding the numeral "1," representing innovation and the guiding light of cutting-edge oncology treatment</li>
        <li><strong>One For Good:</strong> Gradient color scheme adding warmth and movement, symbolizing progress, collaboration, and the pursuit of better outcomes</li>
        <li><strong>One For All:</strong> A sleek, minimalistic take on unity in oncology — patients, doctors, and caregivers coming together</li>
        <li><strong>Deliver The Promise:</strong> A bold, flame-like motion amplifying OneOncology's unwavering dedication to innovation, speed, and reliability in cancer care</li>
      </ul>

      <h3>Impact</h3>
      <p>The final suite of logos provided OneOncology with versatile, future-proof branding elements that resonate across digital and physical applications. Through this project, Iron Peony was able to merge strategy, design, and storytelling into a compelling brand experience — one that reinforces OneOncology's role as a leader in modern cancer care.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/59166a4d-a703-43cf-b7ef-b1a8b23352c1_rwc_194x257x995x560x32.png?h=2577acdeb2c3f9b3bc6e57ab1d3a9a35'
    ]
  },
  longwood: {
    title: 'Longwood Gardens',
    subtitle: 'A Legacy of Beauty and Design',
    tags: ['Publication Design', 'Print', 'Photography'],
    heroImg: 'assets/case-studies/longwood/longwood-hero.jpg',
    meta: { Client: 'Longwood Gardens', Industry: 'Arts & Culture / Horticulture', Services: 'Publication Design, Cover Design, Page Layout', Year: '2018' },
    body: `
      <h3>The Brief</h3>
      <p>Longwood Gardens represents a pinnacle of horticultural excellence and design. Our creative team was entrusted with projects that required meticulous attention to detail and an appreciation for Longwood's unique aesthetic.</p>

      <h3>The Work</h3>
      <p>Every project we undertook was an opportunity to contribute to Longwood's legacy of beauty, blending creativity with precision to produce designs that enhanced the garden's renowned reputation. The publication design spanned multiple deliverables:</p>
      <ul>
        <li><strong>Cover Selections:</strong> Multiple cover concepts capturing the seasonal beauty of the gardens</li>
        <li><strong>Internal Spreads:</strong> Detailed page layouts balancing photography, typography, and white space</li>
        <li><strong>Page Layout System:</strong> A flexible grid system adaptable to varying content types</li>
      </ul>

      <h3>The Result</h3>
      <p>A publication that matched the elegance and care that Longwood Gardens brings to everything it does — print materials that visitors treasure long after their visit.</p>
    `,
    galleryLayout: 'single-col',
    gallery: [
      { src: 'assets/case-studies/longwood/longwood-spread.png', alt: 'Longwood Gardens publication spread detail' }
    ]
  },
  beautifullymade: {
    title: 'Beautifully Made',
    subtitle: 'Innovative Branding for a Natural Beauty Boutique',
    tags: ['Branding', 'Logo Design', 'Identity'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/aedc5cef-9175-426e-a099-ef305435fa70_carw_16x9x32.png?h=5be2ff1afe297683151768c847553829',
    meta: { Client: 'Beautifully Made', Industry: 'Beauty / Retail', Services: 'Logo Design, Brand Identity, Visual System', Year: '2020' },
    body: `
      <h3>The Brief</h3>
      <p>Branding for Beautifully Made, an all-natural hair and beauty boutique, allowed our team to step into a new creative realm. Drawing inspiration from a sketch provided by the client, we developed a brand identity that was both authentic and captivating.</p>

      <h3>The Process</h3>
      <p>Our collaborative process ensured that the final design was a true reflection of the boutique's values and aesthetic. The work progressed through multiple rounds of exploration:</p>
      <ul>
        <li><strong>Round 1:</strong> Initial logo explorations drawn from the client's original sketch — five distinct directions</li>
        <li><strong>Refinement:</strong> Narrowing to the strongest concepts and refining typography, spacing, and mark details</li>
        <li><strong>Final Versions:</strong> Six polished logo variations for different applications — full logo, wordmark, icon, and color variations</li>
      </ul>

      <h3>The Result</h3>
      <p>A standout brand identity that captures the boutique's commitment to natural beauty, craftsmanship, and authenticity — versatile enough for signage, packaging, digital, and print.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/aedc5cef-9175-426e-a099-ef305435fa70_carw_16x9x32.png?h=5be2ff1afe297683151768c847553829'
    ]
  },
  tomfoolerys: {
    title: "Tom Foolery's",
    subtitle: 'Creative Mural Design',
    tags: ['Illustration', 'Mural', 'Environmental'],
    heroImg: 'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/3dc2a6ad-9d5e-43d3-8dbe-923a3bf9f6e9_carw_16x9x32.jpg?h=5118ba0c4b4d9ac95e1527c40af2c6a2',
    meta: { Client: "Tom Foolery's", Industry: 'Restaurant / Hospitality', Services: 'Mural Design, Illustration, Environmental Graphics', Year: '2019' },
    body: `
      <h3>The Brief</h3>
      <p>Our work on Tom Foolery's mural was a refreshing departure from digital screens to hands-on artistry. The goal was to create a vibrant, playful mural that added character and charm to the restaurant space.</p>

      <h3>The Process</h3>
      <p>Utilizing classic techniques like an overhead projector and transparency paper, our team brought the mural to life through a tactile creative process — from concept comps through testing to final execution:</p>
      <ul>
        <li><strong>Original Comps:</strong> Three distinct design directions capturing the restaurant's playful spirit</li>
        <li><strong>Testing Process:</strong> Projecting, tracing, and color testing on the actual wall surface</li>
        <li><strong>Execution:</strong> Hand-painted final mural using the refined design</li>
      </ul>

      <h3>The Result</h3>
      <p>A unique and eye-catching mural that became a defining visual element of the restaurant space — proof that the most impactful design sometimes happens away from the screen.</p>
    `,
    images: [
      'https://cdn.myportfolio.com/222e868c3fe71bf6b96bfa8f595d0fbc/3dc2a6ad-9d5e-43d3-8dbe-923a3bf9f6e9_carw_16x9x32.jpg?h=5118ba0c4b4d9ac95e1527c40af2c6a2'
    ]
  },
  logos: {
    title: 'Logo Collection',
    subtitle: 'Crafting Distinctive Brand Identities',
    tags: ['Logo Design', 'Branding', 'Identity'],
    heroImg: 'assets/case-studies/logos/logos-hero.png',
    meta: { Client: 'Various Small Businesses', Industry: 'Multi-Industry', Services: 'Logo Design, Mark Development, Brand Identity', Year: 'Ongoing' },
    body: `
      <h3>The Work</h3>
      <p>Over the years, our team has had the pleasure of working with numerous small businesses to create distinctive logos that capture their unique identities. Crafting a mark for a client is a collaborative and detailed process, one that we approach with care and enthusiasm.</p>

      <p>Each logo we design is a result of thoughtful consideration and creative collaboration, ensuring that it perfectly represents the client's brand. From marks and wordmarks to monograms and icon systems, every project begins with deep listening and ends with a mark that's built to last.</p>

      <h3>Our Approach</h3>
      <ul>
        <li>Discovery sessions to understand the brand's core values and audience</li>
        <li>Competitive landscape analysis and visual positioning</li>
        <li>Multiple concept directions with iterative refinement</li>
        <li>Final delivery with full brand mark guidelines</li>
      </ul>
    `,
    galleryLayout: 'single-col',
    gallery: [
      { src: 'assets/case-studies/logos/logos-grid.png', alt: 'Logo collection grid' },
      { src: 'assets/case-studies/logos/logos-example.jpg', alt: 'Logo concept exploration' }
    ]
  }
};

/* ─── CASE STUDY NAVIGATION ─── */
const projectOrder = ['fow','salus','barstool','aaa','caesar','kevlar','oneoncology','longwood','beautifullymade','tomfoolerys','logos'];

function openCaseStudy(slug) {
  const cs = caseStudies[slug];
  if (!cs) return;

  const idx = projectOrder.indexOf(slug);
  const prevSlug = idx > 0 ? projectOrder[idx - 1] : null;
  const nextSlug = idx < projectOrder.length - 1 ? projectOrder[idx + 1] : null;

  let statsHTML = '';
  if (cs.stats) {
    statsHTML = '<div class="cs-stats">' + cs.stats.map(s =>
      `<div><div class="cs-stat-num">${s.num}</div><div class="cs-stat-label">${s.label}</div></div>`
    ).join('') + '</div>';
  }

  let galleryHTML = '';
  if (cs.gallery && cs.gallery.length) {
    const galleryClass = cs.galleryLayout ? ` cs-gallery ${cs.galleryLayout}` : ' cs-gallery';
    galleryHTML = `<div class="${galleryClass.trim()}">
      ${cs.gallery.map(img => `<img src="${img.src}" alt="${img.alt || ''}" loading="lazy">`).join('')}
    </div>`;
  }

  let metaHTML = Object.entries(cs.meta).map(([k,v]) =>
    `<div><div class="cs-meta-label">${k}</div><div class="cs-meta-val">${v}</div></div>`
  ).join('');

  let navHTML = `<div class="cs-nav-row">
    <div>${prevSlug ? `<span class="cs-nav-btn" onclick="openCaseStudy('${prevSlug}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      ${caseStudies[prevSlug].title}
    </span>` : ''}</div>
    <div>${nextSlug ? `<span class="cs-nav-btn" onclick="openCaseStudy('${nextSlug}')">
      ${caseStudies[nextSlug].title}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </span>` : ''}</div>
  </div>`;

  document.getElementById('csContent').innerHTML = `
    <img class="cs-hero-img" src="${cs.heroImg}" alt="${cs.title}">
    <div class="cs-inner">
      <div class="cs-back" onclick="closeCaseStudy()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to All Work
      </div>
      <div class="cs-tags">${cs.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <h1 class="cs-title">${cs.title}</h1>
      <p class="cs-subtitle">${cs.subtitle}</p>
      <div class="cs-meta">${metaHTML}</div>
      ${statsHTML}
      <div class="cs-body">${cs.body}</div>
      ${galleryHTML}
      ${navHTML}
    </div>
  `;

  const overlay = document.getElementById('csOverlay');
  overlay.classList.add('active');
  overlay.scrollTop = 0;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  history.pushState({ cs: slug }, '', '#project-' + slug);

  // Focus the close button for accessibility
  const closeBtn = document.getElementById('csClose');
  if (closeBtn) closeBtn.focus();
}

function closeCaseStudy() {
  const overlay = document.getElementById('csOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (location.hash.startsWith('#project-')) history.pushState({}, '', location.pathname);
}

// Wire up project cards
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    openCaseStudy(card.dataset.project);
  });
});

// Close button
document.getElementById('csClose').addEventListener('click', closeCaseStudy);

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCaseStudy();
});

// Browser back button
window.addEventListener('popstate', e => {
  if (e.state && e.state.cs) openCaseStudy(e.state.cs);
  else closeCaseStudy();
});

// Open from URL hash on load
if (location.hash.startsWith('#project-')) {
  const slug = location.hash.replace('#project-', '');
  if (caseStudies[slug]) setTimeout(() => openCaseStudy(slug), 300);
}
