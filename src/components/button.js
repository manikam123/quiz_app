import React, { Component } from "react";

class ButtonComponent extends Component {
  state = {};
  checkQuestionLength = (that) => {
    if (parseInt(that.state.number_of_question) == parseInt(that.state.current_question_number + 1)) {
      clearInterval(this.props.clearInterval);
      this.props.check_answer(this.props.answer, this.props.that, this.props.quizId, this.props.quizName, this.props.updateScore);
    } else {
      this.props.check_answer(this.props.answer, this.props.that, this.props.quizId, this.props.quizName, this.props.updateScore);
      clearInterval(this.props.clearInterval);
      this.props.setCounter();
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          style={{ padding: "5px 28px" }}
          onClick={() => { this.checkQuestionLength(this.props.that) }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
