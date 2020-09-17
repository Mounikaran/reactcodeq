import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../store/actions/actions";
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
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.loadUser();
    }
  }

  is_valid = (username, password) => {
    if (username !== "" && password !== "") return true;
    else return false;
  };

  login = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    let { username, password } = this.state.credentials;
    if (this.is_valid(username, password))
      this.props.onAuth(username, password);
  };

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
  };

  render() {
    let errormsg = null;
    if (this.props.error) {
      errormsg = this.props.error.message;
    }
    const { isAuthenticated } = this.props;
    return (
      <MDBContainer fluid className="py-md-4 px-0">
        {isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <div className="d-flex justify-content-center w-100 ">
            <MDBCard style={{ width: "30rem" }}>
              <MDBCardBody>
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Login</strong>
                  </h3>
                </div>
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={this.login}
                >
                  {/* <MDBInput
                      label="Email Address"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                    /> */}
                  <p className="text-center red-text">{errormsg}</p>
                  <MDBInput
                    required
                    id="username"
                    label="Username"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="username"
                    onChange={this.inputChanged}
                    value={this.state.credentials.username}
                  />
                  <MDBInput
                    label="Password"
                    id="password"
                    required
                    group
                    type="password"
                    validate
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}
                    containerClass="mb-0"
                  />
                  <Link to="/password/reset/">
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                      Forgot Password?
                    </p>
                  </Link>
                  <div className="text-center mb-3">
                    <MDBBtn gradient="blue" className="btn-block" type="submit">
                      Login
                    </MDBBtn>
                  </div>
                </form>
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
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
    loadUser: () => dispatch(actions.loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
