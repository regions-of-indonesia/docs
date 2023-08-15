import { AstroUserConfig } from "astro";

import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default {
  site: "https://regions-of-indonesia.pages.dev",
  integrations: [
    mdx(),
    solid(),
    tailwind(),
    sitemap(),
    compress({
      Logger: 0,
    }),
  ],
  server: { host: true, port: 1808 },
  compressHTML: true,
} satisfies AstroUserConfig;
