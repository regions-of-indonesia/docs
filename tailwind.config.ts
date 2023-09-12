import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

import typography from "@tailwindcss/typography";

import kobalte from "@kobalte/tailwindcss";

import coloradix, { mauve, red } from "@coloradix/tailwindcss";

const radix = coloradix({
  mauve,
  red,
})
  .alias({
    neutral: "mauve",
    primary: "red",
  })
  .build();

export default {
  content: ["src/**/*.{astro,ts,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      ...radix.colors,
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      typography: ({ theme }) => ({
        main: {
          css: {
            "--tw-prose-body": theme("colors.neutral[1]"),
            "--tw-prose-headings": theme("colors.neutral[12]"),
            "--tw-prose-lead": theme("colors.neutral[11]"),
            "--tw-prose-links": theme("colors.neutral[12]"),
            "--tw-prose-bold": theme("colors.neutral[12]"),
            "--tw-prose-counters": theme("colors.neutral[7]"),
            "--tw-prose-bullets": theme("colors.neutral[5]"),
            "--tw-prose-hr": theme("colors.neutral[6]"),
            "--tw-prose-quotes": theme("colors.neutral[12]"),
            "--tw-prose-quote-borders": theme("colors.neutral[6]"),
            "--tw-prose-captions": theme("colors.neutral[11]"),
            "--tw-prose-code": theme("colors.neutral[12]"),
            "--tw-prose-pre-code": theme("colors.neutral[2]"),
            "--tw-prose-pre-bg": theme("colors.neutral[11]"),
            "--tw-prose-th-borders": theme("colors.neutral[6]"),
            "--tw-prose-td-borders": theme("colors.neutral[7]"),
            "--tw-prose-invert-body": theme("colors.neutral[1]"),
            "--tw-prose-invert-headings": theme("colors.neutral[12]"),
            "--tw-prose-invert-lead": theme("colors.neutral[11]"),
            "--tw-prose-invert-links": theme("colors.neutral[12]"),
            "--tw-prose-invert-bold": theme("colors.neutral[12]"),
            "--tw-prose-invert-counters": theme("colors.neutral[7]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[5]"),
            "--tw-prose-invert-hr": theme("colors.neutral[6]"),
            "--tw-prose-invert-quotes": theme("colors.neutral[12]"),
            "--tw-prose-invert-quote-borders": theme("colors.neutral[6]"),
            "--tw-prose-invert-captions": theme("colors.neutral[11]"),
            "--tw-prose-invert-code": theme("colors.neutral[12]"),
            "--tw-prose-invert-pre-code": theme("colors.neutral[2]"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral[11]"),
            "--tw-prose-invert-th-borders": theme("colors.neutral[6]"),
            "--tw-prose-invert-td-borders": theme("colors.neutral[7]"),
          },
        },
      }),
    },
  },
  safelist: ["lucide"],
  plugins: [
    typography(),
    radix.plugin,
    plugin(({ addComponents }) => {
      addComponents({
        ".lucide": {
          width: "20px",
          height: "20px",
          strokeWidth: "1.5",
        },
      });
    }),
    kobalte({}),
  ],
} satisfies Config;
