# Meld by IDEO — Design System

A comprehensive, reusable design system reference built for IDEO digital products and human-centered design workflows.

[![Status](https://img.shields.io/badge/Status-Complete-emerald)]()
[![WCAG](https://img.shields.io/badge/WCAG-2.2%20AA%20Verified-blue)]()
[![Components](https://img.shields.io/badge/Components-18%20Repaired%20P0%2FP1-purple)]()
[![Patterns](https://img.shields.io/badge/Patterns-125%20UX%20Patterns-pink)]()
[![Changelog](https://img.shields.io/badge/Changelog-v1.1.0%20Tracked-success)]()

---

## 🌐 Live Interactive Demos

* **GitHub Pages:** [https://akshayashokanpothan.github.io/meld-design-system/](https://akshayashokanpothan.github.io/meld-design-system/)
* **Direct Web View (jsDelivr / raw.githack):** [https://raw.githack.com/akshayashokanpothan/meld-design-system/main/index.html](https://raw.githack.com/akshayashokanpothan/meld-design-system/main/index.html)

---

## 📦 What's Inside

Meld brings together five unified design system modules in a single interactive artifact:

### 01. Typography
* Primary typeface: **Space Grotesk** (600, 500, 400).
* Primitive and semantic typography scales (`type.heading.h1`–`h4`, `type.body.default`, `type.label.eyebrow`, `type.caption.default`).
* Responsive fluid typography rules and fallback font stack.

### 02. Colors
* Approved brand values: **Primary `#BC4989`** and **Secondary `#39409A`**.
* Light and Dark semantic theme tokens with verified WCAG 2.2 AA contrast ratios.
* Interactive contrast checker and live CSS custom property exporter.

### 03. Components
* 18 fully audited and repaired components featuring bespoke interactive controllers, side-by-side light and dark previewing, and Figma variable mappings:
  * **Data Display:** Circular Progress, Stat / Metric, List, List Item, Rating Display, Key-Value Pair, Typography Primitives.
  * **Files, Uploads & Media:** File Item, File Preview, Image Uploader, Attachment List, Lightbox / Image Viewer.
  * **Containers & Content:** Panel / Surface, Well / Inset Container, Section Header, Media Object, Card Header / Footer.
  * **Overlays:** Tooltip with keyboard focus, hover delay, and edge collision flipping.

### 04. Patterns
* **125 Fully Documented UX Patterns** across 8 strategic categories:
  1. **Authentication Patterns (12):** Sign In, Sign Up, OTP Verification (auto-advance), Password Reset, Strength Validation, Session Expiration (live countdown), Account Lockout.
  2. **Onboarding Patterns (12):** Guided Setup Wizard (multi-step progress), Welcome Screens, Product Tours (interactive beacon & anchored callout), Progressive Disclosure.
  3. **Form Patterns (15):** Simple Forms, Multi-Step Wizards, Conditional Fields (animated disclose), Inline Real-Time Validation, Dynamic Repeating Sections.
  4. **Data Interaction Patterns (17):** Enterprise Data Table (live search, multi-column sorting, row checkboxes, floating Bulk Actions bar, pagination).
  5. **Feedback & System Status (17):** Toast Notifications, Inline Alerts, Destructive Action Confirmation (typed safety barrier), Background Operations.
  6. **Navigation & IA (14):** Global & Side Navigation, Command Palette (`Cmd/Ctrl+K` simulation), Accessible Tabs, Breadcrumbs.
  7. **Files and Media (14):** Drag-and-Drop Dropzone, Multi-File Upload Queue (progress tracking), Media Gallery, File Preview Lightbox.
  8. **AI Interaction Patterns (24):**
     * **Workflow A — Content Generation:** Prompt composer with suggestion pills, streaming token typewriter animation, confidence scoring, source citations, inline editing, and accept/reject decision bar.
     * **Workflow B — Human-in-the-Loop Approval:** Action proposals, risk badges, impact diff table, explicit approval barriers, and 10s timed undo rollback.
     * **Workflow C — Agentic Task Execution:** Autonomous task planning, permission matrix, multi-step execution stepper, and human intervention points.

### 05. Changelog (New in v1.1.0!)
* **Single Source of Truth (`changelog.json`):** Centralized structured data feed powering the public Changelog page.
* **Editorial Timeline:** Interactive chronological updates with category badges, granular changes, affected areas, and commit references.
* **Dynamic Summary Metrics:** Real-time calculation of total releases, features, improvements, and bug fixes.
* **Multi-Facet Search & Filtering:** Filter by update category (`feature`, `improvement`, `fix`, `breaking`, `docs`), search query, and version tag.

---

## 🛠 Local Setup

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/akshayashokanpothan/meld-design-system.git
cd meld-design-system
# Open in browser:
start index.html
```

---

## 🤝 Contributing & Changelog Guidelines

To maintain full auditability, every commit must document its changes in `changelog.json`.
Please review:
- [Contributing Guidelines (`CONTRIBUTING.md`)](./CONTRIBUTING.md) for category taxonomy and PR requirements.
- [Agent Instructions (`AGENTS.md`)](./AGENTS.md) for autonomous agent pre-commit protocols.

---

## ♿ Accessibility & Standards

* **WCAG 2.2 AA:** Verified 4.5:1 text contrast and 3:1 graphical control contrast.
* **Semantic HTML:** `<dialog>`, `<nav>`, `<main>`, `<dl>`, `<ol>`, `<ul>`, `<table>`.
* **Keyboard Operable:** Full tab ordering, visible 3px focus rings, `:focus-visible`, and `Escape` key dismissal.
* **Screen Reader Semantics:** Live announcements using `aria-live="polite"`, `role="progressbar"`, `aria-busy`, and `role="alert"`.

---

© 2026 IDEO Design Systems. Built with Meld by IDEO.
