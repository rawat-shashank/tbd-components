import { CSSProperties, SVGAttributes } from 'react';

export type IconsName =
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

export interface SVGProps extends SVGAttributes<SVGElement> {
  /** Class to override the default styles.  */
  className?: string;

  /** Width for SVG element */
  width?: number | string | undefined;

  /** Height for SVG element */
  height?: number | string | undefined;

  /** React style to override the default styles.  */
  style?: CSSProperties | undefined;
}

export interface IconProps extends SVGProps {
  /** Icon name */
  name: IconsName;
}
