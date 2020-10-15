import React from "react";
import PropTypes from "prop-types";

const Feedback = ({ handleChange }) => {
  return (
    <div>
      <button type="button" name="good" id="good" onClick={handleChange}>
        Good
      </button>
      <button type="button" name="neutral" id="neutral" onClick={handleChange}>
        Neutral
      </button>
      <button type="button" name="bad" id="bad" onClick={handleChange}>
        Bad
      </button>
    </div>
  );
};

Feedback.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Feedback;
