import React from 'react';
import ReactDOM from 'react-dom';
import { StyledWrap, BoxRow, Sides, ParamLabel, ParamValue, BottomParam, Data, KpiTitle, Tube, Ball, Lable, StarP } from './styles.js';
import { StyledBody } from './global-style.js';
import { dataset } from './data.js'
import {Star} from './star.js'
import numeral from 'numeral'

export default class Wrapper extends React.Component{
  constructor(){
    super();
    this.state = {
      isGoal: false
    }
    this.handleGoal = this.handleGoal.bind(this)
  }

  handleGoal(){
    this.setState({
      isGoal: !this.state.isGoal
    })

    console.log(this.state.isGoal)
  }


  render(){
    const CurValue = this.props.data.data.value;
    const DataLable = this.props.data.label;

    const param =  this.state.isGoal ? this.props.data.data.goal : this.props.data.data.py
    const perc = CurValue / param * 100;

    const prettyPerc = numeral(perc / 100 ).format('0.0%')

    return (
      <StyledWrap onClick={() => this.handleGoal()}>

        <BoxRow>

          <Sides>
            {CurValue}
          </Sides>

          <Sides>
            <KpiTitle>{DataLable}</KpiTitle>
            <BottomParam>
              <ParamLabel>{this.state.isGoal ? 'goal' : 'py'}</ParamLabel>
              <ParamValue>{param}</ParamValue>
            </BottomParam>
          </Sides>

        </BoxRow>


        <BoxRow>
          <Tube>
            <Ball percentage={perc}/>
          </Tube>



          <Lable percentage={perc}>{perc > 100 && <StarP><Star /></StarP>}{prettyPerc}</Lable>
        </BoxRow>

      </StyledWrap>
    )
  }
}


ReactDOM.render(
  <Wrapper data={dataset} />,
  document.getElementById('app')
);

module.hot.accept();
