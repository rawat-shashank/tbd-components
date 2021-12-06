import { ButtonHTMLAttributes } from 'react';
import { ThemeProps } from '../../../styles/themes';

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  theme?: ThemeProps;
}
