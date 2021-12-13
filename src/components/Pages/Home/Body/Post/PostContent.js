import React from "react";
import '../../../../CSS/Home/Post.css'
import { Link } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
export default function UpcomingAuditionsContent({ user }) {
    return (
        <>
            <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

                <div className="card Enroll-AuditionsB">

                    <h2 className="accordion-header PostBack">
                        <div className="d-flex justify-content-between">
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

                            <div className="dropdown me-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <RiBarChartHorizontalFill className="mx-2 text-light" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li className="dropdown-item turnNotification text-white px-3">Turn on notification</li>
                                    <li className="dropdown-item text-white px-3">Unfollow Shakib</li>
                                </ul>
                            </div>
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

                        <div className="accordion accordion-flush ">
                            <div className="accordion-item comment-bg-post">
                                <div id="flush-collapseOne" className="accordion-collapse collapse">

                                    <div className="coment-area  ">
                                        <ul className="we-comet ">
                                            <li >
                                                <div className="comet-avatar">
                                                    <img src={user.profilePicture} className="com-post-img-head"
                                                        alt={user.profilePicture} />
                                                </div>

                                                <div className="we-comment">
                                                    <div className="coment-head">
                                                        <h5><p className="com-name-po">Jason borne</p></h5>
                                                        <span>1 year ago</span>
                                                        <p className="we-reply" title="Reply"><i
                                                            className="fa fa-reply"></i></p>
                                                    </div>
                                                    <p className="com-name-po">we are working for the dance and sing songs. this car is very awesome for
                                                        the youngster. please vote this car and like our post</p>
                                                </div>

                                                <ul>
                                                    <li>
                                                        <div className="comet-avatar">
                                                            <img className="com-post-img" src={user.profilePicture} alt={user.profilePicture} />
                                                        </div>
                                                        <div className="we-comment">
                                                            <div className="coment-head">
                                                                <h5><p className="com-name-po">alexendra dadrio</p></h5>
                                                                <span>1 month ago</span>
                                                                <p className="we-reply" title="Reply"><i
                                                                    className="fa fa-reply"></i></p>
                                                            </div>
                                                            <p className="com-name-po">yes, really very awesome car i see the features of this car in
                                                                the official website of <p title="">#Mercedes-Benz</p>
                                                                and really impressed :-)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="comet-avatar">
                                                            <img className="com-post-img" src={user.profilePicture} alt={user.profilePicture} />
                                                        </div>
                                                        <div className="we-comment">
                                                            <div className="coment-head">
                                                                <h5><p className="com-name-po">Olivia</p></h5>
                                                                <span>16 days ago</span>
                                                                <p className="we-reply" title="Reply"><i
                                                                    className="fa fa-reply"></i></p>
                                                            </div>
                                                            <p className="com-name-po">i like lexus cars, lexus cars are most beautiful with the awesome
                                                                features, but this car is really outstanding than lexus</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <div className="comet-avatar">
                                                    <img className="com-post-img-head" src={user.profilePicture} alt={user.profilePicture} />
                                                </div>
                                                <div className="we-comment">
                                                    <div className="coment-head">
                                                        <h5><p className="com-name-po">Donald Trump</p></h5>
                                                        <span>1 week ago</span>
                                                        <p className="we-reply" title="Reply"><i
                                                            className="fa fa-reply"></i></p>
                                                    </div>
                                                    <p className="com-name-po">we are working for the dance and sing songs. this video is very awesome
                                                        for the youngster. please vote this video and like our channel
                                                        <i className="em em-smiley"></i>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="accordion-button-fx  ">


                                        <img src={user.profilePicture} className="com-post-img-head" alt={user.profilePicture} />
                                        <form action="">
                                            <input type="text" className="comment-text-post"
                                                placeholder="Write a comment...." />
                                            <button className="comment-text-post-sub">Submit</button>
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