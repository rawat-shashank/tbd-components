import styled from 'styled-components';

export const StyledIcon = styled.svg.attrs((props) => ({
  className: props.className,
}))`
  stroke: ${({ theme, stroke }) => stroke || theme?.icon?.default || '#2a2a2a'};
  fill: ${({ theme, fill }) => fill || theme?.icon?.default || '#2a2a2a'};
`;
