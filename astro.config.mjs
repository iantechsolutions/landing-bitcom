import { defineConfig,envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
  experimental:{
    env: {
      schema: {
        RESEND_API_KEY: envField.string({
          optional: false,
          access: 'secret',
          context: "server",
        })
      }
    }
  }
});