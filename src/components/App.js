import React, { Component } from 'react';
// ====import components
import Feedback from '../components/Feedback'
// =====import json-s

// =====import styles

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
}
 class App extends Component {
   state = INITIAL_STATE;
// setState({[name]}: good)

  handleChange = e => {
    
      console.log(e.target);

    
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
    return {
      [name]: value[name]+1,
  
    };

  }

  
  render() {
    const { good, neutral, bad } = this.state;
  return(
      <>
        <Feedback  handleChange={this.handleChange}/>
        <div>
          {good}
        </div>
        <div>
          {neutral}
        </div> <div>
          {bad}
        </div>
      </>
    )}
  };
  
  export default App