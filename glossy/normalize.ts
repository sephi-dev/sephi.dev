import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const NormalizeCSS = createGlobalStyle`
  ${normalize}
  html { 
    font-size: 62.5%; /*for using REM units*/
  }
  body {
    font-family: 'SF UI', BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    color: #222;
  }
  /*remove autocomplete color*/
  input:-webkit-autofill {-webkit-box-shadow:0 0 0 500px white inset; }

  /*remove spinner  buttons to number inputs*/
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none; margin: 0;
  }

  img {
    width: 100%;
    height: auto;
    &:not([alt]) {
      border: 2px solid red;
    }
  }
`;

export default NormalizeCSS;
