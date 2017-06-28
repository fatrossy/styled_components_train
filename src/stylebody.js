import styled, { injectGlobal } from 'styled-components';

const stylebody = injectGlobal`
                    body {
                      min-height: 100vh;
                      display: -webkit-flex;
                      display: -ms-flex;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                  `;

export {stylebody};
