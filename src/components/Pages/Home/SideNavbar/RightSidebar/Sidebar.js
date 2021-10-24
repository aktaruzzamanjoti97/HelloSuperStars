import React from 'react'
import ChatImage from "../../../../../images/navbar/account.jpg";
export const Sidebar = () => {
    return (
        <>
            <div className="accordion right-col-box-home-r mt-3">
                <div className="live-text-sln">Live now</div> 

                <div className=" Live-S-Nav d-flex" id="headingTwo">

                   <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-l">
                            <p>Shakib All Hasan </p>
                        </div>
                    <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-r">
                        <p >Shahaukh Khan </p>
                        </div>
                   <button className="Live-RS-btn"><small className="see-all-live">See All</small><i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i></button>
                </div>
            </div>

            <div className="right-col-box-home-r mt-3">
                <div className="live-text-sln">Learning sessions</div> 

                <div className="Live-S-Nav d-flex" id="headingTwo">

                   <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-l">
                            <p>Shakib All Hasan </p>
                        </div>
                    <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-r">
                        <p >Shahaukh Khan </p>
                        </div>
                   <button className="Live-RS-btn"><small className="see-all-live">See All</small><i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i></button>
                </div>
            </div>

            <div className="right-col-box-home-r mt-3">
                <div className="live-text-sln">Upcoming live</div> 
                <div className="Live-S-Nav d-flex" id="headingTwo">
                   <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-l">
                            <p>Shakib All Hasan </p>
                        </div>
                    <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-r">
                        <p >Shahaukh Khan </p>
                        </div>
                   <button className="Live-RS-btn"><small className="see-all-live">See All</small><i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i></button>
                </div>
            </div>

            <div className="right-col-box-home-r mt-3">
                <div className="live-text-sln">Upcoming auditions</div> 
                <div className="Live-S-Nav d-flex" id="headingTwo">
                   <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-l">
                            <p>Shakib All Hasan </p>
                        </div>
                    <img src={ChatImage} alt="" className="Live-RS-img"/>
                        <div className="live-text-block-r">
                        <p >Shahaukh Khan </p>
                        </div>
                   <button className="Live-RS-btn"><small className="see-all-live">See All</small><i className="fas fa-arrow-alt-circle-down see-all-live-ico "></i></button>
                </div>
            </div>

        </>
    )
}
export default Sidebar;