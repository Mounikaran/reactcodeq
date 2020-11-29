import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdbreact';
import React, { Component } from 'react';

class Chat extends Component {
    render() {
        return (
          <MDBContainer fluid style={{ height: "83vh" }} className="mx-0">
            <MDBRow className="h-100">
              <MDBCol sm="8" className="h-100 px-0">
                <MDBCard className="h-100 bg-light">
                  <MDBCardHeader className="bg-white">
                    <div className="d-flex justify-content-between">
                      {/* <div>
                        <i class="fas fa-arrow-circle-left fa-2x dark-grey-text"></i> 
                        </div> */}
                      <div>
                        <img
                          className="rounded-circle ml-3"
                          src="2.jpeg"
                          height="40"
                          width="40"
                        />
                        <span className="font-weight-bold"> Bob </span>
                      </div>
                    </div>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBContainer style={{ paddingTop: "15rem" }}>
                      <p className="my-2">
                        <span className=" badge-pill badge badge-info text-20">
                          {" "}
                          Hi, Jack !
                        </span>
                      </p>
                      <p className="my-2 text-right">
                        <span className=" badge-pill badge badge-dark text-20">
                          Hey, Bob
                        </span>
                      </p>
                    </MDBContainer>
                  </MDBCardBody>
                  <MDBCardFooter className="bg-white py-0">
                    <div className="d-flex justify-content-between">
                      <div className="w-100">
                        <MDBInput type="text" label="Type Something" />
                      </div>
                      <div className="pt-4">
                        <MDBBtn size="sm" className="px-3 btn-cyan">
                          <i class="far fa-paper-plane fa-2x"></i>
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

              {/* chat users list */}
              <MDBCol sm="4" className="h-100 px-0">
                <MDBCard className="h-100">
                  <MDBCardHeader className="py-0">
                    <div className="d-flex justify-content-between">
                      <div className="w-100">
                        <MDBInput type="text" label="Search User" />
                      </div>
                      <div className="pt-4">
                        <MDBBtn size="sm" color="light-blue">
                          <i class="fas fa-search"></i>
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          src="2.jpeg"
                          height="40"
                          width="40"
                          className="rounded-circle"
                        />{" "}
                        <span className="font-weight-bold ml-2">Bob</span>
                      </div>
                      <div>
                        <span className="text-muted text-12 ">
                          27-Nov-2020 02:25 PM
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          src="3.jpg"
                          height="40"
                          width="40"
                          className="rounded-circle"
                        />{" "}
                        <span className="font-weight-bold ml-2">mouni</span>
                      </div>
                      <div>
                        <span className="text-muted text-12 ">
                          26-Nov-2020 08:41 PM
                        </span>
                      </div>
                    </div>
                    <hr />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    }
}

export default Chat;