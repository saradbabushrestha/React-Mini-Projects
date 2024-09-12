import React from "react";
import { DisplayString } from "./DisplayString";

export class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      name: "",
    };
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Enter your name"
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currentState) => ({ age: currentState.age - 1 }))
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currentState) => ({ age: currentState.age + 1 }))
          }
        >
          +
        </button>
        <br />
        <br />
        <DisplayString name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}
