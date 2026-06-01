# Deployment Checklist

Canonical domain: `mouadh.org`.

Secondary domains:

- `mouadh.info`: redirect to `https://mouadh.org`.
- `mouadh.shop`: park or redirect to `https://mouadh.org` until there is a real product/shop surface.
- `mouadh.tech`: redirect to `https://mouadh.org` if still owned and not needed as a developer alias.

## Before DNS Changes

1. Verify Hostinger domain registration email for:
   - `mouadh.org`
   - `mouadh.info`
   - `mouadh.shop`
2. Inspect the existing public GitHub repo `mbsoft31/mouadh.tech` before overwriting or force-pushing anything.
3. Decide the final deploy target:
   - GitHub Pages;
   - Cloudflare Pages;
   - Hostinger static hosting.

## Recommended Deploy Path

Use Cloudflare Pages or GitHub Pages for the Astro static site.

Preferred operating model:

1. Git repository contains the Astro source.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. Primary custom domain: `mouadh.org`.
5. Redirect aliases point to the primary domain.

## DNS Intent

For a static host, configure:

- `mouadh.org` apex to the static host target.
- `www.mouadh.org` as an alias to the same site.
- `mouadh.info`, `www.mouadh.info`, `mouadh.shop`, and `www.mouadh.shop` as redirects, not separate sites.

Do not change MX records unless setting up email intentionally.

## Hostinger DNS Records For VPS Deploy

Assigned nameservers:

- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

Current parking IP observed before update:

- `mouadh.org` -> `2.57.91.91`
- `mouadh.info` -> `2.57.91.91`
- `mouadh.shop` -> `2.57.91.91`

VPS target:

- `31.97.193.211`
- reverse DNS: `srv907650.hstgr.cloud`

Set these records for the canonical domain:

| Domain | Type | Name/Host | Value/Target | TTL |
| --- | --- | --- | --- | --- |
| `mouadh.org` | A | `@` | `31.97.193.211` | 300 or default |
| `mouadh.org` | A | `www` | `31.97.193.211` | 300 or default |

For aliases, use either Hostinger redirects or point them to the same VPS and configure server-side redirects:

| Domain | Type | Name/Host | Value/Target | TTL |
| --- | --- | --- | --- | --- |
| `mouadh.info` | A | `@` | `31.97.193.211` | 300 or default |
| `mouadh.info` | A | `www` | `31.97.193.211` | 300 or default |
| `mouadh.shop` | A | `@` | `31.97.193.211` | 300 or default |
| `mouadh.shop` | A | `www` | `31.97.193.211` | 300 or default |

If Hostinger already has CNAME records for `www`, either keep `www -> @` if supported or replace with the A records above. Do not create duplicate conflicting records for the same host/type.

Server-side redirect intent:

- `http://mouadh.info/*` -> `https://mouadh.org/*`
- `https://mouadh.info/*` -> `https://mouadh.org/*`
- `http://mouadh.shop/*` -> `https://mouadh.org/*`
- `https://mouadh.shop/*` -> `https://mouadh.org/*`

## Validation

After deploy:

```bash
npm run build
```

Then verify:

- `https://mouadh.org/`
- `https://mouadh.org/writing/`
- `https://mouadh.org/projects/`
- `https://mouadh.org/evidence/`
- `https://mouadh.org/rss.xml`
- `https://mouadh.org/sitemap-index.xml`

Check that canonical URLs and RSS links use `https://mouadh.org`.

## Docker VPS Option

This repo includes a minimal Docker deployment:

- `Dockerfile`: builds the Astro static site and serves it with Nginx.
- `compose.yaml`: runs the site on `127.0.0.1:8080`.
- `nginx.conf`: static-file server config.

Expected server pattern:

1. Existing public reverse proxy terminates HTTPS for `mouadh.org`.
2. Reverse proxy forwards to `http://127.0.0.1:8080`.
3. This app container serves static files only.

Do not bind this container directly to public port 80 until the VPS proxy state is inspected.
