---
title: mouadh.org
description: Markdown-first Astro site deployed on an Ubuntu VPS with Docker Compose, Nginx, Caddy HTTPS, RSS, sitemap, and public evidence pages.
pubDate: 2026-06-01
tags:
  - Astro
  - Docker
  - Caddy
  - Deployment
status: Live public identity site
repo: https://github.com/mbsoft31/mouadh.org
links:
  - label: Live site
    href: https://mouadh.org
  - label: Source repo
    href: https://github.com/mbsoft31/mouadh.org
---

This site is part of the public identity work, but it is also a small deployment artifact.

It is a Markdown-first Astro site with content collections for writing, projects, and evidence packets. The production deployment runs on an Ubuntu VPS from a GitHub clone at `/srv/mouadh.org`.

## Production Shape

- Astro static build.
- Nginx container serving generated files.
- Caddy container handling HTTP, HTTPS, and Let's Encrypt certificates.
- Docker Compose as the deployment contract.
- RSS and sitemap enabled for long-term publishing.

## What This Proves

This is not a portfolio mockup hosted only in a local dev server. It is a live public site with a reproducible deployment path:

```bash
git pull
docker compose up -d --build
```

That matters because the site is meant to become a durable public archive for technical notes, project evidence, and research-safe updates.

## Current Role

The site should stay focused. It should not become a generic personal-brand page. The useful role is:

- explain the current technical direction;
- link to flagship repositories;
- publish serious notes tied to code and evidence;
- preserve public/private boundaries around research and product work.
