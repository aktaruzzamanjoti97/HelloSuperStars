import React, { useState, useEffect, useRef } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OwlCarousel from "react-owl-carousel";
import singleFrame from "../../../../../../images/Normal-User/Single-frame.png";
import applePayLogo from "../../../../../../images/Payment-img/Apple_Pay_logo.png";
import bKashLogo from "../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import payoneerLogo from "../../../../../../images/Payment-img/Payoneer-Logo.wine.png";
import payPalLogo from "../../../../../../images/Payment-img/PayPal-Logo.wine.png";
import visaLogo from "../../../../../../images/Payment-img/Visa_Inc._logo.svg.png";
import azhari from "../../../../../../images/starProfile/StarPhotos/1.jpg";
import "../../../../../CSS/Profile/starProfile/starChat.css";
import loading from "../../../../../../images/LiveChat/Loading1.gif";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";

import {
  Link,
  Route,
  useLocation,
  Redirect,
  useHistory,
} from "react-router-dom";

const StarChat = (props) => {
  const [oldData, setOldData] = useState([]);
  const [eventInfo, setstate] = useState({});
  const [liveChatInfo, setLiveChatInfo] = useState({});
  const [starInfo, setStarInfo] = useState({});
  const [formdata, setFormdata] = useState({
    name: "",
    date_b: "",
    phone: "",
    location: "",
    comment: "",
    error_list: [],
  });
  // console.log(formdata);
  const [showCard, setShowCard] = React.useState(false);
  const history = useHistory();
  const location = useLocation();
  const [showdownCard, setShowdownCard] = useState(false);
  const [firstCard, setFirstCard] = useState(true);
  const [formName, setFormName] = useState();
  const [formPhone, setFormPhone] = useState();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setOldData(location.state.data);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .get(`/api/user/sinlgeLiveChat/${location.state.data.id}`)
        .then((res) => {
          if (res.data.status === 200) {
            setLiveChatInfo(res.data.liveChat);
            setStarInfo(res.data.starInfo);
            setStatus(true);
          }
        });
    });
  }, [location]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => {
      return { ...prev, [name]: value };
    });
  };
  function handleClick(e) {
    e.preventDefault();
    setShowCard(true);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formdata.name,
      date_b: formdata.date_b,
      phone: formdata.phone,
      location: formdata.location,
      comment: formdata.comment,
      event_id: oldData.id,
      minute: oldData.minute,
    };

    console.log(data);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`api/user/liveChat/register`, data).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          // setShowCard(true)
          swal("Success", res.data.message, "success");
          history.push("/");
        }
      });
    });
  };

  const [passwordInput, setPassword] = useState('');


  const handlePasswordInput = (e) => {
    e.persist();
    setPassword(e.target.value);
    }

  //form validation
  function userVerify(e) {
    e.preventDefault();

    const passData = {
    password: passwordInput,
    }

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/verify_user`, passData).then((res) => {
        if (res.data.status === 200) {
            setShowdownCard(true);
            setFirstCard(false);
        } else {
          swal("Warning", res.data.message, "warning");
        }
      });
    });

    // if (formdata.name != "" && formdata.phone != "") {
    //   setShowdownCard(true);
    //   setFirstCard(false);
    // } else {
    //   if (formdata.name == "") {
    //     setFormName("Name Field Required !");
    //   }
    //   if (formdata.phone == "") {
    //     setFormPhone("Phone Number Required !");
    //   }
    // }
  }

  return (
    <>
      {firstCard ? (
        <Card style={{ backgroundColor: "#343434" }} sx={{ minWidth: 275 }}>
          <CardContent>
            <div className="row whole-m-p">
              <div className="col-md-3">
                <div className="play-button-container">
                  <img
                    src={azhari}
                    alt=""
                    className="img-fluid star-card-chat-demo-video"
                  />
                  <div className="play-center">
                    <i className="fas fa-play fa-3x"></i>
                  </div>
                </div>
              </div>

              {status ? (
                <div className="col-md-9">
                  <h4 className="starChat-heading">{liveChatInfo.title}</h4>
                  <div className="vb"></div>

                  <div className="mt-3 row">
                    <div className="col-md-6 display-style-starChat">
                      <div className="me-5 starChat-child-style text-white">
                        <h6>Star</h6>
                        <h6>Date</h6>
                        <h6>Time</h6>
                        <h6>Fee</h6>
                      </div>

                      <div
                        style={{ color: "#c2c2c2" }}
                        className="mx-5 starChat-child-style"
                      >
                        <h6>
                          {starInfo.first_name} {starInfo.last_name}
                        </h6>
                        <h6>{moment(liveChatInfo.start_time).format("LL")}</h6>
                        <h6>
                          {moment(liveChatInfo.start_time)
                            .add(liveChatInfo.slot_counter, "minutes")
                            .add(oldData.minute, "minutes")
                            .format("LT")}
                        </h6>
                        <h6>{liveChatInfo.fee * oldData.minute} BDT</h6>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mx-2 starChat-child-style">
                        <h5 className="text-white">Instructions</h5>
                        <p style={{ color: "#c2c2c2" }}>
                          {liveChatInfo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <center>
                  <div
                    className="col-md-9"
                    style={{ width: "50px", marginTop: "-130px" }}
                  >
                    <img src={loading} alt="" style={{ width: "50px" }} />
                  </div>
                </center>
              )}
            </div>

            <div className="whole-m-p">
              <form onSubmit={userVerify}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Name</big>

                      <input
                        type="text"
                        value={localStorage.getItem('auth_name')}
                        className="form-control input-overlay"
                        name="name"
                      />
                      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <p className="" style={{ color: "red" }}>
                      {formName}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Password</big>
                      <input
                        type="text"
                        name="password"
                        onChange={handlePasswordInput}
                        className="form-control input-overlay"
                      />
                      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <p className="" style={{ color: "red" }}>
                      {formPhone}
                    </p>
                  </div>
                </div>

                <button
                  
                  type="submit"
                  className="my-3 btn btn-gold"
                >
                  Next
                </button>
              </form>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {showdownCard ? (
        <Card
          className="my-4"
          style={{ backgroundColor: "#343434" }}
          sx={{ minWidth: 275 }}
        >
          <CardContent>
            <div className="text-center image-middle">
              <img className="singleFrame-style" src={singleFrame} alt="" />
              <h3 className="centered">Payment Method</h3>
            </div>

            <div>
              <OwlCarousel className="owl-theme" loop margin={0} nav>
                <div className="item">
                  <img
                    src={applePayLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={bKashLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={payoneerLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={payPalLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={visaLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
              </OwlCarousel>
            </div>

            <div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Cardholder Name</big>
                      <input
                        type="email"
                        className="form-control input-overlay"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Password</big>
                      <input
                        type="password"
                        className="form-control input-overlay"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Date</big>
                          <input
                            type="email"
                            className="form-control input-overlay"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">CCV</big>
                          <input
                            type="email"
                            className="form-control input-overlay"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button  onClick={formSubmit}  className="my-3 btn btn-gold">Confirm Payment</button> */}
                <button
                  onClick={formSubmit}
                  type="submit"
                  className="my-3 btn btn-gold"
                >
                  Register
                </button>
              </form>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};

export default StarChat;
