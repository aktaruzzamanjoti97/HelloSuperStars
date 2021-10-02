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
import { SliderTutroial } from "./components/Pages/User/TutorialSPage/SliderTutroial";
import { Packages } from "./components/Pages/User/Packages/Packages";
import { BuyPackages } from "./components/Pages/User/Packages/BuyPackages";
import './components/CSS/SideNavbar.css';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <PrivateRoute component={Navigation} />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route path='/accountCreate' exact component={AccountCreate} />
        <Route exact path='/tutorial' component={SliderTutroial} />
        <Route exact path='/packages' component={Packages} />
        <Route exact path='/buy-packages' component={BuyPackages} />
        <PrivateRoute exact path='/logo' component={HelloSuperStarDemo} />

       
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
