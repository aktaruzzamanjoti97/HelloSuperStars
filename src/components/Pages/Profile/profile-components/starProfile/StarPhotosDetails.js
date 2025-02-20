import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Modal from 'react-modal';
import profileAzhari from '../../../../../images/Shakib/20.jpg';
import azhari from "../../../../../images/Shakib/20.jpg";
import azhari2 from "../../../../../images/Shakib/shakib-759-1.jpg";
import azhari3 from "../../../../../images/Shakib/1.jpg";
import "../../../../CSS/Profile/starProfile/starPhotos.css";
import '../../../../CSS/Profile/starProfile/starPhotosDetails.css';

const StarPhotosDetails = () => {

    const [show, setShow] = useState(false)

    // Modal.setAppElement('#root')
    return (
        <div>
            <img
                onClick={() => setShow(true)}
                src={azhari}
                alt=""
                className="img-fluid star-card-left-photos"
            />

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body className="bg-color">
                    <div className="row">
                        <div className="d-flex flex-row-reverse font-weight-bold mt-3">
                            <button onClick={() => setShow(false)} className="btn btn-warning">X</button>
                        </div>
                        <div className="col-md-8">
                            <div className="container">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <div className="d-flex justify-content-center">
                                            <img
                                                className="d-block w-75"
                                                src={azhari}
                                                alt="First slide"
                                            />
                                        </div>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="d-flex justify-content-center">
                                            <img
                                                className="d-block w-75"
                                                src={azhari2}
                                                alt="Second slide"
                                            />
                                        </div>

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="d-flex justify-content-center">
                                            <img
                                                className="d-block w-75"
                                                src={azhari3}
                                                alt="Third slide"
                                            />
                                        </div>

                                    </Carousel.Item>
                                </Carousel>

                                <div className="d-flex justify-content-end me-5">

                                    <p><i class="fas fa-thumbs-up m-2 orange-icon"></i> <span className="text-light">4.3k</span></p>
                                    <p><i class="fas fa-comment-alt m-2 orange-icon"></i> <span className="text-light"> 1.2k</span></p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="d-flex mt-3">
                                    <img
                                        style={{ height: "80px", borderRadius: "50%" }}
                                        src={profileAzhari}
                                        alt=""
                                    />
                                    <div className="m-3">
                                        <h5 className="text-light">Shakib Al Hasan</h5>
                                        <h6 style={{ color: "#a9a9a9" }}>April 30, 2021</h6>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-light">Shakib Al Hasan becomes the 6th player to take 200 wickets and score 4000 runs in Test cricket. He is the fastest cricketer to achieve this feat</p>
                                <p className="bottom-border"></p>
                            </div>


                            <div>
                                <div className="d-flex mt-3">
                                    <div>
                                        <img
                                            style={{ height: "50px", borderRadius: "50%" }}
                                            src={profileAzhari}
                                            alt=""
                                        />
                                        <div className="d-flex justify-content-center">

                                            <div class="vl"></div>
                                        </div>
                                    </div>

                                    <div className="mx-3">
                                        <p className=" text-light border comment-box p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo corrupti nam voluptate vero iusto.</p>

                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <p className="mx-2 text-warning">Like</p>
                                                <p className="mx-2 text-warning">Reply</p>
                                                <p className="mx-2 text-light">3d</p>
                                            </div>
                                            <div>
                                                <p><i class="fas fa-thumbs-up m-2 orange-icon"></i><span className="text-light">350</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>



                            <div className="ms-5">
                                <div className="d-flex mt-3">
                                    <div>
                                        <img
                                            style={{ height: "50px", borderRadius: "50%" }}
                                            src={profileAzhari}
                                            alt=""
                                        />
                                        <div className="d-flex justify-content-center">

                                            <div class="vl"></div>
                                        </div>
                                    </div>


                                    <div className="mx-3">
                                        <p className="border comment-box p-2 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo corrupti nam voluptate vero iusto.</p>

                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <p className="mx-2 text-warning">Like</p>
                                                <p className="mx-2 text-warning">Reply</p>
                                                <p className="mx-2 text-light">3d</p>
                                            </div>
                                            <div>
                                                <p><i class="fas fa-thumbs-up m-2 orange-icon"></i><span className="text-light">150</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="meal-search-box">
                                    <input type="text" className="reply-control form-control" placeholder="Add a Comment" id="search-input" />

                                </div>
                            </div>
                            <div className="meal-search-box">
                                <input type="text" className="search-control form-control" placeholder="Add a Comment" id="search-input" />

                            </div>
                            <div className="text-center">
                                <button className="btn star-button-1 mt-1">
                                    <i className="fas fa-heart text-danger mx-1"></i>
                                    <small className="text-dark"> Like</small>
                                </button>
                                <button className="btn star-button-2 mx-2 mt-1">
                                    <i className="fas fa-comment  mx-1 "></i>
                                    <small> Comment</small>
                                </button>
                                <button className="btn star-btutton-3 mt-1">
                                    <i className="fas fa-share  mx-1"></i>
                                    <small> Share</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default StarPhotosDetails;