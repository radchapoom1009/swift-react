import React, { Component } from "react";

import "./App.css";
import KeyPad from "./components/KeyPadComponent";
import Result from "./components/ResultComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (e) => {
    try {
      const button = e.target.name
      if (button === "=") {
        this.calculate();
      } else if (button === "C") {
        this.reset();
      } else if (button === "CE") {
        this.backspace();
      } else {
        const newResult = this.state.result + button
        
        this.setState({
          result: newResult,
        });
      }
    } catch {
      this.reset();
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result || 0;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.reset()
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
