import React from 'react'
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

const BookNowPay = () => {
const [modalShow, setModalShow] = React.useState(false);

return (
<>
    <CardContent>
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
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-3">
                            <big className="text-white">Cardholder Name</big>
                            <input type="email" className="form-control BookNow-input" />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-3">
                            <big className="text-white">Card Number</big>
                            <input type="text" className="form-control BookNow-input" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">Date</big>
                                    <input type="email" className="form-control BookNow-input" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <big className="text-white">CCV</big>
                                    <input type="email" className="form-control BookNow-input" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-3">
                            <button type="submit" className="my-3 btn btn-gold text-light fw-bold" onClick={(e)=>{
                                e.preventDefault(); setModalShow(true) }}>Confirm</button>
                            
                            <BookNowModal show={modalShow} onHide={()=> setModalShow(false)} />
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