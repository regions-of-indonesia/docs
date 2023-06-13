import { AstroUserConfig } from "astro";

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default {
  site: "https://regions-of-indonesia.pages.dev",
  integrations: [solid(), tailwind(), sitemap(), compress()],
  server: { host: true, port: 1808 },
  compressHTML: true,
} satisfies AstroUserConfig;
