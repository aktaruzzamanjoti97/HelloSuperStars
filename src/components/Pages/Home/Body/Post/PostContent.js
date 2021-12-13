import { React, useState } from "react";
import '../../../../CSS/Home/Post.css'
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";

export default function UpcomingAuditionsContent({ user }) {
    const [open, setOpen] = useState(false);
    return (

        <>
            <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

                <div className="card Enroll-AuditionsB">

                    <h2 className="accordion-header PostBack">
                        <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">

                            <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                            <span className="mx-2 text-warning text-light">
                                <Link to='/starprofile' className="link-starPorfile">{user.username}</Link><br></br>
                                <small className="category-size-chat"> <span
                                    className="Post-small-text">{user.time}</span></small>
                                <small className="category-size-chat"> <span
                                    className="Post-small-text-r">{user.date}</span></small>
                            </span>

                        </div>
                    </h2>

                    <div className="my-2 Enroll-a Enroll-text">
                        {user.postTitel}
                    </div>

                    <div className="card PostCard">
                        <img src={user.postPic} alt={user.postPic} />
                    </div>

                    <div className="row align-items-center justify-content-center ">
                        <div className="container ">
                            <ul className="PostHoUl Co-Auditions">
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

                        <div className="text-center hr-Auditions">
                            <button className="btn-warning-post ">
                                <i className="fas fa-heart text-danger  mx-1"></i>
                                <small className="Post-Title-home"> Like</small>
                            </button>
                            <button className="btn-warning-post mx-2 " type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <i className="fas fa-comment  mx-1 "></i>
                                <small> Comment</small>
                            </button>
                            <button className="btn-warning-post">
                                <i className="fas fa-share  mx-1"></i>
                                <small> Share</small>
                            </button>
                        </div>

                        {/* Comment Section */}
                        <div className="accordion accordion-flush ">
                            <div className="accordion-item comment-bg-post">
                                <div id="flush-collapseOne" className="accordion-collapse collapse">

                                    <div className="coment-area  ">
                                        <ul className="we-comet ">
                                            <li>
                                                <div className="comet-avatar">
                                                    <img src={user.profilePicture} className="com-post-img-head"
                                                        alt={user.profilePicture} />
                                                </div>

                                                <div className="we-comment col-md-12">
                                                    <div className="coment-head">
                                                        <p>
                                                            <p className="com-name-po">Jason borne</p>
                                                        </p>
                                                        <span>1 year ago</span>
                                                        <p className="we-reply" title="Reply"><i className="fa fa-reply"></i>
                                                        </p>
                                                    </div>
                                                    <p className="com-name-po">we are working for the dance and sing songs. this
                                                        car is very awesome for
                                                        the youngster. please vote this car and like our post</p>
                                                </div>
                                                <button className="we-reply-button-x  ">Like .</button>.
                                                <button className="we-reply-button " onClick={() => setOpen(!open)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open}>Reply .</button>.
                                                <button className="we-reply-button " onClick={() => setOpen(!open)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open}>5m</button>

                                                <ul>

                                                    <li>
                                                        <div className="comet-avatar">
                                                            <img className="com-post-img" src={user.profilePicture}
                                                                alt={user.profilePicture} />
                                                        </div>
                                                        <div className="we-comment">
                                                            <div className="coment-head">
                                                                <p>
                                                                    <p className="com-name-po">Olivia</p>
                                                                </p>
                                                                <span>16 days ago</span>
                                                                <p className="we-reply" title="Reply"><i
                                                                    className="fa fa-reply"></i></p>
                                                            </div>
                                                            <p className="com-name-po">i like lexus cars, lexus cars are most
                                                                beautiful with the awesome .</p>
                                                        </div>
                                                        <button className="we-reply-button-x ">Like .</button>.
                                                        <button className="we-reply-button  " onClick={() => setOpen(!open)}
                                                            aria-controls="example-collapse-text"
                                                            aria-expanded={open}>Reply .</button>.
                                                        <button className="we-reply-button " onClick={() => setOpen(!open)}
                                                            aria-controls="example-collapse-text"
                                                            aria-expanded={open}>1m</button>
                                                    </li>
                                                </ul>

                                                <Collapse in={open}>
                                                    <div id="example-collapse-text">
                                                        <div className="accordion-button-fx  ">
                                                            <img src={user.profilePicture} className="com-post-img-head"
                                                                alt={user.profilePicture} />
                                                            <form action="">
                                                                <input type="text"
                                                                    className="comment-text-post comment-text-post-x"
                                                                    placeholder="Write a comment...." />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Collapse>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="accordion-button-fx  ">
                                        <img src={user.profilePicture} className="com-post-img-head"
                                            alt={user.profilePicture} />
                                        <form action="">
                                            <input type="text" className="comment-text-post"
                                                placeholder="Write a comment...." />
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}