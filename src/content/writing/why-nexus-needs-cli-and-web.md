---
title: Why Nexus Scholar Needs Both CLI And Web
description: "The CLI and hosted web app solve different problems in the same research workflow ecosystem."
pubDate: 2026-06-01
tags:
  - Nexus Scholar
  - CLI
  - Laravel
evidence:
  - nexus-cli-demo-2026-06-01
---

Nexus Scholar needs both a CLI and a web app.

The reason is not indecision. The two surfaces solve different problems.

The CLI helps prove the workflow. The web app helps people use it together.

## The CLI Is For Reproducibility

The CLI is good at:

- explicit commands;
- local files;
- generated artifacts;
- repeatable runs;
- developer inspection;
- bounded public demos;
- workflow automation.

For early research software, this is valuable because it forces the underlying operations to be real.

If a search run, screening pass, graph build, or export cannot be expressed as a command, the workflow may be too hidden.

## The Web App Is For Collaboration

The web app is good at:

- team workspaces;
- guided review flows;
- dashboards;
- reviewer assignment;
- comparison views;
- artifact browsing;
- product onboarding.

Researchers do not want every task to be a command. A hosted UI can make the workflow accessible.

## The Shared Core Matters

The risk is duplicating logic.

If the CLI and web app each implement their own workflow rules, they will drift. The better architecture is a shared core package with CLI and web surfaces around it.

That is why package boundaries matter.

The core should understand the workflow. The CLI should expose it as commands. The web app should expose it as product flows.

## Public And Private Roles

The CLI is easier to demonstrate publicly because it can show command output and artifacts without exposing hosted product operations.

The web app can remain public as a product shell, but some operational and commercial details should stay controlled.

This supports the open-core boundary: reusable workflow ideas stay public, hosted product operations stay managed.

## The Direction

For Nexus Scholar, the next public demos should probably start with CLI workflows. They are easier to reproduce and easier to tie to evidence.

The web app can then show how the same workflow becomes easier for teams.

Both surfaces are necessary if the goal is serious research workflow software.
