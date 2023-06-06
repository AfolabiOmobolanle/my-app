import React, { Component } from "react";
import { Practice } from "./Componets/Pages/Practice";

export default class App extends Component {
  state = {
    persons: [
      { name: "Tayo", age: 60 },
      { name: "Tayo", age: 60 },
      { name: "Tayo", age: 60 },
    ],
  };

  switchNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Bola", age: 60 },
        { name: event.target.value, age: 60 },
        { name: "Omotayo", age: 60 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>my Class</h1>
        <button onClick={this.switchNameHandler.bind(this, "John")}>
          Click Me
        </button>
        <practice
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          ></practice>
        <practice
          change = {this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></practice>
        <practice
        mreazi = {() =>this.switchNameHandler("Dayo")}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></practice>
      </div>
    );
  }
}
