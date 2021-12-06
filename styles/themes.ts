import { DefaultTheme } from 'styled-components';

export interface ThemeProps extends DefaultTheme {}

interface ColorsInterface {
  [key: string]: {
    [key: string]: string;
  };
}

const colors: ColorsInterface = {
  neutral: {
    '00': '#FFFFFF',
    '10': '#E7E7E7',
    '20': '#D0D0D0',
    '40': '#A0A0A0',
    '60': '#717171',
    '80': '#414141',
    '90': '#2a2a2a',
    '100': '#121212',
  },
  primary: {
    '40': '#B6BDFF',
    '100': '#485BFF',
  },
};

export const BreakPoints = {
  mobile: '576px',
  tablet: '768px',
};

export const lightTheme: ThemeProps = {
  text: {
    primary: colors.neutral['100'],
    secondary: colors.neutral['80'],
    tertiary: colors.neutral['60'],
    info: colors.primary['100'],
  },
  icon: {
    default: colors.neutral['90'],
    disabled: colors.neutral['40'],
    active: colors.neutral['00'],
    primaryContainer: colors.primary['100'],
  },
  backgroundColor: {
    default: colors.neutral['00'],
  },
  elements: {
    primary: colors.neutral['60'],
    secondary: colors.neutral['20'],
    tertiary: colors.neutral['10'],
  },
  divider: {
    default: colors.neutral['20'],
  },
};

export const darkTheme: ThemeProps = {
  text: {
    primary: colors.neutral['00'],
    secondary: colors.neutral['20'],
    tertiary: colors.neutral['40'],
    info: colors.primary['40'],
  },
  icon: {
    default: colors.neutral['10'],
    disabled: colors.neutral['60'],
    active: colors.neutral['100'],
    primaryContainer: colors.primary['40'],
  },
  backgroundColor: {
    default: colors.neutral['100'],
  },
  elements: {
    primary: colors.neutral['20'],
    secondary: colors.neutral['60'],
    tertiary: colors.neutral['80'],
  },
  divider: {
    default: colors.neutral['60'],
  },
};
