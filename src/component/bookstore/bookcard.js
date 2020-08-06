import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdbreact";


class BookCard extends Component {
  render() {
    return (
      <MDBCard cascade narrow ecommerce>
        <MDBCardImage
          cascade
          src={require("../../image/view.jpg")}
          top
          alt="sample photo"
          overlay="white-slight"
        />
        <MDBCardBody cascade className="text-center">
          <a href="#!" className="grey-text">
            <h5>1st Edition</h5>
          </a>
          <MDBCardTitle>
            <strong>
              <a href="#!">Harry Potter</a>
            </strong>
          </MDBCardTitle>

          <MDBCardText>
            J.K.Rawling 2010 March Bloomsbury Publishers
          </MDBCardText>
          <MDBCardFooter className="px-1">
            <span className="float-left font-weight-bold">
              <strong>49$</strong>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default BookCard;