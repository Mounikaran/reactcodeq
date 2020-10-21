import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/actions";
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
    if (slug){
      this.props.onGetQuestion(slug);
      
    }
  }

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
    const { question } = this.props;
    return (
      <MDBContainer fluid className="container-md my-md-3">
        {question ? (
          <MDBCard>
            <MDBCardHeader className="white">
              <div className="text-20"> {question.title} </div>
              <div className="text-muted text-12">
                {" "}
                posted on : {this.time24to12(question.created_at)}
              </div>
              <div className="text-right">
                {this.props.tags ? question.tag.map((tag, index) =>
                  this.printName(
                    this.props.tags.find((obj) => {
                      return obj.id === tag;
                    })
                  )
                ) : "" }
                
              </div>
            </MDBCardHeader>
            <MDBCardBody>{ReactHtmlParser(question.code)}</MDBCardBody>

            <hr />
            <div className="h4 text-center">
              Answers <span className="badge badge-default"> </span>
            </div>
          </MDBCard>
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
    answers: state.answers,
    comments: state.comments,
    tags: state.tags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuestion: (slug) => dispatch(actions.getQuestion(slug)),
    onLoadTags: () => dispatch(actions.loadTags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);