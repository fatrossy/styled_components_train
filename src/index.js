import React from 'react';
import ReactDOM from 'react-dom';
import { StyledWrap, BoxRow, LeftNumber, RightPart, Up, Down } from './styles.js';
import { StyledBody } from './global-style.js';


function Wrapper(props){
  return(
    <StyledWrap>

      <BoxUp>
        <LeftNumber>
          1603
        </LeftNumber>

        <RightPart>
          <Up />
          <Down />
        </RightPart>

      </BoxUp>

      <BoxBottom />

    </StyledWrap>
  )
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);

module.hot.accept();
