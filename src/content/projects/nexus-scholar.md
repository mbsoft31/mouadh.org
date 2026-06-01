---
title: Nexus Scholar
description: "Active Laravel/PHP ecosystem for systematic review workflows: search, deduplication, screening, citation graphs, references, exports, and audit trails."
pubDate: 2026-06-01
tags:
  - Laravel
  - PHP
  - Research Software
status: Active public flagship
repo: https://github.com/nexus-scholar
links:
  - label: Core package
    href: https://github.com/nexus-scholar/core
  - label: CLI workspace
    href: https://github.com/nexus-scholar/nexus-cli
  - label: Web shell
    href: https://github.com/nexus-scholar/nexus-web
---

Nexus Scholar is the main public technical surface for my research tooling work.

It is a Laravel/PHP ecosystem for systematic literature review workflows: scholarly search, provider integration, corpus normalization, deduplication, screening, citation graphs, full-text retrieval, bibliographic exports, and audit-friendly workflow artifacts.

## What Exists Publicly

- `core`: PHP 8.3+ systematic literature review toolkit and reusable package boundary.
- `nexus-cli`: Laravel Artisan workspace for running and auditing workflows locally.
- `nexus-web`: hosted Laravel/Inertia product shell for review-team workflows.
- `graph-core`: graph data structures and exporters for citation-network work.
- `graph-algorithms`: traversal, centrality, shortest paths, components, ordering, and MST algorithms.
- `refmanager`: bibliographic import/export for RIS, BibTeX, CSL-JSON, EndNote XML, and related reference workflows.

## What This Proves

Nexus Scholar demonstrates package boundaries, provider integration, domain modeling, artifact tracking, graph workflows, and research-facing backend architecture.

The useful signal is not only that the repositories exist. The useful signal is that the same domain has been attacked from several angles: provider adapters, graph packages, reference management, local CLI workflows, and a hosted app boundary.

## Current Public Direction

- Keep `core`, `nexus-cli`, `nexus-web`, `graph-core`, `graph-algorithms`, and `refmanager` as the visible flagship set.
- Publish examples that show real workflow artifacts instead of broad claims.
- Keep public docs honest about what is implemented, what is experimental, and what belongs in the private product roadmap.

## Boundary

Public:

- reusable packages;
- local workflow tooling;
- documentation and examples;
- architecture notes and safe evidence packets.

Controlled:

- private roadmap details;
- hosted product operations;
- credentials and deployment details;
- unpublished thesis methods or sensitive experiment planning.
