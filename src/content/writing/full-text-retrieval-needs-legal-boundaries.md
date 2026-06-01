---
title: Full-Text Retrieval Needs Legal Boundaries
description: "Why research tools should separate metadata, lawful full-text access, local artifacts, and user-controlled retrieval."
pubDate: 2026-06-01
tags:
  - Research Software
  - Full Text
  - Compliance
evidence:
  - nexus-cli-demo-2026-06-01
---

Full-text retrieval is one of the most useful features a literature-review tool can offer. It is also one of the easiest places to create legal and operational trouble.

Metadata is usually safe to store and move within reasonable provider terms. Full-text PDFs are different. They can be open access, subscription access, author manuscripts, publisher versions, institutional copies, or files with unclear redistribution rights.

A research tool should not treat all of those as the same kind of data.

## Metadata And Full Text Are Different Products

It is tempting to design a review tool as if every record is just a paper object with fields and a PDF. That simplification breaks down quickly.

The metadata may come from Crossref, PubMed, Semantic Scholar, OpenAlex, arXiv, or another provider. The full text may come from a publisher, an open repository, a local upload, an institutional proxy, or the user's own files.

Those sources have different rules.

A safe system separates:

- bibliographic metadata;
- provider identifiers;
- open-access links;
- user-uploaded files;
- locally cached artifacts;
- retrieval attempts and outcomes;
- license or access notes when available.

That separation makes the product easier to operate responsibly.

## Retrieval Should Be Explicit

Automatic PDF fetching can feel convenient, but silent retrieval is risky. Users should be able to see what the tool is doing and why.

A good retrieval workflow records:

- the source URL or provider used;
- whether the file was open access;
- whether a user uploaded the file manually;
- retrieval time;
- content type and size;
- checksum where useful;
- failure reason when retrieval fails;
- whether the artifact is stored, linked, or only referenced.

That evidence is not bureaucratic overhead. It helps users explain how a local corpus was assembled.

## Do Not Build A Shadow Library By Accident

The worst version of full-text retrieval is a tool that downloads and redistributes PDFs without clear rights. That may look useful in a demo, but it creates legal risk and damages trust.

A better design supports lawful workflows:

- store metadata even when full text is unavailable;
- prefer open-access sources where terms allow;
- let users attach files they are allowed to use;
- record retrieval provenance;
- avoid redistributing private PDFs publicly;
- make export behavior explicit.

This still gives researchers practical help without pretending every paper can be treated as free content.

## Local Artifacts Are Valuable

Keeping legal boundaries does not mean avoiding artifacts. Local artifacts are important for reproducibility and review work.

Examples:

- a manifest of attempted PDF retrievals;
- links to open-access versions;
- extracted text produced from user-authorized files;
- checksums for local files;
- notes about unavailable full text;
- source-specific retrieval logs.

These artifacts are useful even when the system cannot store or share the PDF itself.

The key is to preserve the evidence of the retrieval process, not to blur the rights around the content.

## Product Design Should Make The Boundary Visible

The UI and CLI should not hide the legal state of full text.

A reviewer should be able to distinguish:

- no full-text attempt;
- open-access link found;
- retrieval failed;
- user uploaded file;
- local artifact exists;
- file is restricted to the private workspace;
- only metadata is available.

Those states affect what can be exported, shared, or included in a public evidence packet.

Full-text retrieval is not only a technical feature. It is a boundary-management feature. Research tools that handle it well will be more useful because they are more careful.
