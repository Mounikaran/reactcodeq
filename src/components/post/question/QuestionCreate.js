import React, { Component } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import axios from "axios";
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
      value: null,
      title: null,
      image: null,
      tags: null,
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
      value: value,
    });
  };

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  changeTags = (value) => {
    this.setState({
      tags: value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, image, value, tags } = this.state;
    // console.log(title, image, value, tags.value);

    if (this.props.isAuthenticated) {
      let form_data = new FormData();
      if (this.props.user)
        form_data.append("user_id", this.props.user.pk);
      form_data.append("title", title);
      if (image)
        form_data.append("image", this.state.image, this.state.image.name);
      form_data.append("code", value);
      tags.forEach((tag) => {
        form_data.append("tag", tag.value);
      });
      if (this.props.token) {
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`,
        };
        axios
          .post("post/questions/", form_data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    }
  };

  render() {
    const { options } = this.state;
    return (
      <MDBContainer fluid className="container-md py-md-4 px-0">
        <div className="d-flex justify-content-center ">
          <MDBCard className="w-responsive">
            <MDBCardHeader className="light-blue lighten-5">
              <h3 className="text-center">
                <span className="px-4">
                  Hi, {this.props.user ? this.props.user.username : ""}
                </span>
                Ask Your Question
              </h3>
            </MDBCardHeader>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit}>
                <MDBInput
                  type="text"
                  name="title"
                  label="Question Title"
                  value={this.state.title}
                  onChange={this.changeTitle}
                  required
                />
                <div className="md-form">
                  <span className="mb-0"> Image to Text </span>
                  <MDBInput
                    type="file"
                    className="mb-0 mt-0"
                    containerClass="mb-0 mt-0"
                    onChange={this.handleImageChange}
                  />
                  <span className="form-text text-muted">
                    You can share screenshot or code page
                  </span>
                </div>
                <span>Content</span>
                <EditorToolbar />
                <ReactQuill
                  theme="snow"
                  placeholder="create Your content"
                  value={this.state.value}
                  onChange={this.handleChange}
                  modules={modules}
                  formats={formats}
                />
                <div className="md-form">
                  <span>Select Tags</span>
                  <Select
                    options={options}
                    onChange={this.changeTags}
                    isMulti
                    required
                  />
                </div>

                <div className="text-center">
                  <MDBBtn type="submit" gradient="blue">
                    Post
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
