import React, { Component } from "react";
import {
  MDBListGroup,MDBNavLink,MDBListGroupItem,MDBIcon,MDBContainer,MDBRow,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route} from "react-router-dom";
import './sidebar.css'


class SideNav extends Component {
  render() {
    return (
        <Router>
      <div>
  

        <div className="sidebar-fixed position-fixed btn-color">
          <a href="#!" className="logo-wrapper waves-effect"></a>
          <MDBListGroup className="list-group-flush">
            <MDBNavLink
              exact={true}
              to="/books"
              activeClassName="activeClass"
              className="text-white block-example border ml-0 rounded text-left"
            >
              <MDBIcon icon="book" className="mr-3" />
              View Books
            </MDBNavLink>
            <MDBNavLink to="/purchase" activeClassName="activeClass"  className="text-white text-left block-example border my-2 rounded">
              
                <MDBIcon icon="arrow-down" className="mr-3" />
                Purchased Books
              
            </MDBNavLink>

            
          </MDBListGroup>
        </div>
      </div>
      </Router>
    );
  }
}

export default SideNav;