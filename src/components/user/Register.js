import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
} from "mdbreact";
class Register extends Component {
  render() {
    return (
      <MDBContainer fluid className="pt-md-4 px-0">
        <div className="d-flex justify-content-center w-100">
          <MDBCard style={{ width: "40rem" }}>
            <MDBCardBody>
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="First Name"
                    group
                    type="text"
                    validate
                    outline
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Last Name"
                    group
                    type="text"
                    validate
                    outline
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                label="Email Address"
                group
                outline
                validate
                error="wrong"
                success="right"
                type="email"
              />
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Create password"
                    group
                    outline
                    type="password"
                    validate
                    containerClass="mb-0"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Confirm password"
                    group
                    outline
                    type="password"
                    validate
                    containerClass="mb-0"
                  />
                </MDBCol>
              </MDBRow>

              <div className="d-flex justify-content-center mb-3">
                <MDBBtn
                  style={{ width: "12rem" }}
                  type="button"
                  gradient="blue"
                  className="btn-block z-depth-1a"
                >
                  Sign Up
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already A Member ?
                <a href={"/login"} className="blue-text ml-1">
                  Login
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </div>
      </MDBContainer>
    );
  }
}

export default Register;
