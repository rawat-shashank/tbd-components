import styled from 'styled-components';
import { BreakPoints } from '../../styles/themes';

export const StyledLabel = styled.button.attrs((props) => ({
  className: props.className,
  style: props.style,
}))`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.625rem 1rem;
  color: ${({ theme: { text } }) =>
    text?.secondary ? text.secondary : '#414141'};
  text-transform: capitalize;
  font-size: 0.875rem;
  &:hover {
    color: ${({ theme: { text } }) => text?.tertiary || '#717171'};
  }
  &:disabled {
    color: ${({ theme: { icon } }) => icon?.disabled || '#A0A0A0'};
  }
  @media (min-width: ${BreakPoints.mobile}) {
    font-size: 1rem;
  }
`;
