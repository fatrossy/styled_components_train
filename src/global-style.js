import styled, { injectGlobal } from 'styled-components';

const StyledBody = injectGlobal`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    * {
      box-sizing: border-box;
    }
  }

`;

export { StyledBody };
