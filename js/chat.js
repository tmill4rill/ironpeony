// ─── API PROXY CONFIGURATION ───
const API_PROXY_URL = '/api/chat';
const ANTHROPIC_API_KEY = '';

async function callAPI(systemPrompt, messages, maxTokens = 300) {
  if (API_PROXY_URL) {
    try {
      const res = await fetch(API_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system: systemPrompt, messages, max_tokens: maxTokens })
      });
      if (res.ok) return await res.json();
      if (res.status === 429) {
        return { error: { type: 'rate_limit', message: 'Too many requests. Please wait a moment.' } };
      }
    } catch (e) {
      console.warn('Proxy unavailable, attempting direct fallback:', e.message);
    }
  }

  if (!ANTHROPIC_API_KEY) {
    return { error: { type: 'config', message: 'API not configured. Please deploy the chat proxy.' } };
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      system: systemPrompt,
      messages
    })
  });
  return await res.json();
}

// ─── CHAT LOGIC ───
const SYSTEM_PROMPT = `You are the friendly, knowledgeable assistant for Iron Peony, a creative design studio. You help potential clients learn about the studio's work, services, and process.

KEY INFORMATION ABOUT IRON PEONY:
- Iron Peony is a creative studio specializing in branding, digital design, creative strategy, and photography.
- Founded by Thomas Miller, who has 20+ years of design experience with leadership roles at Apple, Comcast, Barstool Sportsbook, Pearson, and Credly. He is also Director of UX for the City of Philadelphia.
- Notable clients include: Friends of the Wissahickon (centennial rebrand), Salus at Drexel University (brand identity), Barstool Sportsbook (digital design), AAA Mid-Atlantic (campaign), Caesar Rodney Half Marathon (event branding), Kevlar/DuPont (creative direction), OneOncology (brand & logo), Longwood Gardens (photography), Beautifully Made (brand identity), Tom Foolery's (restaurant branding).
- Services: Branding & Identity, Digital Design (websites, apps, UX/UI), Photography, Creative Strategy, Print & Collateral, Logo Design.
- The studio values craft, strategy, and bold creative thinking.
- To start a project, clients can reach out via the contact form or email hello@ironpeony.com.

BEHAVIOR:
- Keep responses concise and warm (2-4 sentences usually).
- Be enthusiastic about the studio's work without being pushy.
- If someone wants to start a project, encourage them to reach out via email at hello@ironpeony.com.
- If you don't know something specific, be honest and suggest they contact the studio directly.
- Never make up pricing, timelines, or details you don't have.

BRIEF DETECTION:
- When a user shares project details (company name, goals, timeline, budget range, deliverables, or target audience), treat it as a potential client brief.
- After gathering enough context, summarize the brief back to the user as a structured recap with: Project Type, Company/Brand, Goals, Deliverables, Timeline, and Budget Range (if shared).
- End the recap by confirming: "I've captured this brief for our team. We'll follow up at the email you provide, or you can reach us at hello@ironpeony.com."
- Mark your summary message by starting it with the exact string "[BRIEF]" so the system can detect and process it automatically.`;

let conversationHistory = [];

function toggleChat() {
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  fab.classList.toggle('open');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    setTimeout(() => document.getElementById('chatInput').focus(), 350);
  }
}

function sendSuggestion(btn) {
  const text = btn.textContent;
  document.getElementById('chatSuggestions').style.display = 'none';
  addMessage(text, 'user');
  getBotResponse(text);
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
  const ta = e.target;
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 100) + 'px';
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';
  document.getElementById('chatSuggestions').style.display = 'none';

  addMessage(text, 'user');
  getBotResponse(text);
}

