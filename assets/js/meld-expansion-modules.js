/* ==========================================================================
   MELD BY IDEO — EXPANSION MODULES ENGINE (MODULES 06–11 [Beta])
   Renders Accessibility, Motion & Interaction, Iconography & Assets,
   Data Visualization, Design Governance, and Developer Resources
   with interactive playgrounds, checkers, searchable gallery & checklists.
   ========================================================================== */
(function initMeldExpansionModules() {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function statusTag(status) {
    if (!status) return '';
    return `<span class="mx-status-tag">[${esc(status)}]</span>`;
  }

  function renderBreadcrumb(modNum, modName, status) {
    return `
      <nav class="mx-breadcrumb" aria-label="Breadcrumb">
        <a href="#home">Meld</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">${esc(modNum)}. ${esc(modName)} ${statusTag(status)}</span>
      </nav>
    `;
  }

  function renderToc(sections) {
    return `
      <div class="mx-toc" role="navigation" aria-label="Module sections">
        <div class="mx-toc-title">On this module (${sections.length} sections)</div>
        <div class="mx-toc-pills">
          ${sections.map((s, i) => `<a href="#${s.id}" class="mx-toc-pill"><span>${String(i + 1).padStart(2, '0')}</span> ${esc(s.title)}</a>`).join('')}
        </div>
      </div>
    `;
  }

  function renderPrevNext(prev, next, related) {
    return `
      <div class="mx-footer-nav">
        ${related && related.length ? `
          <div class="mx-related">
            <span class="mx-related-label">Related modules:</span>
            ${related.map(r => `<a href="#${r.id}" class="mx-rel-link">${esc(r.label)} &rarr;</a>`).join('')}
          </div>
        ` : ''}
        <div class="mx-pn-grid">
          ${prev ? `<a href="#${prev.id}" class="mx-pn-card"><span class="mx-pn-dir">&larr; Previous module</span><strong>${esc(prev.label)}</strong></a>` : '<div></div>'}
          ${next ? `<a href="#${next.id}" class="mx-pn-card mx-pn-next"><span class="mx-pn-dir">Next module &rarr;</span><strong>${esc(next.label)}</strong></a>` : '<div></div>'}
        </div>
      </div>
    `;
  }

  function secHead(id, num, title, subtitle) {
    return `
      <div class="mx-sec-head" id="${id}">
        <span class="mx-sec-num">${String(num).padStart(2, '0')}</span>
        <div>
          <h2 class="mx-sec-title">${esc(title)}</h2>
          ${subtitle ? `<p class="mx-sec-sub">${esc(subtitle)}</p>` : ''}
        </div>
      </div>
    `;
  }

  /* ========================================================================
     MODULE 06 — ACCESSIBILITY [Beta] (13 Sections + Contrast Checker + Demos)
     ======================================================================== */
  function buildModule06() {
    const sections = [
      { id: 'acc-overview', title: 'Accessibility Overview' },
      { id: 'acc-principles', title: 'Accessibility Principles' },
      { id: 'acc-wcag', title: 'WCAG 2.2 Guidelines' },
      { id: 'acc-contrast', title: 'Colour Contrast' },
      { id: 'acc-typography', title: 'Typography & Readability' },
      { id: 'acc-keyboard', title: 'Keyboard Navigation' },
      { id: 'acc-focus', title: 'Focus Management' },
      { id: 'acc-sr', title: 'Screen Reader Guidance' },
      { id: 'acc-forms', title: 'Accessible Forms' },
      { id: 'acc-aria', title: 'ARIA Guidelines' },
      { id: 'acc-motion', title: 'Motion & Reduced Motion' },
      { id: 'acc-testing', title: 'Accessibility Testing' },
      { id: 'acc-checklist', title: 'Accessibility Audit Checklist' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('06', 'Accessibility', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 06 &middot; ACCESSIBILITY ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Accessibility <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Practical WCAG 2.2 Level AA engineering standards, contrast verification tools, keyboard interaction models, and audit checklists for building inclusive Meld products.</p>
          <div class="mx-notice">
            <strong>Requirements vs. Verification:</strong> Sections below clearly separate <em>WCAG Requirements</em>, <em>Meld Recommendations</em>, and <em>Illustrative Examples</em>. Using Meld guidance supports accessibility, but product teams must verify live builds with automated and assistive-technology testing before claiming compliance.
          </div>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('acc-overview', 1, 'Accessibility Overview', 'Inclusive digital experiences are a baseline engineering requirement across every Meld module.')}
          <div class="mx-grid-3">
            <div class="mx-box"><span class="mx-badge-req">Requirement</span><h3>WCAG 2.2 Level AA Target</h3><p>All interactive controls, typography, and colour pairings target WCAG 2.2 Level AA success criteria across Light and Dark themes.</p></div>
            <div class="mx-box"><span class="mx-badge-rec">Recommendation</span><h3>Shift-Left Verification</h3><p>Validate contrast, focus order, and semantic landmarks during design handoff rather than retrofitting after release.</p></div>
            <div class="mx-box"><span class="mx-badge-ex">Example</span><h3>Assistive Parity</h3><p>Every mouse-driven interaction (tabs, drawers, popovers, charts) provides an equivalent keyboard and screen-reader pathway.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-principles', 2, 'Accessibility Principles', 'Translating the four POUR pillars into concrete Meld design decisions.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>1. Perceivable</h3><p>Provide text alternatives for non-text icons/charts, maintain &ge;4.5:1 text contrast and &ge;3:1 UI component contrast, and never communicate status by colour alone.</p></div>
            <div class="mx-box"><h3>2. Operable</h3><p>Guarantee full keyboard operability, visible focus indicators, &ge;24&times;24px minimum target sizes (44&times;44px recommended on touch), and reduced-motion support.</p></div>
            <div class="mx-box"><h3>3. Understandable</h3><p>Pair Space Grotesk readability with clear, non-blaming Content Design copy, explicit form labels, and predictable navigation across routes.</p></div>
            <div class="mx-box"><h3>4. Robust</h3><p>Prefer native HTML landmarks and form controls over custom <code>&lt;div&gt;</code> widgets so assistive technologies parse state reliably across browsers.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-wcag', 3, 'WCAG 2.2 Guidelines', 'Key WCAG 2.2 success criteria prioritized across Meld components and patterns.')}
          <div class="tb">
            <table>
              <thead><tr><th>Criterion</th><th>Level</th><th>Meld Implementation Standard</th><th>Type</th></tr></thead>
              <tbody>
                <tr><td><code>1.4.3</code> Contrast (Minimum)</td><td>AA</td><td>&ge;4.5:1 for normal body text (&lt;18pt / 24px), &ge;3.0:1 for large text (&ge;18pt or 14pt bold).</td><td>Requirement</td></tr>
                <tr><td><code>1.4.10</code> Reflow</td><td>AA</td><td>Zero horizontal scrolling at 320px CSS viewport width (400% zoom at 1280px).</td><td>Requirement</td></tr>
                <tr><td><code>1.4.11</code> Non-text Contrast</td><td>AA</td><td>&ge;3.0:1 for form borders, focus rings, toggle tracks, and chart data strokes.</td><td>Requirement</td></tr>
                <tr><td><code>2.4.7</code> Focus Visible</td><td>AA</td><td>High-contrast <code>3px</code> outline with <code>2px</code> offset on all focusable elements via <code>:focus-visible</code>.</td><td>Requirement</td></tr>
                <tr><td><code>2.4.11</code> Focus Not Obscured</td><td>AA (2.2)</td><td>Sticky headers (64px) apply matching scroll-margin-top so focused elements stay visible.</td><td>Requirement</td></tr>
                <tr><td><code>2.5.8</code> Target Size (Minimum)</td><td>AA (2.2)</td><td>Interactive controls meet &ge;24&times;24px minimum; Meld recommends 36–44px for touch ergonomics.</td><td>Requirement</td></tr>
                <tr><td><code>3.3.7</code> Redundant Entry</td><td>A (2.2)</td><td>Multi-step forms auto-populate or preserve previously entered values within a session.</td><td>Requirement</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-contrast', 4, 'Colour Contrast', 'Interactive WCAG 2.2 contrast ratio checker using exact W3C relative luminance math.')}
          <div class="mx-playground" id="acc-contrast-tool">
            <div class="mx-pg-controls">
              <div class="mx-ctrl-row">
                <label class="mx-ctrl"><span>Foreground (Text / Icon)</span>
                  <div class="mx-color-pair"><input type="color" id="acc-fg-pick" value="#BC4989" aria-label="Foreground colour picker"><input type="text" id="acc-fg-hex" value="#BC4989" aria-label="Foreground hex code"></div>
                </label>
                <label class="mx-ctrl"><span>Background (Surface)</span>
                  <div class="mx-color-pair"><input type="color" id="acc-bg-pick" value="#FFFFFF" aria-label="Background colour picker"><input type="text" id="acc-bg-hex" value="#FFFFFF" aria-label="Background hex code"></div>
                </label>
                <button type="button" class="b" id="acc-swap-btn">Swap colours</button>
              </div>
              <div class="mx-preset-row">
                <span class="mx-preset-lbl">Meld Presets:</span>
                <button type="button" class="mx-chip" data-acc-fg="#BC4989" data-acc-bg="#FFFFFF">Berry on White</button>
                <button type="button" class="mx-chip" data-acc-fg="#39409A" data-acc-bg="#FFFFFF">Indigo on White</button>
                <button type="button" class="mx-chip" data-acc-fg="#F472B6" data-acc-bg="#141416">Dark Berry on Charcoal</button>
                <button type="button" class="mx-chip" data-acc-fg="#D4D4D8" data-acc-bg="#141416">Dark Body on Charcoal</button>
                <button type="button" class="mx-chip" data-acc-fg="#A1A1AA" data-acc-bg="#FFFFFF">Low-Contrast Fail Example</button>
              </div>
            </div>
            <div class="mx-contrast-stage">
              <div class="mx-contrast-preview" id="acc-contrast-preview">
                <div class="mx-cp-large">Large Display Heading (24px Bold)</div>
                <div class="mx-cp-body">Body copy at 16px in Space Grotesk verifies legibility across documentation and interface surfaces.</div>
                <div class="mx-cp-ui"><span class="mx-cp-pill">UI Control Border &amp; Label</span></div>
              </div>
              <div class="mx-contrast-metrics" id="acc-contrast-metrics" aria-live="polite"></div>
            </div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-typography', 5, 'Typography & Readability', 'Ensuring Space Grotesk remains comfortable across screen sizes and zoom levels.')}
          <div class="mx-dodont">
            <div class="mx-do"><h4>Do</h4><ul><li>Maintain a <code>16px</code> (<code>1rem</code>) base body size and <code>1.5</code> line-height for prose.</li><li>Constrain long-form reading measure to <code>60–75ch</code>.</li><li>Use relative units (<code>rem</code> / <code>em</code>) so browser font scaling works at 200%.</li></ul></div>
            <div class="mx-dont"><h4>Don't</h4><ul><li>Set essential body paragraphs or form labels below <code>12px</code>.</li><li>Use justified text alignment that introduces irregular word-spacing rivers.</li><li>Use light weight (<code>300</code>) for small body text or dark-mode captions.</li></ul></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-keyboard', 6, 'Keyboard Navigation', 'Interactive roving-focus toolbar demonstration and canonical keyboard map.')}
          <div class="mx-demo-card">
            <p class="m" style="margin:0 0 10px">Try focusing a button below and pressing <strong>Left / Right Arrow</strong>, <strong>Home</strong>, or <strong>End</strong>:</p>
            <div class="mx-kbd-toolbar" role="toolbar" aria-label="Sample text formatting" id="acc-kbd-toolbar">
              <button type="button" class="b mx-tb-btn" tabindex="0" aria-pressed="true">Bold</button>
              <button type="button" class="b mx-tb-btn" tabindex="-1" aria-pressed="false">Italic</button>
              <button type="button" class="b mx-tb-btn" tabindex="-1" aria-pressed="false">Underline</button>
              <button type="button" class="b mx-tb-btn" tabindex="-1" aria-pressed="false">Code</button>
            </div>
            <p class="m" id="acc-kbd-status" aria-live="polite" style="margin:10px 0 0;font-size:12.5px">Active control: Bold (use Arrow keys to rove focus, Space/Enter to toggle).</p>
          </div>
          <div class="tb" style="margin-top:16px">
            <table>
              <thead><tr><th>Key</th><th>Expected Behaviour</th><th>Applies To</th></tr></thead>
              <tbody>
                <tr><td><code>Tab</code> / <code>Shift + Tab</code></td><td>Moves focus sequentially across interactive landmarks and controls.</td><td>All interactive elements</td></tr>
                <tr><td><code>Enter</code> / <code>Space</code></td><td>Activates buttons, toggles switches/checkboxes, opens menus.</td><td>Buttons, toggles, links (Enter)</td></tr>
                <tr><td><code>Escape</code></td><td>Dismisses modals, drawers, popovers, and search dialogs, returning focus to trigger.</td><td>Overlays, drawers, menus</td></tr>
                <tr><td><code>Arrow Keys</code></td><td>Navigates within composite widgets (tabs, toolbars, radio groups, listbox).</td><td>Composite ARIA widgets</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-focus', 7, 'Focus Management', 'Visible, predictable focus styling and modal return-focus standards.')}
          <div class="mx-dodont">
            <div class="mx-do"><h4>Do &mdash; High-Contrast :focus-visible Ring</h4><pre><code>.meld-btn:focus-visible {
  outline: 3px solid var(--ac, #BC4989);
  outline-offset: 2px;
}</code></pre></div>
            <div class="mx-dont"><h4>Don't &mdash; Suppressed Focus Outlines</h4><pre><code>/* Never remove focus without an equal replacement */
button:focus { outline: none; }</code></pre></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-sr', 8, 'Screen Reader Guidance', 'Landmarks, live announcements, and accessible naming patterns.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>Semantic Landmarks</h3><p>Structure pages with one <code>&lt;main&gt;</code>, labelled <code>&lt;nav aria-label="..."&gt;</code>, <code>&lt;header&gt;</code>, and <code>&lt;footer&gt;</code>. Never skip heading levels arbitrarily.</p></div>
            <div class="mx-box"><h3>Live Status Announcements</h3><p>Use <code>aria-live="polite"</code> for non-urgent search result counts and toast confirmations; reserve <code>role="alert"</code> for critical error interruptions.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-forms', 9, 'Accessible Forms', 'Programmatic label binding and accessible vs. inaccessible field comparison.')}
          <div class="mx-dodont">
            <div class="mx-do"><h4>Accessible Form Field</h4>
              <div class="mx-mini-form">
                <label for="acc-ex-email"><strong>Work email</strong> <span aria-hidden="true">*</span></label>
                <input id="acc-ex-email" type="email" value="alex@ideo" aria-invalid="true" aria-describedby="acc-ex-err">
                <span id="acc-ex-err" class="mx-err-msg">Enter a complete email address including a domain (e.g. alex@ideo.com).</span>
              </div>
            </div>
            <div class="mx-dont"><h4>Inaccessible Form Field</h4>
              <div class="mx-mini-form">
                <input type="text" placeholder="Email*" value="alex@ideo" style="border-color:#ef4444" aria-label="Inaccessible example">
                <span style="font-size:12px;color:#ef4444">Invalid input</span>
              </div>
              <p class="m" style="font-size:12px;margin-top:8px">Missing visible <code>&lt;label&gt;</code>, no <code>aria-describedby</code>, vague error message, relies on red border alone.</p>
            </div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-aria', 10, 'ARIA Guidelines', 'Apply native HTML semantics first; layer ARIA only to bridge custom widget gaps.')}
          <div class="tb">
            <table>
              <thead><tr><th>Pattern</th><th>Preferred Native HTML</th><th>Required ARIA Attributes</th></tr></thead>
              <tbody>
                <tr><td>Navigation Toggle</td><td><code>&lt;button type="button"&gt;</code></td><td><code>aria-expanded</code>, <code>aria-controls="side"</code></td></tr>
                <tr><td>Theme Switch</td><td><code>&lt;button role="switch"&gt;</code></td><td><code>aria-checked="true|false"</code>, <code>aria-label</code></td></tr>
                <tr><td>Search Dialog</td><td><code>&lt;div role="dialog"&gt;</code></td><td><code>aria-modal="true"</code>, <code>aria-label</code></td></tr>
                <tr><td>Active Sidebar Link</td><td><code>&lt;a href="#..."&gt;</code></td><td><code>aria-current="page"</code></td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-motion', 11, 'Motion & Reduced Motion', 'Honour OS-level motion sensitivity automatically across every interactive surface.')}
          <pre><code>@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}</code></pre>
        </article>

        <article class="mx-sec">
          ${secHead('acc-testing', 12, 'Accessibility Testing', 'Recommended 4-step verification workflow before merging any UI change.')}
          <div class="mx-grid-4">
            <div class="mx-step"><span>01</span><h4>Keyboard Pass</h4><p>Tab through every control without touching a mouse; verify focus order and Escape dismissal.</p></div>
            <div class="mx-step"><span>02</span><h4>Automated Scan</h4><p>Run axe DevTools / Lighthouse accessibility checks for missing labels, contrast, and ARIA errors.</p></div>
            <div class="mx-step"><span>03</span><h4>Zoom &amp; Reflow</h4><p>Verify 200% text zoom and 320px viewport width with zero clipped controls or horizontal overflow.</p></div>
            <div class="mx-step"><span>04</span><h4>Screen Reader</h4><p>Verify announcements in NVDA (Windows) or VoiceOver (macOS/iOS) for critical flows.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('acc-checklist', 13, 'Accessibility Audit Checklist', 'Interactive pre-release audit checklist for teams building with Meld.')}
          <div class="mx-checklist" data-checklist="acc">
            ${[
              'All text meets >= 4.5:1 contrast (>= 3:1 for large headings) in both Light and Dark themes.',
              'All UI borders, focus rings, and chart series meet >= 3:1 non-text contrast.',
              'Every interactive element is reachable and operable via keyboard alone.',
              'Focus rings are clearly visible (:focus-visible) and never hidden behind sticky headers.',
              'Page uses semantic landmarks (<header>, <nav>, <main>, <footer>) and logical H1-H3 hierarchy.',
              'All form inputs have programmatic <label> elements and aria-describedby error messages.',
              'Decorative icons carry aria-hidden="true"; standalone icon buttons include aria-label.',
              'Zero horizontal overflow at 320px width and full readability at 200% zoom.',
              'All animations respect @media (prefers-reduced-motion: reduce).',
              'Live screen-reader verification completed for primary user journeys.'
            ].map((item, i) => `<label class="mx-ck-item"><input type="checkbox" data-ck-idx="${i}"><span>${esc(item)}</span></label>`).join('')}
            <div class="mx-ck-summary" aria-live="polite">0 of 10 audit items verified</div>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'cd-overview', label: '05. Content Design [Ongoing]' },
          { id: 'mot-overview', label: '07. Motion & Interaction [Beta]' },
          [{ id: 'c-overview', label: '01. Color System' }, { id: 'mot-reduced', label: '07. Reduced Motion' }, { id: 'dv-a11y', label: '09. Accessible Charts' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     MODULE 07 — MOTION & INTERACTION [Beta] (13 Sections + Motion Playground)
     ======================================================================== */
  function buildModule07() {
    const sections = [
      { id: 'mot-overview', title: 'Motion Overview' },
      { id: 'mot-principles', title: 'Motion Principles' },
      { id: 'mot-tokens', title: 'Motion Tokens' },
      { id: 'mot-duration', title: 'Duration Standards' },
      { id: 'mot-easing', title: 'Easing Functions' },
      { id: 'mot-transitions', title: 'Transitions' },
      { id: 'mot-micro', title: 'Micro-interactions' },
      { id: 'mot-hover', title: 'Hover & Press States' },
      { id: 'mot-loading', title: 'Loading Animations' },
      { id: 'mot-page', title: 'Page Transitions' },
      { id: 'mot-gestures', title: 'Gesture Interactions' },
      { id: 'mot-reduced', title: 'Reduced Motion' },
      { id: 'mot-playground', title: 'Motion Playground' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('07', 'Motion & Interaction', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 07 &middot; MOTION &amp; INTERACTION ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Motion &amp; Interaction <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Choreographed timing tokens, easing curves, micro-interaction standards, reduced-motion fallbacks, and an interactive playground for purposeful interface movement.</p>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('mot-overview', 1, 'Motion Overview', 'Motion in Meld clarifies spatial relationships and confirms user intent without slowing workflows.')}
          <p class="lead">Every transition must earn its milliseconds. Meld favours crisp, GPU-composited transitions (<code>120ms–260ms</code>) that feel immediate, calm, and respectful of user focus.</p>
        </article>

        <article class="mx-sec">
          ${secHead('mot-principles', 2, 'Motion Principles', 'Four architectural rules governing every animated state.')}
          <div class="mx-grid-4">
            <div class="mx-box"><h3>Purposeful</h3><p>Guide attention to state changes, hierarchy shifts, or direct feedback — never animate purely for ornament.</p></div>
            <div class="mx-box"><h3>Responsive</h3><p>Interactive feedback begins within <code>&lt;100ms</code> so buttons, switches, and drawers feel tactile and instantaneous.</p></div>
            <div class="mx-box"><h3>Natural</h3><p>Use asymmetric deceleration curves (fast start, smooth settle) modelled on physical momentum.</p></div>
            <div class="mx-box"><h3>Accessible</h3><p>Provide calm, instantaneous opacity-only or static fallbacks when <code>prefers-reduced-motion</code> is enabled.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-tokens', 3, 'Motion Tokens', 'Proposed CSS custom properties for durations and easing curves.')}
          <div class="tb">
            <table>
              <thead><tr><th>Token Name</th><th>Value</th><th>Typical Usage</th></tr></thead>
              <tbody>
                <tr><td><code>--motion-duration-instant</code></td><td><code>100ms</code></td><td>Hover colour tint, active press scale, icon swap</td></tr>
                <tr><td><code>--motion-duration-fast</code></td><td><code>160ms</code></td><td>Tooltips, dropdowns, toggles, accordion chevrons</td></tr>
                <tr><td><code>--motion-duration-normal</code></td><td><code>240ms</code></td><td>Drawers, modal entrances, card elevation hover</td></tr>
                <tr><td><code>--motion-duration-slow</code></td><td><code>360ms</code></td><td>Complex layout shifts, multi-panel choreography</td></tr>
                <tr><td><code>--motion-ease-standard</code></td><td><code>cubic-bezier(0.2, 0, 0, 1)</code></td><td>Default state transitions &amp; on-screen repositioning</td></tr>
                <tr><td><code>--motion-ease-decelerate</code></td><td><code>cubic-bezier(0, 0, 0.2, 1)</code></td><td>Elements entering viewport (modals, toasts, drawers)</td></tr>
                <tr><td><code>--motion-ease-accelerate</code></td><td><code>cubic-bezier(0.4, 0, 1, 1)</code></td><td>Elements exiting viewport swiftly</td></tr>
                <tr><td><code>--motion-ease-emphasized</code></td><td><code>cubic-bezier(0.22, 1, 0.36, 1)</code></td><td>Hero entry cards, theme switch thumb, off-canvas drawer</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-duration', 4, 'Duration Standards', 'Match animation duration to element area and travel distance.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h3>Micro (80–150ms)</h3><p>Checkboxes, switches, icon rotations, hover states. Must never lag behind pointer velocity.</p></div>
            <div class="mx-box"><h3>Medium (160–240ms)</h3><p>Menus, popovers, toasts, card elevation, off-canvas drawers. Balanced legibility and speed.</p></div>
            <div class="mx-box"><h3>Macro (260–380ms)</h3><p>Full-viewport dialogs or multi-region transitions. Exits should be ~25% faster than entrances.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-easing', 5, 'Easing Functions', 'Visual cubic-bezier velocity profiles used across Meld.')}
          <div class="mx-grid-4">
            ${[
              { n: 'Standard', v: 'cubic-bezier(0.2, 0, 0, 1)', p: 'M6 54 C18 54, 18 6, 54 6' },
              { n: 'Emphasized', v: 'cubic-bezier(0.22, 1, 0.36, 1)', p: 'M6 54 C18 6, 26 6, 54 6' },
              { n: 'Decelerate', v: 'cubic-bezier(0, 0, 0.2, 1)', p: 'M6 54 C6 30, 18 6, 54 6' },
              { n: 'Accelerate', v: 'cubic-bezier(0.4, 0, 1, 1)', p: 'M6 54 C28 54, 54 34, 54 6' }
            ].map(e => `
              <div class="mx-box" style="text-align:center">
                <svg viewBox="0 0 60 60" width="72" height="72" style="margin:0 auto 8px;display:block">
                  <rect x="6" y="6" width="48" height="48" fill="none" stroke="var(--bd)" stroke-dasharray="3 3"/>
                  <path d="${e.p}" fill="none" stroke="#BC4989" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
                <h4 style="margin:0 0 4px">${e.n}</h4>
                <code style="font-size:10.5px">${e.v}</code>
              </div>
            `).join('')}
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-transitions', 6, 'Transitions', 'GPU-composited properties only for reliable 60fps performance.')}
          <div class="mx-dodont">
            <div class="mx-do"><h4>Do &mdash; Composite Transform &amp; Opacity</h4><pre><code>.drawer {
  transform: translateX(-100%);
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
.drawer.open { transform: translateX(0); }</code></pre></div>
            <div class="mx-dont"><h4>Don't &mdash; Animate Layout Geometry</h4><pre><code>/* Triggers expensive layout recalculations every frame */
.drawer { left: -320px; transition: left 300ms ease, width 300ms ease; }</code></pre></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-micro', 7, 'Micro-interactions', 'Live subtle tactile feedback controls.')}
          <div class="mx-demo-row">
            <button type="button" class="b mx-demo-press" id="mot-copy-demo">Copy token snippet</button>
            <label class="mx-demo-switch"><input type="checkbox" checked><span>Enable live notifications</span></label>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-hover', 8, 'Hover & Press States', 'Compare pointer elevation and active tactile compression.')}
          <div class="mx-grid-2">
            <div class="mx-box mx-hover-lift" tabindex="0"><h3>Card Lift (-3px)</h3><p>Hover or focus this card to inspect Meld's restrained elevation lift + Berry accent border shift (<code>200ms</code>).</p></div>
            <div class="mx-box"><h3 style="margin-bottom:10px">Button Press Compression</h3><button type="button" class="mx-primary-demo-btn">Press &amp; Hold Me</button></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-loading', 9, 'Loading Animations', 'Calm skeleton shimmer, determinate bar, and inline spinner specimens.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h4>Skeleton Shimmer</h4><div class="mx-skel-line" style="width:75%"></div><div class="mx-skel-line" style="width:100%"></div><div class="mx-skel-line" style="width:55%"></div></div>
            <div class="mx-box"><h4>Inline Spinner</h4><div style="display:flex;align-items:center;gap:10px;margin-top:10px"><span class="mx-spinner" aria-hidden="true"></span><span>Synchronizing tokens...</span></div></div>
            <div class="mx-box"><h4>Indeterminate Track</h4><div class="mx-prog-track"><div class="mx-prog-bar"></div></div></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-page', 10, 'Page Transitions', 'Keep documentation route switches instant (0ms scroll jump or <=140ms fade) to avoid blocking rapid reference lookup.')}
          <p class="m">Meld switches between <code>#home</code> and documentation routes instantaneously while preserving the persistent 320px sidebar so users retain complete spatial context.</p>
        </article>

        <article class="mx-sec">
          ${secHead('mot-gestures', 11, 'Gesture Interactions', 'Touch targets, drawer dismiss physics, and accessible button equivalents.')}
          <p class="m">Every gesture (swipe-to-close drawer, drag-to-reorder) must always provide a single-pointer button alternative to satisfy WCAG 2.2 <code>2.5.1</code> Pointer Gestures and <code>2.5.7</code> Dragging Movements.</p>
        </article>

        <article class="mx-sec">
          ${secHead('mot-reduced', 12, 'Reduced Motion', 'Before/after comparison when prefers-reduced-motion: reduce is active.')}
          <div class="tb">
            <table>
              <thead><tr><th>Interaction</th><th>Default Motion</th><th>Reduced-Motion Alternative</th></tr></thead>
              <tbody>
                <tr><td>Mobile Sidebar Drawer</td><td><code>240ms</code> slide-in via <code>translateX</code></td><td>Instant reveal (<code>0ms</code>) with backdrop</td></tr>
                <tr><td>Hero Word Cycling</td><td>Gentle <code>6.5s</code> typographic swap</td><td>Static default word (<code>work</code>), cycling disabled</td></tr>
                <tr><td>Loading Skeleton</td><td>Subtle horizontal luminance pulse</td><td>Static neutral placeholder surface</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('mot-playground', 13, 'Motion Playground', 'Interactive sandbox to preview Meld duration tokens, easing curves, and reduced-motion fallbacks.')}
          <div class="mx-playground" id="mot-playground-box">
            <div class="mx-pg-controls">
              <div class="mx-ctrl-row">
                <label class="mx-ctrl"><span>Duration</span>
                  <select id="mot-pg-dur"><option value="100">100ms (Instant)</option><option value="160">160ms (Fast)</option><option value="240" selected>240ms (Normal)</option><option value="360">360ms (Slow)</option><option value="550">550ms (Demo Slow)</option></select>
                </label>
                <label class="mx-ctrl"><span>Easing Curve</span>
                  <select id="mot-pg-ease">
                    <option value="cubic-bezier(0.2, 0, 0, 1)">Standard (0.2, 0, 0, 1)</option>
                    <option value="cubic-bezier(0.22, 1, 0.36, 1)" selected>Emphasized (0.22, 1, 0.36, 1)</option>
                    <option value="cubic-bezier(0, 0, 0.2, 1)">Decelerate (0, 0, 0.2, 1)</option>
                    <option value="cubic-bezier(0.4, 0, 1, 1)">Accelerate (0.4, 0, 1, 1)</option>
                    <option value="linear">Linear</option>
                  </select>
                </label>
                <label class="mx-ctrl"><span>Pattern</span>
                  <select id="mot-pg-type"><option value="slide">Slide Horizontal</option><option value="lift">Fade + Lift</option><option value="scale">Scale Pop</option></select>
                </label>
                <label class="mx-ck-inline"><input type="checkbox" id="mot-pg-rm"><span>Simulate Reduced Motion</span></label>
              </div>
              <div class="mx-ctrl-row">
                <button type="button" class="mx-primary-demo-btn" id="mot-pg-play">Play Animation</button>
                <button type="button" class="b" id="mot-pg-copy">Copy CSS Transition</button>
              </div>
            </div>
            <div class="mx-mot-stage">
              <div class="mx-mot-actor" id="mot-pg-actor">Meld Surface</div>
            </div>
            <pre class="mx-code-out" id="mot-pg-code">transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);</pre>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'acc-overview', label: '06. Accessibility [Beta]' },
          { id: 'ico-overview', label: '08. Iconography & Assets [Beta]' },
          [{ id: 'acc-motion', label: '06. Reduced Motion' }, { id: 'm-browser', label: '02. Component Explorer' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     MODULE 08 — ICONOGRAPHY & ASSETS [Beta] (11 Sections + 32-Icon Library)
     ======================================================================== */
  const MELD_ICONS = [
    { name: 'home', cat: 'Navigation', svg: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>' },
    { name: 'menu', cat: 'Navigation', svg: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' },
    { name: 'chevron-right', cat: 'Navigation', svg: '<polyline points="9 6 15 12 9 18"/>' },
    { name: 'chevron-down', cat: 'Navigation', svg: '<polyline points="6 9 12 15 18 9"/>' },
    { name: 'arrow-right', cat: 'Navigation', svg: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>' },
    { name: 'external-link', cat: 'Navigation', svg: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>' },
    { name: 'search', cat: 'Actions', svg: '<circle cx="11" cy="11" r="7.5"/><line x1="20.5" y1="20.5" x2="16.5" y2="16.5"/>' },
    { name: 'plus', cat: 'Actions', svg: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },
    { name: 'close', cat: 'Actions', svg: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>' },
    { name: 'copy', cat: 'Actions', svg: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' },
    { name: 'download', cat: 'Actions', svg: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' },
    { name: 'edit', cat: 'Actions', svg: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>' },
    { name: 'trash', cat: 'Actions', svg: '<polyline points="3 6 5 6 21 6"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>' },
    { name: 'filter', cat: 'Actions', svg: '<polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/>' },
    { name: 'check', cat: 'Status', svg: '<polyline points="20 6 9 17 4 12"/>' },
    { name: 'check-circle', cat: 'Status', svg: '<circle cx="12" cy="12" r="9"/><polyline points="8.5 12.5 11 15 15.5 9.5"/>' },
    { name: 'alert-triangle', cat: 'Status', svg: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.8"/>' },
    { name: 'info', cat: 'Status', svg: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8.5" r="0.7"/>' },
    { name: 'lock', cat: 'Status', svg: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>' },
    { name: 'bell', cat: 'Status', svg: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>' },
    { name: 'sun', cat: 'Interface', svg: '<circle cx="12" cy="12" r="4.5"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>' },
    { name: 'moon', cat: 'Interface', svg: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>' },
    { name: 'layers', cat: 'Interface', svg: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>' },
    { name: 'layout', cat: 'Interface', svg: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
    { name: 'grid', cat: 'Interface', svg: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>' },
    { name: 'eye', cat: 'Interface', svg: '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/>' },
    { name: 'bar-chart', cat: 'Data', svg: '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="9"/>' },
    { name: 'trending-up', cat: 'Data', svg: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>' },
    { name: 'pie-chart', cat: 'Data', svg: '<path d="M21 12A9 9 0 1 1 12 3v9Z"/><path d="M12 3a9 9 0 0 1 9 9h-9Z"/>' },
    { name: 'code', cat: 'System', svg: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
    { name: 'settings', cat: 'System', svg: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/>' },
    { name: 'user', cat: 'System', svg: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/>' }
  ];

  function buildModule08() {
    const sections = [
      { id: 'ico-overview', title: 'Iconography Overview' },
      { id: 'ico-principles', title: 'Icon Design Principles' },
      { id: 'ico-library', title: 'Icon Library' },
      { id: 'ico-sizing', title: 'Icon Sizing' },
      { id: 'ico-stroke', title: 'Stroke & Fill' },
      { id: 'ico-alignment', title: 'Alignment & Optical Balance' },
      { id: 'ico-usage', title: 'Icon Usage Guidelines' },
      { id: 'ico-illustrations', title: 'Illustrations' },
      { id: 'ico-images', title: 'Image Guidelines' },
      { id: 'ico-brand', title: 'Brand Assets' },
      { id: 'ico-export', title: 'Asset Export Standards' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('08', 'Iconography & Assets', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 08 &middot; ICONOGRAPHY &amp; ASSETS ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Iconography &amp; Assets <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Unified UI icon library, optical alignment grids, stroke &amp; sizing scales, brand assets, and SVG export standards for Meld by IDEO.</p>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('ico-overview', 1, 'Iconography Overview', 'Crisp geometric stroke icons engineered to harmonize with Space Grotesk typography.')}
          <p class="lead">Meld icons use a uniform <code>24&times;24</code> pixel viewBox, <code>2px</code> default stroke, rounded joins/caps, and <code>currentColor</code> inheritance so every icon automatically adapts to Light and Dark themes.</p>
        </article>

        <article class="mx-sec">
          ${secHead('ico-principles', 2, 'Icon Design Principles', 'Four rules preserving crispness at 16px and visual harmony across modules.')}
          <div class="mx-grid-4">
            <div class="mx-box"><h3>Geometric</h3><p>Constructed from simple circles, lines, and 45&deg;/90&deg; angles aligned to integer pixel boundaries.</p></div>
            <div class="mx-box"><h3>Legible at 16px</h3><p>Avoid micro-details or dense hatching that collapses at compact button or tab scale.</p></div>
            <div class="mx-box"><h3>Theme-Native</h3><p>UI icons always use <code>stroke="currentColor"</code> instead of hardcoded hex fills.</p></div>
            <div class="mx-box"><h3>Semantically Clear</h3><p>Pair non-universal metaphors with visible text labels; reserve icon-only buttons for ubiquitous actions.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-library', 3, 'Icon Library', 'Searchable gallery of 32 canonical Meld UI icons with live size, stroke, and one-click SVG copy.')}
          <div class="mx-playground" id="ico-gallery-tool">
            <div class="mx-pg-controls">
              <div class="mx-ctrl-row">
                <label class="mx-ctrl" style="flex:1;min-width:200px"><span>Search icons</span>
                  <input type="search" id="ico-search" placeholder="Search by name or category (e.g. search, chart, alert, layers)...">
                </label>
                <label class="mx-ctrl"><span>Category</span>
                  <select id="ico-cat"><option value="all">All (32)</option><option>Navigation</option><option>Actions</option><option>Status</option><option>Interface</option><option>Data</option><option>System</option></select>
                </label>
                <label class="mx-ctrl"><span>Size</span>
                  <select id="ico-size"><option value="16">16px</option><option value="20">20px</option><option value="24" selected>24px</option><option value="32">32px</option><option value="40">40px</option></select>
                </label>
                <label class="mx-ctrl"><span>Stroke</span>
                  <select id="ico-stroke-sel"><option value="1.5">1.5px</option><option value="2" selected>2.0px</option><option value="2.5">2.5px</option></select>
                </label>
              </div>
            </div>
            <div class="mx-icon-grid" id="ico-grid"></div>
            <div class="m" id="ico-copy-msg" aria-live="polite" style="margin-top:10px;font-size:12.5px">Click any icon to copy clean SVG markup.</div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-sizing', 4, 'Icon Sizing', 'Standard icon dimensions paired with Meld typography and control heights.')}
          <div class="mx-size-row">
            ${[16, 20, 24, 32, 48].map(sz => `
              <div class="mx-size-item">
                <svg width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sz <= 16 ? 2.2 : 2}" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
                <strong>${sz}px</strong>
                <span>${sz === 16 ? 'Inline / Compact' : sz === 20 ? 'Buttons / Inputs' : sz === 24 ? 'Navigation Default' : sz === 32 ? 'Empty States' : 'Hero Cards'}</span>
              </div>
            `).join('')}
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-stroke', 5, 'Stroke & Fill', 'Stroke weight consistency vs. solid filled active indicators.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h4>1.5px Thin Stroke</h4><p>Reserved for large 32–48px decorative icons so lines don't appear overly heavy.</p></div>
            <div class="mx-box"><h4>2.0px Default Stroke</h4><p>Canonical weight for 20px and 24px UI controls, navigation, and toolbars.</p></div>
            <div class="mx-box"><h4>Solid Fill Variant</h4><p>Used selectively for active navigation badges, status dots, and brand marks.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-alignment', 6, 'Alignment & Optical Balance', 'Keyline shapes keep squares, circles, and tall/wide icons optically equal in weight.')}
          <div class="mx-grid-2">
            <div class="mx-box" style="display:flex;align-items:center;gap:20px">
              <svg viewBox="0 0 64 64" width="96" height="96" style="flex-shrink:0">
                <rect x="4" y="4" width="56" height="56" fill="none" stroke="var(--bd)" stroke-dasharray="2 2"/>
                <rect x="10" y="10" width="44" height="44" rx="4" fill="none" stroke="#39409A" stroke-width="1.5"/>
                <circle cx="32" cy="32" r="24" fill="none" stroke="#BC4989" stroke-width="1.5"/>
                <line x1="4" y1="32" x2="60" y2="32" stroke="var(--bd)"/>
                <line x1="32" y1="4" x2="32" y2="60" stroke="var(--bd)"/>
              </svg>
              <div><h4>24&times;24 Keyline Grid</h4><p class="m" style="margin:0;font-size:13px">Leave <code>2px</code> optical padding around the canvas (<code>20&times;20</code> live area). Circles extend <code>1px</code> beyond squares to equalize visual mass.</p></div>
            </div>
            <div class="mx-box"><h4>Baseline Alignment</h4><p>Use <code>display: inline-flex; align-items: center; gap: 8px;</code> to vertically centre icons beside Space Grotesk text labels.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-usage', 7, 'Icon Usage Guidelines', 'Correct vs. incorrect icon application in product interfaces.')}
          <div class="mx-dodont">
            <div class="mx-do"><h4>Do</h4><ul><li>Use consistent stroke weights across all actions inside a toolbar.</li><li>Set <code>aria-hidden="true"</code> when an icon accompanies a visible text label.</li><li>Use <code>aria-label</code> on icon-only buttons.</li></ul></div>
            <div class="mx-dont"><h4>Don't</h4><ul><li>Mix 1px hairline icons with 3px bold filled icons in the same row.</li><li>Stretch icons non-uniformly or break the 1:1 aspect ratio.</li><li>Use icons alone for destructive or infrequent domain actions.</li></ul></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-illustrations', 8, 'Illustrations', 'Dimensional 3D glassmorphic hero art paired with restrained spot illustrations.')}
          <p class="m">Hero surfaces use architectural isometric compositions in Meld's Berry Magenta (<code>#BC4989</code>) and Deep Indigo (<code>#39409A</code>) refraction palette (<code>assets/hero-3d-light.jpg</code> and <code>assets/hero-3d-dark.jpg</code>), while empty states use restrained geometric spot graphics.</p>
        </article>

        <article class="mx-sec">
          ${secHead('ico-images', 9, 'Image Guidelines', 'Responsive framing, compression, and contrast overlay standards.')}
          <div class="tb">
            <table>
              <thead><tr><th>Surface</th><th>Ratio</th><th>Format &amp; Budget</th><th>Accessibility</th></tr></thead>
              <tbody>
                <tr><td>Hero Canvas Backdrop</td><td><code>16:9</code></td><td>Optimized JPEG/WebP (&le;100KB)</td><td>Decorative (<code>aria-hidden="true"</code>) + readability scrim</td></tr>
                <tr><td>Content Card Thumbnail</td><td><code>16:10</code> / <code>4:3</code></td><td>WebP/JPEG with <code>object-fit: cover</code></td><td>Descriptive <code>alt</code> attribute describing subject</td></tr>
                <tr><td>Avatar / Identity</td><td><code>1:1</code></td><td>Circular crop with initials fallback</td><td><code>alt="{Person Name}"</code></td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-brand', 10, 'Brand Assets', 'Official Meld by IDEO vector lockups and favicon identity stored in assets/brand/ and assets/icons/.')}
          <div class="mx-grid-3">
            <div class="mx-box" style="text-align:center">
              <div style="padding:18px 0;display:flex;justify-content:center">${window.MeldLogo ? window.MeldLogo({ variant: 'primary', size: 32 }) : ''}</div>
              <h4>Primary Lockup</h4>
              <p class="m" style="font-size:12px"><code>assets/brand/meld-logo-primary-*.svg</code></p>
            </div>
            <div class="mx-box" style="text-align:center">
              <div style="padding:18px 0;display:flex;justify-content:center">${window.MeldLogo ? window.MeldLogo({ variant: 'compact', size: 32 }) : ''}</div>
              <h4>Compact Lockup</h4>
              <p class="m" style="font-size:12px"><code>assets/brand/meld-logo-compact-*.svg</code></p>
            </div>
            <div class="mx-box" style="text-align:center">
              <div style="padding:18px 0;display:flex;justify-content:center">${window.MeldLogo ? window.MeldLogo({ variant: 'symbol', theme: 'mono', size: 32 }) : ''}</div>
              <h4>Monochrome Symbol</h4>
              <p class="m" style="font-size:12px"><code>assets/brand/meld-symbol-mono-*.svg</code></p>
            </div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('ico-export', 11, 'Asset Export Standards', 'Checklist for exporting clean, editable SVG & PNG assets.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>SVG Hygiene</h3><ul><li>Always include an explicit integer <code>viewBox</code> (e.g. <code>0 0 24 24</code>).</li><li>Strip Figma/Illustrator comments, unused clipPaths, and inline styles.</li><li>Round path coordinates to 1–2 decimal places.</li></ul></div>
            <div class="mx-box"><h3>Favicon &amp; App Icons</h3><ul><li>Provide adaptive <code>favicon.svg</code> + multi-frame <code>favicon.ico</code> (16/32/48).</li><li>Provide <code>180&times;180</code> Apple touch icon and <code>192/512</code> manifest PNGs.</li></ul></div>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'mot-overview', label: '07. Motion & Interaction [Beta]' },
          { id: 'dv-overview', label: '09. Data Visualization [Beta]' },
          [{ id: 'foundations', label: '01. Foundations' }, { id: 'dev-install', label: '11. Asset File Map' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     MODULE 09 — DATA VISUALIZATION [Beta] (13 Sections + SVG Chart Playground)
     ======================================================================== */
  function buildModule09() {
    const sections = [
      { id: 'dv-overview', title: 'Data Visualization Overview' },
      { id: 'dv-principles', title: 'Visualization Principles' },
      { id: 'dv-colors', title: 'Chart Colour System' },
      { id: 'dv-bar', title: 'Bar Charts' },
      { id: 'dv-line', title: 'Line Charts' },
      { id: 'dv-area', title: 'Area Charts' },
      { id: 'dv-donut', title: 'Pie & Donut Charts' },
      { id: 'dv-tables', title: 'Tables & Analytical Displays' },
      { id: 'dv-labels', title: 'Data Labels & Legends' },
      { id: 'dv-dashboard', title: 'Dashboard Visualizations' },
      { id: 'dv-responsive', title: 'Responsive Charts' },
      { id: 'dv-a11y', title: 'Accessible Data Visualization' },
      { id: 'dv-playground', title: 'Visualization Playground' }
    ];

    const palette = [
      { n: 'Series 1 (Berry)', c: '#BC4989' },
      { n: 'Series 2 (Indigo)', c: '#39409A' },
      { n: 'Series 3 (Ocean)', c: '#0284C7' },
      { n: 'Series 4 (Teal)', c: '#0D9488' },
      { n: 'Series 5 (Amber)', c: '#D97706' },
      { n: 'Series 6 (Violet)', c: '#7C3AED' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('09', 'Data Visualization', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 09 &middot; DATA VISUALIZATION ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Data Visualization <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Chart selection standards, colour-accessible categorical palettes, responsive data layouts, and an interactive SVG Visualization Playground.</p>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('dv-overview', 1, 'Data Visualization Overview', 'Analytical storytelling standards distinct from Module 02 UI Data Display primitives.')}
          <p class="lead">While Module 02 documents individual badges, tables, and stat cards, Module 09 defines how quantitative series, trends, proportions, and analytical dashboards communicate insight truthfully and accessibly.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dv-principles', 2, 'Visualization Principles', 'Clarity, honesty, and perceptual accuracy first.')}
          <div class="mx-grid-4">
            <div class="mx-box"><h3>Honest Scales</h3><p>Bar and area charts always start at a zero baseline to prevent visual distortion.</p></div>
            <div class="mx-box"><h3>High Data-Ink</h3><p>Keep gridlines faint (<code>1px</code> subtle stroke), eliminate 3D chart skew, and let data marks lead.</p></div>
            <div class="mx-box"><h3>Direct Context</h3><p>Show units, timeframe, and direct labels or tooltips so readers never decode mentally.</p></div>
            <div class="mx-box"><h3>Redundant Encoding</h3><p>Combine colour with dashed strokes, markers, or direct labels for colour-vision accessibility.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-colors', 3, 'Chart Colour System', 'Six-step categorical sequence ordered for adjacent visual separation.')}
          <div class="mx-swatch-grid">
            ${palette.map(p => `<div class="mx-swatch"><div class="mx-swatch-chip" style="background:${p.c}"></div><strong>${p.n}</strong><code>${p.c}</code></div>`).join('')}
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-bar', 4, 'Bar Charts', 'Best for discrete category comparisons; sort descending unless order is chronological.')}
          <div class="mx-chart-spec">
            <svg viewBox="0 0 420 150" class="mx-svg-chart" role="img" aria-label="Sample vertical bar chart showing adoption across 4 quarters">
              <line x1="40" y1="120" x2="400" y2="120" stroke="var(--bd)"/>
              <line x1="40" y1="75" x2="400" y2="75" stroke="var(--bd)" stroke-dasharray="3 3"/>
              <line x1="40" y1="30" x2="400" y2="30" stroke="var(--bd)" stroke-dasharray="3 3"/>
              <rect x="68" y="62" width="44" height="58" rx="4" fill="#39409A"/><text x="90" y="54" text-anchor="middle" class="mx-svg-lbl">58%</text><text x="90" y="138" text-anchor="middle" class="mx-svg-axis">Q1</text>
              <rect x="152" y="48" width="44" height="72" rx="4" fill="#39409A"/><text x="174" y="40" text-anchor="middle" class="mx-svg-lbl">72%</text><text x="174" y="138" text-anchor="middle" class="mx-svg-axis">Q2</text>
              <rect x="236" y="36" width="44" height="84" rx="4" fill="#BC4989"/><text x="258" y="28" text-anchor="middle" class="mx-svg-lbl">84%</text><text x="258" y="138" text-anchor="middle" class="mx-svg-axis">Q3</text>
              <rect x="320" y="24" width="44" height="96" rx="4" fill="#BC4989"/><text x="342" y="16" text-anchor="middle" class="mx-svg-lbl">96%</text><text x="342" y="138" text-anchor="middle" class="mx-svg-axis">Q4</text>
            </svg>
            <p class="m" style="margin:8px 0 0;font-size:13px">Bar width should occupy ~60% of slot width; apply <code>4px</code> top-only border radius for crisp Meld polish.</p>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-line', 5, 'Line Charts', 'Best for continuous time-series trends; cap simultaneous series at 4–5 lines.')}
          <div class="mx-chart-spec">
            <svg viewBox="0 0 420 140" class="mx-svg-chart" role="img" aria-label="Sample multi-series line chart">
              <line x1="30" y1="115" x2="400" y2="115" stroke="var(--bd)"/>
              <polyline fill="none" stroke="#BC4989" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" points="40,95 125,74 210,60 295,42 380,26"/>
              <polyline fill="none" stroke="#39409A" stroke-width="2.2" stroke-dasharray="5 4" stroke-linecap="round" points="40,104 125,92 210,85 295,68 380,58"/>
              <circle cx="40" cy="95" r="4" fill="#BC4989"/><circle cx="210" cy="60" r="4" fill="#BC4989"/><circle cx="380" cy="26" r="4" fill="#BC4989"/>
            </svg>
            <p class="m" style="margin:8px 0 0;font-size:13px">Differentiate primary vs. forecast/comparison series using solid vs. dashed strokes plus circular point markers.</p>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-area', 6, 'Area Charts', 'Communicate cumulative volume over time with translucent fills beneath crisp trend lines.')}
          <div class="mx-chart-spec">
            <svg viewBox="0 0 420 140" class="mx-svg-chart" role="img" aria-label="Sample area chart">
              <polygon fill="rgba(188,73,137,0.16)" points="40,115 40,88 125,70 210,56 295,40 380,24 380,115"/>
              <polyline fill="none" stroke="#BC4989" stroke-width="2.5" points="40,88 125,70 210,56 295,40 380,24"/>
              <line x1="30" y1="115" x2="400" y2="115" stroke="var(--bd)"/>
            </svg>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-donut', 7, 'Pie & Donut Charts', 'Part-to-whole proportions limited to 5 slices maximum; prefer horizontal bars beyond 5 categories.')}
          <div class="mx-grid-2">
            <div class="mx-box" style="display:flex;align-items:center;gap:20px">
              <svg viewBox="0 0 120 120" width="108" height="108" role="img" aria-label="Donut chart 48% Design, 32% Develop, 20% Patterns">
                <circle cx="60" cy="60" r="44" fill="none" stroke="#BC4989" stroke-width="16" stroke-dasharray="132.7 276.5" transform="rotate(-90 60 60)"/>
                <circle cx="60" cy="60" r="44" fill="none" stroke="#39409A" stroke-width="16" stroke-dasharray="88.5 276.5" stroke-dashoffset="-132.7" transform="rotate(-90 60 60)"/>
                <circle cx="60" cy="60" r="44" fill="none" stroke="#0284C7" stroke-width="16" stroke-dasharray="55.3 276.5" stroke-dashoffset="-221.2" transform="rotate(-90 60 60)"/>
                <text x="60" y="64" text-anchor="middle" class="mx-svg-lbl" style="font-size:15px;font-weight:700">100%</text>
              </svg>
              <div><h4>Donut Center Summary</h4><p class="m" style="margin:0;font-size:13px">Display total or lead percentage in the hollow centre; start the largest segment at 12 o'clock clockwise.</p></div>
            </div>
            <div class="mx-box"><h4>When to Switch to Bars</h4><p>Whenever two slices differ by less than 5% or categories exceed 5 items, horizontal bar charts communicate exact comparisons far more accurately.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-tables', 8, 'Tables & Analytical Displays', 'Tabular numeric alignment and scannable density standards.')}
          <p class="m">Apply <code>font-variant-numeric: tabular-nums;</code> to numeric cells, right-align figures, left-align labels, and pair analytical tables with Module 02 Complex Data Grids (<a href="#m-browser">Component Explorer</a>).</p>
        </article>

        <article class="mx-sec">
          ${secHead('dv-labels', 9, 'Data Labels & Legends', 'Place legends top-left directly under the chart title for natural F-pattern scanning.')}
          <p class="m">Format large numbers concisely (<code>42.5K</code>, <code>$1.4M</code>), keep axis ticks uncluttered (4–6 intervals), and never rotate X-axis labels 90&deg; vertically.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dv-dashboard', 10, 'Dashboard Visualizations', 'Visual hierarchy: 3–4 KPI stat cards → 1 primary trend chart → 2 supporting breakdowns.')}
          <p class="m">See <a href="#t-browser">04. Templates &amp; Layouts [Ongoing]</a> for responsive Executive Dashboard and Analytics Hub shell blueprints.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dv-responsive', 11, 'Responsive Charts', 'Graceful degradation from 1440px multi-panel grids to 320px mobile viewports.')}
          <div class="tb">
            <table>
              <thead><tr><th>Viewport</th><th>Chart Adaptation</th></tr></thead>
              <tbody>
                <tr><td>Desktop (&ge;1024px)</td><td>2-column analytical cards, full axis labels, hover tooltips + legend top-left</td></tr>
                <tr><td>Tablet (768–1023px)</td><td>Reduced tick density (every 2nd label), touch-tap tooltip inspection</td></tr>
                <tr><td>Mobile (&le;767px)</td><td>Single-column full-width SVG, simplified labels, toggleable accessible data table</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-a11y', 12, 'Accessible Data Visualization', 'WCAG 2.2 compliance guidelines for charts and graphs.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h3>Text Summary</h3><p>Add <code>role="img"</code> and a concise <code>aria-label</code> summarizing the core takeaway (e.g. peak, trend, total).</p></div>
            <div class="mx-box"><h3>Data Table Fallback</h3><p>Offer a keyboard-accessible "View as table" option for screen-reader users inspecting exact values.</p></div>
            <div class="mx-box"><h3>Contrast &ge;3:1</h3><p>Ensure adjacent bars/slices and trend strokes maintain &ge;3:1 contrast against the chart surface in Light and Dark themes.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dv-playground', 13, 'Visualization Playground', 'Switch chart types, edit live data values, toggle legends/palettes, and test empty/loading states.')}
          <div class="mx-playground" id="dv-playground-box">
            <div class="mx-pg-controls">
              <div class="mx-ctrl-row">
                <label class="mx-ctrl"><span>Chart Type</span>
                  <select id="dv-pg-type"><option value="bar">Bar Chart</option><option value="line">Line Chart</option><option value="area">Area Chart</option><option value="donut">Donut Chart</option></select>
                </label>
                <label class="mx-ctrl"><span>Palette</span>
                  <select id="dv-pg-pal"><option value="brand">Meld Brand</option><option value="cb">Colorblind-Safe (High Contrast)</option></select>
                </label>
                <label class="mx-ctrl"><span>State</span>
                  <select id="dv-pg-state"><option value="data">Live Data</option><option value="loading">Loading Skeleton</option><option value="empty">Empty State</option></select>
                </label>
                <label class="mx-ctrl"><span>Legend</span>
                  <select id="dv-pg-leg"><option value="top">Top</option><option value="bottom">Bottom</option><option value="none">Hidden</option></select>
                </label>
                <label class="mx-ck-inline"><input type="checkbox" id="dv-pg-lbl" checked><span>Data Labels</span></label>
              </div>
              <div class="mx-ctrl-row" id="dv-pg-inputs">
                <label class="mx-ctrl"><span>Foundations</span><input type="number" class="dv-val" data-k="Foundations" value="88" min="0" max="150"></label>
                <label class="mx-ctrl"><span>Components</span><input type="number" class="dv-val" data-k="Components" value="124" min="0" max="150"></label>
                <label class="mx-ctrl"><span>Patterns</span><input type="number" class="dv-val" data-k="Patterns" value="110" min="0" max="150"></label>
                <label class="mx-ctrl"><span>Templates</span><input type="number" class="dv-val" data-k="Templates" value="64" min="0" max="150"></label>
                <label class="mx-ctrl"><span>Content</span><input type="number" class="dv-val" data-k="Content" value="52" min="0" max="150"></label>
              </div>
            </div>
            <div class="mx-dv-stage" id="dv-pg-stage" aria-live="polite"></div>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'ico-overview', label: '08. Iconography & Assets [Beta]' },
          { id: 'gov-overview', label: '10. Design Governance [Beta]' },
          [{ id: 'm-browser', label: '02. Complex Data Tables' }, { id: 't-browser', label: '04. Dashboard Layouts' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     MODULE 10 — DESIGN GOVERNANCE [Beta] (13 Sections + Workflow & Checklist)
     ======================================================================== */
  function buildModule10() {
    const sections = [
      { id: 'gov-overview', title: 'Governance Overview' },
      { id: 'gov-principles', title: 'Design System Principles' },
      { id: 'gov-contributing', title: 'Contribution Guidelines' },
      { id: 'gov-workflow', title: 'Contribution Workflow' },
      { id: 'gov-requests', title: 'Component Request Process' },
      { id: 'gov-review', title: 'Design Review Process' },
      { id: 'gov-qa', title: 'Quality Assurance' },
      { id: 'gov-versioning', title: 'Versioning Strategy' },
      { id: 'gov-releases', title: 'Release Management' },
      { id: 'gov-deprecation', title: 'Deprecation Policy' },
      { id: 'gov-naming', title: 'Naming Conventions' },
      { id: 'gov-ownership', title: 'Ownership & Responsibilities' },
      { id: 'gov-checklist', title: 'Governance Checklist' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('10', 'Design Governance', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 10 &middot; DESIGN GOVERNANCE ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Design Governance <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Contribution workflows, review gates, semantic versioning, lifecycle policies, and stewardship models keeping Meld coherent as teams scale.</p>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('gov-overview', 1, 'Governance Overview', 'Enabling federated product teams to contribute safely without eroding system quality.')}
          <p class="lead">Meld operates on a <strong>federated core-stewardship model</strong>: a dedicated core team maintains foundational tokens, architecture, and QA standards while product designers and engineers propose and co-author domain patterns.</p>
        </article>

        <article class="mx-sec">
          ${secHead('gov-principles', 2, 'Design System Principles', 'Decision filters used during every architecture and component review.')}
          <div class="mx-grid-4">
            <div class="mx-box"><h3>Compose First</h3><p>Solve needs by composing existing foundations and components before creating a new primitive.</p></div>
            <div class="mx-box"><h3>Documented = Done</h3><p>No component or pattern ships without anatomy, state matrix, accessibility guidance, and changelog entry.</p></div>
            <div class="mx-box"><h3>Transparent Status</h3><p>Mark maturity explicitly: <strong>Established</strong>, <strong>[Ongoing]</strong>, <strong>[Beta]</strong>, or <strong>Deprecated</strong>.</p></div>
            <div class="mx-box"><h3>Evidence-Driven</h3><p>Validate visual parity, theme contrast, and 320px–1440px reflow in live headless browser checks.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-contributing', 3, 'Contribution Guidelines', 'Three contribution tiers calibrated to scope and review overhead (see repository CONTRIBUTING.md).')}
          <div class="tb">
            <table>
              <thead><tr><th>Tier</th><th>Scope</th><th>Required Review</th><th>Version Impact</th></tr></thead>
              <tbody>
                <tr><td><strong>Tier 1 &mdash; Patch</strong></td><td>Typo fix, contrast bug, token correction, doc clarification</td><td>1 Core Reviewer + automated QA</td><td><code>PATCH</code> (x.y.<strong>Z</strong>)</td></tr>
                <tr><td><strong>Tier 2 &mdash; Enhancement</strong></td><td>New component variant, pattern refinement, template addition</td><td>Design + Engineering Review</td><td><code>MINOR</code> (x.<strong>Y</strong>.0)</td></tr>
                <tr><td><strong>Tier 3 &mdash; New Module / Breaking</strong></td><td>New module, token schema rename, architectural shell change</td><td>Core Stewardship RFC + full E2E suite</td><td><code>MINOR</code> or <code>MAJOR</code></td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-workflow', 4, 'Contribution Workflow', 'End-to-end six-stage lifecycle from proposal to production release.')}
          <div class="mx-workflow">
            <div class="mx-wf-step"><span>1</span><strong>Proposal</strong><p>Open issue with user need &amp; reuse proof</p></div>
            <div class="mx-wf-arrow" aria-hidden="true">&rarr;</div>
            <div class="mx-wf-step"><span>2</span><strong>Design Spec</strong><p>Anatomy, tokens, states, Light &amp; Dark</p></div>
            <div class="mx-wf-arrow" aria-hidden="true">&rarr;</div>
            <div class="mx-wf-step"><span>3</span><strong>Peer Review</strong><p>Design + Content + A11y critique</p></div>
            <div class="mx-wf-arrow" aria-hidden="true">&rarr;</div>
            <div class="mx-wf-step"><span>4</span><strong>Build</strong><p>Semantic HTML/CSS/JS + tokens</p></div>
            <div class="mx-wf-arrow" aria-hidden="true">&rarr;</div>
            <div class="mx-wf-step"><span>5</span><strong>QA Audit</strong><p>Live E2E, contrast, 6 viewports</p></div>
            <div class="mx-wf-arrow" aria-hidden="true">&rarr;</div>
            <div class="mx-wf-step"><span>6</span><strong>Release</strong><p>Changelog, semver bump, push to main</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-requests', 5, 'Component Request Process', 'Intake rubric before promoting a local UI widget into Meld core.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h3>Multi-Product Reuse</h3><p>Demonstrated need across at least two product workflows or templates.</p></div>
            <div class="mx-box"><h3>No Duplication</h3><p>Confirmed gap after auditing existing 100+ components and 125 UX patterns.</p></div>
            <div class="mx-box"><h3>Complete Contract</h3><p>Defined keyboard model, error/empty/loading states, and responsive behaviour.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-review', 6, 'Design Review Process', 'Designers validate token binding, Light/Dark legibility, Space Grotesk hierarchy, and Content Design tone before engineering handoff.')}
          <p class="m">All Figma libraries (<code>#m-figma</code>, <code>#p-figma</code>) must bind fills, strokes, and text directly to semantic colour variables rather than raw hex overrides.</p>
        </article>

        <article class="mx-sec">
          ${secHead('gov-qa', 7, 'Quality Assurance', 'Automated verification gates protecting every release to main.')}
          <div class="tb">
            <table>
              <thead><tr><th>QA Gate</th><th>Coverage</th><th>Pass Criterion</th></tr></thead>
              <tbody>
                <tr><td>Component &amp; Specialised Audit</td><td>2,310+ assertions across variants, sizes, states &amp; themes</td><td>100% pass</td></tr>
                <tr><td>Pattern Explorer E2E</td><td>125 patterns &middot; 407 documented instances</td><td>0 contrast / overflow issues</td></tr>
                <tr><td>Responsive Viewport Sweep</td><td>1440px, 1280px, 1024px, 768px, 390px, 320px</td><td><code>scrollWidth &le; clientWidth</code></td></tr>
                <tr><td>Visual Screenshot Review</td><td>Light, Dark, Documentation, Mobile &amp; Drawer captures</td><td>Manual pixel sign-off</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-versioning', 8, 'Versioning Strategy', 'Strict Semantic Versioning (MAJOR.MINOR.PATCH) tracked in changelog.json.')}
          <div class="tb">
            <table>
              <thead><tr><th>Increment</th><th>When Used</th><th>Real Meld Example</th></tr></thead>
              <tbody>
                <tr><td><code>PATCH</code></td><td>Bug repairs, theme contrast fixes, responsive layout fixes</td><td><code>v1.5.x</code> Dark Mode &amp; Specialised Component Repairs</td></tr>
                <tr><td><code>MINOR</code></td><td>Backwards-compatible new modules, brand assets, homepage upgrades</td><td><code>v1.10.0</code> Fluent 2 Redesign &amp; Brand Suite; <code>v1.11.0</code> Modules 06–11</td></tr>
                <tr><td><code>MAJOR</code></td><td>Breaking token renames or incompatible architectural changes</td><td>Reserved for future breaking <code>v2.0.0</code> token migration</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-releases', 9, 'Release Management', 'Single-branch production release discipline for akshayashokanpothan/meld-design-system.')}
          <p class="m">Every release updates <code>changelog.json</code> (and in-memory fallback), bumps version labels across sidebar/header/footer, passes all regression suites, synchronizes <code>index.html</code> and <code>ideo-typography.html</code>, and commits with Conventional Commits (<code>feat:</code>, <code>fix:</code>, <code>docs:</code>).</p>
        </article>

        <article class="mx-sec">
          ${secHead('gov-deprecation', 10, 'Deprecation Policy', 'Predictable sunsetting with clear migration paths.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>Component Lifecycle</h3><p><code>Draft</code> &rarr; <code>[Beta]</code> &rarr; <code>[Ongoing]</code> &rarr; <code>Established</code> &rarr; <code>Deprecated</code> (retained for at least 1 minor release with migration guide) &rarr; <code>Removed</code> (major release only).</p></div>
            <div class="mx-box"><h3>Migration Example</h3><pre><code>/* Deprecated (v1.8.0) */
.landing-brand-logo { /* text "M" box */ }

/* Replacement (v1.10.0+) */
MeldLogo({ variant: 'primary', size: 28 })</code></pre></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-naming', 11, 'Naming Conventions', 'Predictable taxonomy across CSS tokens, DOM IDs, and asset files.')}
          <div class="tb">
            <table>
              <thead><tr><th>Layer</th><th>Convention</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td>CSS Custom Properties</td><td><code>--{domain}-{role}-{state}</code></td><td><code>--meld-primary</code>, <code>--f2-card-bg</code></td></tr>
                <tr><td>Module Section IDs</td><td><code>{prefix}-{slug}</code></td><td><code>m-browser</code>, <code>p-browser</code>, <code>acc-contrast</code>, <code>dv-playground</code></td></tr>
                <tr><td>Brand &amp; Icon Assets</td><td><code>meld-{type}-{variant}-{theme}.svg</code></td><td><code>meld-logo-primary-dark.svg</code></td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-ownership', 12, 'Ownership & Responsibilities', 'Clear stewardship across disciplines.')}
          <div class="tb">
            <table>
              <thead><tr><th>Role</th><th>Owns</th><th>Approves</th></tr></thead>
              <tbody>
                <tr><td>Design System Lead</td><td>Architecture, roadmap, brand integrity, release sign-off</td><td>Tier 2 &amp; Tier 3 changes</td></tr>
                <tr><td>Product Designers</td><td>Figma libraries, pattern proposals, usability specs</td><td>Visual &amp; interaction critiques</td></tr>
                <tr><td>Frontend Engineers</td><td>Semantic HTML/CSS/JS, tokens, E2E test suites</td><td>Code PRs &amp; performance gates</td></tr>
                <tr><td>Accessibility Champion</td><td>WCAG 2.2 audits, keyboard &amp; screen-reader verification</td><td>Accessibility sign-off</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('gov-checklist', 13, 'Governance Checklist', 'Interactive release-readiness gate before publishing changes to main.')}
          <div class="mx-checklist" data-checklist="gov">
            ${[
              'Verified no duplicate component, pattern, or token already solves the requirement.',
              'Light Mode and Dark Mode parity verified against semantic tokens.',
              'Module maturity label accurately marked (Established, [Ongoing], or [Beta]).',
              'Responsive layout verified across 320px, 390px, 768px, 1024px, 1280px, and 1440px.',
              'Changelog entry added to changelog.json with accurate semver bump.',
              'All existing regression suites pass with zero regressions.',
              'No secrets, local temp files, or broken asset paths in git diff.',
              'Commit message follows Conventional Commits specification.'
            ].map((item, i) => `<label class="mx-ck-item"><input type="checkbox" data-ck-idx="${i}"><span>${esc(item)}</span></label>`).join('')}
            <div class="mx-ck-summary" aria-live="polite">0 of 8 governance checks complete</div>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'dv-overview', label: '09. Data Visualization [Beta]' },
          { id: 'dev-overview', label: '11. Developer Resources [Beta]' },
          [{ id: 'changelog', label: 'Changelog History' }, { id: 'dev-standards', label: '11. Development Standards' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     MODULE 11 — DEVELOPER RESOURCES [Beta] (13 Sections — 100% Truthful Repo Docs)
     ======================================================================== */
  function buildModule11() {
    const sections = [
      { id: 'dev-overview', title: 'Developer Overview' },
      { id: 'dev-getting-started', title: 'Getting Started' },
      { id: 'dev-install', title: 'Installation & Setup' },
      { id: 'dev-frameworks', title: 'Framework Integration' },
      { id: 'dev-tokens', title: 'Design Tokens in Code' },
      { id: 'dev-api', title: 'Component API Documentation' },
      { id: 'dev-theming', title: 'Theming Implementation' },
      { id: 'dev-responsive', title: 'Responsive Implementation' },
      { id: 'dev-a11y', title: 'Accessibility Implementation' },
      { id: 'dev-examples', title: 'Code Examples' },
      { id: 'dev-handoff', title: 'Figma-to-Code Handoff' },
      { id: 'dev-troubleshooting', title: 'Troubleshooting' },
      { id: 'dev-standards', title: 'Development Standards' }
    ];

    return `
      <div class="in mx-module-wrap">
        ${renderBreadcrumb('11', 'Developer Resources', 'Beta')}
        <div class="mx-hero-band">
          <div class="mx-mod-kicker">MODULE 11 &middot; DEVELOPER RESOURCES ${statusTag('Beta')}</div>
          <h1 class="mx-mod-title">Developer Resources <span class="mx-title-status">[Beta]</span></h1>
          <p class="mx-mod-lead">Practical implementation guidance, real repository setup instructions, CSS token consumption, theming patterns, and transparent roadmap status for engineers adopting Meld by IDEO.</p>
        </div>
        ${renderToc(sections)}

        <article class="mx-sec">
          ${secHead('dev-overview', 1, 'Developer Overview', 'Transparent breakdown of what is available in the repository today versus planned packages.')}
          <div class="tb">
            <table>
              <thead><tr><th>Capability</th><th>Current Status</th><th>Details</th></tr></thead>
              <tbody>
                <tr><td>Standalone Web Documentation &amp; Playgrounds</td><td><strong>Available</strong></td><td>Zero-build HTML/CSS/JS platform in <code>index.html</code> (no Node build step required).</td></tr>
                <tr><td>CSS Custom Properties &amp; Dual Theme Engine</td><td><strong>Available</strong></td><td>Copyable primitive &amp; semantic token blocks in <a href="#handoff">#handoff</a> and <code>index.html</code>.</td></tr>
                <tr><td>Brand SVG Lockups, Favicons &amp; Web Manifest</td><td><strong>Available</strong></td><td>Ready-to-use files in <code>assets/brand/</code>, <code>assets/icons/</code>, <code>favicon.svg</code>, <code>favicon.ico</code>.</td></tr>
                <tr><td>npm Package (e.g. React / Web Components)</td><td><em>Planned (Not yet published)</em></td><td>Not currently published to npm; consume CSS tokens and HTML patterns directly today.</td></tr>
                <tr><td>Automated Figma-to-CSS Token CLI Pipeline</td><td><em>Planned</em></td><td>Currently synchronized manually via <a href="#handoff">Developer Handoff</a> exports.</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dev-getting-started', 2, 'Getting Started', 'Clone and inspect the real Meld repository locally in under 60 seconds.')}
          <pre><code># 1. Clone the official Meld by IDEO repository
git clone https://github.com/akshayashokanpothan/meld-design-system.git
cd meld-design-system

# 2. Serve locally with any static HTTP server (so changelog.json &amp; assets resolve cleanly)
python -m http.server 8080
# Then open http://localhost:8080/index.html</code></pre>
        </article>

        <article class="mx-sec">
          ${secHead('dev-install', 3, 'Installation & Setup', 'Actual repository file structure and Space Grotesk font linking.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>Repository Layout</h3><pre><code>meld-design-system/
├── index.html             # Primary platform entry
├── ideo-typography.html   # Synchronized mirror
├── changelog.json         # Machine-readable release log
├── favicon.ico / .svg     # Multi-res &amp; adaptive favicons
├── site.webmanifest       # PWA manifest
└── assets/
    ├── brand/             # 11 editable logo SVGs
    ├── icons/             # 16–512px PNG icons
    └── hero-3d-*.jpg      # Light/Dark hero artwork</code></pre></div>
            <div class="mx-box"><h3>Font &amp; Favicon Head Setup</h3><pre><code>&lt;link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&amp;display=swap" rel="stylesheet"&gt;
&lt;link rel="icon" type="image/svg+xml" href="favicon.svg"&gt;
&lt;link rel="icon" href="favicon.ico" sizes="any"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png"&gt;
&lt;link rel="manifest" href="site.webmanifest"&gt;</code></pre></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dev-frameworks', 4, 'Framework Integration', 'Integrating Meld CSS tokens into React, Next.js, Vue, or static sites.')}
          <p class="m">Because Meld exposes standard W3C CSS Custom Properties and semantic HTML classes, you can drop the exported token stylesheet from <a href="#handoff">Section 10 &mdash; Developer Handoff</a> into any global stylesheet (e.g. <code>globals.css</code> in Next.js/Vite or <code>main.css</code> in Vue). Official typed React/Vue wrapper packages are <em>planned</em> for a future release.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dev-tokens', 5, 'Design Tokens in Code', 'Core Meld brand, surface, and typography variables ready to paste.')}
          <pre><code>:root {
  --meld-primary: #BC4989;
  --meld-secondary: #39409A;
  --font-primary: "Space Grotesk", Arial, sans-serif;
  --bg: #FFFFFF;
  --tx: #18181B;
  --bd: rgba(15, 23, 42, 0.09);
}

[data-theme="dark"] {
  --bg: #141416;
  --tx: #F4F4F5;
  --bd: rgba(255, 255, 255, 0.09);
}</code></pre>
          <p class="m" style="margin-top:8px">For the complete auto-generated typography and colour token sheets, open <a href="#handoff">#handoff</a> and <a href="#c-hand">#c-hand</a>.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dev-api', 6, 'Component API Documentation', 'Live JavaScript helpers and component property specifications available in Meld today.')}
          <div class="mx-grid-2">
            <div class="mx-box"><h3>Reusable <code>window.MeldLogo(options)</code></h3><pre><code>// Render official Meld by IDEO brand lockup
const html = window.MeldLogo({
  variant: 'primary', // 'primary' | 'compact' | 'symbol'
  theme:   'auto',    // 'auto' | 'light' | 'dark' | 'mono'
  size:    28         // pixel dimension
});</code></pre></div>
            <div class="mx-box"><h3>Component Property Contracts</h3><p>Every one of the 100+ audited components in <a href="#m-browser">02. Component Explorer</a> documents its exact Variant, Size, State, Boolean/Slot properties, and copyable property spec.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dev-theming', 7, 'Theming Implementation', 'How Meld switches between Light and Dark themes without FOUC.')}
          <pre><code>function toggleMeldTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('meld-theme', next);
}</code></pre>
        </article>

        <article class="mx-sec">
          ${secHead('dev-responsive', 8, 'Responsive Implementation', 'Reference breakpoints and zero-overflow shell pattern.')}
          <pre><code>/* Meld Desktop Shell (320px sidebar + 1fr main) */
.wrap {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  max-width: 100vw;
  overflow-x: clip;
}
@media (max-width: 1023px) {
  .wrap { grid-template-columns: minmax(0, 1fr); }
}</code></pre>
        </article>

        <article class="mx-sec">
          ${secHead('dev-a11y', 9, 'Accessibility Implementation', 'Core engineering patterns required for WCAG 2.2 AA readiness.')}
          <p class="m">Always pair custom switches with <code>role="switch"</code> + <code>aria-checked</code>, modals with <code>role="dialog"</code> + <code>aria-modal="true"</code> + Escape dismissal, and interactive icons with <code>aria-label</code>. See <a href="#acc-overview">06. Accessibility [Beta]</a> for interactive verification tools.</p>
        </article>

        <article class="mx-sec">
          ${secHead('dev-examples', 10, 'Code Examples', 'Copyable semantic card and interactive button example using Meld tokens.')}
          <pre><code>&lt;article class="card" style="border:1px solid var(--bd);border-radius:12px;padding:20px"&gt;
  &lt;h3 style="margin:0 0 6px;font-family:var(--font-primary)"&gt;Workspace Ready&lt;/h3&gt;
  &lt;p style="margin:0 0 14px;color:var(--mu)"&gt;Tokens and dark theme variables are active.&lt;/p&gt;
  &lt;button type="button" class="b" style="background:var(--meld-primary);color:#fff;border:none"&gt;
    Publish changes
  &lt;/button&gt;
&lt;/article&gt;</code></pre>
        </article>

        <article class="mx-sec">
          ${secHead('dev-handoff', 11, 'Figma-to-Code Handoff', 'Bridging Meld Figma libraries directly to semantic CSS variables.')}
          <div class="mx-grid-3">
            <div class="mx-box"><h3>1. Inspect Semantic Name</h3><p>Read the Figma variable name (e.g. <code>color/surface/primary</code>) rather than raw RGB hex.</p></div>
            <div class="mx-box"><h3>2. Map to CSS Token</h3><p>Bind to the corresponding Meld CSS custom property so Light &amp; Dark themes work automatically.</p></div>
            <div class="mx-box"><h3>3. Verify All States</h3><p>Check Hover, Focus-visible, Disabled, Loading, Empty, and 320px mobile wrap before PR.</p></div>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dev-troubleshooting', 12, 'Troubleshooting', 'Common pitfalls and proven fixes when working with the Meld codebase.')}
          <div class="tb">
            <table>
              <thead><tr><th>Symptom</th><th>Root Cause</th><th>Fix</th></tr></thead>
              <tbody>
                <tr><td>SVG <code>&lt;use&gt;</code> gradients appear invisible</td><td>Sprite SVG wrapped in <code>display: none</code></td><td>Use <code>width="0" height="0" style="position:absolute;overflow:hidden"</code></td></tr>
                <tr><td><code>changelog.json</code> fails on <code>file://</code></td><td>Browser CORS restricts <code>fetch()</code> on local file URLs</td><td>Serve via HTTP (<code>python -m http.server</code>) or rely on built-in <code>CHANGELOG_FALLBACK</code></td></tr>
                <tr><td>Horizontal scroll on mobile 320px</td><td>Unconstrained flex child or wide table missing <code>min-width: 0</code></td><td>Apply <code>min-width: 0</code> on grid tracks and wrap tables in <code>.tb</code> scroll container</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mx-sec">
          ${secHead('dev-standards', 13, 'Development Standards', 'Interactive pre-commit developer verification checklist.')}
          <div class="mx-checklist" data-checklist="dev">
            ${[
              'Used semantic CSS tokens instead of hardcoded light/dark hex values.',
              'Verified zero console errors and zero broken asset/image requests.',
              'Tested keyboard Tab order, focus rings, and Escape dismissal on all new controls.',
              'Verified zero horizontal overflow from 320px to 1440px.',
              'Tested both Light Mode and Dark Mode visually.',
              'Kept index.html and ideo-typography.html synchronized and updated changelog.json.'
            ].map((item, i) => `<label class="mx-ck-item"><input type="checkbox" data-ck-idx="${i}"><span>${esc(item)}</span></label>`).join('')}
            <div class="mx-ck-summary" aria-live="polite">0 of 6 engineering checks complete</div>
          </div>
        </article>

        ${renderPrevNext(
          { id: 'gov-overview', label: '10. Design Governance [Beta]' },
          { id: 'changelog', label: 'Changelog & Version History' },
          [{ id: 'handoff', label: '01. CSS Token Export' }, { id: 'm-browser', label: '02. Component Explorer' }, { id: 'gov-workflow', label: '10. Contribution Workflow' }]
        )}
      </div>
    `;
  }

  /* ========================================================================
     INTERACTIVE WIDGET WIRING (Contrast Checker, Keyboard, Motion, Icons, Charts, Checklists)
     ======================================================================== */
  function wireInteractiveTools() {
    // 1. WCAG 2.2 Colour Contrast Checker (Module 06)
    const fgPick = document.getElementById('acc-fg-pick');
    const fgHex  = document.getElementById('acc-fg-hex');
    const bgPick = document.getElementById('acc-bg-pick');
    const bgHex  = document.getElementById('acc-bg-hex');
    const prev   = document.getElementById('acc-contrast-preview');
    const met    = document.getElementById('acc-contrast-metrics');
    const swap   = document.getElementById('acc-swap-btn');

    function parseHex(h) {
      h = (h || '').trim().replace('#', '');
      if (h.length === 3) h = h.split('').map(c => c + c).join('');
      if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    }
    function relLum(rgb) {
      const [r, g, b] = rgb.map(v => {
        const s = v / 255;
        return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    function updateContrast() {
      if (!fgHex || !bgHex || !prev || !met) return;
      const fgRgb = parseHex(fgHex.value);
      const bgRgb = parseHex(bgHex.value);
      if (!fgRgb || !bgRgb) return;
      const L1 = relLum(fgRgb), L2 = relLum(bgRgb);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      prev.style.color = fgHex.value;
      prev.style.backgroundColor = bgHex.value;
      prev.style.borderColor = fgHex.value;
      const pill = prev.querySelector('.mx-cp-pill');
      if (pill) pill.style.borderColor = fgHex.value;
      const badge = (pass) => `<span class="mx-pass-pill ${pass ? 'pass' : 'fail'}">${pass ? 'PASS' : 'FAIL'}</span>`;
      met.innerHTML = `
        <div class="mx-ratio-big">${ratio.toFixed(2)}:1</div>
        <div class="mx-ratio-grid">
          <div><span>AA Normal (&ge;4.5:1)</span>${badge(ratio >= 4.5)}</div>
          <div><span>AA Large / UI (&ge;3.0:1)</span>${badge(ratio >= 3.0)}</div>
          <div><span>AAA Normal (&ge;7.0:1)</span>${badge(ratio >= 7.0)}</div>
        </div>
      `;
    }
    if (fgPick && fgHex && bgPick && bgHex) {
      fgPick.oninput = () => { fgHex.value = fgPick.value.toUpperCase(); updateContrast(); };
      bgPick.oninput = () => { bgHex.value = bgPick.value.toUpperCase(); updateContrast(); };
      fgHex.oninput = () => { if (parseHex(fgHex.value)) { fgPick.value = fgHex.value.startsWith('#') ? fgHex.value : '#' + fgHex.value; updateContrast(); } };
      bgHex.oninput = () => { if (parseHex(bgHex.value)) { bgPick.value = bgHex.value.startsWith('#') ? bgHex.value : '#' + bgHex.value; updateContrast(); } };
      if (swap) swap.onclick = () => {
        const tmp = fgHex.value; fgHex.value = bgHex.value; bgHex.value = tmp;
        fgPick.value = fgHex.value; bgPick.value = bgHex.value; updateContrast();
      };
      document.querySelectorAll('[data-acc-fg]').forEach(btn => {
        btn.onclick = () => {
          fgHex.value = btn.dataset.accFg; bgHex.value = btn.dataset.accBg;
          fgPick.value = fgHex.value; bgPick.value = bgHex.value; updateContrast();
        };
      });
      updateContrast();
    }

    // 2. Keyboard Roving Toolbar Demo (Module 06)
    const kbdTb = document.getElementById('acc-kbd-toolbar');
    const kbdSt = document.getElementById('acc-kbd-status');
    if (kbdTb) {
      const btns = Array.from(kbdTb.querySelectorAll('button'));
      btns.forEach((btn, idx) => {
        btn.onclick = () => {
          const next = btn.getAttribute('aria-pressed') !== 'true';
          btn.setAttribute('aria-pressed', String(next));
          if (kbdSt) kbdSt.textContent = `${btn.textContent} toggled ${next ? 'ON' : 'OFF'}.`;
        };
        btn.onkeydown = (e) => {
          let target = -1;
          if (e.key === 'ArrowRight') target = (idx + 1) % btns.length;
          else if (e.key === 'ArrowLeft') target = (idx - 1 + btns.length) % btns.length;
          else if (e.key === 'Home') target = 0;
          else if (e.key === 'End') target = btns.length - 1;
          if (target >= 0) {
            e.preventDefault();
            btns.forEach((b, j) => b.tabIndex = j === target ? 0 : -1);
            btns[target].focus();
            if (kbdSt) kbdSt.textContent = `Focused: ${btns[target].textContent} (press Space or Enter to toggle).`;
          }
        };
      });
    }

    // 3. Motion Playground & Micro-interaction Demo (Module 07)
    const copyDemo = document.getElementById('mot-copy-demo');
    if (copyDemo) {
      copyDemo.onclick = () => {
        const orig = copyDemo.textContent;
        copyDemo.textContent = 'Copied!';
        setTimeout(() => { copyDemo.textContent = orig; }, 1200);
      };
    }
    const motDur = document.getElementById('mot-pg-dur');
    const motEase = document.getElementById('mot-pg-ease');
    const motType = document.getElementById('mot-pg-type');
    const motRm = document.getElementById('mot-pg-rm');
    const motPlay = document.getElementById('mot-pg-play');
    const motCopy = document.getElementById('mot-pg-copy');
    const motActor = document.getElementById('mot-pg-actor');
    const motCode = document.getElementById('mot-pg-code');
    let motToggled = false;

    function updateMotCode() {
      if (!motDur || !motEase || !motCode) return;
      const d = motRm && motRm.checked ? '0ms' : motDur.value + 'ms';
      motCode.textContent = `transition: transform ${d} ${motEase.value}, opacity ${d} ${motEase.value};`;
    }
    function playMotion() {
      if (!motActor || !motDur || !motEase || !motType) return;
      updateMotCode();
      const d = motRm && motRm.checked ? 0 : Number(motDur.value);
      const ease = motEase.value;
      const type = motType.value;
      motToggled = !motToggled;
      motActor.style.transition = `transform ${d}ms ${ease}, opacity ${d}ms ${ease}`;
      if (type === 'slide') {
        motActor.style.transform = motToggled ? 'translateX(120px)' : 'translateX(0px)';
        motActor.style.opacity = '1';
      } else if (type === 'lift') {
        motActor.style.transform = motToggled ? 'translateY(-14px)' : 'translateY(0px)';
        motActor.style.opacity = motToggled ? '0.65' : '1';
      } else {
        motActor.style.transform = motToggled ? 'scale(1.12)' : 'scale(1)';
        motActor.style.opacity = '1';
      }
    }
    if (motPlay) motPlay.onclick = playMotion;
    [motDur, motEase, motType, motRm].forEach(el => { if (el) el.onchange = updateMotCode; });
    if (motCopy) motCopy.onclick = () => {
      if (navigator.clipboard && motCode) navigator.clipboard.writeText(motCode.textContent).catch(() => {});
      motCopy.textContent = 'Copied CSS!';
      setTimeout(() => { motCopy.textContent = 'Copy CSS Transition'; }, 1200);
    };

    // 4. Searchable Icon Library (Module 08)
    const icoGrid = document.getElementById('ico-grid');
    const icoSearch = document.getElementById('ico-search');
    const icoCat = document.getElementById('ico-cat');
    const icoSize = document.getElementById('ico-size');
    const icoStroke = document.getElementById('ico-stroke-sel');
    const icoMsg = document.getElementById('ico-copy-msg');

    function renderIcons() {
      if (!icoGrid) return;
      const q = (icoSearch ? icoSearch.value : '').trim().toLowerCase();
      const cat = icoCat ? icoCat.value : 'all';
      const sz = icoSize ? icoSize.value : '24';
      const sw = icoStroke ? icoStroke.value : '2';
      const list = MELD_ICONS.filter(ic =>
        (cat === 'all' || ic.cat === cat) &&
        (!q || ic.name.includes(q) || ic.cat.toLowerCase().includes(q))
      );
      if (!list.length) {
        icoGrid.innerHTML = `<div class="m" style="grid-column:1/-1;padding:24px;text-align:center">No icons matched "${esc(q)}".</div>`;
        return;
      }
      icoGrid.innerHTML = list.map(ic => `
        <button type="button" class="mx-ico-tile" data-ico-name="${ic.name}" title="Copy ${ic.name} SVG">
          <svg width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${ic.svg}</svg>
          <span>${ic.name}</span>
        </button>
      `).join('');
      icoGrid.querySelectorAll('.mx-ico-tile').forEach(btn => {
        btn.onclick = () => {
          const item = MELD_ICONS.find(x => x.name === btn.dataset.icoName);
          if (!item) return;
          const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${item.svg}</svg>`;
          if (navigator.clipboard) navigator.clipboard.writeText(svgCode).catch(() => {});
          if (icoMsg) icoMsg.textContent = `Copied <svg> for "${item.name}" (${sz}px, ${sw}px stroke).`;
        };
      });
    }
    [icoSearch, icoCat, icoSize, icoStroke].forEach(el => {
      if (el) el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', renderIcons);
    });
    renderIcons();

    // 5. Interactive SVG Chart Visualization Playground (Module 09)
    const dvStage = document.getElementById('dv-pg-stage');
    const dvType  = document.getElementById('dv-pg-type');
    const dvPal   = document.getElementById('dv-pg-pal');
    const dvState = document.getElementById('dv-pg-state');
    const dvLeg   = document.getElementById('dv-pg-leg');
    const dvLbl   = document.getElementById('dv-pg-lbl');
    const dvVals  = Array.from(document.querySelectorAll('.dv-val'));

    function renderDvChart() {
      if (!dvStage) return;
      const state = dvState ? dvState.value : 'data';
      if (state === 'loading') {
        dvStage.innerHTML = `<div class="mx-dv-empty"><div class="mx-skel-line" style="width:45%;height:16px"></div><div class="mx-skel-line" style="width:100%;height:140px;margin-top:12px"></div><span class="m">Loading analytical dataset...</span></div>`;
        return;
      }
      if (state === 'empty') {
        dvStage.innerHTML = `<div class="mx-dv-empty"><strong>No telemetry data available</strong><p class="m" style="margin:6px 0 0">Adjust your date range or connect a data source to populate this chart.</p></div>`;
        return;
      }
      const data = dvVals.map(inp => ({ label: inp.dataset.k, val: Math.max(0, Number(inp.value) || 0) }));
      const maxV = Math.max(10, ...data.map(d => d.val));
      const colors = (dvPal && dvPal.value === 'cb')
        ? ['#0072B2', '#D55E00', '#009E73', '#CC79A7', '#E69F00']
        : ['#BC4989', '#39409A', '#0284C7', '#0D9488', '#D97706'];
      const showLbl = dvLbl ? dvLbl.checked : true;
      const legPos = dvLeg ? dvLeg.value : 'top';
      const type = dvType ? dvType.value : 'bar';

      const legendHtml = legPos === 'none' ? '' : `
        <div class="mx-dv-legend">
          ${data.map((d, i) => `<span class="mx-dv-leg-item"><i style="background:${colors[i % colors.length]}"></i>${esc(d.label)} (${d.val})</span>`).join('')}
        </div>
      `;

      let svg = '';
      if (type === 'bar') {
        const w = 520, h = 200, padL = 42, padB = 34, chartH = 140;
        const slot = (w - padL - 20) / data.length;
        const barW = Math.min(54, slot * 0.6);
        svg = `<svg viewBox="0 0 ${w} ${h}" class="mx-svg-chart" role="img" aria-label="Interactive Bar Chart">
          <line x1="${padL}" y1="${chartH + 20}" x2="${w - 16}" y2="${chartH + 20}" stroke="var(--bd)"/>
          <line x1="${padL}" y1="${chartH * 0.5 + 20}" x2="${w - 16}" y2="${chartH * 0.5 + 20}" stroke="var(--bd)" stroke-dasharray="3 3"/>
          ${data.map((d, i) => {
            const bh = (d.val / maxV) * chartH;
            const x = padL + i * slot + (slot - barW) / 2;
            const y = chartH + 20 - bh;
            return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${bh.toFixed(1)}" rx="4" fill="${colors[i % colors.length]}"/>
              ${showLbl ? `<text x="${(x + barW / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" class="mx-svg-lbl">${d.val}</text>` : ''}
              <text x="${(x + barW / 2).toFixed(1)}" y="${chartH + 38}" text-anchor="middle" class="mx-svg-axis">${esc(d.label)}</text>`;
          }).join('')}
        </svg>`;
      } else if (type === 'line' || type === 'area') {
        const w = 520, h = 200, padL = 42, chartH = 140;
        const step = (w - padL - 40) / Math.max(1, data.length - 1);
        const pts = data.map((d, i) => {
          const x = padL + 16 + i * step;
          const y = chartH + 20 - (d.val / maxV) * chartH;
          return { x, y, d, i };
        });
        const poly = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
        const areaPoly = `${pts[0].x.toFixed(1)},${chartH + 20} ${poly} ${pts[pts.length - 1].x.toFixed(1)},${chartH + 20}`;
        svg = `<svg viewBox="0 0 ${w} ${h}" class="mx-svg-chart" role="img" aria-label="Interactive ${type} chart">
          <line x1="${padL}" y1="${chartH + 20}" x2="${w - 16}" y2="${chartH + 20}" stroke="var(--bd)"/>
          <line x1="${padL}" y1="${chartH * 0.5 + 20}" x2="${w - 16}" y2="${chartH * 0.5 + 20}" stroke="var(--bd)" stroke-dasharray="3 3"/>
          ${type === 'area' ? `<polygon points="${areaPoly}" fill="${colors[0]}" fill-opacity="0.18"/>` : ''}
          <polyline fill="none" stroke="${colors[0]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${poly}"/>
          ${pts.map(p => `
            <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" fill="${colors[p.i % colors.length]}" stroke="var(--bg)" stroke-width="2"/>
            ${showLbl ? `<text x="${p.x.toFixed(1)}" y="${(p.y - 10).toFixed(1)}" text-anchor="middle" class="mx-svg-lbl">${p.d.val}</text>` : ''}
            <text x="${p.x.toFixed(1)}" y="${chartH + 38}" text-anchor="middle" class="mx-svg-axis">${esc(p.d.label)}</text>
          `).join('')}
        </svg>`;
      } else {
        const total = Math.max(1, data.reduce((a, b) => a + b.val, 0));
        const r = 64, circ = 2 * Math.PI * r;
        let offset = 0;
        const segs = data.map((d, i) => {
          const len = (d.val / total) * circ;
          const seg = `<circle cx="110" cy="95" r="${r}" fill="none" stroke="${colors[i % colors.length]}" stroke-width="22" stroke-dasharray="${len.toFixed(1)} ${circ.toFixed(1)}" stroke-dashoffset="${(-offset).toFixed(1)}" transform="rotate(-90 110 95)"/>`;
          offset += len;
          return seg;
        }).join('');
        svg = `<svg viewBox="0 0 220 190" style="max-width:240px;margin:0 auto;display:block" role="img" aria-label="Interactive Donut Chart">
          ${segs}
          ${showLbl ? `<text x="110" y="92" text-anchor="middle" class="mx-svg-lbl" style="font-size:20px;font-weight:700">${total}</text><text x="110" y="110" text-anchor="middle" class="mx-svg-axis">Total</text>` : ''}
        </svg>`;
      }

      dvStage.innerHTML = (legPos === 'top' ? legendHtml : '') + svg + (legPos === 'bottom' ? legendHtml : '');
    }
    [dvType, dvPal, dvState, dvLeg, dvLbl].concat(dvVals).forEach(el => {
      if (el) el.addEventListener(el.tagName === 'INPUT' && el.type === 'number' ? 'input' : 'change', renderDvChart);
    });
    renderDvChart();

    // 6. Interactive Checklists (Modules 06, 10, 11)
    document.querySelectorAll('.mx-checklist').forEach(box => {
      const inputs = Array.from(box.querySelectorAll('input[type="checkbox"]'));
      const summary = box.querySelector('.mx-ck-summary');
      const update = () => {
        const done = inputs.filter(i => i.checked).length;
        if (summary) summary.textContent = `${done} of ${inputs.length} checks verified`;
      };
      inputs.forEach(i => i.addEventListener('change', update));
    });
  }

  /* ========================================================================
     MOUNT MODULES 06–11 INTO SEMANTIC SECTIONS
     ======================================================================== */
  function mountAll() {
    const mounts = [
      ['acc-module', buildModule06],
      ['mot-module', buildModule07],
      ['ico-module', buildModule08],
      ['dv-module',  buildModule09],
      ['gov-module', buildModule10],
      ['dev-module', buildModule11]
    ];
    mounts.forEach(([id, fn]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = fn();
    });
    wireInteractiveTools();

    // Ensure direct URLs pointing to newly mounted expansion sections scroll cleanly after all earlier explorers finish rendering
    function alignInitialHash() {
      const initHash = (window.location.hash || '').replace('#', '').trim();
      if (initHash && initHash !== 'home') {
        const target = document.getElementById(initHash);
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          if (typeof window.updateActiveLink === 'function') window.updateActiveLink(initHash);
        }
      }
    }
    setTimeout(alignInitialHash, 120);
    window.addEventListener('load', () => setTimeout(alignInitialHash, 180));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAll);
  } else {
    mountAll();
  }
})();
