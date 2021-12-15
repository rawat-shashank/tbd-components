import React from 'react';
import { render } from '@testing-library/react';

import { Default, Disabled } from '../../stories/buttons/LinkButton.stories';
import { ThemeProvider } from 'styled-components';

describe('Unit Test | Link Button Component', () => {
  it('should match label', () => {
    const renderComponent = () => render(<Default {...Default.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveStyle({ color: '#485BFF' });
    expect(testComponent).toHaveTextContent(Default.args.label);
  });

  it('should have attribute disable', () => {
    const renderComponent = () => render(<Disabled {...Disabled.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveStyle({ color: '#A0A0A0' });
    expect(testComponent).toBeDisabled();
  });

  it('should override with theme color', () => {
    const theme: any = { text: { info: 'red' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Default {...Default.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveStyle({ color: theme.text.info });
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
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveStyle({ color: theme.icon.disabled });
  });

  it('should work with external className', () => {
    const renderComponent = () =>
      render(<Default {...Default.args} className="test" />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveClass('test');
  });

  it('should work with external style', () => {
    const style = {
      color: 'red',
    };
    const renderComponent = () =>
      render(<Default {...Default.args} style={style} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('link-button');
    expect(testComponent).toHaveStyle({ color: style.color });
  });

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