function addMessage(text, role) {
  const container = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = `chat-msg ${role === 'user' ? 'user' : 'bot'}`;
  msg.textContent = text;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot typing';
  msg.id = 'typingIndicator';
  msg.setAttribute('role', 'status');
  msg.setAttribute('aria-label', 'Assistant is typing');
  msg.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

// ─── CLIENT BRIEF AUTOMATION ───
function detectAndProcessBrief(botText) {
  if (!botText.startsWith('[BRIEF]')) return false;

  const briefContent = botText.replace('[BRIEF]', '').trim();

  const brief = {
    id: 'brief_' + Date.now(),
    timestamp: new Date().toISOString(),
    content: briefContent,
    conversation: conversationHistory.slice(-12),
    pageSection: getCurrentVisibleSection(),
    referrer: document.referrer || 'direct'
  };

  const briefs = JSON.parse(localStorage.getItem('ip_client_briefs') || '[]');
  briefs.push(brief);
  localStorage.setItem('ip_client_briefs', JSON.stringify(briefs));

  sendBriefNotification(brief);

  console.log('[Iron Peony] Client brief captured:', brief.id);
  return true;
}

async function sendBriefNotification(brief) {
  if (!API_PROXY_URL) return;
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
      // Successfully sent — remove from pending if present
      const pending = JSON.parse(localStorage.getItem('ip_pending_briefs') || '[]');
      const filtered = pending.filter(id => id !== brief.id);
      localStorage.setItem('ip_pending_briefs', JSON.stringify(filtered));
    } else {
      throw new Error('Brief notify returned ' + res.status);
    }
  } catch (e) {
    console.warn('Brief notification failed (will retry on next visit):', e.message);
    const pending = JSON.parse(localStorage.getItem('ip_pending_briefs') || '[]');
    if (!pending.includes(brief.id)) {
      pending.push(brief.id);
      localStorage.setItem('ip_pending_briefs', JSON.stringify(pending));
    }
  }
}

// Retry pending brief notifications on page load
(function retryPendingBriefs() {
  const pending = JSON.parse(localStorage.getItem('ip_pending_briefs') || '[]');
  if (!pending.length) return;
  const briefs = JSON.parse(localStorage.getItem('ip_client_briefs') || '[]');
  pending.forEach(id => {
    const brief = briefs.find(b => b.id === id);
    if (brief) sendBriefNotification(brief);
  });
  // Don't clear pending here — sendBriefNotification removes on success
})();

async function getBotResponse(userText) {
  const sendBtn = document.getElementById('chatSendBtn');
  sendBtn.disabled = true;
  showTyping();

  conversationHistory.push({ role: 'user', content: userText });

  try {
    const data = await callAPI(SYSTEM_PROMPT, conversationHistory.slice(-10), 300);
    removeTyping();

    if (data.content && data.content[0]) {
      const botText = data.content[0].text;
      conversationHistory.push({ role: 'assistant', content: botText });

      const isBrief = detectAndProcessBrief(botText);

      const displayText = botText.replace(/^\[BRIEF\]\s*/, '');
      addMessage(displayText, 'bot');

      if (isBrief) {
        const container = document.getElementById('chatMessages');
        const badge = document.createElement('div');
        badge.className = 'chat-msg bot';
        badge.style.cssText = 'font-size:.75rem;color:var(--accent);background:var(--accent-soft);padding:.4rem .8rem;border-radius:8px;margin-top:.25rem;';
        badge.textContent = 'Brief captured — our team will follow up soon.';
        container.appendChild(badge);
        container.scrollTop = container.scrollHeight;
      }
    } else if (data.error) {
      const errMsg = data.error.type === 'rate_limit'
        ? "We're getting a lot of messages right now. Please wait a moment and try again!"
        : "I'm having a little trouble right now. Please try again, or reach out directly at hello@ironpeony.com!";
      addMessage(errMsg, 'bot');
      console.error('API error:', data.error);
    }
  } catch (err) {
    removeTyping();
    addMessage("I'm having a little trouble connecting right now. Feel free to reach out directly at hello@ironpeony.com!", 'bot');
    console.error('Chat error:', err);
  }

  sendBtn.disabled = false;
  document.getElementById('chatInput').focus();
}
