import CardContent from '@mui/material/CardContent';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import singleFrame from '../../../../../../../images/Normal-User/Single-frame.png';
import applePayLogo from '../../../../../../../images/Payment-img/Apple_Pay_logo.png';
import bKashLogo from '../../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png';
import payoneerLogo from '../../../../../../../images/Payment-img/Payoneer-Logo.wine.png';
import payPalLogo from '../../../../../../../images/Payment-img/PayPal-Logo.wine.png';
import visaLogo from '../../../../../../../images/Payment-img/Visa_Inc._logo.svg.png';
import ParticipateReceipt from '../../../../../Profile/BookNow/ParticipateReceipt/ParticipateReceipt';

const RegisterNowPay = () => {

    const [cardModalShow, setCardModalShow] = React.useState(false);





    return (
        <CardContent className="bg-dark my-4">
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
                    <form onSubmit="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">Cardholder Name</big>
                                    <input type="text" className="form-control BookNow-input" name="card_holder_name"  />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">Card Number</big>
                                    <input type="text" className="form-control BookNow-input" name="card_number"  />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group my-3">
                                            <big className="text-white">Date</big>
                                            <input type="date" className="form-control BookNow-input" name="date" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group my-3">
                                            <big className="text-white">CCV</big>
                                            <input type="text" className="form-control BookNow-input" name="ccv" />
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
    );
};

export default RegisterNowPay;