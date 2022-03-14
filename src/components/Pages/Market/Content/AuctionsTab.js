import React, { useEffect, useState } from 'react'
import Pds from '../../../../images/Ayman_Sadiq.jpg'
import Pro from "../../../../images/Shakib/14.jpg";

import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';


const AuctionsTab = ({user}) => {
const baseUrl = "http://localhost:8000/";

return (
<>

    <div className="card m-3 AuctionsA ">
        <div className=" row TabMar">
            <div className="col-md-6">
            <OwlCarousel items={1} loop autoplay autoplayTimeout={3000} margin={0} dots={false} >
                    <img src={`http://localhost:8000/${user.product_image}`} alt="" className='img-fluid AuctionsImg ' />
                    {/* <img src={Pds} alt="" className='img-fluid AuctionsImg ' />
                    <img src={Pro} alt="" className='img-fluid AuctionsImg ' /> */}
                </OwlCarousel>
            </div>
            <div className="col-md-6 containerAuc ">

                <img src={user.black} alt="" className='img-fluid AuctionsImg AuctionsImgBl ' />

                <h5 className='JerseyAucHe text-light fw-bold'>{user.title}  </h5>
                <p className='text-light JerseyAucHeP'>{user.desc} </p>

                <span className="text-center JerseyAucDol">
                    <small className="text-light "> $ </small> &nbsp;
                    <span className='DollarPrice fw-bold'>{user.base_price}</span>
                </span>

                <div className="d-flex JerseyAucPro w-75">

                    <img src={`http://localhost:8000/${user.star.image}`} className="AuctionProImg img-fluid" alt="star-profile" />
                    
                    <span className="mx-2 mt-1 SpanAu">

                        <small className="proTextSm fw-bold">
                            {user.type}
                        </small>
                        <div className="proTextAc">
                            {user.star.first_name}
                            {user.star.last_name}
                        </div>
                    </span>
                    <span className='BestPrice  '> Best Price</span>

                </div>

                <button className='btn bg-warning fw-bold w-75 JerseyAucBuy'> Participate</button>

            </div>
        </div>
    </div>
</>
)
}

export default AuctionsTab