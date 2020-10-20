import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import ReactHtmlParser from "react-html-parser";
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
    console.log(this.props.match.params);
    if (this.props) {
      console.log(this.props);
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
    const { question } = this.state;
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
                {question.tag.map((tag, index) =>
                  this.printName(
                    this.props.tags.find((obj) => {
                      return obj.id === tag;
                    })
                  )
                )}
              </div>
            </MDBCardHeader>
            <MDBCardBody>{ReactHtmlParser(question.code)}</MDBCardBody>

            <hr />
            <div className="h4 text-center">
              Answers <span className="badge badge-default"> 1 </span>
            </div>

            <MDBCardBody>
              <div className="text-right">
                <MDBBtn color="default" size="sm">
                  {" "}
                  Answer{" "}
                </MDBBtn>
              </div>
              <div className="row">
                <div className="col-9">
                  <p>This is a working example:</p>
                  <pre spellcheck="false">
                    step = 0<br />
                    def update_step(q):
                    <br />
                    &nbsp; yes = ["y", "yes"]
                    <br />
                    &nbsp;no = ["n", "no"]
                    <br />
                    &nbsp;global step <br />
                    &nbsp;if q in yes:
                    <br /> &nbsp;&nbsp;step += 1 <br />
                    &nbsp;elif q in no: <br />
                    &nbsp;&nbsp;step += 2 <br />
                    &nbsp;else: <br />
                    &nbsp;&nbsp;print("Huh?") <br />
                    &nbsp;while step == 0: <br />
                    &nbsp;&nbsp;q = input("Are the wings covered by an
                    exoskeleton? (Y/N)")
                    <br />
                    &nbsp;&nbsp;update_step(q.lower())
                    <br />
                    &nbsp;&nbsp;print(step)
                  </pre>
                </div>
                <div className="col-3 text-right align-self-center">
                  <button className="btn btn-sm btn-blue-grey">
                    {" "}
                    <i class="far fa-thumbs-up fa-2x"></i>{" "}
                  </button>
                  <span className="text-info h5 badge-success badge">
                    likes 2{" "}
                  </span>
                  <p className="btn btn-sm btn-cyan"> Add Comment</p>
                  <p className="mt-4 mb-0">Answered by jack</p>
                  <p className="text-muted text-12">at 11-Oct-2020 06:12 PM</p>
                </div>
                <div className="col-12">
                  {" "}
                  <span className="text-muted text-12">
                    comments
                  </span> <hr /> Thanks for the answer{" "}
                  <span className="badge badge-light"> green Man </span>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        ) : (
          " Loading... "
        )}
      </MDBContainer>
    );
  }
}

export default QuestionView;