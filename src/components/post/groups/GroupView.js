import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBListGroupItem,
  MDBListGroup,
  MDBRow,
  MDBCardFooter,
} from "mdbreact";
import React, { Component } from "react";

class GroupView extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="py-2">
          <MDBCard>
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="8">
                  <div className="text-cener">
                    <h3>JS-group</h3>
                  </div>
                </MDBCol>
                <MDBCol sm="4">
                  <div className="d-flex justify-content-end">
                    {/* <MDBBtn className="green darken-2" size="sm"> Join </MDBBtn> */}
                    <MDBBtn className="red darken-2" size="sm">
                      {" "}
                      <b>leave</b>{" "}
                    </MDBBtn>
                    <MDBBtn color="unique" size="sm">
                      {" "}
                      Ask{" "}
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="8">
                  <h4>
                    {" "}
                    Questions <span className="badge badge-secondary">
                      3
                    </span>{" "}
                  </h4>
                  <hr />
                  <MDBCard className="mb-2 hoverable pointer">
                    <MDBCardBody>
                      <div className="text-20">
                        How to uninstall npm modules in node js?
                      </div>
                      <div className="badge badge-info answer-tag z-depth-1-half">
                        {`0 Answers`}
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter className="text-muted font-small bg-white d-flex justify-content-between">
                      <p className="text-12">By : mouni</p>

                      <p className="text-12">Tags : npm js</p>
                      <p className="text-12">
                        {" "}
                        Posted on : Posted on : 27-Nov-2020 12:05 PM
                      </p>
                    </MDBCardFooter>
                  </MDBCard>
                  <MDBCard className="mb-2 hoverable pointer">
                    <MDBCardBody>
                      <div className="text-20">
                        Get String in YYYYMMDD format from JS date object?
                      </div>
                      <div className="badge badge-info answer-tag z-depth-1-half">
                        {`1 Answers`}
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter className="text-muted font-small bg-white d-flex justify-content-between">
                      <p className="text-12">By : jack</p>

                      <p className="text-12">Tags : js</p>
                      <p className="text-12">
                        {" "}
                        Posted on : Posted on : 24-Nov-2020 04:30 PM
                      </p>
                    </MDBCardFooter>
                  </MDBCard>
                  <MDBCard className="mb-2 hoverable pointer">
                    <MDBCardBody>
                      <div className="text-20">
                        javascript date object different in the console and
                        browser
                      </div>
                      <div className="badge badge-info answer-tag z-depth-1-half">
                        {`0 Answers`}
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter className="text-muted font-small bg-white d-flex justify-content-between">
                      <p className="text-12">By : mouni</p>

                      <p className="text-12">Tags : js</p>
                      <p className="text-12">
                        {" "}
                        Posted on : Posted on : 23-Nov-2020 03:15 PM
                      </p>
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol sm="4">
                  <h5>
                    {" "}
                    Members <span className="badge badge-primary">3</span>{" "}
                  </h5>
                  <hr />
                  <MDBListGroup>
                    <MDBListGroupItem>
                      <div className="d-flex">
                        <img
                          src="photo-1503023345310-bd7c1de61c7d.jpeg"
                          height="40"
                          width="40"
                          className="rounded-circle"
                        />
                        <span className="p-1 font-weight-bold pt-2 mt-1 ml-2">
                          {" "}
                          jack{" "}
                        </span>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <div className="d-flex">
                        <img
                          src="2.jpeg"
                          height="40"
                          width="40"
                          className="rounded-circle"
                        />
                        <span className="p-1 font-weight-bold pt-2 mt-1 ml-2">
                          
                          Bob
                        </span>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <div className="d-flex">
                        <img
                          src="3.jpg"
                          height="40"
                          width="40"
                          className="rounded-circle"
                        />
                        <span className="p-1 font-weight-bold pt-2 mt-1 ml-2">
                          {" "}
                          mouni{" "}
                        </span>
                      </div>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

export default GroupView;
