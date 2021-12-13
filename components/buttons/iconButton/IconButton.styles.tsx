import styled from 'styled-components';

export const StyledIconButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { icon } }) => icon?.default || '#2a2a2a'};
  &:hover {
    background-color: ${({ theme: { elements } }) =>
      elements?.tertiary || '#e7e7e7'};
  }
  &:disabled {
    color: ${({ theme: { icon } }) => icon?.disabled || '#A0A0A0'};
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
  }
  &.active {
    color: ${({ theme: { icon } }) => icon?.active || '#FFFFFF'};
    background-color: ${({ theme: { icon } }) => icon?.default || '#2A2A2A'};
  }
`;
