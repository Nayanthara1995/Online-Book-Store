import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import SideNav from "./sideNavbar/sidenavbar";
import CustomerNav from "./customernav";
import HistoryCard from "./historycard";

class History extends Component {
  render() {
    return (
      <div>
        <CustomerNav />
        <SideNav />
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Your Collection
          </h2>

          <MDBRow>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
            <MDBCol lg="1" md="6" className="mb-lg-0 mb-4"></MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <HistoryCard />
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <HistoryCard />
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <HistoryCard />
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <HistoryCard />
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    );
  }
}
export default History;
