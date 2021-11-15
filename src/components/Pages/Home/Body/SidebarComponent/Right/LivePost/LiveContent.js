import React from 'react'
const LiveContent = (props) => {

    return (
        <>
        <div className="Post-Scroll-S col-md-10 align-items-center ml-2">
              <div className="card left-col-box PostCard mb-3 mt-3">
                  <div className="accordion-item PostBack ">
                      <h2 className="accordion-header PostBack" >
                          <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                              <img src={props.ProfileImg} className="PostImgHome" alt="..." />
                              <span className="mx-2 text-warning text-light">{props.Name}<br></br>
                                  <small className="category-size-chat "> <span className="Post-small-text">{props.Time}</span></small>
                                  <small className="category-size-chat "> <span className="Post-small-text-r">{props.Date}</span></small>
                              </span>
                          </div>
                      </h2>
                  </div>
                  <div className="container my-2 Post-Title-home">
                      {props.Msg}
                  </div>

                    <video id="my_video_1" className="video-js vjs-default-skin card-img-top img-fluid mx-auto PostImgHe" 
                        controls preload="none" poster={props.posterImg} data-setup='{}'>
                        <source src={props.PostVideo} type='video/mp4' />
                    </video>

                  <div className="card-body">
                      <div className="container">
                          <ul className="PostHoUl">
                              <li className="like-post"> 
                                  <i className="fas fa-heart heart mx-1 "></i>
                                  <small className="profile-card-text">{props.LikeCount}</small>
                              </li>
                              <li className="share-post">
                                  <small className="profile-card-text">{props.ShareCount} Share</small>
                              </li>
                              <li className="comment-post">
                                  <small className=" profile-card-text">{props.CommentCount} Comment</small>
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
    )
}

export default LiveContent
