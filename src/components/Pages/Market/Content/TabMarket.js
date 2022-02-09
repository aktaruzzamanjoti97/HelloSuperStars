import React from 'react'

import { Nav, Tab } from 'react-bootstrap';
import AuctionsImg from '../../../../images/Souvenir/Icons/auction.png'
import MarketPlaceTab from './MarketPlaceTab';

import './TabMarket.css'
const TabMarket = () => {
return (
<div>
    <div className="col-md-12  my-3 bg-dark AuctionR">

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="d-flex TabCom m-2 ">
                <div className="TabBtn1 w-100 px-2 mt-3">
                    <Nav.Link eventKey="first" className='btn fw-bold text-dark bg-warning'>
                        {/* <span> <img src={User} className="img-fluid-Tab mx-2" alt="" /></span> */}
                        <span>Marketplace</span>
                    </Nav.Link>
                </div>
                <div className="TabBtn2 w-100  px-2 mt-3">
                    <Nav.Link eventKey="second" className='btn fw-bold text-light bg-success'>
                        <span> <img src={AuctionsImg} className="img-fluid-Tab mx-2" alt="" /></span>
                        <span>Auctions</span>
                    </Nav.Link>
                </div>
            </div>

            <Tab.Content>

                {/* Tab || User Portal */}
                <Tab.Pane eventKey="first">

                    <MarketPlaceTab/>
                    <hr />

                </Tab.Pane>

                {/* Tab || Comments */}
                <Tab.Pane eventKey="second">
                    <p className='text-light'>sgdsfgdfgdfsd</p>
                </Tab.Pane>

            </Tab.Content>

        </Tab.Container>

    </div>
</div>
)
}

export default TabMarket