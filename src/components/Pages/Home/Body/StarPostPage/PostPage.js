import React from "react";
import '../../../../../components/CSS/Home/Post.css';
import Picture from "../../../../../images/navbar/account.jpg"

const Post = () =>{
  return(
    <>
        <div className="Post-Scroll col-md-10 align-items-center ml-2">
        <div className="card left-col-box mb-3 mt-3">
            <div className=" ">
                <h2 className="accordion-header " >
                    <div className="accordion-button profile1-accordion-button left-bottom collapsed">
                        <img src={Picture} className="SidebarStarListImage" alt="..." />
                        <span
                            className="mx-2 text-warning CategoryNameHome">Wallet <br></br>
                            <small className="category-size-chat"> 5:31pm</small>
                            <small className="category-size-chat"> 2nd July</small>
                        </span>
                    </div>
                </h2>
            </div>

            <div className="container my-2 text-light">
                <p>
                    Coming live at 9:00 PM tonight. See you there 🏏
                </p>
            </div>

            <img src={Picture} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">245</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-comment d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Comment</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-share d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Share</small>
                        </div>
                    </div>
                </div>

                <hr class="new5" />

                <div className="text-center">
                    <button className="btn btn-warning ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="text-light"> Like</small>
                    </button>
                    <button className="btn btn-warning mx-2 ">
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
            </div>
        </div>
        <div className="card left-col-box mb-3 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2">
                        <img src={Picture} alt="" className="img-fluid rounded-circle" width="50px" />
                    </div>
                    <div className="col-10 text-light mt-2">
                        <h6>Shakib</h6>
                        <small>5:31pm</small> <small>2nd july</small>
                    </div>
                </div>
            </div>

            <div className="container my-2 text-light">
                <p>
                    Coming live at 9:00 PM tonight. See you there 🏏
                </p>
            </div>

            <img src={Picture} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">245</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-comment d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Comment</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-share d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Share</small>
                        </div>
                    </div>
                </div>

                <hr class="new5" />

                <div className="text-center">
                    <button className="btn btn-warning ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="text-light"> Like</small>
                    </button>
                    <button className="btn btn-warning mx-2 ">
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
            </div>
        </div>
        <div className="card left-col-box mb-3 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2">
                        <img src={Picture} alt="" className="img-fluid rounded-circle" width="50px" />
                    </div>
                    <div className="col-10 text-light mt-2">
                        <h6>Shakib</h6>
                        <small>5:31pm</small> <small>2nd july</small>
                    </div>
                </div>
            </div>

            <div className="container my-2 text-light">
                <p>
                    Coming live at 9:00 PM tonight. See you there 🏏
                </p>
            </div>

            <img src={Picture} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">245</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-comment d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Comment</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-share d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Share</small>
                        </div>
                    </div>
                </div>

                <hr class="new5" />

                <div className="text-center">
                    <button className="btn btn-warning ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="text-light"> Like</small>
                    </button>
                    <button className="btn btn-warning mx-2 ">
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
            </div>
        </div>
        <div className="card left-col-box mb-3 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2">
                        <img src={Picture} alt="" className="img-fluid rounded-circle" width="50px" />
                    </div>
                    <div className="col-10 text-light mt-2">
                        <h6>Shakib</h6>
                        <small>5:31pm</small> <small>2nd july</small>
                    </div>
                </div>
            </div>

            <div className="container my-2 text-light">
                <p>
                    Coming live at 9:00 PM tonight. See you there 🏏
                </p>
            </div>

            <img src={Picture} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">245</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-comment d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Comment</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-share d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Share</small>
                        </div>
                    </div>
                </div>

                <hr class="new5" />

                <div className="text-center">
                    <button className="btn btn-warning ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="text-light"> Like</small>
                    </button>
                    <button className="btn btn-warning mx-2 ">
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
            </div>
        </div>
        <div className="card left-col-box mb-3 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2">
                        <img src={Picture} alt="" className="img-fluid rounded-circle" width="50px" />
                    </div>
                    <div className="col-10 text-light mt-2">
                        <h6>Shakib</h6>
                        <small>5:31pm</small> <small>2nd july</small>
                    </div>
                </div>
            </div>

            <div className="container my-2 text-light">
                <p>
                    Coming live at 9:00 PM tonight. See you there 🏏
                </p>
            </div>

            <img src={Picture} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">245</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-comment d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Comment</small>
                        </div>

                        <div className="col-3">
                            <i className="fas fa-share d-inline text-light mx-1"></i>
                            <small className="d-inline profile-card-text">Share</small>
                        </div>
                    </div>
                </div>

                <hr class="new5" />

                <div className="text-center">
                    <button className="btn btn-warning ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="text-light"> Like</small>
                    </button>
                    <button className="btn btn-warning mx-2 ">
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};
export default Post;