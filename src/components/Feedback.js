import React from "react";

const Feedback = () => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <div>
        <button type="button" id="good" onClick={hendleChange}>
          Good
        </button>
        <button type="button" id="neutral" onClick={hendleChange}>
          Neutral
        </button>
        <button type="button" id="bad" onClick={hendleChange}>
          Bad
        </button>
      </div>
    </>
  );
};
export default Feedback