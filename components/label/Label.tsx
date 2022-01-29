import React from 'react';
import { StyledLabel } from './Label.styles';
import { LabelProps } from './Label.types';

/**
 * Display a label.
 *
 * >Label component comes with default styles which can be overriden
 * by using either classname or style.
 */
export const Label = ({ label, className, style, disabled }: LabelProps) => (
  <StyledLabel
    className={className}
    style={style}
    disabled={disabled}
    data-testid="label"
  >
    {label}
  </StyledLabel>
);
