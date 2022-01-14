import { CSSProperties, ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Class to override the default styles. */
  className?: string;

  /** react style override */
  style?: CSSProperties | undefined;
}
