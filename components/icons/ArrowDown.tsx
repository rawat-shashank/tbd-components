import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const ArrowDown = ({
  width = '1em',
  height = '1em',
  className,
}: SVGProps) => (
  <StyledIcon
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
