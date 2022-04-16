import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../MeetUpEvents/meetup.css";
import Pro from "../../../../../../../images/images.png";
import Play from "../../../../../../../images/play-button 1.png";
import Banner from "../../../../../../../images/unsplash_IeTLKtzbLNo.png";
import UpAuditonsComment from "./UpAuditonsComment";
import ReactPlayer from "react-player";

const AuditionNew = () => {
const [open, setOpen] = useState(false);
return (
<>
    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">
                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={Pro} className="PostImgHome" alt={Pro} />
                        <span className="mx-2 text-warning text-light">
                            <Link to="" className="link-starPorfile">
                            Atikur Rahman
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                <span className="Post-small-text">Audition Admin</span>
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
                            <li className="dropdown-item">Unfollow Shakib</li>
                        </ul>
                    </div>
                </div>
            </h2>
            {/* <div className="my-2 Enroll-a Enroll-text">
                {event.title}
            </div> */}
            <div class="AudiNew">
                <center>
                    <img src={Banner} className="img-fluid meetImgB" alt="Snow" />
                </center>
                <div className="AuditionDiv d-flex px-3 py-2">
                    <span className="mt-2 text-warning">With : </span>
                    <span>
                        <img src={Pro} alt="" className="AudiPor" />
                    </span>
                    <span>
                        <img src={Pro} alt="" className="AudiPor" />
                    </span>
                    <span>
                        <img src={Pro} alt="" className="AudiPor" />
                    </span>
                </div>

                <div className="colorAud">
                    <h5 class="MeetCon-left text-light">FROM JUNE 25 - july 30</h5>

                    <div class="MeetCon-right text-center">
                        <Link to="" className="link-starPorfile">
                        <button className="btn btn-warning text-light fw-bold bmt">
                            Registration
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="my-2 Enroll-a Enroll-text">
                Guitar program for the beginners
            </div>

            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">200</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">12 Share</small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">23 Comment</small>
                        </li>
                    </ul>
                </div>

                <div className="text-center hr-Auditions">
                    <button className="btn-warning-post ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="Post-Title-home"> Like</small>
                    </button>
                    <button className="btn-warning-post mx-2 " variant="link" onClick={()=> setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="collapseID"
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
                    <div id="collapseID">
                        <UpAuditonsComment />
                    </div>
                </Collapse>
            </div>
        </div>
    </div>

    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">
                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={Pro} className="PostImgHome" alt={Pro} />
                        <span className="mx-2 text-warning text-light">
                            <Link to="" className="link-starPorfile">
                            Atikur Rahman
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                <span className="Post-small-text">Audition Admin</span>
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
                            <li className="dropdown-item">Unfollow Shakib</li>
                        </ul>
                    </div>
                </div>
            </h2>
            {/* <div className="my-2 Enroll-a Enroll-text">
                {event.title}
            </div> */}
            <div class="AudiNew mt-3">
                <center>
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" autoplay="false" controls
                        className="img-fluid meetImgB" />
                    {/* <img src={Banner} className="img-fluid meetImgB" alt="Snow" /> */}
                </center>
                <div className="AuditionDivPlay d-flex px-3 py-2">
                    <span className="mt-2 text-warning">
                        <img src={Play} className="img-fluidf" alt="" />{" "}
                    </span>
                </div>

                <div className="colorAud">
                    <h5 class="MeetCon-left text-light">FROM JUNE 25 - july 30</h5>

                    <div class="MeetCon-right text-center">
                        <Link to="" className="link-starPorfile">
                        <button className="btn btn-warning text-light fw-bold bmt">
                            Registration
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row  mx-4 mt-2">
                <div className="">
                    <center className="d-flex justify-content-center AudiFooter border-warning p-3">
                        <span className="mt-2 text-warning me-2">With : </span>
                        <span>
                            <img src={Pro} alt="" className="AudiPorS" />
                        </span>
                        <span>
                            <img src={Pro} alt="" className="AudiPorS" />
                        </span>
                        <span>
                            <img src={Pro} alt="" className="AudiPorS" />
                        </span>
                    </center>
                </div>
            </div>

            <div className="my-2 Enroll-a Enroll-text">
                Guitar program for the beginners
            </div>

            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">200</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">12 Share</small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">23 Comment</small>
                        </li>
                    </ul>
                </div>

                <div className="text-center hr-Auditions">
                    <button className="btn-warning-post ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="Post-Title-home"> Like</small>
                    </button>
                    <button className="btn-warning-post mx-2 " variant="link" onClick={()=> setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="collapseID"
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
                    <div id="collapseID">
                        <UpAuditonsComment />
                    </div>
                </Collapse>
            </div>
        </div>
    </div>

    <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">
                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={Pro} className="PostImgHome" alt={Pro} />
                        <span className="mx-2 text-warning text-light">
                            <Link to="" className="link-starPorfile">
                            Atikur Rahman
                            </Link>
                            <br></br>
                            <small className="category-size-chat">
                                <span className="Post-small-text">Audition Admin</span>
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
                            <li className="dropdown-item">Unfollow Shakib</li>
                        </ul>
                    </div>
                </div>
            </h2>
            {/* <div className="my-2 Enroll-a Enroll-text">
                {event.title}
            </div> */}
            <div class="AudiNew mt-3">
                <center>
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" autoplay="false" controls
                        className="img-fluid meetImgB" />
                    {/* <img src={Banner} className="img-fluid meetImgB" alt="Snow" /> */}
                </center>
                <div className="AuditionDivPlayR d-flex px-3 py-2">
                    <span className="mt-2 text-warning">
                        <img src={Play} className="img-fluidf" alt="" />{" "}
                    </span>
                </div>
                <center className="d-flex justify-content-center AudiVide ">
                    <img src={Banner} className="img-fluid meetImgB ASIm" alt="Snow" />

                    <div className="d-flex Auf">
                        <p className="mt-2 text-warning me-2">With : </p>
                    <img src={Pro} alt="" className="AudiPorS" />
                    <img src={Pro} alt="" className="AudiPorS" />
                    <img src={Pro} alt="" className="AudiPorS" /></div>

                </center>

            </div>

            <div className="my-2 Enroll-a Enroll-text">
                Guitar program for the beginners
            </div>

            <div className="row align-items-center justify-content-center ">
                <div className="container ">
                    <ul className="PostHoUl Co-Auditions">
                        <li className="like-post">
                            <i className="fas fa-heart heart mx-1 "></i>
                            <small className="profile-card-text">200</small>
                        </li>
                        <li className="share-post">
                            <small className="profile-card-text">12 Share</small>
                        </li>
                        <li className="comment-post">
                            <small className=" profile-card-text">23 Comment</small>
                        </li>
                    </ul>
                </div>

                <div className="text-center hr-Auditions">
                    <button className="btn-warning-post ">
                        <i className="fas fa-heart text-danger  mx-1"></i>
                        <small className="Post-Title-home"> Like</small>
                    </button>
                    <button className="btn-warning-post mx-2 " variant="link" onClick={()=> setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="collapseID"
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
                    <div id="collapseID">
                        <UpAuditonsComment />
                    </div>
                </Collapse>
            </div>
        </div>
    </div>
</>
);
};

export default AuditionNew;