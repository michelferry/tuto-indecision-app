const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
  selectedChoice: ""
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    app.selectedChoice = "";
  }
  render();
};

const removeAll = () => {
  app.options = [];
  app.selectedChoice = "";
  render();
}

const onMakeDecision = () => {
  const randomChoice = Math.floor(Math.random()*app.options.length);
  app.selectedChoice = app.options[randomChoice];
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((item) => <li key={app.options.indexOf(item)}>{item}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
      {app.selectedChoice && <p>We selected for you: {app.selectedChoice}!</p>}
    </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}

render();

