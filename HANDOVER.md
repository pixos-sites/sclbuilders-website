# HANDOVER.md

Shared changelog between Claude and Codex.
Read this at the start of every session alongside AGENTS.md and WORKFLOW.md.
Any AI that makes a structural or process change outside of normal client work must log it here.

---

## Log Format

Each entry should include:
- Date
- Made by (Claude / Codex)
- What changed and why
- Anything the other AI needs to know

---

## Entries

---

### February 2026 — Claude

**Folder structure reorganised**

The root of Master_Template was messy and hard to navigate. The following changes were made:

- Created `clients/` folder — all client websites live here
- Moved PolBuilt from `Figma Builds/PolBuilt/` to `clients/polbuilt/`
- Created `clients/bsbuilders/` with a `BRIEF.md` summarising the BS Builders project
- Created `docs/` folder — all reference/documentation .md files moved here
- Deleted `Figma Builds/` folder — no longer needed
- Deleted `QUICK-CHECKLIST.md` and `TEMPLATE-GUIDE.md` — outdated, conflicted with preset system

**Workflow overhauled**

- `WORKFLOW.md` fully rewritten as a single master document (Version 3.0)
- Old workflow referenced Figma-led builds and manual find-and-replace — both retired
- New workflow is preset-only, chat-based intake, no forms to fill
- `BRIEF-TEMPLATE.md` updated to reflect the new approach
- `AGENTS.md` updated to point to `WORKFLOW.md` and `HANDOVER.md`

**Key decisions made this session**

- Figma Make is retired — not used going forward
- All new client sites are built using the preset system only
- If a new section or component is needed, it gets built into the template — no standalone Figma builds
- PolBuilt is a legacy Figma build and lives in `clients/polbuilt/` — it is not preset-based
- BS Builders was built using the old find-and-replace method — no preset file exists. Brief is saved at `clients/bsbuilders/BRIEF.md`. If re-approached, build a proper preset from scratch using that brief.
- BS Builders Vercel deployment has been retired (client did not reply to cold outreach)

**Current folder structure**

```
Master_Template/
  AGENTS.md               ← read first every session
  WORKFLOW.md             ← master process
  HANDOVER.md             ← this file
  clients/
    polbuilt/             ← PolBuilt site (legacy Figma build, standalone)
    bsbuilders/
      BRIEF.md            ← BS Builders brief and project notes
  src/                    ← template engine (preset system)
    config/
      presets/            ← one .ts file per client
        plumber.ts        ← demo preset
        electrician.ts    ← demo preset
        index.ts          ← preset registry
      template.types.ts   ← type definitions, do not edit
  docs/                   ← reference docs, not needed day to day
    BRIEF-TEMPLATE.md     ← template for new client briefs
  public/
  node_modules/
  package.json
```

---

### February 2026 — Claude (new client sites: Welsh Builds, Anniesland, SCL Builders)

**Three new client demo sites built**

All three sites were built by copying `clients/polbuilt` as a base, removing `node_modules/`, `dist/`, and `.git/`, then fully rewriting all components. Each site has been build-checked (clean) and previewed on a local dev server.

