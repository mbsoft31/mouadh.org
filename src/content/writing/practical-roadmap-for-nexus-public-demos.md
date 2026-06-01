---
title: A Practical Roadmap For Nexus Scholar Public Demos
description: "What a useful public demo sequence for Nexus Scholar should prove before a hosted product is pushed into the foreground."
pubDate: 2026-06-01
tags:
  - Nexus Scholar
  - Product Demos
  - Research Software
evidence:
  - nexus-cli-demo-2026-06-01
---

A public demo should not try to prove everything.

For research workflow software, the best demos are narrow. They show one real capability, name the boundary, and leave an artifact that can be inspected later. That is stronger than a large polished walkthrough where the viewer cannot tell what is real, what is seeded, and what is still planned.

Nexus Scholar should be demoed in layers.

## Demo One: Command Inventory And Local Status

The first demo should show that the system has a real command surface.

This is not flashy, but it is useful. A command inventory tells technical readers which workflows exist as named operations: search, screening, corpus locks, exports, graph generation, full-text artifacts, status reports, and run statistics.

A local status command can show:

- current project context;
- available review data;
- missing baseline state;
- recent runs;
- export availability;
- health checks.

This establishes that the tool is not only a concept page. It has an operational surface.

## Demo Two: Safe Search Run With Bounded Data

The second demo should show a search workflow without exposing credentials or sensitive research strategy.

Use a safe query, a small provider set, or a recorded fixture. The goal is not to produce an impressive corpus. The goal is to show how the system handles the search lifecycle:

- input query;
- provider adapter;
- raw response boundary;
- normalized records;
- run metadata;
- output artifact;
- known limits.

If the demo cannot explain those steps, it is too early to make broad claims about provider support.

## Demo Three: Deduplication Evidence

Deduplication is one of the best ways to show the system's seriousness.

A good demo can show a small set of duplicate and near-duplicate records, then walk through:

- identifiers used for matching;
- normalized title comparison;
- source providers;
- confidence levels;
- canonical record selection;
- manual override path.

The point is not to pretend deduplication is solved perfectly. The point is to show that the system treats it as an auditable decision rather than an invisible cleanup step.

## Demo Four: Screening Decision Format

Screening is where review work becomes human and accountable.

A public demo should show the structure of a screening decision:

- reviewer or actor;
- criterion version;
- include, exclude, maybe, or conflict state;
- reason code;
- free-text note when appropriate;
- timestamp;
- link to the record being screened.

Even a small fixture can demonstrate the workflow. A viewer should be able to see how a decision would be preserved and revisited.

## Demo Five: Citation Graph Artifact

A graph demo should avoid becoming a visual gimmick.

Show the generated artifact first: nodes, edges, identifiers, source records, graph metadata, and generation date. Then show the visualization if useful.

The artifact matters because it can be inspected, regenerated, and tied to a review corpus. The visual is only one way to read it.

## Demo Six: Export And Evidence Packet

The final public demo in the first sequence should connect the workflow to export.

Show how records become a bibliography file, how export history is stored, and how an evidence packet can point to the generated artifact. This closes the loop from input to review evidence.

The best early Nexus Scholar demos should be boring in the right way: bounded, repeatable, honest, and attached to artifacts. That is how a research workflow tool earns trust before asking anyone to care about a hosted product.
