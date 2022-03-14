import React from "react";
import { Nav, Tab } from "react-bootstrap";
import StarSla from "../../../../../images/salman.jpg";
const FanMember = () => {
  return (
    <>
      <div className="MediaBG mt-3">
        <div className="row ms-1 me-1">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="d-flex mx-2 mt-3">
              <Nav.Item>
                <Nav.Link eventKey="first" className="me-3 NavMember">
                  Members (230){" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="me-3 NavMember">
                  {" "}
                  Admins (2)
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>

               {/*______________________ Member ___________________*/}
              <Tab.Pane eventKey="first">
                <div className="row justify-content-between mx-2 mt-3 mb-3">
                  <div className="col-md-6 px-2 MembersListFan">
                    <button className="btn w-100 ">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Salman Khan panel - 130
                    </button>
                  </div>
                  <div className="col-md-6 px-2 MembersListFanAdmin">
                    <button className="btn w-100 ">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Shahrukh Khan panel - 132
                    </button>
                  </div>
                </div>

                {/*______________________ Admin List ___________________*/}

                <div className="row justify-content-between mx-2 mt-3  FanMemberScroll">
                  <div className="col-md-6 px-2 MembersListFanUser mb-3">

                    {/*____________ Salman Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>

                    
                  </div>

                  <div className="col-md-6  px-2 MembersListFanUser mb-3">

                    {/*____________ Shahrukh Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>


                  </div>
                  
                </div>
              </Tab.Pane>




              {/*______________________ Admin ___________________*/}

              <Tab.Pane eventKey="second">
                <div className="row justify-content-between mx-2 mt-3 mb-3">
                  <div className="col-md-6 px-2 MembersListFan">
                    <button className="btn w-100 MembersListFan ">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Salman Khan panel - 1
                    </button>
                  </div>
                  <div className="col-md-6 px-2 MembersListFanAdmin">
                    <button className="btn w-100 ">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Shahrukh Khan panel - 1
                    </button>
                  </div>
                </div>

                {/*______________________ Admin List ___________________*/}

                <div className="row justify-content-between mx-2 mt-3  FanMemberScroll">
                  <div className="col-md-6 px-2 MembersListFanUser mb-3">

                    {/*____________ Salman Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    
                  </div>

                  <div className="col-md-6  px-2 MembersListFanUser mb-3">

                    {/*____________ Shahrukh Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>

                  </div>
                  
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default FanMember;
