import React, { Component } from "react";
import { MDBFooter, MDBContainer } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      
      <MDBFooter className="blue-gradient">
        <MDBContainer>
          <div className="text-center py-3 font-weight-bolder">
            Copyrights &copy; CodeQ 2020
          </div>
        </MDBContainer>
      </MDBFooter>
      
    );
  }
}

export default Footer;
