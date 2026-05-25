import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  // Pre-rendering disabled — causes 500 errors on Netlify SSR deployment.
  prerender: [],
} satisfies Config;
