import React from "react";
import '../../../../../components/CSS/Home/Post.css';
import Picture from "../../../../../images/navbar/account.jpg"

const Post = () =>{
  return(
    <>
        <div className="Post-Scroll col-md-10 align-items-center ml-2">
            <div className="card left-col-box PostCard mb-3 mt-3">
                <div className="accordion-item PostBack ">
                    <h2 className="accordion-header PostBack" >
                        <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                            <img src={Picture} className="PostImgHome" alt="..." />
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
                <img src={Picture} className="card-img-top img-fluid mx-auto PostImgHe" alt="..." />
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
                        <button className="btn btn-warning ">
                            <i className="fas fa-heart text-danger  mx-1"></i>
                            <small className="Post-Title-home"> Like</small>
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