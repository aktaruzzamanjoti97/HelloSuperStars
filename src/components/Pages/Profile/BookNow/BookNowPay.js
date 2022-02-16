import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import CardContent from '@mui/material/CardContent';

import singleFrame from '../../../../images/Normal-User/Single-frame.png';
import applePayLogo from '../../../../images/Payment-img/Apple_Pay_logo.png';
import bKashLogo from '../../../../images/Payment-img/BKash-bKash-Logo.wine.png';
import payoneerLogo from '../../../../images/Payment-img/Payoneer-Logo.wine.png';
import payPalLogo from '../../../../images/Payment-img/PayPal-Logo.wine.png';
import visaLogo from '../../../../images/Payment-img/Visa_Inc._logo.svg.png';
import BookNowModal from './BookNowModal';
import { Button } from '@mui/material';
import axios from "axios";
import swal from 'sweetalert';
import ParticipateReceipt from './ParticipateReceipt/ParticipateReceipt';

const BookNowPay = (props) => {

    const [cardModalShow, setCardModalShow] = React.useState(false);
    const history = useHistory();
    const [modalShow, setModalShow] = React.useState(false);

    const [cardInput, setCardInput] = useState({
        card_holder_name: '',
        card_number: '',
        date: '',
        ccv: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setCardInput({ ...cardInput, [e.target.name]: e.target.value });
    }

    const cardInfoSubmit = (e) => {
        e.preventDefault();
        const data = {
            meetup_event_id: props.event_id,
            card_holder_name: cardInput.card_holder_name,
            card_number: cardInput.card_number,
            date: cardInput.date,
            ccv: cardInput.ccv,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/user/meetup-event/register`, data).then(res => {
                if (res.data.status === 200) {
                    //swal("Success",res.data.message,"success");
                    setModalShow(true);
                    setCardInput([]);
                }
                else {
                    setCardInput({ ...cardInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
        <>
            <CardContent className="">
                <div className="text-center image-middle bookCa">
                    <img className="singleFrame-style BookpayImg" src={singleFrame} alt="" />
                    <h3 className="centered Bookpay">Payment Method</h3>
                </div>

                <div>

                    <OwlCarousel className="owl-theme pay-carousel-xa fowl-carousel " loop margin={0} nav>
                        <div className="item">
                            <img src={applePayLogo} alt="" className="img-fluid payment-img-xa" />
                        </div>
                        <div className="item">
                            <img src={bKashLogo} alt="" className="img-fluid payment-img-xa" />
                        </div>
                        <div className="item">
                            <img src={payoneerLogo} alt="" className="img-fluid payment-img-xa" />
                        </div>
                        <div className="item">
                            <img src={payPalLogo} alt="" className="img-fluid payment-img-xa" />
                        </div>
                        <div className="item">
                            <img src={visaLogo} alt="" className="img-fluid payment-img-xa" />
                        </div>
                    </OwlCarousel>

                </div>

                <div className='BookNow-m-p'>
                    <form onSubmit={cardInfoSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">Cardholder Name</big>
                                    <input type="text" className="form-control BookNow-input" name="card_holder_name" onChange={handleInput} value={cardInput.card_holder_name} />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">Card Number</big>
                                    <input type="text" className="form-control BookNow-input" name="card_number" onChange={handleInput} value={cardInput.card_number} />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group my-3">
                                            <big className="text-white">Date</big>
                                            <input type="date" className="form-control BookNow-input" name="date" onChange={handleInput} value={cardInput.date} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group my-3">
                                            <big className="text-white">CCV</big>
                                            <input type="text" className="form-control BookNow-input" name="ccv" onChange={handleInput} value={cardInput.ccv} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    {/* <button type="submit" className="my-3 btn btn-gold text-light fw-bold" onClick={(e)=>{
                                e.preventDefault(); setModalShow(true) }}>Confirm</button> */}
                                    <button onClick={() => setCardModalShow(true)} type="submit" className="my-3 btn btn-gold text-light fw-bold">Confirm</button>

                                    <ParticipateReceipt
                                        show={cardModalShow}
                                        onHide={() => setCardModalShow(false)}
                                    />
                                    {/* <BookNowModal show={modalShow} onHide={() => setModalShow(false)} /> */}
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </CardContent>
        </>
    )
}

export default BookNowPay