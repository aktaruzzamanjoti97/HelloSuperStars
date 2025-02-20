import React, { useState, useEffect, useRef, useContext } from "react";
import "../../CSS/Profile/profile.css";
import LeftCard from "./profile-components/LeftCard";
import RightSideCard from "./profile-components/RightSideCard";
import Azhari from "../../../images/Profile/Azhari.jpg";
import Shakib from "../../../images/Profile/Shakib.jpg";
import Ayman from "../../../images/Profile/ayman.jpg";
import AzhariProfile from "../../../images/Profile/azhari-profile.jpg";
import ShakibProfile from "../../../images/Profile/Shakib-profile.jpg";
import AymanProfile from "../../../images/Profile/ayman-profile.jpg";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import Navigation from "../../Header/Navigation";
import raihanProfileImage from "../../../images/raihanProfile.jpg";
import sakibal from "../../../images/Profile/shakib-message.jpg";
import ReactPlayer from "react-player";
import { socketContext } from "../../../App";
import LeftCardPhotos from "./profile-components/LaftCardPhotos";
import LeftCardVideos from "./profile-components/LaftCardVideos";
import moment from "moment";

const Profile = () => {
  const socketData = useContext(socketContext);
  const [messagenger, setMessenger] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [profilePhoto, setProfilePtoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [userActivites, setUserActivites] = useState([]);

  function handleClick() {
    setMessenger(!messagenger);
  }

  const logoutSubmit = (e) => {
    e.preventDefault();

    socketData.emit("logout", localStorage.getItem("auth_id"));

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("auth_id");
        swal("Success", res.data.message, "success");
        history.push("/login");
      } else {
        swal("Success", res.data.message, "success");
        history.push("/");
      }
    });
  };

  useEffect(() => {
    axios.get(`/api/user_info`).then((res) => {
      if (res.status === 200) {
        setUser(res.data.users);
        setProfileImage("http://localhost:8000/" + res.data.users.image);
        setCoverPhoto("http://localhost:8000/" + res.data.users.cover_photo);
      }

      console.log("user info", res.data.users);
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/user/activitiesData`).then((res) => {
      if (res.status === 200) {
        console.log("activities data", res.data.userActivites);
        setUserActivites(res.data.userActivites);
       
      }
     
    });
  }, []);

  const fileRef = useRef();
  const filePro = useRef();

  const handleCoverChange = (e) => {
    // const [file] = e.target.files;
    // console.log(file);
    setCoverImage(e.target.files[0]);
    setCoverPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfileChange = (e) => {
    // const [file] = e.target.files;
    // console.log(file);
    setProfilePtoto(e.target.files[0]);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const coverSave = () => {
    const fData = new FormData();

    fData.append("cover_photo", coverImage);
    console.log("coverPhoto", coverImage);

    axios.post(`/api/user/coverUpdate/${user.id}`, fData).then((res) => {
      if (res.data.status == 200) {
        setCoverImage("")
      } else {
        console.log("something wrong!");
      }
    });
  };
  const profileSave = () => {
    const fData = new FormData();

    fData.append("image", profilePhoto);

    axios.post(`/api/user/profileUpdate/${user.id}`, fData).then((res) => {
      if (res.data.status == 200) {
        setProfilePtoto("")
      } else {
        console.log("something wrong!");
      }
    });
  };

  return (
    <>
      <Navigation />
      <div className="full-container py-3 ">
        {/* cover photo work start */}
        <div className="container mb-2">
          <div className="profile-img-cover ">
            <div className="profile-container">
              <img
                src={coverPhoto}
                alt="No image"
                className="img-fluid profile-cover"
              />
              <div>
                {coverImage ? (
                  <button className="bottomright" style={{ marginRight: 110 }} onClick={coverSave}>
                    <i className="far fa-save mx-1"></i>
                    Save
                  </button>
                ) : null}
              </div>
              <div>
                <button
                  className="bottomright"
                  
                  onClick={() => fileRef.current.click()}
                >
                  <i className="far fa-edit mx-1"></i>
                  Edit Cover
                </button>
                <input
                  ref={fileRef}
                  onChange={handleCoverChange}
                  multiple={false}
                  type="file"
                  hidden
                />
              </div>
            </div>
          </div>
          <div className="profile-div mb-5">
            <div className="profile-photo">
              <img
                src={profileImage}
                alt={raihanProfileImage}
                className="img-fluid profile-img"
              />
              <div className="bottomright-profile">
                <div>
                  <button
                    className="profile-pic-button"
                    onClick={() => filePro.current.click()}
                  >
                    <i className="fas fa-pen"></i>
                  </button>
                  <input
                    ref={filePro}
                    onChange={handleProfileChange}
                    multiple={false}
                    type="file"
                    hidden
                  />
                </div>
              </div>
              <div>
                {profilePhoto ? (
                  <button className="profile-pic-save" onClick={profileSave}>
                    {/* <i className="far fa-save mx-1"></i> */}
                    Save
                  </button>
                ) : null}
              </div>
              <div className="prodile-pic-info text-center">
                <h5 className="profile-font-color">
                  {user.first_name} {user.last_name}
                </h5>
                <h6 className="profile-font-color">Student</h6>
              </div>
            </div>
          </div>

          {/* cover photo work end */}
          {/* main body container start */}
          <div className="container main-div">
            <div className="row">
              <div className="col-md-5 mb-2">
                {/* phototos and videos components added */}
                <LeftCardPhotos title="Photos" photos = {userActivites}/>
                <div className="mt-3">
                  <LeftCardVideos title="Videos" videos = {userActivites}/>
                </div>

                <div className="container left-col-box p-3 mt-3">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item left-bottom-accorion">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button profile-accordion-button-icon left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <span>
                            <i className="fas fa-layer-group mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Category <br></br>
                            <small className="category-size"> 5 selectd</small>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="profile-font-color">
                            Category loop start here
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mt-1 left-bottom-accorion">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>
                            <i className="fas fa-star mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Following <br></br>
                            <small className="category-size"> 15 star</small>
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item mt-1 left-bottom-accorion">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>
                            <i className="fas fa-wallet mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Wallet <br></br>
                            <small className="category-size"> 200 star</small>
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item mt-1 left-bottom-accorion">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>
                            <i className="fas fa-id-card mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Enrolled audition <br></br>
                            <small className="category-size"> 1 pending</small>
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item mt-1 left-bottom-accorion">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>
                            <i className="fas fa-cog mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Setting
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item mt-1 left-bottom-accorion">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={logoutSubmit}
                        >
                          <span>
                            <i className="fas fa-sign-out-alt mx-2 profile-font-color fa-2x"></i>
                          </span>{" "}
                          <span className="mx-2 profile-font-color">
                            Logout
                          </span>
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>

              <div className="col-md-5 right-card-profile">
                {/* right side card start here */}

{userActivites.map((activity)=>(
  <>
  {activity?.type == "meetup"?
    <RightSideCard
                  Name={activity?.meetup?.star?.first_name + ' ' + activity?.meetup?.star?.last_name}
                  Msg={moment(activity?.meetup?.start_time,"HH:mm").format("hh:mm A")}
                  CreateTime={moment(activity?.meetup?.created_at).format("LL")}
                  title={activity?.meetup?.title}
                  profileImg={`http://localhost:8000/${activity?.meetup?.banner}`}
                  profileLogo={`http://localhost:8000/${activity?.meetup?.star?.image}`}
                />:activity?.type == "learningSession"?
    <RightSideCard
                  Name={activity?.learning_session?.star?.first_name + ' ' + activity?.learning_session?.star?.last_name}
                  Msg={moment(activity?.learning_session?.start_time,"HH:mm").format("hh:mm A")}
                  CreateTime={moment(activity?.learning_session?.created_at).format("LL")}
                  title={activity?.learning_session?.title}
                  profileImg={`http://localhost:8000/${activity?.learning_session?.banner}`}
                  profileLogo={`http://localhost:8000/${activity?.learning_session?.star?.image}`}
                />:activity?.type == "liveChat"?
    <RightSideCard
                  Name={activity?.livechat?.star?.first_name + ' ' + activity?.livechat?.star?.last_name}
                  Msg={moment(activity?.livechat?.start_time,"HH:mm").format("hh:mm A")}
                  CreateTime={moment(activity?.livechat?.created_at).format("LL")}
                  title={activity?.livechat?.title}
                  profileImg={`http://localhost:8000/${activity?.livechat?.banner}`}
                  profileLogo={ShakibProfile}
                />:null
                
 }
                
  </>
))}                

                {/* Right side card end */}
              </div>
            </div>
          </div>

          {/* main body container end */}
        </div>

        {/* Messaging start */}

        <div class="bottomleft-message d-flex ">
          <i
            onClick={handleClick}
            class="fab fa-facebook-messenger text-warning fa-4x bottomleft-icon"
          ></i>

          {messagenger ? (
            <div class="card mx-5 message-card">
              <div className="head m-0 p-2 d-flex justify-content-around align-items-center">
                <img
                  src={sakibal}
                  className="img-fluid rounded-circle"
                  height="40px"
                  width="40px"
                  alt=""
                />
                <span className="text-light fw-bold">Sakib Al Hasan</span>
                <i
                  class="fas fa-times-circle close-message text-light"
                  onClick={() => setMessenger(false)}
                ></i>
              </div>
              <div class="card-body">
                <img
                  src={sakibal}
                  className="img-fluid rounded-circle"
                  height="40px"
                  width="40px"
                  alt=""
                />
                <div className="d-flex">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=3CaBNtaTrbo"
                    playing={false}
                    volume={1}
                    width="60%"
                    height="130px" // style={{ margin: "0 auto" }} onReady={()=> console.log("ready now")}
                  />
                  <i class="fas fa-share mx-2"></i>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Messaging end */}
      </div>
    </>
  );
};

export default Profile;
