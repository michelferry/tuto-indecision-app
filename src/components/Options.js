import React from "react";
import ReactDOM from "react-dom";
import Option from "./Option";


const Options = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__header__title">Your Options</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}>
        Remove all
      </button>
    </div>
    {props.options.length == 0 && <p className="widget__message">Please add an option to get started.</p>}
    {props.options.map((option, index) => 
      <Option 
        key={index} 
        value={option} 
        count={index + 1}
        deleteSingleOption={props.deleteSingleOption}
      />
    )}
  </div>
);

export default Options;