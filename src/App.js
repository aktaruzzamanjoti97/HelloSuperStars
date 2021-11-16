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

// Navigation
import Navigation from './components/Header/Navigation';

// Home Page
import Home from "./components/Pages/Home/HomePages";

import LivePost from "./components/Pages/Home/Body/SidebarComponent/Right/LivePost/LivePost";
import LearnPost from './components/Pages/Home/Body/SidebarComponent/Right/LearnPost/LearnPost';
import UpLivePost from "./components/Pages/Home/Body/SidebarComponent/Right/UpLivePost/UpLivePost";
import AuditionsPost from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditonsPost";

// Market Place Page
import Market from "./components/Pages/Market/MarketPlace";


import './App.css';

import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";


// Category
import CoreCategory from "./components/Pages/Category/CoreCategory";
import SubCategory from "./components/Pages/Category/SubCategory";

// Left Sidebar 
import CategoryBody from './components/Sidebar/Left/Category/CategoryBody'
import FollowingBody from "./components/Sidebar/Left/Following/FollowingBody";
import EnrollBody from "./components/Sidebar/Left/EnrolledAuditions/EnrollBody";
import SettingsBody from "./components/Sidebar/Left/Settings/SettingsBody";

// Error
import Error from "./components/Pages/Home/Error";
import WalletBody from "./components/Sidebar/Left/Wallet/WalletBody";


import StarSelection from "./components/Pages/Category/StarSelection";
import StarProfile from "./components/Pages/Profile/StarProfile";




function App() {
  return (
    <>
    <BrowserRouter>
    <PrivateRoute component={Navigation} />
      <Switch>
        {/* Navbar */}
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/marketplace' component={Market} />

        {/* Left Sidebar*/}
        <Route path='/category' component={CategoryBody} />
        <Route path='/following' component={FollowingBody} />
        <Route path='/wallet' component={WalletBody} />
        <Route path='/enrolled-auditions' component={EnrollBody} />
        <Route path='/settings' component={SettingsBody} />
         
         

        {/* Left Sidebar End*/}


        {/* Right Sidebar   */}
        <Route path='/live-now' component={LivePost} />
        <Route path='/learning-sessions' component={LearnPost}/>
        <Route path='/upcoming-live' component={UpLivePost} />
        <Route path='/upcoming-auditions' component={AuditionsPost}/>

        

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
