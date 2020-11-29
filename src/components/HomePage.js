import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardHeader,
  MDBCardFooter,
} from "mdbreact";
import QuestionList from "./post/question/QuestionList";
import { Link, Redirect } from "react-router-dom";
// import * as actions from "../store/actions/actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MDBContainer className="py-md-4 container-md">
          <MDBRow className="px-0">
            <MDBCol md="8" sm="12" className="p-1">
              <QuestionList {...this.props} />
            </MDBCol>
            <MDBCol md="4" sm="12" className="p-1">
              <MDBCard>
                <MDBCardHeader className="text-right">Groups</MDBCardHeader>
                <MDBCardBody className="p-0">
                  <MDBListGroup className="text-right">
                    <MDBListGroupItem className="pointer">
                      <Link to="/groups" className="text-dark">JS-group</Link>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="pointer">
                      Python-Group
                    </MDBListGroupItem>
                    <MDBListGroupItem className="pointer">
                      HTML-Group
                    </MDBListGroupItem>
                    <MDBListGroupItem className="pointer">
                      New - LEarners
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
                <MDBCardFooter className="text-right">
                  <span className="text-primary pointer">More...</span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};


export default connect(mapStateToProps)(HomePage);
