

import React, { Component } from "react";
import Todo from "../components/todo"

class Home extends React.Component {

  state = {
	todos: []
  }

  updateState = () => {
	console.log(this.props.location.state.val)
	this.state.todos.push(this.props.location.state.val)
  }

  render() {
    this.updateState();
    return ( <div>
        <h2>Home</h2>
	    {this.state.todos.map( todo => (
		    <Todo key={todo} name={todo}/>
	    ))}
	{console.log(this.props.location.state)}
      </div>);
  }
}

export default Home;
