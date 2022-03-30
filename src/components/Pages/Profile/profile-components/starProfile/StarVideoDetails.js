import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import profileAzhari from '../../../../../images/Shakib/pro.jpg';
import azhari from "../../../../../images/Shakib/1.jpg";
// import "../../../../CSS/Profile/starProfile/starPhotos.css";
// import '../../../../CSS/Profile/starProfile/starPhotosDetails.css';
import '../../../../CSS/Profile/starProfile/starVideoDetails.css';


const StarVideoDetails = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <div onClick={() => setShow(true)}>
                <img  
                    src={azhari}
                    alt=""
                    className="img-fluid star-card-left-photos"
                />
                <div class="play-center">
                    <i class="fas fa-play fa-3x"></i>
                </div>
            </div>

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
                            <div className="p-2">
                                <ReactPlayer url="https://www.youtube.com/watch?v=8wb3hiF20bQ" className="img-fluid reactPlayer-style" playing={false}
                                    volume={1} onReady={() => console.log("ready now")} width="60" height="70vh"
                                />
                            </div>
                            <div className="container-fluid">
                                {/* <ReactPlayer url="https://www.youtube.com/watch?v=3jtqM_EsUCQ&t=2s" className="img-fluid"  playing={false}
                                        volume={1} onReady={() => console.log("ready now")}
                                    /> */}

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
                                        <h5 className="text-light">Shakib Al Hasan  </h5>
                                        <h6 style={{ color: "#a9a9a9" }}>6th Dec, 2021</h6>
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

export default StarVideoDetails;