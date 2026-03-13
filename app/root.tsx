import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { loadGTagScripts } from './lib/utils/add-google-tag';
import { QueryProvider } from './lib/providers/query-provider';
import { StoreProvider } from './lib/providers/store-provider';
import { env } from './lib/env';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  /**
   * Google Analytics Tracking ID
   * Replace 'G-XXXXXXXXXX' with your actual tracking ID or set it in the environment variable VITE_GTAG_ID
   */
  const GTAG = env.VITE_GTAG_ID;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {GTAG && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
            ></script>
            <script dangerouslySetInnerHTML={loadGTagScripts(GTAG)}></script>
          </>
        )}
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <QueryProvider>
        <Outlet />
      </QueryProvider>
    </StoreProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status = 500;
  let title = 'Something went wrong';
  let description = 'An unexpected error occurred. Please try again later.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    if (error.status === 404) {
      title = 'Page not found';
      description =
        'Sorry, we couldn\u2019t find the page you\u2019re looking for. It might have been moved or no longer exists.';
    } else {
      title = `Error ${error.status}`;
      description = error.statusText || description;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    description = error.message;
    stack = error.stack;
  }

  const is404 = status === 404;

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-lg w-full text-center">
        <p
          className="text-[8rem] sm:text-[10rem] font-bold leading-none tracking-tighter text-primary/15 select-none"
          aria-hidden="true"
        >
          {status}
        </p>
        <h1 className="-mt-6 text-3xl sm:text-4xl font-bold text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            {is404 ? 'Back to Home' : 'Try Again'}
          </a>
          {is404 && (
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Contact Us
            </a>
          )}
        </div>
        {stack && (
          <pre className="mt-8 w-full p-4 overflow-x-auto rounded-lg bg-muted text-left text-xs text-muted-foreground">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
