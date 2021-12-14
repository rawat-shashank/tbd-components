import { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text that represent the link */
  label: string;

  /** Class to override the default styles.  */
  className?: string;

  /** React style to override the default styles.  */
  style?: CSSProperties | undefined;
}
