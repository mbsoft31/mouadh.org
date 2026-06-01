---
title: Package Boundaries Before Product Features
description: "Why reusable package boundaries are a better foundation than rushing every idea into the hosted product."
pubDate: 2026-06-01
tags:
  - Architecture
  - Packages
  - Nexus Scholar
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

It is tempting to build product features directly into the hosted app.

That can be fast at the beginning. It can also make the system hard to reuse, hard to test, and hard to explain.

For Nexus Scholar, package boundaries matter before product features.

## The Product Is Not The Only Surface

Nexus Scholar has several public surfaces:

- core package;
- CLI workspace;
- hosted web shell;
- graph packages;
- reference-management package;
- evidence pages.

If all logic lives only in the hosted web app, the CLI becomes weak and the packages become decorative.

The workflow should be reusable across surfaces.

## Packages Force Better Questions

A package boundary forces the system to answer:

- What is the input?
- What is the output?
- Which dependencies are allowed?
- What can be tested without a full app?
- Which errors should be explicit?
- Which policies are configurable?

Those questions make the design better.

## The Hosted App Should Compose

The hosted app should compose workflows, not own every rule.

It can handle:

- authentication;
- team workspaces;
- UI flows;
- dashboards;
- hosted storage;
- collaboration;
- product operations.

The reusable workflow logic should stay closer to packages.

## Boundaries Help Open Source Strategy

Package boundaries also help the public/private split.

Reusable workflow packages can stay open. Hosted product operations, private roadmap details, and commercial features can stay controlled.

That makes the public story stronger. It shows serious engineering without requiring every product decision to be public.

## The Risk

Boundaries can become over-engineering if they are invented too early.

The rule is not "make a package for everything." The rule is:

> Add a package boundary where reuse, testing, or public clarity justifies it.

For Nexus Scholar, that condition is already true for core workflow logic, graph foundations, graph algorithms, and reference management.

The next product features should build on that foundation rather than bypass it.
