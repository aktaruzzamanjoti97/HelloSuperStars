import { React, useState } from "react";
import "../../../../CSS/Home/Post.css";
import { Link } from "react-router-dom";
import { Collapse,Button } from "react-bootstrap";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import PostComment from "./PostComment";
import moment from 'moment'
import { Markup } from "interweave";
import ReactReadMoreReadLess from "react-read-more-read-less";
//import Lock from "../../../images/Normal-User/lock.png";
import Lock from "../../../../../../src/images/Normal-User/lock.png";

import ShowMoreText from "react-show-more-text";

const mediaBaseUrl = "http://localhost:8000/";


export default function UpcomingAuditionsContent({ post }) {
const [open, setOpen] = useState(false);
return (
<>
    { post.type === 'meetup' ? (
        <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">

                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={mediaBaseUrl+post.star.image} className="PostImgHome" alt="star-profile" />
                        <span className="mx-2 text-warning text-light">
                            <Link to={`/starprofile/${post.user_id}`} className="link-starPorfile">
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

            <h5 className="my-2 Enroll-a Enroll-text">{post.meetup.title}</h5>

            

            <ShowMoreText
                /* Default options */
                lines={3}
                more={<span style={{ color: 'gray', textDecoration:'underline' }}>See more</span>}
                less={<span style={{ color: 'gray', textDecoration:'underline' }}>See less</span>}
                className="content-css my-2 Enroll-a Enroll-text  py-2"
                anchorClass="my-anchor-css-class"
                //onClick={executeOnClick}
                expanded={false}
                
                truncatedEndingComponent={"... "}
            >
            <Markup  content={post.meetup.description}></Markup>

            </ShowMoreText>

            {/* <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="text-white"
                readLessClassName="text-white"
            >
                {post.meetup.description.replace(regex, "")}
            </ReactReadMoreReadLess> */}



            <div className="card PostCard">
            <Link to={`/starprofile/${post.meetup.star_id}/meetup-events/book_now/${post.event_id}`} className="link-starPorfile">
                <img src={mediaBaseUrl+post.meetup.banner} alt={post.meetup.banner} />
            </Link>

            <div className="centered centered-meet">
                    <div className="meetP  d-flex">
                        <div className="MeetupText col-md-8 fw-bold">
                            {post.meetup.title}
                        </div>
                        <div className="Meetupbtn col-md-3 align-items-center justify-content-center">

                        {/* <Link to="starprofile/book-now" className="link-starPorfile">
                          <button className="btn btn-warning  text-light fw-bold bmt">Book Now</button>
                        </Link> */}

                        <Link to={`/starprofile/${post.meetup.star_id}/meetup-events/book_now/${post.event_id}`} className="link-starPorfile">
                          <button className="btn btn-warning text-light fw-bold bmt">Book Now</button>
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
    ) : post.type === 'livechat' ?
    (
        <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">

                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={mediaBaseUrl+post.star?.image} className="PostImgHome" alt="star-profile" />
                        <span className="mx-2 text-warning text-light">
                            <Link to={`/starprofile/${post.user_id}`} className="link-starPorfile">
                            {post.star?.first_name} {post.star?.last_name}
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

            <h5 className="my-2 Enroll-a Enroll-text">{post.livechat?.title}</h5>

            <ShowMoreText
                /* Default options */
                lines={3}
                more={<span style={{ color: 'gold', textDecoderation: 'none' }}>See more</span>}
                less="See less"
                className="content-css my-2 Enroll-a Enroll-text py-2"
                anchorClass="my-anchor-css-class"
                //onClick={executeOnClick}
                expanded={false}
                
                truncatedEndingComponent={"... "}
            >
            <Markup  content={post.livechat?.description}></Markup>

            </ShowMoreText>

            


            <div className="card PostCard">
                <img src={mediaBaseUrl+post.livechat?.banner} alt={post.livechat?.banner} />

                <div className="centered centered-meet">
                    <div className="meetP  d-flex">
                        <div className="MeetupText col-md-8 fw-bold">
                            {post.livechat?.title}
                        </div>
                        <div className="Meetupbtn col-md-3 align-items-center justify-content-center">

                        {/* <Link to="starprofile/book-now" className="link-starPorfile">
                          <button className="btn btn-warning  text-light fw-bold bmt">Book Now</button>
                        </Link> */}

                        <Link to={`/starprofile/${post.livechat?.star_id}/livechat`} className="link-starPorfile">
                          <button className="btn btn-warning text-light fw-bold bmt">Book Now</button>
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
    ) :
    (
        <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
        <div className="card Enroll-AuditionsB">
            <h2 className="accordion-header PostBack">
                <div className="d-flex justify-content-between">

                    <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                        <img src={mediaBaseUrl+post.star?.image} className="PostImgHome" alt="star-profile" />
                        
                        <span className="mx-2 text-warning text-light">
                            <Link to={`/starprofile/${post.user_id}`} className="link-starPorfile">
                            {post.star?.first_name} {post.star?.last_name}
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

            <h5 className="my-2 Enroll-a Enroll-text">{post.general?.title}</h5>

            <ShowMoreText
                /* Default options */
                lines={3}
                more={<span style={{ color: 'gold', textDecoderation: 'none' }}>See more</span>}
                less="See less"
                className="content-css my-2 Enroll-a Enroll-text py-2"
                anchorClass="my-anchor-css-class"
                //onClick={executeOnClick}
                expanded={false}
                
                truncatedEndingComponent={"... "}
            >
            <Markup  content={post.general?.description}></Markup>

            </ShowMoreText>

            {post.general?.type === 'paid' ? (
                <div className="card PostCard">
                    <img src={mediaBaseUrl+post.general?.image} alt={post.general?.image} className="ImgBlur"/>

                    <span className="dot2 d-flex justify-content-center align-items-center">
                        <img src={Lock} alt="" style={{width: '200px'}}/> 
                    </span> 
                </div>
            ) : 
            (
                <div className="card PostCard">
                    <img src={mediaBaseUrl+post.general?.image} alt={post.general?.image} className=""/>
                </div>
            )
            }

            

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
    )
    
     }
    
</>
);
}