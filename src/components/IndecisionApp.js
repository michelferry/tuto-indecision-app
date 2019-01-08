import React from "react";
import ReactDOM from "react-dom";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({
          options: JSON.parse(json)
        }))
      }
    } catch (e) {
      //Default values charged
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length != this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  handleDeleteOptions= () => {
    this.setState(() => ({
      options: []
    }));
  }

  handleCloseModal= () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  deleteSingleOption = (option) => {
    console.log("remove single option "+option)
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => o != option)
    }));
  }

  chooseRandomOption= () => {
    const rand = Math.floor(Math.random()*this.state.options.length);
    this.setState((props) => ({
      selectedOption: this.state.options[rand]
    }))
  }

  handleAddOption = (option) => {
    if(!option){
      return "Enter valid value to add item."
    } else if (this.state.options.indexOf(option) != -1) {
      return "The option already exists."
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
    }
  }

  render(){
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle}  />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} chooseRandomOption={this.chooseRandomOption} />
          <div className="widget">
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} deleteSingleOption = {this.deleteSingleOption}/>
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal}/>
        </div>
      </div>
    );
  }
}

export default IndecisionApp;