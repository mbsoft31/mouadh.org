---
title: Package Boundaries Before Product Features
description: "Why research products should separate reusable domain logic from the CLI, web app, and hosted product surface."
pubDate: 2026-06-01
tags:
  - Architecture
  - Packages
  - Nexus Scholar
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Product features are easier to show than package boundaries. A dashboard screenshot is visible. A clean internal package is not.

But if you are building research workflow software, the package boundaries may matter more than the first product feature.

The reason is simple: research workflows usually need multiple surfaces. A CLI, a web app, background jobs, exports, and public demos may all need the same domain behavior. If that behavior lives only inside the first UI, the system becomes hard to extend.

## The UI Should Not Own The Domain

A common early product mistake is letting the web app become the architecture. Controllers call providers directly. UI actions contain screening rules. Export logic lives in download endpoints. Graph generation is tied to a chart component.

That can work for a prototype, but it creates problems quickly:

- CLI commands cannot reuse the workflow cleanly;
- tests have to go through the web layer;
- background jobs duplicate logic;
- hosted and local modes drift apart;
- public packages become thin wrappers around hidden product code.

When the UI owns the domain, every new surface becomes a rewrite.

## Packages Create Reusable Centers Of Gravity

A package boundary gives one part of the system a clear responsibility.

For a research tool, useful package boundaries might include:

- provider search and normalization;
- reference parsing and bibliography export;
- graph operations;
- deduplication logic;
- screening decision models;
- corpus locking;
- artifact manifests.

Each package does not need to be perfect on day one. It needs to have a reason to exist and a stable enough contract that other surfaces can use it.

## Product Features Become Thinner

When the core behavior lives in packages, product features become coordination layers.

A CLI command can call the provider package, write a run record, and save an artifact.

A web action can call the same provider package, queue the job, and show progress to the user.

An evidence page can reference the artifact without pretending the screenshot is the source of truth.

This makes the system easier to explain. The product is not a pile of screens. It is a set of workflows over reusable domain capabilities.

## Boundaries Help Public And Private Strategy

Package boundaries also help with open-source strategy.

A project can keep reusable core packages public while keeping hosted-product features private. That allows public discussion of the engineering work without exposing commercial roadmap details, credentials, private datasets, or sensitive research plans.

For example:

- a graph package can be public;
- a CLI command using it can be public;
- the hosted collaboration workflow can remain private until mature;
- demo artifacts can show what the public core does.

That is a cleaner boundary than making everything public or hiding everything.

## The Test For A Useful Package

Before extracting a package, ask a practical question: would this logic be useful from more than one surface?

If the answer is yes, a package may be justified.

Good candidates include operations that need to run from CLI, web, scheduled jobs, and tests. Weak candidates are abstractions created only because the code "looks messy." Packaging should reduce real coupling, not create ceremony.

## Architecture Is Part Of The Public Signal

For technical readers, package boundaries communicate seriousness. They show that the project is not only a demo. It has reusable parts, workflow surfaces, and decisions that can be inspected independently.

This is especially important in research software, where trust depends on more than a pleasant interface. Readers need to know whether the workflow is reproducible, whether artifacts can be generated outside the UI, and whether the core logic can survive product changes.

Package boundaries are not a substitute for useful features. They are what keep useful features from collapsing into a single fragile application.
