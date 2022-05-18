import React, { Component } from "react";

class QuestionComponent extends Component {
  state = {};
  render() {
    return (
      <div style={{ fontSize: "40px" }}>
        {this.props.question_1} {this.props.operator} {this.props.question_2} = ?
      </div>
    );
  }
}

export default QuestionComponent;
