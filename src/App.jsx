import React, { Component } from "react";
import { Practice } from "./Componets/Pages/Practice";

export default class App extends Component {
  state = {
    persons: [
      { name: "Tayo", age: 60 },
      { name: "Bayo", age: 30 },
      { name: "Lola", age: 20 },
    ],
  };

  switchNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Bola", age: 60 },
        { name: event.target.value, age: 30 },
        { name: "Kudi", age: 20 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>my Class</h1>

        <Practice
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          ></Practice>

        <Practice
          change = {this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Practice>
        
        <Practice
        click = {() => this.switchNameHandler("Dayo")}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Practice>

        <button onClick={this.switchNameHandler.bind(this, "John")}>
          Next
        </button>
      </div>
    );
  }
}
