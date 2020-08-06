import React, { Component } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardHeader,
} from "mdbreact";
import SideNav from "../Admin SideNavbar/adminSidenav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div className="container-fluid">
          <div className="row mt-2" style={{marginLeft:'300px'}} >
              {/* author books customer card */}
            <div className="col-md-5">
              <div className="row mt-5 mb-2" >
                <div className="col-md-6">
                  <MDBCard >
                    <MDBCardBody className="text-center">
                      <h3>Authors</h3>
                      <h1 className="font-weight-bolder">50 + </h1>
                    </MDBCardBody>
                  </MDBCard>
                </div>
                <div className="col-md-6">
                  <MDBCard>
                    <MDBCardBody className="text-center">
                      <h3>Books</h3>
                      <h1 className="font-weight-bolder">1000 + </h1>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
              <div className="row ">
                
                <div className="col-md-12">
                  <MDBCard style={{ width: "" }}>
                    <MDBCardBody className="text-center">
                      <h3>Customers</h3>
                      <h1 className="font-weight-bolder">200+ </h1>
                      
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>

              <div className="row mt-5 ">
                
                <div className="col-md-12">
                  <MDBCard style={{ width: "" }}>
                      <MDBCardHeader><h3>New BookStores</h3></MDBCardHeader>
                    <MDBCardBody className="text-left">
                      <p className="font-weight-bolder">BookStore Name</p>
                      <p>BookStore address</p>
                      <hr></hr>
                      <p className="font-weight-bolder">BookStore Name</p>
                      <p>BookStore address</p>
                      <hr></hr>
                      
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>

            </div>

            <div className="col-md-5">
           
                  <MDBCard className="mt-5">
                      <MDBCardHeader><h3>New Books</h3></MDBCardHeader>
                    <MDBCardBody className="text-center">
                      <div className="row">
                          <div className="col-md-2">
                              <img style={{width:'50px'}} src="https://lh3.googleusercontent.com/proxy/F8hrfSKs9IGE9lo-UuOA4ud10PJiwgHYp50Ir466v02XuBJOt2WjtT2l2LiU0ltOLwG0ISlu4kk_RrAmhJ5vqM1MtmiE0u31INKD6X36CRpaCClLvtPG"></img>
                          </div>
                          <div className="col-md-8 text-left ml-1">
                              
                                  <h4 className="font-weight-bolder">Book Title</h4>
                                  <p>Author Name</p>
                              
                          </div>
                          
                      </div>
                      <hr></hr>
                      <div className="row">
                          <div className="col-md-2">
                              <img style={{width:'50px'}} src="https://lh3.googleusercontent.com/proxy/F8hrfSKs9IGE9lo-UuOA4ud10PJiwgHYp50Ir466v02XuBJOt2WjtT2l2LiU0ltOLwG0ISlu4kk_RrAmhJ5vqM1MtmiE0u31INKD6X36CRpaCClLvtPG"></img>
                          </div>
                          <div className="col-md-8 text-left ml-1">
                              
                                  <h4 className="font-weight-bolder">Book Title</h4>
                                  <p>Author Name</p>
                              
                          </div>
                          
                      </div>
                      <hr></hr>

                      <div className="row">
                          <div className="col-md-2">
                              <img style={{width:'50px'}} src="https://lh3.googleusercontent.com/proxy/F8hrfSKs9IGE9lo-UuOA4ud10PJiwgHYp50Ir466v02XuBJOt2WjtT2l2LiU0ltOLwG0ISlu4kk_RrAmhJ5vqM1MtmiE0u31INKD6X36CRpaCClLvtPG"></img>
                          </div>
                          <div className="col-md-8 text-left ml-1">
                              
                                  <h4 className="font-weight-bolder">Book Title</h4>
                                  <p>Author Name</p>
                              
                          </div>
                          
                      </div>
                      <hr></hr>

                      <div className="row">
                          <div className="col-md-2">
                              <img style={{width:'50px'}} src="https://lh3.googleusercontent.com/proxy/F8hrfSKs9IGE9lo-UuOA4ud10PJiwgHYp50Ir466v02XuBJOt2WjtT2l2LiU0ltOLwG0ISlu4kk_RrAmhJ5vqM1MtmiE0u31INKD6X36CRpaCClLvtPG"></img>
                          </div>
                          <div className="col-md-8 text-left ml-1">
                              
                                  <h4 className="font-weight-bolder">Book Title</h4>
                                  <p>Author Name</p>
                              
                          </div>
                          
                      </div>
                      <hr></hr>
                    </MDBCardBody>
                  </MDBCard>
                
            </div>



          </div>
        </div>
      </div>
    );
  }
}



export default Dashboard;
