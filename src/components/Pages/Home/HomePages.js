import React, { Component } from "react";

import LeftSideNavbar from "../Home/SideNavbar/LeftSidebar/Sidebar";
import RightSideNavbar from "../Home/SideNavbar/RightSidebar/Sidebar";

import Post from "../Home/HomePost/PostData";
export default class HomePages extends Component {
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
                <Post/>
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
