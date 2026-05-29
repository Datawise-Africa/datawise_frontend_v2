import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import netlifyReactRouter from '@netlify/vite-plugin-react-router';

const isNetlify = process.env.VITE_NETLIFY === 'true';

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    isNetlify && netlifyReactRouter(),
  ],
  build: {
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
});
