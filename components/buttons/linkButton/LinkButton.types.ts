import { ButtonHTMLAttributes } from 'react';

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** text that represent the link */
  label: string;

  /** class to override the default styles.  */
  className?: string;
}
