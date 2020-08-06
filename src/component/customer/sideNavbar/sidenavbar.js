import React, { Component } from "react";
import {
  MDBListGroup,
  MDBNavLink,
  MDBListGroupItem,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import "./sidebar.css";


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
                to="/collectorder"
                activeClassName="activeClass"
                className="text-white block-example border my-2 rounded "
              >
                <MDBIcon icon="user" className="mr-3" />
                Profile
              </MDBNavLink>
              <MDBNavLink 
                to="/booklist"
                activeClassName="activeClass"
                className="text-white block-example border my-2 rounded"
              >
                <MDBIcon icon="book-open" className="mr-3" />
                BookStores
              </MDBNavLink>

              <MDBNavLink
                to="#"
                activeClassName="activeClass"
                className="text-white block-example border my-2 rounded"
              >
                <MDBIcon icon="list-alt" className="mr-3" />
                History
              </MDBNavLink>
              <MDBNavLink
                to="#"
                activeClassName="activeClass"
                className="text-white block-example border my-2 rounded"
              >
                <MDBIcon icon="shopping-cart" className="mr-3" />
                Cart
              </MDBNavLink>
             
            </MDBListGroup>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideNav;
