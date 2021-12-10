import React from 'react';
import { render } from '@testing-library/react';

import {
  ArrowDown,
  ArrowUp,
  ArrowForward,
  ArrowBackward,
  Figma,
  Globe,
  ImagePlaceholder,
  Mail,
  Menu,
  Moon,
  Sun,
  System,
} from '../../stories/icons/Icons.stories';
import { ThemeProvider } from 'styled-components';

const strokeCases = [ArrowUp, ArrowDown, ArrowForward, ArrowBackward, Figma];
const fillCases = [Globe, ImagePlaceholder, Mail, Menu, Moon, Sun, System];

describe('Test Component', () => {
  test.each(strokeCases)(
    'should have default styles with stroke',
    (TestComp) => {
      const renderComponent = () => render(<TestComp {...TestComp.args} />);
      const { getByTestId } = renderComponent();
      const testComponent = getByTestId('icon');
      expect(testComponent).toHaveStyle({ stroke: '#2a2a2a' });
      expect(testComponent.getAttribute('height')).toBe('1rem');
      expect(testComponent.getAttribute('width')).toBe('1rem');
    }
  );

  test.each(fillCases)('should have default styles with fill', (TestComp) => {
    const renderComponent = () => render(<TestComp {...TestComp.args} />);
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon');
    expect(testComponent).toHaveStyle({ fill: '#2a2a2a' });
    expect(testComponent.getAttribute('height')).toBe('1rem');
    expect(testComponent.getAttribute('width')).toBe('1rem');
  });

  test.each([...strokeCases, ...fillCases])(
    'should have updated values',
    (TestComp) => {
      const args = { ...TestComp.args, height: '2rem', width: '2rem' };
      const renderComponent = () => render(<TestComp {...args} />);
      const { getByTestId } = renderComponent();
      const testComponent = getByTestId('icon');
      expect(testComponent.getAttribute('height')).toBe(args.height);
      expect(testComponent.getAttribute('width')).toBe(args.width);
    }
  );

  it('should override stroke with theme color', () => {
    const theme: any = { icon: { default: 'red' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <ArrowUp {...ArrowUp.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon');
    expect(testComponent).toHaveStyle({ stroke: theme.icon.default });
  });

  it('should override fill with theme color', () => {
    const theme: any = { icon: { default: 'red' } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={theme}>
          <Globe {...Globe.args} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('icon');
    expect(testComponent).toHaveStyle({ fill: theme.icon.default });
  });

  test.each([...strokeCases, ...fillCases])(
    'should have updated values',
    (TestComp) => {
      const { container } = render(<TestComp {...TestComp.args} />);
      expect(container).toMatchSnapshot();
    }
  );
});
