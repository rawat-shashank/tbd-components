import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const ArrowDown = ({
  width = '1rem',
  height = '1rem',
  className,
  style,
}: SVGProps) => (
  <StyledIcon
    width={width}
    height={height}
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon"
  >
    <path
      d="M12 5v14M19 12l-7 7-7-7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledIcon>
);
