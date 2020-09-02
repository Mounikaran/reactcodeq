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
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
        first_name: "",
        email: "",
        last_name: "",
      },
      confirm_password: "",
      message: "",
    };
  }

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
  };

  signup = (event) => {
    // console.log(this.state.credentials);
    // axios.post(`http://127.0.0.1:8000/auth`, {username:'admin', password:'admin'}).then((res) => {
    //   console.log(res.data);
    // });
    fetch("http://127.0.0.1:8000/account/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.username[0]);
        this.setState({
          message: data.username[0],
        });
        alert(this.state.message);
      })
      .catch((error) => console.log(error));
  };

  // validatePassword = (event) =>{

  // }

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
                    name="first_name"
                    error="wrong"
                    success="right"
                    onChange={this.inputChanged}
                    value={this.state.credentials.firstname}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Last Name"
                    group
                    type="text"
                    validate
                    outline
                    name="last_name"
                    error="wrong"
                    success="right"
                    onChange={this.inputChanged}
                    value={this.state.credentials.lastname}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Username"
                    group
                    outline
                    validate
                    name="username"
                    error="wrong"
                    success="right"
                    type="text"
                    onChange={this.inputChanged}
                    value={this.state.credentials.username}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Email Address"
                    group
                    outline
                    validate
                    name="email"
                    error="wrong"
                    success="right"
                    type="email"
                    onChange={this.inputChanged}
                    value={this.state.credentials.email}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Create password"
                    group
                    outline
                    name="password"
                    type="password"
                    validate
                    containerClass="mb-0"
                    onChange={this.inputChanged}
                    value={this.state.credentials.password}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Confirm password"
                    group
                    outline
                    name="confirm_password"
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
                  onClick={this.signup}
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
