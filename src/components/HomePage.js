import React, { Component } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

class HomePage extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <MDBJumbotron fluid className="my-0">
          <MDBContainer>
            <h2 className="display-4">Welcome To CodeQ</h2>
            {isAuthenticated ? (
              <h4>HI, You logged in ! </h4>
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

export default HomePage;
