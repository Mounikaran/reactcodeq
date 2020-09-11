import React, { Component } from "react";
import {
  MDBInput,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import axios from "axios";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      responce: null,
    };
  }
  inputChanged = (event) => {
    const email = event.target.value;
    this.setState({
      email: email,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    axios
      .post("rest-auth/password/reset/", { email: email })
      .then((res) => this.props.history.push("/email-has-been-sent/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <MDBContainer fluid className="container-md px-0">
          <div className="d-flex justify-content-center px-0 py-md-5">
            <MDBCard className="w-responsive">
              <MDBCardBody className="px-md-4">
                <h3 className="text-center">
                  Enter your Email Address to Sent Reset Link
                </h3>
                <form onSubmit={this.handleSubmit}>
                  <MDBInput
                    type="email"
                    name="email"
                    label="Enter Your Email Address"
                    onChange={this.inputChanged}
                    value={this.state.email}
                    required
                  />
                  <MDBBtn type="submit" color="blue-grey">
                    Send
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default PasswordReset;
