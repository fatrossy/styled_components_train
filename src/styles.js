import styled from 'styled-components';

const StyledWrap = styled.div`
  padding: 10px;
  margin: 0;
  height: 80px;
  width: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2F313E;
  `

const BoxRow = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: tomato;
  `

const  = styled.div`
  flex-direction: row;
  width: 50%;
  background-color: green;
`

const Up = styled.div`
  height: 50%;
  background-color: blue;
`
const Down = styled.div`
  height: 50%;
  background-color: yellow;
`



  export { StyledWrap, BoxRow, LeftNumber, BoxBottom, RightPart, Up, Down };
