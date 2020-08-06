import React, { Component } from "react";
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
import './login.css';
import NavBar from "../navigation/navbar";
import axios from 'axios';


class Login extends Component {

  onSubmitHandler = e => {
    const customerLogin = {
      id: '',
      name: '',
      email: this.email.value,
      password: this.password.value
    }

    axios.post('http://localhost:8080/customer/login', customerLogin)
      .then(res => { 
        console.log("###" + res.data.name) ;
        window.location.href="/cusHomePage";
      })
      .catch(err => alert("There is an error : " + err));

    console.log(customerLogin);
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
      <div id="adminloginCustomer">
        <NavBar />

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>

                <MDBCol md="8" xl="8" className="mb-4"></MDBCol>

                <MDBCol md="6" xl="4" className="mb-4">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign In
                        </h3>
                        <hr className="hr-light" />

                        <div>
                          <input type="text" placeholder="Your Email" style={{ backgroundColor: "transparent", margin: "20px", width: "250px", color: "white" }} ref={input => this.email = input} />
                        </div>
                        <div>
                          <input type="password" placeholder="Password" ref={input => this.password = input} style={{ backgroundColor: "transparent", margin: "20px", width: "250px", color: "white" }} />
                        </div>

                        {/* <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your email"
                            icon="envelope"
                            containerClass="text-left"
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your password"
                            icon="lock"
                            type="password"
                            containerClass="text-left"
                          /> */}
                        <div className="text-center mt-4 black-text">
                          <button onClick={this.onSubmitHandler} className="btn aqua-gradient">Login</button>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
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

                          </div>
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
    );
  }
}

export default Login;
//react-router-dom
//symentic ui
