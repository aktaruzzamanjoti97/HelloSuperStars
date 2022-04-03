import React, { Component } from "react";
import LeftSidebar from '../../LeftSidebar';

import Navigation from '../../../Header/Navigation'
import SettingsHome from "./Content/SettingsHome";
import './Content/Settings.css'

export default class Body extends Component {
  render() {
    return (
      <SettingsHome/>
    );
  }
}
