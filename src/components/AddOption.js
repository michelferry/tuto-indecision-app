import React from "react";
import ReactDOM from "react-dom";

class AddOption extends React.Component {
  state = {
    error: undefined
  }

  addNewOption = (e) => {
    e.preventDefault();

    const newOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(newOption);
    this.setState(() => ({
      error: error
    }));    
    if(!error){
      e.target.elements.option.value = "";
    }
  }

  render(){
    return (
      <div>
      {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.addNewOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;