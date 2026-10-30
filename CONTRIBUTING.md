# Contributing to Meld Design System

Thank you for contributing to **Meld by IDEO**! Meld is a living, multi-platform design system spanning Figma libraries, tokens, accessible web components, and UX patterns.

To preserve stability, maintainability, and complete historical traceability across human and autonomous agent contributors, all changes to this repository must follow the guidelines detailed below.

---

## 1. Changelog & Commit Guidelines (Mandatory)

The Meld Design System maintains a single source of truth for all changes: [`changelog.json`](./changelog.json).

**Every meaningful commit to this repository MUST include a corresponding entry in `changelog.json`.**

### The Pre-Commit Workflow

Before creating a commit:
1. **Audit the change:** Identify which components, patterns, tokens, or documentation files have changed.
2. **Select the category:** Choose the single most appropriate category from the controlled taxonomy below.
3. **Draft the entry:** Write an informative title, a high-level summary, specific granular bullet points in `changes`, and list all `affectedAreas`.
4. **Update `changelog.json`:** Add the new entry at the **beginning** of the `entries` array (newest first).
5. **Stage together:** Stage `changelog.json` alongside your code/asset modifications so that the changelog update and implementation live in the exact same Git commit.

### Controlled Category Taxonomy

Use only these categories in `changelog.json` and in commit prefixes:

| Category | Identifier | Description |
|---|---|---|
| **Feature** | `feature` | New components, design patterns, tools, or major systems. |
| **Improvement** | `improvement` | Enhancements to existing components, UX refinements, token optimizations, or performance gains. |
| **Fix** | `fix` | Bug fixes, visual repairs, state corrections, or accessibility remedies. |
| **Breaking Change** | `breaking` | Any modification that deprecates an API, alters token contract names, or impacts backward compatibility. Set `"breaking": true`. |
| **Deprecated** | `deprecated` | Components, tokens, or patterns designated for upcoming removal. |
| **Documentation** | `docs` | Guidance additions, Figma documentation, handoff specifications, or README updates. |

### Schema Reference (`changelog.json`)

Each entry in `changelog.json` must adhere to this structure:

```json
{
  "id": "unique-kebab-cased-identifier",
  "version": "1.1.0",
  "date": "YYYY-MM-DD",
  "category": "feature | improvement | fix | breaking | deprecated | docs",
  "title": "Concise headline (under 70 characters)",
  "summary": "1-2 sentence high-level summary of the update.",
  "description": "Optional in-depth context explaining the problem solved and design rationale.",
  "changes": [
    "Specific bullet point 1 describing concrete change.",
    "Specific bullet point 2 describing concrete change."
  ],
  "affectedAreas": [
    "Components",
    "Patterns",
    "Typography",
    "Colors",
    "Documentation"
  ],
  "commitMessage": "feat: matching commit message",
  "commitRef": null,
  "breaking": false
}
```

> [!NOTE]
> Since a commit's SHA is only determined after the commit is created, `"commitRef"` should be set to `null` initially or updated subsequently. Use `"commitMessage"` as the primary human and machine reference.

---

## 2. Commit Message Convention

Meld adheres to conventional commit formatting:

```
<type>(<scope>): <short description>
```

- Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `style`, `test`, `chore`.
- Scope examples: `(tokens)`, `(typography)`, `(components/tooltip)`, `(patterns/ai)`, `(changelog)`.
- Example: `feat(changelog): introduce changelog page and update tracking`

---

## 3. What NOT to Document in the Changelog

To keep the timeline signal high, do not add entries for:
- Temporary debugging experiments or scratch files.
- Whitespace or trivial formatting fixes.
- Uncommitted or incomplete work in local branches.
- Internal tooling scripts with zero consumer impact.

---

## 4. Accessibility and Quality Standards

All components and patterns in Meld must comply with:
- **WCAG 2.2 AA** contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text and UI boundaries).
- **Keyboard navigation:** All interactive elements must receive visible `:focus-visible` indicators and support Enter / Space / Arrow activation.
- **Figma Parity:** Web representations must accurately reflect the auto-layout, variable modes, and token bindings defined in the Meld Figma Library.
