import styled from 'styled-components';

export const StyledIcon = styled.svg.attrs((props) => ({
  className: props.className,
}))`
  stroke: ${({ theme: { icon }, stroke }) =>
    stroke || icon?.default || '#2a2a2a'};
  fill: ${({ theme: { icon }, fill }) => fill || icon?.default || '#2a2a2a'};
`;
