# Brand Guidelines v1.1 — Soverr

> Last updated: 2026-09-30  
> Status: Active Specification  
> Domain: Personal Digital Sovereignty, Privacy, automations

---

## Quick Reference

| Element         | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Primary Color   | #09090B                                                     |
| Secondary Color | #27272A                                                     |
| Accent Color    | #00F0FF                                                     |
| Heading Font    | Geist, sans-serif                                           |
| Body Font       | Geist, sans-serif                                           |
| Monospace Font  | Geist Mono, monospace                                       |
| Core Voice      | Deep Expertise, Pragmatic, Empowering, Ego-Free & Easygoing |
| Aesthetic       | Minimalist Modern Monochrome (High Contrast + Stark Accent) |

---

## 1. Brand Foundation & Purpose

### 1.1 Core Mission

Soverr helps you better understand and make wiser choices about technology. We empower you to reclaim, protect, and command your digital sovereignty through actionable, contextual knowledge and practical digital tools. By optimizing and automating your day-to-day life, we give you back your time and peace of mind.

### 1.2 Vision

A digital future where technology truly serves the individual and seamlessly blends into daily life—making uncompromised digital sovereignty, absolute privacy, and peace of mind the universal standard.

### 1.3 Core Pillars

1. **Step-by-Step Sovereignty:** Digital sovereignty is a journey, not an all-or-nothing ultimatum. Whether it's a small shift like switching to an open-source password manager or a major leap like self-hosting your personal cloud, every action that reclaims control is a victory.
2. **Technology Serving the Individual:** Tools should adapt to your life, simplify your routines, and respect your attention. We focus on optimizations and automations that seamlessly blend into your day and give you back your time.
3. **Contextual & Actionable Knowledge:** We reject gatekeeping and abstract theory. We provide clear, practical guidance that empowers anyone to understand their options, make wiser choices, and take immediate action.
4. **Verification Over Blind Trust:** We favor open, transparent, and auditable software over opaque corporate promises. True peace of mind comes from systems designed to respect privacy by default.

### 1.4 Value Proposition

> For individuals who want technology to work for them rather than against them, **Soverr** provides contextual knowledge, practical privacy practices, and daily automations that help you make wiser choices, reclaim your digital sovereignty, and achieve lasting peace of mind.

---

## 2. Color Palette

The Soverr palette is built on **minimalist modern monochrome**: deep blacks, stark whites, and finely calibrated structural grays, punctuated by a single high-visibility **Electric Cyan** stark accent.

### 2.1 Primary Brand Colors

| Name          | Hex     | RGB             | Usage                                                         |
| ------------- | ------- | --------------- | ------------------------------------------------------------- |
| Primary Black | #09090B | rgb(9, 9, 11)   | Core brand anchor, primary dark canvas, high-contrast text    |
| Primary Dark  | #000000 | rgb(0, 0, 0)    | Deep pitch terminal backgrounds, absolute contrast framing    |
| Primary Light | #18181B | rgb(24, 24, 27) | Elevated card backgrounds (dark mode), sub-surface containers |

### 2.2 Secondary Monochrome Palette

| Name               | Hex     | RGB                | Usage                                                      |
| ------------------ | ------- | ------------------ | ---------------------------------------------------------- |
| Secondary Charcoal | #27272A | rgb(39, 39, 42)    | UI element borders, inputs, divider lines, secondary pills |
| Secondary Slate    | #3F3F46 | rgb(63, 63, 70)    | Subtle borders, active toggle backgrounds                  |
| Secondary Muted    | #71717A | rgb(113, 113, 122) | Secondary labels, timestamps, metadata, inactive icons     |
| Secondary Light    | #E4E4E7 | rgb(228, 228, 231) | Subtle dividers in light surfaces, hairline borders        |

### 2.3 The Stark Accent

The single accent color must be used with rigorous discipline—reserved for primary interactive calls to action, verification indicators, and critical focus states.

| Name              | Hex                     | RGB                     | Usage                                                            |
| ----------------- | ----------------------- | ----------------------- | ---------------------------------------------------------------- |
| Accent Stark Cyan | #00F0FF                 | rgb(0, 240, 255)        | Focus rings, verified indicators, active status indicators, CTAs |
| Accent Cyan Muted | #0891B2                 | rgb(8, 145, 178)        | Hover states, secondary accent borders                           |
| Accent Cyan Glow  | rgba(0, 240, 255, 0.15) | rgba(0, 240, 255, 0.15) | Subtle backdrops, focus ambient glows                            |

### 2.4 Neutral & Surface Hierarchy

