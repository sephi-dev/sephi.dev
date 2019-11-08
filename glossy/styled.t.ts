import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    colors: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    button: {
      primary: {
        background: string;
        color: string;
      };
      secondary: {
        background: string;
        color: string;
      };
    };
  }
}
