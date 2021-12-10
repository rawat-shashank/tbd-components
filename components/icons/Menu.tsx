import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const Menu = ({
  width = '1rem',
  height = '1rem',
  className,
}: SVGProps) => (
  <StyledIcon
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon"
  >
    <path
      d="M3 11h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
      fill="currentColor"
    />
  </StyledIcon>
);
