import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
} from "mdbreact";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
      match: false,
      matchmsg: "",
    };
  }

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
  };

  checkMatch = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
    if (this.state.credentials.password1 === this.state.credentials.password2) {
      this.setState({
        match: true,
        matchmsg: "",
      });
    } else {
      this.setState({
        matchmsg: "Not Matching",
      });
    }
  };

  is_valid = () => {
    const { username, email, password1, password2 } = this.state.credentials;
    if (
      username !== "" &&
      email !== "" &&
      password1 !== "" &&
      password2 !== ""
    ) {
      if (this.state.match) return true;
    }
    return false;
  };

  signup = (event) => {
    event.preventDefault();
    const { username, email, password1, password2 } = this.state.credentials;
    if (this.is_valid())
      this.props.onAuth(username, email, password1, password2);
  };

  render() {
    let errormsg = null;
    if (this.props.error) {
      errormsg = this.props.error.message;
      // errormsg = "Username Already Taken";
    }
    const { isAuthenticated } = this.props;
    return (
      <MDBContainer fluid className="py-md-4 px-0">
        {isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <div className="d-flex justify-content-center w-100">
            <MDBCard style={{ width: "30rem" }}>
              <MDBCardBody>
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Register</strong>
                  </h3>
                </div>
                <form onSubmit={this.signup}>
                  <p>{errormsg}</p>
                  <MDBInput
                    type="text"
                    label="Username"
                    name="username"
                    required
                    group
                    outline
                    validate
                    error="wrong"
                    success="right"
                    className="mb-0"
                    containerClass="mb-0"
                    onChange={this.inputChanged}
                    value={this.state.credentials.username}
                  />
                  <small className="form-text text-muted">
                    Username Should Be Unique and Letters, digits and @.+-_ only
                    allowed.
                  </small>
                  <MDBInput
                    type="email"
                    label="Email Address"
                    name="email"
                    group
                    required
                    outline
                    validate
                    error="wrong"
                    success="right"
                    className="mb-0"
                    containerClass="mb-0"
                    onChange={this.inputChanged}
                    value={this.state.credentials.email}
                  />
                  <small className="form-text text-muted">
                    {" "}
                    Email Address Should be unique.
                  </small>
                  <MDBInput
                    label="Create password"
                    group
                    required
                    outline
                    name="password1"
                    type="password"
                    validate
                    className="mb-0"
                    containerClass="mb-0"
                    onChange={this.inputChanged}
                    value={this.state.credentials.password1}
                  />
                  <small className="form-text text-muted">
                    Minimum 8 Characters required
                  </small>
                  <MDBInput
                    label="Confirm password"
                    group
                    required
                    outline
                    name="password2"
                    type="password"
                    validate
                    className="mb-0"
                    containerClass="mb-0"
                    onChange={this.checkMatch}
                    value={this.state.credentials.password2}
                  />
                  <small className="form-text text-muted">
                    Should Match with Above password{" "}
                    <span className="red-text"> {this.state.matchmsg} </span>
                  </small>

                  <div className="d-flex justify-content-center my-3">
                    <MDBBtn
                      type="submit"
                      gradient="blue"
                      className="btn-block z-depth-1a"
                    >
                      Register
                    </MDBBtn>
                  </div>
                </form>
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
        )}
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
