import React, { Component } from 'react';
// ====import components
import Feedback from '../components/Feedback'
// =====import json-s

// =====import styles


 class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  handleChange = e => {
    console.log(good, neutral, bad);

  };
  
  render() {
    const { good, neutral, bad } = this.state;
  return(
      <>
        <Feedback  />
      </>
    )}
  };
  
  export default App