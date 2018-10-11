import React, { Component } from "react";

class Todo extends React.Component {

  state = {
	textboxValue : "",
	name: ""
  }

  onTextboxChange = event => {
	this.setState({ textboxValue: event.target.value });
  }

  handleModify = event => {
	this.setState( { name: this.state.textboxValue})
  }

  constructor(props) {
	super(props);
	this.state.name = props.name;
  }

  render() {
    return ( <div>
       {this.state.name} 
       <input type="text" onChange={this.onTextboxChange} />
       <button onClick={this.handleModify}> update </button>
      </div>);
  }
}

export default Todo;