| Name           | Hex               | RGB                                  | Light Mode Role           | Dark Mode Role            |
| -------------- | ----------------- | ------------------------------------ | ------------------------- | ------------------------- |
| Canvas Base    | #09090B / #FFFFFF | rgb(9, 9, 11) / rgb(255, 255, 255)   | Page Background (#FFFFFF) | Page Background (#09090B) |
| Surface 1      | #18181B / #F4F4F5 | rgb(24, 24, 27) / rgb(244, 244, 245) | Card Fill (#F4F4F5)       | Card Fill (#18181B)       |
| Surface 2      | #27272A / #E4E4E7 | rgb(39, 39, 42) / rgb(228, 228, 231) | Nested Section (#E4E4E7)  | Nested Section (#27272A)  |
| Text Primary   | #FAFAFA / #09090B | rgb(250, 250, 250) / rgb(9, 9, 11)   | Body & Headings (#09090B) | Body & Headings (#FAFAFA) |
| Text Secondary | #A1A1AA / #52525B | rgb(161, 161, 170) / rgb(82, 82, 91) | Muted Text (#52525B)      | Muted Text (#A1A1AA)      |

### 2.5 Semantic System Colors

| State   | Hex     | Usage                                                     |
| ------- | ------- | --------------------------------------------------------- |
| Success | #10B981 | Confirmations, verified status, successful operations     |
| Warning | #F59E0B | Cautions, security alerts, pending actions                |
| Error   | #EF4444 | Failures, destructive actions, critical security warnings |
| Info    | #00F0FF | System status, active connections, informational messages |

### 2.6 Accessibility & Contrast Standards

- **Dark Mode Text:** `#FAFAFA` on `#09090B` yields a contrast ratio of **18.7:1** (surpasses WCAG AAA).
- **Light Mode Text:** `#09090B` on `#FFFFFF` yields **19.8:1** (surpasses WCAG AAA).
- **Stark Accent:** `#00F0FF` against dark surfaces (`#09090B` / `#18181B`) provides high optical luminescence; when used for text, pair with black backing or bold weight (minimum 4.5:1 on dark canvas).

---

## 3. Typography

The typographic system emphasizes clarity, precision, and effortless readability. It relies on Geist for headings and body text, and Geist Mono for code snippets, commands, and technical parameters.

### 3.1 Font Families

```css
--font-heading: "Geist", sans-serif;
--font-body: "Geist", sans-serif;
--font-mono: "Geist Mono", monospace;
```

### 3.2 Type Scale (Desktop & Mobile)

| Level          | Size (Desktop)  | Size (Mobile)   | Weight  | Line Height | Tracking | Usage                           |
| -------------- | --------------- | --------------- | ------- | ----------- | -------- | ------------------------------- |
| Display        | 56px (3.5rem)   | 36px (2.25rem)  | 700     | 1.1         | -0.03em  | Hero headlines                  |
| H1             | 40px (2.5rem)   | 28px (1.75rem)  | 600     | 1.15        | -0.025em | Major page titles               |
| H2             | 28px (1.75rem)  | 22px (1.375rem) | 600     | 1.25        | -0.02em  | Section headers                 |
| H3             | 20px (1.25rem)  | 18px (1.125rem) | 600     | 1.35        | -0.015em | Tool cards, sub-sections        |
| H4             | 16px (1.0rem)   | 15px (0.938rem) | 500     | 1.4         | -0.01em  | Group headers, table headers    |
| Body Large     | 18px (1.125rem) | 16px (1.0rem)   | 400     | 1.6         | normal   | Lead paragraphs                 |
| Body           | 15px (0.938rem) | 15px (0.938rem) | 400     | 1.55        | normal   | Main reading copy               |
| Caption / Meta | 13px (0.813rem) | 12px (0.75rem)  | 400     | 1.45        | +0.01em  | Timestamps, tags, footnotes     |
| Code / Hash    | 13px (0.813rem) | 12px (0.75rem)  | 400/500 | 1.4         | 0        | Terminal snippets, hashes, keys |

---

## 4. Logo & Visual Identity

### 4.1 Concept

The Soverr logo is purely a symbol—a standalone geometric shape with no embedded wordmark or text. It represents an unbreachable perimeter and individual agency: geometric, razor-sharp, and devoid of whimsical gradients or decorative clutter.

### 4.2 Variants

- **Primary Mark:** The standalone geometric shape/symbol.
- **Monochrome Pure:** Solid 100% white on `#09090B` or solid 100% black on `#FFFFFF`.
- **Accent Highlight Variant:** Monochrome symbol with an optional single Stark Cyan focal node.

### 4.3 Clear Space & Sizing

