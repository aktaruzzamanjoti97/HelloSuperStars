import React, { useState, useEffect } from 'react';
import Navigation from "../../../Header/Navigation";
import LeftSidebar from "../../LeftSidebar";
import ActivitiesContent from "./Content/ActivitiesContent";
import ActivitiesContent2 from "./Content/ActivitiesContent2";
import axios from "axios";


const ActivitiesBody = () => {

  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([])


  useEffect(() => {
    let isMounted = true;
    axios.get('api/user/registerMeestup').then(res =>{

        if(isMounted)
        {
            if(res.data.status === 200)
            {
            //   setLiveChat(res.data.livechats);
                setInterval(() => {
                    setPosts(res.data.events);
                }, 300);
      
            }
        }           
    });

    axios.get('api/user/registerLivechat').then(res =>{

      
          if(res.data.status === 200)
          {
          //   setLiveChat(res.data.livechats);
              setInterval(() => {
                  setPosts2(res.data.events);
              }, 300);
    
          }
               
  });


}, []);

 
    return (
      <React.Fragment>
        <Navigation/>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container-fluid  custom-container">
            <div className="row">

              <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
                <LeftSidebar/>
              </div>
              
              <div className="col-sm-9 justify-content-center postTab">
                <h2 className='text-light'>Meetup Events</h2>
                 <ActivitiesContent event={posts}/>

                 <h2 className='text-light'>LiveChat Events</h2>
                 <ActivitiesContent2 event={posts2}/>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default ActivitiesBody


