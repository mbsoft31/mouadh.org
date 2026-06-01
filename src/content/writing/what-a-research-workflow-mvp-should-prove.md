---
title: What A Research Workflow MVP Should Prove
description: "A practical checklist for judging whether an early research workflow product has real substance or only a polished surface."
pubDate: 2026-06-01
tags:
  - MVP
  - Research Software
  - Product
evidence:
  - nexus-cli-demo-2026-06-01
---

An MVP for research software should prove a workflow, not a theme.

It is easy to build a product shell that looks convincing: a dashboard, a few cards, an upload button, a results table, and some status badges. That may be enough for a pitch, but it does not prove the system can support real research work.

A serious MVP should answer a harder question: can the tool take a researcher through a meaningful workflow and leave enough evidence to trust what happened?

## Prove One Complete Path

The first mistake is trying to demo the whole future product.

For a research workflow tool, one complete path is more valuable than ten unfinished surfaces. A useful path might be:

1. define a query;
2. run a provider search;
3. normalize records;
4. deduplicate candidates;
5. screen a small set;
6. export results;
7. preserve the run evidence.

The path can be small. The important part is that it is real.

If the MVP cannot complete a narrow path with clear inputs and outputs, the broader roadmap is still speculative.

## Prove The Data Model

Research tools fail when the data model is too shallow.

A paper is not only a title and abstract. It may have provider identifiers, source metadata, duplicate groups, screening decisions, full-text artifacts, citation edges, exports, and manual corrections.

An MVP should prove that the model can represent the workflow without collapsing important concepts into vague JSON fields.

Useful questions:

- Can source records and normalized records both be represented?
- Can a screening decision reference a criteria version?
- Can duplicate groups preserve matching evidence?
- Can exports be tied to corpus state?
- Can provider runs be inspected later?

If the answer is no, the MVP may look finished while hiding structural debt.

## Prove Failure Handling

Research workflows depend on providers, files, background jobs, and user decisions. Failure is normal.

A useful MVP should show what happens when:

- a provider request fails;
- a PDF cannot be retrieved;
- a duplicate match is uncertain;
- an export has missing metadata;
- a background job is interrupted;
- a reviewer changes criteria.

The product does not need perfect recovery at the MVP stage. It does need visible failure states. Silent failure destroys trust.

## Prove Artifact Output

An MVP should leave something behind that can be inspected outside the UI.

Examples:

- JSON run summaries;
- CSV or BibTeX exports;
- graph files;
- screening decision records;
- retrieval manifests;
- status reports.

Artifacts make the demo concrete. They also force the implementation to define what the product actually produces.

A screenshot is useful for communication. An artifact is useful for verification.

## Prove A Boundary Between Core And Surface

The MVP should not trap all logic inside the first interface.

If the product has a CLI, a web app, and future hosted workflows, the core operations should be reusable. Search, deduplication, screening, export, and graph generation should not be rewritten for every surface.

A good early architecture lets the same workflow be called from:

- a command;
- a web action;
- a queued job;
- a test;
- a public demo fixture.

That boundary gives the product room to grow.

## Prove Honest Limits

A strong MVP says what it does not do yet.

It may support one provider, not five. It may use fixtures instead of live credentials. It may show citation graph artifacts before a polished graph UI. It may preserve full-text retrieval attempts without storing restricted PDFs.

Those limits are acceptable when they are explicit.

The weak version of an MVP hides the limits behind broad language. The strong version names the limits and proves the parts that already work.

For research workflow software, the first product milestone is not "looks complete." It is "a narrow workflow can be run, inspected, and explained."
