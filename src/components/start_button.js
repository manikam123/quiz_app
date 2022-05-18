import React, { Component } from "react";

class ButtonComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          style={{ padding: "5px 28px" }}
          onClick={() => this.props.start(this.props.that)}
        >
          Start
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
