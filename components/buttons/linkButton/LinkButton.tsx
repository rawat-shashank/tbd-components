import React from 'react';
import { StyledLinkButton } from './LinkButton.styles';
import { LinkButtonProps } from './LinkButton.types';

export const LinkButton = ({
  label,
  className,
  disabled,
  theme,
}: LinkButtonProps) => (
  <StyledLinkButton
    className={className}
    data-testid="link-button"
    disabled={disabled}
    theme={theme}
  >
    {label}
  </StyledLinkButton>
);
