// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://epodivilov.github.io',
  base: '/curriculum-vitae',
  vite: {
    plugins: [tailwindcss()]
  }
});