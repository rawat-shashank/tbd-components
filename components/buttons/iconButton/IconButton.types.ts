import { ButtonHTMLAttributes } from 'react';
import { IconsName } from '../../icons/Icon.types';
import { ExtendStyles } from '../../shared/types';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ExtendStyles {
  /** Icon name */
  icon: IconsName;

  /** Icon Button variants */
  variant?: 'default' | 'outline' | 'active' | 'primary';
}
