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

    printName = (obj) => {
      return <span key={obj.id} className="mr-1">{obj.name}</span>
    }

    time24to12 = (time) => {
      var date = time.split(',')[0];
      time = time.split(',')[1];
      var hours = time[0] + time[1];
      var min = time[2] + time[3];
      hours = parseInt(hours);
      min = parseInt(min);
      var actual_time = null;
      if (hours < 12) {
        actual_time =
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (min < 10 ? "0" + min : min) +
          " AM";
      } else {
        if (hours !== 12) {
          hours = hours - 12; 
        } 

        actual_time = (hours < 10 ? "0" + hours : hours ) + ":" + (min < 10 ? "0"+min : min) + " PM";
      }
    return <span>{date} {actual_time}</span>;
    }
    
    render() {
        const {questions, slug, redirect} = this.state;

        if(redirect && slug){
          const path = "/question/"+slug;
          return <Redirect to={path} />
        } 

        return (
          <MDBContainer fluid className="container-md px-0">
            {questions ? (
              questions.map((question, index) => (
                <MDBCard
                  className="mb-2 hoverable pointer"
                  key={index}
                  onClick={() => {
                    this.handleClick(question.slug);
                  }}
                >
                  <MDBCardBody>
                    <div className="text-20">{question.title}</div>
                    <div className="badge badge-info answer-tag z-depth-1-half">
                      Answers <span className="">0</span>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter className="text-muted font-small bg-white d-flex justify-content-between">
                    <p className="text-12">By : {question.user.username}</p>

                    <p className="text-12">
                      Tags :{this.props.tags ?question.tag.map((tag, index) =>
                        this.printName(
                          this.props.tags.find((obj) => {
                            return obj.id === tag;
                          })
                        )
                      ):"" }
                      
                    </p>
                    <p className="text-12">
                      {" "}
                      Posted on : {this.time24to12(question.created_at)}
                    </p>
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