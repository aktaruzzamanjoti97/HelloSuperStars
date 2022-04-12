import React, { useEffect, useState, useContext } from "react";
import { Dropdown, DropdownButton, Nav, Tab } from "react-bootstrap";
import StarCover from "../../../../../images/xuc3pamd.png";
import "./FanStar.css";

import FanPost from "./FanPost";
import FanMedia from "./FanMedia";
import FanMember from "./FanMember";

import CreatePostModal from "./CreatePostModal";
import ConfirmModalSh from "./MessageGroup/ConfirmModalSh";
import ConfirmModalSa from "./MessageGroup/ConfirmModalSa";

import Default from "./MessageGroup/Default";
// import Shrukh from './MessageGroup/Shrukh';
import Salman from "./MessageGroup/Salman";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import swal from "sweetalert";
import Navigation from "../../../../Header/Navigation";
import { socketContext } from "../../../../../App";

const FanStar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [totalNotification, setTotalNotification] = useState([]);
  const history = useHistory();
  const socketData = useContext(socketContext);

  const [title, setTitle] = React.useState("Joined Now");
  const [starId, setStarId] = React.useState("");

  const { slug } = useParams();
  console.log("slug ", slug);

  const [fanDetails, setFanDetails] = useState("");
  const [my_star, setMyStar] = useState("");
  const [another_star, setMyAnotherStar] = useState("");
  const [fanGroupId, setFanDetailsId] = useState("");
  const [fanJoinDetails, setFanJoinDetails] = useState("");

  console.log("fanDetails ", fanDetails);
  console.log("title ", title);
  console.log("starId ", starId);
  console.log("fanGroupId ", fanGroupId);
  console.log("fanJoinDetails ", fanJoinDetails);

  useEffect(() => {
    axios.get(`/api/user/fan/group/${slug}`).then((res) => {
      console.log("fan Group", res.data);
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
        setMyStar(res.data.my_star);
        setMyAnotherStar(res.data.another_star);
        setFanDetailsId(res.data.fanId);
      }
    });
  }, [slug]);

  const selectStar = (starName, starId) => {
    // setTitle(starName)

    // e.preventDefault();
    const formData = new FormData();

    formData.append("fan_group_id", fanGroupId);
    formData.append("star_name", starName);
    formData.append("star_id", starId);

    axios.post(`/api/user/fan/group/store`, formData).then((res) => {
      if (res.data.status === 200) {
        console.log("Done");
        swal("Welcome", res.data.message, "success");
      }
    });
  };
  console.log("fanGroupId is ", fanGroupId);
  useEffect(() => {
    axios.get(`/api/user/fan/group/join/${fanGroupId}`).then((res) => {
      console.log("fanGroupId is ", fanGroupId);
      if (res.status === 200) {
        setFanJoinDetails(res.data.fanJoinDetails);
        setTitle(res.data.fanJoinDetails.star_name);
      }
    });
  }, [fanGroupId]);

  // const fanStatusChange = async () => {

  //   console.log('Data Submit Check One', title);
  //   console.log('Data Submit Check two', starId);

  //   // e.preventDefault();
  //   const formData = new FormData()

  //   formData.append('fan_group_id', fanGroupId)
  //   formData.append('star_name', title)
  //   formData.append('star_id', starId)

  //   // await axios.post(`api/user/fan/group/store`, formData).then(({ res }) => {
  //   //   console.log('res', res);
  //   //   if (res.data.status === 200) {
  //   //     console.log('Protap Done');

  //   //     swal("Welcome", res.data.message, "success");
  //   //     // history.push('/superstar/fan-group-invitation');
  //   //   }
  //   // })

  //   // axios.post(`/api/user/fan/group/store`, formData).then(res => {
  //   //   if (res.data.status === 200) {
  //   //     console.log('Done');
  //   //     // history.push("/activities")
  //   //     // setTitle('')
  //   //     // setUnitprice('')
  //   //     // setItems('')
  //   //     // setKeywords('')

  //   //     swal("Welcome", res.data.message, "success");
  //   //   }
  //   // });
  // }

  return (
    <>
      <Navigation totalNotification={0} />
      <div className="container">
        <div className="mt-3">
          <img
            src={`http://localhost:8000/${fanDetails.banner}`}
            alt=""
            className="img-fluid StartCover mb-2"
          />
          <b className="text-light fw-bold TitleFan">{fanDetails.group_name}</b>
          <p className="subTitleFan">
            Created at {moment(fanDetails.start_date).format("LL")} | Continue
            till {moment(fanDetails.end_date).format("LL")}
          </p>
        </div>

        <div className="FanNave">
          <div className="row">
            <div className="col-sm-8 mb-3 PositionTabX">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="d-flex MobileFabNave justify-content-between"
                >
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
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={title}
                      className={
                        title === "Shah Rukh Khan"
                          ? `ShahrukhFan desktopFan`
                          : title === "Salman Khan"
                            ? `SalmanFan desktopFan`
                            : "SelectFanDefault"
                      }
                    >
                      <Dropdown.Item className="w-100">
                      {/* {(fanDetails.another_star === fanJoinDetails.star_id || fanDetails.my_star === fanJoinDetails.star_id)?'': */}
                        <p
                          onClick={() =>
                            selectStar(
                              my_star.first_name + " " + my_star.last_name,
                              fanDetails.my_star
                            )
                          }
                        >
                          
                          {my_star.first_name} {my_star.last_name}
                        
                        </p>
                        {/* } */}
                        {/* <ConfirmModalSh show={modalShowSh} onHide={() => setModalShowSh(false)} /> */}
                      </Dropdown.Item>

                      <Dropdown.Item>
                      {/* {(fanDetails.my_star === fanJoinDetails.star_id || fanDetails.another_star === fanJoinDetails.star_id)?'': */}
                        <p
                          onClick={() =>
                            selectStar(
                              another_star.first_name +
                              " " +
                              another_star.last_name,
                              fanDetails.another_star
                            )
                          }
                        >
                          {another_star.first_name} {another_star.last_name}
                        </p>
                        {/* } */}
                        {/* <ConfirmModalSa show={modalShowSa} onHide={() => setModalShowSa(false)} /> */}
                      </Dropdown.Item>
                    </DropdownButton>
                  </Nav.Item>

                  {/* Mobile View */}
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={title}
                    className="SelectFan mobileFan fw-bold"
                  >
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ backgroundColor: "green" }}
                    >
                      <p
                        onClick={() => {
                          setTitle(
                            my_star.first_name + " " + my_star.last_name
                          );
                        }}
                      >
                        {my_star.first_name} {my_star.last_name}
                      </p>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <p
                        onClick={() => {
                          setTitle(
                            another_star.first_name +
                            " " +
                            another_star.last_name
                          );
                        }}
                      >
                        {another_star.first_name} {another_star.last_name}
                      </p>
                    </Dropdown.Item>
                  </DropdownButton>
                </Nav>

                {fanJoinDetails?.approveStatus === "1" ? (
                  <div className="FanCreatePost d-flex mt-3 px-3 pt-2 pb-2">
                    <button
                      className="btn text-light fw-bold CreateSm"
                      disabled
                    >
                      Create a post
                    </button>
                    <button
                      className="btn CreateInputFan"
                      onClick={() => setModalShow(true)}
                    >
                      Click here to create a post
                    </button>
                    <CreatePostModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      className="ModalXC"
                    />
                  </div>
                ) : (
                  ""
                )}

                <Tab.Content>
                  <Tab.Pane eventKey="first" className="">
                    {fanJoinDetails?.approveStatus === "1" ? <FanPost /> : ""}
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    {fanJoinDetails?.approveStatus === "1" ? <FanMedia /> : ""}
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    {fanJoinDetails?.approveStatus === "1" ? <FanMember /> : ""}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>

            {/* Chat Box */}
            {fanJoinDetails ? (
              fanJoinDetails.approveStatus === "0" ? (
                <div className="col-sm-4 MessengerHead mb-2 ">
                  <Default />{" "}
                </div>
              ) : (
                <div className="col-sm-4 MessengerHead mb-2 ">
                  <Salman />{" "}
                </div>
              )
            ) : (
              <div className="col-sm-4 MessengerHead mb-2 ">
                <Default />{" "}
              </div>
            )}
            {/* {(fanJoinDetails.approveStatus === '0') ?
            <div className="col-sm-4 MessengerHead mb-2 "><Default /> </div>
            :
            <div className="col-sm-4 MessengerHead mb-2 "><Salman/> </div>
          } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FanStar;
