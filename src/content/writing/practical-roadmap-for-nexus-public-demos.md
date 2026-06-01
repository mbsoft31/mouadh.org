---
title: A Practical Roadmap For Nexus Scholar Public Demos
description: "A public-demo roadmap focused on small reproducible artifacts instead of broad claims about product completeness."
pubDate: 2026-06-01
tags:
  - Nexus Scholar
  - Demo
  - Roadmap
evidence:
  - nexus-cli-demo-2026-06-01
---

Nexus Scholar needs public demos that are small enough to trust.

The goal should not be a dramatic product video first. The goal should be a sequence of evidence-backed demos that show how the workflow works.

## Demo 1: Command Surface

The first demo is already partly covered by the public evidence packet.

Show:

- `php artisan list nexus`;
- `nexus:status`;
- `nexus:screen-adjudicate --example`;
- export-history read surface;
- graph artifact presence.

This proves that the CLI has a real workflow surface without requiring credentials.

## Demo 2: Search Fixture

The next demo should use a small public fixture.

It should show:

- query definition;
- normalized works;
- provider provenance;
- run JSON output;
- stats summary.

The input should be bounded enough that the output can be inspected manually.

## Demo 3: Deduplication Evidence

A useful demo would show two or three duplicate candidates and explain why they are merged, separated, or flagged.

The output should include matching reasons. That is more valuable than simply reporting "duplicates removed."

## Demo 4: Screening Run

The screening demo should show:

- criteria file;
- stage;
- decisions;
- reasons;
- evidence snippets;
- result summary.

If any model-assisted path is used, it should be clearly labeled and bounded.

## Demo 5: Citation Graph Artifact

The graph demo should show:

- input works;
- references;
- generated nodes and edges;
- one or two metrics;
- a short explanation of what the graph can and cannot prove.

This keeps graph work grounded.

## Demo 6: Export History

The export demo should show how a bibliography export is tied to a corpus state.

The key output is not the CSV or BibTeX file alone. It is the history record that explains what the export represents.

## The Rule

Every public demo should answer:

- What was run?
- What input was used?
- What artifact was produced?
- What claim does this support?
- What claim does this not support?

That is the right demo standard for Nexus Scholar.
