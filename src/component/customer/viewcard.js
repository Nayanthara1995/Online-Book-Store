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
  MDBIcon,
  MDBTooltip,
} from "mdbreact";

class ViewCard extends Component {
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
          {/* <ul className='rating'>
        <li>
          <MDBIcon icon='star' />
        </li>
        
      </ul> */}
          <MDBCardText>
            J.K.Rawling 2010 March Bloomsbury Publishers
          </MDBCardText>
          <MDBCardFooter className="px-1">
            <span className="float-left font-weight-bold">
              <strong>49$</strong>
            </span>
            <span className="float-right">
              <MDBTooltip domElement placement="top">
                <i className="grey-text fa fa-shopping-cart mr-3" />
                <span>Add to Cart</span>
              </MDBTooltip>
              <MDBTooltip domElement placement="top">
                <i className="grey-text fa fa-share-alt mr-3" />
                <span>Share</span>
              </MDBTooltip>
              <MDBTooltip domElement placement="top">
                <i className="grey-text fa fa-heart" />
                <span>Add to Whishlist</span>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
export default ViewCard;
