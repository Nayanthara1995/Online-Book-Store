import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class CustomerNav extends Component {
  state = {
    isOpen: false,
  };
  np;

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="pink darken-3" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Epic</strong>
            
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/home">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Contact Us</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About Us</MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem> */}
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="mr-1 pr-1">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Sign In
                    {/* <MDBIcon icon="user" /> */}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    {/* <MDBDropdownItem href="/login">Admin</MDBDropdownItem> */}
                    <MDBDropdownItem href="/login">Customer</MDBDropdownItem>

                    <MDBDropdownItem href="/login">Book Stores</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem className="mr-5 pr-3">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Sign Up
                    {/* <MDBIcon icon="user" /> */}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    {/* <MDBDropdownItem href="/login">Admin</MDBDropdownItem> */}
                    <MDBDropdownItem href="/customer">Customer</MDBDropdownItem>

                    <MDBDropdownItem href="/centerregister">
                      Book Stores
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default CustomerNav;
