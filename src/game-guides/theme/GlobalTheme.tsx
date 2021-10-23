import { createGlobalStyle } from "styled-components";

import { sharedTheme } from "../../shared";
import { mineShaft } from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${sharedTheme.GlobalBaseCss};

  body {
    font-family: "Roboto Mono", monospace;
  }
`;
