import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import './components/CSS/BodyColor.css';

import VideoCall from './VideoCall'

// Category
import CoreCategory from "./components/Pages/Category/CoreCategory";
import StarSelection from "./components/Pages/Category/StarSelection";
import SubCategory from "./components/Pages/Category/SubCategory";
import AuditionsPost from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditonsPost";
import LearnPost from './components/Pages/Home/Body/SidebarComponent/Right/LearnPost/LearnPost';
import LivePost from "./components/Pages/Home/Body/SidebarComponent/Right/LivePost/LivePost";
import MeetupPost from "./components/Pages/Home/Body/SidebarComponent/Right/MeetUpEvents/MeetupPost";
import UpLivePost from "./components/Pages/Home/Body/SidebarComponent/Right/UpLivePost/UpLivePost";

// Error
import Error from "./components/Pages/Home/Error";

// Home Page
import Home from "./components/Pages/Home/HomePages";

// Market Place Page
import Market from "./components/Pages/Market/MarketPlace";
import Profile from './components/Pages/Profile/Profile';
import StarProfile from "./components/Pages/Profile/StarProfile";
import SouvenirSignature from "./components/Pages/Souvenir/Content/SouvenirSignature/SouvenirSignature";
import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";
import Packages from "./components/Pages/User/Packages/Packages";
import SliderTutorial from "./components/Pages/User/TutorialSPage/SliderTutroial";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ActivitiesBody from "./components/Sidebar/Left/Activities/ActivitiesBody";
import VideoActivities from "./components/Sidebar/Left/Activities/Content/VideoActivities";
import CategoryMain from "./components/Sidebar/Left/Category/CategoryMain";
import CategoryView from "./components/Sidebar/Left/Category/Content/CategoryView";
import ProfileCatBody from "./components/Sidebar/Left/Category/Content/ProfileCatBody";
import EnrollBody from "./components/Sidebar/Left/EnrolledAuditions/EnrollBody";

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
import FanHome from "./components/Sidebar/Left/FanGroup/FanHome";
import NestedSubCategoryBody from "./components/Pages/Home/Body/CategorySelector/NestedSubCategoryBody";

import LearningSessionLiveStream from "./VideoCall";
import ParticipateGuitarChord from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/ParticipateGuitarChord/ParticipateGuitarChord";
import AuditionGuitar from "./components/Pages/Home/Body/SidebarComponent/Right/AuditionsPost/AuditionGuitar";


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
  return (
    <>
    <BrowserRouter>

      <Switch>
        
        {/* Navbar */}
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/guest' component={Home} />

        <Route exact path='/marketplace' component={Market} />

        <Route exact path='/marketplace/shipping' component={Shipping} />
        <Route exact path='/videocall'  component={VideoCall} />

        <Route exact path='/marketplace/shipping/:slug' component={Shipping} />
        {/* Left Sidebar*/}
        <Route exact path='/category' component={CategoryMain} />
        <Route exact path='/category-view/:slug' component={CategoryView} />
        <Route exact path='/category-profile' component={ProfileCatBody} />

        <Route exact path='/following' component={FollowMain} />

        <Route exact path='/fan-group' component={FanHome} />
        <Route exact path='/your-group' component={FanGroupBody} />

        <PrivateRoute exact path='/wallet' component={WalletBody} />
        <PrivateRoute exact path='/enrolled-auditions' component={EnrollBody} />
        <PrivateRoute exact path='/activities' component={ActivitiesBody} />
        <PrivateRoute exact path='/activities/video/:id' component={VideoActivities} />

        <PrivateRoute exact path='/settings' component={SettingsBody} />
        
        {/* Left Sidebar End*/}


        {/* Right Sidebar   */}
        <Route exact path='/live-now' component={LivePost} />
        <Route exact path='/learning-sessions' component={LearnPost}/>
        <Route exact path='/upcoming-live' component={UpLivePost} />
        <Route exact path='/upcoming-auditions' component={AuditionsPost}/>
        <Route exact path='/participant-audition/:id' component={ParticipateGuitarChord}/>
        <Route exact path='/participant-upload' component={AuditionGuitar}/>
        <Route exact path='/meetup-events' component={MeetupPost}/>
        {/* Right Sidebar End */}

        {/* Selector */}
        <Route exact path='/selector-sub-category' component={SubCategorySelector} />

        {/* NestedSelector */}
        <Route exact path='/selector-nested-category' component={NestedSubCategoryBody} />

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


        {/* Souvenir */}
        <Route exact path='/souvenir/:product_id' component={Souvenir} />
        <Route exact path='/souvenir-winner' component={WinnerCR7} />
        <Route exact path='/souvenir-apply' component={SouvenirSignature} />
        <Route exact path='/souvenir-applied' component={AcquiringProduct} />

        {/* Learning Session */}
        <Route exact path="/register-learning-details/:slug" component={RegisterLearningDetails} />
        <Route exact path="/learning-session/live_stream" component={LearningSessionLiveStream} />
        

        {/* Error */}
        <Route component={Error} />
        
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
