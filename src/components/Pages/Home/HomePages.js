import React from 'react';
import SideNavbar from "./SideNavbar/SideNavbar";
import "../../CSS/SideNavbar.css";
const HomePages = () => {
          return (
                    <>
                              <section id="header" className="d-flex align-items-center">
                                        <div className="container">
                                                  <div className="row">
                                                            <div className="col-10 mx-auto">
                                                                      <div className="row">
                                                                                <div className="col-md-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                                                                          <div className="mt-3">
                                                                                                    <SideNavbar />
                                                                                          </div>
                                                                                </div>

                                                                                <div className="col-lg-7 order-1 order-lg-2 header-img">
                                                                                          
                                                                                </div>
                                                                                <div className="col-lg-3 order-1 order-lg-2 header-img">
                                                                                          
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
          </>
          )
}

export default HomePages;
