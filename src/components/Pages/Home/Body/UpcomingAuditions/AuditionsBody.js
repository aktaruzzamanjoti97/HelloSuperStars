import React, { Component } from "react";

import LeftSideNavbar from "../../SideNavbar/LeftSidebar/Sidebar";
import RightSideNavbar from "../../SideNavbar/RightSidebar/Sidebar";
import Auditions from "../UpcomingAuditions/AuditionsData"

export default class AuditionsBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSideNavbar/>
              </div>

              <div className="col-sm-6 justify-content-center" >
                <Auditions/>
              </div>

              <div className="col-md-3 justify-content-center" >
                <RightSideNavbar/>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
