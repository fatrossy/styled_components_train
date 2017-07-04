import styled, { injectGlobal } from 'styled-components';

const StyledBody = injectGlobal`
  body {
    min-height: 100vh;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledBody };
