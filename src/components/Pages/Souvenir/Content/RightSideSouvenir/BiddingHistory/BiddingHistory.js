import React from 'react';
import './BiddingHistory.css';

const BiddingHistory = () => {
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
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Date</li> */}
                        <li className="my-1">21-02-2022</li>
                        <li className="my-1">1-02-2022</li>
                    </div>
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Time</li> */}
                        <li  className="my-1">20:05</li>
                        <li  className="my-1">20-02-2022</li>
                    </div>
                    <div className="col-md-4">
                        {/* <li className="bgHead my-1">Amount</li> */}
                        <li className="my-1">$ 190.00</li>
                        <li className="my-1">$ 190.00</li>
                    </div>
                </div>

            </ul>
        </div>
    );
};

export default BiddingHistory;