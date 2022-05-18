import React from "react";
import "../../App.css";
import ButtonComponent from "../button";
import StartButtonComponent from "../start_button"
import ValidationCountComponent from "../validation_count";
import QuestionComponent from "../question";
import Result from "./result"

import CSS from "../../functions/css/css"
import Quiz_Functionality from "../../functions/js/quiz_functionality"
import { Form, Row, Col, Card } from 'react-bootstrap'
const css = new CSS()
const QuizFunction = new Quiz_Functionality()

var timerInterval

class QuizTwo extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        number_of_question: 20,
        current_question_number: 0,
        correct_count: 0,
        incorrect_count: 0,
        not_attempt: 0,
        questions: [],
        worngAns: [],
        question_1: 0,
        question_2: 0,
        operators: ['+', '-', '*', '/'],
        operator: '',
        currect_answer: 0,
        answer: null,
        showToast: false,
        display: 20,
        start: false
    };

    start = () => {
        this.setState({ start: true })
        QuizFunction.generate_question(this)
        this.setCounter()
    }

    // updateScroe_ = () => {
    //     let quizObj = {
    //         quizId: "quiz1",
    //         quizName: "Arithmetic Quiz 1",
    //         score: this.state.correct_count
    //     }
    //     this.props.updateScroe(quizObj)
    // }

    moveToNext = () => {
        let obj = { no: this.state.current_question_number + 1, que: this.state.question_1 + this.state.operator + this.state.question_2, ans: this.state.currect_answer, type: "missed" }

        this.setState(prevState => ({
            questions: [...prevState.questions, obj]
        }))
        
        // this.updateScroe_()

        this.setState({
            display: 20,
            not_attempt: this.state.not_attempt + 1,
            current_question_number: this.state.current_question_number + 1,
            answer: ""
        });
        QuizFunction.generate_question(this)
        this.setCounter()
    }

    setCounter = () => {
        if (this.state.current_question_number < this.state.number_of_question) {
            timerInterval = setInterval(() => {
                if (this.state.display > 0) {
                    this.setState({
                        ...this.state,
                        display: this.state.display - 1,

                    });
                } else {
                    clearInterval(timerInterval);
                    this.moveToNext();
                }
            }, 1000)
        }
    }


    reset = () => {
        this.setState({
            number_of_question: 20,
            current_question_number: 0,
            correct_count: 0,
            incorrect_count: 0,
            not_attempt: 0,
            questions: [],
            worngAns: [],
            question_1: 0,
            question_2: 0,
            operators: ['+', '-', '*', '/'],
            operator: '',
            currect_answer: 0,
            answer: null,
            showToast: false,
            display: 20,
            start: false
        });
    }



    render() {
        return (
            this.state.start ?
                this.state.current_question_number == this.state.number_of_question ?
                    <Result
                        quiz_no={1}
                        number_of_question={this.state.number_of_question}
                        not_attempt={this.state.not_attempt}
                        correct_count={this.state.correct_count}
                        display={this.state.display}
                        questions={this.state.questions}
                        reset={this.reset}
                    />
                    :
                    <Col lg={6}>
                        <Card style={css.quizBox()}>
                            <Card.Body>
                                <Row className="row text-center">
                                    <Col style={{ fontSize: "30px" }}>
                                        Arithmetic Quiz - 1
                                    </Col>
                                </Row>

                                <div className="d-flex justify-content-between  mt-3">
                                    <div>Missed: {this.state.not_attempt}</div>
                                    <div>Timer: {this.state.display}</div>
                                </div>

                                <div className="mt-3">
                                    <div>
                                        <ValidationCountComponent
                                            name="Question No."
                                            type="question"
                                            current_question_number={this.state.current_question_number}
                                            number_of_question={this.state.number_of_question}
                                            count={null}
                                        />
                                    </div>
                                </div>
                                <Row className="text-center mt-3">
                                    <Col>
                                        <QuestionComponent
                                            operator={this.state.operator}
                                            question_1={this.state.question_1}
                                            question_2={this.state.question_2}
                                            answer={this.state.answer}
                                        />
                                    </Col>
                                </Row>

                                <Row className="text-center mt-3">
                                    <Col md="8">
                                        <Form.Control
                                            type="text"
                                            name="answer"
                                            id="answer"
                                            value={this.state.answer}
                                            onChange={(e) => QuizFunction.handleChange(e, this)}
                                            placeholder="Enter your answ"
                                        />
                                    </Col>
                                    <Col md="4">
                                        <ButtonComponent quizId="quizId1" quizName="Arithmetic Quiz 1" answer={this.state.answer} check_answer={QuizFunction.check_answer} clearInterval={timerInterval} setCounter={this.setCounter} updateScore={this.props.updateScroe}  that={this} />
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col md={6}>
                                        <ValidationCountComponent
                                            name="Currect"
                                            type="currect"
                                            current_question_number={this.state.current_question_number}
                                            number_of_question={this.state.number_of_question}
                                            count={this.state.correct_count}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <ValidationCountComponent
                                            name="Incurrect"
                                            type="incurrect"
                                            current_question_number={this.state.current_question_number}
                                            number_of_question={this.state.number_of_question}
                                            count={this.state.incorrect_count}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                : <Col lg={6}>
                    <Card  style={css.quizBox()}>
                        <Card.Header>
                            <Card.Title>
                                Arithmetic Quiz - 1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center">
                            <StartButtonComponent start={this.start} that={this} />
                        </Card.Body>
                    </Card>
                </Col>
        );
    }
}

export default QuizTwo;
