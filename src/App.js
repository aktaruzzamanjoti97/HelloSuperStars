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
import Live from "./components/Pages/Home/Body/LiveNow/LiveBody";
import Learn from "./components/Pages/Home/Body/LearningSessions/LearnBody";
import UpLive from "./components/Pages/Home/Body/UpcomingLive/UpliveBody";
import Auditions from "./components/Pages/Home/Body/UpcomingAuditions/AuditionsBody";

// Market Place Page
import Market from "./components/Pages/Market/MarketPlace";


import './components/CSS/Navbar/LeftSideNavbar.css';
import './components/CSS/Navbar/RightSideNavbar.css';
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
         
          {/* Sub Category*/}
          {/* <Route path='/category/Hollywood' component={Hollywood} />
          <Route path='/category/Bollywood' component={Bollywood} /> */}
          {/* Sub Category End*/}

        {/* Left Sidebar End*/}


        {/* Right Sidebar   */}
        <Route exact path='/live-now' component={Live} />
        <Route exact path='/learning-sessions' component={Learn}/>
        <Route exact path='/upcoming-live' component={UpLive} />
        <Route exact path='/upcoming-auditions' component={Auditions} />
        {/* Right Sidebar End */}
       
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route path='/accountCreate' exact component={AccountCreate} />

        <Route exact path='/tutorial' component={SliderTutorial} />
        <Route exact path='/packages' component={Packages} />
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
