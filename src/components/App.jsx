import React, { useState } from 'react';
import { Notification } from './Notification';
import FeedbackOptions from './FeedBackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';
import * as MyStyles from './App.styled';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = stateKey => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [stateKey]: prevFeedback[stateKey] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((feedback.good / countTotalFeedback()) * 100);
    }
  };

  return (
    <MyStyles.Feedbacks>
      <FeedbackOptions
        options={Object.keys(feedback)}
        addFeedback={addFeedback}
      />
      <MyStyles.Statistics>Statistics</MyStyles.Statistics>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          state={feedback}
          percents={countPositiveFeedbackPercentage()}
          total={countTotalFeedback()}
        />
      )}
    </MyStyles.Feedbacks>
  );
};

export default App;
