import * as MyStyles from './App.styled';
import React, { Component } from 'react';
import { Notification } from './Notification';
import { FeedbackOptions } from './FeedBackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  AddFeedback = stateKey => {
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    return (
      <MyStyles.Feedbacks>
        <FeedbackOptions
          options={Object.keys(this.state)}
          addFeedback={this.AddFeedback}
        />
        <MyStyles.Statistics>Statistics</MyStyles.Statistics>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            state={this.state}
            percents={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
          />
        )}
      </MyStyles.Feedbacks>
    );
  }
}

export default App;
