import React, { Component } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
  MDBContainer,
  MDBRow,
  
} from "mdbreact";
import Profile from "./Profile";

class DashBoard extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };
  render() {
    return (
      <MDBContainer className="container-md">
        <Profile {...this.props} />
        <MDBCard className="my-2">
          <div className="d-flex px-2">
            <MDBBtn color="white">
              {" "}
              Questions <span className="badge badge-dark"> 2 </span>
            </MDBBtn>
            <MDBBtn color="light">
              {" "}
              Answers <span className="badge badge-dark"> 1 </span>{" "}
            </MDBBtn>
            {/* <MDBBtn color="light">
              {" "}
              likes <span className="badge badge-dark"> 1 </span>{" "}
            </MDBBtn> */}
          </div>
        </MDBCard>
        <MDBCard className="z-depth-1 mb-2">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="pointer hoverable">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        How to properly store a global variable in flask
                        application
                      </div>
                      <div>
                        <a href="/dashboard" className="px-1 text-secondary">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="/dashboard" className="px-1 text-danger">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="pointer hoverable">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div>How do I redirect to another webpage?</div>
                      <div>
                        <a href="nothing" className="px-1 text-secondary">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="nothing" className="px-1 text-danger">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          <MDBCardBody>
            <div className="text-muted my-2 h4"> You Answered Questions </div>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="pointer hoverable">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        python-how would I put an if else statement in a
                        function 
                      </div>
                      <div>
                        likes <span className="badge badge-info">1</span>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default DashBoard;
