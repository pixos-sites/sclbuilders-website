# Master Workflow

Version: 3.0
Last Updated: February 2026

This is the single source of truth for every client project.
Follow this workflow identically whether you are working with Claude or Codex.

---

## What We Are Building

A productised web design service targeting tradespeople (plumbers, electricians, builders, roofers, landscapers, etc.).

The process:
1. Identify a potential client
2. Build their site using the preset system
3. Deploy a live demo to Vercel
4. Cold email them with the link
5. Convert to a paying client at £700

No Figma Make. No manual find-and-replace. No touching component files.
All client content lives in one preset file. That is the only file the AI creates per client.

---

## The Preset System (How It Works)

Every client site is driven by a single preset file located at:
`src/config/presets/<clientid>.ts`

This file contains everything:
- Company name, phone, email, location
- Brand colour
- All section copy (hero, services, portfolio, testimonials, etc.)
- Contact form options
- Footer content

The components never change. Only the preset file changes per client.

To add a new client:
1. Create `src/config/presets/<clientid>.ts`
2. Register it in `src/config/presets/index.ts`
3. Add `dev:<clientid>` and `build:<clientid>` scripts to `package.json`

---

## Stage 1 — Intake (Chat-Based Brief)

You do not fill in a form. You start a conversation.

Tell the AI one of the following to kick things off:
- "New client — [trade] in [location]"
- "I want to build a site for a [trade] in [location]"
- "Cold outreach — [trade], [location], here's what I know: ..."

The AI will then ask questions to fill in any gaps. Questions are asked in plain language, one topic at a time. You answer in plain language.

### What the AI needs before building:

**Must have (AI will ask if missing):**
- Business name
- Trade / business type
- Town, city, or region
- Phone number
- Email address
- Primary brand colour (or AI suggests one based on trade)
- Main services (up to 6)

**Nice to have (AI uses best judgement if missing):**
- Hero headline direction
- Portfolio project names and locations
- Testimonials (real or placeholder)
- Key trust points (years trading, accreditations, guarantee)
- Any specific copy direction

**If building for cold outreach (no client contact yet):**
- Business name and trade is enough to start
- AI generates plausible placeholder content
- All placeholder content is clearly marked in the preset file with a comment: `// PLACEHOLDER`

Once intake is complete the AI saves the brief to:
`clients/<clientname>/BRIEF.md`

---

## Stage 2 — Build

The AI creates the preset file and runs the site locally.

### Decide Structure First (Before Building)

Before writing or editing the client site, decide the site structure/layout type:
- `One-page` site
- `Multi-page` site

Then choose the best existing layout reference as the starting point.

Current reference points:
- `BS Builders` style = strong one-page layout reference
- `PolBuilt` style = strong multi-page layout reference

Important:
- These are starting references, not permanent limits
- As more client sites are built, the library of layout references should grow
- The AI should choose the best fit for the client first, then build from that structure
- Do not start building content before the structure choice is clear

Steps the AI takes:
1. Creates `src/config/presets/<clientid>.ts` using the brief
2. Registers it in `src/config/presets/index.ts`
3. Adds dev and build scripts to `package.json`
4. Confirms the build runs without errors

No component files are touched.
No other files are touched unless explicitly discussed.

The AI reports back in plain language:
- What was built
- Any placeholders used and why
- Anything that needs your input before refinement

---

## Stage 3 — Refinement (Up to 3 Rounds)

You review the site locally by running:
```
npm run dev:<clientid>
```

Feed changes back in plain language. Examples:
- "Change the headline to X"
- "Swap service 3 for roofing"
- "The colour feels too dark, try a lighter shade"
- "Add a trust point about being family-run"

The AI updates the preset file only.

Rounds:
- Round 1: Your initial review after first build
- Round 2: Follow-up changes
- Round 3: Final polish before deploy

After Round 3 the site should be ready to deploy. If it is not, flag what is still outstanding before proceeding.

---

## Stage 4 — Deploy

When the site is approved for demo:

1. Run the production build:
```
npm run build:<clientid>
```

2. Deploy to Vercel (import from GitHub or Vercel CLI)

3. Confirm the live URL works on desktop and mobile

4. Update `clients/<clientname>/BRIEF.md` with the Vercel URL

The AI confirms:
- Build passed with no errors
- Contact details are correct on the live site
- Mobile layout is intact

---

## Stage 5 — Cold Outreach

Once the demo is live, send the cold email.

The email should:
- Be short (4-6 sentences max)
- Reference their business by name
- Lead with the demo link
- State the price clearly (£700)
- Have one clear call to action (reply or call)

If no reply within 3-5 days, follow up once.

---

## Stage 6 — Client Converts

If the client says yes:

- [ ] Collect any real photos or updated content
- [ ] Replace placeholders in the preset file
- [ ] Final build and deploy to production
- [ ] Transfer Vercel access or connect custom domain
- [ ] Send handover note (how to contact you if anything needs changing)
- [ ] Collect payment (£700)
- [ ] Request a Google review or testimonial
- [ ] Update `clients/<clientname>/BRIEF.md` with final status

---

## Rules for the AI (Claude and Codex)

1. Never edit component files unless explicitly instructed.
2. Never guess on phone number, email, or business name — always ask.
3. Always confirm build passes before reporting done.
4. Report in plain language — no jargon.
5. If something is a placeholder, mark it with `// PLACEHOLDER` in the preset file.
6. Save the brief to `clients/<clientname>/BRIEF.md` at the end of intake.
7. One preset file per client. One source of truth.
8. If picking up a project mid-way, read `clients/<clientname>/BRIEF.md` first.
9. Decide site structure first (`one-page` vs `multi-page`) before building content.
10. Start from the best layout reference available (currently `BS Builders` for one-page and `PolBuilt` for multi-page), but keep adding new layout references over time as better examples are created.

---

## File Reference

| File | Purpose |
|------|---------|
| `src/config/presets/<clientid>.ts` | All client content — the only file created per client |
| `src/config/presets/index.ts` | Preset registry — updated when new preset is added |
| `src/config/template.types.ts` | Type definitions — do not edit |
| `package.json` | Dev and build scripts — updated when new preset is added |
| `clients/<clientname>/BRIEF.md` | Saved brief — source of truth for project context |

---

## Existing Presets (Demo Sites)

| ID | Business | Trade | Location |
|----|----------|-------|----------|
| `plumber` | FlowFix Plumbing | Plumbing | London |
| `electrician` | Northline Electrical | Electrical | Manchester |
| `bsbuilders` | BS Builders Ltd | Construction | Glasgow |

---

## Build Commands Reference

```bash
# Run locally
npm run dev:<clientid>

# Production build
npm run build:<clientid>

# Existing presets
npm run dev:plumber
npm run dev:electrician
```
