import React from 'react';
import './SuperstarCard.css';

const SuperstarCard = () => {
    return (
        <div className="superStarCard bg-dark p-4 my-4">
            <h6 className="text-warning fw-bold">Superstar</h6>
            <ul className="listStyleNone">
                <div className="d-flex text-white">
                    <div>
                        <li className="my-1">Name</li>
                        <li  className="my-1">Category</li>
                        <li  className="my-1">Start</li>
                        <li  className="my-1">End</li>
                    </div>
                    <div className="ms-5">
                        <li  className="my-1">CHRISTIANO RONALDO</li>
                        <li  className="my-1">Sports</li>
                        <li  className="my-1">20-02-2022</li>
                        <li  className="my-1">30-02-2022</li>
                    </div>
                </div>

            </ul>
        </div>
    );
};

export default SuperstarCard;