- **Clear Space:** Maintain minimum padding equal to 100% of the symbol's height on all four sides.
- **Minimum Digital Size:**
  - Standard UI / Navigation: 24px × 24px
  - Favicon / Small Badge: 16px × 16px
- **Terminal ASCII Glyph:** A minimal geometric character representation for CLI tools.

### 4.4 Logo & Visual Don'ts

- **DO NOT** add text, wordmarks, or subtitles inside or attached to the logo mark.
- **DO NOT** use drop shadows, blurred glows, or multi-color gradients.
- **DO NOT** round sharp geometric angles beyond the specified 2px–4px radius.
- **DO NOT** surround the symbol with badges or decorative borders.
- **DO NOT** use clichéd stock imagery (e.g., green matrix rain, generic cyber padlocks, clip-art shields).

---

## 5. Voice & Tone Framework

### 5.1 Voice Principles

| Trait                               | What It Means                                                                                                                                                 | How It Translates into Copy                                                                                                                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Deep Expertise, Simple Language** | We possess deep understanding of technical, security, and automation concepts, but communicate them simply, clearly, and accessibly for everyday individuals. | We translate complex topics and principles into plain, approachable guidance without relying on confusing jargon or condescending tone.                                                                      |
| **Ego-Free & Easygoing**            | We do serious things, but we don't take ourselves seriously. The mission is important, but we speak to you eye-to-eye without ego or arrogance.               | We use a conversational, relaxed, and occasionally lighthearted tone. We actively avoid stiff corporate formality, paternalistic lecturing, and elitist tech posturing.                                      |
| **Precise**                         | Unsparing factual clarity without ambiguity, fluff, or exaggeration.                                                                                          | We state exact instructions, verify claims with reproducible steps, and eliminate filler words.                                                                                                              |
| **Empowering**                      | Elevating the user's agency, skills, and confidence to make wiser choices.                                                                                    | We celebrate progress over perfection. We encourage every step toward digital sovereignty—big or small—and provide the tools to make users independent.                                                      |
| **Pragmatic**                       | We provide simple, actionable solutions to day-to-day problems, keeping peace of mind as the ultimate payoff.                                                 | We prioritize tangible real-world outcomes over abstract theories. Every guide, automation, and tool delivers immediate, friction-free steps that anyone can easily apply to their everyday digital routine. |

### 5.2 Voice Chart: We Are vs. We Are Not

| We Are                                                   | We Are Not                                             |
| -------------------------------------------------------- | ------------------------------------------------------ |
| **Clear & Plainspoken (with deep underlying expertise)** | Incomprehensible, academic, or jargon-dense            |
| **Actionable & Pragmatic (Solving Day-to-Day Problems)** | Theoretical, impractical, or all-or-nothing dogmatists |
| **Easygoing & Conversational**                           | Stiff, corporate, or taking ourselves too seriously    |
| **Empowering & Accessible**                              | Alarmist, fear-mongering, or elitist                   |
| **Modern & Minimal**                                     | Cypherpunk-cliché (no 90s hacker clichés)              |
| **Open & Trustless**                                     | Proprietary or paternalistic ("trust our experts")     |

### 5.3 Tone by Context

| Context                        | Tone Stance                        | Example                                                                                                       |
| ------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Tool / Dashboard Interface** | Functional, sparse, immediate      | "Keys generated locally in your browser memory. Nothing leaves your device."                                  |
| **Educational Guides & Tips**  | Plain, structured, step-by-step    | "Tip: Switch to an open-source password manager today and stop worrying about reusing the same old password." |
| **Security Advisories**        | Factual, calm, remediation-focused | "Notice: An issue was identified in v1.2. Update to v1.3 using the one-click script below."                   |
| **Community / Product News**   | Direct, clear, hype-free           | "New Workflow: 3 simple automations to de-clutter your notifications and reclaim your focus."                 |

### 5.4 Vocabulary & Terminology Standards

#### Approved Terms

- **Digital sovereignty** (personal ownership of compute, identity, and data)
- **Step-by-step sovereignty** (celebrating progress and small wins)
- **Self-hosted** / **Local-first** (client-side data authority)
- **Zero-knowledge**
- **Automations** (practical workflows that save time and reduce friction)
- **Practical privacy** (accessible, realistic privacy improvements)
- **Contextual knowledge** (practical, relevant learning rather than abstract theory)
- **Peace of mind** (the ultimate emotional payoff of sovereign, secure tech)

#### Prohibited Terms

