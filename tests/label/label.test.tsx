import { render } from '@testing-library/react';
import React from 'react';
import { Default, Disabled } from '../../stories/label/Label.stories';
import { ThemeProvider } from 'styled-components';

describe('Unit Test | Label Component', () => {
  it('should match label', () => {
    const renderComponent = () => render(<Default {...Default.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveStyle({ color: '#414141' });
    expect(testComponent).toHaveTextContent(Default.args.label);
  });

  it('should have attribute disable', () => {
    const renderComponent = () => render(<Disabled {...Disabled.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveStyle({ color: '#A0A0A0' });
    expect(testComponent).toBeDisabled();
  });

  it('should override with theme color', () => {
    const theme: any = { text: { secondary: 'red' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Default {...Default.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveStyle({ color: theme.text.secondary });
  });

  it('should override with theme disabled color', () => {
    const theme: any = { icon: { disabled: 'black' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Disabled {...Disabled.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveStyle({ color: theme.icon.disabled });
  });

  it('should work with external className', () => {
    const renderComponent = () =>
      render(<Default {...Default.args} className="test" />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveClass('test');
  });

  it('should work with external style', () => {
    const style = {
      color: 'red',
    };
    const renderComponent = () =>
      render(<Default {...Default.args} style={style} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('label');
    expect(testComponent).toHaveStyle({ color: style.color });
  });

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
