---
title: Citation Graphs Belong In Review Workflows
description: "Why citation graphs should be treated as workflow evidence in literature reviews, not only as visualizations."
pubDate: 2026-06-01
tags:
  - Citation Graphs
  - Systematic Reviews
  - Research Software
evidence:
  - nexus-cli-demo-2026-06-01
---

Citation graphs are often presented as attractive visuals: clusters, nodes, edges, colors, and labels. They can look impressive, but the visual is not the point.

In a serious review workflow, a citation graph should help answer practical questions.

Which papers are central? Which clusters are disconnected? Which included studies cite each other? Which older work keeps reappearing? Which candidate papers came through search, and which came through citation chasing? Which exclusion decisions might need another look because the paper sits close to the included set?

Those questions make citation graphs part of the workflow, not decoration.

## Search Results Are Usually Flat

Most search workflows begin with flat records: title, abstract, authors, year, venue, DOI, and provider metadata. That is enough for screening, but it hides relationships between papers.

Two papers may use the same dataset. One may extend the other. A later benchmark may cite a weak earlier method. A survey may connect terms that do not appear in the same search query.

If the review tool treats every record as isolated, reviewers lose a layer of evidence that could help them understand the field.

Citation graphs add that missing structure.

## Graphs Help With Coverage

Coverage is one of the hardest problems in literature review work. A query can look reasonable and still miss important studies because the vocabulary is different, the title is vague, or the paper is indexed poorly.

A citation graph can expose coverage gaps:

- important papers cited by many included records but absent from the candidate set;
- isolated clusters that suggest the query is mixing unrelated topics;
- review papers that connect terminology across subfields;
- papers that repeatedly appear as references but were excluded too quickly;
- new candidate trails for backward and forward snowballing.

The graph does not make the decision automatically. It gives reviewers a structured way to ask better questions.

## The Graph Needs Provenance

A graph without provenance is dangerous. It can look authoritative while hiding where the data came from.

Every graph artifact should preserve enough context to be evaluated:

- source records used to build the graph;
- provider or metadata source;
- date of retrieval;
- identifier matching rules;
- edge type, such as cites, cited-by, related, or shared reference;
- filters applied before graph generation;
- version of the review corpus.

Without that information, the graph becomes a picture that cannot be audited.

This is where research software needs backend discipline. The graph should be an artifact with metadata, not just a canvas on a page.

## Graphs Should Feed Decisions

The best use of a citation graph is not "look at this network." It is "what decision does this network help with?"

Examples:

- flag included papers that are disconnected from the rest of the corpus;
- suggest candidate papers for manual review;
- compare the graph before and after deduplication;
- show which papers support a specific evidence cluster;
- identify citation paths from a seed paper to newer work;
- explain why a paper was considered during snowballing.

These features make the graph operational. It becomes part of the review trail.

## Keep Automation Humble

A graph can recommend papers, but it should not silently decide inclusion. Citation relationships are signals, not verdicts.

Highly cited papers can still be irrelevant. New papers can be important before they accumulate citations. Some fields have uneven indexing. Some useful papers are poorly connected because of language, venue, or data-source gaps.

The right design is decision support with audit trails:

- show why a paper was suggested;
- let reviewers accept or reject it;
- store the decision;
- preserve the graph version used at the time.

That keeps the human review process visible.

Citation graphs are most valuable when they stop being a final visualization and become a working layer inside the review workflow.
