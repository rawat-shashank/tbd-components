import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import {
  Active,
  Default,
  Disabled,
  Outline,
  Primary,
} from '../../stories/buttons/LabelButton.stories';

describe('Unit Test | Label Button Component', () => {
  it('should match default(primary) style', () => {
    const renderComponent = () => render(<Default {...Default.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#485BFF' });
    expect(testComponent).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should match primary style and contain icon', () => {
    const renderComponent = () => render(<Primary {...Primary.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#485BFF' });
    expect(testComponent).toHaveStyle({ color: '#FFFFFF' });
    const svg = getByTestId('icon');
    expect(svg).toBeTruthy();
  });

  it('should match disable styles and have attribute disable', () => {
    const renderComponent = () => render(<Disabled {...Disabled.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#E7E7E7' });
    expect(testComponent).toHaveStyle({ color: '#A0A0A0' });
    expect(testComponent).toBeDisabled();
    expect(testComponent).toHaveTextContent(Disabled.args.label);
  });

  it('should override disable styles on Default/Primary', () => {
    const args = { ...Primary.args, disabled: true };
    const renderComponent = () => render(<Primary {...args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#E7E7E7' });
    expect(testComponent).toHaveStyle({ color: '#A0A0A0' });
    expect(testComponent).toBeDisabled();
  });

  it('should match outline styles', () => {
    const renderComponent = () => render(<Outline {...Outline.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: 'transparent' });
    expect(testComponent).toHaveStyle({ border: '1px solid #D0D0D0' });
    expect(testComponent).toHaveStyle({ color: '#121212' });
  });

  it('should match active styles', () => {
    const renderComponent = () => render(<Active {...Active.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ backgroundColor: '#2A2A2A' });
    expect(testComponent).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should work with external className', () => {
    const renderComponent = () =>
      render(<Default {...Default.args} className="test" />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveClass('test');
  });

  it('should work with external style', () => {
    const style = {
      color: 'red',
    };
    const renderComponent = () =>
      render(<Default {...Default.args} style={style} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ color: style.color });
  });

  it('should override default with theme color', () => {
    const theme: any = { icon: { active: 'black' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Default {...Default.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ color: theme.icon.active });
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
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({ color: theme.icon.disabled });
  });

  it('should override outline with theme border color', () => {
    const theme: any = {
      elements: { secondary: 'black' },
      text: { primary: 'red' },
    };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Outline {...Outline.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label-button');
    expect(testComponent).toHaveStyle({
      borderColor: theme.elements.secondary,
      color: theme.text.primary,
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
