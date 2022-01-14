import React from 'react';
import { ImageProps } from './Image.types';
import { StyledImageBase } from './Image.style';

/**
 * Renders an Image component with provided src.
 *
 * >Image component comes with default styles which can be overriden
 * by using either classname or style.
 *
 */
export const Image = ({ src, alt, className, style }: ImageProps) => (
  <StyledImageBase
    src={src}
    alt={alt}
    className={className}
    style={style}
    data-testid="image"
  />
);
