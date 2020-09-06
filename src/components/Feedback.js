import React from "react";

const Feedback = ({ handleChange }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <div>
        <button type="button" name="good" id="good" onClick={handleChange}>
          Good
        </button>
        <button
          type="button"
          name="neutral"
          id="neutral"
          onClick={handleChange}
        >
          Neutral
        </button>
        <button type="button" name="bad" id="bad" onClick={handleChange}>
          Bad
        </button>
      </div>
    </>
  );
};
export default Feedback;
