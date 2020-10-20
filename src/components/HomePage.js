import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import QuestionList from "./post/question/QuestionList";
// import * as actions from "../store/actions/actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
   
    return (
      <div>
        
        <MDBContainer className="py-md-4 container-md">
          <MDBRow className="px-0">
            <MDBCol md="8" sm="12" className="p-1">
              <QuestionList {...this.props} />
            </MDBCol>
            <MDBCol md="4" sm="12" className="p-1">
              <MDBCard>
                <MDBCardBody>Chat Section</MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};


export default connect(mapStateToProps)(HomePage);
