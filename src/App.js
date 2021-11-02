import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./components/Pages/Home/Body/HomePages";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import Otp from "./components/UserAuthentication/Otp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navigation from './components/Header/Navigation';
import HelloSuperStarDemo from './components/UserAuthentication/HelloSuperStarDemo';
import AccountCreate from "./components/UserAuthentication/AccountCreate";
import SliderTutorial from "./components/Pages/User/TutorialSPage/SliderTutroial";
import Packages from "./components/Pages/User/Packages/Packages";
import BuyPackages from "./components/Pages/User/Packages/BuyPackages";
import Profile from './components/Pages/Profile/Profile';


// Market Place Page
import MarketPlace from "./components/Pages/Market/MarketPlace";


import './components/CSS/Navbar/LeftSideNavbar.css';
import './components/CSS/Navbar/RightSideNavbar.css';
import './App.css';
import GuestUserPage from "./components/Pages/User/GuestUser/GuestUserPage";
import CoreCategory from "./components/Pages/Category/CoreCategory";
import SubCategory from "./components/Pages/Category/SubCategory";
import StarSelection from "./components/Pages/Category/StarSelection";


function App() {
  return (
    <>
    <BrowserRouter>
    <PrivateRoute component={Navigation} />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/marketplace' component={MarketPlace} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route path='/accountCreate' exact component={AccountCreate} />
        <Route exact path='/tutorial' component={SliderTutorial} />
        <Route exact path='/packages' component={Packages} />
        <Route exact path='/buy-packages' component={BuyPackages} />
        <Route path='/guestUser' exact component={GuestUserPage} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/coreCategory' exact component={CoreCategory} />
        <Route path='/subCategory' exact component={SubCategory} />
        <Route path='/starSelection' exact component={StarSelection} />
        <PrivateRoute exact path='/logo' component={HelloSuperStarDemo} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
