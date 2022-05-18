import React from "react";
import "./App.css";

import { Form, Container, Row, Col, Toast, ToastHeader, ToastBody, Card } from 'react-bootstrap'
import CSS from "./functions/css/css"
import QuizOne from  "./components/quiz/quiz_one"
import QuizTwo from "./components/quiz/quiz_two"
import ScoreBoard from "./components/quiz/score_board"

const css = new CSS()

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       scores: []
    }

  }

  updateScroe = (data) => {
    
    if(this.state.scores.length){
      let scores_ = this.state.scores ? this.state.scores : []

      for(let i = 0; i < scores_.length; i++ ){
        if(scores_[i].quizId.toString() === data.quizId.toString() ){
          scores_[i].score = data.score
        }
        else{ 
          scores_.push(data)
        }

        if(i == (scores_.length - 1)){
          this.setState({scores: scores_})
        }
      }
    }
    else{
      let scores_ = [data]
      this.setState({scores: scores_})
    }
  }

  render() {
    return (
      <div className="container-fluid ">
       
        <ScoreBoard scores={this.state.scores}/>
        <Row className="home">
          <QuizOne updateScroe={this.updateScroe} />
          <QuizTwo updateScroe={this.updateScroe} />
        </Row>
      </div>
    );
  }
}
export default App;
