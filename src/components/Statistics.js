import React from "react";
import Notification from "./Notification";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
