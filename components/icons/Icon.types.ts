import { SVGAttributes } from 'react';
import { ExtendStyles } from '../shared/types';

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
  | 'system'
  | 'logo';

export interface SVGProps extends SVGAttributes<SVGElement>, ExtendStyles {
  /** Width for SVG element */
  width?: number | string | undefined;

  /** Height for SVG element */
  height?: number | string | undefined;
}

export interface IconProps extends SVGProps {
  /** Icon name */
  name: IconsName;
}
