import { createGlobalTheme } from '@vanilla-extract/css';
import { px, perc, rgba, shadow } from '@css/utils';
import { palette } from '@css/palette';

const colors = {
  primary400: palette.lime[400],
  primary300: palette.lime[300],
  primary200: palette.lime[200],
  primary100: palette.lime[100],
  primary50: palette.lime[50],
  secondary400: palette.slate[400],
  secondary300: palette.slate[300],
  secondary200: palette.slate[200],
  secondary100: palette.slate[100],
  secondary50: palette.slate[50],
  base900: palette.neutral[900],
  base700: palette.neutral[700],
  base500: palette.neutral[500],
  base300: palette.neutral[300],
  base100: palette.neutral[100],
  success500: palette.green[500],
  success400: palette.green[400],
  success300: palette.green[300],
  success200: palette.green[200],
  success100: palette.green[100],
  warning500: palette.yellow[500],
  warning400: palette.yellow[400],
  warning300: palette.yellow[300],
  warning200: palette.yellow[200],
  warning100: palette.yellow[100],
  error500: palette.red[500],
  error400: palette.red[400],
  error300: palette.red[300],
  error200: palette.red[200],
  error100: palette.red[100],
  info500: palette.blue[500],
  info400: palette.blue[400],
  info300: palette.blue[300],
  info200: palette.blue[200],
  info100: palette.blue[100],
  black: palette.black,
  white: palette.white,
} as const;

export const vars = createGlobalTheme(':root', {
  colors,
  typography: {
    fonts: {
      inter: 'Inter, -apple-system, system-ui, sans-serif',
      clashDisplay: 'Clash Display, -apple-system, system-ui, sans-serif',
    },
    weights: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    headings: {
      xl: {
        mobile: {
          fontSize: px(44),
        },
        desktop: {
          fontSize: px(80),
        },
      },
      lg: {
        mobile: {
          fontSize: px(32),
        },
        desktop: {
          fontSize: px(48),
        },
      },
      md: {
        mobile: {
          fontSize: px(24),
        },
        desktop: {
          fontSize: px(32),
        },
      },
      sm: {
        mobile: {
          fontSize: px(20),
        },
        desktop: {
          fontSize: px(24),
        },
      },
      xs: {
        mobile: {
          fontSize: px(18),
        },
        desktop: {
          fontSize: px(20),
        },
      },
    },
    text: {
      xs: {
        mobile: {
          fontSize: px(10),
        },
        desktop: {
          fontSize: px(12),
        },
      },
      sm: {
        mobile: {
          fontSize: px(12),
        },
        desktop: {
          fontSize: px(14),
        },
      },
      md: {
        mobile: {
          fontSize: px(14),
        },
        desktop: {
          fontSize: px(16),
        },
      },
      lg: {
        mobile: {
          fontSize: px(16),
        },
        desktop: {
          fontSize: px(18),
        },
      },
      xl: {
        mobile: {
          fontSize: px(18),
        },
        desktop: {
          fontSize: px(20),
        },
      },
    },
  },
  space: {
    '0': px(0),
    '1': px(4),
    '2': px(8),
    '3': px(16),
    '4': px(32),
    '5': px(64),
    '6': px(80),
    '7': px(96),
    '8': px(112),
  },
  sizes: {
    full: perc(100),
  },
  radii: {
    xs: px(4),
    sm: px(6),
    md: px(8),
    lg: px(12),
    xl: px(16),
    round: perc(50),
    pill: px(9999),
  },
  shadows: {
    xs: shadow(0, 3, 4, 0, rgba(0, 0, 0, 0.1)),
    sm: shadow(0, 8, 12, 0, rgba(0, 0, 0, 0.1)),
    md: shadow(0, 12, 14, 0, rgba(0, 0, 0, 0.1)),
    lg: shadow(0, 16, 18, 0, rgba(0, 0, 0, 0.1)),
    xl: shadow(0, 18, 20, 0, rgba(0, 0, 0, 0.1)),
  },
});
