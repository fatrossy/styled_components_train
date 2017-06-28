import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import {Box} from './styleflob.js';
import {StyledWrap} from './stylewrap.js';
import {stylebody} from './stylebody.js';

class Wrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      peopleForBox: [],
    };
  }

  componentWillMount() {
    axios.get(`http://api.open-notify.org/astros.json`)
      .then(response => {
        const peopleForBox = response.data.people
        this.setState({peopleForBox})
      })
      .catch(error => {
        console.error('HTTP error\n ' + error)
      });
  }

  render() {
    const { peopleForBox } = this.state
    const BoxList = peopleForBox.map((d, i) => <Box key={`box_numb_${i}`}>{d.name}</Box> )

    console.log(BoxList);
    return(
      <StyledWrap>
        {BoxList}
      </StyledWrap>
    )
  }
};

ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);

module.hot.accept();
