# Contributing to Datawise Frontend v2

This guide covers the conventions and workflows for contributing to the Datawise Frontend. All team members should follow these standards to keep the codebase consistent and maintainable.

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone git@github.com:datawise-africa/datawise_frontend_v2.git
   cd datawise_frontend_v2
   ```
2. **Install dependencies** (requires pnpm v9+ and Node >= 20):
   ```bash
   pnpm install
   ```
3. **Set up environment**: Copy `.env.example` to `.env` and fill in `VITE_API_URL`
4. **Create a branch** from `main` for your changes:
   ```bash
   git checkout -b feat/your-feature-name
   ```

---

## Development Workflow

### Running the Dev Server

```bash
pnpm dev
```

### Code Quality — Run After Every Change

```bash
pnpm lint:fix && pnpm format
```

### Type Checking

```bash
pnpm typecheck              # Runs typegen + tsc
```

### Running Tests

```bash
pnpm test                   # Watch mode
pnpm test:run               # Single run
pnpm test:ui                # With UI
pnpm test:coverage          # With coverage report
```

### Building for Production

```bash
pnpm build
```

---

## Security Practices

- **Never commit secrets**: Do not commit `.env` files, API keys, tokens, or credentials
- **Environment variables**: All sensitive config goes in `.env` (gitignored). Use `.env.example` as the template with placeholder values only
- **Dependencies**: Review new dependencies before adding them. Avoid packages with known vulnerabilities
- **Auth tokens**: Never log or expose auth tokens in client-side code or console output

---

## Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Structure

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types

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

### Scopes

Use the feature or area being changed:

| Scope        | Area                                    |
| ------------ | --------------------------------------- |
| `homepage`   | Landing page sections                   |
| `about-us`   | About page                              |
| `services`   | Services page                           |
| `products`   | Products page                           |
| `datalab`    | Data lab page                           |
| `careers`    | Careers listing and detail pages        |
| `partners`   | Partners page and become-a-partner      |
| `contact-us` | Contact form and page                   |
| `auth`       | Authentication (store slices)           |
| `ui`         | Shared UI components (`components/ui/`) |
| `forms`      | Form fields, schemas, validation        |
| `store`      | Redux store, slices                     |
| `api`        | API client, interceptors                |
| `routes`     | Route definitions, layouts              |
| `config`     | Vite, env, build configuration          |
| `theme`      | Theme editor, CSS variables             |
| `motion`     | Framer Motion animation wrappers        |

Scope is optional but encouraged. Omit it for cross-cutting changes.

### Rules

- **Subject**: Lowercase, imperative mood, no period at the end, max 72 characters
  - Good: `feat(careers): add career detail page`
  - Bad: `feat(careers): Added career detail page.`
- **Body**: Explain _what_ and _why_, not _how_. Wrap at 72 characters.
- **Footer**: Reference internal tickets where applicable
- **Breaking changes**: Add `BREAKING CHANGE:` in the footer or `!` after the type:

  ```
  feat(api)!: change pagination response format

  BREAKING CHANGE: PaginatedResponse now uses `items` instead of `data`
  ```

### Examples

```
feat(careers): add career detail page with slug-based routing

Added a dynamic route at /career-description/$slug that renders
the full job description, requirements, and application form.
```

```
fix(auth): prevent redirect loop on expired token

The 401 interceptor was clearing auth state and redirecting to /login
even when already on the login page, causing an infinite loop.
```

```
chore: update TanStack Query to v5.62
```

---

## Branch Naming

Use the format: `<type>/<short-description>`

```
feat/career-detail-page
fix/auth-redirect-loop
chore/update-dependencies
refactor/simplify-theme-slice
docs/update-contributing-guide
```

---

## Releasing

### Local Release Script

```bash
pnpm release patch                        # Bump patch (e.g., 0.1.0 -> 0.1.1)
pnpm release minor                        # Bump minor (e.g., 0.1.1 -> 0.2.0)
pnpm release major                        # Bump major (e.g., 0.2.0 -> 1.0.0)
pnpm release patch -- --prerelease beta   # Pre-release (e.g., 0.1.1-beta)
pnpm release:dry patch                    # Dry run — preview without changes
```

The script bumps `package.json`, generates categorized release notes in `CHANGELOG.md`, commits, and tags.

After running, push the commit and tag manually:

```bash
git push origin main
git push origin v<version>
```

---

## Pull Request Process

1. **Run checks before pushing**:
   ```bash
   pnpm lint:fix && pnpm format && pnpm typecheck
   ```
2. **Keep PRs focused** — one feature or fix per PR
3. **Write a clear PR description** with:
   - Summary of changes (bullet points)
   - Test plan (how to verify)
   - Screenshots for UI changes
4. **Reference related internal tickets** in the PR description

### PR Title

Follow the same commit message format for the PR title:

```
feat(careers): add career detail page
fix(auth): resolve token refresh loop
```

### PR Checklist

- [ ] Branch is up to date with `main`
- [ ] `pnpm lint:fix && pnpm format` passes
- [ ] `pnpm typecheck` passes
- [ ] Tests added/updated and passing
- [ ] No new warnings or errors
- [ ] Self-review completed
- [ ] No secrets or credentials in the code

### Code Review

- All PRs require at least one approval before merging
- Reviewers should check for correctness, readability, and adherence to project conventions
- Address all review comments before merging — resolve or discuss, don't ignore
- Use "Request Changes" for blocking issues, "Comment" for suggestions

---

## Git Hooks

This project uses **Husky** with two hooks:

### `pre-commit` — Lint & Format

Runs **lint-staged** on staged files:

- `*.{ts,tsx}`: ESLint with `--fix` + Prettier
- `*.{json,md,css}`: Prettier

### `commit-msg` — Commit Message Lint

Runs **commitlint** to enforce [Conventional Commits](https://www.conventionalcommits.org/) format. Rejects commits that don't match `<type>(<scope>): <subject>`.

**Valid:**

```
feat(careers): add career detail page
fix(auth): resolve token refresh loop
chore: update dependencies
```

**Rejected:**

```
added career page          # missing type
Feat(careers): Add stuff   # uppercase type and subject
feat(careers).             # period at end
```

If a hook fails, fix the reported issues before committing. Do not bypass with `--no-verify`.

---

## Environments

| Environment | Branch | URL     | Notes       |
| ----------- | ------ | ------- | ----------- |
| Development | `dev`  | Local   | Dev server  |
| Production  | `main` | Netlify | SSR enabled |

- Do not push directly to `main` — always use PRs
- Test your changes locally before opening a PR

---

## Questions?

If you have questions about contributing, consult with the team directly.
