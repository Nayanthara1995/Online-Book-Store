import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";

import SideNav from './sideNavbar/sidenavbar';
import Search from "../Search/search";
import CustomerNav from "./customernav";
import ViewCard from "./viewcard";

class View extends Component {
  render() {
    return (
      <div>
        <CustomerNav />
        <SideNav />
        <MDBRow>
          <MDBCol>
            <div align="right">
              <MDBRow>
                <MDBCol className="mt-2">
                  <Search />
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="2">
                <h4 className="h1-responsive font-weight-bold text-center mb-5">
                  Novels
                </h4>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="1" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="2">
                <h4 className="h1-responsive font-weight-bold text-center mb-5 mt-5">
                  Fiction
                </h4>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="1" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <ViewCard />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
export default View;
