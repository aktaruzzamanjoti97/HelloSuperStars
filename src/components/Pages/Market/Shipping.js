import React, {useState} from 'react'
import Navigation from '../../Header/Navigation'
import OwlCarousel from 'react-owl-carousel';
import Bkash from '../../../images/Payment-img/BKash-bKash-Logo.wine.png'
import Payonner from '../../../images/Payment-img/Payoneer-Logo.wine.png'
import Papal from '../../../images/Payment-img/PayPal-Logo.wine.png'

const Shipping = () => {

let [num, setNum]= useState(0);
let incNum =()=>{
if(num<10) { setNum(Number(num)+1); } }; let decNum=()=> {
    if(num>0)
    {
    setNum(num - 1);
    }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }

    return (
    <>
        <Navigation />
        <div className="container mt-3">

            <div className="row AbcTa bg-dark HeadShip mb-3 ">
                <h2 className='text-light w-100 Shipping px-3 py-2'>SHIPPING</h2>

                <div className="col-md-5  py-4 px-5">

                    <div className="County mb-3">
                        <h6 className='text-light'>Country</h6>
                        <select aria-label="Default select example" className='from-control InputGS p-2 w-100'>
                            <option>Bangladesh</option>
                            <option value="1">India</option>
                            <option value="2">Bangladesh</option>
                            <option value="3">Pakistan</option>
                        </select>
                    </div>

                    <div className="County mb-3">
                        <h6 className='text-light'>City</h6>
                        <select aria-label="Default select example" className='from-control InputGS p-2 w-100'>
                            <option>Dhaka</option>
                            <option value="1">Rajshahi</option>
                            <option value="2">Dhaka</option>
                            <option value="3">Rangpur</option>
                        </select>
                    </div>

                    <div className="County mb-3">
                        <h6 className='text-light'>Area</h6>
                        <input type="text" className='from-control InputGS px-2 py-1 w-100'
                            placeholder='Banani, Road 24, House 19' />
                    </div>

                    <div className="County mb-3">
                        <h6 className='text-light'>Contact Number</h6>
                        <input type="text" className='from-control InputGS px-2 py-1 w-100'
                            placeholder='BD +880 1872 2122 1221' />
                    </div>

                </div>

                <div className="col-md-7 py-4">
                    <div className="County mb-3">
                        <iframe className='MapTFP'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6301158824376!2d90.4066268144939!3d23.79618239294373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70929b9639b%3A0xcb35089535094e43!2sTFP%20Solutions%20Limited!5e0!3m2!1sen!2sbd!4v1644484537435!5m2!1sen!2sbd" />
                    </div>
                </div>
            </div>

            <div className="row AbcTa bg-dark HeadShip mb-3 ">
                <h2 className='text-light w-100 Shipping px-3 py-2'>PAYMENT METHOD</h2>

                <OwlCarousel className='owl-theme DotsCAt'>

                    <div class='item'>
                        <img src={Bkash} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                    <div class='item'>
                        <img src={Payonner} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                    <div class='item'>
                        <img src={Papal} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                    <div class='item'>
                        <img src={Bkash} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                    <div class='item'>
                        <img src={Payonner} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                    <div class='item'>
                        <img src={Papal} className='img-fluid bg-light PayShip' alt="" />
                    </div>
                </OwlCarousel>;

            </div>

            <div className="row AbcTa justify-content-between mb-2">
                <div className="row AbcTa PriceShip  d-flex col-md-5 mb-3">
                    <div className='text-light w-100 Shipping fw-bold px-3 py-2'>PRICE</div>
                    <table className='bg-dark text-light '>
                        <tr className='TableShp TRW'>
                            <td className='paddingTD JerseyTextCX'>Jersey</td>

                            <td className='paddingTD text-center'>
                                <button className="text-center btn-Button" type="button" onClick={decNum}>-</button>
                                <input type="text" className="text-center InpBtn " value={num}
                                    onChange={handleChange} />
                                <button className="text-center btn-Button" type="button" onClick={incNum}>+</button>
                            </td>

                            <td className='paddingTD text-center PriceTag'>$ 200</td>

                        </tr>
                        <tr className='TRW'>
                            <td className='paddingTD JerseyTextCX py-2'>Delivery</td>
                            <td className='paddingTD text-center'></td>
                            <td className='paddingTD text-center'>$ 20</td>
                        </tr>
                        <tr className='TRW'>
                            <td className='paddingTD JerseyTextCX py-2 fw-bold'>Total</td>
                            <td className='paddingTD text-center'></td>
                            <td className='paddingTD text-center fw-bold'>$ 220</td>
                        </tr>
                    </table>
                </div>

                <div className="row AbcTa PriceShip d-flex col-md-6">
                <div className="row AbcTa PriceShip  d-flex  mb-3">
                    <div className='text-light w-100 Shipping fw-bold px-3 py-2'>PAYMENT</div>
                    <div className="d-flex bg-dark">
                        <input type="text" placeholder='Card number' className='PaymentP w-50 mx-3 my-3' />
                        <input type="text" placeholder='CCV' className='PaymentP  w-50  mx-3 my-3' />
                    </div>

                    <div className="d-flex bg-dark inBtb">
                        <input type="text" placeholder='Expiry date' className='PaymentP w-50 mx-3' />

                        <input type="text" className='PaymentP bg-dark w-50 mx-3 my-2' disabled />

                    </div>
                    
                </div>

                </div>
            </div>

            <div className="row AbcTa justify-content-end mb-5">
                <button className='btn btn-warning MakePaBtn'>Make Payment</button>
            </div>

        </div>

    </>
    )
    }

    export default Shipping