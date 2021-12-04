// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      info: string;
    };
    icon: {
      default: string;
      disabled: string;
      active: string;
      primaryContainer: string;
    };
    backgroundColor: {
      default: string;
    };
    elements: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    divider: {
      default: string;
    };
  }
}
