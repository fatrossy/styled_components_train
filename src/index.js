import React from 'react';
import ReactDOM from 'react-dom';
import { StyledWrap, BoxRow, Sides, ParamLabel, ParamValue, BottomParam, Data, KpiTitle, Tube, Ball, Lable } from './styles.js';
import { StyledBody } from './global-style.js';
import { dataset } from './data.js'
var numeral = require('numeral');
function Wrapper(props){

 const CurValue = dataset.data.value;
 const PasYear = dataset.data.py;
 const DataLable = dataset.label;

 const perc = CurValue / PasYear * 100;

 const prettyPerc = numeral(perc / 100 ).format('0.0%')
 console.log(perc);

  return (
    <StyledWrap>

      <BoxRow>

        <Sides>
          {CurValue}
        </Sides>

        <Sides>
          <KpiTitle>{DataLable}</KpiTitle>
          <BottomParam>
            <ParamLabel>PY</ParamLabel>
            <ParamValue>{PasYear}</ParamValue>
          </BottomParam>
        </Sides>

      </BoxRow>


      <BoxRow>
        <Tube>
          <Ball percentage={perc}/>
        </Tube>
        <Lable percentage={perc}>{prettyPerc}</Lable>
      </BoxRow>

    </StyledWrap>
  )
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);

module.hot.accept();
