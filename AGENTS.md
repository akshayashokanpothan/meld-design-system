# Agent Instructions for Meld Design System

This file provides direct operational instructions for autonomous AI agents (Antigravity, Claude, Codex, etc.) working on the **Meld Design System** repository.

---

## 1. Mandatory Pre-Commit Changelog Protocol

Before performing any `git commit` that modifies design system code, components, patterns, tokens, or documentation:

1. **Inspect `changelog.json`:** Read the repository's root [`changelog.json`](./changelog.json).
2. **Prepend a New Entry:** Add a new entry to the `entries` array adhering strictly to the JSON schema defined in `CONTRIBUTING.md`.
   - Ensure `id` is unique.
   - Use the appropriate category: `feature`, `improvement`, `fix`, `breaking`, `deprecated`, or `docs`.
   - List all granular bullet points under `changes`.
   - List all modified modules under `affectedAreas`.
   - Set `commitMessage` to the exact Git commit message you are about to use.
   - Never fabricate commit SHAs; set `commitRef` to `null` unless referencing an already-created historical commit.
3. **Keep Dual Loading in Mind:** If updating the HTML preview or changelog rendering logic, ensure the inline fallback in `index.html` matches the latest `changelog.json` schema so offline `file:///` local disk browsing continues to function without CORS exceptions.
4. **Stage and Commit Together:** Always stage `changelog.json` in the same commit as your functional changes.

---

## 2. Design Tokens and Theme Preservation

- **Never hardcode hex values** for Meld components or patterns. Always consume the semantic CSS variables (`var(--bg)`, `var(--sf)`, `var(--tx)`, `var(--t2)`, `var(--mu)`, `var(--bd)`, `var(--ac)`).
- Always verify both Light (`html[color-scheme=light]`) and Dark (`html[data-theme=dark]`) modes when introducing or styling new elements.
- Space Grotesk is the primary typeface; maintain clean typographic hierarchy and rem-based scaling.

---

## 3. Architecture & Single-Page Integrity

- Meld is hosted statically (GitHub Pages / Vercel) as a self-contained single-page application (`index.html`).
- Sub-sections are managed via anchor routing (`#section-id`) and observed via `IntersectionObserver`.
- Whenever adding a new primary section, register it in `nav.side` and ensure `io.observe()` is called on the section element.
