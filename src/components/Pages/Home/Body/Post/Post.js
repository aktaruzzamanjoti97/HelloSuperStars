import React, { useState, useEffect } from 'react';
import PostContent from './PostContent'
import SkeletonArticle from '../Post_skaliton/SkeletonArticle';
import axios from "axios";


const Post = () => {
    
    const [posts, setPosts] = useState([])
    const [status, setstatus] = useState(true)

    console.log('posts ', posts);
    
    useEffect(() => {
        let isMounted = true;
        axios.get('api/user/all_post').then(res =>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
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
            {/* {status && [1,2,3,4].map(() => <SkeletonArticle theme="dark"/> )}
            
            {posts && posts.map((data) => (
                <PostContent key={data.id} post={data} />
            ))} */}
        </>
    )
}

export default Post
