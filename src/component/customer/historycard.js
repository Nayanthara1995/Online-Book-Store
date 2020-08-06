import React, { Component } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBIcon } from "mdbreact";

class HistoryCard extends Component {
  render() {
    return (
      <MDBCard cascade narrow ecommerce>
        <div className="view zoom">
          <MDBCardImage
            cascade
            src={require("../../image/gurugeethaya.jpg")}
            top
            alt="sample photo"
            overlay="white-slight"
          />
        </div>
        <MDBCardBody className="elegant-color white-text rounded-bottom">
          <a href="#!" className="black-text d-flex justify-content-end">
            <h5 className="white-text">
              Read Now
              <MDBIcon icon="angle-double-right" className="ml-2" />
            </h5>
          </a>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
export default HistoryCard;
