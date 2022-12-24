import { globalStyle } from '@vanilla-extract/css';

import { perc } from '@css/utils';
import { vars } from '@css/theme.css';

globalStyle('html', {
  fontFamily: 'Inter',
  fontWeight: '400',
  color: vars.colors.base900,
});

globalStyle('html, body', {
  height: perc(100),
});

globalStyle('img', {
  maxWidth: perc(100),
});
