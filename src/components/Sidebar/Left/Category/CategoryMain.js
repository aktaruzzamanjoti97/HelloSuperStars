import React, { Component } from "react";
import Navigation from "../../../Header/Navigation";
import LeftSidebar from "../../LeftSidebar";
import RightSidebar from "../../RightSidebar";
import Category from "./Content/Category";


export default class CategoryMain extends Component {
  render() {
    return (
      <>
        <Category/>
      </>
    );
  }
}

