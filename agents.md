# Agents

This document describes the automated agents, workflows, and project conventions for the Datawise Frontend v2.

## Project Overview

Datawise Africa corporate website — a React-based web application for the company's services, products, tools, careers, partnerships, and contact pages.

## Tech Stack

- **Framework**: React 19 + React Router 7 (SSR enabled) + Vite 7
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4 + shadcn/ui + Radix UI
- **State**: Redux Toolkit + redux-persist (auth, theme, filters, modals)
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **API Client**: Axios
- **Package Manager**: pnpm 9 (Node >= 20)
- **Deployment**: Netlify (SSR)

## Commands

```bash
pnpm dev            # Start dev server
pnpm build          # Production build (react-router build)
pnpm start          # Serve production build
pnpm lint           # react-router typegen && tsc --noEmit && eslint .
pnpm lint:fix       # react-router typegen && eslint . --fix
pnpm format         # Prettier --write .
pnpm test           # Vitest (watch mode)
pnpm test:run       # Vitest single run
pnpm test:coverage  # Vitest with coverage
pnpm typecheck      # react-router typegen && tsc
pnpm release patch  # Bump patch version, changelog, commit, tag
pnpm release minor  # Bump minor version
pnpm release major  # Bump major version
pnpm release:dry    # Dry run — preview without changes
```

## Project Structure

```
app/
  routes/              # File-based routing (React Router 7)
    home.tsx           # Landing page
    about-us.tsx       # About page
    services.tsx       # Services page
    products.tsx       # Products page
    datalab.tsx        # Data lab page
    careers.tsx        # Careers listing
    career-description.$slug.tsx  # Career detail (dynamic)
    partners.tsx       # Partners page
    become-a-partner.tsx
    contact-us.tsx     # Contact page
    privacy-policy.tsx
    sitemap.xml.ts     # Dynamic sitemap
  components/
    ui/                # shadcn/ui components (button, card, input, etc.)
    form-fields/       # Reusable form field wrappers
    header/            # Site header/navigation
    footer/            # Site footer
    homepage/          # Homepage sections
    about-us/          # About page components
    partners/          # Partners page components
    motion/            # Framer Motion animation wrappers
    theme-editor.tsx   # Floating gear button for live theme editing
    error-boundary.tsx
    loading-indicator.tsx
    data-table.tsx
  features/
    contact-us/        # Contact form queries, mutations, query-keys
    partners/          # Partners queries, mutations, query-keys
  store/
    index.ts           # Redux store config with persist
    storage.ts         # SSR-safe storage adapter (noop on server)
    theme-sync.tsx     # Syncs Redux theme state to CSS custom properties
    slices/
      theme-slice.ts   # Dark mode, hue values, border radius, fonts
      auth-slice.ts    # Token, user, isAuthenticated
      career-slice.ts  # Careers state
      table-filters-slice.ts  # Table filter state
      modal-slice.ts   # Type-safe keyed modals: useAppModal<T>('key')
  lib/
    api/client.ts      # Axios instance with auth interceptor
    env.ts             # Zod-validated environment variables
    providers/
      store-provider.tsx  # Redux + PersistGate (SSR-safe)
      query-provider.tsx  # TanStack Query + DevTools (lazy, dev-only)
    utils/seo.ts       # SEO meta tag generation
  root.tsx             # App entry: StoreProvider > QueryProvider > Outlet
  app.css              # Tailwind + shadcn CSS variables
```

## Key Patterns

### SSR Compatibility

- SSR is **enabled** (`react-router.config.ts: ssr: true`)
- `redux-persist` uses a noop storage adapter on the server (`app/store/storage.ts`)
- `PersistGate` and `ThemeSynchronizer` are skipped during SSR
- Always guard browser APIs with `typeof window !== 'undefined'`

### State Management

- **Redux Toolkit** for global state (theme, auth, careers, filters, modals)
- **Persisted slices**: `theme` and `auth` (via redux-persist whitelist)
- **Keyed modals**: `useAppModal<T>('key')` returns `{ isOpen, data, open, close, toggle }`
  - Type-safe via `ModalRegistry` interface (declaration merging)
- **Typed hooks**: use `useAppDispatch` and `useAppSelector` (not raw `useDispatch`)

### API Layer

- Axios client at `app/lib/api/client.ts` — reads auth token from Redux store
- Auto-clears auth on 401 responses
- No toast coupling in the API client

### Data Fetching

- TanStack Query for all server state
- Feature-based organization: `features/{domain}/queries.ts`, `mutations.ts`, `query-keys.ts`
- DevTools lazy-loaded only in dev mode

### Env Variables

- Validated via Zod schema at `app/lib/env.ts`
- All must be prefixed with `VITE_`
- Required: `VITE_API_URL`
- Optional: `VITE_GTAG_ID`, `VITE_SENTRY_DSN`, `VITE_APP_NAME`, `VITE_APP_VERSION`

### Linting & Formatting

