import React, { Component } from "react";

export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
    };
  }
  updateColor=(value)=>{
      this.setState({
          background:value,
      })

  }
  render() {
    return (
      <div
        className="fix-box"
        style={{ background: this.state.background }}
        onClick={() => this.props.applyColo(updateColor)}
      >
        <h2>Selection</h2>
      </div>
    );
  }
}
