import type { Config } from '@react-router/dev/config';
import { href } from 'react-router';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    return [
      href('/'),
      href('/about-us'),
      href('/contact-us'),
      href('/projects'),
      href('/datalab'),
      href('/partners'),
      href('/careers'),
      href('/become-a-partner'),
      href('/privacy-policy'),
      href('/services'),
    ];
  },
} satisfies Config;
