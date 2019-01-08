class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visible ? "Hide details" : "Show details"}</button>
        {this.state.visible && <div>Here are some nice details</div>}
      </div>
    )
  }

}

ReactDOM.render(< VisibilityToggle />, document.getElementById("app"));



/* let visible = false;
const toggleDisplay = () => {
  visible = !visible;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDisplay}>{visible ? "Hide details" : "Show details"}</button>
      {visible && <p>Here are some details.</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
}


render(); */