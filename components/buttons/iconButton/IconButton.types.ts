import { ButtonHTMLAttributes } from 'react';
import { IconsName } from '../../icons/Icon.types';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name */
  icon: IconsName;

  /** class to override the default styles.  */
  className?: string;

  /** Icon Button variants */
  variant?: 'default' | 'outline' | 'active' | 'primary';
}
