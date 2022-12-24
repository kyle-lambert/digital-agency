import { px } from '@css/utils';

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointQueries = {
  tablet: `screen and (min-width: ${px(breakpoints['tablet'])})`,
  laptop: `screen and (min-width: ${px(breakpoints['laptop'])})`,
  desktop: `screen and (min-width: ${px(breakpoints['desktop'])})`,
  wide: `screen and (min-width: ${px(breakpoints['wide'])})`,
} as const;

export type QueryBreakpoint = keyof typeof breakpointQueries;
