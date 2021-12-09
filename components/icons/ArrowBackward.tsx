import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const ArrowBackward = ({
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
      d="M19 12H5M12 19l-7-7 7-7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledIcon>
);
