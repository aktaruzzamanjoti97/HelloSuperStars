import React from 'react'
import { Lives } from '../../../DummyData';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import LiveSection from './LiveSction';
import { Nav, Tab } from 'react-bootstrap';


const LiveNowMenu = () => {
console.log(Lives);

return (
<>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

        <Nav variant="pills" className="mt-3 ">

                <tr>
                    <td>
                        <Nav.Item className='LBtn'>
                            <Nav.Link eventKey="first">Live Now</Nav.Link>
                        </Nav.Item>
                    </td>
                    <td>
                        <Nav.Item className='LBtn'>
                            <Nav.Link eventKey="second">Learning Session</Nav.Link>
                        </Nav.Item>
                    </td>
                    <td>
                        <Nav.Item className='LBtn'>
                            <Nav.Link eventKey="third">Live Chat</Nav.Link>
                        </Nav.Item>
                    </td>
                    <td>
                        <Nav.Item className='LBtn'>
                            <Nav.Link eventKey="four">Upcoming Audition</Nav.Link>
                        </Nav.Item>
                    </td>
                    <td>
                        <Nav.Item className='LBtn'>
                            <Nav.Link eventKey="five">Meetup Evenet</Nav.Link>
                        </Nav.Item>
                    </td>
                </tr>
                

        </Nav>

        <Tab.Content>
            <Tab.Pane eventKey="first">
                <div className="mt-3 LiveMoBG">
                    <div className="d-flex MobileMain justify-content-between mx-2">
                        <div className="text-light LeftTeI">Live Now</div>
                        <div className="text-light LeftTeP btn">Check More</div>
                    </div>

                    <div className="">
                        <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                            {Lives.map((l) => (
                            <LiveSection key={l.id} Live={l} name='check' />
                            ))}

                        </OwlCarousel>

                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <div className="mt-3 LearnMoBG">
                    <div className="d-flex MobileMain justify-content-between mx-2">
                        <div className="text-light LeftTeI">Learning Session</div>
                        <div className="text-light LeftTeP btn">Check More</div>
                    </div>

                    <div className="">
                        <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                            {Lives.map((l) => (
                            <LiveSection key={l.id} Live={l} name='check' />
                            ))}

                        </OwlCarousel>

                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <div className="mt-3 ChatMoBG">
                    <div className="d-flex MobileMain justify-content-between mx-2">
                        <div className="text-light LeftTeI">Learning Session</div>
                        <div className="text-light LeftTeP btn">Check More</div>
                    </div>

                    <div className="">
                        <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                            {Lives.map((l) => (
                            <LiveSection key={l.id} Live={l} name='check' />
                            ))}

                        </OwlCarousel>

                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
                <div className="mt-3 AuditionMoBG">
                    <div className="d-flex MobileMain justify-content-between mx-2">
                        <div className="text-light LeftTeI">Learning Session</div>
                        <div className="text-light LeftTeP btn">Check More</div>
                    </div>

                    <div className="">
                        <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                            {Lives.map((l) => (
                            <LiveSection key={l.id} Live={l} name='check' />
                            ))}

                        </OwlCarousel>

                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
                <div className="mt-3 MeetMoBG">
                    <div className="d-flex MobileMain justify-content-between mx-2">
                        <div className="text-light LeftTeI">Learning Session</div>
                        <div className="text-light LeftTeP btn">Check More</div>
                    </div>

                    <div className="">
                        <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                            {Lives.map((l) => (
                            <LiveSection key={l.id} Live={l} name='check' />
                            ))}

                        </OwlCarousel>

                    </div>
                </div>
            </Tab.Pane>
        </Tab.Content>

    </Tab.Container>

</>
)
}

export default LiveNowMenu

