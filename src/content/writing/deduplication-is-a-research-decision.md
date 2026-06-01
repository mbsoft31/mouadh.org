---
title: Deduplication Is A Research Decision
description: "Why duplicate handling in literature-review tooling should be auditable instead of treated as a silent cleanup step."
pubDate: 2026-06-01
tags:
  - Deduplication
  - Systematic Reviews
  - Research Software
evidence:
  - nexus-cli-demo-2026-06-01
---

Deduplication sounds like housekeeping. In literature-review tooling, it is closer to a research decision.

When records come from several providers, the same paper can appear with different titles, missing DOI values, inconsistent author lists, translated metadata, venue abbreviations, or slightly different publication years. A tool has to decide whether those records describe one study or several.

That decision affects the corpus. It can change screening counts, PRISMA-style reporting, export files, and downstream analysis.

Treating deduplication as invisible cleanup is a mistake.

## Duplicate Records Are Not Always Obvious

Some duplicates are easy. Two records have the same DOI, same title, same year, and same authors. Those can be merged with high confidence.

Other cases are harder:

- one provider includes a DOI and another does not;
- the title differs because of punctuation or spelling normalization;
- author initials are formatted differently;
- conference and journal versions both exist;
- preprint and final publication are related but not identical;
- one record is a dataset paper and another is a method paper with similar wording.

If a tool merges too aggressively, it can remove a real study. If it merges too weakly, reviewers waste time screening the same work repeatedly.

There is no perfect rule. That is why the decision trail matters.

## Store The Reason, Not Only The Result

A deduplication system should not only keep the winning record. It should preserve why the records were grouped.

Useful evidence includes:

- identifiers that matched, such as DOI, PMID, arXiv ID, or Semantic Scholar ID;
- normalized title similarity;
- author overlap;
- year and venue comparison;
- provider sources;
- confidence score or rule name;
- manual override decisions;
- fields retained from each source record.

This makes the merge inspectable. A reviewer can understand whether the system relied on a strong identifier match or a weaker fuzzy-title rule.

## The Canonical Record Is A Product Choice

After detecting duplicates, the system still needs to decide which metadata becomes canonical.

Should DOI come from Crossref? Should abstracts come from the provider with the longest text? Should author order be preserved from the publisher? Should venue names be normalized? Should all provider IDs be retained?

These are not neutral details. They shape export quality and reviewer trust.

A good system should separate three concepts:

- source records, exactly as providers returned them;
- duplicate groups, with matching evidence;
- canonical records, built from a clear field-selection policy.

That separation prevents the original provider data from disappearing.

## Manual Review Still Matters

Some duplicate groups should be flagged for human review. A tool can suggest likely matches, but it should not pretend every fuzzy match is certain.

Manual review is especially important when:

- the title similarity is high but authors differ;
- the same DOI appears with conflicting metadata;
- a preprint and published version both exist;
- a study has multiple related outputs;
- the record sits near inclusion criteria where losing it would matter.

When a reviewer confirms or rejects a duplicate group, that decision should be stored as part of the review history.

## Deduplication Affects Reporting

Systematic reviews often report how many records were found, how many duplicates were removed, how many records were screened, and how many studies were included.

If deduplication is not auditable, those counts become hard to defend.

A strong review tool should be able to answer:

- how many records came from each provider;
- how many duplicate groups were created;
- which rules created them;
- how many were manually adjusted;
- which records were removed from screening and why.

That is the difference between a convenience feature and research infrastructure.

Deduplication is not just cleaning the database. It is shaping the evidence set. It deserves the same care as any other review decision.
