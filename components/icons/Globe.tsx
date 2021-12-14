import React from 'react';
import { StyledIcon } from './Icon.styles';
import { SVGProps } from './Icon.types';

export const Globe = ({
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
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon"
  >
    <path
      d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0v.05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0v-.05a9.86 9.86 0 0 0 0-6.72ZM4.26 14a7.82 7.82 0 0 1 0-4h1.86a16.73 16.73 0 0 0 0 4H4.26Zm.82 2h1.4c.235.892.57 1.754 1 2.57A8 8 0 0 1 5.08 16Zm1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12.15 12.15 0 0 0 6.48 8ZM11 19.7A6.34 6.34 0 0 1 8.57 16H11v3.7Zm0-5.7H8.14a14.36 14.36 0 0 1 0-4H11v4Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3V8Zm7.92 0h-1.4a12.148 12.148 0 0 0-1-2.57A8 8 0 0 1 18.92 8ZM13 4.3A6.34 6.34 0 0 1 15.43 8H13V4.3Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7Zm2.86-5.7H13v-4h2.86a14.36 14.36 0 0 1 0 4Zm.69 4.57c.43-.816.765-1.678 1-2.57h1.4a8 8 0 0 1-2.4 2.57ZM19.74 14h-1.86c.081-.664.121-1.332.12-2a16.285 16.285 0 0 0-.12-2h1.86a7.82 7.82 0 0 1 0 4Z"
      fill="currentColor"
    />
  </StyledIcon>
);
