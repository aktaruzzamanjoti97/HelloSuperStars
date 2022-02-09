import React, { useState, useEffect } from 'react';
// import { Users } from '../../../../../DummyData'
import PostContent from './PostContent'
import axios from "axios";

import SkeletonArticle from '../Post_skaliton/SkeletonArticle';
import { Markup } from 'interweave';




const Post = () => {
    
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
                    console.log(res.data.livechats);

                    
          
                }
            }           
        });
    }, []);
    
    return (
     
        <>
            {status && [1,2,3,4].map((valu)=><SkeletonArticle theme="dark"/>)  }
            
            {posts && posts.map((data) => (
                <PostContent key={data.id} post={data} />
            ))}
        </>
    )
}

export default Post