| Avoid                          | Why                         | Replacement                                                      |
| ------------------------------ | --------------------------- | ---------------------------------------------------------------- |
| _Revolutionary_ / _Disruptive_ | Silicon Valley cliché       | Concrete feature description                                     |
| _Military-grade encryption_    | Security marketing buzzword | Specify cipher (e.g., "AES-256", "modern end-to-end encryption") |
| _Trust us_ / _100% unhackable_ | Impossible guarantee        | "Provably open source", "Independently auditable"                |
| _Seamless ecosystem_           | Corporate lock-in speak     | "Interoperable open tools"                                       |
| _Leverage_                     | Overused corporate filler   | "Use", "Implement", "Apply"                                      |

---

## 6. Design Components & UI Styling

### 6.1 Surface Geometry & Elevation

- **Border Radius:**
  - Micro (Tags, badges, pills): `2px` or `4px`
  - Components (Inputs, buttons, code blocks): `6px`
  - Cards & Containers: `8px`
  - Modals & Floating Overlays: `10px`
- **Borders:**
  - Standard hairline: `1px solid #27272A` (dark mode) / `1px solid #E4E4E7` (light mode)
  - Active/Focused: `1px solid #00F0FF`
- **Elevation / Shadows:**
  - Avoid soft blurry diffuse drop shadows.
  - Rely on 1px borders and surface contrast (`#09090B` → `#18181B` → `#27272A`).
  - Subtle crisp elevation: `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);`

### 6.2 Interactive Element Specs

| Component            | Default State                                                       | Hover State                                                         | Active / Focus State                          |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------- |
| **Primary Button**   | Background: `#FAFAFA`, Text: `#09090B`, Border: `none`              | Background: `#FFFFFF`, Box-shadow: `0 0 12px rgba(255,255,255,0.2)` | Outline: `2px solid #00F0FF`, Offset: `2px`   |
| **Secondary Button** | Background: `#18181B`, Text: `#FAFAFA`, Border: `1px solid #27272A` | Background: `#27272A`, Border: `1px solid #3F3F46`                  | Outline: `2px solid #00F0FF`                  |
| **Stark CTA Button** | Background: `#00F0FF`, Text: `#09090B`, Font-Weight: `600`          | Background: `#38BDF8`, Box-shadow: `0 0 16px rgba(0,240,255,0.3)`   | Outline: `2px solid #FFFFFF`                  |
| **Input Field**      | Background: `#18181B`, Text: `#FAFAFA`, Border: `1px solid #27272A` | Border: `1px solid #3F3F46`                                         | Border: `1px solid #00F0FF`, Caret: `#00F0FF` |

---

## 7. Imagery & Graphic Language

### 7.1 Visual Atmosphere

- **Monochrome & High-Precision:** Clean, technical line work, architectural diagrams, vector topologies, and high-legibility typographic layouts.
- **Lighting:** Dark obsidian environment with stark, razor-thin luminous cyan edge accents.
- **No Stock Clichés:** Avoid cheesy images of people wearing hoodies, glowing blue circuit boards, or generic matrix code streams.

### 7.2 AI Image Generation Guidelines

When prompting AI image generators for hero assets, banners, or graphics:

**Base Style Prompt:**

> "Minimalist modern tech architectural composition, obsidian black background (#09090B), sharp geometric precision, stark high-contrast pure white typography accents, subtle razor-thin luminous cyan (#00F0FF) accent line, clean studio lighting, brutalist elegance, ultra-high resolution, zero noise, no cartoonish elements, no corporate stock figures."

**Style Keywords:**

- _Lighting:_ Hard rim lighting, cold neutral shadows, high contrast, zero bloom.
- _Composition:_ Orthographic or strict isometric perspectives, disciplined grid alignment, generous negative space.
- _Materials:_ Anodized dark aluminum, matte dark glass, obsidian stone, precision silicon.

---

## 8. Design Tokens Sync & Implementation

This brand specification acts as the single source of truth for design tokens.

### Sync Workflow

To regenerate downstream tokens (`assets/design-tokens.json` and `assets/design-tokens.css`):

```bash
node .agents/skills/brand/scripts/sync-brand-to-tokens.cjs
```

---

## Changelog

| Version | Date       | Author    | Description                                                                                                                                                                                   |
| ------- | ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1.0   | 2026-09-30 | Core Team | Reframed Core Pillars to reflect 'Step-by-Step Sovereignty' and peace of mind, updated Value Proposition, expanded vocabulary, and introduced the 'Ego-Free & Easygoing' voice trait          |
| 1.0.0   | 2026-09-30 | Core Team | Initial brand specification for Soverr: core mission, domain, minimalist monochrome visual identity, typography system, abstract semantic states, and pragmatic, plainspoken voice principles |
