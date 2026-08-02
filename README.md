# Gemini Hardscape

Built with [Payload CMS](https://payloadcms.com) 3 + [Next.js](https://nextjs.org).

## Content model

- **Projects** — `title`, `heroImage`, `gallery` (array of images), `location`, `year`, `categories` (relationship, many), SEO meta, slug, drafts/versions
- **Categories** — `title`, `image`, `order`, slug
- **Services** — `icon`, `title`, `description`
- **Testimonials** — `author`, `quote`, `location`
- **Media** — uploads (images/assets)
- **Users** — admin auth (`name`)
- **Home** (global) — `slides` array (`image`, `title`, `subtitle`)

## Author

Emmanuel Valenzuela
