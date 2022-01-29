import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { lightTheme, darkTheme } from '../styles/themes';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  }
  return themes[themeName]
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
