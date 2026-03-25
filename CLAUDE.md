# CLAUDE.md - Project Guide for AI Assistants

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

## Conventions

- **Imports**: use `~/` alias for app-relative imports
- **Route loaders**: used for SSR meta tags via `generateSEOTags()`
- **Component exports**: default export for route components, named exports for shared components
- **No console.log**: use `console.warn` or `console.error` (eslint rule)
- **File naming**: kebab-case for files, PascalCase for components
- **Tests**: colocated with source (e.g., `query-keys.test.ts`), Vitest globals enabled

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

The Playwright MCP server is configured in `.mcp.json` at project root.

### Workflow

1. **Navigate** — `browser_navigate` to open pages (`http://localhost:5173/...`)
2. **Inspect** — `browser_snapshot` to get the accessibility tree (element refs, text, structure)
3. **Interact** — `browser_click`, `browser_type`, `browser_fill_form` with element `ref` from snapshots
4. **Screenshot** — `browser_take_screenshot` to capture visual state
5. **Close** — `browser_close` to reset browser state if stuck

### Screenshot Convention

Store screenshots in `.playwright-mcp/screenshots/` grouped by page:

```
.playwright-mcp/screenshots/
├── landing/
│   ├── mobile-375.png
│   ├── tablet-768.png
│   └── desktop-1440.png
├── services/
│   └── ...
├── careers/
│   └── ...
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

- **File chooser dialogs:** Clicking file upload buttons triggers native OS file pickers that queue up in Playwright. Use `browser_close` to reset if stuck.
- **Snapshot vs Screenshot:** `browser_snapshot` returns the accessibility tree (needed for element refs). `browser_take_screenshot` returns a visual image (review only).

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

**Breaking changes:** Add `!` after type or `BREAKING CHANGE:` in footer.

### Branch Naming

Use the format: `<type>/<short-description>`

```
feat/career-detail-page
fix/auth-redirect-loop
chore/update-dependencies
```

### Local Release Script

```bash
pnpm release patch                        # Bump patch (e.g., 0.1.0 → 0.1.1)
pnpm release minor                        # Bump minor (e.g., 0.1.1 → 0.2.0)
pnpm release major                        # Bump major (e.g., 0.2.0 → 1.0.0)
pnpm release patch -- --prerelease beta   # Pre-release (e.g., 0.1.1-beta)
pnpm release:dry patch                    # Dry run — preview without changes
```

After running, push manually:

```bash
git push origin main
git push origin v<version>
```

### After Every Code Change

```bash
pnpm lint:fix && pnpm format
```

### Before Pushing

```bash
pnpm lint:fix && pnpm format && pnpm typecheck
```
