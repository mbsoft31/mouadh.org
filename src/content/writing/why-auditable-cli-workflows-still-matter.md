---
title: Why Auditable CLI Workflows Still Matter
description: "A technical argument for keeping command-line workflows in research software even when a hosted web product exists."
pubDate: 2026-06-01
tags:
  - CLI
  - Research Software
  - Nexus Scholar
evidence:
  - nexus-cli-demo-2026-06-01
---

Hosted web products are useful. They make workflows easier to discover, easier to share, and easier to operate with teams.

But for research software, a CLI still matters.

The command line is a simple way to prove that a workflow is not only a screen. It can be run, repeated, inspected, logged, and connected to files. That matters when the output is not just a UI state, but a research artifact.

## A CLI Makes The Workflow Explicit

A web UI often hides workflow steps behind buttons. That is good for usability, but weak for evidence.

A CLI makes the workflow visible:

```bash
php artisan nexus:search
php artisan nexus:run-stats
php artisan nexus:screen
php artisan nexus:corpus-lock
php artisan nexus:graph
php artisan nexus:export-bibliography
```

Even when these commands become friendlier over time, their existence forces the system to expose the real operations.

## Files Are Evidence

Research workflows produce files:

- run JSON;
- screening decisions;
- graph artifacts;
- export history;
- full-text manifests;
- wiki pages;
- audit notes.

These files should not be accidental byproducts. They should be designed outputs.

If a researcher needs to explain what happened later, a local file trail is easier to preserve than a memory of what was clicked in a web interface.

## A CLI Reduces Product Theater

It is easy to build a product surface before the underlying workflow is solid.

A CLI makes that harder. The command either runs or it does not. The output either exists or it does not. The generated artifact either has a useful shape or it does not.

This is why I see Nexus Scholar CLI as part of the main architecture, not only a developer convenience.

## The Web App Still Matters

The point is not CLI instead of web.

The point is CLI and web with a shared workflow core:

- CLI for reproducibility and artifact inspection;
- web for collaboration, dashboards, and guided workflows;
- packages for reusable domain logic;
- evidence packets for public explanation.

That split keeps the system honest.

## The Public Demo Path

The safest public demo is not a large live provider search with credentials. It is a bounded workflow that shows the command surface, input shape, output files, and claim boundaries.

A good first demo should show:

- command inventory;
- local status output;
- screening decision format;
- graph artifact shape;
- export-history read surface.

That proves enough without exposing private research plans or credentials.
