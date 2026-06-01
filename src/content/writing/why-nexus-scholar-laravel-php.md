---
title: Why I Am Building Nexus Scholar With Laravel/PHP
description: A technical note on using Laravel/PHP for systematic literature review workflows, scholarly data, citation graphs, and audit-friendly research infrastructure.
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

## The Workflow Is Domain-Heavy

Systematic review software is not only a search box. A real workflow needs to model:

- projects and protocols;
- provider queries and search provenance;
- normalized scholarly works;
- corpus membership and deduplication evidence;
- screening runs and reviewer decisions;
- full-text fetch attempts and legal source boundaries;
- citation graph relationships;
- export history.

That is backend domain work before it is UI work. Laravel gives me a productive environment for queues, migrations, events, commands, validation, jobs, policies, and HTTP integrations while still allowing package-level boundaries.

## The Package Boundary Matters

The core workflow logic belongs in reusable packages, not only in a hosted app.

In Nexus Scholar, the public structure is:

- `nexus-scholar/core`: workflow engine and Laravel package boundary;
- `nexus-scholar/nexus-cli`: local research workspace for auditable command-line workflows;
- `nexus-scholar/nexus-web`: hosted Laravel/Inertia product shell;
- `nexus-scholar/graph-core` and `graph-algorithms`: graph primitives and algorithm layer;
- `nexus-scholar/refmanager`: bibliographic import/export tooling.

This lets the same workflow ideas support different surfaces: a local CLI, a hosted app, package users, and future research-specific integrations.

## Auditability Is A Feature

Research tooling should make decisions easier to inspect, not harder.

For Nexus Scholar, that means treating artifacts as first-class outputs: run files, screening decisions, full-text manifests, export history, graph outputs, and project notes. This is why the CLI workspace matters. A hosted UI is useful, but local auditable workflows are important for researchers who need to preserve evidence.

## What I Am Keeping Public

I am keeping the reusable tooling, documentation, and verified public evidence visible.

I am not making every product decision public. Hosted product details, private roadmap work, credentials, client data, and unpublished research methods stay controlled until they are mature enough to share.

That boundary is intentional. Open source is useful when it clarifies the work. It is not useful when it exposes sensitive research planning or turns an unfinished product roadmap into noise.

## Current Direction

The next useful public work is not a broad claim that the system is finished. It is narrower:

- make the package boundaries easier to inspect;
- document workflow examples with real artifacts;
- keep provider tests and examples reproducible;
- show how citation graphs and bibliographic exports fit into review workflows;
- publish writing that is tied to code, commits, and evidence.

That is the kind of software I want to build more of: domain-heavy backend systems where correctness, auditability, and research context matter.
