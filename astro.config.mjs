import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import astroI18next from "astro-i18next";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://kareem-magdy.com/",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ar: "ar",
        },
      },
    }),
    robotsTxt({
      sitemap: "https://kareem-magdy.com/sitemap-index.xml",
      host: "kareem-magdy.com",
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    astroI18next(),
  ],
});
