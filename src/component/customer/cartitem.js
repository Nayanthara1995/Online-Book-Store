import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div>
        <div class="row mb-4">
          <div class="col-md-5 col-lg-3 col-xl-3">
            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <img
                class="img-fluid w-100"
                src={require("../../image/gurugeethaya.jpg")}
                alt="Sample"
              />
              <a href="#!">
                <div class="mask waves-effect waves-light">
                  <img
                    class="img-fluid w-100"
                    src={require("../../image/gurugeethaya.jpg")}
                  />
                  <div class="mask rgba-black-slight waves-effect waves-light"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div class="">
                <div>
                  <h5 class="text-left">ගුරු ගීතය</h5>
                  <p class="mb-3 text-muted text-uppercase small text-left">
                    Novel
                  </p>
                  <p class="mb-2 text-muted text-uppercase small text-left">
                   Martin Wickramasingha
                  </p>
                  <p class="mb-3 text-muted text-uppercase small text-left">
                    Size: M
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="mx-3">
              <a
                href="#!"
                type="button"
                class="card-link-secondary small text-uppercase mr-3"
              >
                <i class="fas fa-trash-alt mr-1"></i> Remove item{" "}
              </a>
              {/* <a
                href="#!"
                type="button"
                class="card-link-secondary small text-uppercase"
              >
                <i class="fas fa-heart mr-1"></i> Move to wish list{" "}
              </a> */}
            </div>
            <p class="mb-0 ml-5">
              <span>
                <strong>$17.99</strong>
              </span>
            </p>
          </div>
        </div>
        <hr class="mb-4"></hr>
      </div>
    );
  }
}

export default CartItem;
