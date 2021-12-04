import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyledLinkButton } from '../../../components/buttons/linkButton/LinkButton.styles';
import { lightTheme } from '../../../styles/themes';

describe('Test Component', () => {
  it('should have given theme color', () => {
    render(<StyledLinkButton theme={lightTheme} />);
    expect(screen.getByRole('button')).toHaveStyle({
      color: lightTheme.text.info,
    });
  });

  it('should have given theme disabled color', () => {
    render(<StyledLinkButton theme={lightTheme} disabled />);
    expect(screen.getByRole('button')).toHaveStyle({
      color: lightTheme.icon.disabled,
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<StyledLinkButton />);
    expect(container).toMatchSnapshot();
  });
});
