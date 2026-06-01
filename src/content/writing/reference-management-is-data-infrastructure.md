---
title: Reference Management Is Data Infrastructure
description: "Why citations, bibliographies, identifiers, and exports should be treated as core data infrastructure in research tools."
pubDate: 2026-06-01
tags:
  - References
  - Research Software
  - Data
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Reference management is often treated as the last step of research: collect papers, write the manuscript, export citations, fix formatting.

For research software, that view is too small.

References are not just bibliography entries. They are the identifiers, relationships, provenance, and export records that connect a review workflow to the scholarly record. If reference management is weak, the whole workflow becomes harder to trust.

## Identifiers Are The Backbone

A paper can appear under several forms: DOI, PMID, PMCID, arXiv ID, Semantic Scholar ID, OpenAlex ID, publisher URL, or local file path.

Those identifiers are how tools connect provider records, deduplicate candidates, retrieve metadata, find full text, build citation graphs, and export bibliographies.

A research system should not treat identifiers as loose strings scattered across records. It should model them deliberately:

- identifier type;
- normalized value;
- source provider;
- confidence or verification state;
- original value when different from normalized value;
- timestamp or retrieval context when useful.

This is data infrastructure. Without it, every downstream feature becomes less reliable.

## Bibliography Export Is Not A Formatting Detail

Exporting BibTeX, RIS, CSV, or another format may look like a convenience feature. In a review workflow, it is part of the evidence chain.

An export should be tied to:

- the corpus version;
- included and excluded state when relevant;
- selected fields;
- generation time;
- export format;
- tool version or command;
- warnings about missing metadata.

That makes the export explainable. If someone later asks why a bibliography contains a record, the team can trace it back to the review workflow.

## Citation Quality Depends On Earlier Decisions

Bad reference management usually shows up late: broken BibTeX, missing DOIs, inconsistent author names, duplicate records, or wrong years.

But the cause is often earlier:

- provider metadata was normalized poorly;
- duplicate records were merged without preserving source fields;
- identifiers were overwritten;
- manual corrections were not tracked;
- exports pulled from stale data.

Fixing those problems at the end is painful. A better system treats reference quality as part of the pipeline from the first provider search.

## Manual Corrections Need A Trail

Researchers often correct metadata manually. That is normal. Provider data is imperfect.

The system should preserve those corrections:

- what field changed;
- original value;
- corrected value;
- who changed it;
- why it changed if a reason is known;
- whether the correction applies only locally or should influence future exports.

Manual correction without a trail can create confusion later. Manual correction with a trail becomes part of the research record.

## References Connect To Graphs And Full Text

Reference management also feeds other workflow layers.

Citation graphs depend on identifiers and relationships. Full-text retrieval depends on links and open-access metadata. Screening depends on stable record identity. Exports depend on clean fields.

If references are treated as peripheral, these features become fragile.

If references are treated as infrastructure, the system gains a stable backbone.

## The Practical Design Rule

Do not design citations only for the final manuscript. Design them for the whole workflow.

That means preserving identifiers, source metadata, corrections, duplicate groups, export history, and links to artifacts. The bibliography is only one output of that infrastructure.

For review tools, reference management is not a plugin at the end. It is one of the core data layers that makes the review explainable.
