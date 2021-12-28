import { React, useState } from "react";
import "../../../../CSS/Home/Post.css";
import { Link } from "react-router-dom";
import { Collapse,Button } from "react-bootstrap";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import PostComment from "./PostComment";
import moment from 'moment'

const mediaBaseUrl = "http://localhost:8000/";

export default function UpcomingAuditionsContent({ post }) {
const [open, setOpen] = useState(false);
return (
<>
    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">

                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={mediaBaseUrl+post.star.image} className="PostImgHome" alt="star-profile" />
                        <span className="mx-2 text-warning text-light">
                            <Link to="/starprofile" className="link-starPorfile">
                            {post.star.first_name} {post.star.last_name}
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                {moment(post.created_at).format('LT')}
                                {" | "}
                            </small>
                            <small className="category-size-chat">
                                {moment(post.created_at).format('LL')}
                            </small>
                        </span>
                    </div>

                    <div className="dropdown me-2 buttonBorderNone">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <DotsHorizontalIcon className="h-5 w-5 text-blue-500" />
                        </button>
                        <ul className="dropdown-menu leftSideNotification" aria-labelledby="dropdownMenuButton1">
                            <li className="dropdown-item turnNotification">
                                Turn on notification
                            </li>
                            <li className="dropdown-item">
                                Unfollow Shakib
                            </li>
                        </ul>
                    </div>
                </div>
            </h2>

            <div className="my-2 Enroll-a Enroll-text">{post.title}</div>
            <div className="my-2 Enroll-a Enroll-text">{post.description}</div>

            <div className="card PostCard">
                <img src={mediaBaseUrl+post.banner} alt={post.banner} />
            </div>

            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">100K</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">
                                100K Share
                            </small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">
                                60K Comment
                            </small>
                        </li>
                    </ul>
                </div>

                <div className="text-center hr-Auditions">
                    <button className="btn-warning-post ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="Post-Title-home"> Like</small>
                    </button>
                    <button className="btn-warning-post mx-2 " variant="link" onClick={()=> setOpen(!open)}
                        aria-expanded={open} aria-controls="collapseID" >
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn-warning-post">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div>
                
                {/* Comment Section */}
                <Collapse in={open}>
                    <div id="collapseID">
                        <PostComment />
                    </div>
                </Collapse>

            </div>

        </div>
    </div>
</>
);
}