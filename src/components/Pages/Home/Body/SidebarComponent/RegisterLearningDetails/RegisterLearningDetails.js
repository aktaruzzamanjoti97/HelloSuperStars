import React from 'react';
import guitarImage from '../../../../../../images/guitter.jpg';
import BookNowPay from '../../../../Profile/BookNow/BookNowPay';
import RegisterNowPay from './RegisterNowPay/RegisterNowPay';
import './RegisterLearningDetails.css'

const RegisterLearningDetails = () => {
    return (
        <div className="container">
            <div>
                <img src={guitarImage} className="img-fluid w-100" alt="" />
            </div>
            <div className="bg-dark mt-3 p-5 row">

                <h5 className="fw-bold text-warning">Learning Session Details</h5>
                <div className="bottomBorderLearningDetails mb-4"></div>

                <div className="col-md-4 BookNowMN">
                    <table className='taBook'>
                        <tr>
                            <th className='text-light bookTh'>Star</th>
                            {/* <td className='BookNText'>{star.super_star?.first_name}
                {star.super_star?.last_name}</td> */}
                            <td className='BookNText'>Pritom Hasan</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Date</th>
                            <td className='BookNText'>20 / 02/ 22</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Time</th>
                            <td className='BookNText'>2.00 PM
                                to 6.00 PM</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Fee</th>
                            <td className='BookNText'>499 BDT</td>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum repellat maxime voluptatibus sunt tenetur tempora laborum rerum ab totam voluptate repellendus ducimus iusto vel assumenda soluta, velit, aliquid ipsa!
                    </p>

                </div>
            </div>
            <div>
                <RegisterNowPay />
            </div>
        </div>
    );
};

export default RegisterLearningDetails;