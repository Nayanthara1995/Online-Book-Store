import React from "react";
import NavBar from "../navigation/navbar";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import "./bookstore.css";

import axios from 'axios';

import { BrowserRouter as Router } from "react-router-dom";

class BookStore extends React.Component {

  onLoginHandler = (e) => {

    const customerRegister = {
      id:1,
      name: this.username.value,
      email: this.email.value,
      password: this.password.value
    }

    axios.post('http://localhost:8080/store/create', customerRegister)
    .then(res => window.location.href="/bookstoreL")
    .catch(err => console.log(err));

    console.log(customerRegister);

  }

  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <Router>
        <div id="bookstore">
          <NavBar />

          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow className="mt-5">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                  >
                    <h1 className="h1-responsive font-weight-bold ">
                      Sign up right now!
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae, quisquam iste, maiores. Nulla.
                    </h6>
                  </MDBAnimation>

                  <MDBCol md="6" xl="5" className="mb-4">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard id="classic-card">
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">
                            <MDBIcon icon="user" /> Register
                          </h3>
                          <hr className="hr-light" />
                          {/* <MDBInput
                            required
                            className="white-text"
                            iconClass="white-text"
                            label="Name"
                            icon="user"
                            containerClass="text-left"
                          />
                          <MDBInput
                            required
                            className="white-text"
                            iconClass="white-text"
                            label="Email"
                            icon="envelope"
                            containerClass="text-left"
                          /> */}
                          {/* <MDBInput required
                          className="white-text"
                          iconClass="white-text"
                          label="Address"
                          icon="address-card"
                          containerClass="text-left"
                          
                        /> */}
                          {/* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Location"
                          icon="location-arrow"
                          containerClass="text-left"
                          
                        /> */}
                          {/* <MDBInput
                            required
                            className="white-text"
                            iconClass="white-text"
                            label="Your password"
                            icon="lock"
                            type="password"
                            containerClass="text-left"
                          />
                          <MDBInput
                            required
                            className="white-text"
                            iconClass="white-text"
                            label="Confirm password"
                            icon="lock"
                            type="password"
                            containerClass="text-left"
                          /> */}

                          <div>
                            <input type="text" placeholder="UserName" style={{ backgroundColor: "transparent", margin: "20px", width: "350px", color: "white" }} ref={input => this.username = input} />
                          </div>
                          <div>
                            <input type="text" placeholder="Email" ref={input => this.email = input} style={{ backgroundColor: "transparent", margin: "20px", width: "350px", color: "white" }} />
                          </div>
                          <div>
                            <input type="password" placeholder="Password" ref={input => this.password = input} style={{ backgroundColor: "transparent", margin: "20px", width: "350px", color: "white" }} />
                          </div>

                          <div className="text-center mt-4 black-text">
                          <button type="submit" onClick={this.onLoginHandler} className="btn aqua-gradient">
                              Sign Up
                            </button>
                            <hr className="hr-light" />
                            {/* <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div> */}
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
      </Router>
    );
  }
}

export default BookStore;
