import React from 'react';
import './Content/FanStar.css'
import Navigation from '../../../Header/Navigation';
import LeftSidebar from '../../LeftSidebar';
import RightSidebar from '../../RightSidebar';
import PromoVideo from '../../../Pages/Home/Body/PromoVideo/PromoVideo';
import FanYoursGroup from './Content/FanYoursGroup';
import FanExploreMore from './Content/FanExploreMore';

const FanGroup = () => {

return (
<React.Fragment>
    <Navigation />
    <div className="homebody ">
        <div className="container-fluid custom-container ">
            <div className="row">

                <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
                    <div className="promoVideoBorder">
                        <PromoVideo />
                    </div>

                    <LeftSidebar />
                </div>

                <div className="col-md-6">
                    <FanYoursGroup/>
                    <FanExploreMore/>
                </div>

                <div className="col-ms-3 justify-content-center container-fluid custom-container-left-Right postRight">
                    <RightSidebar />
                </div>

            </div>
        </div>
    </div>
    <br />
</React.Fragment>
);

}

export default FanGroup