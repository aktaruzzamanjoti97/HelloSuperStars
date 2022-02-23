import React from 'react'

import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AuctionsImg from '../../../../images/Souvenir/Icons/auction.png'
import Chart from '../../../../images/shopping-cart-icon.png'

import './TabMarket.css'
import MarketMap from './MarketMap';
import AuctionMap from './AuctionMap';
const TabMarket = () => {
return (
<div>
    <div className="col-md-12  my-3 bg-dark AuctionR">

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="d-flex TabCom m-2 ">
                <Nav variant="pills" className="flex-column">

                    <div className="d-flex TabCom m-2 ">
                        <div className="TabBtn1 w-100  mt-3">
                            <Nav.Link eventKey="first" className='btn fw-bold NavC '>
                                <span> <img src={Chart} className="img-fluid-Tab mx-2" alt="" /></span>
                                <span>Marketplace</span>
                            </Nav.Link>
                        </div>
                        <div className="TabBtn2 w-100  px-2 mt-3">
                            <Nav.Link eventKey="second" className='btn fw-bold NavC '>
                                <span> <img src={AuctionsImg} className="img-fluid-Tab mx-2" alt="" /></span>
                                <span>Auctions</span>
                            </Nav.Link>
                        </div>
                    </div>
                </Nav>
            </div>
            

            <Tab.Content>

                {/* Tab || User Portal */}
                <Tab.Pane eventKey="first">

                    <MarketMap />
                    <hr />

                </Tab.Pane>

                {/* Tab || Comments */}
                <Tab.Pane eventKey="second">
                    <AuctionMap />
                    <hr />
                </Tab.Pane>

            </Tab.Content>

        </Tab.Container>

    </div>
</div>
)
}

export default TabMarket