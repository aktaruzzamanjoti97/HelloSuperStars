import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import FanStar from '../../../../../images/apurbo.jpg'
import FanImg from '../../../../../images/vsot3yic.png'
import ReactShowMoreText from 'react-show-more-text'
import { Collapse } from 'react-bootstrap'
import FanPostComment from './FanPostComment'
import axios from 'axios'
import ReactPlayer from "react-player";
import moment from "moment";
import { socketContext } from '../../../../../App'

const FanPost = (props) => {
    const {fanPost, setFanPost} = props;
    const [open, setOpen] = useState(false);
    const { slug } = useParams();
    console.log("slug ", slug);

    const socketData = useContext(socketContext);
    

    useEffect(() => {
        axios.get(`/api/user/fan/group/post/show/${slug}`).then((res) => {
            console.log("fan Group", res.data);
            if (res.status === 200) {
                setFanPost(res.data.fanPost);
            }
        });

        socketData.on("getFanGroupPost", (data) => {
            axios.get(`/api/user/fan/group/post/show/${slug}`).then((res) => {
                console.log("fan Group", res.data);
                if (res.status === 200) {
                    setFanPost(res.data.fanPost);
                }
            });
        });
        
    }, [slug]);


    return (
        <>
            {fanPost.map((post, i) => (
                <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
                    <div className="card Enroll-AuditionsB">
                        <h2 className="accordion-header PostBack">
                            <div className="d-flex justify-content-between">

                                <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
                                    <img src={`http://localhost:8000/${post.user?.image}`} className="PostImgHome" alt="star-profile" />
                                    <span className="mx-2 text-warning text-light">
                                        <Link className="link-starPorfile">
                                            {post.user?.first_name} {post.user?.last_name}
                                        </Link>
                                        <br></br>
                                        <small className="category-size-chat">
                                            {moment(post.created_at).format("LT")}&nbsp;|&nbsp;
                                        </small>
                                        <small className="category-size-chat">
                                            {moment(post.created_at).format("LL")}
                                        </small>
                                        <small className="category-size-chat" style={{ fontSize: '13px', paddingLeft: '15px' }}>
                                            {post.star?.first_name} {post.star?.last_name}
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

                        {/* <h5 className="my-2 Enroll-a Enroll-text text-justify "> Lorem ipsum dolor sit amet consectetur.</h5>
            */}

                    <ReactShowMoreText lines={3} more={<span>See more</span>}
                        less={<span>See less</span>}
                        className="content-css my-2 Enroll-a Enroll-text py-2"
                        anchorClass="my-anchor-css-class"
                        //onClick={executeOnClick}
                        expanded={false}
                        truncatedEndingComponent={"... "}
                    >
                        { post.description }

                    </ReactShowMoreText>

                    <div className="card PostCard">
                        <Link className="link-starPorfile">
                            <img src={`http://localhost:8000/${post.image}`} alt="" />
                        </Link>
                    </div>

                        <div>
                    {/* <div className="card PostCard">
                    <center>
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=LRtEJPSj2-8"
                    autoplay
                    controls="true"
                    />
                    </center>
                    </div> */}
                    </div>

                

                        <div className="card PostCard">
                            {
                                post.image  ?

                                    <Link className="link-starPorfile">
                                        <img src={`http://localhost:8000/${post.image}`} alt="" />
                                    </Link>
                                    :
                                    <div>
                                        <div className="card PostCard">
                                            <center>
                                                <ReactPlayer
                                                    url={`http://localhost:8000/${post.video}`}
                                                    autoplay
                                                    controls="true"
                                                />
                                            </center>
                                        </div>
                                    </div>
                            }
                            {/* <div className="centered centered-meet">

                    <div className="meetP  d-flex justify-content-between">
                        <div className="MeetupText col-md-8 fw-bold">
                            online
                        </div>
                        <div className="Meetupbtn col-md-4 justify-content-end ">

                            <Link className="link-starPorfile">
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
                                        <small className="profile-card-text">23</small>
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
                                <button className="btn-warning-post">
                                    <i className="fas fa-heart text-light  mx-1"></i>
                                    <small className="Post-Title-home"> Like</small>
                                </button>
                                <button className="btn-warning-post mx-2 " variant="link" onClick={() => setOpen(!open)}
                                    aria-expanded={open} aria-controls="collapseID">
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
                                    <FanPostComment />
                                </div>
                            </Collapse>

                        </div>

                    </div>
                </div>
            ))}

        </>
    )
}

export default FanPost