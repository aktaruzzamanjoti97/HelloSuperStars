import React from "react";
import '../../../../CSS/Home/Post.css'

export default function PostContent({user}){
    return (
      <>
           <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
              <div className="card Enroll-AuditionsB left-col-box PostCard mb-3 mt-3">
                  <div className="accordion-item PostBack ">
                      <h2 className="accordion-header PostBack" >
                          <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                              <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                              <span className="mx-2 text-warning text-light">{user.username}<br></br>
                                  <small className="category-size-chat "> <span className="Post-small-text">{user.time}</span></small>
                                  <small className="category-size-chat "> <span className="Post-small-text-r">{user.date}</span></small>
                              </span>
                          </div>
                      </h2>
                  </div>
                  <div className="container my-2 Post-Title-home">
                      {user.postTitel}
                  </div>
                  <img src={user.postPic} className="card-img-top img-fluid mx-auto PostImgHe" alt={user.postPic} />
                  <div className="card-body">
                      <div className="container">
                          <ul className="PostHoUl">
                              <li className="like-post"> 
                                  <i className="fas fa-heart heart mx-1 "></i>
                                  <small className="profile-card-text">{user.LikeCount}</small>
                              </li>
                              <li className="share-post">
                                  <small className="profile-card-text">{user.ShareCount} Share</small>
                              </li>
                              <li className="comment-post">
                                  <small className=" profile-card-text">{user.CommentCount} Comment</small>
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
  
 