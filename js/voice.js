// ─── VOICE ASSISTANT LOGIC ───
const VOICE_SYSTEM_PROMPT = `You are Iron Peony's voice assistant — a warm, knowledgeable conversational guide to the studio, much like a podcast host who deeply knows the studio's story.

ABOUT IRON PEONY:
Iron Peony is a creative design studio based in the Delaware/Philadelphia area. The studio's tagline is "We craft brands that bloom in the digital wild."

TEAM:
- Thomas Miller — Founder & Creative Director. 20+ years of design experience with a decade in tech. Led design at Apple, Comcast, Penn Interactive (Barstool Sportsbook), Pearson, and Credly. Currently also Director of UX leading the UX team for the City of Philadelphia. Expert in design systems, Figma, and team building. Passionate about user-centric design and mentoring aspiring designers.
- Ashley Suszczynski — Photographer, award-winning photojournalist known for Masked Traditions project capturing ancient masked ceremonies across Europe. Based in Wilmington, Delaware.
- Kendra Dingley — Designer with a background from Delaware College of Art and Design (DCAD). Approaches every project as an adventure.
- Ava Salazar — Product Designer & UX Strategist. Pratt Institute graduate (BFA Communications Design). Mentored by Massimo Vignelli. Expertise in multi-disciplinary UX with advertising, branding and marketing agency experience.
- Savanna Grace — Creative Strategist.
- Gabriel Miller — Developer.

NOTABLE PROJECTS:
- Friends of the Wissahickon: Centennial rebrand and campaign celebrating 100 years of conservation and community in Wissahickon Valley Park, Philadelphia.
- Salus at Drexel University: Brand identity and visual system for a healthcare institution's integration with Drexel University.
- Barstool Sportsbook: Digital design and UX for a bold sports entertainment brand entering the sportsbook market.
- AAA Mid-Atlantic: Multi-channel creative campaign for the Mid-Atlantic region.
- Caesar Rodney Half Marathon: Event branding and race identity for a Delaware running tradition.
- Kevlar (DuPont): Creative direction and visual storytelling for DuPont's iconic protective fiber brand.
- OneOncology: Brand identity and logo development for a physician-led cancer care network.
- Longwood Gardens: Photographic storytelling capturing seasonal wonder.
- Beautifully Made: Brand identity for a lifestyle brand rooted in craft.
- Tom Foolery's: Playful restaurant branding.

SERVICES: Branding & Identity, Digital Design (websites, apps, UX/UI), Photography, Creative Strategy, Print & Collateral, Logo Design, UX / Product Design.

BEHAVIOR:
- Speak conversationally, like a friendly podcast host — warm, engaging, concise.
- Keep responses to 2-4 sentences so they sound natural when spoken aloud.
- Be enthusiastic about the studio's work without being salesy.
- Share interesting details and stories about projects and team members.
- If asked to start a project, direct them to hello@ironpeony.com.
- If you don't know something, be honest and suggest contacting the studio.
- Never make up facts about pricing, timelines, or specifics you don't know.`;

let voiceHistory = [];
let isListening = false;
let recognition = null;
let synthesis = window.speechSynthesis;
let currentUtterance = null;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    let interim = '';
    let final = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        final += t;
      } else {
        interim += t;
      }
    }
    document.getElementById('voiceTranscript').textContent = final || interim;
    if (final) {
      processVoiceInput(final.trim());
    }
  };

  recognition.onstart = () => {
    isListening = true;
    document.getElementById('voiceMicBtn').classList.add('active');
    document.getElementById('voiceOrb').classList.add('listening');
    document.getElementById('voiceOrb').classList.remove('speaking', 'thinking');
    document.getElementById('voiceStatusLabel').textContent = 'Listening...';
    document.getElementById('voiceTranscript').textContent = '';
  };

  recognition.onend = () => {
    isListening = false;
    document.getElementById('voiceMicBtn').classList.remove('active');
    if (!document.getElementById('voiceOrb').classList.contains('thinking') &&
        !document.getElementById('voiceOrb').classList.contains('speaking')) {
      document.getElementById('voiceOrb').classList.remove('listening');
      document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to speak';
    }
  };

  recognition.onerror = (event) => {
    isListening = false;
    document.getElementById('voiceMicBtn').classList.remove('active');
    document.getElementById('voiceOrb').classList.remove('listening');
    if (event.error === 'not-allowed') {
      document.getElementById('voiceStatusLabel').textContent = 'Microphone access denied';
      document.getElementById('voiceTranscript').textContent = 'Please enable microphone access in your browser settings.';
    } else if (event.error !== 'aborted') {
      document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to try again';
    }
  };
}

