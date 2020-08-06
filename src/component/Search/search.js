import React, { Component } from "react";
import { MDBCol } from "mdbreact";
import "./search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4" className="d-flex justify-content-lg-end ">
          <div className="active-pink-3 active-pink-4 mb-4 w-100">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </MDBCol>
      </div>
    );
  }
}
export default Search;
