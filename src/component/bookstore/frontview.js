import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import StoreSideNavbar from "../bookstore/storesidenavbar";
import BookstoreNav from "../bookstore/bookstorenav";

class frontview extends Component {
    render () {
  return (
      <Router>
          <div>
          <BookstoreNav />
              <StoreSideNavbar />

              <MDBRow>
                  <MDBCol size='8'></MDBCol>
                  <MDBCol className="mt-3"><input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" size="4"/>
        <MDBBtn color="#1a237e indigo darken-4" rounded size="sm" type="submit" className="mr-auto text-white">
          Search
        </MDBBtn>
        </MDBCol>
            </MDBRow>
            
            <MDBRow>
            <MDBCol size='3'></MDBCol>
                  <MDBCol size='8'>

    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img className="w-100 h-25" src="https://allethio.com/wp-content/uploads/2020/06/facebook-istock-kindle-ebook-electronic-book-ebooks-ereader-e-reader-e-book-ereaders-kindles.jpg" alt=" className=img-fluid"/>
                {/* <MDBMask overlay="white-slight" className="waves-light" /> */}
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h1 className="font-weight-bold">EPIC</h1>
                <p><h4>Welcome! Easy Reading</h4></p>
                <MDBBtn className="btn waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Novels
                </MDBBtn>
                <MDBBtn className="btn-tw waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Fictions
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Education
                </MDBBtn>
                <MDBBtn color="default" className="waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Religious
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Romance
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  thriller
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Horror
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Adventure
                </MDBBtn>
                <MDBBtn className="btn-gplus waves-light" size="sm">
                  <MDBIcon icon="clone" className="pr-2" />
                  Art
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa nemo enim ipsam voluptatem
                quia voluptas sit qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga quidem rerum facilis est distinctio.
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor
                repellendus. Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae itaque earum rerum.
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <hr className="mb-5 mt-4" />
        
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </div>
    </Router>
  );
}
}

export default frontview;