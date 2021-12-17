import styled from 'styled-components';

export const StyledLabelButton = styled.button.attrs((props) => ({
  className: props.className,
  style: props.style,
}))`
  border: none;
  border-radius: 1000px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1rem;
  background: transparent;
  &:hover {
    background-color: ${({ theme: { elements } }) =>
      elements?.tertiary || '#E7E7E7'};
  }
  &:disabled {
    color: ${({ theme: { icon } }) => icon?.disabled || '#A0A0A0'};
    background-color: ${({ theme: { elements } }) =>
      elements?.tertiary || '#E7E7E7'};
  }
  &.primary {
    color: ${({ theme: { icon } }) => icon?.active || '#FFFFFF'};
    background-color: ${({ theme: { icon } }) =>
      icon?.primaryContainer || '#485BFF'};
  }
  &.outline {
    border-color: ${({ theme: { elements } }) =>
      elements?.secondary || '#D0D0D0'};
    border-width: 1px;
    border-style: solid;
    color: ${({ theme: { text } }) => text?.primary || '#121212'};
  }
  &.active {
    color: ${({ theme: { icon } }) => icon?.active || '#FFFFFF'};
    background-color: ${({ theme: { icon } }) => icon?.default || '#2A2A2A'};
  }
`;
