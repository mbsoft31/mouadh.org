---
title: Why Nexus Scholar Is A Laravel/PHP Project
description: "A technical note on treating systematic review tooling as backend domain work: providers, deduplication, screening, citation graphs, references, and audit trails."
pubDate: 2026-06-01
tags:
  - Laravel
  - PHP
  - Research Software
  - Nexus Scholar
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Nexus Scholar is my public research-tooling stack for systematic literature review workflows.

The goal is not to wrap an AI model around papers and call it research automation. The useful work is more structural: search plans, provider boundaries, deduplication, screening decisions, citation graphs, full-text retrieval, bibliographic exports, and enough audit trail that another person can inspect what happened.

Laravel/PHP is a practical fit for this kind of work.

## Systematic Review Software Is Domain-Heavy

Systematic review software is not only a search box. A real workflow needs to model:

- projects, protocols, and inclusion criteria;
- provider queries and search provenance;
- normalized scholarly works across sources such as OpenAlex, Semantic Scholar, Crossref, and local files;
- corpus membership and deduplication evidence;
- screening runs and reviewer decisions;
- full-text fetch attempts and legal source boundaries;
- citation graph relationships;
- bibliographic exports and run history.

That is backend domain work before it is UI work. Laravel gives me a productive environment for queues, migrations, events, commands, validation, jobs, policies, and HTTP integrations while still allowing package-level boundaries.

## The Package Boundary Matters

The core workflow logic belongs in reusable packages, not only in a hosted app.

In Nexus Scholar, the public structure is:

- `nexus-scholar/core`: PHP 8.3+ workflow toolkit and package boundary;
- `nexus-scholar/nexus-cli`: Laravel Artisan workspace for local, auditable workflows;
- `nexus-scholar/nexus-web`: Laravel/Inertia hosted product shell;
- `nexus-scholar/graph-core`: graph data structures and exports;
- `nexus-scholar/graph-algorithms`: traversal, shortest paths, centrality, components, ordering, and MST algorithms;
- `nexus-scholar/refmanager`: RIS, BibTeX, CSL-JSON, EndNote XML, and reference-management workflows.

This lets the same workflow ideas support different surfaces: a local CLI, a hosted app, package users, and future research-specific integrations.

## Auditability Is A Feature

Research tooling should make decisions easier to inspect, not harder.

For Nexus Scholar, that means treating artifacts as first-class outputs: run files, screening decisions, full-text manifests, export history, graph outputs, and project notes. This is why the CLI workspace matters. A hosted UI is useful, but local auditable workflows are important for researchers who need to preserve evidence.

## The Public Boundary Is Deliberate

I am keeping the reusable tooling, documentation, and verified public evidence visible.

I am not making every product decision public. Hosted product details, private roadmap work, credentials, client data, and unpublished research methods stay controlled until they are mature enough to share.

That boundary is intentional. Open source is useful when it clarifies the work. It is not useful when it exposes sensitive research planning or turns an unfinished product roadmap into noise.

## Current Direction

The next useful public work is not a broad claim that the system is finished. It is narrower:

- make package boundaries easier to inspect;
- document workflow examples with real artifacts;
- keep provider tests and examples reproducible;
- show how citation graphs and bibliographic exports fit into review workflows;
- publish writing that is tied to code, commits, and evidence.

That is the kind of software I want to build more of: domain-heavy backend systems where correctness, auditability, and research context matter.
