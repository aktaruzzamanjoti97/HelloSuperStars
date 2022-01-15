import React from 'react'
import { Link } from 'react-router-dom'

import '../CSS/Sidebar/Right/Right.css'

import './Right/LiveNow/LiveContent.css'

import Pro from "../../images/Shakib/14.jpg";
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
                    <OwlCarousel className=' col-md-2 Owl-Side-R' items={2} loop margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right">🔴</div>
                             <div class="bottom-left">Bottom Left</div>

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
                    <OwlCarousel className=' col-md-2 Owl-Side-R' items={2} loop margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />

                            <div class="top-right">🔴</div>

                            <div class="bottom-left">Bottom Left</div>

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
                    <OwlCarousel className=' col-md-2 Owl-Side-R' items={2} loop margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left">Bottom Left</div>
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
                    <OwlCarousel className=' col-md-2 Owl-Side-R' items={2} loop margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left">Bottom Left</div>
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
                    <OwlCarousel className=' col-md-2 Owl-Side-R' items={2} loop margin={0} dots={false} nav>
                        <div className='container-xc-ds item item-x '>
                            <img src={Pro} className="SidebarCarouselImg" alt="profilePicture" />
                             <div class="bottom-left">Bottom Left</div>
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