import React, { Component } from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import PayCard from './paycard';

class CartPrice extends Component {
    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
  render() {
    return (
        <div class="card mb-3">
        <div class="card-body">

          <h5 class="mb-3">Order Summary</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total </strong>
                
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>
          

          
          
          <MDBBtn onClick={this.toggle} className="btn young-passion-gradient">Buy</MDBBtn>
          <div>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader className="young-passion-gradient" toggle={this.toggle}><div className= "mx-5 px-5">Payments</div></MDBModalHeader>
          <MDBModalBody>
          <PayCard/>
        </MDBModalBody>
          </MDBModal>
            

            
          </div>
        
     
        </div>


          {/* <button type="button" class="btn peach-gradient btn-block waves-effect waves-light">Buy</button> */}
        
        </div>
      
    )
  }
}

export default CartPrice