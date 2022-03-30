import {React,useState } from "react";
import { Collapse } from "react-bootstrap";
import UpAuditonsComment from "./UpAuditonsComment";
import '../../../../../../CSS/Home/UpcomingAuditions.css'

import moment from "moment";
import { useHistory } from "react-router-dom";
    export default function UpcomingAuditionsContent({user}){
        const [open, setOpen] = useState(false);

        let history = useHistory();

        const handleRouteChange = () =>{
            history.push(`/participant-audition/${user.id}`)
        }

  
        return (
          <>
               <div className="container align-items-center justify-content-center col-11 Enroll-Auditions">
                  <div className="card Enroll-AuditionsB">
    
                      <div className="my-2 Enroll-a Enroll-text">
                          {user.title}
                      </div>

                      <div className="row align-items-center justify-content-center ">
                        
                            <div className="container align-items-center justify-content-center UpcomingAuditions col-md-6"
                                style={{ backgroundImage: `url(http://localhost:8000/${user.banner})` }}>
                                <div className="container xyz-auditions"> <br />
                                    <div className="container d-flex xyz-audition align-items-center justify-content-center">
                                        {user.judge.map((judge)=>(

                                        <img src={`http://localhost:8000/${judge.user?.image}`}  className="Pic-Auditions" alt={user.profilePicture} />
                                     
                                        ))}
                                      
                                        </div> <br /> <br />

                                        <div className="container d-flex align-items-center justify-content-center">
                                        <p className="Pa-btn-text">{moment(user.start_time).format('LL')} - {moment(user.end_time).format('LL')}</p>
                                    </div>

                                    <div className="container d-flex  align-items-center justify-content-center">

                                        <button onClick={handleRouteChange} className="container d-flex xyz-audition-btn align-items-center justify-content-center">Participate</button>

                                    </div>

                                </div>
                            </div>

                            
                            

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
                        <UpAuditonsComment/>
                    </div>
                </Collapse>


                        </div>                     
                  </div>
              </div>
          </>
        );
      };
      
     