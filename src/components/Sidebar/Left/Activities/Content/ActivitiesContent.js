import React ,{useEffect,useState} from "react";
import './Activitse.css'
import Pro from "../../../../../images/Capture.JPG";
import Clock from "../../../../../images/clock.png";
import ActivitiesModal from "./ActivitiesModal";

import moment from 'moment';
const ActivitiesContent = (props) => {
const [modalShow, setModalShow] = React.useState(false);
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [showSemicolon, setShowSemicolon] = useState(false);

useEffect(() => {
setInterval(() => {
const now = moment();
const then = moment('2022-03-20 12:12:12', 'YYYY-MM-DD hh:mm:ss');
const countdown = moment(then - now);
setDays(countdown.format('D'));
setHours(countdown.format('hh'));
setMinutes(countdown.format('mm'));
setSeconds(countdown.format('ss'));
}, 1000);
}, []);
return (
<>
    <div className="row mt-3">

        <div className="col-md-6 mb-4">
            <div className="card container-x-ac">

                <img src={Pro} className="Active-Img-X" alt="profilePicture" />

                <div class="centered-x-ac-y"></div>

                <div class="top-left">
                    <div className="d-flex Pic-Bg p-1">
                        <span className="text-light"> <img src={Clock} alt="" className='Pic-icon_x' /></span>
                        <div className="mx-2">
                            <span className="Pic_Ic_text fw-bold ">{days}d&nbsp; {hours}:{minutes}:{seconds}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-left-x-ax">
                    <div className="d-flex p-1">
                        <div className="mx-4">
                            <span className="Pic_Ic_B">Live chat with Sakib Al Hasan</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">11 : 00 PM</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">Pending</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-right-x-ax ">
                    <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                            <button className="btn-x-r-ac" onClick={()=> setModalShow(true)}>
                                <i className="fas fa-arrow-alt-circle-right "></i></button>
                            <ActivitiesModal show={modalShow} onHide={()=> setModalShow(false)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="col-md-6 mb-4">
            <div className="card container-x-ac">

                <img src={Pro} className="Active-Img-X" alt="profilePicture" />

                <div class="centered-x-ac-y"></div>

                <div class="top-left">
                    <div className="d-flex Pic-Bg p-1">
                        <span className="text-light"> <img src={Clock} alt="" className='Pic-icon_x' /></span>
                        <div className="mx-2">
                            <span className="Pic_Ic_text fw-bold ">{days}d&nbsp; {hours}:{minutes}:{seconds}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-left-x-ax">
                    <div className="d-flex p-1">
                        <div className="mx-4">
                            <span className="Pic_Ic_B">Live chat with Sakib Al Hasan</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">11 : 00 PM</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">Pending</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-right-x-ax ">
                    <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                            <button className="btn-x-r-ac" onClick={()=> setModalShow(true)}>
                                <i className="fas fa-arrow-alt-circle-right "></i></button>
                            <ActivitiesModal show={modalShow} onHide={()=> setModalShow(false)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card container-x-ac">

                <img src={Pro} className="Active-Img-X" alt="profilePicture" />

                <div class="centered-x-ac-y"></div>

                <div class="top-left">
                    <div className="d-flex Pic-Bg p-1">
                        <span className="text-light"> <img src={Clock} alt="" className='Pic-icon_x' /></span>
                        <div className="mx-2">
                            <span className="Pic_Ic_text fw-bold ">{days}d&nbsp; {hours}:{minutes}:{seconds}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-left-x-ax">
                    <div className="d-flex p-1">
                        <div className="mx-4">
                            <span className="Pic_Ic_B">Live chat with Sakib Al Hasan</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">11 : 00 PM</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">Pending</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-right-x-ax ">
                    <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                            <button className="btn-x-r-ac" onClick={()=> setModalShow(true)}>
                                <i className="fas fa-arrow-alt-circle-right "></i></button>
                            <ActivitiesModal show={modalShow} onHide={()=> setModalShow(false)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</>
);
};

export default ActivitiesContent;