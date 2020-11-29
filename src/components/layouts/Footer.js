import React, { Component } from "react";
import { MDBFooter, MDBContainer } from "mdbreact";
// import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <MDBFooter className="blue-gradient">
        <MDBContainer>
          <div className="d-flex justify-content-between py-3">
            <div className=" font-weight-bolder">
              Copyrights &copy; CodeQ 2020
            </div>
            <div className="">
              <a href="/complaint" className="text-12 font-weight-bold">
                Complaints and Feedback
              </a>
            </div>
          </div>
        </MDBContainer>
      </MDBFooter>
    );
  }
}

export default Footer;
