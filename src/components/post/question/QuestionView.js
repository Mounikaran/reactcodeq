import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact";
import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/actions";
import AnswerCreate from "../answer/AnswerCreate";
import AnswerList from "../answer/AnswerList";
// import { Redirect } from 'react-router-dom';

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: null,
      question: null,
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    if (slug) {
      this.props.onGetQuestion(slug);
    } 
  }

  componentWillUnmount() {}

  isValidSlug = (slug) => {
    if (this.props.questions) {
      const question = this.props.questions.find((obj) => {
        return obj.slug === slug;
      });
      this.setState({
        question: question,
      });
      return true;
    } else {
      return false;
    }
  };

  time24to12 = (time) => {
    var date = time.split(",")[0];
    time = time.split(",")[1];
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

      actual_time =
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (min < 10 ? "0" + min : min) +
        " PM";
    }
    return (
      <span>
        {date} {actual_time}
      </span>
    );
  };

  printName = (obj) => {
    return (
      <span key={obj.id} className="mr-1 badge badge-info">
        {obj.name}
      </span>
    );
  };

  // printContent = (content) => {
  //   return <Highlight> {ReactHtmlParser(content)} </Highlight>
  // }

  render() {
    // const {slug} = this.state;

    // if(!this.isValidSlug(slug)){
    //     return <Redirect to="/404" />
    // }
    const { question, isAuthenticated, user, answers } = this.props;
    // console.log(user)
    return (
      <MDBContainer fluid className="container-md my-md-3">
        {question ? (
          <>
            <MDBCard>
              <MDBCardHeader className="white">
                <div className="text-20"> {question.title} </div>
                <div className="text-muted text-12">
                  {" "}
                  posted on : {this.time24to12(question.created_at)}
                </div>
                <div className="text-right">
                  {this.props.tags
                    ? question.tag.map((tag, index) =>
                        this.printName(
                          this.props.tags.find((obj) => {
                            return obj.id === tag;
                          })
                        )
                      )
                    : ""}
                </div>
              </MDBCardHeader>
              <MDBCardBody>{ReactHtmlParser(question.code)}</MDBCardBody>
            </MDBCard>
            <MDBCard className=" mt-2">
              <MDBCardBody>
                <div className="bg-white">
                  <div className="h4 text-center">
                    <span className="badge badge-default">
                      {question.answer.length} Answer(s)
                    </span>
                  </div>
                  <hr />
                </div>
                {answers ? <AnswerList answers={answers} /> : ""}
                
                <div>
                  Add Your Answer
                  <div className="d-flex justify-content-end">
                    {isAuthenticated ? (
                      <div className="w-responsive">
                        <AnswerCreate
                          question_id={question.id}
                          user_id={user ? user.pk : "undefined"}
                          token={this.props.token}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </>
        ) : (
          " Loading... "
        )}
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.question,
    comments: state.comments,
    answers : state.answers,
    tags: state.tags,
    token: state.token,
    isAuthenticated: state.token !== null,
    user: JSON.parse(state.user),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuestion: (slug) => dispatch(actions.getQuestion(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
