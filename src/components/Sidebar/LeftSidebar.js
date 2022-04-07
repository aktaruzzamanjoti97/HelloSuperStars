import React, { useState, useEffect, useRef } from 'react';
import {Link } from 'react-router-dom'
import { Users } from '../../DummyData'
import Online from '../Sidebar/Left/StarsOnline/Online'
import OnlineUser from '../Sidebar/Left/StarsOnline/OnlineUser'
import axios from "axios";


import '../CSS/Sidebar/Left/Left.css'
import '../CSS/Sidebar/Left/Category.css'
import '../CSS/Sidebar/Left/Following.css'



export const LeftSidebar = ({history, onlineUserProp}) => {
    const [activity, setCountActivity] = useState(0);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [pendingAudtion, setPendingAudtion] = useState();
    

    useEffect(() => {

        setOnlineUsers(onlineUserProp);

        axios.get('api/user/activity_count').then(res =>{
            if(res.data.status === 200)
            {
                setCountActivity(res.data.activity);
            }   
        });
        axios.get('api/user/pendingEnrollAudition').then(res =>{
            if(res.data.status === 200)
            {
                setPendingAudtion(res.data.enrolledAuditionsPending)
            }   
        });

    }, [onlineUserProp]);

    return (
        <>
            <div className="MobileLeft left-col-box p-3 mt-3 ">
                
                <div class="accordion " id="accordionExample">
                    <div className="accordion" id="accordionExample">

                        <Link className="teop-s" to='/category'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span>
                                            <i className="fas fa-layer-group mx-2 profile-font-color fa-2x" ></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" >
                                        Category <br></br>
                                            <small className="category-size-chat"> 5 selected</small>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>

                        <Link className="teop-s" to='/following'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span>
                                            <i className="fas fa-star mx-2 profile-font-color fa-2x" ></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" >
                                            Following <br></br>
                                            <small className="category-size-chat"> 25 star</small>
                                            
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>

                        <Link className="teop-s" to='/fan-group'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span>
                                            <i className="fas fa-user mx-2 profile-font-color fa-2x" ></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" >
                                            Fan Group <br></br>
                                            <small className="category-size-chat"> 2 group</small>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>


                        <Link className="teop-s" to='/wallet'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo" >
                                        <span>
                                            <i className="fas fa-wallet mx-2 profile-font-color fa-2x" ></i>
                                        </span>
                                        <span className="mx-2 profile-font-color">
                                            Wallet <br></br>
                                            <small className="category-size-chat" > 200 star</small>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>

                        
                        <Link className="teop-s" to='/enrolled-auditions'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                            aria-controls="collapseTwo" >
                                            <span>
                                                <i className="fas fa-id-card mx-2 profile-font-color fa-2x"></i>
                                            </span>
                                            <span className="mx-2 profile-font-color" >
                                                Enrolled Auditions <br></br>
                                                <small className="category-size-chat">{pendingAudtion} Pending </small>
                                            </span>
                                        </button>

                                </h2>
                            </div>
                        </Link>

                        <Link className="teop-s" to='/activities'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                            aria-controls="collapseTwo" >
                                            <span>
                                                <i class="fas fa-id-card-alt mx-2 profile-font-color fa-2x"></i>
                                            </span>
                                            <span className="mx-2 profile-font-color" >
                                                Activities <br></br>
                                                <small className="category-size-chat">{activity} activities recently</small>
                                            </span>
                                        </button>

                                </h2>
                            </div>
                        </Link>
                            

                        <Link className="teop-s" to='/settings'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                        aria-controls="collapseTwo" >
                                        <span>
                                            <i className="fas fa-cog mx-2 profile-font-color fa-2x"></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" >Setting</span>
                                    </button>
                                </h2>
                            </div>
                        </Link>

                        <Link className="teop-s" to='/chatting'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                        aria-controls="collapseTwo" >
                                        <span>
                                            <i className="fas fa-cog mx-2 profile-font-color fa-2x"></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" >Chatting</span>
                                    </button>
                                </h2>
                            </div>
                        </Link>


                    </div>
                    
                </div>

            </div>
            
            { /* Stars Online */}
            <div className="MobileLeft container left-col-box-home-chat chat01 p-3 mt-3">
                <div className="accordion left-c">
                    <div class="accordion-header input-group ">
                        <span class="form-outline Stars-search">Stars Online</span>
                        <span class="form-outline Stars-search">
                            <input type="text" className="Stars-searchid"/>
                        </span>
                    </div>

                    <div class="ScrollStyle">
                        <div className="left-bottom-ap-chat">
                            {onlineUsers.map((u) => (
                                <Link to={`/chatting/${u.userId}`}>
                                    <OnlineUser key={u.userId} user={u.userId} />
                                </Link>
                              
                            ))}

                            {Users.map((u) => (
                              <Online key={u.id} user={u} />
                            ))}
                        </div>
                    </div>

                </div>

                
            </div>
            { /* Stars Online End*/}

            

        </>
    )
}
export default LeftSidebar;
