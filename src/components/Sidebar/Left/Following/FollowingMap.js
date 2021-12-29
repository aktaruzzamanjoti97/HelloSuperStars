import React, { useState, useEffect } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FollowingContent from './FollowingContent'
import axios from "axios";



const FollowingMap = () => {
      
    const [posts, setPosts] = useState([])
    const [status, setstatus] = useState(true)
    
    useEffect(() => {
        let isMounted = true;
        axios.get('api/user/getAllLiveChatEventWith').then(res =>{
    
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                //   setLiveChat(res.data.livechats);
                    setInterval(() => {
                        setPosts(res.data.livechats);
                        setstatus(false);
                    }, 300);
                    // console.log(res.data.livechats);
          
                }
            }           
        });
    }, []);
    
    return (
        <>
            {posts && posts.map((data) => (
                <FollowingContent key={data.id} post={data} />
            ))}
        </>
    )
}

export default FollowingMap
