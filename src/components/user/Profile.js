import React, { Component, Fragment } from "react";
import Select from "react-select";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBView,
  MDBInput,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBBadge,
} from "mdbreact";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        new_password1: "",
        new_password2: "",
      },
      user: {},
      profile: {},
      user_tags: [],
      preview: null,
      image: null,
      modal: false,
      uploadmodal: false,
      match: false,
      matchmsg: "",
      responce: null,
      edited: true,
      adding_tag: false,
      tags: [],
      options: [],
      default_options: null,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: this.props.user,
      });
    }
    if (this.props.profile) {
      this.setState({
        profile: this.props.profile,
        preview: this.props.profile.profile_pic,
      });
    }
    if (this.props.tags) {
      if (this.props.profile) {
        let temp = [];
        let temp_dv = [];
        this.props.profile.tag.forEach((tag) => {
          temp.push(
            this.props.tags.find((obj) => {
              return obj.id === tag;
            })
          );
        });
        this.setState({
          user_tags: temp,
        });
        temp.map((t, index) => temp_dv.push({ label: t.name, value: t.id }));
        this.setState({
          default_options: temp_dv,
        });
      }
      const options = [];
      this.props.tags.forEach((tag) => {
        options.push({ label: tag.name, value: tag.id });
      });
      this.setState({
        options: options,
      });
    }
  }

  inputChangedUpdate = (event) => {
    const cred = this.state.user;
    cred[event.target.name] = event.target.value;
    this.setState({
      user: cred,
    });
  };
  inputChangedPassword = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
  };

  checkMatch = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({
      credentials: cred,
    });
    if (
      this.state.credentials.new_password1 ===
      this.state.credentials.new_password2
    ) {
      this.setState({
        match: true,
        matchmsg: "",
      });
    } else {
      this.setState({
        match: false,
        matchmsg: "Not Matching",
      });
    }
  };

  handleImageChange = (e) => {
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0],
    });
  };

  handleAdd = () => {
    this.setState({
      adding_tag: !this.state.adding_tag,
    });
  };
  editedToggle = () => {
    this.setState({
      edited: !this.state.edited,
    });
  };

  uploadModal = () => {
    this.setState({
      uploadmodal: !this.state.uploadmodal,
    });
  };
  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.state.user);
  };

  changeTags = (value) => {
    this.setState({
      tags: value,
    });
  };

  handleChangePassword = (e) => {
    e.preventDefault();
    if (this.state.match) {
      if (this.props.token) {
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`,
        };
        axios
          .post("rest-auth/password/change/", this.state.credentials)
          .then((res) => {
            this.setState({
              responce: res.data.detail,
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };

  handleAddTag = (e) => {
    e.preventDefault();
    const options = [];
    const { tags, default_options } = this.state;
    if (tags) {
      tags.forEach((t) => {
        options.push(t.value);
      });
      if (!tags.length) {
        default_options.forEach((t) => {
          options.push(t.value);
        });
      }
    }

    // console.log(this.state.default_options);

    const final_tags = [...new Set(options)];
    // console.log(final_tags);
    this.handleAdd();
    this.handleProfileUpdate(e, final_tags);
  };

  handleProfileUpdate = (e, tags = this.state.profile.tag) => {
    e.preventDefault();

    let form_data = new FormData();
    if (this.state.image)
      form_data.append("profile_pic", this.state.image, this.state.image.name);

    tags.forEach((tag) => {
      form_data.append("tag", tag);
    });
    if (this.props.token) {
      const username = this.state.user.username;
      this.props.updateProfile(username, this.props.token, form_data);
    }
  };

  render() {
    const { user } = this.props;
    const {
      responce,
      profile,
      user_tags,
      default_options,
      options,
    } = this.state;

    return (
      <Fragment>
        <MDBRow className="pt-md-4 pt-2 px-0">
          <MDBCol md="4" sm="12" lg="4" className="px-0">
            <MDBRow className="w-100 mx-0 px-0">
              <MDBCol lg="12" sm="12" className="">
                <div className="w-100 text-center mx-auto">
                  <MDBCard>
                    <MDBView zoom className="w-100">
                      <MDBCardImage
                        className="img-fluid"
                        src={`${profile.profile_pic}`}
                        // src="photo-1503023345310-bd7c1de61c7d.jpeg"
                        waves
                      />
                    </MDBView>
                    <MDBCardBody>
                      <MDBBtn
                        size="sm"
                        gradient="aqua"
                        onClick={this.uploadModal}
                      >
                        Change Profile Picture
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                {user ? (
                  <div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="grey-text">
                          <MDBIcon far icon="user-circle" /> {user.username}
                        </h4>
                      </div>
                      <div className="text-center">
                        {this.state.edited ? (
                          <MDBBtn
                            size="sm"
                            gradient="aqua"
                            onClick={this.editedToggle}
                          >
                            <MDBIcon size="lg" far icon="edit" /> Edit
                          </MDBBtn>
                        ) : (
                          ""
                        )}
                        <MDBBtn
                          size="sm"
                          gradient="peach"
                          onClick={this.modalToggle}
                        >
                          <MDBIcon size="lg" icon="key" /> Change Password
                        </MDBBtn>
                      </div>
                    </div>

                    <form
                      onSubmit={this.handleUpdate}
                      className={`py-2 px-3 ${
                        this.state.edited ? "" : "z-depth-3"
                      } my-4`}
                    >
                      <MDBRow className="px-auto ">
                        <MDBCol md="6" sm="12" lg="6">
                          <MDBInput
                            label="First Name"
                            name="first_name"
                            type="text"
                            value={this.state.user.first_name}
                            onChange={this.inputChangedUpdate}
                            disabled={this.state.edited}
                          />
                        </MDBCol>
                        <MDBCol md="6" sm="12" lg="6">
                          <MDBInput
                            label="Last Name"
                            name="last_name"
                            type="text"
                            value={this.state.user.last_name}
                            onChange={this.inputChangedUpdate}
                            disabled={this.state.edited}
                          />
                        </MDBCol>
                        <MDBCol md="12" sm="12" lg="12">
                          <MDBInput
                            label="Email Address"
                            name="email"
                            type="text"
                            value={this.state.user.email}
                            onChange={this.inputChangedUpdate}
                            disabled={this.state.edited}
                            required
                          />
                        </MDBCol>
                        <MDBCol>
                          <div className="d-flex justify-content-end">
                            {this.state.edited ? (
                              ""
                            ) : (
                              <MDBBtn type="submit" gradient="aqua">
                                Update
                              </MDBBtn>
                            )}
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="my-3">
              <MDBCardBody>
                <strong className="grey-text">Your Tags</strong>
                <div className="row">
                  <div className="col-6 col-lg-8 col-md-8">
                    {user_tags
                      ? user_tags.map((tag, index) => (
                          <MDBBadge
                            pill
                            color="elegant-color"
                            className="m-1 p-2"
                            key={index}
                          >
                            {tag.name}
                          </MDBBadge>
                        ))
                      : ""}
                  </div>
                  <div className="col-6 col-lg-4 text-md-right col-md-4">
                    {this.state.adding_tag ? (
                      ""
                    ) : (
                      <MDBBtn
                        size="sm"
                        className=""
                        onClick={this.handleAdd}
                        color="blue-grey"
                      >
                        Update
                      </MDBBtn>
                    )}
                  </div>
                </div>
                {this.state.adding_tag ? (
                  <div>
                    <form onSubmit={this.handleAddTag}>
                      <Select
                        options={options}
                        defaultValue={default_options ? default_options : ""}
                        onChange={this.changeTags}
                        isMulti
                      />
                      <MDBBtn
                        size="sm"
                        className=""
                        outline
                        onClick={this.handleAdd}
                        color="red"
                      >
                        Cancel
                      </MDBBtn>
                      <MDBBtn
                        size="sm"
                        className="float-right"
                        type="submit"
                        color="dark-green"
                      >
                        {" "}
                        Update{" "}
                      </MDBBtn>
                    </form>
                  </div>
                ) : (
                  " "
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* modal */}

        {/* image upload modal */}
        <MDBModal
          isOpen={this.state.uploadmodal}
          toggle={this.uploadModal}
          centered
        >
          <MDBModalBody className="p-md-5">
            <div className="d-flex p-1 justify-content-center">
              <MDBCard className="w-50">
                <MDBCardImage
                  className="img-fluid"
                  src={`${this.state.preview}`}
                />
              </MDBCard>
            </div>
            <form onSubmit={this.handleProfileUpdate}>
              <div className="md-form">
                <label htmlFor="image">Upload Profile Picture</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={this.handleImageChange}
                />
              </div>

              <div className="text-center pt-4">
                <MDBBtn type="submit" color="green accent-3" size="sm">
                  Change
                </MDBBtn>
                <MDBBtn
                  type="button"
                  onClick={this.uploadModal}
                  outline
                  color="red darken-3"
                  size="sm"
                >
                  Cancel
                </MDBBtn>
              </div>
            </form>
          </MDBModalBody>
        </MDBModal>

        {/* Password change modal */}
        <MDBModal isOpen={this.state.modal} toggle={this.modalToggle} centered>
          <MDBModalHeader toggle={this.modalToggle}>
            Change Password
          </MDBModalHeader>
          <MDBModalBody>
            <p className="text-center py-1">{responce ? responce : ""}</p>
            <form onSubmit={this.handleChangePassword}>
              <MDBInput
                type="password"
                name="new_password1"
                label="New Password"
                className="mb-0"
                containerClass="mb-0"
                onChange={this.inputChangedPassword}
                value={this.state.new_password1}
                required
              />
              <small className="form-text text-muted">
                Minimum 8 Characters required
              </small>
              <MDBInput
                type="password"
                name="new_password2"
                label="Confirm New Password"
                className="mb-0"
                containerClass="mb-0"
                onChange={this.checkMatch}
                value={this.state.new_password2}
                required
              />
              <small className="form-text text-muted">
                Should Match with Above password{" "}
                <span className="red-text"> {this.state.matchmsg} </span>
              </small>
              <div className="py-2 text-center">
                <MDBBtn type="submit" gradient="peach">
                  {" "}
                  Change Password{" "}
                </MDBBtn>
              </div>
            </form>
          </MDBModalBody>
        </MDBModal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (userData) => dispatch(actions.updateUser(userData)),
    updateProfile: (username, token, form_data) =>
      dispatch(actions.updateProfile(username, token, form_data)),
    loadUser: () => dispatch(actions.loadUser()),
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
