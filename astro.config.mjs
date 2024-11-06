import { defineConfig,envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
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