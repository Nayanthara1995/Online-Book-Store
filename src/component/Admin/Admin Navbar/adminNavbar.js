import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
    state = {
      isOpen: false
    };np
  
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
  
    render() {
      return (
        <Router>
        <MDBNavbar color="elegant-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">EPIC EasyReading</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/home">Home</MDBNavLink>
              </MDBNavItem>
             
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
  
            <MDBNavItem>
                <MDBNavLink to="/#"><strong className="white-text">Admin</strong>      <MDBIcon icon="user" />
                </MDBNavLink>
            </MDBNavItem>
{/* 
              <MDBNavItem className="mr-1 pr-1">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>Admin */}
                    {/* <MDBIcon icon="user" /> */}
                  {/* </MDBDropdownToggle>
                  
                </MDBDropdown>     
              </MDBNavItem> */}
  
  
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
              </Router>
      );
    }
  }
  
  export default Navbar;