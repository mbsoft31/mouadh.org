---
title: Provider Adapters Are Product Infrastructure
description: "Why scholarly provider integrations should be treated as core infrastructure instead of scattered API calls."
pubDate: 2026-06-01
tags:
  - Providers
  - Backend
  - Nexus Scholar
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Scholarly search software depends on providers.

OpenAlex, Semantic Scholar, Crossref, local BibTeX, RIS files, and future sources all have different identifiers, metadata fields, pagination behavior, rate limits, and failure modes. If those differences leak everywhere, the system becomes hard to trust.

This is why provider adapters are product infrastructure.

## Providers Have Different Truths

The same work can appear differently across providers.

One source might have a DOI. Another might have an OpenAlex ID. A third might have better abstract data. Author names can differ. Dates can differ. Venue names can be normalized in one source and messy in another.

The software should not pretend these differences do not exist.

Instead, it should preserve provenance:

- provider name;
- provider work ID;
- query used;
- normalized work fields;
- raw payload when needed;
- retrieval timestamp;
- confidence around matching.

## Adapters Protect The Domain

The core domain should not be full of provider-specific details.

A review workflow should reason about works, queries, corpora, screening decisions, references, citations, and exports. It should not know the exact response quirks of each provider API.

Adapters let the domain stay stable while provider clients evolve.

That matters because APIs change. Rate limits change. Search behavior changes. A clean adapter boundary makes those changes manageable.

## Rate Limits Are Part Of The Architecture

Provider integration is not only mapping JSON into objects.

It also includes:

- rate limiting;
- retries;
- backoff;
- caching;
- error classification;
- raw response retention policy;
- test fixtures;
- legal and usage constraints.

If rate limiting is easy to bypass, the integration is not mature. If tests depend on live provider behavior by default, the workflow becomes fragile.

## The Product Value

Good provider infrastructure gives the product better answers.

It helps answer:

- Where did this work come from?
- Which query found it?
- Which provider fields were trusted?
- Why was this record merged with another record?
- Can this search be repeated?
- What changed between two runs?

These are product questions, not only backend questions.

## Why This Matters For Nexus Scholar

Nexus Scholar is built around systematic review workflows. Search is the first step, but it affects everything downstream: deduplication, screening, graph building, full-text retrieval, and bibliography exports.

If provider boundaries are weak, every later step inherits confusion.

That is why provider adapters belong close to the foundation of the system.
