import React, { Component } from "react";
import {
    MDBListGroup, MDBNavLink, MDBCard, MDBListGroupItem, MDBIcon, MDBContainer, MDBRow, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol,
} from "mdbreact";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "../sideNavbar/sidenavbar";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import StoreSidenavbar from "../bookstore/storesidenavbar";
import BookstoreNav from "../bookstore/bookstorenav";

class Storepurchased extends Component {
    render() {
        return (
            <Router>
                <div>
                    <BookstoreNav />
                    <StoreSidenavbar />
                    {/* <section className= 'text-left my-5'></section> */}


                    {/* <MDBCard className='card-image'
                        style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)' }} > */}

                           <MDBRow>
                            <MDBCol lg='2' md='6' className='mb-lg-0 mb-4'></MDBCol>
                            <MDBCol lg='1' md='6' className='mb-lg-0 mb-4'></MDBCol>
                            <MDBCol>
                                <h3 className='h3-responsive font-weight-bold my-4'>Customer Purchsed Books</h3>
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
                                            <th>Book Name</th>
                                            <th>Auther</th>
                                            <th>Price</th>
                                            <th>Quantity Sold</th>
                                            <th>Full Amount</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>1</td>
                                            <td><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" />Harry Potter</td>
                                            <td>J.K.Rowlin</td>
                                            <td>$123</td>
                                            <td>10</td>
                                            <td>$1230</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" />The Notebook</td>
                                            <td>Nocholas Sparks</td>
                                            <td>$100</td>
                                            <td>5</td>
                                            <td>$500</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-left" alt="aligment" />Twilight Saga</td>
                                            <td>Stephene Meyer</td>
                                            <td>$75</td>
                                            <td>10</td>
                                            <td>$750</td>
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

export default Storepurchased;