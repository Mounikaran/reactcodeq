import React, { Component } from "react";
import { MDBFooter, MDBContainer } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <MDBFooter className="blue-gradient">
        <MDBContainer>This will be a footer</MDBContainer>
      </MDBFooter>
    );
  }
}

export default Footer;
