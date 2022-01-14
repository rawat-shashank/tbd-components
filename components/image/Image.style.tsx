import styled from 'styled-components';

export const StyledImageBase = styled.img.attrs((props) => ({
  className: props.className,
  style: props.style,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { elements } }) =>
    elements?.tertiary || '#E7E7E7'};
  object-fit: cover;
  border-radius: 1.5rem;
`;
