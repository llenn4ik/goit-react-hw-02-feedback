import React from "react";


const Statistics = ({ good, neutral, bad, }) => {

let total=good+neutral+bad;
  return (
    < >
        <h2>Statistics</h2>
        <div>
          <p>Good: {good} </p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>

          <p>Total: {total}</p>
          {/* <p>Positive feedback: {positivePercentage}%</p> */}
        </div>
    </>
  );
};

export default Statistics;
