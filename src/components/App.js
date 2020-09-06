import React, { Component } from "react";
 
import Section from "../components/Section";
import Feedback from "../components/Feedback";
import Statistics from "../components/Statistics";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    if (name === "good") {
      this.setState((prevState) => {
        return { good: prevState.good + 1 };
      });
      return;
    }
    if (name === "neutral") {
      this.setState((prevState) => {
        return { neutral: prevState.neutral + 1 };
      });
      return;
    }
    if (name === "bad") {
      this.setState((prevState) => {
        return { bad: prevState.bad + 1 };
      });
      return;
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
        {" "}
        <Section title="Please leave feedback">
          <Feedback handleChange={this.handleChange} />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        </Section>
      </>
    );
  }
}

export default App;
