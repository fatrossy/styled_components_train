import styled from 'styled-components';

const StyledWrap = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  color: #FFFFFF;
  display: flex;
  padding: 6px;
  margin: 0;
  height: 90px;
  width: 195px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2F313E;
  box-shadow: 0 10px 5px -5px rgba(0,0,0,.25)
  `

const BoxRow = styled.div`
  position: relative;
  display: flex;
  height: calc(50% - 6px);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${'' /* background-color: tomato; */}
  `

const BottomParam = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: rgba(255,255,255,.35);
  width: 100%;
  height: 50%;
`

const Sides = styled.div`
  display: flex;
  font-size: 36px;
  font-weight: bold;
  min-width: 45%;
  height: 100%;
  flex-direction: column;
  align-content: center;
 /* background-color: green; */
`

const ParamLabel = styled.div`
  font-size: 16px;
  font-weight: normal;
  display: flex;
  justify-content: flex-end;
  width: 40%;
  /*background-color: blue;*/
  height: 100%;
`

const ParamValue = styled.div`
  font-size: 16px;
  font-weight: normal;
  justify-content: flex-end;
  display: flex;
  min-width: 40%;
  /* background-color: pink; */
  height: 100%;
`

const KpiTitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  justify-content: flex-end;
  text-transform: uppercase;
  width: 100%;
  height: 50%;
  ${'' /* background-color: lime; */}
`
const Tube = styled.div`
  position: absolute;
  top: 3px;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(255,255,255,.35);
  overflow: hidden;
`
const Ball = styled.div`
  width: ${props => props.percentage < 100 ? props.percentage : '100' }%;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(255,255,255,1);
`
const Lable = styled.div`
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  bottom: 3px;
  left: ${props => props.percentage < 100 ? props.percentage : '100' }%;
  transform: translateX(-100%);
`

  export { StyledWrap, BoxRow, Sides, ParamLabel, ParamValue, BottomParam, KpiTitle, Tube, Ball, Lable };
