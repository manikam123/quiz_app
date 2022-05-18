import React from "react";
import "../../App.css";
import CSS from "../../functions/css/css"
import Quiz_Functionality from "../../functions/js/quiz_functionality"
import { Form, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'
const css = new CSS()
const QuizFunction = new Quiz_Functionality()

class QuizTwo extends React.Component {
    constructor(props) {
        super(props)
    }

    reset = () => {
        this.props.reset();
    }

    componentDidMount() {
        let elem = document.getElementById("scorebord")
        if(elem){
            elem.style.display = "none"
        }
    }

    render() {
        return (
            <Col lg={6}>
                <Card style={css.quizBox()}>
                    <Card.Body>
                        <Row className="text-center">
                            <Col style={{ fontSize: "30px" }}>
                                Result
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-between  mt-3">
                            <div>Attempted: {this.props.number_of_question - this.props.not_attempt}</div>
                            <div>Missed: {this.props.not_attempt}</div>
                            <div>Score: {this.props.correct_count + "/" + this.props.number_of_question}</div>
                        </div>

                        <div className="mt-3 result-card-body">
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> Questions</div>
                                    </div>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> Answers</div>
                                    </div>
                                </ListGroup.Item>
                                {
                                    this.props.questions ? this.props.questions.map(row => {
                                        return <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold" style={{ color: row.type == "worng_ans" || row.type == "missed" ? "red" : "" }}> {row.no}. <b>{row.que} = ?</b></div>
                                            </div>
                                            <Badge bg="primary" style={{ color: "white", width: "50px", padding: "5px" }} pill>
                                                {row.ans}
                                            </Badge>
                                        </ListGroup.Item>
                                    }) : null
                                }


                            </ListGroup>
                        </div>

                    </Card.Body>
                    
                </Card>
                
            </Col>
        );
    }
}

export default QuizTwo;
