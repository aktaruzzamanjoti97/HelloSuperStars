import React, { Component } from "react";

import Navigation from "../../Header/Navigation";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import RightSidebar from "../../Sidebar/RightSidebar";
// import Contents from "../Market/Content/Content";
import '../../CSS/Navbar/navbar.css'
import TabMarket from "./Content/TabMarket";

export default class MarketPlace extends Component {
    render() {
      return (
        <React.Fragment>
          <TabMarket/>
        </React.Fragment>
      );
    }
  }
