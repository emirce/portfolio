// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emircelovic.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
