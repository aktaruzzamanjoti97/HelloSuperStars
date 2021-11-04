import React from 'react'
import LiveData from './LiveNow/LiveData';
import LearnData from './LearningSessions/LearnData';
import UpLiveData from './UpcomingLive/UpLiveData';
import AuditionsData from './UpcomingAuditions/AuditionsData';
import {Link} from 'react-router-dom'
export const Sidebar = () => {
    return (
        <>
            <div className="accordion right-col-box-home-r mt-3">

                <div className="live-text-sln">Live now</div> 
                
                <div className="Live-S-Nav d-flex" id="headingTwo">
                    <LiveData/>
                   <Link to='/live-now'>
                        <button className="dabutton Live-RS-btn active">
                            <small className="see-all-live">See All</small>
                            <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                        </button>
                    </Link>

                </div>   
                
            </div>

            <div className="accordion right-col-box-home-r mt-3">

                <div className="live-text-sln">Learning Sessions</div> 
                
                <div className="Live-S-Nav d-flex" id="headingTwo">
                    <LearnData/>
                   <Link to='/learning-sessions'>
                        <button className="dabutton Live-RS-btn active ">
                            <small className="see-all-live">See All</small>
                            <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                        </button>
                    </Link>

                </div>   
                
            </div>

            <div className="accordion right-col-box-home-r mt-3">

                <div className="live-text-sln">Upcoming Live</div> 
                    
                <div className="Live-S-Nav d-flex" id="headingTwo">
                    
                    <UpLiveData/>

                    <Link to='/upcoming-live'>
                        <button className="dabutton Live-RS-btn active">
                            <small className="see-all-live">See All</small>
                            <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                        </button>
                    </Link>

                </div>   
                
            </div>

            <div className="accordion right-col-box-home-r mt-3">

                <div className="live-text-sln">Upcoming Auditions</div> 

                <div className="Live-S-Nav d-flex" id="headingTwo">

                    <AuditionsData/>

                   <Link to='/upcoming-auditions'>
                        <button className="dabutton Live-RS-btn active">
                            <small className="see-all-live">See All</small>
                            <i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i>
                        </button>
                    </Link>

                </div>   
                
            </div>

        </>
    )
}
export default Sidebar;