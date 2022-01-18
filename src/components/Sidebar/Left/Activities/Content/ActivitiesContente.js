import React from "react";
import './Activitse.css'
import Pro from "../../../../../images/Shakib/12.jpg";
import Clock from "../../../../../images/clock.png";
import { Link } from "react-router-dom";

const ActivitiesContent = () => {
return (
<>
    <div className="row mt-3">

        <div className="col-md-6 mb-4">
            <div className="card container-x-ac">

                <img src={Pro} className="Active-Img-X" alt="profilePicture" />

                <div class="top-left">
                    <div className="d-flex Pic-Bg p-1">
                        <span className="text-light"> <img src={Clock} alt="" className='Pic-icon_x' /></span>
                        <div className="mx-2">
                            <span className="Pic_Ic_text">1 minute 20 Seconds</span>
                        </div>
                    </div>
                </div>

                <div class="centered-x-ac ">
                    <div className="d-flex  p-1">

                        <div className="mx-5 ">
                            <span className="Pic_Ic_B">Live chat with Sakib Al Hasan</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span> <span className="Pic_Ic_BX">11 : 00
                                PM</span>
                        </div>

                        <div className="mx-5 text-right ">
                            <button> arro </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className="col-md-6 ">
            <div className="card container-x-ac">
                <img src={Pro} className="Active-Img-X" alt="profilePicture" />
                <div class="top-left">1 minute 20 Seconds</div>
                <div class="centered-x-ac ">Bottom Left</div>
            </div>
        </div>

    </div>
</>
);
};

export default ActivitiesContent;