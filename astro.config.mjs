// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emircelovic.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
