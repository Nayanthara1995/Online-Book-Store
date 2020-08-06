import React, { Component } from "react";
import {
  MDBListGroup,MDBNavLink,MDBListGroupItem,MDBIcon,MDBContainer,MDBRow,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route} from "react-router-dom";
import './adminSidenav.css'
import AdminNavbar from "../Admin Navbar/adminNavbar";

class SideNav extends Component {
  render() {
    return (
        <Router>
      <div>
        <AdminNavbar/>

        <div className="sidebar-fixed position-fixed btn-color">
          <a href="#!" className="logo-wrapper waves-effect"></a>
          <MDBListGroup className="list-group-flush">
            <MDBNavLink
              exact={true}
              to="/collectorder"
              activeClassName="activeClass"
              className="text-white block-example border my-2 rounded"
            >
              <MDBIcon icon="align-left" className="mr-3" />
              Dashboard
            </MDBNavLink>
            <MDBNavLink to="#" activeClassName="activeClass"  className="text-white block-example border my-2 rounded">
              
                <MDBIcon icon="archway" className="mr-3" />
               Bookstores
              </MDBNavLink>

            <MDBNavLink to="#" activeClassName="activeClass"  className="text-white block-example border my-2 rounded">
              
                <MDBIcon icon="address-book" className="mr-3" />
                Customers
              
            </MDBNavLink>
            {/*<MDBNavLink to="#" activeClassName="activeClass"  className="text-white block-example border my-2 rounded">
              
                <MDBIcon icon="exclamation" className="mr-3" />
                History
              
            </MDBNavLink>
            <MDBNavLink to="/price" activeClassName="activeClass"  className="text-white block-example border my-2 rounded">
              
                <MDBIcon icon="dollar-sign" className="mr-3" />
                Prices
              
            </MDBNavLink> */}
          </MDBListGroup>
        </div>
      </div>
      </Router>
    );
  }
}

export default SideNav;