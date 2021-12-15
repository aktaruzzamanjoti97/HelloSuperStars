import React from "react";

import "../../../../CSS/Profile/starProfile/starPost.css";
// import profilePhoto from "../../../../../images/Profile/azhari-profile.jpg";
import ReactPlayer from "react-player";
import CardComponent from "./StarCardComponent/CardComponent";
import WazContent from "../../../../../images/Shakib/3.jpg";
// import Children from "../../../../../images/starProfile/starPostLeftContent/children.jpg";
// import Jainamaj from "../../../../../images/starProfile/starPostLeftContent/jainamaz.jpg";
// import Topi from "../../../../../images/starProfile/starPostLeftContent/Cap.jpg";
// import Habibi from "../../../../../images/starProfile/starPostLeftContent/Habibi.jpg";
// import Vector1 from "../../../../../images/starProfile/starPostLeftContent/Card3/1.jpg";
// import Vector2 from "../../../../../images/starProfile/starPostLeftContent/Card3/2.jpg";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";

export default function StarPost() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="cards-start">
            <div className="card-scroll">
              <CardComponent
                name="Shakib Al Hasan"
                time="5.31 pm"
                date="10th December"
                msg="“I Never Looked Back” I said, after being the best all-rounder in the world in ODIs. I talked about my success so far in the Cricket World Cup 2019: where it's all gone right!"
                content={
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=8wb3hiF20bQ"
                    playing={false}
                    volume={1}
                    width="95%"
                    height="320px"
                    style={{ margin: "0 auto" }}
                    onReady={() => console.log("ready now")}
                  />
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />
              <CardComponent
                name="Shakib Al Hasan"
                time="5.31 pm"
                date="2nd july"
                msg="Playing for self is not mandatory but for your own country is absolutely essential."
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <img
                        src={WazContent}
                        alt=""
                        className="img-fluid star-post-img"
                      />
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />

              <CardComponent
                name="Shakib Al Hasan"
                time="5.31 pm"
                date="2nd july"
                msg="All are right"
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <small className="container mt-2">
                        The biggest fight for the people of a nation is the fight for independence. Salute to the brave army and people of Bangladesh. Each of the freedom fighter had sleepless nights trying to drive out the intruders from the nation.
                        <br />
                        <br />
                        <br />
                        On this day, we showcase our respect for them and give them tribute for their bravery. Happy Victory Day of Bangladesh
                      </small>
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />

              <CardComponent
                
                name="Shakib Al Hasan"
                time="5.31 pm"
                date="2nd july"
                msg="ICC coincided"
                content={
                  <div className="d-flex justify-content-center align-items-center text-light">
                    {
                      <small className="container mt-2">
                        The 33-year-old, whose two-year ban from the ICC coincided with the suspension from international cricket, followed teammate Mushfiqur Rahim, who auctioned the bat in 2013 after winning the first double ODI in Bangladesh has been restored.
                        <br />
                        <br />
                        <br />
                        Four times the base amount before the end of the auction on a Facebook page on Wednesday night. The funds raised from Shakib's bat will be donated to his foundation to fight the epidemic.
                      </small>
                    }
                  </div>
                }
                love="240"
                share="16 Share"
                comment="105 Comments"
              />
            </div>
          </div>
        </div>

        {/* left side bar start */}

        <div className="col-md-4">
          <StarProfileRightContent />
          {/* <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Audition Announcement</h6>

              <div className="container star-content">
                <img
                  src={Children}
                  class="card-img-top img-fluid star-left-photo"
                  alt="..."
                />
                <div className="other-content">
                  <h6 className="text-bold">Quran Recetiong Audition</h6>
                  <small>Form july 22 to july 25</small>
                </div>
              </div>

              <div className="text-center ">
                <button className="w-100 enroll-btn mt-3">Enroll now</button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Souvenir</h6>

              <div className="container">
                <OwlCarousel className="owl-theme" loop margin={5} nav>
                  <div class="item">
                    <img
                      src={Jainamaj}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Topi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Habibi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                </OwlCarousel>
              </div>

              <div className="text-center">
                <button className="w-100 enroll-btn">
                  Browse Mizanur Rahman Souvenir
                </button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Requested for</h6>

              <div className=" d-flex justify-content-around">
                <img
                  src={Vector1}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
                <img
                  src={Vector2}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
              </div>
            </div>

            <div className="container mb-2">
              <div className="row">
                <div className="col-6 ">
                  <button className="w-100 star-last-btn p-1">
                    Greeting/Birthday/wish
                  </button>
                </div>
                <div className="col-6">
                  <button className="w-100 star-last-btn p-1">Live Chat</button>
                </div>
              </div>
            </div>
          </div> */}



        </div>

        {/* left sidebar end */}
      </div>
    </div>
  );
}
