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

If you are building research software, a web interface is rarely enough.

The web app matters. It gives teams a shared workspace, lowers the learning curve, and makes review tasks easier to coordinate. But a web app also hides a lot of important behavior behind buttons. That is fine for usability. It is weaker for auditability.

A command-line workflow gives the system a second surface: one where operations are explicit, repeatable, and easier to capture as evidence.

That is why CLI design still matters for research tools, even when the long-term product is hosted and collaborative.

## The Command Line Forces The Workflow To Be Named

In a web product, "Run search" can mean many things. It might contact one provider or five. It might normalize records, deduplicate them, enrich metadata, write files, update a database, and trigger a background job.

That is a lot of behavior behind one button.

A CLI forces the product to expose real verbs:

```bash
php artisan nexus:search
php artisan nexus:run-stats
php artisan nexus:screen
php artisan nexus:corpus-lock
php artisan nexus:graph
php artisan nexus:export-bibliography
```

Those names are not just developer conveniences. They define the workflow vocabulary. They make it clear that search, screening, corpus locking, graph generation, and bibliography export are separate operations with separate evidence trails.

When the command surface is clean, the web app becomes easier to design because the underlying workflow is already explicit.

## A Research Workflow Should Leave Files Behind

A useful research tool should not only update a dashboard. It should leave artifacts that can survive outside the product.

Examples include:

- search run JSON;
- normalized provider records;
- deduplication decisions;
- screening criteria and reviewer decisions;
- citation graph exports;
- bibliography files;
- full-text retrieval manifests;
- audit notes and status summaries.

Files are not old-fashioned. They are portable evidence. They can be archived, attached to a report, checked into a private repository, inspected by a collaborator, or regenerated during debugging.

If a team cannot explain later what happened during a review workflow, the product has failed a basic research requirement.

## CLI Workflows Reduce Product Theater

It is easy to build a convincing interface before the underlying system is real. A dashboard can show cards, filters, charts, and status labels while the actual workflow is still fragile.

A CLI makes that harder.

The command either runs or fails. The output file either exists or does not. The export either has the expected fields or it does not. The graph artifact either contains useful nodes and edges or it is empty decoration.

That pressure is healthy. It keeps the system grounded in operations rather than presentation.

For a tool like Nexus Scholar, the CLI is not just a developer backdoor. It is a way to prove that the workflow exists independently of a polished screen.

## The Web App Still Has A Different Job

The argument is not CLI versus web. Each surface should do the job it is best suited for.

Use the CLI for reproducible runs, local evidence, scripted workflows, artifact inspection, and low-risk public demos.

Use the web app for collaboration, review queues, dashboards, guided screening, team permissions, and long-running hosted workflows.

Use packages for reusable domain logic, so neither the CLI nor the web app owns the core behavior.

That split prevents a common failure: a product where the UI becomes the architecture.

## What A Good Public CLI Demo Should Show

A safe public demo does not need live provider credentials or sensitive research data. It can use bounded examples and still prove substance.

A good first demo can show:

- the command inventory;
- local status output;
- a sample screening-decision format;
- a graph artifact shape;
- export-history reads;
- known limits and missing pieces.

That is enough for a reader to see the system as real workflow software rather than a vague promise.

For research tools, auditability is not a bonus feature. It is part of the product contract. A CLI is one of the simplest ways to keep that contract visible.