**clients/welshbuilds/** — Welsh Builds (D Harvie Builders Ltd)
- Business: Concrete & brick garages, garden buildings, garage doors, driveways & patios, asbestos roof removal
- Address: Uplawmoor, Glasgow G78 4AB
- Phone: 01505 850501 / 0773 338 8538 | Email: info@welshbuilds.co.uk
- Colours: `NAVY = "#0F1535"`, `RED = "#CC0000"`
- Logo: Navy box with "W" in red, "Welsh Builds" in Playfair Display
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from Welsh Builds Website"
- Dev server: port 5180
- Build: ✅ clean

**clients/anniesland/** — Anniesland Builders Group Ltd
- Business: Extensions, loft conversions, bathrooms, kitchens, damp proofing, roofing
- Address: 179 Duntocher Road, Clydebank G81 3NE
- Phone: 0141 954 2265 | Email: info@annieslandbuildersgroup.co.uk
- Colours: `NAVY = "#1B2A4A"`, `GOLD = "#D4A017"`
- Logo: Navy box with "AB" in gold, "Anniesland Builders Group" in Playfair
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from Anniesland Builders Website"
- Dev server: port 5181
- Build: ✅ clean

**clients/sclbuilders/** — SCL Builders
- Business: New builds, extensions, loft conversions, kitchens & bathrooms, landscaping, design & build
- Address: 116 High Blantyre Road, Hamilton ML3 9HW
- Phone: 07866 939663 / 01698 711162 | Email: stephen@sclbuilders.com
- Colours: `NAVY = "#1B2A4A"`, `GOLD = "#D4A017"`
- Logo: Navy box with "SCL" in gold, "SCL Builders · Hamilton · Est. 30+ Years"
- Key USPs: Construction Line Gold, 30+ years, CSCS/SMSTS/NVQ/City & Guilds, Disclosure Scotland verified
- Hero tagline: *"If you can think it, we can build it."*
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from SCL Builders Website"
- Dev server: port 5182
- Build: ✅ clean

**Images updated**

All three new client sites had their placeholder PolBuilt images replaced with relevant Unsplash stock photos:
- Welsh Builds: garage exteriors, driveways/patios, home offices, garden buildings, roofing
- Anniesland: house extensions, loft conversions, modern bathrooms, kitchens, roofing
- SCL Builders: new builds, extensions, loft bedrooms, kitchens, landscaping, construction teams
- Images downloaded directly to each client's `public/images/` folder, replacing the old PolBuilt set
- `logo-polbuilt.png` still present in each folder but not used — safe to ignore

**PolBuilt**
- Deployed to Vercel at `polbuilt-demo.vercel.app`
- React moved from `peerDependencies` to `dependencies` in `package.json` to fix Vercel build failure
- Duplicate Vercel project (`polbuilt-website`) deleted — only one project now connected to the repo
- No changes made to PolBuilt content this session

**Current clients folder structure**

```
clients/
  polbuilt/         ← deployed to polbuilt-demo.vercel.app
  welshbuilds/      ← built, images updated, NOT yet deployed
  anniesland/       ← built, images updated, NOT yet deployed
  sclbuilders/      ← built, images updated, NOT yet deployed
  bsbuilders/
    BRIEF.md        ← brief only, no site built
```

**Pending / next steps**
- Deploy Welsh Builds, Anniesland, and SCL Builders to GitHub + Vercel
- Send cold email to PolBuilt (drafted, user sending separately)
- Images for Welsh Builds may need further refinement before final deploy (user flagged)
- Consider creating `BRIEF.md` files for each new client folder

---

### February 2026 — Claude (follow-up cleanup)

**Further folders removed**

After the initial restructure, three more items were removed:

- `guidelines/` — leftover from Figma Make, placeholder content only, never used
- `dist/` — auto-generated build output, not needed in the folder permanently. Recreates itself when `npm run build` is run.
- `CLIENT-BRIEFS/` — folder removed. `BRIEF-TEMPLATE.md` moved into `docs/`. All actual client briefs live in `clients/<clientname>/BRIEF.md`.

**Current clean root**

```
Master_Template/
  AGENTS.md
  WORKFLOW.md
  HANDOVER.md
  clients/
  docs/
  src/
  public/
  node_modules/
  index.html
  package.json
  package-lock.json
  postcss.config.mjs
  vite.config.ts
```

---

### February 2026 — Codex

**Workflow brief path aligned with new folder structure**

- Updated `WORKFLOW.md` to replace outdated `CLIENT-BRIEFS/<ClientName>-BRIEF.md` references
- New canonical brief location in workflow is now `clients/<clientname>/BRIEF.md`, matching `AGENTS.md` and current repo structure
- This removes the process mismatch Claude flagged in the handover cleanup changes

---

### February 2026 — Codex

**Structure-first layout rule added to workflow**

- Updated `WORKFLOW.md` to require choosing site structure first (`one-page` vs `multi-page`) before building content
- Added current layout reference points:
  - `BS Builders` style for one-page sites
  - `PolBuilt` style for multi-page sites
- Clarified these are reference starting points only (not hard limits)
- Workflow now explicitly allows the layout reference library to grow as more strong client layouts are created

---

### February 2026 — Codex

**Preset colour system made more flexible (fill vs text/icon colours)**

- Updated the preset template system to support separate colour roles in `BrandTokens`:
  - `accent` (fill colour)
  - `accentInk` (text/icon accent colour, optional)
  - `accentOnAccent` (text colour shown on accent fills, optional)
- Wired new CSS variables in `src/app/App.tsx` with safe fallbacks so older presets still work unchanged
- Updated shared components (buttons, section labels, icons, process badges, service links, etc.) to use the split colour roles
- This was needed during Anniesland one-page refinement so blue/yellow branding could be used more cleanly without one accent colour being reused everywhere

**What the other AI needs to know**

- Existing presets (`plumber`, `electrician`) still build without changes because the new colour fields are optional
- New presets can now do combinations like yellow buttons + blue button text/icons without further component edits

---
