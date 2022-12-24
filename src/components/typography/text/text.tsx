import React from 'react';
import * as styles from './text.css';

import { Box } from '@components/layout';
import type { BoxProps } from '@components/layout';

type TextElement = 'p' | 'pre' | 'span' | 'div';

type TextOwnProps = {
  element?: TextElement;
  size?: keyof typeof styles.sizeVariants;
  tone?: keyof typeof styles.toneVariants;
  fontWeight?: Exclude<BoxProps['fontWeight'], 'bold'>;
} & Pick<BoxProps, 'className' | 'textAlign'>;

type TextProps = React.PropsWithChildren<TextOwnProps>;

export const Text = ({
  element = 'p',
  size = 'lg',
  tone = 'primary',
  fontWeight,
  textAlign,
  children,
  className,
  ...rest
}: TextProps) => {
  const classNames = [
    styles.base,
    styles.sizeVariants[size],
    styles.toneVariants[tone],
    className,
  ];

  return (
    <Box
      element={element}
      className={classNames}
      fontWeight={fontWeight}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Box>
  );
};
