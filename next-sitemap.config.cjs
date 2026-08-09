const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  // Static pages (/, /about-us, /contact) are picked up automatically.
  // /projects is dynamic (reads pagination searchParams) so the crawler
  // skips it — added explicitly below. Dynamic `[slug]` routes can't be
  // enumerated here, so they're excluded and served instead by the custom
  // sitemap routes below, which pull real slugs from Payload.
  exclude: [
    '/projects-sitemap.xml',
    '/categories-sitemap.xml',
    '/admin/*',
    '/api/*',
    '/next/*',
    '/projects/*',
  ],
  additionalPaths: async () => [{ loc: '/projects', changefreq: 'daily', priority: 0.7 }],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/admin/*', '/api/*'],
      },
    ],
    additionalSitemaps: [`${SITE_URL}/projects-sitemap.xml`, `${SITE_URL}/categories-sitemap.xml`],
  },
}
