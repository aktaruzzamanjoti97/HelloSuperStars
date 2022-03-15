import React from 'react'
import { Dropdown, DropdownButton,Nav, Tab } from "react-bootstrap";
import StarCover from "../../../../../images/xuc3pamd.png";
import "./FanStar.css";

import FanPost from "./FanPost";
import FanMedia from "./FanMedia";
import FanMember from "./FanMember";

import CreatePostModal from './CreatePostModal';
import ConfirmModalSh from './MessageGroup/ConfirmModalSh';
import ConfirmModalSa from './MessageGroup/ConfirmModalSa';

import Default from './MessageGroup/Default';
import Shrukh from './MessageGroup/Shrukh';
import Salman from './MessageGroup/Salman';


const FanStar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
  const [modalShowSh, setModalShowSh] = React.useState(false);
  const [modalShowSa, setModalShowSa] = React.useState(false);
  const [title, setTitle] = React.useState("Shah Rukh Khan / Salman Khan");
  const [btnCng, setbtnCng] = React.useState("0");

return (
<>

  <div className="mt-3">
    <img src={StarCover} alt="" className="img-fluid StartCover mb-2" />
    <b className="text-light fw-bold TitleFan">
      Salman VS Shah Rukh Fan group
    </b>
    <p className="subTitleFan">
      Created at 12 Feb 2022 | Continue till 12 April 2022
    </p>
  </div>

  <div className="FanNave">
    <div className="row">
      <div className="col-sm-8 mb-3 PositionTabX">

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

              {/* Desktop View */}
              <DropdownButton id="dropdown-basic-button" title={title} className="SelectFan desktopFan" >
              <Dropdown.Item className='w-100' >
                <p onClick={() =>{setTitle("Shah Rukh Khan");setModalShowSh(true);setbtnCng("1")}}  >
                  Shah Rukh Khan
                </p>
                <ConfirmModalSh show={modalShowSh} onHide={() => setModalShowSh(false)} />
              </Dropdown.Item>
              
              <Dropdown.Item >
                <p onClick={() => {setTitle("Salman Khan");setModalShowSa(true); setbtnCng("2") }} >
                  Salman khan
                </p>
                <ConfirmModalSa show={modalShowSa} onHide={() => setModalShowSa(false)} />
              </Dropdown.Item>
            </DropdownButton>

            </Nav.Item>


            {/* Mobile View */}
            <DropdownButton id="dropdown-basic-button" title={title} className="SelectFan mobileFan fw-bold" >
              <Dropdown.Item href="#/action-2">
                <p onClick={() => {setTitle("Shrukh Khan"); }} >
                  Shrukh khan
                </p>
              </Dropdown.Item>
              <Dropdown.Item >
                <p onClick={() => {setTitle("Salman khan");  }} >
                  Salman khan
                </p>
              </Dropdown.Item>
            </DropdownButton>

          </Nav>

          <div className="FanCreatePost d-flex mt-3 px-3 pt-2 pb-2">

            <button className="btn text-light fw-bold CreateSm" disabled>
              Create a post
            </button>
            <button className="btn CreateInputFan" onClick={() => setModalShow(true)}>Click here to create a post</button>
            <CreatePostModal show={modalShow} onHide={() => setModalShow(false) } className="ModalXC" />
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

      {btnCng === "0" ?
        <div className="col-sm-4 MessengerHead mb-2 "><Default/> </div>
      : null}

      {btnCng === "1" ? 
        <div className="col-sm-4 MessengerHead mb-2 "><Shrukh/> </div>
      : null}

      {btnCng === "2" ?
       <div className="col-sm-4 MessengerHead mb-2 "><Salman/> </div>
      : null}
      
    </div>
  </div>
</>
);
};

export default FanStar;