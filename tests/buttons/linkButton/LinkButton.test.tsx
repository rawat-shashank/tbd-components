import React from 'react';
import { render } from '@testing-library/react';

import { Default, Disabled } from '../../../stories/buttons/LinkButton.stories';

describe('Test Component', () => {
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

  it('should match snapshot', () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });
});
