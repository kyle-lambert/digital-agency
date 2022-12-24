import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@css/theme.css';
import { breakpointQueries } from '@css/responsive';

export const base = style({
  fontFamily: vars.typography.fonts.inter,
});

const sizes = {
  xs: [
    vars.typography.text.xs.mobile.fontSize,
    vars.typography.text.xs.desktop.fontSize,
  ],
  sm: [
    vars.typography.text.sm.mobile.fontSize,
    vars.typography.text.sm.desktop.fontSize,
  ],
  md: [
    vars.typography.text.md.mobile.fontSize,
    vars.typography.text.md.desktop.fontSize,
  ],
  lg: [
    vars.typography.text.lg.mobile.fontSize,
    vars.typography.text.lg.desktop.fontSize,
  ],
  xl: [
    vars.typography.text.xl.mobile.fontSize,
    vars.typography.text.xl.desktop.fontSize,
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
  brand: vars.colors.primary400,
} as const;

export const toneVariants = styleVariants(tones, (tone) => [
  {
    color: tone,
  },
]);
