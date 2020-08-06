import React, { Component } from "react";
import {
    MDBRow, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol,
} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import adminSidenav from "../Admin SideNavbar/adminSidenav";


class customerbook extends Component {
    render() {
        return (
            <Router>
                <div>
                   
                    <adminSidenav /> 
                   
                           <MDBRow>
                            <MDBCol size="3"></MDBCol>
                            <MDBCol>
                                <h3 className='h3-responsive font-weight-bold my-4'>Kasun Tharaka</h3>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="3"></MDBCol>
                            <MDBCol>
                                <MDBTable striped>
                                    <MDBTableHead>
                                        <tr>
                                            <th>#</th>
                                            <th>Book</th>
                                            <th>Book Name</th>
                                            <th>Auther</th>
                                            <th>Price</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>1</td>
                                            <td><img className="img-fluid h-25" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" /></td>
                                            <td>Harry Potter</td>
                                            <td>J.K.Rowlin</td>
                                            <td>$123</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" /></td>
                                            <td>The Notebook</td>
                                            <td>Nocholas Sparks</td>
                                            <td>$100</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" /></td>
                                            <td>Twilight Saga</td>
                                            <td>Stephene Meyer</td>
                                            <td>$75</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCol>
                        </MDBRow>
                    {/* </MDBCard> */}
                </div>
            </Router>
        )
    }
}

export default customerbook;