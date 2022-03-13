import React, { Component } from 'react'
import StarCover from "../../../../../images/xuc3pamd.png";
import Select from "react-select";
import "./FanStar.css";
import { Form, Nav, Row, Tab } from "react-bootstrap";
import FanPost from "./FanPost";
import FanMedia from "./FanMedia";
import FanMember from "./FanMember";
// import PicMa form '../../../../../images/05.jpg';

import PicMa from "../../../../../images/05.jpg";

const FanStar = () => {
const options = [
{ value: "Salman Khan Team", label: "Salman Khan Team" },
{ value: "Shakib All Hasan Team ", label: "Shakib All Hasan Team " },
];
return (
<>
  <div className="mt-3">
    <img src={StarCover} alt="" className="img-fluid StartCover mb-2" />
    <b className="text-light fw-bold TitleFan">
      Salman VS Sharukh Fan group
    </b>
    <p className="subTitleFan">
      Created at 12 Feb 2022 | Continue till 12 April 2022
    </p>
  </div>

  <div className="FanNave">
    <div className="row">
      <div className="col-sm-8 mb-3 ">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="d-flex MobileFabNave justify-content-between">
            <Nav.Item>
              <Nav.Link className="fw-bold NavColorFan" eventKey="first">
                <i class="fa fa-house-user me-1"></i>Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="fw-bold NavColorFan" eventKey="second">
                <i class="fa fa-house-user me-1"></i> Media
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="fw-bold NavColorFan" eventKey="third">
                <i class="fa fa-house-user me-1"></i>Member
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Select options={options} className="SelectFan desktopFan" />
            </Nav.Item>

            <Select options={options} className="SelectFan mobileFan" />

          </Nav>

          <div className="FanCreatePost d-flex mt-3 px-3 pt-2 pb-2">

            <button className="btn text-light fw-bold CreateSm" disabled>
              Create a post
            </button>
            <button className="btn CreateInputFan">Click here to create a post</button>

          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first" className="">
              <FanPost />
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <FanMedia />
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <FanMember />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>

      {/* Chat Box */}

      <div className="col-sm-4 MessengerHead mb-2 ">

        <div className=" MessengerBody py-3 ps-2 text-light">
          <h6 className="fw-bold mx-2">Group inbox</h6>

          <div className="top-right-messenger">

            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span className="messengerUser"> & 20 more</span>
          </div>
        </div>

        <div className="container MessengerText py-2 ps-2 text-light ">

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
          </div>

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
          </div>
          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
          </div>

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
          </div>
          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
          </div>

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
          </div>
          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Sometryrt yrtyrt yrtyrt yrr6u6utyu ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
          </div>

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
          </div>

          <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Sometryrt yrtyrt yrtyrt yrr6u6utyu ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
          </div>

        </div>

        <div className="d-flex MessengerFooter  py-2 ps-2 text-light">

          <div className="IconMessage col-md-3 me-3 d-flex">
            <i className="text-light IconMessageT m-2 fa-solid fa-circle-plus"></i>
            <i className="text-light IconMessageT m-2 fa-solid fa-image"></i>
            <i className="text-light IconMessageT m-2 fa-solid fa-face-smile-beam"></i>
          </div>

          <div className="IconMessage col-md-7 d-flex">
            <input type="text" className="MessageWidth ps-3" placeholder="type text..."/>
          </div>

          <div className="IconMessage col-md-1 d-flex ms-2">
            <i class="m-2 me-3 text-light IconMessageT SendT text-left fa-brands fa-telegram"></i>
          </div>

        </div>

      </div>
    </div>
  </div>
</>
);
};

export default FanStar;