- ESLint 9 flat config (`eslint.config.js`) — not `.eslintrc`
- Plugins: typescript-eslint, react, react-hooks, jsx-a11y, prettier
- Husky + lint-staged for pre-commit hooks
- Unused vars pattern: prefix with `_` (e.g., `_unused`)

### Styling

- Tailwind CSS 4 with `@theme` and `@theme inline` directives
- shadcn/ui components in `app/components/ui/`
- CSS variables defined in `:root` and `.dark` in `app/app.css`
- Path alias: `~/` maps to `./app/`

### Animations

- Framer Motion for page transitions and scroll-reveal animations
- Common patterns: `fadeUp`, `staggerContainer`, `staggerItem` variants
- Use `whileInView` with `viewport={{ once: true }}` for scroll triggers
- Use `as const` on easing strings (e.g., `ease: 'easeOut' as const`)

## SEO Meta Tag Guidelines

All route pages use `generateSEOTags()` from `app/lib/utils/seo.ts` (aliased as `~/utils/seo`) to inject SEO meta tags (title, description, Open Graph, Twitter Card) via the `meta` export.

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

## Conventions

- **Imports**: use `~/` alias for app-relative imports
- **Route loaders**: used for SSR meta tags via `generateSEOTags()`
- **Component exports**: default export for route components, named exports for shared components
- **No console.log**: use `console.warn` or `console.error` (eslint rule)
- **File naming**: kebab-case for files, PascalCase for components
- **Tests**: colocated with source (e.g., `query-keys.test.ts`), Vitest globals enabled

## CI/CD Agents

### 1. PR Validation Workflow

**File:** `.github/workflows/ci-cd.yml`
**Trigger:** Pull requests targeting `main` or `dev` branches

| Job                 | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Lint Code**       | Checks out code, installs dependencies via `pnpm`, and runs `pnpm lint` (TypeScript type-check + ESLint)       |
| **Security Scan**   | Installs dependencies and runs a production build (`pnpm build`) to verify the project compiles without errors |
| **PR Notification** | Sends a Slack notification to the `#code-reviews` channel with PR status, branch, and author details           |

### 2. Release Bump (CI)

**File:** `.github/workflows/release-bump.yml`
**Trigger:** Manual (`workflow_dispatch`)

Bumps the project version in `package.json`, creates a git tag, and publishes a GitHub Release with an auto-generated changelog.

| Input          | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| **bump_type**  | Version bump type: `patch`, `minor`, or `major`                  |
| **prerelease** | Optional pre-release tag (e.g., `beta`, `rc`). Empty for stable. |
| **dry_run**    | If enabled, shows what would change without pushing or tagging.  |

## Local Agents

### Pre-commit Hooks (Husky + lint-staged)

**Config:** `.husky/pre-commit`

Runs lint-staged on every commit to automatically lint and format staged files before they are committed.

### Local Release Script

**File:** `scripts/release.sh`

Bumps the version in `package.json`, generates categorized release notes in `CHANGELOG.md`, commits, and tags — all locally.

**Usage:**

```bash
pnpm release patch                        # Bump patch version (e.g., 0.1.0 → 0.1.1)
pnpm release minor                        # Bump minor version (e.g., 0.1.1 → 0.2.0)
pnpm release major                        # Bump major version (e.g., 0.2.0 → 1.0.0)
pnpm release patch -- --prerelease beta   # Pre-release (e.g., 0.1.1-beta)
pnpm release:dry patch                    # Dry run — preview without changes
```

**Release notes** are auto-generated from conventional commits and grouped into sections:

- Features (`feat:`), Bug Fixes (`fix:`), Documentation (`docs:`), Performance (`perf:`), Refactoring (`refactor:`), Tests (`test:`), Build & CI (`build:`/`ci:`), Chores (`chore:`), and uncategorized commits.

**After running**, push the commit and tag manually:

```bash
git push origin main
git push origin v<version>
```

## Agent Summary

| Agent             | Scope                  | When               |
| ----------------- | ---------------------- | ------------------ |
| PR Validation     | Lint + Build           | PR to `main`/`dev` |
| Release Bump (CI) | Version bump + release | Manual dispatch    |
| Release Script    | Local bump + changelog | `pnpm release`     |
| Husky pre-commit  | Lint staged files      | Every local commit |

---

## useEffectEvent for Effects with Latest Values

Use `useEffectEvent` (React 19) when an effect needs to read the latest state/props without re-triggering. This replaces ref-based workarounds and avoids stale closures.

**Why:** Prevents unnecessary effect re-runs while still reading fresh values. The callback always sees the latest render values, and the effect only re-synchronizes on its actual dependencies.

**Pattern:**

```ts
const onDialogOpened = useEffectEvent((entity: Entity | null) => {
  if (!entity) return; // early return offloads conditions from useEffect
  form.reset({ name: entity.name });
  setPreview(entity.image_url);
});

useEffect(() => {
  if (isOpen && isEditing) {
    onDialogOpened(entity); // pass data as args
  }
}, [isOpen, isEditing, entity]);
```

