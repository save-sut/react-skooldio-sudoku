import React from "react";

const Cell = ({ isInitial, onChange, number }) => (
  <div
    onClick={e => {
      if (isInitial) {
        return;
      }
      onChange((number + 1) % 5);
    }}
    className={`cell ${isInitial ? "initial" : ""}`}
  >
    {number !== 0 && number}
  </div>
);

/*
const Cell = props => (
  <div
    onClick={e => {
      if (props.isInitial) {
        return;
      }
      props.onChange((props.number + 1) % 5);
    }}
    className={`cell ${props.isInitial ? "initial" : ""}`}
  >
    {props.number !== 0 && props.number}
  </div>
);
*/
export default Cell;
