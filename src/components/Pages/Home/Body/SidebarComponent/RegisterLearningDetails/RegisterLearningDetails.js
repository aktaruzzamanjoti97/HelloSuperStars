import React, { useEffect } from 'react';
import guitarImage from '../../../../../../images/guitter.jpg';
import BookNowPay from '../../../../Profile/BookNow/BookNowPay';
import RegisterNowPay from './RegisterNowPay/RegisterNowPay';
import './RegisterLearningDetails.css'
import axios from 'axios';
import moment from 'moment'
import { Markup } from 'interweave';

import { Link, useLocation, useHistory } from "react-router-dom";
import { useState } from 'react';
import Navigation from '../../../../../Header/Navigation';

const RegisterLearningDetails = (props) => {
    let base_url = 'http://localhost:8000/'
    const location = useLocation();
    const [post, setPost] = useState({});


    useEffect(() => {
    

        const event_slug = props.match.params.slug;
        console.log(event_slug);
        
      
        axios.get(`/api/learnig-session/${event_slug}`).then((res) => {
          
            if (res.data.status === 200) {
            
                setPost(res.data.learnigSession);
              
            }
          
        });
      
      }, [props.match.params.slug]);




    // console.log('hello',post.star.first_name);
    return (
        <>
            <Navigation />
            <div className="container">
            <div>
                <img src={base_url+post.banner} className="img-fluid w-100 banner-image-larning" alt="" />
            </div>
            <div className="bg-dark mt-3 p-5 row">

                <h5 className="fw-bold text-warning">{post.title}</h5>
                <div className="bottomBorderLearningDetails mb-4"></div>

                <div className="col-md-4 BookNowMN">
                    <table className='taBook'>
                        <tr>
                            <th className='text-light bookTh'>Star</th>
                            {/* <td className='BookNText'>{star.super_star?.first_name}
                {star.super_star?.last_name}</td> */}
                            <td className='BookNText'>{post.star?.first_name}</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Date</th>
                            <td className='BookNText'>{moment(post.date).format('LL')}</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Time</th>
                            <td className='BookNText'>
                                {moment(post.start_time, "HH:mm:ss").format("hh:mm A")} - {moment(post.end_time, "HH:mm:ss").format("hh:mm A")}</td>
                        </tr>
                        <tr>
                            <th className='text-light bookTh'>Fee</th>
                            <td className='BookNText'>{post.fee} BDT</td>
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
                    <Markup content={post.description}/>
                    </p>

                </div>
            </div>
            <div>
                <RegisterNowPay post_id={post.id}/>
            </div>
        </div>
        </>
 
    );
};

export default RegisterLearningDetails;