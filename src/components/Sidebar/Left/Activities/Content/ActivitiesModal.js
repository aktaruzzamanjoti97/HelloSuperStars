import {React , useEffect,useState} from 'react'
import { Modal, Button} from 'react-bootstrap'
import Clock from "../../../../../images/clock.png"
import ClockImg from '../../../../../images/ActivitiseMo.jpg'
import moment from 'moment';
import { Link } from 'react-router-dom';

const ActivitiesModal = (props) => {
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [showSemicolon, setShowSemicolon] = useState(false);

useEffect(() => {
setInterval(() => {
const now = moment();
const then = moment('2022-02-18 12:12:12', 'YYYY-MM-DD hh:mm:ss');
const countdown = moment(then - now);
setDays(countdown.format('D'));
setHours(countdown.format('hh'));
setMinutes(countdown.format('mm'));
setSeconds(countdown.format('ss'));
}, 1000);
}, []);
return (
<>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered className=''>

        <Modal.Body className='Modal_B-Ac py-5'>
            <div className=' d-flex'>

                <div className='left-X-M-Ax col-md-6 mx-5'>
                    <p>Connect with</p>
                    <h1 className='fw-bold mb-3'>Sakib All Hasan</h1>

                    <div className='d-flex '>
                        <span> <img src={Clock} alt="" /> </span> &nbsp;&nbsp;&nbsp;
                        <span>
                            <h1 className='fw-bold text-warning'>{days}D&nbsp; <span className='Time_x_p'>{hours}:{minutes}:{seconds}</span></h1>
                        </span>
                    </div>

                </div>

                <div className='right-X-M-Ax col-md-3 mx-5'>
                    <img src={ClockImg} alt="" className='Img-Mo_s img-fluid' />
                </div>
            </div>

            <button class="top-right_cross bg-warning" onClick={props.onHide}><i
                    class="fas fa-times-circle "></i></button>
        </Modal.Body>
        <center>
            <Link to='/activities/vide'><Button className='btn bg-warning Modal_btn-xa mb-3 text-dark fw-bold Call-btn-v'>Call Now</Button></Link>
        </center>

    </Modal>
</>
)
}

export default ActivitiesModal