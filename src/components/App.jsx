import React from 'react';
import { StyledWrap } from './response/Response.styled';
import { Statistics } from './response/Statistics';
import { FeedbackOptions } from './response/FeedbackOptions';
import { Section } from './response/Section';
import { Notification } from './response/Notification';

class Response extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = key => {
    this.setState(prev => ({
      [key]: prev[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) {
      const feedback = Math.ceil(Number((this.state.good / total) * 100));
      return feedback;
    }
    return 0;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <StyledWrap>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Section title="Statistics" />
        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StyledWrap>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Response />
    </div>
  );
};
