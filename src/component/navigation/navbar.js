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
import { BrowserRouter as Router,Link,NavLink } from "react-router-dom";

class Navbar extends Component {
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
        <MDBNavbar color="elegant-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Epic</strong>
            
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
                {/* <Link to="/">Home</Link> */}
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/customerL">Contact Us</MDBNavLink>
                {/* <Link to="/">Contact Us</Link> */}
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About Us</MDBNavLink>
                {/* <Link to="/">About Us</Link> */}
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
                    {/* <MDBDropdownItem tag={Link} to="/customerL">Customer</MDBDropdownItem> */}
                    <MDBDropdownItem href="/customerL">Customer</MDBDropdownItem>

                    <MDBDropdownItem href="/bookstoreL">Book Stores</MDBDropdownItem>
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
                    <MDBDropdownItem href="/customerReg">Customer</MDBDropdownItem>

                    <MDBDropdownItem href="/bookstoreReg">
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

export default Navbar;
