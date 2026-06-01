---
title: Reference Management Is Data Infrastructure
description: "Why BibTeX, RIS, CSL-JSON, EndNote XML, and export history are backend concerns in research workflow software."
pubDate: 2026-06-01
tags:
  - References
  - Bibliography
  - Backend
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Reference management can look like a formatting problem.

It is not only formatting. In research workflow software, references are data infrastructure.

Every review eventually needs to export, cite, inspect, share, or archive the works that survived the workflow. If reference handling is weak, the final output becomes fragile.

## Formats Carry Assumptions

BibTeX, RIS, CSL-JSON, and EndNote XML all represent bibliographic data differently.

They differ in:

- field names;
- author representation;
- date structure;
- identifiers;
- journal and conference metadata;
- escaping rules;
- support for abstracts, keywords, and notes.

A serious reference workflow needs to respect those differences instead of treating export as a string template.

## Imports Need Provenance

When a user imports references, the system should remember where they came from.

An imported BibTeX file is different from a provider search result. A manually corrected reference is different from a raw provider payload. A citation imported from Zotero may have fields that need normalization before deduplication.

Import provenance helps explain later decisions.

## Exports Should Be Tied To Corpus State

An export file should answer a basic question:

> Which corpus state produced this bibliography?

If the corpus changes after screening, deduplication, or human adjudication, a previous export may no longer represent the current review.

That is why export history matters. The system should preserve:

- project ID;
- export format;
- generated filename;
- timestamp;
- lock or snapshot state when available;
- whether the export is final or only a working artifact.

## Reference Tools Belong Near The Workflow

Reference management should not be bolted on at the end.

It interacts with:

- provider imports;
- deduplication;
- corpus locks;
- citation graphs;
- final bibliography;
- audit trail.

For Nexus Scholar, this is why `refmanager` is part of the public stack. It supports the research workflow rather than sitting outside it.

## The Engineering Point

The backend system should treat bibliographic data as structured data.

That means parsers, serializers, validators, normalized identifiers, and test fixtures. It also means clear limits: an export can be well-formed without claiming the whole review is finished.

Good reference management is quiet infrastructure. It becomes visible only when it fails. The goal is to make it reliable enough that the research workflow can trust it.
