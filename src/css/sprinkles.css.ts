import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';

import { vars } from '@css/theme.css';
import { breakpointQueries } from '@css/responsive';

const staticProperties = defineProperties({
  properties: {
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    userSelect: ['none'],
    outline: ['none'],
    opacity: ['0'],
    zIndex: {
      '1': 100,
      '2': 200,
      '3': 300,
      '4': 400,
      '5': 500,
    },
    cursor: ['default', 'pointer'],
    pointerEvents: ['none'],
    top: ['0'],
    bottom: ['0'],
    left: ['0'],
    right: ['0'],
    height: vars.sizes,
    width: vars.sizes,
    fontWeight: vars.typography.weights,
    boxShadow: vars.shadows,
  },
});

const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      '@media': breakpointQueries['tablet'],
    },
    laptop: {
      '@media': breakpointQueries['laptop'],
    },
    desktop: {
      '@media': breakpointQueries['desktop'],
    },
    wide: { '@media': breakpointQueries['wide'] },
  },
  defaultCondition: 'mobile',
  properties: {
    display: {
      none: 'none',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex',
    },
    borderRadius: vars.radii,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingRight: vars.space,
    paddingLeft: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    alignItems: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
    },
    justifyContent: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
      spaceBetween: 'space-between',
    },
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse',
    },
    flexWrap: {
      wrap: 'wrap',
      nowrap: 'nowrap',
    },
    flexShrink: [0],
    flexGrow: [0, 1],
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export const sprinkles = createSprinkles(
  staticProperties,
  responsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
