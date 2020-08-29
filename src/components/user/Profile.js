import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBView,
} from "mdbreact";

class Profile extends Component {
  render() {
    return (
      <MDBContainer className="container-md">
        <MDBRow className="pt-md-4 pt-2 px-0">
          <MDBCol md="4" sm="12" lg="4" className="px-0">
            <MDBRow className="w-100 mx-0 px-0">
              <MDBCol lg="12" sm="12" className="">
                <MDBCard className="">
                  <MDBView hover zoom>
                    <MDBCardImage
                      className="img-fluid"
                      src="logo192.png"
                      waves
                    />
                  </MDBView>
                  <MDBCardBody>
                    <MDBBtn href="#">Upload Image</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className="py-2">
                <MDBCard>
                  <MDBCardBody>
                    HI
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                here will be user details
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Profile;
