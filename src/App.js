import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./components/Pages/Home/Body/HomePages";
import Login from "./components/UserAuthentication/Login";
import Signup from "./components/UserAuthentication/Signup";
import Otp from "./components/UserAuthentication/Otp";
import Tutorials from "./components/Pages/User/TutorialPage/Tutorials";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Navigation from './components/Header/Navigation';
import HelloSuperStarDemo from './components/UserAuthentication/HelloSuperStarDemo';
import './components/CSS/SideNavbar.css';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/otp' component={Otp} />
        <Route exact path='/tutorial' component={Tutorials} />
        <PrivateRoute exact path='/logo' component={HelloSuperStarDemo} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
