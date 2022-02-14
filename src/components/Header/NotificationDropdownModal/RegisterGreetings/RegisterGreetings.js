import React, { useState ,useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';
import OwlCarousel from 'react-owl-carousel';
import singleFrame from '../../../../images/Normal-User/Single-frame.png';
import applePayLogo from '../../../../images/Payment-img/Apple_Pay_logo.png';
import bKashLogo from '../../../../images/Payment-img/BKash-bKash-Logo.wine.png';
import payoneerLogo from '../../../../images/Payment-img/Payoneer-Logo.wine.png';
import payPalLogo from '../../../../images/Payment-img/PayPal-Logo.wine.png';
import visaLogo from '../../../../images/Payment-img/Visa_Inc._logo.svg.png';
import azhari from '../../../../images/starProfile/StarPhotos/1.jpg';
import PhoneInput from 'react-phone-input-2'

import loading from '../../../../images/LiveChat/Loading2.gif';
import axios from "axios";
import swal from 'sweetalert';

import { Link, useLocation, useHistory } from "react-router-dom";
import { Markup } from 'interweave';


const RegisterGreetings = () => {

    const [showCard, setShowCard] = React.useState(false)
    const [Input, setInput] = useState();
    const [greetingInfo, setGreetingInfo] = useState({})
    const [notifictionInfo, setNotifictionInfo] = useState()
    const [changeIcon, setChange] = useState(false);

    const location = useLocation();
    const [inputError, setInputError] = useState([]);
    const [loding, setLoading] = useState(false)

    const history = useHistory();

    
    useEffect(() => {
        setGreetingInfo(location.state.greetingInfo);
        setNotifictionInfo(location.state.notification_id);

       
        
    },[location])
    let hendelSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        let form_data = new FormData(e.target);
        let data = Object.fromEntries(form_data.entries());
        console.log(data);

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("/api/user/greetings_registaion_update", data).then((res) => {
                setLoading(false);
              
                if (res.data.status === 200) {
                    history.push("/activities")
                swal("Done", "Your information saved successfully", "success", {
                    button: "ok",
                  });
      
              } else {
                  console.log('first', res.data.validation_errors);
                  setInputError(res.data.validation_errors);
              }
            });
        });
        
          
    }
    function handleChangeIcon() {
        setChange(!(changeIcon));

    }

    

    return (
        <div>
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
                            <h4 className="starChat-heading">Greetings Details</h4>
                            <div className="vb"></div>

                            <div className="mt-3 row">

                                <div className="col-md-6 display-style-starChat">
                                    <div className="me-5 starChat-child-style text-white">
                                        <h6>Title</h6>
                                        <h6>Fee</h6>
                                    </div>

                                    <div style={{ color: "#c2c2c2" }} className="mx-5 starChat-child-style">
                                        <h6>{greetingInfo.title}</h6>
                                        <h6>{greetingInfo.cost} BDT</h6>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="mx-2 starChat-child-style">
                                        <h5 className="text-white">Instructions</h5>
                                        <p style={{ color: '#c2c2c2' }}>
                                        <Markup content={greetingInfo.description}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="whole-m-p">
                        
                        <Form onSubmit={hendelSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Name</big><big className='text-danger'> *</big>
                                        <input type='hidden' name="notification_id" value={notifictionInfo}/>
                                        <input type="text" className="form-control input-overlay" name="name" />
                                        <small id="emailHelp" class="form-text text-danger">{ inputError.name }</small>
                            
                                
                                    </div>
                                    <p className="" style={{ color: 'red' }}></p>
                                    <div className="form-group my-3">
                                        <big className="text-white">Date of Birth</big><big className='text-danger'> *</big>
                                        <input type="date" className="form-control input-overlay" name="date_b" />
                                        <small id="emailHelp" class="form-text text-danger">{ inputError.date_b }</small>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Phone Number</big><big className='text-danger'> *</big>
                                        <input type="phone" className="form-control input-overlay" name="phone" />
                                        <small id="emailHelp" class="form-text text-danger">{ inputError.phone }</small>

                                    </div>
                                    <p className="" style={{ color: 'red' }}></p>
                                    <div className="form-group my-3">
                                        <big className="text-white">Location</big>
                                        <input type="text" className="form-control input-overlay" name="location" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group my-1">
                                <big className="text-white">Greeting Context</big><big className='text-danger'> *</big>
                                <textarea name="greetings_context" id="" cols="10" rows="5" className='form-control input-overlay'></textarea>
                                <small id="emailHelp" class="form-text text-danger">{ inputError.greetings_context }</small>
                            </div>

                            <div className="form-group my-1">
                                <big className="text-white">Additional Message</big>
                                <input type="text" className="form-control input-overlay" name="add_msg" />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Password</big><big className='text-danger'> *</big>

                                        <input type="text" className="form-control input-overlay" name="password" />
                                        <small id="emailHelp" class="form-text text-danger">{ inputError.password }</small>

                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    {/* <p className="" style={{ color: 'red' }}></p> */}
                                    

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="submit" className="my-3 btn btn-gold submit-greetings-btn">Register {loding ? <img src={loading} style={{ width: '20px', marginLeft: '10px' }} alt="" />:null}</button>
                                </div>

                            </div>

                            {/* <CustomToggle eventKey="0">
                               
                            </CustomToggle> */}
                        </Form>
                    </div>
                </CardContent>


            </Card>

            {showCard ? <Card className="my-4" style={{ backgroundColor: '#343434' }} sx={{ minWidth: 275 }}>
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
                                        <big className="text-white">Card number</big>
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
                            <button type="submit" className="my-3 btn btn-gold">Confirm Payment</button>
                        </form>
                    </div>
                </CardContent>
            </Card> : null}
        </div>
    );
};

export default RegisterGreetings;