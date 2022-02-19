import React from 'react';
import LeftSidebar from '../../../../../Sidebar/LeftSidebar';
import RightSidebar from '../../../../../Sidebar/RightSidebar';
import Post from '../../Post/Post';
import PromoVideo from '../../PromoVideo/PromoVideo';

const SportCategory = () => {
    return (
        <>
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

              <div className="col-sm-6 justify-content-center postTab ">
                {/* <CategorySelector /> */}
                <Post />
              </div>

              <div className="col-md-3 justify-content-center container-fluid custom-container-left-Right postRight">
                <RightSidebar />
              </div>

            </div>
          </div>
        </div>
        <br />
      </>
    );
};

export default SportCategory;