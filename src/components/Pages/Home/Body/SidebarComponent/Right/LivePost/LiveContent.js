import {React,useState } from "react";
import ReactPlayer from "react-player";
import { Collapse } from "react-bootstrap";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import LiveComment from "./LiveComment";

export default function LiveContent({user}){
const [open, setOpen] = useState(false);
return (
<>
    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

        <div className="card Enroll-AuditionsB">

            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">
                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                        <span className="mx-2 text-warning text-light">
                            <Link to="/starprofile" className="link-starPorfile">
                            {user.username}
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                {" "}
                                <span className="Post-small-text">{user.time}</span>
                            </small>
                            <small className="category-size-chat">
                                <span className="Post-small-text-r">{user.date}</span>
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

            <div className="my-2 Enroll-a Enroll-text">
                {user.postTitel}
            </div>

            <div className="card PostCard">
                <ReactPlayer url="https://youtu.be/3jtqM_EsUCQ" className="Live-Video-x" playing={false} volume={1}
                    onReady={()=> console.log("ready now")}
                    />
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
                    <button className="btn-warning-post mx-2 " onClick={()=> setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        >
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
                    <div id="example-collapse-text">
                        <div className=" accordion-flush ">
                            <div className=" comment-bg-post">
                                <div id="flush-collapseOne" className="accordion-collapse collapse">
                                    <LiveComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    </div>

</>
);
};