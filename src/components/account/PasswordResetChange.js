import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";

class PasswordResetChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        uid: "",
        token: "",
        new_password1: "",
        new_password2: "",
      },
      match: false,
      matchmsg: "",
    };
  }
  componentDidMount() {
    const { uid, token } = this.props.match.params;
    this.setState({
      data: {
        token: token,
        uid: uid,
      },
    });
  }
  inputChanged = (event) => {
    const cred = this.state.data;
    cred[event.target.name] = event.target.value;
    this.setState({
      data: cred,
    });
  };

  checkMatch = (event) => {
    let cpass = this.state.data;

    cpass[event.target.name] = event.target.value;
    this.setState({
      data: cpass,
    });
    if (this.state.data.new_password1 === this.state.data.new_password2) {
      this.setState({
        match: true,
        matchmsg: "",
      });
    } else {
      this.setState({
        match: false,
        matchmsg: "Not Matching",
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.match && this.state.token !== "") {
      axios
        .post("rest-auth/password/reset/confirm/", this.state.data)
        .then((res) => this.props.history.push("/login/"))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <MDBContainer fluid className="container-md px-0">
        <div className="d-flex justify-content-center py-md-5">
          <MDBCard className="w-responsive">
            <MDBCardBody className="px-md-4">
              <form onSubmit={this.handleSubmit}>
                <MDBInput
                  name="new_password1"
                  label="New Password"
                  type="password"
                  required
                  className="mb-0"
                  containerClass="mb-0"
                  onChange={this.inputChanged}
                  value={this.state.data.password}
                />
                <small className="form-text text-muted">
                  Minimum 8 Characters required
                </small>
                <MDBInput
                  name="new_password2"
                  label="Confirm New Password"
                  type="password"
                  required
                  className="mb-0"
                  containerClass="mb-0"
                  onChange={this.checkMatch}
                  value={this.state.data.confirm_password}
                />
                <small className="form-text text-muted">
                  Should Match with Above password{" "}
                  <span className="red-text"> {this.state.matchmsg} </span>
                </small>
                <div className="text-center">
                  <MDBBtn type="submit" gradient="aqua">
                    {" "}
                    Reset Password{" "}
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    );
  }
}

export default PasswordResetChange;
