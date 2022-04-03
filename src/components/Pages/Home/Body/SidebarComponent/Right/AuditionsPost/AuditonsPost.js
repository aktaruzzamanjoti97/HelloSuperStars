import React, { Component } from "react";
import LeftSidebar from '../../../../../../Sidebar/LeftSidebar'
import RightSidebar from '../../../../../../Sidebar/RightSidebar'
import Navigation from "../../../../../../Header/Navigation";
import UpcomingAuditions from "./UpcomingAuditions";

export default class AuditionsPost extends Component {
  render() {
    return (
      <UpcomingAuditions/>
    );
  }
}
