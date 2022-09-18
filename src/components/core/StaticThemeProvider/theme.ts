import { DEFAULT_THEME } from "@mantine/core";
import type { MantineColor, MantineSizes, MantineThemeOverride } from "@mantine/core";

const primaryColor: MantineColor = "red";

const breakpoints: MantineSizes = {
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
};

const THEME: MantineThemeOverride = {
  colorScheme: "light",
  defaultRadius: "md",
  cursorType: "pointer",
  breakpoints,
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: breakpoints.xs - 60,
          sm: breakpoints.sm - 70,
          md: breakpoints.md - 80,
          lg: breakpoints.lg - 90,
          xl: breakpoints.xl - 100,
        },
      },
    },
  },
  primaryColor,
  defaultGradient: {
    from: DEFAULT_THEME.colors[primaryColor][6],
    to: DEFAULT_THEME.colors[primaryColor][4],
    deg: 45,
  },
  fontFamily: "Inter, sans-serif",
  activeStyles: {
    transform: "scale(0.98)",
  },
};

export default THEME;
