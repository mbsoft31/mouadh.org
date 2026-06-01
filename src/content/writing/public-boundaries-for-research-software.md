---
title: Public Boundaries For Research Software
description: "How I decide what belongs in public writing, what belongs in open source, and what should stay private until the work is ready."
pubDate: 2026-06-01
tags:
  - Research Software
  - Open Source
  - Public Evidence
evidence:
  - nexus-scholar-public-surface-2026-05-31
---

Research software has a public side and a private side.

The public side should make the work inspectable. It can include reusable code, documentation, architecture notes, command examples, generated artifacts, and careful evidence packets. The private side protects credentials, client data, unpublished methods, unfinished product decisions, and research plans that should not be exposed before they are ready.

That boundary is not about being vague. It is about being precise.

## Public Work Should Be Useful

Open work is useful when another developer or researcher can inspect it and understand what problem it solves.

For Nexus Scholar, that means public packages, command-line workflows, graph packages, reference-management tooling, and documentation that explains the system. These are useful public surfaces because they show engineering decisions without exposing sensitive research strategy.

Public writing should also be tied to something checkable. A claim can point to a repository, command, artifact, commit, screenshot, or evidence note. If a claim cannot be checked, it should be softened or left out.

## Private Work Should Stay Controlled

Some material should not be public by default:

- unpublished thesis methods;
- exact future experiments;
- private roadmap details;
- credentials and tokens;
- client data;
- internal product operations;
- unclear-license raw datasets;
- sensitive notes from supervisors or collaborators.

This is not weakness. It is normal engineering and research discipline.

## The Problem With Over-Sharing

Over-sharing creates two risks.

The first risk is research risk: a premature idea can be copied, misunderstood, or cited before it has evidence behind it.

The second risk is product risk: a half-formed roadmap can make a serious system look unfinished in the wrong way. It is better to publish the reusable core, the boundary, the workflow, and the evidence than to expose every planning document.

## The Problem With Under-Sharing

Under-sharing also has a cost.

If all work remains private, there is no public proof of depth. People cannot see the architecture, the command surface, the documentation discipline, or the repeated theme across projects.

The right answer is not silence. The right answer is curated public evidence.

## My Working Rule

I use this rule:

> Public work should clarify the system without exposing private research or product risk.

That means Nexus Scholar can be public as a Laravel/PHP research workflow ecosystem. The CLI command surface can be public. The package boundaries can be public. The idea that systematic reviews need audit trails can be public.

But exact unpublished PhD methods, private roadmap work, and sensitive research planning should stay controlled.

This boundary lets the public identity grow without turning the website into a dump of everything.
