import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import * as actions from "../../store/actions/actions";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";

class AdminNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      active: 0,
    };
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logout = (event) => {
    event.preventDefault();
    this.props.logout();
    return <Redirect to="/" />;
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <MDBNavbar
        className="peach-gradient container-fluid sticky-top"
        dark
        expand="md"
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/">
              {" "}
              <strong className="text-white">CodeQ-Admin</strong>{" "}
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {isAuthenticated ? (
              <MDBNavbarNav right className="font-weight-bold">
                {/* <MDBNavItem>
                  <MDBNavLink to="/question/ask">Users</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/question/ask">Questions</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/question/ask">Complaints</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
                </MDBNavItem> */}
                {/* <MDBNavItem>
                  <MDBNavLink to="/profile">Profile</MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={this.logout}>
                    Logout
                  </MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="/chat">
                    {" "}
                    <i class="fas fa-comment-alt"></i>{" "}
                  </MDBNavLink>
                </MDBNavItem> */}
              </MDBNavbarNav>
            ) : (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/register">Register</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(AdminNavBar));
