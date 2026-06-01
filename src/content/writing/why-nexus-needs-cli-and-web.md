---
title: Why Nexus Scholar Needs Both CLI And Web
description: "Why a serious research workflow tool benefits from a command-line surface, a web surface, and shared package-level core logic."
pubDate: 2026-06-01
tags:
  - Nexus Scholar
  - CLI
  - Web Apps
evidence:
  - nexus-cli-demo-2026-06-01
---

Research workflow tools usually need more than one interface.

A web app is good for collaboration, visibility, and guided work. A CLI is good for reproducible commands, local artifacts, scripted runs, and developer evidence. Packages are good for keeping the domain logic reusable across both.

For Nexus Scholar, the right architecture is not CLI or web. It is CLI plus web over a shared core.

## The CLI Is The Proof Surface

A command-line interface is not always friendly for non-technical users, but it is excellent for proving that a workflow exists.

A CLI can show:

- command names;
- required inputs;
- generated files;
- status output;
- exit behavior;
- repeatable runs;
- local evidence.

When a command such as `nexus:screen-adjudicate` or `nexus:export-bibliography` exists, it forces the system to define the operation outside the browser.

That matters because research workflows should be inspectable. If a workflow can only be understood by clicking through a UI, it is harder to test, document, and reproduce.

## The Web App Is The Collaboration Surface

A CLI is not enough for teams.

Reviewers need queues, filters, dashboards, status views, conflict resolution, permissions, and guided forms. They need to see what remains unscreened, which records have conflicts, and where the workflow is stuck.

That is the job of the web app.

The web surface should make the workflow easier to use without hiding the evidence. A screening page should still produce decision records. A graph view should still point to a graph artifact. An export button should still create export history.

The UI improves usability. It should not replace the audit trail.

## Shared Core Prevents Drift

If the CLI and web app implement their own versions of the workflow, they will eventually disagree.

The CLI will normalize records one way. The web app will apply screening rules another way. The export button will include fields the command does not. Tests will pass in one surface and fail in another.

Shared package-level core logic reduces that risk.

The CLI, web app, and jobs should call the same domain operations where possible:

- provider search and normalization;
- deduplication;
- screening decision models;
- corpus lock handling;
- graph generation;
- bibliography export.

That gives the system one source of behavior with multiple entry points.

## Public Demos Should Start With The CLI

For a young research tool, the CLI is often the safer public demo path.

It can use bounded data, fixtures, local artifacts, and clear command output. It can show technical substance without exposing private hosted-product decisions or sensitive research details.

The web app can come forward as the collaborative workflow matures.

This sequence is useful:

1. prove the command surface;
2. prove artifacts and export history;
3. prove core package boundaries;
4. add web workflows over the same core;
5. demo collaboration once the audit trail is stable.

That order keeps the product honest.

## The Architecture Signal

Technical readers notice when a project has multiple coherent surfaces.

A CLI says the workflow can be run. A web app says the workflow can be used by teams. Packages say the workflow is not trapped in either interface.

That combination is stronger than a single polished demo because it shows the system has room to grow.

Nexus Scholar needs both CLI and web because research work needs both reproducibility and usability. The shared core is what prevents those two needs from becoming separate products.
