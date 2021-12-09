import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const System = ({
  width = '1em',
  height = '1em',
  className,
}: SVGProps) => (
  <StyledIcon
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"
      fill="currentColor"
    />
  </StyledIcon>
);
