# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## SEO Meta Tag Guidelines

All route pages use `generateSEOTags()` from `app/lib/utils/seo.ts` to inject SEO meta tags (title, description, Open Graph, Twitter Card) via the `meta` export.

### Meta Description Rules

- **Keep descriptions under 155 characters** — Google truncates or replaces longer descriptions with auto-generated snippets from page content
- **Use imperative, benefit-driven language** — describe what the page offers, not just what the company does
- **Match visible page content** — Google is more likely to use your meta description if it closely reflects the actual text on the page
- **No duplicate descriptions** — each route must have a unique description

### Meta Title Rules

- **Keep titles under 60 characters** — Google truncates longer titles
- **Format**: `Page Name | Datawise Africa` or `Datawise Africa - Page Name`
- **Include primary keyword** near the start of the title

### Verifying SEO Tags

- SSR renders all meta tags in the initial HTML response — verify with: `curl -s https://datawiseafrica.com | grep 'meta name="description"'`
- After deploying changes, request re-indexing via **Google Search Console** (URL Inspection > Request Indexing)
- Use `robots.txt` and `sitemap.xml` (both configured) to guide crawlers

### `generateSEOTags()` Usage

```ts
export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Page Title | Datawise Africa', // < 60 chars
      description: 'Concise page description under 155 characters.',
      url: href('/page-path'),
      keywords: 'comma, separated, keywords',
      image: '/optional-image.png', // defaults to datawise logo
    }),
  ];
}
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
