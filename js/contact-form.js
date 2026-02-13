// ─── CONTACT FORM ───
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    const formData = new FormData(contactForm);
    const brief = {
      id: 'form_' + Date.now(),
      timestamp: new Date().toISOString(),
      content: [
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Project Type: ${formData.get('project_type') || 'Not specified'}`,
        `Message: ${formData.get('message')}`
      ].join('\n'),
      pageSection: typeof getCurrentVisibleSection === 'function' ? getCurrentVisibleSection() : 'contact'
    };

    // Save locally
    const briefs = JSON.parse(localStorage.getItem('ip_client_briefs') || '[]');
    briefs.push(brief);
    localStorage.setItem('ip_client_briefs', JSON.stringify(briefs));

    // Send to backend
    const API_PROXY_URL = '/api/chat';
    try {
      const res = await fetch(API_PROXY_URL.replace('/chat', '/brief-notify'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brief_id: brief.id,
          timestamp: brief.timestamp,
          content: brief.content,
          page_section: brief.pageSection
        })
      });

      if (res.ok) {
        formStatus.textContent = 'Message sent! We\'ll be in touch soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('Server returned ' + res.status);
      }
    } catch (err) {
      console.warn('Contact form submission failed:', err.message);
      // Brief is already saved locally — mark pending for retry
      const pending = JSON.parse(localStorage.getItem('ip_pending_briefs') || '[]');
      if (!pending.includes(brief.id)) {
        pending.push(brief.id);
        localStorage.setItem('ip_pending_briefs', JSON.stringify(pending));
      }
      formStatus.textContent = 'Message saved! We\'ll receive it when our server reconnects.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    }

    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}
