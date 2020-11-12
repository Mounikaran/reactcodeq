import { MDBRow, MDBCol } from "mdbreact";
import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class AnswerList extends Component {
  constructor(props) {
    super(props);
    this._isMount = false;
    this.state = {
      answers: null,
    };
  }

  componentDidMount() {
    this._isMount = true;
    
  }

  UNSAFE_componentWillReceiveProps() {
    const { answers } = this.props;
    if (answers) {
      this.setState({
        answers: answers,
      });
    }
  }

  componentWillUnmount() {
    this._isMount = false;
    this.setState({
      answers:null,
    })
  }

  render() {
    const { answers } = this.state;
    return (
      <>
        {answers
          ? answers.map((answer, index) => (
              <MDBRow key={index}>
                <MDBCol size="10">{ReactHtmlParser(answer.code)}</MDBCol>
                <MDBCol size="2">likes</MDBCol>
              </MDBRow>
            ))
          : ""}
        <div>
          <hr />
        </div>
      </>
    );
  }
}

export default AnswerList;
