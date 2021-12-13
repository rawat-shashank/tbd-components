import React from 'react';
import { render } from '@testing-library/react';

import {
  Default,
  Disabled,
  Primary,
  Outline,
  Active,
} from '../../stories/buttons/IconButton.stories';
import { ThemeProvider } from 'styled-components';

describe('Unit Test | Icon Button Component', () => {
  it('should match default styles', () => {
    const renderComponent = () => render(<Default {...Default.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ backgroundColor: 'transparent' });
    expect(testComponent).toHaveStyle({ color: '#2A2A2A' });
  });

  it('should match disable styles and have attribute disable', () => {
    const renderComponent = () => render(<Disabled {...Disabled.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ backgroundColor: 'transparent' });
    expect(testComponent).toHaveStyle({ color: '#A0A0A0' });
    expect(testComponent).toBeDisabled();
  });

  it('should match primary styles', () => {
    const renderComponent = () => render(<Primary {...Primary.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#485BFF' });
    expect(testComponent).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should match outline styles', () => {
    const renderComponent = () => render(<Outline {...Outline.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ backgroundColor: 'transparent' });
    expect(testComponent).toHaveStyle({ border: '1px solid #D0D0D0' });
    expect(testComponent).toHaveStyle({ color: '#2A2A2A' });
  });

  it('should match active styles', () => {
    const renderComponent = () => render(<Active {...Active.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#2A2A2A' });
    expect(testComponent).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should work with external className', () => {
    const renderComponent = () =>
      render(<Default {...Default.args} className="test" />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveClass('test');
  });

  it('should override default with theme color', () => {
    const theme: any = { icon: { default: 'black' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Default {...Default.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ color: theme.icon.default });
  });

  it('should override disabled with theme color', () => {
    const theme: any = { icon: { disabled: 'black' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Disabled {...Disabled.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({ color: theme.icon.disabled });
  });

  it('should override outline with theme border color', () => {
    const theme: any = { elements: { secondary: 'black' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Outline {...Outline.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon-button');
    expect(testComponent).toHaveStyle({
      borderColor: theme.elements.secondary,
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
