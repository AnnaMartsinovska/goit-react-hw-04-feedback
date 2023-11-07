import React, { useState } from 'react';
import { StyledWrap } from './response/Response.styled';
import { Statistics } from './response/Statistics';
import { FeedbackOptions } from './response/FeedbackOptions';
import { Section } from './response/Section';
import { Notification } from './response/Notification';

const Response = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);

        break;

      case 'neutral':
        setNeutral(prev => prev + 1);

        break;

      case 'bad':
        setBad(prev => prev + 1);

        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total !== 0) {
      const feedback = Math.ceil(Number((good / total) * 100));
      return feedback;
    }
    return 0;
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  return (
    <StyledWrap>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Section title="Statistics" />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StyledWrap>
  );
};

export const App = () => {
  return (
    <div>
      <Response />
    </div>
  );
};
