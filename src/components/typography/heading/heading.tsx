import React from 'react';
import * as styles from './heading.css';

import { Box } from '@components/layout';
import type { BoxProps } from '@components/layout';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingOwnProps = {
  element?: HeadingElement;
  size?: keyof typeof styles.sizeVariants;
  tone?: keyof typeof styles.toneVariants;
} & Pick<BoxProps, 'className' | 'textAlign'>;

type HeadingProps = React.PropsWithChildren<HeadingOwnProps>;

const mapElementToSize = {
  h1: 'xl',
  h2: 'lg',
  h3: 'md',
  h4: 'sm',
  h5: 'xs',
  h6: 'xs',
} as const;

export const Heading = ({
  element = 'h2',
  size,
  tone = 'primary',
  textAlign,
  children,
  className,
  ...rest
}: HeadingProps) => {
  size = size || mapElementToSize[element];

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
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Box>
  );
};
