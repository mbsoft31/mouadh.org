---
title: Screening Criteria Should Be Versioned
description: "Why inclusion and exclusion criteria in review software should be versioned, auditable, and tied to reviewer decisions."
pubDate: 2026-06-01
tags:
  - Screening
  - Systematic Reviews
  - Audit Trails
evidence:
  - nexus-cli-demo-2026-06-01
---

Screening criteria change more often than review teams like to admit.

Early in a review, the team may discover that a keyword is too broad, a study type is ambiguous, or a dataset condition needs clarification. Sometimes the change is small. Sometimes it affects many decisions.

If the tool only stores the latest criteria, older screening decisions become hard to interpret.

That is why screening criteria should be versioned.

## A Decision Needs Its Rule Context

A reviewer decision is not just "include" or "exclude." It is a decision made under a particular rule set.

For example:

- criterion version 1 may exclude papers without explicit dataset names;
- criterion version 2 may allow papers where the dataset is described but not named;
- criterion version 3 may split a broad exclusion reason into two clearer categories.

If decisions are stored without the criterion version, the review history becomes ambiguous. A paper excluded last week may look inconsistent with the rules today, even though the reviewer followed the rule that existed at the time.

## Versioning Does Not Have To Be Heavy

Criteria versioning can be simple.

A useful model might include:

- version number;
- date created;
- author or reviewer group;
- inclusion criteria;
- exclusion criteria;
- reason-code definitions;
- notes explaining what changed;
- active or retired status.

Each screening decision should reference the criteria version used.

That is enough to preserve context without turning the workflow into a formal compliance system.

## Changes Should Trigger Review Questions

When criteria change, the tool should help reviewers understand the impact.

Useful questions include:

- which records were screened under the older version;
- which exclusion reasons were affected;
- whether any decisions need re-checking;
- whether conflicts increased after the change;
- whether a migration note is needed for reporting.

The tool does not need to automatically rescreen everything. It needs to make the effect visible.

## Versioned Criteria Improve Team Collaboration

In multi-reviewer work, criteria drift can create disagreement. Two reviewers may think they are applying the same rule while interpreting it differently.

Versioned criteria help by giving the team a shared reference. When conflicts appear, the discussion can refer to a concrete rule version rather than memory.

This is especially useful when onboarding a new reviewer. Instead of explaining screening logic informally, the team can point to the current version and the change history.

## Reporting Becomes Stronger

Review reports often need to explain inclusion and exclusion decisions. If the criteria changed during screening, that should be documented.

A tool with versioned criteria can support better reporting:

- when each version was active;
- why the criteria changed;
- how many records were screened under each version;
- which records were re-reviewed;
- whether the final included set reflects the latest criteria.

That gives the review process a defensible trail.

## The Core Rule

Do not store screening decisions as isolated labels. Store them as decisions made by a reviewer, on a record, under a criteria version, with a reason.

That structure turns screening from a set of checkboxes into an auditable review workflow.
