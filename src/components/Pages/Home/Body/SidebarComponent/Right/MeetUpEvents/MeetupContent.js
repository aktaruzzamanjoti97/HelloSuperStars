import {React,useState} from "react";
import { Link } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Collapse, Container } from "react-bootstrap";
import MeetupComment from "./MeetupComment";
import './meetup.css'

export default function MeetupContent({ user }) {
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
            <div class="container-meet card PostCard ">
                <img src={user.postPic} className="meetImg" alt="Snow" />
                <div className="centered centered-meet">
                    <div className="meetP  d-flex">
                        <div className="MeetupText col-md-8 fw-bold">
                            Friday night at Pan Pacific Sonargaon with SAK 75
                        </div>
                        <div className="Meetupbtn col-md-3 align-items-center justify-content-center">
                        <Link to="/starprofile" className="link-starPorfile">
                        <button className="btn btn-warning  text-light fw-bold bmt">Book Now</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>

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
                        <MeetupComment />
                    </div>
                </Collapse>
            </div>
        </div>
    </div>

    {/* <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

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
                <img className="learningImg" src={user.postPic} alt={user.postPic} />
                <div className="learningLockPremiumImg d-flex align-items-center justify-content-center">
                    <img src={learningLockPremium} className="img-fluid img-resize-LearnContent" alt="" />
                </div>
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
                    <button className="btn-warning-post mx-2 " variant="link" onClick={()=> setOpen(!open)}
                        aria-expanded={open} aria-controls="collapseID" >
                        <i className="fas fa-comment  mx-1 "></i>
                        <small> Comment</small>
                    </button>
                    <button className="btn-warning-post">
                        <i className="fas fa-share  mx-1"></i>
                        <small> Share</small>
                    </button>
                </div> */}

                {/* Comment Section */}
                {/* <Collapse in={open}>
                    <div id="collapseID">
                        <LearnComment />
                    </div>
                </Collapse>

            </div>
        </div> */}
        {/*
    </div> */}

</>
);
};