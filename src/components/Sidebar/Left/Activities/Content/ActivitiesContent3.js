import React ,{useEffect,useState} from "react";
import './Activitse.css'
import Pro from "../../../../../images/Capture.JPG";
import Clock from "../../../../../images/clock.png";
import ActivitiesModal from "./ActivitiesModal";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import LoadingSkeleton from "./LoadingSkeleton";
import moment from 'moment';
import { event, post } from "jquery";


const ActivitiesContent3 = (props) => {

const [modalShow, setModalShow] = React.useState(false);
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);




useEffect(() => {
    console.log(props.event)
    setInterval(() => {
    const now = moment();
    const then = moment('2022-03-20 12:12:12', 'YYYY-MM-DD hh:mm:ss');
    const countdown = moment(then - now);
    setDays(countdown.format('D'));
    setHours(countdown.format('hh'));
    setMinutes(countdown.format('mm'));
    setSeconds(countdown.format('ss'));
    }, 1000);
}, [props.event]);



return (
<>
    <div className="row mt-3">
        {props.loader ?props.event.map((event) => {
            return(
                <div className="col-md-4 mb-6">
            <div className="card container-x-ac">

                <img src={`http://localhost:8000/${event.learning_session?.banner}`}  className="Active-Img-X" alt="profilePicture" />

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
                            <span className="Pic_Ic_B">{event.learning_session?.title}</span><br />
                            <span className="Pic_Ic_BX">20 January 2022</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">11 : 00 PM</span>
                            &nbsp; &nbsp;<span className="Pic_Ic_BX">Pending</span>
                        </div>
                    </div>
                </div>
                <div class="bottom-right-x-ax ">
                    <div className="d-flex p-1">
                        <div className="btn-x-r-ac">
                            <button className="btn-x-r-ac py-2" onClick={()=> setModalShow(true)}>
                                <i className="fas fa-arrow-alt-circle-right "></i></button>
                            <ActivitiesModal show={modalShow} onHide={()=> setModalShow(false)} />
                        </div>
                    </div>

                    {/* <Link to={`/activities/video/${event.learning_session_id}`}  ><Button className='btn bg-warning Modal_btn-xa mb-3 text-dark fw-bold Call-btn-v'>Call Now</Button></Link> */}

                    {/* <Link to={{ 
                        pathname: "/activities/video", 
                        state: {
                            event_id: event.learning_session?.event_link
                        }
                        }}>

                        <Button className='btn bg-warning mb-3 text-dark fw-bold'>Call Now</Button>

                        </Link> */}

                        {/* <a target="_blank" href="https://star-livechat.herokuapp.com/?room=star-livechat_f1d57ujea2">
                            <Button className='btn bg-warning  mb-3 text-dark'>Join Now</Button>
                        </a> */}

                        <Link className="Link"
                            target="_blank"
                            to={
                                {pathname: '/learning-session/live_stream',
                                search:  `id=${event.learning_session.room_id}`}
                            }
                          >
                            <Button className='btn bg-warning  mb-3 text-dark'>Join Now</Button>
                        </Link>

                </div>
            </div>
        </div>
            )
        }) :
        
        <LoadingSkeleton/>
        }

    </div>

</>
);
};

export default ActivitiesContent3;