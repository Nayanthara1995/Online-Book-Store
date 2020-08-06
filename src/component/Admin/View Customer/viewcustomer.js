import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBCard, MDBPopoverBody, MDBPopover, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import SideNavbar from "../Admin SideNavbar/adminSidenav";

class viewcustomer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SideNavbar />

                    <MDBRow>
                        <MDBCol md='3'></MDBCol>
                        <MDBCol>
                        <h3 className='h3-responsive font-weight-bold my-4'>Registered Customers</h3>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md='3'></MDBCol>
                        <MDBCol>
                    <MDBTable striped>
                        <MDBTableHead color="#1a237e indigo darken-4" textWhite>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Purchased Books</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>1@gmail.com</td>
                                <td>6584</td>
                                <td><a href="#!"></a>Books List</td>
                                <td>
                                <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                            >
                                                <MDBBtn color="danger" size="sm">Block</MDBBtn>
                                                <div>
                                                    
                                                    <MDBPopoverBody>
                                                       This will unable the customer to purchase books from us anymore!
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    Are you sure you want to block this customer?</strong>
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    <MDBBtn color="danger" size="sm">Block</MDBBtn>
                                                    <MDBBtn color="Secondary" size="sm">Cancel</MDBBtn></strong>
                                                    </MDBPopoverBody>
                                                </div>
                                            </MDBPopover>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>2@gamil.com</td>
                                <td>2454</td>
                                <td><a href="#!"></a>Books List</td>
                                <td>
                                <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                            >
                                                <MDBBtn color="danger" size="sm">Block</MDBBtn>
                                                <div>
                                                    
                                                    <MDBPopoverBody>
                                                       This will unable the customer to purchase books from us anymore!
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    Are you sure you want to block this customer?</strong>
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    <MDBBtn color="danger" size="sm">Block</MDBBtn>
                                                    <MDBBtn color="Secondary" size="sm">Cancel</MDBBtn></strong>
                                                    </MDBPopoverBody>
                                                </div>
                                            </MDBPopover>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>3@gmail.com</td>
                                <td>@twitter</td> <td><a href="#!"></a>Books List</td>
                                <td>
                                <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                            >
                                                <MDBBtn color="danger" size="sm">Block</MDBBtn>
                                                <div>
                                                    
                                                    <MDBPopoverBody>
                                                       This will unable the customer to purchase books from us anymore!
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    Are you sure you want to block this customer?</strong>
                                                    </MDBPopoverBody>
                                                    <MDBPopoverBody><strong>
                                                    <MDBBtn color="danger" size="sm">Block</MDBBtn>
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
        );
    }
}

export default viewcustomer;