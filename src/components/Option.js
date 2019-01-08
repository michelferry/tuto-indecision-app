import React from "react";
import ReactDOM from "react-dom";

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.value}</p>
    <button 
      className="button button--link"
      onClick={(e) => {
      props.deleteSingleOption(props.value)
    }}>
      remove
    </button>
  </div>
);

export default Option;