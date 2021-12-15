import React, { useState, useEffect, useRef } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OwlCarousel from 'react-owl-carousel';
import singleFrame from '../../../../../../images/Normal-User/Single-frame.png';
import applePayLogo from '../../../../../../images/Payment-img/Apple_Pay_logo.png';
import bKashLogo from '../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png';
import payoneerLogo from '../../../../../../images/Payment-img/Payoneer-Logo.wine.png';
import payPalLogo from '../../../../../../images/Payment-img/PayPal-Logo.wine.png';
import visaLogo from '../../../../../../images/Payment-img/Visa_Inc._logo.svg.png';
import azhari from '../../../../../../images/starProfile/StarPhotos/1.jpg';
import '../../../../../CSS/Profile/starProfile/starChat.css';
import axios from "axios";
import swal from 'sweetalert';

import { Link, Route,useLocation,  Redirect, useHistory} from 'react-router-dom';


const StarChat = (props) => {
    const [oldData, setOldData] = useState([]);
    const [formdata, setFormdata] = useState({
        name: '',
        date_b: '',
        phone: '',
        location: '',
        comment: '',
        error_list: []
    })
    console.log(formdata);
    const [showCard, setShowCard] = React.useState(false)
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {

        setOldData(location.state.data);
  
    }, [location]);

    const handleInput = (e) => {
        const {name,value}=e.target;
        setFormdata((prev)=>{
              return({...prev,[name]:value});
          })
    
    }
    function handleClick(e) {
        e.preventDefault();
        setShowCard(true)
        console.log(showCard)
            ;
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: formdata.name,
            date_b: formdata.date_b,
            phone: formdata.phone,
            location: formdata.location,
            comment: formdata.comment,
            event_id: oldData.id,
            minute: oldData.minute,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/user/liveChatRigister/`, data).then(res => {
                if(res.data.status === 200)
                {
                    // setShowCard(true)
                    swal("Success",res.data.message,"success");
                    history.push('/');
                }
                
            });
        });
    }

    return (
        <>
            <Card style={{ backgroundColor: '#343434' }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="row whole-m-p">
                        <div className="col-md-3">
                            <div className="play-button-container">
                                <img
                                    src={azhari}
                                    alt=""
                                    className="img-fluid star-card-chat-demo-video"
                                />
                                <div className="play-center">
                                    <i className="fas fa-play fa-3x"></i>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h4 className="starChat-heading">Live Chat</h4>
                            <div className="vb"></div>

                            <div className="mt-3 row">

                                <div className="col-md-6 display-style-starChat">
                                    <div className="me-5 starChat-child-style text-white">
                                        <h6>Star</h6>
                                        <h6>Date</h6>
                                        <h6>Time</h6>
                                        <h6>Fee</h6>
                                    </div>

                                    <div style={{ color: "#c2c2c2" }} className="mx-5 starChat-child-style">
                                        <h6>Mizanur Rahman Azhari</h6>
                                        <h6>12 / 08 / 2021</h6>
                                        <h6>11.59 PM</h6>
                                        <h6>999 BDT</h6>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="mx-2 starChat-child-style">
                                        <h5 className="text-white">Instructions</h5>
                                        <p style={{ color: '#c2c2c2' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis rerum, ex recusandae facere dolorem quia cumque sapiente natus cum nulla quas possimus corrupti minus tempora officia dolor earum sunt sit vel. Architecto, accusamus neque non minima doloribus culpa itaque!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="whole-m-p">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Name</big>
                                        <input type="hidden" onChange={handleInput} name="event_id" value={oldData.id} />
                                        <input type="hidden" onChange={handleInput} name="minute" value={oldData.minute} />
                                        <input type="text"   onChange={handleInput} className="form-control input-overlay" name="name"/>
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Date of Birth</big>
                                        <input type="date"  onChange={handleInput} className="form-control input-overlay"  name="date_b" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Phone Number</big>
                                        <input type="text"  onChange={handleInput} className="form-control input-overlay"  name="phone" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Location</big>
                                        <input type="text"  onChange={handleInput} className="form-control input-overlay"  name="location" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group my-1">
                                <big className="text-white">Additional Message</big>
                                <input type="text"  onChange={handleInput} className="form-control input-overlay"  name="comment" />
                            </div>

              

                            {/* <button onClick={formSubmit} type="submit" className="my-3 btn btn-gold">Register</button> */}
                            {/* <CustomToggle eventKey="0">
                               
                            </CustomToggle> */}
                        </form>
                    </div>
                </CardContent>

                {/* This is me */}
            </Card>

            <Card className="my-4" style={{ backgroundColor: '#343434' }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="text-center image-middle">
                        <img className="singleFrame-style" src={singleFrame} alt="" />
                        <h3 className="centered">Payment Method</h3>
                    </div>

                    <div>
                        <OwlCarousel className="owl-theme" loop margin={0} nav>
                            <div className="item">
                                <img
                                    src={applePayLogo}
                                    alt=""
                                    className="img-fluid payment-img"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src={bKashLogo}
                                    alt=""
                                    className="img-fluid payment-img"

                                />
                            </div>
                            <div className="item">
                                <img
                                    src={payoneerLogo}
                                    alt=""
                                    className="img-fluid payment-img"

                                />
                            </div>
                            <div className="item">
                                <img
                                    src={payPalLogo}
                                    alt=""
                                    className="img-fluid payment-img"

                                />
                            </div>
                            <div className="item">
                                <img
                                    src={visaLogo}
                                    alt=""
                                    className="img-fluid payment-img"

                                />
                            </div>
                        </OwlCarousel>
                    </div>

                    <div>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Cardholder Name</big>
                                        <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>

                                </div>

                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Password</big>
                                        <input type="password" className="form-control input-overlay" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group my-3">
                                                <big className="text-white">Date</big>
                                                <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group my-3">
                                                <big className="text-white">CCV</big>
                                                <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* <button  onClick={formSubmit}  className="my-3 btn btn-gold">Confirm Payment</button> */}
                                <button onClick={formSubmit} type="submit" className="my-3 btn btn-gold">Register</button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default StarChat;