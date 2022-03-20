import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './BiddingHistory.css';

const BiddingHistory = ({AuctionData}) => {

const [bidHistory, setBidHistory] = useState([]);
useEffect(()=>{
    axios.get(`/api/user/liveBidding/history/${AuctionData.id}`).then((res)=>{
        if(res.data.status === 200){
            setBidHistory(res.data.bidHistory);
        }
    })
},[]);

    return (
        <div className='bg-dark py-4 pe-5'>
            <h6 className=" ps-4 text-warning fw-bold">My bidding history</h6>
            <ul className='listStyleNone text-white'>
                <div className="row bgHead">
                    <div className="col-md-4">Date</div>
                    <div className="col-md-4">Time</div>
                    <div className="col-md-4">Amount</div>
                </div>
                <div className="row">
                    {bidHistory?.map((myHistory)=>(
                        <>
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Date</li> */}
                        <li className="my-1">{moment(myHistory.created_at).format('YYYY-MM-DD')}</li>
                    </div>
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Time</li> */}
                        <li  className="my-1">{moment(myHistory.created_at).format('h:mm:ss')}</li>
                    </div>
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Amount</li> */}
                        <li className="my-1">$ {myHistory.amount}</li>
                    </div>
                        </>
                    ))}
                </div>

            </ul>
        </div>
    );
};

export default BiddingHistory;