import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
// import * as actions from "../store/actions/actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isAuthenticated, user } = this.props;

    return (
      <div>
        <MDBJumbotron fluid className="my-0">
          <MDBContainer>
            <h2 className="display-4">Welcome To CodeQ</h2>
            {isAuthenticated ? (
              <h4>HI, {user ? user.username : "loading.."} ! </h4>
            ) : (
              <h4>Hey, Try to Login * </h4>
            )}
            <p className="lead">This is the HomePage of CodeQ</p>
          </MDBContainer>
        </MDBJumbotron>
        <MDBContainer className="py-md-4 container-md">
          <MDBRow className="px-0">
            <MDBCol md="8" sm="12" className="p-1">
              <MDBCard>
                <MDBCardBody>Latest Questions</MDBCardBody>
              </MDBCard>
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
