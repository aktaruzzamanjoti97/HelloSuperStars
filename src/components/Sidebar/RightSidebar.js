import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import "../CSS/Sidebar/Right/Right.css";

import Learn from "./Right/LearningSessions/Learn";
import UpLive from "./Right/UpcomingLive/UpLive";
import UpAuditions from "./Right/UpcomingAuditions/UpAudions";
import "./Right/LiveNow/LiveContent.css";

import Pro from "../../images/Shakib/14.jpg";
import srabanti from "../../images/sar.jpg";
import momtaj from "../../images/momtaz.png";
import srk from "../../images/shahruk-khan.jpg";
import ayman from "../../images/Ayman_Sadiq.jpg";
import mashrafi from "../../images/MashrafeMortaza_smile.jpeg";
import ms from "../../images/ms.jpg";
import messi from "../../images/messi.jpg";

import MeetupEvents from "./Right/MeetupEvents/MeetupEvents";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RightSideSkeliton from "./RightSideSkeliton";
export const RightSidebar = () => {

// <=====================================All useState==============================>

  const [learningSession, setLearningSession] = useState([]);
  const [loadingLearningSession, setLoadingLearningSession] = useState(true);

  const [meetupPhotos, setMeetupPhotos] = useState([]);
  const [loadingMeetupPhotos, setLoadingMeetupPhotos] = useState(true);

  const [liveChat, setLiveChat] = useState([]);
  const [loadingLiveChat, setLoadingLiveChat] = useState(true);

  /* const [liveChatPhotos, setliveChatPhotos] = useState([]);
  const [loadingliveChatPhotos, setLoadingliveChatPhotos] = useState(true);
 */

   // <===========================Fetch  learning Photos===============================>
   useEffect(() => {
    axios.get('/api/user/learning_session/all').then((res) => {
      if (res.status === 200) {
        setLearningSession(res.data.post);
        setLoadingLearningSession(false);
      }
    });

  }, []);

  // <==========================Fetch meetup event photos===============================>

  useEffect(() => {
    axios.get('/api/user/meetupEventList/').then((res) => {
      if (res.status === 200) {
        setMeetupPhotos(res.data.meetup);
        setLoadingMeetupPhotos(false);
      }
    });

    axios.get('/api/user/live_chat/all').then((res) => {
      if (res.status === 200) {
        setLiveChat(res.data.event);
        setLoadingLiveChat(false);
      }
    });

  }, []);

  //<================================Fetch live chat photos============================>
/*   useEffect(() => {
    axios.get('/api/user/meetupEventList/').then((res) => {
      if (res.status === 200) {
        setliveChatPhotos(res.data.meetup);
        setLoadingliveChatPhotos(false);
      }
    });

  }, []); */

// <==============================show photos for learning session==========================>



  const learningSessionPhoto = () => {
    return (
      learningSession.map((photo) => (
        <>
          <div className="container-xc-ds item item-x ">
              
            <img
              src={`http://localhost:8000/${photo.banner}`}
              className="SidebarCarouselImg"
              alt="profilePicture"
            />

            <div class="top-right-c">🔴</div>
            <div class="bottom-left-c">Bottom Left</div>
          </div>
        </>
      ))
    )
  }
  
//<============================Show meetup photos==========================>
const meetupEventPhoto = () => {
    return (
      meetupPhotos.map((photo) => (
        <>
          <div className="container-xc-ds item item-x ">
              
            <img
              src={`http://localhost:8000/${photo.banner}`}
              className="SidebarCarouselImg"
              alt="profilePicture"
            />

            <div class="top-right-c">🔴</div>
            <div class="bottom-left-c">Bottom Left</div>
          </div>
        </>
      ))
  )
}

  //<============================Show meetup photos==========================>
  const liveChatPhoto = () => {
    return (
    
      liveChat.map((photo) => (
          <>
            <div className="container-xc-ds item item-x ">
                
              <img
                src={`http://localhost:8000/${photo.banner}`}
                className="SidebarCarouselImg"
                alt="profilePicture"
              />
      
              <div class="top-right-c">🔴</div>
              <div class="bottom-left-c">Bottom Left</div>
            </div>
          </>
        ))
  )
  };





 

  return (
    <>
      <div className="LinkBtn">
        {/* Live now */}
        <div className=" xm-mnh-s mt-3">
          <div className="live-text-sln">Live now</div>

          <div className="row ">
            <div className="col-md-10">
              <OwlCarousel
                className="col-md-2"
                items={2}
                loop
                autoplay
                autoplayTimeout={3000}
                margin={0}
                dots={false}
                nav
              >
                <div className="container-xc-ds item item-x ">
                  <img
                    src={Pro}
                    className="SidebarCarouselImg"
                    alt="profilePicture"
                  />

                  <div class="top-right-c">🔴</div>
                  <div class="bottom-left-c">Bottom Left</div>
                </div>

                <div className="container-xc-ds item item-x ">
                  <img
                    src={messi}
                    className="SidebarCarouselImg"
                    alt="profilePicture"
                  />

                  <div class="top-right-c">🔴</div>
                  <div class="bottom-left-c">Bottom Left</div>
                </div>
              </OwlCarousel>
            </div>

            <Link to="/live-now" className="col-md-2  item-xx-l mt-3 ">
              <button className="btn bg-dark">
                <small className="text-light">See All</small>
                <i className="fas fa-arrow-alt-circle-down text-light "></i>
              </button>
            </Link>
          </div>
        </div>

        {/* Live now */}
        {loadingLearningSession ?
        <RightSideSkeliton/>
        :
        <div className=" xm-mnh-s mt-3">
          <div className="live-text-sln">Learning Sessions</div>

        
          <div className="row ">
            <div className="col-md-10">
              <OwlCarousel
                className="col-md-2"
                items={2}
                loop
                autoplay
                autoplayTimeout={3500}
                margin={0}
                dots={false}
                nav
              >
                {learningSessionPhoto()}

              </OwlCarousel>
            </div>

            <Link to="/learning-sessions" className="col-md-2  item-xx-l mt-3 ">
              <button className="btn bg-dark">
                <small className="text-light">See All</small>
                <i className="fas fa-arrow-alt-circle-down text-light "></i>
              </button>
            </Link>
          </div>
        </div>
      
      }

        {/*Upcoming Live */}
        {loadingLiveChat ?
          <RightSideSkeliton />
          :
        <div className=" xm-mnh-s mt-3">
          <div className="live-text-sln">Live Chat</div>

          <div className="row ">
            <div className="col-md-10">
              <OwlCarousel
                className="col-md-2"
                items={2}
                loop
                autoplay
                autoplayTimeout={4000}
                margin={0}
                dots={false}
                nav
              >
                {liveChatPhoto()}
              </OwlCarousel>
            </div>

            <Link to="/upcoming-live" className="col-md-2  item-xx-l mt-3 ">
              <button className="btn bg-dark">
                <small className="text-light">See All</small>
                <i className="fas fa-arrow-alt-circle-down text-light "></i>
              </button>
            </Link>
          </div>
        </div>
        }

        {/*Upcoming Auditions */}
        <div className=" xm-mnh-s mt-3">
          <div className="live-text-sln">Upcoming Auditions</div>

          <div className="row ">
            <div className="col-md-10">
              <OwlCarousel
                className="col-md-2"
                items={2}
                loop
                autoplay
                autoplayTimeout={2000}
                margin={0}
                dots={false}
                nav
              >
                <div className="container-xc-ds item item-x ">
                  <img
                    src={ayman}
                    className="SidebarCarouselImg"
                    alt="profilePicture"
                  />
                  <div class="bottom-left-c">Bottom Left</div>
                </div>

                <div className="container-xc-ds item item-x ">
                  <img
                    src={srabanti}
                    className="SidebarCarouselImg"
                    alt="profilePicture"
                  />
                  <div class="bottom-left-c">Bottom Left</div>
                </div>
              </OwlCarousel>
            </div>

            <Link
              to="/upcoming-auditions"
              className="col-md-2   item-xx-l mt-3 "
            >
              <button className="btn bg-dark">
                <small className="text-light">See All</small>
                <i className="fas fa-arrow-alt-circle-down text-light "></i>
              </button>
            </Link>
          </div>
        </div>

        {/*Meetup Events */}
        {loadingMeetupPhotos ?
            <RightSideSkeliton />
          :  
          <div className=" xm-mnh-s mt-3">
            <div className="live-text-sln">Meetup Events</div>

            <div className="row ">
              <div className="col-md-10">
                <OwlCarousel
                  className="col-md-2"
                  items={2}
                  loop
                  autoplay
                  autoplayTimeout={1500}
                  margin={0}
                  dots={false}
                  nav
                >
                  {meetupEventPhoto()}
                </OwlCarousel>
              </div>

              <Link to="/meetup-events" className="col-md-2  item-xx-l mt-3 ">
                <button className="btn bg-dark">
                  <small className="text-light">See All</small>
                  <i className="fas fa-arrow-alt-circle-down text-light "></i>
                </button>
              </Link>
            </div>
          </div>
      }
      </div>
    </>
  );
};
export default RightSidebar;
