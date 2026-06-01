---
title: Screening Criteria Should Be Versioned
description: "Why inclusion and exclusion criteria in research workflows should be treated as versioned inputs, not informal text."
pubDate: 2026-06-01
tags:
  - Screening
  - Research Workflow
  - Evidence
evidence:
  - nexus-cli-demo-2026-06-01
---

Screening is where a literature review starts turning search results into a corpus.

That step should not depend on informal memory. Inclusion and exclusion criteria need to be written, versioned, and tied to decisions.

If the criteria change, the review changed.

## Criteria Are Inputs

In software terms, criteria are not just documentation. They are inputs to a decision process.

They influence:

- which works are included;
- which works are excluded;
- which works need human review;
- how model-assisted decisions are interpreted;
- how later audit questions are answered.

If criteria are vague or untracked, the decisions become hard to defend.

## A Decision Needs Context

A screening decision should preserve more than `include` or `exclude`.

It should include:

- criteria version or hash;
- screening stage;
- actor identity;
- reason;
- evidence snippets;
- confidence if applicable;
- source decision IDs when decisions are derived or adjudicated.

This matters because screening often happens in layers. A rules-based pass might be followed by model-assisted screening. A human reviewer might later adjudicate disagreements.

Those steps should not overwrite each other.

## Versioning Prevents Confusion

Without versioning, it becomes unclear whether two decisions used the same criteria.

A review team might update criteria after reading the first batch of papers. That can be legitimate, but the change should be explicit.

The system should be able to say:

- this decision used criteria version A;
- this later decision used criteria version B;
- these runs should not be compared as if they used identical inputs.

## Model-Assisted Screening Needs Even More Discipline

If a model is involved, criteria versioning becomes more important.

The model prompt, criteria, run configuration, and stored response policy all affect the result. Treating that as a single label hides too much.

A useful system should preserve the decision trail without exposing private prompts or sensitive research planning publicly.

## The Public Demo Boundary

The public Nexus CLI evidence page includes a human-adjudication example. That example is useful because it shows the shape of a decision record without claiming a production workflow is finished.

That is the right public level for now: show the structure, show the boundary, avoid overstating maturity.

The long-term goal is simple: screening decisions should be explainable after the fact.
