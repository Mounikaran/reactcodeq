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
  MDBInput,
  MDBIcon
} from "mdbreact";

class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <MDBContainer className="container-md">
        <MDBRow className="pt-md-4 pt-2 px-0">
          <MDBCol md="4" sm="12" lg="4" className="px-0">
            <MDBRow className="w-100 mx-0 px-0">
              <MDBCol lg="12" sm="12" className="">
                <div className="w-100 text-center mx-auto">
                  <MDBCard>
                    <MDBView zoom className="w-100">
                      <MDBCardImage
                        className="img-fluid"
                        src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
                        waves
                      />
                    </MDBView>
                    <MDBCardBody>
                      <MDBBtn href="#">Change Profile Picture</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </MDBCol>
              <MDBCol className="py-2">
                <MDBCard>
                  <MDBCardBody></MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                {user ? (
                  <div>
                    <div className="d-flex justify-content-between">
                      <div><h4 className="grey-text"><MDBIcon far icon="user-circle" /> {user.username}</h4></div>
                      <div> <MDBBtn size="sm" gradient="blue"><MDBIcon size="lg" far icon="edit" /> Edit</MDBBtn> </div>
                    </div>
                    <form>
                      <MDBRow className="px-auto">
                        <MDBCol md="6" sm="12" lg="6">
                          <MDBInput
                            label="First Name"
                            material
                            type="text"
                            value={user.first_name}
                            disabled
                          />
                        </MDBCol>
                        <MDBCol md="6" sm="12" lg="6">
                          <MDBInput
                            label="Last Name"
                            material
                            type="text"
                            value={user.last_name}
                            disabled
                          />
                        </MDBCol>
                        <MDBCol md="12" sm="12" lg="12">
                          <MDBInput
                            label="Email Address"
                            material
                            type="text"
                            value={user.email}
                            disabled
                          />
                        </MDBCol>
                      </MDBRow>
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="my-md-3">
                <MDBCardBody></MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Profile;
