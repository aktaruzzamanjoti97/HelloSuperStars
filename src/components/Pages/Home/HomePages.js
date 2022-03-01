import React, { useEffect, useState } from 'react';
import Navigation from "../../Header/Navigation";
import LeftSidebar from '../../Sidebar/LeftSidebar';
import RightSidebar from '../../Sidebar/RightSidebar';
import CategorySelector from "./Body/CategorySelector/CategorySelector";
import Post from "./Body/Post/Post";
// import PostContent from "./Body/Post/PostContent";
import PromoVideo from "./Body/PromoVideo/PromoVideo";

import io from 'socket.io-client';



  const Homepage = () => {

  //const [socket, setSocket] = useState(null);

  useEffect(() => {
    //const socket = io(`http://localhost:3000`);
    var socket = io("http://localhost:3000",{query: 1 });
    
    socket.on('connection', (msg) => {
      console.log('sonet', msg);
    });

    socket.emit('user_id', localStorage.getItem('auth_id'));

  }, []);






    return (
      <React.Fragment>
        <Navigation />
        <div className="homebody ">
          <div className="container-fluid custom-container ">
            <div className="row">

              <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
                <div className="promoVideoBorder">
                  <PromoVideo />
                </div>

                <LeftSidebar />
              </div>

              <div className="col-sm-6 justify-content-center postTab ">
                <CategorySelector />
                <Post />
              </div>

              <div className="col-md-3 justify-content-center container-fluid custom-container-left-Right postRight">
                <RightSidebar />
              </div>

            </div>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  
}

export default Homepage