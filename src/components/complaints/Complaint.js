import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdbreact";
import React, { Component } from 'react';

class Complaint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : "feedback",
        }
    }

    handleChageType = (event) =>{
        event.preventDefault();
        this.setState({
            type:event.target.value,
        })
    }
    
    render() {
        return (
            <div>
                <MDBContainer className="py-3">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol className="" style={{borderRight:"1px solid #aaa"}}>

                        <form>
                            <div className="form-group">
                                <label htmlFor="complaint_type">Complaint Type</label>
                                <select className="form-control" id="complaint_type" onChange={this.handleChageType}>
                                    <option value="feedback"> Feedback </option>
                                    <option value="website_complaint"> website Complaint </option>
                                    <option value="user_complaint">User complaints</option>
                                    <option value="question_complaint"> Question complaint </option>
                                </select>

                            </div>
                                <small className="text-muted"> For user complaint mention username as #username, example:#jack </small><br/>
                                <small className="text-muted"> For Question complaint mention url of the Question </small>
                                <small></small>
                        </form>
                                </MDBCol>
                                <MDBCol>
                                    <form>

                                        <div className="form-group">
                                            <label htmlFor="complaint_content">Content</label>
                                            <textarea rows="5" className="form-control"></textarea>
                                        </div>
                                        <div>
                                            <MDBBtn color="orange" size="sm" className="font-weight-bold"> submit </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </div>
        );
    }
}

export default Complaint;