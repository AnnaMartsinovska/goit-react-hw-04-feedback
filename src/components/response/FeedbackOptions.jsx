import { StyledButton } from './Response.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <StyledButton onClick={() => onLeaveFeedback('good')}>Good</StyledButton>
      <StyledButton onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </StyledButton>
      <StyledButton onClick={() => onLeaveFeedback('bad')}>Bad</StyledButton>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
