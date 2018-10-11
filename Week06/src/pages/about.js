import React, { Component } from "react";

class About extends React.Component {

  state = {
	textBoxValue: ""
  }

  onTextboxUpdate = event => {
	this.setState( { textBoxValue: event.target.value});
  }
	
  onButtonPress = event => {
	this.props.history.push( { pathname: '/', state: {val:this.state.textBoxValue}});
  }


  render() {
    return (
      <div>
        <h2>About</h2>
	<input type="text" onChange={this.onTextboxUpdate} />
	<button onClick={this.onButtonPress}> Add To List </button>
      </div>
    );
  }
}

export default About;
