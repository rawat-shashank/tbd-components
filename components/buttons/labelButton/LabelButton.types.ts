import { ButtonHTMLAttributes, CSSProperties, ReactChild } from 'react';
import { IconsName } from '../../icons/Icon.types';

export interface LabelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text for button label */
  label: ReactChild;

  /** Icon name */
  icon?: IconsName;

  /** Class to override the default styles.  */
  className?: string;

  /** React style to override the default styles.  */
  style?: CSSProperties | undefined;

  /** Label Button variants */
  variant?: 'outline' | 'active' | 'primary';
}
