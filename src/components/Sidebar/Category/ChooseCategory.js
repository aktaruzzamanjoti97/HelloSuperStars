import React, { Component } from "react";
import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'
import Content from "./Content";


export default class ChooseCategory extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>
              
              <div className="col-sm-6 justify-content-center" >
                  <Content/>
              </div>

              <div className="col-md-3 justify-content-center" >
                <RightSidebar/>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
