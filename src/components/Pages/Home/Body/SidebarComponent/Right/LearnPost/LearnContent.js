import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

import '../../../../../../CSS/LearnContent/LearnContent.css';
import LearnComment from "./LearnComment";
import { Markup } from "interweave";

import moment from 'moment'

import ShowMoreText from "react-show-more-text";
import { set } from "date-fns";
import axios from "axios";
import swal from 'sweetalert';
import { Collapse } from "@mui/material";
import RegisterNow from "../ReigsterNow/RegisterNow";
import RegisterBanner from '../../../../../../../images/banner.jpg';

const mediaBaseUrl = "http://localhost:8000/";

export default function LearnContent({ post }) {
const [open, setOpen] = useState(false);

useEffect(() => {

    axios.get(`api/check_react/${post.id}`).then(res =>{
        
        if(res.data.status === 200)
        {

            if(res.data.reacted.post_id === post.id)
            {
                setData({ likes: post.react_number , updated: true });
            }
            
        }
                 
    });


}, []);

const [data, setData] = useState({
    likes: post.react_number,
    updated: false
  });


const handleSubmit = (id) => {
    //e.preventDefault();

    if (!data.updated) {
        setData({ likes: data.likes + 1, updated: true });
      } else {
        setData({ likes: data.likes - 1, updated: false });
      }

        axios.get(`/api/submit_react/${id}`).then(res => {
            if(res.data.status === 200)
            {

            }
            else
            {
                swal("Warning",'failed',"warning");
            }
        
        });
}



return (
<>



<div>
            <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
                <div className="card Enroll-AuditionsB">
                    <h2 className="accordion-header PostBack">
                        <div className="d-flex justify-content-between">

                            <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                                <img src={RegisterBanner} className="PostImgHome" alt="star-profile" />
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

                    <h5 className="my-2 Enroll-a Enroll-text">{post.learning_session?.title}</h5>

                    <ShowMoreText
                        /* Default options */
                        lines={3}
                        more={<span style={{ color: 'gold', textDecoderation: 'none' }}>See more</span>}
                        less={<span style={{ color: 'gold', textDecoderation: 'none!important' }}>See less</span>}
                        className="content-css my-2 Enroll-a Enroll-text py-2"
                        anchorClass="my-anchor-css-class"
                        //onClick={executeOnClick}
                        expanded={false}

                        truncatedEndingComponent={"... "}
                    >
                        <Markup content={post.learning_session?.description}></Markup>

                    </ShowMoreText>




                    <div className="card PostCard">
                        <img src={mediaBaseUrl + post.learning_session?.banner} alt={post.learning_session?.banner} />

                        <div className="centered centered-meet">
                            <div className="meetP  d-flex justify-content-center">
                                {/* <div className="MeetupText col-md-8 fw-bold">
                            {post.learning_session?.title}
                        </div> */}
                                <div className="Meetupbtn col-md-3 align-items-center justify-content-center">

                                    {/* <Link to="starprofile/book-now" className="link-starPorfile">
                          <button className="btn btn-warning  text-light fw-bold bmt">Book Now</button>
                        </Link> */}

                                    <Link to={{
                                        pathname: `/register-learning-details/${post.learning_session.slug}`,
                                        state:{post:post}
                                    }} className="link-starPorfile">
                                        <button className="btn btn-warning text-light fw-bold bmt w-100">Register Now</button>
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
                                    <small className="profile-card-text">{data.likes}</small>
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


                            <button className="btn-warning-post" onClick={(e) => {
                                e.preventDefault()
                                handleSubmit(post.id)
                            }}>
                                {data.updated ? (
                                    <>
                                        <i className="fas fa-heart text-danger  mx-1"></i>
                                        <small className="Post-Title-home"> Liked</small>
                                    </>
                                ) : <>
                                    <i className="fas fa-heart text-light  mx-1"></i>
                                    <small className="Post-Title-home"> Like</small>
                                </>}
                            </button>


                            <button className="btn-warning-post mx-2 " variant="link" onClick={() => setOpen(!open)}
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
                                <LearnComment />
                            </div>
                        </Collapse>



                    </div>

                </div>
            </div>
        </div>


    

</>
);
};