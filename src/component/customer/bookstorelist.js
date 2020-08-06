import React, { Component } from "react";
import {MDBPopover, MDBPopoverHeader,MDBPopoverBody, MDBRow, MDBBtn, 
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol,} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead, MDBLink } from 'mdbreact';
import SideNavbar from '../customer/sideNavbar/sidenavbar';
import CustomerNav from '../customer/customernav';


class bookstores extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CustomerNav/>
                    <SideNavbar />

                    <MDBRow>
                        <MDBCol lg='2' md='6' className='mb-lg-0 mb-4'></MDBCol>
                        <MDBCol lg='1' md='6' className='mb-lg-0 mb-4'></MDBCol>
                        <MDBCol>
                            <h3 className='h3-responsive font-weight-bold my-4'>Book Stores List</h3>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg='2' md='6' className='mb-lg-0 mb-4'></MDBCol>
                        <MDBCol lg='1' md='6' className='mb-lg-0 mb-4'></MDBCol>

                        <MDBCol>
                            <MDBTable striped>
                                <MDBTableHead>
                                    <tr>
                                        <th>#</th>
                                        <th><strong>Store Name</strong></th>
                                        <th><strong>Contact</strong></th>
                                        <th><strong>Email</strong></th>
                                        <th><strong>Address</strong></th>
                                        <th><strong>Books</strong></th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>1</td>
                                        <td>Store 1</td>
                                        <td>11111</td>
                                        <td>1@gmail.com</td>
                                        <td>1,colombo 7</td>
                                        <td><a href="#!"><strong>View Books</strong></a></td>
                                        <td>
                                        <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                            >
                                                <MDBBtn color="danger" size="sm">Remove</MDBBtn>
                                                <div>
                                                    
                                                    <MDBPopoverBody>
                                                       This will permanently block and remove the bookstore from the system. They can no longer do transactions through here.
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    Are you sure you want to remove this bookstore?</strong>
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    <MDBBtn color="danger" size="sm">Remove</MDBBtn>
                                                    <MDBBtn color="Secondary" size="sm">Cancel</MDBBtn></strong>
                                                    </MDBPopoverBody>
                                                </div>
                                            </MDBPopover>    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Store 2</td>
                                        <td>22222</td>
                                        <td>2@gmail.com</td>
                                        <td>2,colombo 7</td>
                                        <td><a href="#!"><strong>View Books</strong></a></td>
                                        <td>
                                            <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                            >
                                                <MDBBtn color="danger" size="sm">Remove</MDBBtn>
                                                <div>
                                                    
                                                    <MDBPopoverBody>
                                                       This will permanently block and remove the bookstore from the system. They can no longer do transactions through here.
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    Are you sure you want to remove this bookstore?</strong>
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    <MDBBtn color="danger" size="sm">Remove</MDBBtn>
                                                    <MDBBtn color="Secondary" size="sm">Cancel</MDBBtn></strong>
                                                    </MDBPopoverBody>
                                                </div>
                                            </MDBPopover>

                                        </td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>

                </div>
            </Router>
        )
    }
}

export default bookstores;