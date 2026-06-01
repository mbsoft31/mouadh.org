---
title: Citation Graphs Belong In Review Workflows
description: "Why citation graphs should be treated as review artifacts, not decorative network images."
pubDate: 2026-06-01
tags:
  - Citation Graphs
  - Graph Algorithms
  - Nexus Scholar
evidence:
  - nexus-cli-demo-2026-06-01
---

Citation graphs are often presented as visuals.

Visuals can help, but the deeper value is not the image. The deeper value is the structure: works, references, citing relationships, clusters, paths, centrality, and disconnected components.

In systematic review workflows, citation graphs should be artifacts.

## A Flat List Hides Structure

A search result list can show titles, authors, years, and abstracts.

It cannot easily show:

- which works cite each other;
- which papers anchor a cluster;
- which works bridge topics;
- which papers are isolated;
- which search results share references;
- which evidence areas are under-connected.

These are graph questions.

## Graphs Help With Inspection

Citation graphs are not a replacement for screening. They are a way to inspect a corpus.

They can help a reviewer notice:

- a major work missing from the current search;
- a cluster that may need different keywords;
- a set of results that are connected by shared methods;
- outliers that should be checked carefully;
- citation patterns that explain why certain papers appear central.

The graph does not make the research decision. It helps expose structure behind the decision.

## Algorithms Need Boundaries

Graph algorithms are useful only if their meaning is clear.

PageRank, centrality, shortest paths, connected components, co-citation, and bibliographic coupling all answer different questions. A tool should not throw metrics at users without explaining what those metrics mean in the workflow.

For Nexus Scholar, this is why generic graph packages and research-domain graph builders should stay separated.

The generic package can handle graph primitives and algorithms. The research workflow layer should decide what a citation, reference, co-citation relationship, or bibliographic coupling edge means.

## The Artifact Matters

A graph command should write an artifact, not only print a summary.

That artifact can include:

- project ID;
- graph type;
- input work count;
- relationship count;
- nodes;
- edges;
- metrics;
- generated time.

This makes the graph inspectable later.

## The Practical Direction

The public Nexus CLI evidence already shows a citation graph artifact path.

The next step is to publish small demos that make the graph easier to understand: one input run, one generated graph, one explanation of what the graph can and cannot prove.

That is a better public artifact than a vague claim about AI-powered literature review.
