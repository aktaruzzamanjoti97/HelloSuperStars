import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import souvenirImage from '../../../../../images/SouvenirJoti.png';
import Navigation from '../../../../Header/Navigation';
import RightSideSouvenir from '../RightSideSouvenir/RightSideSouvenir';
import './SouvenirSignature.css';


const SouvenirSignature = () => {

 

    return (
        <div>
            <Navigation />
            <div className="container">
                <div>
                    <img src={souvenirImage} className="img-fluid w-100" alt="" />
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="my-4">
                                        <div className="d-flex flex-start">
                                        <h1 className="fw-bolder text-white">CR7 Signature Football</h1>
                                        </div>
                                        
                                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique cum qui ab fugit veniam repellendus officiis, consequuntur esse culpa quibusdam aut tempore, incidunt ea nesciunt soluta itaque voluptas maiores.</p>
                                    </div>
                                    <form className="me-5">
                                        <div className="acquireForm p-3">
                                            <h5 className="text-white fw-bold mb-3">Acquire application</h5>

                                            <div className="acquireText"></div>

                                            <div>
                                                <div className="my-2">
                                                    <label htmlFor=""><big className="text-white">Name</big></label>
                                                    <input className="form-control input-gray" type="text" />
                                                </div>

                                                <div className="my-2">
                                                    <label htmlFor=""><big className="text-white">Name</big></label>
                                                    <input className="form-control input-gray" type="number" />
                                                </div>




                                                <div class="selectOption my-2">
                                                    <label htmlFor=""><big className="text-white">Payment Method</big></label>
                                                    <div class="select-wrapper">
                                                        <select class="select">
                                                            <option value="value1">bKash</option>
                                                            <option value="value1">Visa</option>
                                                            <option value="value2">Banana</option>
                                                            <option value="value3">Cherries</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="my-2">
                                                    <label htmlFor=""><big className="text-white">Card number</big></label>
                                                    <input className="form-control input-gray" type="text" />
                                                </div>




                                                <div className="row my-2">
                                                    <div className="col-md-5">
                                                        <label htmlFor=""><big className="text-white">CCV</big></label>
                                                        <input className="form-control input-gray" type="text" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <label htmlFor=""><big className="text-white">Expiry date</big></label>
                                                        <input className="form-control input-gray" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <Link to='/souvenir-applied'><button className="btn btn-warning"> Apply</button></Link>
                                            <button className="btn btn-secondary mx-3">Dismiss Process</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5">
                            <div>
                               

                                <RightSideSouvenir />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SouvenirSignature;