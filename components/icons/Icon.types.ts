import { SVGAttributes } from 'react';

export interface SVGProps extends SVGAttributes<SVGElement> {
  /** class to override the default styles.  */
  className?: string;

  /** controls svg width */
  width?: number | string | undefined;

  /** controls svg height */
  height?: number | string | undefined;
}

export interface IconProps extends SVGProps {
  name:
    | 'arrow-up'
    | 'arrow-backward'
    | 'arrow-down'
    | 'arrow-forward'
    | 'figma'
    | 'globe'
    | 'image-placeholder'
    | 'mail'
    | 'menu'
    | 'sun'
    | 'moon'
    | 'system';
}
