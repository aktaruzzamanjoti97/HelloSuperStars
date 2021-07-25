import React, { Component } from 'react';
import SideNavbar from "../../Home/SideNavbar/SideNavbar";

import MessiPost from "./StarPostPage/MessiPage";
import MashrafeMortazaPost from "./StarPostPage/MashrafeMortazaPage";
import MizanurRahmanAzhariPost from "./StarPostPage/MizanurRahmanAzhariPage";

import MessiLiveStatus from '../LiveStatus/StarLivePage/MessiLiveStatus';
import MashrafeMortazaLiveStatus from '../LiveStatus/StarLivePage/MessiLiveStatus';
import MizanurRahmanAzhariLiveStatus from '../LiveStatus/StarLivePage/MessiLiveStatus';



export default class HomePages extends Component {
          render() {
                    return (
                              <React.Fragment>
                              <div className="container">
                                        <div className="row">
                                                  <div className="col-sm-3 justify-content-center" style={{ background:'#faf5f5'}}>
                                                            <SideNavbar />
                                                  </div>
                                                  <div className="col-sm-6 justify-content-center" >
                                                            <MessiPost />
                                                            <MashrafeMortazaPost />
                                                            <MizanurRahmanAzhariPost />
                                                  </div>
                                                  <div className="col-sm-3 justify-content-center" style={{ background:'#faf5f5'}}>
                                                            <MessiLiveStatus />
                                                            <MashrafeMortazaLiveStatus />
                                                            <MizanurRahmanAzhariLiveStatus />
                                                  </div>
                                        </div>
                              </div>
                    </React.Fragment>
                    )
          }
}
