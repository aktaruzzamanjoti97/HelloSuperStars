import React, { useEffect, useState, useRef } from 'react';
import Navigation from "../../Header/Navigation";
import LeftSidebar from '../../Sidebar/LeftSidebar';
import RightSidebar from '../../Sidebar/RightSidebar';
import CategorySelector from "./Body/CategorySelector/CategorySelector";
import Post from "./Body/Post/Post";
// import PostContent from "./Body/Post/PostContent";
import PromoVideo from "./Body/PromoVideo/PromoVideo";

import { io } from 'socket.io-client';



  const Homepage = () => {

    const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    console.log('cur_user_right', localStorage.getItem('auth_id'))
    socket.current.emit("addUser", localStorage.getItem('auth_id'));
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users
        // user.followings?.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, []);


    return (
      <>
        <CategorySelector />
        <Post />
      </>
    );
  
}

export default Homepage