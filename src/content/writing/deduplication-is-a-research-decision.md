---
title: Deduplication Is A Research Decision
description: "Why duplicate removal in systematic reviews should preserve evidence instead of silently merging records."
pubDate: 2026-06-01
tags:
  - Systematic Review
  - Deduplication
  - Evidence
evidence:
  - nexus-cli-demo-2026-06-01
---

Deduplication sounds like a data-cleaning step.

In systematic review software, it is more than that. Deduplication changes the corpus. It changes counts. It changes what gets screened. It affects exports. It can affect the final interpretation of the review process.

That makes deduplication a research decision.

## Silent Merges Are Dangerous

If two records share the same DOI, merging them is usually reasonable. But not every case is that clean.

Records can be similar because:

- titles are nearly identical;
- authors overlap;
- publication year matches;
- venue names differ slightly;
- provider IDs disagree;
- one record is a preprint and another is a published version;
- one provider has incomplete metadata.

If the system silently merges records, the reviewer loses the ability to inspect the decision.

## The Evidence Should Survive

A useful deduplication workflow should preserve why a merge happened.

That can include:

- DOI match;
- exact title match;
- normalized title similarity;
- author overlap;
- year match;
- provider IDs;
- conflict flags;
- raw provider references.

The final corpus can still have one representative record, but the merge evidence should remain available.

## Deduplication Is Connected To Screening

Screening depends on corpus membership.

If duplicate handling changes, screening results can change too. A reviewer might screen one record and not another. A model-assisted screening run might classify only the representative record. Export counts might shift.

That means deduplication should happen with enough traceability to explain later decisions.

## The UI Is Not Enough

A UI can show duplicate groups and merge buttons. That is useful.

But the underlying system should still produce artifacts:

- duplicate group IDs;
- candidate pairs;
- matching reasons;
- selected representative;
- merge decision timestamp;
- actor or rule source.

Those artifacts are what make the workflow auditable.

## The Nexus Scholar Direction

For Nexus Scholar, deduplication should not be treated as an invisible helper. It belongs in the workflow model.

A serious review tool needs to answer:

- What was removed?
- Why was it removed?
- Which source found it?
- Which record survived?
- Can the decision be inspected later?

That is the standard I want the system to move toward.
