// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "it", "fr", "de"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
