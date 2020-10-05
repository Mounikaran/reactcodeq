import React, { Component } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardFooter } from 'mdbreact';
import { Redirect } from 'react-router-dom';


class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions: null,
          redirect : false,
          slug : null,
        }
    }
    
    componentDidMount(){
        if(this.props.questions){
            this.setState({
                questions: this.props.questions,
            })
        }
    }

    handleClick = (slug) => {
      this.setState({
        redirect : !this.state.redirect,
        slug : slug,
      })
    }
    
    render() {
        const {questions, slug, redirect} = this.state;

        if(redirect && slug){
          const path = "/question/"+slug;
          return <Redirect to={path} />
        } 

        return (
          <MDBContainer fluid className="container-md px-0" >
            {questions ? (
              questions.map((question, index) => (
                <MDBCard
                  className="my-1 hoverable pointer"
                  key={index}
                  onClick={() => {
                    this.handleClick(question.slug)
                  }}
                >
                  <MDBCardBody>
                    <p className="text-20">{question.title}</p>
                  </MDBCardBody>
                  <MDBCardFooter className="text-muted font-small d-flex justify-content-between">
                    <p> Posted on : {question.created_at}</p>
                    <p> By : {question.user.username}</p>
                  </MDBCardFooter>
                </MDBCard>
              ))
            ) : (
              <MDBCard>
                <MDBCardBody>No Questions Out there</MDBCardBody>
              </MDBCard>
            )}
          </MDBContainer>
        );
    }
}

export default QuestionList;