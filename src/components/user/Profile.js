import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";
import {
  MDBContainer,
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
} from "mdbreact";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        new_password1: "",
        new_password2: "",
      },
      user: {
        first_name: "",
        last_name: "",
        email: "",
      },
      modal: false,
      deletemodal: false,
      match: false,
      matchmsg: "",
      responce: null,
      edited: true,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: this.props.user,
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

  editedToggle = () => {
    this.setState({
      edited: !this.state.edited,
    });
  };

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  deleteModalToggle = () => {
    this.setState({
      deletemodal: !this.state.deletemodal,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.state.user);
  };

  handleDelete = (e) => {
    e.preventDefault();
    if (this.props.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
      };
      axios
        .delete(`account/users/${this.props.user.username}`)
        .then((res) => this.props.logout())
        .catch(err => console.log(err));
    }
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

  render() {
    const { user } = this.props;
    const { responce } = this.state;
    return (
      <MDBContainer className="container-md">
        <MDBRow className="pt-md-4 pt-2 px-0">
          <MDBCol md="4" sm="12" lg="4" className="px-0">
            <MDBRow className="w-100 mx-0 px-0">
              <MDBCol lg="12" sm="12" className="">
                <div className="w-100 text-center mx-auto">
                  <MDBCard>
                    <MDBView zoom className="w-100">
                      <MDBCardImage
                        className="img-fluid"
                        src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
                        waves
                      />
                    </MDBView>
                    <MDBCardBody>
                      <MDBBtn href="#">Change Profile Picture</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </MDBCol>
              <MDBCol className="py-2">
                <MDBCard>
                  <MDBCardBody></MDBCardBody>
                </MDBCard>
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
              <MDBCardBody></MDBCardBody>
            </MDBCard>
            <MDBRow className="mb-2">
              <MDBCol size="12">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div>
                        {" "}
                        <p className="text-muted">Delete Account</p>{" "}
                      </div>
                      <div>
                        {" "}
                        <MDBBtn
                          size="sm"
                          onClick={this.deleteModalToggle}
                          color="red lighten-2"
                        >
                          {" "}
                          Delete{" "}
                        </MDBBtn>{" "}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        {/* modal */}

        {/* delete account modal */}
        <MDBModal
          isOpen={this.state.deletemodal}
          toggle={this.deleteModalToggle}
          centered
        >
          <MDBModalBody>
            <form onSubmit={this.handleDelete}>
              Are You Sure About <strong>Delete</strong> your Account ?
              <div className="py-2 text-center">
                <MDBBtn size="sm" type="submit" color="red" outline>
                  Delete
                </MDBBtn>
                <MDBBtn
                  size="sm"
                  type="button"
                  onClick={this.deleteModalToggle}
                  color="green"
                >
                  No
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
      </MDBContainer>
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
    loadUser: () => dispatch(actions.loadUser()),
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
