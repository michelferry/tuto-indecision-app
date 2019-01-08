class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options:[]
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.chooseRandomOption = this.chooseRandomOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteSingleOption = this.deleteSingleOption.bind(this);
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

  handleDeleteOptions(){
    this.setState(() => ({
      options: []
    }));
  }

  deleteSingleOption(option){
    console.log("remove single option "+option)
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => o != option)
    }));
  }

  chooseRandomOption(){
    const rand = Math.floor(Math.random()*this.state.options.length);
    alert(this.state.options[rand]);
  }

  handleAddOption(option){
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
        <Action hasOptions={this.state.options.length > 0} chooseRandomOption={this.chooseRandomOption} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} deleteSingleOption = {this.deleteSingleOption}/>
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
};

const Action = (props) => {
  return (
    <div>
        <button 
          onClick={props.chooseRandomOption}
          disabled = {!props.hasOptions}
        >
          What should I do?
        </button>
    </div>
  );
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length == 0 && <p>No options yet.</p>}
      <ul>
        {props.options.map((o) => <Option key={props.options.indexOf(o)} value={o} deleteSingleOption={props.deleteSingleOption}/>)}
      </ul>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <li>{props.value}</li>
      <button onClick={(e) => {
        props.deleteSingleOption(props.value)
      }}>Delete option</button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.addNewOption = this.addNewOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  addNewOption(e){
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
      <form onSubmit={this.addNewOption}>
        <input type="text" name="option" />
        <button>Add option</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));