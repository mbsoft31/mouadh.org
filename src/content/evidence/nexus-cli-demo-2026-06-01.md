---
title: Nexus CLI Public Demo Evidence - 2026-06-01
description: "Local verification evidence for the Nexus Scholar CLI public surface: command inventory, status output, screening example shape, export history, and graph artifact presence."
pubDate: 2026-06-01
tags:
  - Evidence
  - Nexus Scholar
  - CLI
sources:
  - nexus-scholar/nexus-cli
  - local command output
  - public GitHub repository
---

This packet supports the article [What Nexus Scholar Is Actually Trying To Solve](/writing/what-nexus-scholar-is-trying-to-solve/).

It verifies that the public Nexus CLI repository is not just a README concept. The local checkout exposes concrete Laravel Artisan commands around search, screening, corpus locks, full-text artifacts, citation graphs, exports, and job/read APIs.

Repository:

- `https://github.com/nexus-scholar/nexus-cli`

## Verification Context

Checked on 2026-06-01 from a clean local `nexus-cli` checkout.

The multi-repo workspace reported:

```text
nexus-cli: master (clean)
```

No external provider search, scraping, or LLM call was run for this public evidence packet.

## Command Inventory

Command:

```bash
php artisan list nexus
```

Observed Nexus namespace commands:

```text
nexus:corpus-lock          Lock a Nexus Scholar project corpus and create an immutable corpus snapshot.
nexus:export-bibliography  Export project bibliography through nexus-scholar/core and record lock/snapshot metadata.
nexus:exports              Read export history records from nexus-scholar/core.
nexus:fetch-full-text      Retrieve legal open-access full text for included papers through nexus-scholar/core.
nexus:fetch-pdfs           Retrieve legal open-access full text for included papers through nexus-scholar/core.
nexus:full-text-artifacts  Read full-text fetch artifacts recorded by nexus-scholar/core.
nexus:graph                Build and analyze a citation graph from a search run JSON using nexus-scholar/core.
nexus:ingest               Create wiki paper pages from a run JSON file without overwriting existing pages.
nexus:jobs                 Read Nexus job lifecycle records from nexus-scholar/core.
nexus:run-stats            Show quick stats for a run JSON (total, per provider, per query).
nexus:screen               Screen run results using inclusion/exclusion criteria and write storage/screens/{run_id}.json.
nexus:screen-adjudicate    Record human adjudication decisions for a locked Nexus Scholar project.
nexus:screen-compare       Compare two persisted Nexus Scholar screening runs.
nexus:search               Run scholarly search queries through nexus-scholar/core and save JSON run files.
nexus:status               Shows live research dashboard.
nexus:wiki-init            Initialize the docs/wiki/ folder structure and seed files.
```

## Status Command

Command:

```bash
php artisan nexus:status
```

Observed output included:

```text
Nexus Research Dashboard

Current Week: Week 5 (started 2026-05-01)

Dataset & Baseline: storage/baseline.json not found.

Latest Search Run: No runs executed yet.

Wiki Health:
Papers: 0
Concepts: 0
Synthesis: 0
```

Interpretation: the command exists and reports workspace state without making a provider call. The local checkout used for this packet did not have a current latest search run pointer.

## Human Adjudication Shape

Command:

```bash
php artisan nexus:screen-adjudicate --example
```

Observed example format:

```yaml
stage: title_abstract
criteria_hash: tomato-label-efficiency-v1
run_id: human-adjudication-2026-05-22
run_name: TomatoMAP human adjudication
decisions:
  - work_id: 00000000-0000-0000-0000-000000000001
    decision: include
    reason: The title and abstract directly study tomato instance segmentation with label-efficient learning.
    evidence:
      - tomato instance segmentation
      - limited annotation budget
    exclusion_basis: []
    confidence: 1.0
    source_decision_ids:
      - previous-screening-decision-id
```

Interpretation: screening is treated as an auditable decision record, not only a boolean label.

## Export History Read Surface

Command:

```bash
php artisan nexus:exports --project=tomatomap_label_efficiency --limit=5
```

Observed one bibliography export history row:

```text
Type: bibliography
Format: csv
Project: tomatomap_label_efficiency
Filename: exports/tomatomap-locked-smoke-20260522.csv
Created: 2026-05-22T13:48:04+00:00
```

Interpretation: export history is part of the CLI surface. This supports the claim that citable outputs should be tied to workflow state.

## Graph Artifact Evidence

Existing generated artifact checked:

```text
storage/graphs/command-demo-citation.json
```

The artifact includes:

```json
{
  "project_id": "nexus_cli_command_demo",
  "type": "citation",
  "input": {
    "works": 5,
    "relationships": 467,
    "references": 467,
    "citing_relationships": 0
  }
}
```

Interpretation: Nexus CLI has a graph artifact path connected to works, references, citation relationships, and metrics.

## Reproducible Local Check

For a developer machine with PHP and Composer:

```bash
git clone https://github.com/nexus-scholar/nexus-cli.git
cd nexus-cli
composer install
php artisan list nexus
php artisan nexus:status
php artisan nexus:screen-adjudicate --example
```

Provider-backed search, full-text retrieval, and model-assisted screening require configured credentials and should be demonstrated separately with intentionally bounded inputs.

## Claim Boundary

Supported by this packet:

- Nexus CLI exposes real Laravel Artisan commands for research workflow operations.
- The command surface covers search, screening, human adjudication, graph artifacts, full-text artifact reads, export history, jobs, and corpus locking.
- The public demo can be shown without exposing credentials or unpublished research methods.

Not claimed here:

- production adoption;
- complete product readiness;
- benchmark performance;
- field deployment;
- private thesis methods;
- active external provider or LLM results from this specific verification run.
