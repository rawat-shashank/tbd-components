import { ButtonHTMLAttributes } from 'react';
import { ExtendStyles } from '../shared/types';

export interface LabelProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ExtendStyles {
  /** Text that represent the link */
  label: string;
}
