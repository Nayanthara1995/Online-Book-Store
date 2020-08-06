import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';

class AddBook extends Component {
    onSubmitHandler = e => {
        const newBook = {
          id: 2,
          bookName: this.bookName.value,
          authorName: this.authorName.value,
          date: this.date.value,
          publisher: this.publisher.value
        }
    
        axios.post('http://localhost:8080/book/add', newBook)
          .then(res => { 
            console.log("###" + res.data.name) ;
            window.location.href="/books";
          })
          .catch(err => alert("There is an error : " + err));
    
        console.log(newBook);
      }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <label htmlFor="bookname" className="grey-text">
                Book name
              </label>
              <input
                type="text"
                id="bookname"
                className="form-control" 
                ref={input => this.bookName = input}
              />
              <br />
              <label htmlFor="authorname" className="grey-text">
                Author Name
              </label>
              <input
                type="text"
                id="authorname"
                className="form-control" 
                ref={input => this.authorName = input}
              />
              <br />
              <label
                htmlFor="publisheddate"
                className="grey-text"
              >
                  Published date
              </label>
              <input
                type="date"
                id="publisheddate"
                className="form-control" 
                ref={input => this.date = input}
              />
              <br />
              <label
                htmlFor="publisher"
                className="grey-text"
              >
                Publisher
              </label>
              <input
                type="text"
                id="publisher"
                className="form-control" 
                ref={input => this.publisher = input}
              />
               <br />
              {/* <label
                htmlFor="bookimage"
                className="grey-text"
              >
                Image
              </label>
              <input
                type="file"
                id="bookimage"
                className="mx-3"
              /> */}
              <div className="text-center mt-4">
                <button className="btn peach-gradient" type="submit" onClick={this.onSubmitHandler}>
                  Add 
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddBook;
