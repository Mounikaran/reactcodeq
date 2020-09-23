import React, { Component } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardHeader,
  MDBBtn,
} from "mdbreact";

class QuestionCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: null,
      value : null,
    };
  }

  componentDidMount() {
    const options = [];
    if (this.props.tags) {
      this.props.tags.forEach((tag) => {
        options.push({ label: tag.name, value: tag.id });
      });
      this.setState({
        options: options,
      });
    }
  }

  handleChange = (value) => {
    this.setState({
      value : value,
    })
  }

  render() {
    const { options } = this.state;
    return (
      <MDBContainer fluid className="container-md py-md-4 px-0">
        <div className="d-flex justify-content-center ">
          <MDBCard className="w-responsive">
            <MDBCardHeader className="winter-neva-gradient">
              <h3 className="text-center">
                <span className="px-4">
                  Hi, {this.props.user ? this.props.user.username : ""}.
                </span>
                Ask Your Question
              </h3>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBInput type="text" name="title" label="Question Title" />
                <span>Content</span>
                <EditorToolbar />
                <ReactQuill theme="snow" placeholder="create Your content" value={this.state.value} onChange={this.handleChange} modules={modules} formats={formats} />
                <div className="md-form">
                  <span>Select Tags</span>
                  <Select
                    options={options}
                    onChange={this.changeTags}
                    isMulti
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    type="file"
                    className="mb-0"
                    containerClass="mb-0"
                  />
                  <span className="form-text text-muted">
                    You can share screenshot or code page
                  </span>
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" size="sm" className="purple darken-2">
                    {" "}
                    Post{" "}
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    );
  }
}

export default QuestionCreate;
