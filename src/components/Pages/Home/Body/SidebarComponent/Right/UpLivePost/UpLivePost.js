import React, { Component } from "react";


import Navigation from "../../../../../../Header/Navigation";
import LeftSidebar from '../../../../../../Sidebar/LeftSidebar'
import RightSidebar from '../../../../../../Sidebar/RightSidebar'
import UpcomingLive from "./UpcomingLive";


export default class UpLivePost extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>

              <div className="col-sm-6 justify-content-center" >
                <UpcomingLive/>
              </div>

              <div className="col-md-3 justify-content-center" >
                <RightSidebar/>
              </div>

            </div>
          </div>
        </div>
        <br/>
      </React.Fragment>
    );
  }
}
