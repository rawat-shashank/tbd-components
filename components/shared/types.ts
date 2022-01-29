import { CSSProperties } from 'react';

export interface ExtendStyles {
  /** Class to override the default styles. */
  className?: string;

  /** react style override */
  style?: CSSProperties | undefined;
}
