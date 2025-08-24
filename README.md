# Devlog - Robert

A personal blog and portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Contentlayer](https://www.contentlayer.dev/). 

🌐 **Live Site**: [devlog.vesenet.net](https://devlog.vesenet.net)

## About

This is my personal development blog where I share posts about my projects, homelab setup, and other technical topics that interest me. The site is built using the [Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template with custom modifications.

## Features

- 📝 Blog posts with MDX support
- 🏷️ Tag-based categorization
- 🌙 Dark theme (default)
- 📱 Mobile-responsive design
- 🔍 Search functionality with Kbar
- 💬 Comments via Giscus
- **Analytics**: [Umami](https://umami.is/) & [Cloudflare Analytics](https://www.cloudflare.com/analytics/)
- 🚀 Optimized performance with Next.js App Router

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Contentlayer](https://www.contentlayer.dev/) for MDX processing
- **Typography**: [next/font](https://nextjs.org/docs/app/api-reference/components/font) with font optimization
- **Comments**: [Giscus](https://giscus.app/)
- **Search**: [Kbar](https://github.com/timc1/kbar) command palette
- **Deployment**: [Vercel](https://vercel.com)

## Development

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

Blog posts are written in MDX and stored in `data/blog/`. Each post includes frontmatter with metadata like title, date, tags, and summary.

### Adding a New Post

1. Create a new `.mdx` file in `data/blog/`
2. Add frontmatter at the top:
   ```markdown
   ---
   title: 'Your Post Title'
   date: '2025-01-01'
   tags: ['tag1', 'tag2']
   draft: false
   summary: 'Brief description of your post'
   ---
   ```
3. Write your content using Markdown/MDX

## Customization

Key configuration files:
- `data/siteMetadata.js` - Site metadata and configuration
- `data/authors/default.mdx` - Author information
- `data/projectsData.ts` - Projects page content
- `data/headerNavLinks.ts` - Navigation menu links
- `tailwind.config.js` - Tailwind CSS configuration

## License

[MIT](LICENSE) © Robert Vesterinen

---

Built with the [Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.






## Post

Content is modelled using [Contentlayer](https://www.contentlayer.dev/), which allows you to define your own content schema and use it to generate typed content objects. See [Contentlayer documentation](https://www.contentlayer.dev/docs/getting-started) for more information.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Please refer to `contentlayer.config.ts` for an up to date list of supported fields. The following fields are supported:

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

## Deploy

### GitHub Pages

A [`pages.yml`](.github/workflows/pages.yml) workflow is already provided. Simply select "GitHub Actions" in: `Settings > Pages > Build and deployment > Source`.

### Vercel

The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Netlify

[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

### Static hosting services (GitHub Pages / S3 / Firebase etc.)

Run:

```sh
$ EXPORT=1 UNOPTIMIZED=1 yarn build
```

Then, deploy the generated `out` folder or run `npx serve out` it locally.

> [!IMPORTANT]
> If deploying with a URL base path, like https://example.org/myblog you need an extra `BASE_PATH` shell-var to the build command:
>
> ```sh
> $ EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/myblog yarn build
> ```
>
> => In your code, `${process.env.BASE_PATH || ''}/robots.txt` will print `"/myblog/robots.txt"` in the `out` build (or only `/robots.txt` if `yarn dev`, ie: on localhost:3000)

> [!TIP]
> Alternatively to `UNOPTIMIZED=1`, to continue using `next/image`, you can use an alternative image optimization provider such as Imgix, Cloudinary or Akamai. See [image optimization documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization) for more details.

Consider removing the following features that cannot be used in a static build:

1. Comment out `headers()` from `next.config.js`.
2. Remove `api` folder and components which call the server-side function such as the Newsletter component. Not technically required and the site will build successfully, but the APIs cannot be used as they are server-side functions.

## Frequently Asked Questions

- [How can I add a custom MDX component?](/faq/custom-mdx-component.md)
- [How can I customize the `kbar` search?](/faq/customize-kbar-search.md)
- [Deploy with docker](/faq/deploy-with-docker.md)

## Support

Using the template? Support this effort by giving a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## License

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
