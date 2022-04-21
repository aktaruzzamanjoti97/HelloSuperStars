import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom"
import Navigation from "../Header/Navigation";
import LeftSidebar from "../Sidebar/LeftSidebar";
import RightSidebar from "../Sidebar/RightSidebar";
import PromoVideo from "../Pages/Home/Body/PromoVideo/PromoVideo";
import Home from "../../components/Pages/Home/HomePages";
import Market from "../../components/Pages/Market/MarketPlace";
import Chatting from "../../components/Pages/Chatting/Chatting";
import CategoryMain from "../../components/Sidebar/Left/Category/CategoryMain";
import CategoryView from "../../components/Sidebar/Left/Category/Content/CategoryView";
import ProfileCatBody from "../../components/Sidebar/Left/Category/Content/ProfileCatBody";
import FollowMain from "../../components/Sidebar/Left/Following/FollowMain";
import ActivitiesBody from "../../components/Sidebar/Left/Activities/ActivitiesBody";
import VideoActivities from "../../components/Sidebar/Left/Activities/Content/VideoActivities";
import FanHome from "../../components/Sidebar/Left/FanGroup/FanHome";
import LearnPost from '../../components/Pages/Home/Body/SidebarComponent/Right/LearnPost/LearnPost';
import LivePost from "../../components/Pages/Home/Body/SidebarComponent/Right/LivePost/LivePost";
import MeetupPost from "../../components/Pages/Home/Body/SidebarComponent/Right/MeetUpEvents/MeetupPost";
import UpLivePost from "../../components/Pages/Home/Body/SidebarComponent/Right/UpLivePost/UpLivePost";
import AuditionsPost from "../../components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditonsPost";
import SettingsBody from "../../components/Sidebar/Left/Settings/SettingsBody";
import EnrollBody from "../../components/Sidebar/Left/EnrolledAuditions/EnrollBody";
import { socketContext } from "../../App";
import AuditionBody from "./AuditionPages/AuditonBody/AuditionBody";


const Homepage = () => {

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [totalNotification, setTotalNotification] = useState([]);
  const socketData = useContext(socketContext);

  useEffect(() => {
    socketData.emit("addUser", localStorage.getItem("auth_id"));
    socketData.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
    socketData.on("getNotification", (data) => {
      setTotalNotification(data);
    });
  }, []);

  return (
    <React.Fragment>
      <Navigation totalNotification={totalNotification}/>
      <div className="homebody ">
        <div className="container-fluid custom-container ">
          <div className="row">
            <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
              <div className="promoVideoBorder">
                  <PromoVideo />
              </div>
              <LeftSidebar onlineUserProp={onlineUsers} />
            </div>

            <div className="col-sm-6 justify-content-center postTab ">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/marketplace" component={Market}/>
                <Route exact path="/chatting/:id" component={Chatting}/>

                <Route exact path='/category' component={CategoryMain} />
                <Route exact path='/category-view/:slug' component={CategoryView} />
                <Route exact path='/category-profile' component={ProfileCatBody} />

                <Route exact path='/following' component={FollowMain} />
                <Route exact path='/activities' component={ActivitiesBody} />
                <Route exact path='/activities/video/:id' component={VideoActivities} />
                <Route exact path='/fan-group' component={FanHome} />
                
                {/* Right Sidebar   */}
                <Route exact path='/live-now' component={LivePost} />
                <Route exact path='/learning-sessions' component={LearnPost}/>
                <Route exact path='/upcoming-live' component={UpLivePost} />
                <Route exact path='/upcoming-auditions' component={AuditionsPost}/>
                <Route exact path='/meetup-events' component={MeetupPost}/>
                <Route exact path='/settings' component={SettingsBody} />
                <Route exact path='/enrolled-auditions' component={EnrollBody} />
          
                {/* Right Sidebar End */}

{/* audition routes start */}

                <Route exact path='/enrolled-auditions-round' component={AuditionBody} />
                {/* audition routes end*/}
              </Switch>
            </div>

            <div className="col-ms-3 justify-content-center container-fluid custom-container-left-Right postRight">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Homepage;
