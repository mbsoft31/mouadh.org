---
title: Public Boundaries For Research Software
description: "A practical way to decide what research software should publish, what should be open source, and what should stay private until it is ready."
pubDate: 2026-06-01
tags:
  - Research Software
  - Open Source
  - Public Evidence
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

If you build research software in public, the hard question is not only "what can be shared?" The harder question is "what can be shared without damaging the work?"

Open source can make a research tool easier to inspect, reproduce, and trust. Public writing can explain decisions that never fit neatly inside a README. Evidence pages can show that a command runs, an export exists, or a workflow produces a real artifact.

But public work can also expose too much. A half-tested research plan can invite weak conclusions. An unpublished method can create priority risk. A raw dataset with unclear license terms can create legal problems. A roadmap can turn into a promise before the product has earned it.

The useful boundary is not secrecy. It is editorial discipline.

## Public Evidence Is Not A Public Diary

A common mistake is treating public work as a chronological dump: every idea, every experiment, every rough plan, every internal decision. That can feel transparent, but it often makes the project harder to understand.

Readers do not need every note. They need the parts that help them evaluate the work:

- what problem the system is trying to solve;
- what workflow it supports;
- what code or artifact can be inspected;
- what claim is already backed by evidence;
- what remains private, unfinished, or unproven.

That distinction matters. A public repository should help a serious reader answer, "Is there engineering substance here?" It should not force them to sort through private thinking, stale branches, and unreviewed claims.

## A Better Sharing Model

For research workflow software, a useful public surface usually includes four layers.

First, publish the stable core. That can be a package, command-line workflow, documentation set, data model, or export format. The core is worth sharing when it has a clear boundary and can be understood without access to private credentials or unpublished research plans.

Second, publish evidence. A short evidence page can show command output, generated files, screenshots, build logs, or a reproducible demo. This is more valuable than vague claims like "supports systematic reviews" or "uses citation graphs."

Third, publish design reasoning. Explain why provider adapters are separated, why deduplication records should be auditable, why screening criteria need versions, or why a CLI belongs beside a web app. These arguments help other developers understand the shape of the system.

Fourth, keep sensitive strategy private until it is mature. That includes exact unpublished experiments, supervisor-sensitive thesis details, credentials, private client data, and raw datasets whose redistribution terms are unclear.

## What Should Stay Private

The private side is not a sign that the work is weak. In serious software and research, some material should be controlled by default.

Keep these out of public writing unless there is a deliberate reason:

- unpublished thesis methods and exact experimental plans;
- private roadmaps and commercial packaging decisions;
- credentials, tokens, API keys, and provider configuration;
- client data, collaborator notes, and internal operational details;
- raw datasets with unclear license or consent boundaries;
- claims that are not yet supported by a reproducible artifact.

The rule is simple: if publishing something creates research priority risk, legal risk, security risk, or false certainty, it does not belong in the public layer yet.

## What Should Be Public

On the other side, hiding everything creates its own problem. If all serious work stays private, nobody can inspect the depth of the system. A profile becomes a set of claims with no trail.

Useful public material includes:

- clean package boundaries;
- command inventories;
- architecture notes;
- demo runs with fake or safe data;
- export examples;
- evidence packets;
- careful writeups of tradeoffs;
- README files that explain status honestly.

That is enough to show competence without exposing every unpublished idea.

## The Practical Test

Before publishing a research-software artifact, ask three questions.

Can a reader learn something concrete from this? If the answer is no, it is probably noise.

Can the claim be checked? If there is no repository, command, screenshot, build log, export, or clear limitation, soften the wording.

Does this expose something that should remain controlled? If yes, publish the boundary and the reasoning instead of the sensitive detail.

That test keeps public work useful. It also prevents a site from becoming either a marketing page or an unfiltered archive.

The strongest public research software does not reveal everything. It reveals enough of the system for a serious reader to trust how the work is being built.
