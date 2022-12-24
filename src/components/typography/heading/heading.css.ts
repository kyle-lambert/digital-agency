import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@css/theme.css';
import { breakpointQueries } from '@css/responsive';

export const base = style({
  fontFamily: vars.typography.fonts.clashDisplay,
  fontWeight: vars.typography.weights.semiBold,
});

const sizes = {
  xs: [
    vars.typography.headings.xs.mobile.fontSize,
    vars.typography.headings.xs.desktop.fontSize,
  ],
  sm: [
    vars.typography.headings.sm.mobile.fontSize,
    vars.typography.headings.sm.desktop.fontSize,
  ],
  md: [
    vars.typography.headings.md.mobile.fontSize,
    vars.typography.headings.md.desktop.fontSize,
  ],
  lg: [
    vars.typography.headings.lg.mobile.fontSize,
    vars.typography.headings.lg.desktop.fontSize,
  ],
  xl: [
    vars.typography.headings.xl.mobile.fontSize,
    vars.typography.headings.xl.desktop.fontSize,
  ],
} as const;

export const sizeVariants = styleVariants(sizes, (size) => [
  {
    fontSize: size[0],
    '@media': {
      [breakpointQueries['laptop']]: {
        fontSize: size[1],
      },
    },
  },
]);

const tones = {
  primary: vars.colors.base900,
  secondary: vars.colors.base500,
} as const;

export const toneVariants = styleVariants(tones, (tone) => [
  {
    color: tone,
  },
]);
