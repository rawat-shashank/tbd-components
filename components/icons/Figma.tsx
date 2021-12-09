import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const Figma = ({
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
      d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5ZM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0v0ZM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0ZM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledIcon>
);
