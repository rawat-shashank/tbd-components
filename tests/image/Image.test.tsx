import React from 'react';
import { render } from '@testing-library/react';

import { Default, ImageWithSrc } from '../../stories/image/Image.stories';
import { ThemeProvider } from 'styled-components';

describe('Unit Test | Image Component', () => {
  it('should match default image component', () => {
    const renderComponent = () => render(<Default {...Default.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('image');
    expect(testComponent).toHaveStyle({ backgroundColor: '#E7E7E7' });
  });

  it('should match src and alt for ImageWithSrc', () => {
    const renderComponent = () =>
      render(<ImageWithSrc {...ImageWithSrc.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('image');
    expect(testComponent).toHaveStyle({ borderRadius: '1.5rem' });
    expect(testComponent).toHaveAttribute('src', ImageWithSrc.args.src);
    expect(testComponent).toHaveAttribute('alt', ImageWithSrc.args.alt);
  });

  it('should override with theme color', () => {
    const theme: any = { elements: { tertiary: 'red' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Default {...Default.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('image');
    expect(testComponent).toHaveStyle({
      backgroundColor: theme.elements.tertiary,
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
