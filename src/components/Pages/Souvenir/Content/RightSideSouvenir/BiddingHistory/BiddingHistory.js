import React from "react";
import moment from 'moment';
import './BiddingHistory.css';
import NumberFormat from "react-number-format";

const BiddingHistory = ({AuctionData}) => {


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
                    {AuctionData?.map((myHistory)=>(
                        <>
                    <div className="col-md-4">
                        <li className="my-1">{moment(myHistory.created_at).format('LL')}</li>
                    </div>
                    <div className="col-md-4">
                        <li  className="my-1">{moment(myHistory.created_at).format('h:mm:ss')}</li>
                    </div>
                    <div className="col-md-4">
                        <li className="my-1">
                        {myHistory.amount} BDT
                        </li>
                    </div>
                        </>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default BiddingHistory;