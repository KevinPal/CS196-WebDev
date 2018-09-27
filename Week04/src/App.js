import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "Get boba"]
  };

  addParameter = () => {
    this.setState({
      todos: [...this.state.todos, <p> Get boba <button onClick={this.removeMe(this.state.todos.length, this)}> Remove </button> </p>]
    })
  };

  removeMe = (index, _this) => {
	return function() {
		var newTodos = _this.state.todos.slice(); 
		delete newTodos[index];
		_this.setState({
			todos: newTodos
		})
	}
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
        <button onClick={this.addParameter}> Add todo</button>
      </div>
    );
  }
}

export default App;
