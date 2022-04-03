import React, { Component } from "react";
import Navigation from "../../../Header/Navigation";
import LeftSidebar from "../../LeftSidebar";
import RightSidebar from "../../RightSidebar";
import FollowingMap from "./Content/FollowingMap";




export default class FollowMain extends Component {
  render() {
    return (
      <>
        <FollowingMap/>
      </>
    );
  }
}


