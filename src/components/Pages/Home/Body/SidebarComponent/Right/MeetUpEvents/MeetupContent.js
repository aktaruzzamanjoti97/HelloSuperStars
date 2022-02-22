import {React,useState} from "react";
import { Link,useRouteMatch } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Collapse, Container } from "react-bootstrap";
import MeetupComment from "./MeetupComment";
import './meetup.css'
import moment from 'moment'

export default function MeetupContent({ event }) {
const [open, setOpen] = useState(false);
const {url}=useRouteMatch()

return (
<>
    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">
                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={`http://localhost:8000/${event.star.image}`} className="PostImgHome"
                            alt={event.star.image} />
                        <span className="mx-2 text-warning text-light">
                            <Link to={`/starprofile/${event.star_id}`} className="link-starPorfile">
                            {event.star.first_name} {event.star.last_name}
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                {" "}
                                <span className="Post-small-text">{moment(event.updated_at).format('LT')}</span>
                            </small>
                            <small className="category-size-chat">
                                <span className="Post-small-text-r">{moment(event.updated_at).format('LL')}</span>
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
                {event.title}
            </div>
            <div class="container-meet  PostCardMeet  MeetCon">
                <img src={`http://localhost:8000/${event.banner}`} className="meetImg" alt="Snow" />

                <div className="colorMeet">
                    <h5 class="MeetCon-left">{event.title}</h5>

                    <div class="MeetCon-right text-center">
                        <Link to={`starprofile/${event.star_id}/meetup-events/book_now/${event.id}`}
                            className="link-starPorfile">
                        <button className="btn btn-warning text-light fw-bold bmt">Book Now</button>
                        </Link>
                    </div>
                </div>

                {/* <div className="centered centered-meet">
                    <div className="meetP  d-flex">
                        <div className="MeetupText col-md-8 fw-bold">
                            {event.title}
                        </div>
                        <div className="Meetupbtn col-md-3 align-items-center justify-content-center">

                            <Link to={`starprofile/${event.star_id}/meetup-events/book_now/${event.id}`}
                                className="link-starPorfile">
                            <button className="btn btn-warning text-light fw-bold bmt">Book Now</button>
                            </Link>

                        </div>
                    </div>
                </div> */}
                
            </div>

            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">200</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">{event.ShareCount} Share</small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">{event.CommentCount} Comment</small>
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
                        <img src={event.profilePicture} className="PostImgHome" alt={event.profilePicture} />
                        <span className="mx-2 text-warning text-light">
                            <Link to="/starprofile" className="link-starPorfile">
                            {event.username}
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                {" "}
                                <span className="Post-small-text">{event.time}</span>
                            </small>
                            <small className="category-size-chat">
                                <span className="Post-small-text-r">{event.date}</span>
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
                {event.postTitel}
            </div>
            <div className="card PostCard">
                <img className="learningImg" src={event.postPic} alt={event.postPic} />
                <div className="learningLockPremiumImg d-flex align-items-center justify-content-center">
                    <img src={learningLockPremium} className="img-fluid img-resize-LearnContent" alt="" />
                </div>
            </div>
            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">{event.LikeCount}</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">{event.ShareCount} Share</small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">{event.CommentCount} Comment</small>
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