import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  theme?: DefaultTheme;
}
