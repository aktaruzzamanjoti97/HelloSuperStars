import React from "react";
import '../../../../../components/CSS/Home/Post.css';
import Shakib from "../../../../../images/Profile/Shakib.jpg"
import Azhari from "../../../../../images/Profile/Azhari.jpg"
import Ayman from "../../../../../images/Profile/ayman.jpg"

const Post = () =>{
  return(
    <>
        <div className="Post-Scroll col-md-10 align-items-center ml-2">
            <div className="card left-col-box PostCard mb-3 mt-3">
                <div className="accordion-item PostBack ">
                    <h2 className="accordion-header PostBack" >
                        <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                            <img src={Shakib} className="PostImgHome" alt="..." />
                            <span className="mx-2 text-warning text-light">Shakib All Hasan <br></br>
                                <small className="category-size-chat "> <span className="Post-small-text">5:31pm</span></small>
                                <small className="category-size-chat "> <span className="Post-small-text-r">2nd July</span></small>
                            </span>
                        </div>
                    </h2>
                </div>
                <div className="container my-2 Post-Title-home">
                    Coming live at 9:00 PM tonight . See you there 🏏
                </div>
                <img src={Shakib} className="card-img-top img-fluid mx-auto PostImgHe" alt="..." />
                <div className="card-body">
                    <div className="container">
                        <ul className="PostHoUl">
                            <li className="like-post"> 
                                <i className="fas fa-heart heart mx-1 "></i>
                                <small className="profile-card-text">240</small>
                            </li>
                            <li className="share-post">
                                <small className="profile-card-text">100 Share</small>
                            </li>
                            <li className="comment-post">
                                <small className=" profile-card-text">16 Comment</small>
                            </li>
                          
                        </ul>
                    </div>
                    <hr class="new5" />

                    <div className="text-center">
                        <button className="btn-warning-post ">
                            <i className="fas fa-heart text-danger  mx-1"></i>
                            <small className="Post-Title-home"> Like</small>
                        </button>
                        <button className="btn-warning-post mx-2 ">
                            <i className="fas fa-comment  mx-1 "></i>
                            <small> Comment</small>
                        </button>
                        <button className="btn-warning-post">
                            <i className="fas fa-share  mx-1"></i>
                            <small> Share</small>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card left-col-box PostCard mb-3 mt-3">
                <div className="accordion-item PostBack ">
                    <h2 className="accordion-header PostBack" >
                        <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                            <img src={Azhari} className="PostImgHome" alt="..." />
                            <span className="mx-2 text-warning text-light">Mizanur Rahman Azhari <br></br>
                                <small className="category-size-chat "> <span className="Post-small-text">5:31pm</span></small>
                                <small className="category-size-chat "> <span className="Post-small-text-r">2nd July</span></small>
                            </span>
                        </div>
                    </h2>
                </div>
                <div className="container my-2 Post-Title-home">
                    Coming live at 9:00 PM tonight . See you there 🏏
                </div>
                <img src={Azhari} className="card-img-top img-fluid mx-auto PostImgHe" alt="..." />
                <div className="card-body">
                    <div className="container">
                        <ul className="PostHoUl">
                            <li className="like-post"> 
                                <i className="fas fa-heart heart mx-1 "></i>
                                <small className="profile-card-text">240</small>
                            </li>
                            <li className="share-post">
                                <small className="profile-card-text">100 Share</small>
                            </li>
                            <li className="comment-post">
                                <small className=" profile-card-text">16 Comment</small>
                            </li>
                          
                        </ul>
                    </div>
                    <hr class="new5" />

                    <div className="text-center">
                        <button className="btn-warning-post ">
                            <i className="fas fa-heart text-danger  mx-1"></i>
                            <small className="Post-Title-home"> Like</small>
                        </button>
                        <button className="btn-warning-post mx-2 ">
                            <i className="fas fa-comment  mx-1 "></i>
                            <small> Comment</small>
                        </button>
                        <button className="btn-warning-post">
                            <i className="fas fa-share  mx-1"></i>
                            <small> Share</small>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card left-col-box PostCard mb-3 mt-3">
                <div className="accordion-item PostBack ">
                    <h2 className="accordion-header PostBack" >
                        <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                            <img src={Ayman} className="PostImgHome" alt="..." />
                            <span className="mx-2 text-warning text-light">Ayman Sadiq <br></br>
                                <small className="category-size-chat "> <span className="Post-small-text">5:31pm</span></small>
                                <small className="category-size-chat "> <span className="Post-small-text-r">2nd July</span></small>
                            </span>
                        </div>
                    </h2>
                </div>
                <div className="container my-2 Post-Title-home">
                    Coming live at 9:00 PM tonight . See you there 🏏
                </div>
                <img src={Ayman} className="card-img-top img-fluid mx-auto PostImgHe" alt="..." />
                <div className="card-body">
                    <div className="container">
                        <ul className="PostHoUl">
                            <li className="like-post"> 
                                <i className="fas fa-heart heart mx-1 "></i>
                                <small className="profile-card-text">240</small>
                            </li>
                            <li className="share-post">
                                <small className="profile-card-text">100 Share</small>
                            </li>
                            <li className="comment-post">
                                <small className=" profile-card-text">16 Comment</small>
                            </li>
                          
                        </ul>
                    </div>
                    <hr class="new5" />

                    <div className="text-center">
                        <button className="btn-warning-post ">
                            <i className="fas fa-heart text-danger  mx-1"></i>
                            <small className="Post-Title-home"> Like</small>
                        </button>
                        <button className="btn-warning-post mx-2 ">
                            <i className="fas fa-comment  mx-1 "></i>
                            <small> Comment</small>
                        </button>
                        <button className="btn-warning-post">
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
