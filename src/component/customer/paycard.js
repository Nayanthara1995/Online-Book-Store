import React, { Component } from "react";
import {
  MDBListGroup,
  MDBNavLink,
  MDBListGroupItem,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

class PayCard extends Component {
  render() {
    return (
      <div className="d-block my-3 text-left ml-3">
          <img
          
                    class="img-fluid w-25"
                    src={require("../../image/paypal.jpg")}
                  />
                   <img
          
                    class="img-fluid w-25"
                    src={require("../../image/visa.png")}
                  />
                  <img
          
          class="img-fluid w-25"
          src={require("../../image/master.png")}
        />
        <div className="mb-2">
          <input
            name="group2"
            type="radio"
            className="form-check-input with-gap"
            id="radioWithGap4"
            required
          />
          <label className="form-check-label" htmlFor="radioWithGap4">
            Visa
          </label>
        </div>
        <div className="mb-2">
          <input
            iname="group2"
            type="radio"
            className="form-check-input with-gap"
            id="radioWithGap5"
            required
          />
          <label className="form-check-label" htmlFor="radioWithGap5">
            Master
          </label>
        </div>
        <div className="mb-2">
          <input
            name="group2"
            type="radio"
            className="form-check-input with-gap"
            id="radioWithGap6"
            required
          />
          <label className="form-check-label" htmlFor="radioWithGap6">
            Paypal
          </label>
        </div>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
            <label htmlFor="cc-name123">Name on card</label>
            <input
              type="text"
              className="form-control"
              id="cc-name123"
              required
            />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">Name on card is required</div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
            <label htmlFor="cc-number123">Credit card number</label>
            <input
              type="text"
              className="form-control"
              id="cc-number123"
              required
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3" className="mb-3">
            <label htmlFor="cc-name123">Expiration</label>
            <input
              type="text"
              className="form-control"
              id="cc-name123"
              required
            />
            <div className="invalid-feedback">Name on card is required</div>
          </MDBCol>
          <MDBCol md="3" className="mb-3 ml-2">
            <label htmlFor="cc-cvv123">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv123"
              required
            />
            <div className="invalid-feedback">Security code required</div>
          </MDBCol>
          <hr className="mb-4" />
          <MDBBtn color="btn young-passion-gradient" size="lg" className="mx-2" block>
            Place order
          </MDBBtn>
        </MDBRow>
      </div>
    );
  }
}

export default PayCard;
