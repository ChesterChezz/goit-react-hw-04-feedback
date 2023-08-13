import React from 'react';
import PropTypes from 'prop-types';
import * as FBOStyles from './FeedBackOptions.styled';

const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <>
      <FBOStyles.Title>Please leave feedback</FBOStyles.Title>
      <FBOStyles.ButtonsDiv>
        {options.map(option => (
          <FBOStyles.Button
            key={option}
            type="button"
            onClick={() => addFeedback(option)}
          >
            {option}
          </FBOStyles.Button>
        ))}
      </FBOStyles.ButtonsDiv>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  addFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
