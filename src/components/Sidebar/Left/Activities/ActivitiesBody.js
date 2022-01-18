import React, { Component } from "react";
import Navigation from "../../../Header/Navigation";
import LeftSidebar from "../../LeftSidebar";

export default class ActivitiesBody extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid  custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
                <LeftSidebar/>
              </div>
              
              <div className="col-sm-9 justify-content-center postTab">
                  {/* <Content/> */}
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


