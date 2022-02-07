import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import '../CSS/Sidebar/Right/Right.css'

import Learn from './Right/LearningSessions/Learn'
import UpLive from './Right/UpcomingLive/UpLive'
import UpAuditions from './Right/UpcomingAuditions/UpAudions'
import './Right/LiveNow/LiveContent.css'

import Pro from "../../images/Shakib/14.jpg";
import srabanti from "../../images/sar.jpg";
import momtaj from "../../images/momtaz.png";
import srk from "../../images/shahruk-khan.jpg";
import ayman from "../../images/Ayman_Sadiq.jpg";
import mashrafi from "../../images/MashrafeMortaza_smile.jpeg";
import ms from "../../images/ms.jpg";
import messi from "../../images/messi.jpg";

import MeetupEvents from './Right/MeetupEvents/MeetupEvents'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export const RightSidebar = () => {

return (
<>
    <div className="LinkBtn">

        {/* Live now */}
        <div className=' xm-mnh-s mt-3'>
            <div className="live-text-sln">Live now</div>

            <div className="row ">

                <div className="col-md-10">
                    <OwlCarousel className='col-md-2' items={2} loop autoplay autoplayTimeout={3000} margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right-c">🔴</div>
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>

                        <div className='container-xc-ds item item-x '>
                            <img src={messi} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right-c">🔴</div>
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>

                        
                    </OwlCarousel>

                </div>

                <Link to='/live-now' className='col-md-2  item-xx-l mt-3 '>
                <button className="btn bg-dark">
                    <small className="text-light">See All</small>
                    <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button></Link>

            </div>

        </div>

        {/* Live now */}
        <div className=' xm-mnh-s mt-3'>
            <div className="live-text-sln">Learning Sessions</div>

            <div className="row ">

                <div className="col-md-10">
                <OwlCarousel className='col-md-2' items={2} loop autoplay autoplayTimeout={3500} margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={momtaj} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right-c">🔴</div>
                             <div class="bottom-left-c">Bottom Left</div>

                        </div>

                        <div className='container-xc-ds item item-x '>
                            <img src={srk} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right-c">🔴</div>
                             <div class="bottom-left-c">Bottom Left</div>

                        </div>
                    </OwlCarousel>

                </div>

                <Link to='/learning-sessions' className='col-md-2  item-xx-l mt-3 '>
                <button className="btn bg-dark">
                    <small className="text-light">See All</small>
                    <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button></Link>

            </div>

        </div>

        {/*Upcoming Live */}
        <div className=' xm-mnh-s mt-3'>
            <div className="live-text-sln">Upcoming Live</div>

            <div className="row ">

                <div className="col-md-10">
                <OwlCarousel className='col-md-2' items={2} loop autoplay autoplayTimeout={4000} margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={srabanti} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>

                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>
                    </OwlCarousel>

                </div>

                <Link to='/upcoming-live' className='col-md-2  item-xx-l mt-3 '>
                <button className="btn bg-dark">
                    <small className="text-light">See All</small>
                    <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button></Link>

            </div>

        </div>

        {/*Upcoming Auditions */}
        <div className=' xm-mnh-s mt-3'>
            <div className="live-text-sln">Upcoming Auditions</div>

            <div className="row ">

                <div className="col-md-10">
                <OwlCarousel className='col-md-2' items={2} loop autoplay autoplayTimeout={2000} margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={ayman} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>

                        <div className='container-xc-ds item item-x '>
                            <img src={srabanti} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>
                    </OwlCarousel>

                </div>

                <Link to='/upcoming-auditions' className='col-md-2   item-xx-l mt-3 '>

                <button className="btn bg-dark">
                    <small className="text-light">See All</small>
                    <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button></Link>

            </div>

        </div>

        {/*Meetup Events */}
        <div className=' xm-mnh-s mt-3'>
            <div className="live-text-sln">Meetup Events</div>

            <div className="row ">

                <div className="col-md-10">
                <OwlCarousel className='col-md-2' items={2} loop autoplay autoplayTimeout={1500} margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={mashrafi} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>

                        <div className='container-xc-ds item item-x '>
                            <img src={ms} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left-c">Bottom Left</div>
                        </div>
                    </OwlCarousel>

                </div>

                <Link to='/meetup-events' className='col-md-2  item-xx-l mt-3 '>
                <button className="btn bg-dark">
                    <small className="text-light">See All</small>
                    <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button></Link>

            </div>

        </div>

    </div>

</>
)
}
export default RightSidebar;