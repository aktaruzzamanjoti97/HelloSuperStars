import React, { useState, useEffect } from 'react';
import Navigation from "../../../Header/Navigation";
import LeftSidebar from "../../LeftSidebar";
import ActivitiesContent from "./Content/ActivitiesContent";
import ActivitiesContent2 from "./Content/ActivitiesContent2";
import axios from "axios";
import Purchase from './Content/Purchase';


const ActivitiesBody = () => {

  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([])
  const[eventLodaer, setEventLodaer] = useState(false)
  const[liveChattLodaer, setLiveChatLodaer] = useState(false)
  const[greetingsLodaer, setGreetingsLodaer] = useState(false)


  useEffect(() => {
    let isMounted = true;
    axios.get('api/user/registerMeestup').then(res =>{

           //setEventLodaer(true)
     
            if(res.data.status === 200)
            {
                  // console.log('meet up event', res.data.events)
                  setPosts(res.data.events);
               
      
            }
                 
    });

    axios.get('api/user/registerLivechat').then(res =>{

          if(res.data.status === 200)
          {
          //
                setPosts2(res.data.events);
                setLiveChatLodaer(true)
          }
               
    });
    

    axios.get('api/user/check_notification').then(res =>{

      
          if(res.data.status === 200)
          {
        
                setEventLodaer(res.data.greeting_info);
                setGreetingsLodaer(true)
            
    
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
                <h2 className='mt-3 text-light fw-bold bg-dark p-2 btn w-100 text-center'>Meetup Events</h2>
                 <ActivitiesContent eventLodaer={eventLodaer} event={posts}/>

                 <hr/>

                 <h2 className='mt-3 text-light fw-bold bg-dark p-2 btn w-100 text-center'>LiveChat Events</h2>
                 <ActivitiesContent2 loader={liveChattLodaer} event={posts2}/>

                 <hr/>

                 <h2 className='mt-3 text-light fw-bold bg-dark p-2 btn w-100 text-center'>Purchase</h2>
                 <Purchase event={posts2}/>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default ActivitiesBody