**Rules:**

- Only call from inside `useEffect`, never during render
- Do NOT add to dependency arrays
- Use early returns inside the callback

---

## Styling — `cn()` Utility

For conditional or merged class names, always use `cn()` from `~/lib/utils`:

```ts
import { cn } from '~/lib/utils';
// Merge base classes with conditional and override classes
cn('base-class', isActive && 'active-class', className);
```

Never use string concatenation or template literals for conditional Tailwind classes.

---

## Browser Automation with Playwright MCP

The Playwright MCP server is configured in `.mcp.json` at project root:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"],
      "env": { "BROWSER": "chromium" }
    }
  }
}
```

### Workflow

1. **Navigate** — Use `browser_navigate` to open pages (`http://localhost:5173/...`)
2. **Inspect** — Use `browser_snapshot` to get the page's accessibility tree (element refs, text, structure)
3. **Interact** — Use `browser_click`, `browser_type`, `browser_fill_form` with element `ref` from snapshots
4. **Screenshot** — Use `browser_take_screenshot` to capture visual state
5. **Close** — Use `browser_close` to reset browser state if file chooser modals or other state gets stuck

### Screenshot Convention

Store screenshots in `.playwright-mcp/screenshots/` grouped by page:

```
.playwright-mcp/screenshots/
├── landing/
│   ├── mobile-375.png
│   ├── tablet-768.png
│   └── desktop-1440.png
├── services/
│   ├── mobile-375.png
│   ├── tablet-768.png
│   └── desktop-1440.png
├── careers/
│   ├── mobile-375.png
│   ├── tablet-768.png
│   └── desktop-1440.png
└── <page-name>/
    └── ...
```

### Responsive Testing Viewports

| Device  | Width | Height |
| ------- | ----- | ------ |
| Mobile  | 375   | 812    |
| Tablet  | 768   | 1024   |
| Desktop | 1440  | 900    |

Use `browser_resize` before taking screenshots at each viewport.

### Known Limitations

- **File chooser dialogs:** Clicking file upload buttons triggers native OS file pickers that queue up in Playwright. If stuck, use `browser_close` to reset and `browser_navigate` to re-open the page. The file upload works fine in real browsers.
- **Snapshot vs Screenshot:** `browser_snapshot` returns the accessibility tree (needed to get element refs for interaction). `browser_take_screenshot` returns a visual image (for review only, can't interact based on it).

---

## Contribution Guide

See `CONTRIBUTING.md` for the full guide. Key points below.

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

**Types:**

| Type       | Description                                     | Example                                       |
| ---------- | ----------------------------------------------- | --------------------------------------------- |
| `feat`     | New feature                                     | `feat(careers): add career detail page`       |
| `fix`      | Bug fix                                         | `fix(auth): resolve token refresh loop`       |
| `docs`     | Documentation only                              | `docs: update API client usage in README`     |
| `style`    | Formatting, missing semicolons (no code change) | `style: fix indentation in layout`            |
| `refactor` | Code change that neither fixes nor adds         | `refactor(store): simplify auth slice logic`  |
| `test`     | Adding or updating tests                        | `test(contact-us): add form validation tests` |
| `chore`    | Build, tooling, CI, dependencies                | `chore: update eslint config`                 |
| `perf`     | Performance improvement                         | `perf(homepage): lazy load hero images`       |
| `ci`       | CI/CD configuration                             | `ci: add preview deploy workflow`             |
| `revert`   | Revert a previous commit                        | `revert: revert feat(careers) commit abc1234` |

**Scopes:** `homepage`, `about-us`, `services`, `products`, `datalab`, `careers`, `partners`, `contact-us`, `auth`, `ui`, `forms`, `store`, `api`, `routes`, `config`, `theme`, `motion`. Scope is optional but encouraged.

**Subject rules:**

- Lowercase, imperative mood, no period, max 72 characters
- Good: `feat(careers): add career detail page`
- Bad: `feat(careers): Added career detail page.`

**Breaking changes:** Add `!` after type or `BREAKING CHANGE:` in footer:

```
feat(api)!: change pagination response format

BREAKING CHANGE: PaginatedResponse now uses `items` instead of `data`
```

### Branch Naming

Use the format: `<type>/<short-description>`

```
feat/career-detail-page
fix/auth-redirect-loop
chore/update-dependencies
refactor/simplify-theme-slice
```

### PR Title

Follow the same commit message format:

```
feat(careers): add career detail page
fix(auth): resolve token refresh loop
```

### Pre-commit Hooks

Husky + lint-staged runs automatically on staged files:

- `*.{ts,tsx}`: ESLint with `--fix` + Prettier
- `*.{json,md,css}`: Prettier

If the hook fails, fix the issues. Do not bypass with `--no-verify`.

### After Every Code Change

```bash
pnpm lint:fix && pnpm format
```

### Before Pushing

```bash
pnpm lint:fix && pnpm format && pnpm typecheck
```
