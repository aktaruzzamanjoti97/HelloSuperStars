import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import clockSvg from '../../../../../../images/clock-svgrepo-com.svg';
import './RemainingTimeSouvenir.css';

const RemainingTimeSouvenir =({AuctionData}) => {

    const auctionTime = moment(AuctionData.bid_to).format('LL HH:mm:ss')
    //console.log(auctionTime);
    const countDownDate = new Date(auctionTime).getTime();
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

useEffect(()=>{

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDay(days);

        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHour(hours);

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMinute(minutes);


        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setSecond(seconds)

    }, 1000);

    return ()=>clearInterval(interval);

},[])

    return (
        <div className="bg-dark p-4 my-3">
            <h6 className="text-warning fw-bold my-2">Remaining Time</h6>
            <div className="d-flex my-2">
                <div>
                    <img className="img-fluid me-3" width="35px" src={clockSvg} alt="" />
                </div>
                <div className="remaining">
                    <div className="d-flex justify-content-around  text-white">
                        <div className="border border-light p-1">
                            <div className="d-flex justify-content-center fw-bold">
                                <span className="me-2">{day}</span> DAYS
                            </div>

                        </div>
                        <div className="border border-light text-white p-1">
                            <div className="d-flex justify-content-center fw-bold">
                                <span className="me-2">{hour}</span> HRS
                            </div>

                        </div>
                        <div className="border border-light p-1">
                            <div className="d-flex justify-content-center fw-bold">
                                <span className="me-2">{minute}</span> MNT
                            </div>


                        </div>

                        <div className="border border-light p-1">
                            <div className="d-flex justify-content-center fw-bold">
                                <span className="me-2">{second}</span> SEC
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RemainingTimeSouvenir;