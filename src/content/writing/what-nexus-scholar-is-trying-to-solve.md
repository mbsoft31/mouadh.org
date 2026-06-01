---
title: What Nexus Scholar Is Actually Trying To Solve
description: "A technical explanation of the systematic review workflow problems behind Nexus Scholar: provider boundaries, deduplication, screening, citation graphs, full-text artifacts, exports, and audit trails."
pubDate: 2026-06-01
tags:
  - Nexus Scholar
  - Systematic Review
  - Research Software
  - Laravel
evidence:
  - nexus-cli-demo-2026-06-01
---

Nexus Scholar is not mainly an AI wrapper around academic papers.

The real problem is more basic and more difficult: systematic review work creates a chain of evidence, and most of that chain is fragile if it lives in ad hoc spreadsheets, browser tabs, one-off scripts, and undocumented prompts.

The useful software problem is to make the workflow inspectable.

## Search Is A Provenance Problem

A search result is not only a title and abstract. It depends on:

- which provider was queried;
- the exact query text;
- search filters and date ranges;
- provider-specific identifiers;
- raw provider payloads when they are needed for audit;
- normalized fields that can be compared across sources.

If two providers return the same work with different metadata, the system needs to preserve enough provenance to explain why the records were merged, separated, or flagged for review.

This is why provider boundaries matter. OpenAlex, Semantic Scholar, Crossref, local imports, and future sources should not leak their quirks into every part of the app.

## Deduplication Should Leave Evidence

Deduplication is easy to hand-wave and hard to trust.

In review workflows, merging two records is a research decision. It affects counts, screening load, citation exports, and the final corpus. The system should preserve matching evidence: DOI matches, title similarity, provider IDs, years, authors, and conflict flags.

The goal is not only to remove duplicates. The goal is to make the duplicate decision reviewable.

## Screening Is A Workflow, Not A Boolean

Screening needs more than `include` or `exclude`.

A useful screening system should preserve:

- criteria versions;
- stage names such as title/abstract or full-text;
- reviewer or actor identity;
- decision reasons;
- evidence snippets;
- confidence when a model or rule system is involved;
- comparison between runs.

That structure makes it possible to compare deterministic screening, model-assisted screening, human adjudication, and later corrections without pretending they are the same thing.

## Citation Graphs Are Not Decoration

Citation graphs help answer questions that a flat list cannot answer:

- Which works anchor a corpus?
- Which papers bridge clusters?
- Which results are connected by shared references?
- Which works are isolated from the rest of the evidence base?

That is why Nexus Scholar has graph packages and graph commands in the public stack. The point is not to draw a pretty network image first. The point is to make graph artifacts part of the review workflow.

## Full Text Needs Legal And Artifact Boundaries

Full-text retrieval should not mean scraping anything available on the web.

The workflow needs to distinguish legal open-access artifacts, failed fetch attempts, source URLs, stored manifests, and later inspection. A failed fetch can still be useful evidence if it records what was attempted and why it failed.

## Exports Should Be Snapshot-Aware

Bibliographic exports are not just output files.

A citable export should be tied to the corpus state that produced it. If the corpus changes after screening or adjudication, that should be visible. Export history, lock state, and snapshot metadata matter because they let another person understand which evidence set an export represents.

## Why The CLI Matters

The CLI is not a side feature. It is the easiest way to make the workflow reproducible before a hosted product is mature.

A researcher or developer should be able to run commands, inspect generated JSON, review artifacts, and repeat a workflow without depending on a private dashboard. The hosted app can make the workflow easier to use later, but the command-line layer keeps the system honest.

## What Comes Next Publicly

The next public work should be narrow and checkable:

- clearer command examples;
- small reproducible workflow demos;
- evidence packets tied to commits and generated artifacts;
- better documentation around provider adapters, screening runs, graph outputs, and exports.

That is the direction I want for Nexus Scholar: not vague research automation, but auditable research workflow infrastructure.

Evidence page: [Nexus CLI public demo evidence](/evidence/nexus-cli-demo-2026-06-01/).
