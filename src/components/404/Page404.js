import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class Page404 extends Component {
  render() {
    return (
      <MDBContainer>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h2>404 - Page Not Found</h2>
            <p className="text-muted"> Click below button, that redirects to Homepage </p>
            <a href={"/"} className="btn amber"> 
             HomePage 
            </a>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Page404;
