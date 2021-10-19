import { createGlobalStyle } from "styled-components";

import { sharedTheme } from "../../shared";

export const GlobalStyle = createGlobalStyle`
  ${sharedTheme.GlobalBaseCss};
`;
