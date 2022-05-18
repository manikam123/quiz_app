import React, { Component } from 'react'
import { Form, Container, ListGroup, Badge, Card } from 'react-bootstrap'

export default class ScoreBoard extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <Container className='score-board p-5' id="scorebord">
                
               {
                   this.props.scores && this.props.scores.length ? 
               
                <Card>
                    <Card.Header>
                        <Card.Title>Score Bord</Card.Title>
                    </Card.Header>
                    <Card.Body className='card-body '>
                        <ListGroup as="ol" numbered>
                            {
                                (() => {
                                    const key = 'quizId';
                                    const arrayUniqueByKey = [...new Map(this.props.scores.map(item =>
                                        [item[key], item])).values()];
                                       return arrayUniqueByKey ? arrayUniqueByKey.map(row => {
                                            return <ListGroup.Item
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                                key={row.quizName}
                                            >
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold"> {row.quizName} </div>
                                                </div>
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold"> Scored: {row.score}</div>
                                                </div>
                                            </ListGroup.Item>
                                        }) : null
                                })()

                                
                            }

                        </ListGroup>
                    </Card.Body>
                </Card>
                : null }
            </Container>
        )
    }
}
