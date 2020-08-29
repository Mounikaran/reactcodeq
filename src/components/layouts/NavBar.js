import React, { Component } from "react";

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

class NavBar extends Component {
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
  render() {
    return (
      <MDBNavbar className="blue-gradient container-fluid" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">CodeQ</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/">Dashboard</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/login">Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/register">Register</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/">Logout</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavBar;
