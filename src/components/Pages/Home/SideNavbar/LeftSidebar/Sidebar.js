import React from 'react'

import ChatImage from "../../../../../images/navbar/account.jpg";

export const Sidebar = () => {
    return (
        <>
             <div className="container left-col-box-home p-3 mt-3">
                        <div className="accordion" id="accordionExample" >
                            <div className="accordion-item left-bottom" >
                                <h2 className="accordion-header  " id="headingOne">
                                    <button className="accordion-button profile-accordion-button left-bottom collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne">
                                        <span><i className="fas fa-layer-group mx-2 text-warning fa-2x CategoryNameHome"></i></span> <span
                                            className="mx-2 text-warning CategoryNameHome">Category <br></br>
                                            <small className="category-size-chat "> 5 selectd</small>
                                        </span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="text-warning CategoryNameHome">Category loop start here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-1 left-bottom">
                                <h2 className="accordion-header " id="headingTwo">
                                    <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span><i className="fas fa-star mx-2 text-warning fa-2x CategoryNameHome"></i></span> 
                                        <span className="mx-2 text-warning CategoryNameHome">Following <br></br>
                                            <small className="category-size-chat"> 25 star</small>

                                        </span>
                                    </button>
                                </h2>
                            </div>

                            <div className="accordion-item mt-1 left-bottom">
                                <h2 className="accordion-header " id="headingTwo">
                                    <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span><i className="fas fa-wallet mx-2 text-warning fa-2x CategoryNameHome"></i></span> <span
                                            className="mx-2 text-warning CategoryNameHome">Wallet <br></br>
                                            <small className="category-size-chat"> 200 star</small>

                                        </span>
                                    </button>
                                </h2>
                            </div>

                            <div className="accordion-item mt-1 left-bottom">
                                <h2 className="accordion-header " id="headingTwo">
                                    <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span><i className="fas fa-id-card mx-2 text-warning fa-2x CategoryNameHome"></i></span> <span
                                            className="mx-2 text-warning CategoryNameHome">Enrolled audition <br></br>
                                            <small className="category-size-chat"> 1 pending</small>

                                        </span>
                                    </button>
                                </h2>
                            </div>

                            <div className="accordion-item mt-1 left-bottom">
                                <h2 className="accordion-header " id="headingTwo">
                                    <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <span><i className="fas fa-cog mx-2 text-warning fa-2x CategoryNameHome"></i></span> <span
                                            className="mx-2 text-warning CategoryNameHome">Setting
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container left-col-box-home-chat chat01 p-3 mt-3">
                        <div className="accordion " >
                            <ul class="accordion-header input-group">
                                <span class="form-outline Starssearch">Stars Online</span>
                                <span class="form-outline Starssearch">
                                    <input type="search" className="Starssearchid"/>
                                </span>
                            </ul>

                                <div class="ScrollStyle">
                                    <div className="left-bottom-chat">
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        <ul className="accordion-header chatListname" id="headingTwo">
                                                <span> <img src={ChatImage} alt="" className="SidebarStarListImage"/></span> 
                                                <span className='chatName'>Apurbo Kumar </span>
                                                
                                        </ul>
                                        
                                        
                                    </div>
                                </div>

                        </div>
                    </div>

        </>
    )
}
export default Sidebar;