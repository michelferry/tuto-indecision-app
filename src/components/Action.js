import React from "react";
import ReactDOM from "react-dom";

const Action = (props) => (
  <div>
      <button className="big-button"
        onClick={props.chooseRandomOption}
        disabled = {!props.hasOptions}
      >
        What should I do?
      </button>
  </div>
);

export default Action;