import { createGlobalStyle } from "styled-components";

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 300;
    src: local('SF UI Display Thin'), url('/fonts/sf-ui-display-thin.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('SF UI Display Light'), url('/fonts/sf-ui-display-light.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 500;
    src: local('SF UI Display Medium'), url('/fonts/sf-ui-display-medium.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 600;
    src: local('SF UI Display Semibold'), url('/fonts/sf-ui-display-semibold.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: local('SF UI Display Bold'), url('/fonts/sf-ui-display-bold.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 800;
    src: local('SF UI Display Heavy'), url('/fonts/sf-ui-display-heavy.woff') format('woff');
  }


  @font-face {
    font-family: 'SF UI';
    font-display: swap;
    font-style: normal;
    font-weight: 900;
    src: local('SF UI Display Black'), url('/fonts/sf-ui-display-black.woff') format('woff');
  }
`;

export default FontFace;
