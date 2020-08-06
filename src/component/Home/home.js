import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "../navigation/navbar";

class home extends Component {
    render() {
        return (
            <Router>
                <Navbar />

                <MDBRow>
                    <MDBCol className="ml-4">

                        <MDBCard className="my-5 px-5 pb-5">
                            <MDBCardBody>
                                <h2 className="h1-responsive font-weight-bold text-center my-5"> Welcome!</h2>
                        
                                <p className="text-center w-responsive mx-auto mb-5">
                                    Feel the best experience in reading! Shop with us and you will be having amazing and incomparable 
                                    reading chances as we have all kind of books you need in only one place!
                                </p>
                                <MDBRow>
                                    <MDBCol lg="5">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/20/17/lifestyle.jpg?w968h681"
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol lg="7">
                                        <a href="#!" className="green-text">
                                            <h6 className="font-weight-bold mb-3">
                                                <MDBIcon className="pr-2" />
                                                Preview
                                            </h6>
                                        </a>
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Hall of the MIRRORS</strong>
                                        </h3>
                                        <p>
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                            nihil impedit quo minus id quod maxime placeat facere possimus,
                                            omnis voluptas assumenda est, omnis dolor repellendus et aut
                                            officiis debitis.
                                        </p>
                                        <p>by<a href="#!"><strong>Carine Fox</strong></a>, 19/08/2018</p>
                                        <MDBBtn color="success" size="md" className="waves-light ">
                                            Read more
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <a href="#!" className="pink-text">
                                            <h6 className="font-weight-bold mb-3">
                                                <MDBIcon icon="image" className="pr-2" />Lifestyle</h6>
                                        </a>
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Title of the news</strong>
                                        </h3>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias excepturi sint occaecati cupiditate
                                            non provident.
                                        </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                            , 14/08/2018
                                        </p>
                                        <MDBBtn
                                            color="pink"
                                            size="md"
                                            className="mb-lg-0 mb-4 waves-light"
                                        >
                                            Read more
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol lg="5">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-5" />
                                <MDBRow>
                                    <MDBCol lg="5">
                                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                            <img
                                                className="img-fluid"
                                                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                                alt=""
                                            />
                                            <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                            </a>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol lg="7">
                                        <a href="#!" className="indigo-text">
                                            <h6 className="font-weight-bold mb-3">
                                                <MDBIcon icon="suitcase" className="pr-2" />
                                                Food
                                            </h6>
                                        </a>
                                        <h3 className="font-weight-bold mb-3 p-0">
                                            <strong>Title of the news</strong>
                                        </h3>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                            aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                            sit amet.
                                        </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                                , 11/08/2018
                                        </p>
                                        <MDBBtn color="indigo" size="md" className="waves-light ">
                                            Read more
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Router>
        );
    }
}

export default home;