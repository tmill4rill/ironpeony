# Iron Peony — Next Priorities

Assessed from the current state of the codebase (Feb 2026). Ordered by impact and effort.

---

## 1. Split the monolithic `index.html` into maintainable files

**Why:** The entire site — 3,030 lines of HTML, CSS, and JS — lives in a single file. This makes it hard to iterate, debug, and collaborate.

**What to do:**
- Extract CSS into `styles/main.css` (or a handful of partitioned files)
- Extract JS into `js/chat.js`, `js/voice.js`, `js/case-studies.js`, `js/services.js`, `js/carousel.js`
- Keep `index.html` as semantic markup only
- Add a minimal build step (or just use `<link>` / `<script>` tags — no bundler required for this scale)

---

## 2. SEO & meta tags

**Why:** The site has no `<meta name="description">`, no Open Graph tags, no Twitter card markup, and no structured data. Search engines and social shares are flying blind.

**What to do:**
- Add `<meta name="description">` with a compelling studio summary
- Add Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card tags
- Add JSON-LD structured data (`Organization`, `LocalBusiness`, or `CreativeWork`)
- Add a `<link rel="canonical">` tag
- Consider adding a `sitemap.xml` and `robots.txt`

---

## 3. Accessibility (a11y) improvements

**Why:** Several interactive elements lack proper ARIA attributes, keyboard navigation, and focus management.

**What to do:**
- Add `aria-label` to the chat FAB, voice FAB, hamburger menu, and carousel controls
- Ensure the case study overlay traps focus while open and restores it on close
- Add `role="dialog"` and `aria-modal="true"` to the case study overlay and service modal
- Ensure all interactive elements are reachable via keyboard (Tab / Enter / Escape)
- Add `alt` text to any images that are missing it
- Test with a screen reader (VoiceOver / NVDA)

---

## 4. Performance: image optimization & lazy loading

**Why:** Several case study images use full external CDN URLs with no sizing hints. There are no `width`/`height` attributes, no `loading="lazy"`, and no responsive `srcset`. This hurts LCP and CLS.

**What to do:**
- Add `loading="lazy"` to all below-the-fold images
- Add explicit `width` and `height` attributes to prevent layout shift
- Add `srcset` / `sizes` for responsive images where practical
- Consider self-hosting key images (hero, team photos) instead of relying on `cdn.myportfolio.com`
- Add `<link rel="preload">` for the hero image to improve LCP

---

## 5. Contact form

**Why:** The site tells visitors to email `hello@ironpeony.com` but has no actual contact form. A form reduces friction for potential clients.

**What to do:**
- Add a contact section with a simple form (name, email, message, optional project type)
- Wire it to the existing `/api/brief-notify` endpoint or a dedicated form handler
- Add client-side validation and a success/error state
- Connect the "Start a Project" CTA buttons to this form

---

## 6. Mobile navigation refinement

**Why:** The hamburger menu exists in CSS but the JS toggle and mobile nav panel behavior aren't fully wired. On small screens, the nav links may not be accessible.

**What to do:**
- Verify the hamburger toggle opens/closes a mobile nav drawer
- Add smooth open/close transitions
- Ensure the mobile nav closes when a link is clicked
- Test on actual mobile devices and screen sizes

---

## 7. Analytics & conversion tracking

**Why:** There's no analytics on the site. You can't measure traffic, engagement with the chat/voice features, brief capture rates, or which case studies get the most views.

**What to do:**
- Add a privacy-friendly analytics solution (Plausible, Fathom, or even basic GA4)
- Track custom events: chat opens, voice sessions, brief captures, case study views, CTA clicks
- Add UTM parameter handling for campaign tracking

---

## 8. Error handling & offline resilience

**Why:** If the API proxy is down or the user is offline, the chat/voice features fail silently or show generic errors.

**What to do:**
- Show a clear offline indicator when `navigator.onLine` is false
- Disable the chat/voice FABs gracefully when the backend is unreachable
- Add retry with exponential backoff for chat API calls (currently only brief notifications retry)
- Consider a service worker for basic offline asset caching

---

## 9. Dark mode

**Why:** The CSS custom property system (`--bg`, `--fg`, `--accent`, etc.) is already well-structured for theming. Adding dark mode is a natural next step.

**What to do:**
- Define a dark color palette in a `@media (prefers-color-scheme: dark)` block
- Optionally add a manual toggle in the nav
- Ensure all components (cards, chat panel, voice panel, overlays) adapt correctly
- Test contrast ratios for accessibility

---

## 10. Testing & CI

**Why:** There are no tests of any kind — no unit tests for the proxy, no integration tests for the chat flow, no visual regression tests.

**What to do:**
- Add basic unit tests for `api/chat-proxy.js` (input sanitization, rate limiting, CORS logic)
- Add a `package.json` with test scripts
- Consider Playwright or Cypress for end-to-end testing of the chat and voice flows
- Set up a GitHub Actions workflow for CI

---

## Quick wins (can be done anytime)

- [ ] Expand `README.md` with setup instructions, deployment guide, and architecture overview
- [ ] Add a favicon and Apple touch icon
- [ ] Add `rel="noopener noreferrer"` to any external links
- [ ] Add a 404 page
- [ ] Add `Cache-Control` headers in the proxy for static assets
- [ ] Clean up the `retryPendingBriefs` logic — it clears all pending IDs before confirming success
