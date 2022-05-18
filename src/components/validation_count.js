import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import CSS from "../functions/css/css"
const css = new CSS()

class ValidationCountComponent extends Component {
  
  state = {};
  render() {
    return (
      <Row style={css.rowStyle(this.props.type)}>
        <Col md={8} style={col8Style}>
          {this.props.name}
        </Col>
        <Col md={4} className="text-center" style={css.col4Style(this.props.type)}>
          {
            this.props.type === "question" ? <><span style={currentQueStyle}>{this.props.current_question_number}</span> / {this.props.number_of_question}</>
              :
              this.props.count}
        </Col>
      </Row>
    );
  }
}

const currentQueStyle = {
  fontSize: "20px"
}

const col8Style = {
  fontWeight: "500",
  paddingTop: "10px",
  paddingBottom: "10px",
  lineHeight: "10px"
};

export default ValidationCountComponent;
