import React from 'react';
import { StyledLinkButton } from './LinkButton.styles';
import { LinkButtonProps } from './LinkButton.types';

/**
 * Display a button as link with link styles.
 */
export const LinkButton = ({ label, className, disabled }: LinkButtonProps) => (
  <StyledLinkButton
    className={className}
    data-testid="link-button"
    disabled={disabled}
  >
    {label}
  </StyledLinkButton>
);
