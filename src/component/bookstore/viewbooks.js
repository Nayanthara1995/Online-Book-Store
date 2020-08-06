import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter
} from "mdbreact";
import BookCard from "./bookcard";
import axios from 'axios';

import StoreSideNav from "./storesidenavbar";
import Search from "../Search/search";
import BookStoreNav from "./bookstorenav"
import AddBook from "./addbook";

class ViewBooks extends Component {
  constructor() {
    super();
    axios.post('http://localhost:8080/book/getall',"")
      .then(res => {
        console.log("###" + res.data);
        window.location.href = "/books";
      })
      .catch(err => alert("There is an error : " + err));
  }
  state = {
    modal: false,
    modal2: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  render() {
    return (
      <div>
        <BookStoreNav />
        <StoreSideNav />
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
              <MDBCol size="6" className="text-right">
                <MDBBtn onClick={this.toggle} href="#" gradient="peach">
                  Add
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle} className="peach-gradient"><div className="mx-5 px-5">Add Book</div></MDBModalHeader>
                  <MDBModalBody className="text-left">
                    <AddBook />
                  </MDBModalBody>

                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="1" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {/* <section className="text-center my-5"> */}
          <MDBCol>
            <MDBRow>
              <MDBCol size="3"></MDBCol>
              <MDBCol size="2">
                <h4 className="h1-responsive font-weight-bold text-center mb-5 mt-5">
                  Fiction
                </h4>
              </MDBCol>
              <MDBCol size="6" className="text-right mt-5">
                <MDBBtn onClick={this.toggle2} gradient="peach">
                  Add
                </MDBBtn>
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle2}>
                  <MDBModalHeader toggle={this.toggle2} className="peach-gradient"><div className="mx-5 px-5">Add Book</div></MDBModalHeader>
                  <MDBModalBody className="text-left">
                    <AddBook />
                  </MDBModalBody>

                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="1" md="6" className="mb-lg-0 mb-4"></MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
            <BookCard />
          </MDBCol>
        </MDBRow>
        {/* </section> */}
      </div>
    );
  }
}
export default ViewBooks;
