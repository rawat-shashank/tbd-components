import { ButtonHTMLAttributes, ReactChild } from 'react';
import { IconsName } from '../../icons/Icon.types';
import { ExtendStyles } from '../../shared/types';

export interface LabelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ExtendStyles {
  /** Text for button label */
  label: ReactChild;

  /** Icon name */
  icon?: IconsName;

  /** Label Button variants */
  variant?: 'outline' | 'active' | 'primary';
}
