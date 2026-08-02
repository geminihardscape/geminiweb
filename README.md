# Gemini Hardscape

Marketing website for Gemini Hardscape, built on [Payload CMS](https://payloadcms.com) 3 (self-hosted admin + API) and [Next.js](https://nextjs.org) (App Router). This started from the official Payload Website Template and has since been trimmed down and customized for a single-business, project-portfolio site — there is no blog/Posts collection or generic Pages builder.

## Quick Start

1. `cp .env.example .env` and fill in `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SERVER_URL`, `CRON_SECRET`, `PREVIEW_SECRET`
2. `pnpm install`
3. `pnpm dev`
4. Open `http://localhost:3000` for the site, `http://localhost:3000/admin` for the Payload admin panel

Postgres is required (`DATABASE_URL`). Use `docker-compose up` to run a local Postgres instance, or point `DATABASE_URL` at a hosted database (e.g. Neon).

## Site structure

Routes live under `src/app/(frontend)`, split into two route groups:

- `(with-footer)` — pages that render the site footer
  - `/about-us` — static company copy (not CMS-driven)
  - `/contact` — contact form (Payload form-builder), also embedded at the bottom of the home page
  - `/projects` — paginated grid of all published projects
  - `/projects/[slug]` — single project detail: hero image, gallery, location/year/scope
  - `/projects/category/[slug]` — projects filtered by category, with an empty state when a category has no projects
- `/` (home) — hero slider, services, categories, testimonials, contact form
- `(sitemaps)/projects-sitemap.xml` — generated sitemap for projects

The Payload admin lives under `(payload)`, at `/admin`, with the REST/GraphQL API mounted at `/api`.

Shared UI lives in `src/components` (`Button`, `Title`, `Subtitle`, `EmptyState`, `Media`, `Header`/`Footer`/`Nav`, shadcn-style primitives in `components/ui`). Route-specific components live in `_components` folders next to the pages that use them (e.g. `projects/_components/ProjectCard`, `Pagination`, `Meta`).

## Content model

Defined in `src/payload.config.ts` and `src/collections/*`:

- **Projects** — `title`, `heroImage`, `gallery` (array of images), `location`, `year`, `categories` (relationship, many), SEO meta group, drafts/versions, slug. Revalidates the frontend on change via `afterChange`/`afterDelete` hooks.
- **Categories** — `title`, `image`, `order` (controls sidebar/display order), slug. Uses the nested-docs plugin.
- **Services** — `icon`, `title`, `description`. Shown on the home page.
- **Testimonials** — `author`, `quote`, `location`. Shown on the home page.
- **Media** — uploads collection (images/assets) used across the other collections.
- **Users** — auth-enabled, admin access only (`name` field).
- **Home** (global) — `slides` array (`image`, `title`, `subtitle`) powering the home page hero slider.

There is intentionally no `Posts` or generic `Pages` collection, and no `Header`/`Footer` globals — nav links are hardcoded in `src/components/Nav`, and the About Us page content is hardcoded rather than CMS-driven.

Plugins enabled: `@payloadcms/plugin-seo`, `@payloadcms/plugin-nested-docs` (on Categories), `@payloadcms/plugin-form-builder` (contact form, with payments disabled and a custom admin table for viewing submissions).

## Development

### Working with Postgres

The Postgres adapter uses `push: true` in development, so schema changes from editing collection configs apply automatically — no migrations needed locally. Set `push: false` and run migrations (`pnpm payload migrate:create` / `pnpm payload migrate`) when pointed at a production database.

### Useful scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build (also regenerates the sitemap via `postbuild`)
- `pnpm generate:types` — regenerate `src/payload-types.ts` after changing a collection/global
- `pnpm lint` / `pnpm lint:fix`
- `pnpm test` — runs `test:int` (Vitest) then `test:e2e` (Playwright)

### Docker

`docker-compose up` spins up a local Postgres instance using the `.env` file in the project root. Combine with `pnpm dev` for local development.

## Production

1. `pnpm build`
2. `pnpm payload migrate` (if deploying against a database that isn't using `push: true`)
3. `pnpm start`
