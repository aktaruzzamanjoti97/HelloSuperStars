import axios from "axios";
import { useState, useEffect, useRef, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import './components/CSS/BodyColor.css';

import VideoCall from './VideoCall'

import MasterLayout from "./components/Pages/MasterLayout";
// Category
import CoreCategory from "./components/Pages/Category/CoreCategory";
import StarSelection from "./components/Pages/Category/StarSelection";
import SubCategory from "./components/Pages/Category/SubCategory";

// Error
import Error from "./components/Pages/Home/Error";

// Home Page
import Home from "./components/Pages/Home/HomePages";
import Profile from './components/Pages/Profile/Profile';
import StarProfile from "./components/Pages/Profile/StarProfile";
import SouvenirSignature from "./components/Pages/Souvenir/Content/SouvenirSignature/SouvenirSignature";
import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";
import Packages from "./components/Pages/User/Packages/Packages";
import SliderTutorial from "./components/Pages/User/TutorialSPage/SliderTutroial";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


// Left Sidebar 
import FollowMain from "./components/Sidebar/Left/Following/FollowMain";

import SettingsBody from "./components/Sidebar/Left/Settings/SettingsBody";

import WalletBody from "./components/Sidebar/Left/Wallet/WalletBody";
import AccountCreate from "./components/UserAuthentication/AccountCreate";
import HelloSuperStarDemo from './components/UserAuthentication/HelloSuperStarDemo';
import Login from "./components/UserAuthentication/Login";
import Otp from "./components/UserAuthentication/Otp";
import Signup from "./components/UserAuthentication/Signup";

// Souvenir
import AcquiringProduct from "./components/Pages/Souvenir/Content/AcquiringProduct";
import Souvenir from "./components/Pages/Souvenir/Souvenir";
import WinnerCR7 from "./components/Pages/Souvenir/WinnerCR7";
import Shipping from "./components/Pages/Market/Shipping";
import RegisterNow from "./components/Pages/Home/Body/SidebarComponent/Right/ReigsterNow/RegisterNow";
import RegisterLearningDetails from "./components/Pages/Home/Body/SidebarComponent/RegisterLearningDetails/RegisterLearningDetails";
import SubCategorySelector from "./components/Pages/Home/Body/CategorySelector/SubCategorySelectorBody";
import FanGroupBody from "./components/Sidebar/Left/FanGroup/FanGroupBody";
import NestedSubCategoryBody from "./components/Pages/Home/Body/CategorySelector/NestedSubCategoryBody";
import LearningSessionLiveStream from "./VideoCall";
import ParticipateGuitarChord from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/ParticipateGuitarChord/ParticipateGuitarChord";
import AuditionGuitar from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditionGuitar";
import reactSelect from "react-select";
import { io } from "socket.io-client";
import VideoUploadAudition from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/ParticipateGuitarChord/VideoUploadAudition";
import AuditionWithStar from "./components/Pages/Profile/profile-components/starProfile/AuditionWithStar/AuditionWithStar";

export const socketContext=createContext();


// Fan Group

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.baseURL = "http://localhost:8000/";

const mediaBaseUrl = "http://localhost:8000/";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});



function App() {
  const [socketData, setSocketData] = useState();

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    setSocketData(socket.current);
  }, []);


  return (
    <>
    <socketContext.Provider value={socketData}>
    <BrowserRouter>

      <Switch>

      
        <Route exact path='/guest' component={Home} />
        <Route exact path='/marketplace/shipping' component={Shipping} />
        <Route exact path='/videocall'  component={VideoCall} />
        <Route exact path='/marketplace/shipping/:slug' component={Shipping} />
        <PrivateRoute exact path='/wallet' component={WalletBody} />

        <Route exact path='/group/:slug' component={FanGroupBody} />
        
        {/* <PrivateRoute exact path='/settings' component={SettingsBody} /> */}
      
        {/* Selector */}
        <Route exact path='/selector-sub-category' component={SubCategorySelector} />

        {/* NestedSelector */}
        <Route exact path='/selector-nested-category' component={NestedSubCategoryBody} />

        <Route exact path='/audition-with-star' component={AuditionWithStar} />

        {/* Account Section */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <PrivateRoute path='/accountCreate' exact component={AccountCreate} />


        <Route path='/tutorial' component={SliderTutorial} />
        <Route path='/packages' component={Packages} />
        <Route path='/guestUser' exact component={GuestUserPage} />

        {/* profile page */}
        <PrivateRoute path='/profile' exact component={Profile} />


        {/* Star profile page */}
        <Route path='/starprofile/:star_id'  component={StarProfile} />

          
        {/* Category */}
        <Route path='/coreCategory' exact component={CoreCategory} />
        <Route path='/subCategory' exact component={SubCategory} />

        <Route path='/starselection' exact component={StarSelection} />
          
      
        <Route exact path='/logo' component={HelloSuperStarDemo} />

        {/* fan group */}
        {/* <Route exact path='/fan-group' component={FanHome} /> */}
        {/* <Route exact path='/group/:slug' component={FanGroupBody} /> */}

        {/* Souvenir */}
        <Route exact path='/souvenir/:product_id' component={Souvenir} />
        <Route exact path='/souvenir-winner' component={WinnerCR7} />
        <Route exact path='/souvenir-apply' component={SouvenirSignature} />
        <Route exact path='/souvenir-applied' component={AcquiringProduct} />

        <Route exact path='/participant-audition/:id' component={ParticipateGuitarChord}/>
        <Route exact path='/participant-video-upload/:id' component={VideoUploadAudition}/>
        <Route exact path='/participant-upload/:id' component={AuditionGuitar}/>

        {/* Learning Session */}
        <Route exact path="/register-learning-details/:slug" component={RegisterLearningDetails} />
        <Route exact path="/learning-session/live_stream" component={LearningSessionLiveStream} />

        {/* Master Layout With Topbar + Leftbar + Rightbar */}
        <PrivateRoute path='/' component={MasterLayout} />

        {/* Error */}
        <Route path='/404' component={Error} />
        
        
        
        
      </Switch>
    </BrowserRouter>
    </socketContext.Provider>
    </>
  );
}

export default App;