function toggleVoice() {
  const fab = document.getElementById('voiceFab');
  const panel = document.getElementById('voicePanel');
  fab.classList.toggle('open');
  panel.classList.toggle('open');

  // Close chat if open
  if (panel.classList.contains('open')) {
    document.getElementById('chatFab').classList.remove('open');
    document.getElementById('chatPanel').classList.remove('open');
  }

  if (!panel.classList.contains('open') && isListening) {
    recognition.stop();
  }
}

function toggleListening() {
  if (!SpeechRecognition) {
    document.getElementById('voiceStatusLabel').textContent = 'Speech recognition not supported';
    document.getElementById('voiceTranscript').textContent = 'Please try Chrome, Edge, or Safari.';
    return;
  }

  if (synthesis.speaking) {
    synthesis.cancel();
    document.getElementById('voiceOrb').classList.remove('speaking');
  }

  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
}

function stopSpeaking() {
  if (synthesis.speaking) {
    synthesis.cancel();
  }
  document.getElementById('voiceOrb').classList.remove('speaking', 'thinking');
  document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to speak';
}

function addVoiceMsg(text, role) {
  const container = document.getElementById('voiceConversation');
  const panel = document.getElementById('voicePanel');
  const msg = document.createElement('div');
  msg.className = `voice-msg ${role === 'user' ? 'user-msg' : 'bot-msg'}`;
  msg.textContent = text;
  container.appendChild(msg);
  panel.classList.add('has-history');
  container.scrollTop = container.scrollHeight;
}

function clearVoiceHistory() {
  voiceHistory = [];
  const container = document.getElementById('voiceConversation');
  container.innerHTML = '';
  document.getElementById('voicePanel').classList.remove('has-history');
  document.getElementById('voiceTranscript').textContent = '';
  document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to start';
  document.getElementById('voiceOrb').classList.remove('listening', 'speaking', 'thinking');
}

async function processVoiceInput(text) {
  addVoiceMsg(text, 'user');
  voiceHistory.push({ role: 'user', content: text });

  const orb = document.getElementById('voiceOrb');
  orb.classList.remove('listening');
  orb.classList.add('thinking');
  document.getElementById('voiceStatusLabel').textContent = 'Thinking...';
  document.getElementById('voiceTranscript').textContent = '';

  try {
    const contextualPrompt = VOICE_SYSTEM_PROMPT + getSectionContext();
    const data = await callAPI(contextualPrompt, voiceHistory.slice(-10), 250);

    orb.classList.remove('thinking');

    if (data.content && data.content[0]) {
      const botText = data.content[0].text;
      voiceHistory.push({ role: 'assistant', content: botText });
      addVoiceMsg(botText, 'bot');
      speakText(botText);
    } else {
      const errMsg = data.error && data.error.type === 'rate_limit'
        ? "We're getting a lot of requests. Give it a moment and try again!"
        : "I'm having trouble right now. Try again or reach out at hello@ironpeony.com!";
      document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to try again';
      addVoiceMsg(errMsg, 'bot');
    }
  } catch (err) {
    orb.classList.remove('thinking');
    document.getElementById('voiceStatusLabel').textContent = 'Connection issue';
    addVoiceMsg("I couldn't connect right now. Feel free to email hello@ironpeony.com!", 'bot');
    console.error('Voice API error:', err);
  }
}

function speakText(text) {
  if (!synthesis) return;

  synthesis.cancel();
  const orb = document.getElementById('voiceOrb');
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = synthesis.getVoices();
  const preferred = voices.find(v =>
    v.name.includes('Samantha') || v.name.includes('Google') ||
    v.name.includes('Microsoft Aria') || v.name.includes('Karen') ||
    v.name.includes('Moira')
  ) || voices.find(v => v.lang.startsWith('en') && !v.name.includes('borg'));
  if (preferred) utterance.voice = preferred;

  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  utterance.onstart = () => {
    orb.classList.add('speaking');
    document.getElementById('voiceStatusLabel').textContent = 'Speaking...';
    document.getElementById('voiceTranscript').textContent = text;
  };
  utterance.onend = () => {
    orb.classList.remove('speaking');
    document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to continue';
    currentUtterance = null;
  };
  utterance.onerror = () => {
    orb.classList.remove('speaking');
    document.getElementById('voiceStatusLabel').textContent = 'Tap the mic to speak';
  };

  currentUtterance = utterance;
  synthesis.speak(utterance);
}

// Preload voices
if (synthesis) {
  synthesis.getVoices();
  synthesis.onvoiceschanged = () => synthesis.getVoices();
}
