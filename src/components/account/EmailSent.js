import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class EmailSent extends Component {
  render() {
    return (
      <MDBContainer fluid className="container-md" style={{ height: "70vh" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <h3 className="text-center ">Password reset Link has been sent to your Email address.</h3>
        </div>
      </MDBContainer>
    );
  }
}

export default EmailSent;
