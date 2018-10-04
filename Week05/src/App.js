
import React, { Component } from "react";

class Todo {
	constructor(name) {
		this.name = name;
		this.modify = <button onClick={this.handleModify}> update </button>;
		this.textboxValue = "";
		this.textbox = <input type="text" onChange={this.onTextboxChange} />;
	}

	onTextboxChange = event => {
		this.textboxValue = event.target.value;
	}

	handleModify = () => {
		this.name = this.textboxValue
	}
}

class App extends Component {
  state = {
    newTodo: "",
    updateTodo: ["", -1],
    todos: [
      new Todo("Buy tea"),
      new Todo("Buy boba"),
      new Todo("Boil water"),
      new Todo("Add boba"),
      new Todo("Drain water"),
      new Todo("Add tea")
    ],
  };

  handleDelete = event => {
    var newTodoList = [...this.state.todos]; 
    var index = newTodoList.indexOf(event.target.value);
    newTodoList.splice(index, 1);
    this.setState({todos: newTodoList});
  };

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, new Todo(this.state.newTodo)],
      newTodo: ""
    });
  };

  handleUpdate = (todo) => {
   console.log(todo.handleModify())
   this.setState({
   });
  }

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <div>
            <li key={todo}>
              {todo.name + " "}
              <button  value={todo} onClick={this.handleDelete}>X</button>
	      {todo.textbox}
	      {todo.update}
	      <button  value={todo} onClick={() => this.handleUpdate(todo)}> Update </button>
            </li>
          </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form>
      </div>
    );
  }
}

export default App;
