import React,{ useState, useEffect, useRef } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import AzhariProfile from "../../../images/Shakib/2.png";
import ProfileAzhari from "../../../images/Shakib/pro.jpg";
import "../../CSS/Profile/starProfile/starProfile.css";
import Navigation from "../../Header/Navigation";
import Audition from "../../Pages/Profile/profile-components/starProfile/Audition";
import Souviner from "../../Pages/Profile/profile-components/starProfile/Souviner";
import StarPhotos from "../../Pages/Profile/profile-components/starProfile/StarPhotos";
import StarPost from "../../Pages/Profile/profile-components/starProfile/StarPost";
import Videos from "../../Pages/Profile/profile-components/starProfile/Videos";

import GreetingsPayContent from "./GreetingsPay/GreetingsPayContent";
import BookNowEvent from "./BookNow/BookNowEvent";

import LiveChat from "./profile-components/starProfile/LiveChat/LiveChat";
import StarChat from "./profile-components/starProfile/StarChat/StarChat";
import Greeting from "./profile-components/starProfile/StarChat/starGreeeting/Greeting";

import axios from "axios";
import UnlockPay from './profile-components/UnlockPay';

const StarProfile = (props) => {
const history = useHistory();
let { path, url } = useRouteMatch();
const [star, setStar] = useState({});


useEffect(() => {
  let isMounted = true;
  
  const star_id = props.match.params.star_id;

  axios.get(`/api/star_info/${star_id}`).then(res =>{
  
      if(isMounted)
      {
          if(res.data.status === 200)
          {
              setStar(res.data.star);

              console.log(res.data.star);
          }
      }
  });

}, [props.match.params.star_id, history]);



console.log(url);

return (
<>
  <Navigation />
  <div className="full-container py-3">
    <div className="container star-cover mb-2">
      <div className="profile-img-cover ">
        <div className="profile-container ">
          <img src={AzhariProfile} alt="bg-img" className="img-fluid profile-cover" />

          <div className="star-profile-pic d-flex">
            <img src={`http://localhost:8000/${star.image}`} alt="" className="img-fluid profile-star " />
            <div className="profile-name-contents mt-5 mx-2">
              <h3 className="text-light mt-5 star-profile-name">
                {star.first_name} {star.last_name}
              </h3>
              <p className="text-warning star-profile-type">
                @ShakibAllrounderHasan ·
              </p>
            </div>
          </div>
        </div>
        <div className="container next-div">
          <div className="line-div my-1"></div>

          <Navbar>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">

                  <NavLink to={`${url}/post`} className="text-decoration-none" style={(isActive)=> ({
                    color: isActive ? "#ffad00" : "white",
                    })}
                    >
                    Posts
                  </NavLink>
                  <NavLink to={`${url}/photos`} className="mx-2 text-decoration-none" style={(isActive)=> ({
                    color: isActive ? "#ffad00" : "white",
                    })}
                    >
                    Photos
                  </NavLink>
                  <NavLink to={`${url}/videos`} className="mx-2 text-decoration-none" style={(isActive)=> ({
                    color: isActive ? "#ffad00" : "white",
                    })}
                    >
                    Videos
                  </NavLink>
                  <NavLink to={`${url}/souviner`} className="mx-2 text-decoration-none" style={(isActive)=> ({
                    color: isActive ? "#ffad00" : "white",
                    })}
                    >
                    Souviner
                  </NavLink>
                  <NavLink to={`${url}/audition`} className="mx-2 text-decoration-none" style={(isActive)=> ({
                    color: isActive ? "#ffad00" : "white",
                    })}
                    >
                    Audition
                  </NavLink>
                  {/* <NavLink to={`${url}/greeting`} className='mx-2 text-decoration-none' style={isActive=> ({
                    color: isActive ? "#ffad00" : "white"
                    })}>greeting</NavLink> */}
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route path={`${path}/livechat`} exact component={LiveChat} />
            <Route path={`${path}/post/livechat`} exact component={LiveChat} />
            <Route path={`${path}/:id/livechat`} exact component={LiveChat} />

            <Route path={`${path}/:id/livechat/starChat`} exact component={StarChat} />
            <Route path={`${path}/livechat/starChat`} exact component={StarChat} />

            <Route path={`${path}/livechat/starChat`} exact component={StarChat} />

            {/* greeting routing start*/}
            <Route exact path={`${path}/greeting`}> <Greeting />
            </Route>
            <Route exact path={`${path}/:id/greeting`} component={Greeting} />
            <Route path={`${path}/user-greetings-pay`} exact component={GreetingsPayContent} />
            {/* greeting routing end*/}
            
            {/* <Route path={`${path}/book-now`} exact component={BookNowEvent} /> */}

            <Route path={`${path}/meetup-events/book_now/:id`} exact component={BookNowEvent}/>

            <Route exact path={path}>
              <StarPost />
            </Route>
            <Route path={`${path}/post`}> <StarPost />
            </Route>
            <Route path={`${path}/photos`}> <StarPhotos />
            </Route>
            <Route path={`${path}/videos`}> <Videos />
            </Route>
            <Route path={`${path}/souviner`}> <Souviner />
            </Route>
            <Route path={`${path}/audition`}> <Audition />
            </Route>
            <Route path={`${path}/booking`}> <Audition />
            </Route>
            <Route path={`${path}/unlock-pay`}> <UnlockPay />
            </Route>

            {/*
            <Route path={`${path}/greeting`}> <Greeting />
            </Route> */}
            {/*
            <Route path="/photos" exact component={StarPhotos} />
            <Route path="/videos" exact component={Videos} />
            <Route path="/souviner" exact component={Souviner} />
            <Route path="/audition" exact component={Audition} />
            <Route path='/liveChat' exact component={LiveChat} />
            <Route exact path="/starChat" component={StarChat} />
            <Route path="/" component={StarPost} /> */}
          </Switch>
        </div>
      </div>
    </div>

  
  </div>
</>
);
};

export default StarProfile;