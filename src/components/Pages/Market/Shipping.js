import React, {useEffect, useState} from 'react'
import Navigation from '../../Header/Navigation'
import OwlCarousel from 'react-owl-carousel';
import Bkash from '../../../images/Payment-img/BKash-bKash-Logo.wine.png'
import Payonner from '../../../images/Payment-img/Payoneer-Logo.wine.png'
import Papal from '../../../images/Payment-img/PayPal-Logo.wine.png'
import MarketModal from './Content/MarketModal';
import axios from 'axios';
import swal from "sweetalert";

import { useHistory, useLocation, useParams } from 'react-router-dom';

const Shipping = () => {
    let { slug } = useParams();
    const history = useHistory();

    const [modalShow, setModalShow] = React.useState(false);
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    const [newcountry, setNewCountry] = useState('');
    const [newstate, setNewState] = useState('');
    const [newcity, setNewCity] = useState('');

    const [area, setArea] = useState('');
    const [phone, setPhone] = useState('');
    const [item, setItem] = useState('');
    const [unit_price, setUnitPrice] = useState('');
    const [deliverycharge, setDelivery] = useState(50);
    // const [total, setTotal] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [cvc, setCvc] = useState('');
    const [expireDate, setExpireDate] = useState('');
    

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) { setNum(Number(num) + 1); }
    }; let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    useEffect(() => {

        axios.get(`api/user/marketplace/view-country`).then(res =>{
            //   console.log(res.data.category);
            if(res.status === 200)
            {
                setCountry(res.data.data)
                console.log("country ", res.data.data);
                // setNewCountry(res.data.data);
            }
        });
        axios.get(`api/user/marketplace/details/${slug}`).then(res =>{
            //   console.log(res.data.category);
            if(res.status === 200)
            {
                setUnitPrice(res.data.slugdetails.unit_price)
                console.log("country ", res.data.slugdetails);
                // setNewCountry(res.data.data);
            }
        });
            
    }, []);


    // console.log("Country : ", newcountry);
    // console.log("State : ", newstate);
    // console.log("City : ", newcity);
    // console.log("Area : ", area);
    // console.log("Phone : ", phone);
    // console.log("Items : ", num);
    // console.log("unit_price : ", unit_price);
    // console.log("Delivery Charge : ", deliverycharge);
    // console.log("CVC : ", cvc);
    // console.log("Card No : ", cardNo);
    // console.log("expireDate : ", expireDate);

    

    const selectState =  (e) => {
        let value = e.target.value;
        var data = value;
    
        axios.get(`/api/user/marketplace/state/${data}`).then(res =>{
            // console.log(res.data.category);
            if(res.status === 200)
            {
                setState(res.data.state)
            }
            // setLoading(false);
          });

          setNewCountry(data);
    };

    const selectCity =  (e) => {
        let value = e.target.value;
        var data = value;
    
        axios.get(`/api/user/marketplace/city/${data}`).then(res =>{
            // console.log(res.data.category);
            if(res.status === 200)
            {
                setCity(res.data.city)
            }
            // setLoading(false);
          });

          setNewState(data);
    };
    const selectData =  (e) => {
        let value = e.target.value;
        var data = value;
        setNewCity(data);
    };

    const createMarketplaceOrder = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('country_id', newcountry)
        formData.append('state_id', newstate)
        formData.append('city_id', newcity)
        formData.append('area', area)
        formData.append('phone', phone)
        formData.append('items', num)

        formData.append('unit_price', unit_price)
        formData.append('delivery_charge', deliverycharge)
        formData.append('cvc', cvc)
        formData.append('card_no', cardNo)
        formData.append('expire_date', expireDate)
        formData.append('marketplace_slug', slug)



        axios.post(`/api/user/marketplace/order/store`, formData).then(res => {
            if(res.data.status === 200)
            {
                console.log('Done');
                history.push("/activities")
                // setTitle('')
                // setUnitprice('')
                // setItems('')
                // setKeywords('')

                swal("Welcome",res.data.message,"success");
            }
        });
    
    }

    return (
    <>
        <Navigation />
        <form className="container mt-3" onSubmit={createMarketplaceOrder}>

            <div className="row AbcTa bg-dark HeadShip mb-3 ">
                <h2 className='text-light w-100 Shipping px-3 py-2'>SHIPPING</h2>

                <div className="col-md-5  py-4 px-5">

                    <div className="County mb-3">
                        <h6 className='text-light'>Country</h6>
                        <select onChange={selectState} aria-label="Default select example" id='country_id' name='country_id' className='from-control InputGS p-2 w-100'>
                        
                            {/* <option>Bangladesh</option>
                            <option value="1">India</option> */}
                            <option className="text-whaite" value="">--Choose Country--</option>
                            {country.map((user, index) => (
                                <option className="text-whaite" value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </div>




                    <div className="County mb-3">
                        <h6 className='text-light'>State</h6>
                        <select onChange={selectCity} aria-label="Default select example" id='state_id' name='state_id' className='from-control InputGS p-2 w-100'>
                            <option>--Select State--</option>
                            {state.map((user, index) => (
                                <option className="text-whaite" value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className="County mb-3">
                        <h6 className='text-light'>City</h6>
                        <select aria-label="Default select example" onChange={selectData} id='country_id' name='country_id' className='from-control InputGS p-2 w-100'>
                            <option>--Select City--</option>
                            {city.map((city, index) => (
                                <option className="text-whaite" value={city.id}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="County mb-3">
                        <h6 className='text-light'>Area</h6>
                        <input type="text" onChange={(event)=>{ setArea(event.target.value) }} className='from-control InputGS px-2 py-1 w-100'
                            placeholder='Banani, Road 24, House 19' />
                    </div>

                    <div className="County mb-3">
                        <h6 className='text-light'>Contact Number</h6>
                        <input type="text" onChange={(event)=>{ setPhone(event.target.value) }} className='from-control InputGS px-2 py-1 w-100'
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

                            <td className='paddingTD text-center PriceTag'>Tk {unit_price*num}</td>

                        </tr>
                        <tr className='TRW'>
                            <td className='paddingTD JerseyTextCX py-2'>Delivery</td>
                            <td className='paddingTD text-center'></td>
                            <td className='paddingTD text-center'>Tk {deliverycharge}</td>
                        </tr>
                        <tr className='TRW'>
                            <td className='paddingTD JerseyTextCX py-2 fw-bold'>Total</td>
                            <td className='paddingTD text-center'></td>
                            <td className='paddingTD text-center fw-bold'>Tk {num*unit_price + deliverycharge}</td>
                        </tr>
                    </table>
                </div>

                <div className="row AbcTa PriceShip d-flex col-md-6">
                <div className="row AbcTa PriceShip  d-flex  mb-3">
                    <div className='text-light w-100 Shipping fw-bold px-3 py-2'>PAYMENT</div>
                    <div className="d-flex bg-dark">
                        <input type="text" placeholder='Card number' onChange={(event)=>{ setCardNo(event.target.value) }} className='PaymentP w-50 mx-3 my-3' />
                        <input type="text" placeholder='CCV' onChange={(event)=>{ setCvc(event.target.value) }} className='PaymentP  w-50  mx-3 my-3' />
                    </div>

                    <div className="d-flex bg-dark inBtb">
                        <input type="text" placeholder='Expiry date' onChange={(event)=>{ setExpireDate(event.target.value) }} className='PaymentP w-50 mx-3' />

                        <input type="text" className='PaymentP bg-dark w-50 mx-3 my-2' disabled />

                    </div>
                    
                </div>

                </div>
            </div>

            <div className="row AbcTa justify-content-end mb-5">
                <input type="submit" className='btn btn-warning MakePaBtn' value="Make Payment" />
                {/* <a className='btn btn-warning MakePaBtn' onClick={() => setModalShow(true)}>Make Payment</a> */}
                <MarketModal show={modalShow} onHide={()=> setModalShow(false)} />
            </div>

        </form>

    </>
    )
    }

    export default Shipping