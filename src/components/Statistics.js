import React from "react";
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      {total < 1 ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          <h2>Statistics</h2>
          <div>
            <p>Good: {good} </p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <p>Total: {total}</p>
            <p>Positive feedback: {positive}%</p>
          </div>
        </>
      )}{" "}
    </>
  );
};

export default Statistics;
