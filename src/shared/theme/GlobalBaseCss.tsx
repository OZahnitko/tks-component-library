import { css } from "styled-components";
import normalize from "styled-normalize";

export const GlobalBaseCss = css`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    font-size: 16px;

    height: 100%;

    margin: 0;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;

    padding: 0;

    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin: 0;

    padding: 0;
  }

  h1 {
    font-size: 4rem;
  }
`;
