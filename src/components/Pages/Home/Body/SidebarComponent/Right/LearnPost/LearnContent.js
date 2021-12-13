import React, { useState } from "react";
import { Modal, NavDropdown } from "react-bootstrap";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import learningLockPremium from '../../../../../../../images/lockScreen.png';
import '../../../../../../CSS/LearnContent/LearnContent.css';



export default function LearnContent({ user }) {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

                <div className="card Enroll-AuditionsB">

                    <h2 className="accordion-header PostBack" >
                        <div className="d-flex justify-content-between">
                            <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">

                                <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                                <span className="mx-2 text-warning text-light">{user.username}<br></br>
                                    <small className="category-size-chat"> <span className="Post-small-text">{user.time}</span></small>
                                    <small className="category-size-chat"> <span className="Post-small-text-r">{user.date}</span></small>
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
                            <button className="btn-warning-post mx-2 ">
                                <i className="fas fa-comment  mx-1 "></i>
                                <small> Comment</small>
                            </button>
                            <button className="btn-warning-post">
                                <i className="fas fa-share  mx-1"></i>
                                <small> Share</small>
                            </button>
                        </div>


                    </div>


                </div>
            </div>

            <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">

                <div className="card Enroll-AuditionsB">

                    <h2 className="accordion-header PostBack" >
                        <div className="d-flex justify-content-between">
                            <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">

                                <img src={user.profilePicture} className="PostImgHome" alt={user.profilePicture} />
                                <span className="mx-2 text-warning text-light">{user.username}<br></br>
                                    <small className="category-size-chat"> <span className="Post-small-text">{user.time}</span></small>
                                    <small className="category-size-chat"> <span className="Post-small-text-r">{user.date}</span></small>
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
                            <button className="btn-warning-post mx-2 ">
                                <i className="fas fa-comment  mx-1 "></i>
                                <small> Comment</small>
                            </button>
                            <button className="btn-warning-post">
                                <i className="fas fa-share  mx-1"></i>
                                <small> Share</small>
                            </button>
                        </div>


                    </div>


                </div>



                {/* <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                 
                  
                    <Modal.Body>
                    <button onClick={() =>setShow(false)}></button>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal> */}
            </div>

        </>
    );
};

