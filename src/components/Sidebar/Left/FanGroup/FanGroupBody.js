
import React, { Component } from "react";
import LeftSidebar from '../../LeftSidebar'
import RightSidebar from '../../RightSidebar'

import Navigation from '../../../Header/Navigation'
import FollowMain from "./FollowMain";

export default class FanGroupBody extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
                <LeftSidebar/>
              </div>
              dfgdfg
              
              {/* <div className="col-sm-6 justify-content-center postTab" >
                  <FollowMain/>
              </div>

              <div className="col-md-3 justify-content-center container-fluid custom-container-left-Right  postRight" >
                <RightSidebar/>
              </div> */}
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
