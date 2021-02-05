import React from 'react';
import propTypes from 'prop-types'

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return(
    <button type='button' data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  )
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option)=> <FeedbackBtn feedback={option} onLeaveFeedback={onLeaveFeedback} />)
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.func.isRequired,
}

export default FeedbackOptions;
