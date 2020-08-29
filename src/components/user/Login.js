import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBModalFooter,
  MDBContainer,
  MDBIcon,
} from "mdbreact";

class Login extends Component {
  render() {
    return (
      <MDBContainer fluid className="pt-md-4 px-0">
        <div className="d-flex justify-content-center w-100 ">
          <MDBCard style={{ width: "30rem" }}>
            <MDBCardBody>
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Email Address"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn type="button" color="white" className="z-depth-1a">
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href={"/register"} className="blue-text ml-1">
                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </div>
      </MDBContainer>
    );
  }
}

export default Login;
