/**
 * Iron Peony — Chat & Voice API Proxy
 *
 * Keeps the Anthropic API key server-side. Deploy as:
 *   - Cloudflare Worker  (wrangler deploy)
 *   - Netlify Function   (netlify/functions/chat.js)
 *   - Vercel Edge Function (api/chat.js)
 *
 * Environment variable required:
 *   ANTHROPIC_API_KEY — your Anthropic API secret key
 *
 * Endpoints served:
 *   POST /api/chat          — proxy chat & voice messages to Claude
 *   POST /api/brief-notify  — receive captured client briefs and forward via email
 */

// ─── CONFIGURATION ───
const ALLOWED_ORIGINS = [
  'https://ironpeony.com',
  'https://www.ironpeony.com',
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500'
];

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 20;           // max requests per window per IP
const rateLimitMap = new Map();

// ─── HELPERS ───
function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

function jsonResponse(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
  });
}

// ─── MAIN HANDLER ───
// Works as a Cloudflare Worker or generic fetch handler.
// For Netlify/Vercel, adapt the export signature as needed.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const clientIP = request.headers.get('CF-Connecting-IP') ||
                     request.headers.get('X-Forwarded-For') ||
                     'unknown';

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    // Rate limiting
    if (isRateLimited(clientIP)) {
      return jsonResponse(
        { error: { type: 'rate_limit', message: 'Too many requests. Please wait a moment.' } },
        429,
        origin
      );
    }

    // ─── POST /api/chat ───
    if (url.pathname === '/api/chat') {
      return handleChat(request, env, origin);
    }

    // ─── POST /api/brief-notify ───
    if (url.pathname === '/api/brief-notify') {
      return handleBriefNotify(request, env, origin);
    }

    return jsonResponse({ error: 'Not found' }, 404, origin);
  }
};

// ─── CHAT PROXY ───
async function handleChat(request, env, origin) {
  const API_KEY = env.ANTHROPIC_API_KEY;
  if (!API_KEY) {
    return jsonResponse(
      { error: { type: 'config', message: 'API key not configured on server.' } },
      500,
      origin
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400, origin);
  }

  // Validate and sanitize input
  const { system, messages, max_tokens } = body;
  if (!system || !Array.isArray(messages) || messages.length === 0) {
    return jsonResponse({ error: 'Missing required fields: system, messages' }, 400, origin);
  }

  // Cap max_tokens to prevent abuse
  const safeMaxTokens = Math.min(Number(max_tokens) || 300, 500);

  // Only allow the expected roles
  const safeMessages = messages
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .slice(-12)
    .map(m => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: safeMaxTokens,
        system,
        messages: safeMessages
      })
    });

    const data = await response.json();
    return jsonResponse(data, response.status, origin);
  } catch (err) {
    console.error('Anthropic API error:', err);
    return jsonResponse(
      { error: { type: 'upstream', message: 'Failed to reach AI service.' } },
      502,
      origin
    );
  }
}

// ─── BRIEF NOTIFICATION ───
async function handleBriefNotify(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400, origin);
  }

  const { brief_id, timestamp, content, page_section } = body;
  if (!brief_id || !content) {
    return jsonResponse({ error: 'Missing brief_id or content' }, 400, origin);
  }

  // Log the brief (always — even if email sending fails)
  console.log(`[BRIEF RECEIVED] ${brief_id} at ${timestamp} from section: ${page_section}`);
  console.log(content);

  // Option 1: Send email notification via external service
  // Adapt this to your email provider (SendGrid, Resend, Mailgun, etc.)
  const NOTIFY_EMAIL = env.NOTIFY_EMAIL || 'hello@ironpeony.com';
  const EMAIL_API_KEY = env.EMAIL_API_KEY;

  if (EMAIL_API_KEY) {
    try {
      // Example using Resend (swap for your provider)
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${EMAIL_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Iron Peony Bot <briefs@ironpeony.com>',
          to: [NOTIFY_EMAIL],
          subject: `New Client Brief — ${brief_id}`,
          text: [
            `New client brief received via the Iron Peony website.`,
            ``,
            `Brief ID: ${brief_id}`,
            `Timestamp: ${timestamp}`,
            `Page Section: ${page_section}`,
            ``,
            `--- Brief Content ---`,
            content,
            ``,
            `View all briefs in your dashboard or localStorage export.`
          ].join('\n')
        })
      });
    } catch (err) {
      console.error('Email notification failed:', err);
      // Don't fail the request — the brief is still logged
    }
  }

  return jsonResponse({ ok: true, brief_id }, 200, origin);
}
