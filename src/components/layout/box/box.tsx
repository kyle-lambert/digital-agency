import React from 'react';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';

import { sprinkles } from '@css/sprinkles.css';
import type { Sprinkles } from '@css/sprinkles.css';

export type ElementProp<E extends React.ElementType> = {
  element?: E;
};

export type PropsToOmit<
  E extends React.ElementType,
  P
> = keyof (ElementProp<E> & P);

export type PolymorphicComponentProps<
  E extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & ElementProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

export type BoxProps = {
  className?: ClassValue;
} & Sprinkles;

/**
 * Add support for ref forwarding to polymorphic Box component.
 * Update types to support generic ref types based on as prop.
 */

export const Box = <E extends React.ElementType = 'div'>({
  element,
  className,
  children,
  ...rest
}: PolymorphicComponentProps<E, BoxProps>) => {
  const Component = element || 'div';
  const sprinkleProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  for (const key in rest) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinkleProps[key] = rest[key as keyof typeof rest];
    } else {
      nativeProps[key] = rest[key as keyof typeof rest];
    }
  }

  const sprinkleClasses = sprinkles(sprinkleProps);
  const clsxClasses = className;
  const combinedClasses = clsx(sprinkleClasses, clsxClasses) || undefined;

  console.log(sprinkleClasses);
  console.log(clsxClasses);
  console.log(combinedClasses);

  return (
    <Component
      className={combinedClasses}
      {...nativeProps}
    >
      {children}
    </Component>
  );
};

Box.displayName = 'Box';
