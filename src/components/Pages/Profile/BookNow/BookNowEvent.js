import React,{ useState, useEffect, useRef } from 'react';
import { Link, useHistory} from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse'
import './BookNow.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Azhari from '../../../../images/starProfile/StarPhotos/1.jpg';
import BookNowPay from './BookNowPay';
import axios from "axios";
import moment from 'moment'
import { Markup } from 'interweave';

const BookNowEvent = (props) => {
const [open, setOpen] = useState(false);

const history = useHistory();
const [star, setStar] = useState({});
const [meetup, setMeetup] = useState('');


function handleClick(e){
    e.preventDefault();
    setOpen(!open);
}


useEffect(() => {
    let isMounted = true;
    
    const star_id = props.match.params.star;
    const event_id = props.match.params.id;

    axios.get(`/api/user/meetup-event/${star_id}/${event_id}`).then(res =>{
    
        if(isMounted)
        {
            if(res.data.status === 200)
            {
                setStar(res.data.star);
                setMeetup(res.data.meetup);

                console.log(res.data.star);
            }
        }
    });

}, [props.match.params.star, props.match.params.id, history]);

return (
<>
    <Card className='BookNow'>
        <CardContent>
            <div className="row BookNow-m-p">
                <div className="col-md-3 mb-3">
                    <div className="play-button-container">
                        <img src={`http://localhost:8000/${meetup.banner}`} alt="" className="img-fluid BookImg" />
                    </div>
                </div>

                <div className="col-md-9">
                    <h4 className="BookNameText">{meetup.title}</h4>
                    <div className="vb"></div>
                    <div className="mt-3 row">

                        <div className="col-md-6 BookNowMN">
                            <table className='taBook'>
                                <tr >
                                    <th className='text-light bookTh'>Star</th>
                                    {/* <td className='BookNText'>{star.super_star?.first_name} {star.super_star?.last_name}</td> */}
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Date</th>
                                    <td className='BookNText'>{moment(meetup.date).format('LL')}</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Time</th>
                                    <td className='BookNText'>{moment(meetup.start_time, "HH:mm:ss").format("hh:mm A")} to {moment(meetup.end_time, "HH:mm:ss").format("hh:mm A")}</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Fee</th>
                                    <td className='BookNText'>{meetup.fee} BDT</td>
                                </tr>
                                </table>
                            {/* <div className="text-white">
                                <h6>Star</h6>
                                <h6>Date</h6>
                                <h6>Time</h6>
                                <h6>Fee</h6>
                            </div>
                            <div className="mx-3 BookNText">
                                <h6>Mizanur Rahman Azhari</h6>
                                <h6>12/08/2021</h6>
                                <h6>10.00 PM to 11:00 PM</h6>
                                <h6>999 BDT</h6>
                            </div> */}
                        </div>

                        <div className="col-md-6">
                                <h5 className="text-white">Instructions</h5>
                                <p className='BookNText'>
                                    <Markup content= {meetup.description}/>
                                </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="BookNow-m-p">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Name</big>
                                <input type="text" className="form-control BookNow-input" name="name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Phone Number</big>
                                <input type="text" className="form-control BookNow-input" name="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <button type="submit" className="my-3 btn btn-gold text-light fw-bold" variant="link"
                                    onClick={handleClick } aria-expanded={open}
                                    aria-controls="collapseID">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </CardContent>
        
        {/* Book Now Payment */}

        <Collapse in={open}>
            <div id="collapseID">
               <BookNowPay/>
            </div>
        </Collapse>

    </Card>

</>
);
};
export default BookNowEvent