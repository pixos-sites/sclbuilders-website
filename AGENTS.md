# AGENTS.md

## Who Uses This Repo

This repo is run by a designer with no developer background.
All code implementation is handled by Claude or Codex.
Both AIs follow the same workflow. There is no difference in process.

## Read These First

At the start of every session, read in this order:
1. `WORKFLOW.md` — the master process for every client project
2. `HANDOVER.md` — shared changelog between Claude and Codex, read this to get up to speed on any changes made outside of a normal session

## Rules

1. Follow `WORKFLOW.md` exactly.
2. All client work is preset-driven. Never touch component files unless explicitly instructed.
3. Communicate in plain language. No jargon.
4. Ask before guessing on any must-have detail (name, phone, email).
5. Mark all placeholder content with `// PLACEHOLDER` in the preset file.
6. Save completed briefs to `clients/<clientname>/BRIEF.md`.
7. If picking up a project mid-way, read the client brief file first.
8. Confirm build passes before reporting a stage complete.
9. If you make any structural or process change outside of normal client work, log it in `HANDOVER.md`.

## Delivery Format

After completing any stage, report:
1. What was done (plain language)
2. Files created or changed
3. Build result (pass / fail)
4. Any placeholders used
5. What comes next
