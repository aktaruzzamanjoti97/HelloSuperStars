import moment from 'moment';
import React from 'react';
import './SuperstarCard.css';

const SuperstarCard = ({AuctionData}) => {
    return (
        <div className="superStarCard bg-dark p-4 my-4">
            <h6 className="text-warning fw-bold ms-4">Superstar</h6>
            <ul className="listStyleNone">
                <div className="row text-white">
                    <div className="col-md-3">
                        <li className="my-1">Name</li>
                        <li  className="my-1">Category</li>
                        <li  className="my-1">Start</li>
                        <li  className="my-1">End</li>
                    </div>
                    <div className="col-md-9">
                        <li  className="my-1">{AuctionData.star.first_name} {AuctionData.star.last_name}</li>
                        <li  className="my-1">Sports</li>
                        <li  className="my-1">{moment(AuctionData.bid_from).format('YYYY-MM-DD')}</li>
                        <li  className="my-1">{moment(AuctionData.bid_to).format('YYYY-MM-DD')}</li>
                    </div>
                </div>

            </ul>
        </div>
    );
};

export default SuperstarCard;