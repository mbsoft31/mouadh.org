---
title: Full Text Retrieval Needs Legal Boundaries
description: "Why full-text workflows should preserve source, license, manifest, and failure evidence instead of scraping blindly."
pubDate: 2026-06-01
tags:
  - Full Text
  - Research Workflow
  - Evidence
evidence:
  - nexus-cli-demo-2026-06-01
---

Full-text retrieval is tempting to automate aggressively.

For research software, that is the wrong instinct. The goal is not to grab every PDF the system can find. The goal is to retrieve legal open-access artifacts, preserve what happened, and make failures inspectable.

That boundary matters.

## A Missing PDF Is Still Evidence

A failed full-text fetch is not useless.

It can record:

- which source was checked;
- which URL was attempted;
- whether the work had an open-access location;
- why retrieval failed;
- when the attempt happened;
- whether a retry is reasonable.

That information helps a reviewer understand the workflow later.

## Legal Source Boundaries Matter

Research tools should not normalize bad behavior.

Full-text retrieval should distinguish:

- legal open-access locations;
- publisher pages;
- repository files;
- metadata-only records;
- failed requests;
- unsupported or unsafe sources.

The system should make it easier to stay within legal and ethical boundaries, not easier to bypass them.

## Manifests Are More Important Than Folders

Saving files into a folder is not enough.

A useful retrieval workflow should write a manifest that explains:

- work ID;
- source URL;
- destination path;
- content type;
- file size;
- status;
- error message if applicable;
- retrieval timestamp.

The manifest turns a file download into an audit artifact.

## Full Text Connects To Screening

Full-text retrieval usually happens after title/abstract screening.

That means the full-text artifact should connect back to the screening result, the run ID, and the project corpus. Otherwise the folder of PDFs becomes disconnected from the review workflow.

This is why full-text commands belong in the same system as search, screening, corpus locks, and exports.

## The Nexus Direction

Nexus Scholar should treat full-text retrieval as a controlled workflow.

The public CLI command surface already has `nexus:fetch-full-text` and the older `nexus:fetch-pdfs` alias. The important direction is not the name of the command. It is the artifact discipline behind it.

Public demos should stay bounded: show the command shape, show a manifest structure, and avoid any source that would create legal or licensing confusion.
