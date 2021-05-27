import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ["red", "green", "purple", "salmon", "pink", "blue"],
      currentColor: "white"
    };
  }
  addColor = () => {
    let item = Math.floor(Math.random() * this.state.color.length);
    this.setState({ currentColor: this.state.color[item] });
  };
  render() {
    return (
      <div style={{ background: this.state.currentColor }}>
        <h5>Color Flipper</h5>
        <h5>Simple Hex</h5>
        <div className="wrapper">
          <span>Background Color:{this.state.currentColor}</span>
          <p>
            <button onClick={this.addColor} className="btn">
              Click Me
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
