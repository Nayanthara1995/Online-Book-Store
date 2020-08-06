import React, { Component } from "react";
import SideNav from "./sideNavbar/sidenavbar";
import CustomerNav from "./customernav";
import CartItem from "./cartitem";
import CartPrice from "./cartprice";


class Cart extends Component {
  render() {
    return (
      <div className="container-fluid">
        <CustomerNav />
        <section>
          <div className="row">
            <div className="col-md-2">
              <SideNav />
            </div>
            <div className="col-md-6 ml-5 pl-5 mr-0 ">
              <div className="row">
                <div className="col-lg-12">
                  <div class="card wish-list mb-3 mt-3">
                    <div class="card-body">
                      <h5 class="mb-4">
                        Cart (<span>2</span> items)
                      </h5>
                      <CartItem/>
                      <CartItem/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <CartPrice/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
