import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Route, Switch, BrowserRouter} from "react-router-dom";

import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import Otp from "./components/UserAuthentication/Otp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HelloSuperStarDemo from './components/UserAuthentication/HelloSuperStarDemo';
import AccountCreate from "./components/UserAuthentication/AccountCreate";
import SliderTutorial from "./components/Pages/User/TutorialSPage/SliderTutroial";
import Packages from "./components/Pages/User/Packages/Packages";
import Profile from './components/Pages/Profile/Profile';

// Admin
import AdminRoute from "./AdminRoute";

// Home Page
import Home from "./components/Pages/Home/HomePages";

import LivePost from "./components/Pages/Home/Body/SidebarComponent/Right/LivePost/LivePost";
import LearnPost from './components/Pages/Home/Body/SidebarComponent/Right/LearnPost/LearnPost';
import UpLivePost from "./components/Pages/Home/Body/SidebarComponent/Right/UpLivePost/UpLivePost";
import AuditionsPost from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditonsPost";

// Market Place Page
import Market from "./components/Pages/Market/MarketPlace";


import './App.css';
import './components/CSS/BodyColor.css'

import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";


// Category
import CoreCategory from "./components/Pages/Category/CoreCategory";
import SubCategory from "./components/Pages/Category/SubCategory";

// Left Sidebar 
import CategoryBody from './components/Sidebar/Left/Category/CategoryBody'
import FollowingBody from "./components/Sidebar/Left/Following/FollowingBody";
import EnrollBody from "./components/Sidebar/Left/EnrolledAuditions/EnrollBody";

import SettingsBody from "./components/Sidebar/Left/Settings/SettingsBody";
import Personal from "./components/Sidebar/Left/Settings/SettingComponents/Personal";
import Educational from "./components/Sidebar/Left/Settings/SettingComponents/Educational";
import Employment from "./components/Sidebar/Left/Settings/SettingComponents/Employment";
import Interest from "./components/Sidebar/Left/Settings/SettingComponents/Interest";
import Security from "./components/Sidebar/Left/Settings/SettingComponents/Security";
import Report from "./components/Sidebar/Left/Settings/SettingComponents/Report";

// Error
import Error from "./components/Pages/Home/Error";
import WalletBody from "./components/Sidebar/Left/Wallet/WalletBody";


import StarSelection from "./components/Pages/Category/StarSelection";
import StarProfile from "./components/Pages/Profile/StarProfile";

import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use(function (config)
{
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '' ;
  return config;
});



function App() {
  return (
    <>
    <BrowserRouter>

        {/* <PrivateRoute component={Navigation} /> */}

    {/* <PrivateRoute component={Navigation} /> */}
      <Switch>

        {/* Admin */}
        <Route exact path='/Admin' component={AdminRoute} />

        {/* Navbar */}
        <Route exact path='/' component={Home} />
        
        <Route exact path='/marketplace' component={Market} />

        {/* Left Sidebar*/}
        <Route exact path='/category' component={CategoryBody} />
        <Route exact path='/following' component={FollowingBody} />
        <Route exact path='/wallet' component={WalletBody} />
        <Route exact path='/enrolled-auditions' component={EnrollBody} />

        <Route exact path='/settings' component={SettingsBody} />
        <Route exact path="/seeting/personal" component={Personal}/>
        <Route exact path="/seeting/educational" component={Educational}/>
        <Route exact path="/seeting/employment" component={Employment}/>
        <Route exact path="/seeting/interest" component={Interest}/>
        <Route exact path="/seeting/security" component={Security}/>
        <Route exact path="/seeting/report" component={Report}/>
        {/* Left Sidebar End*/}


        {/* Right Sidebar   */}
        <Route exact path='/live-now' component={LivePost} />
        <Route exact path='/learning-sessions' component={LearnPost}/>
        <Route exact path='/upcoming-live' component={UpLivePost} />
        <Route exact path='/upcoming-auditions' component={AuditionsPost}/>

        

        {/* Right Sidebar End */}
       
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route path='/accountCreate' exact component={AccountCreate} />

        <Route path='/tutorial' component={SliderTutorial} />
        <Route path='/packages' component={Packages} />

        <Route path='/guestUser' exact component={GuestUserPage} />

        {/* profile page */}
        <Route path='/profile' exact component={Profile} />
        <Route path='/starprofile' exact component={StarProfile} />




          
         {/* Category */}
          <Route path='/coreCategory' exact component={CoreCategory} />
          <Route path='/subCategory' exact component={SubCategory} />

          <Route path='/starselection' exact component={StarSelection} />
          
        {/* Left Sidebar*/}

          {/* <Route path='/category' component={Category} /> */}
          {/* <Route path='/following' component={Following} /> */}
          {/* <Route path='/settings' component={Body} /> */}

          {/* Follow Category */}
          {/* <Route path='/category/Hollywood' component={Hollywood} />
          <Route path='/category/Bollywood' component={Bollywood} /> */}

        {/* Left Sidebar End*/}



        <PrivateRoute exact path='/logo' component={HelloSuperStarDemo} />

        {/* Error */}
        <Route component={Error} />
        
      </Switch>
    </BrowserRouter>
    </>
  );
} 

export default App;
