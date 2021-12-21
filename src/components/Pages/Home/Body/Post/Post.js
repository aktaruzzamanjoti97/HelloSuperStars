import React, { useState, useEffect } from 'react';
// import { Users } from '../../../../../DummyData'
import PostContent from './PostContent'
import axios from "axios";




const Post = () => {
    
   const [posts, setPosts] = useState([])
    
    useEffect(() => {
        let isMounted = true;
        axios.get('api/user/getAllLiveChatEventWith').then(res =>{
    
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                //   setLiveChat(res.data.livechats);
                    setPosts(res.data.livechats);
                    // console.log(res.data.livechats);
          
                }
            }           
        });
    }, []);
    
    return (
        <>
            {posts && posts.map((data) => (
                <PostContent key={data.id} post={data} />
            ))}
        </>
    )
}

export default Post
