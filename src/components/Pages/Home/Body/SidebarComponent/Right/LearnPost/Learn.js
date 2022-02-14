import React, { useState, useEffect } from 'react';
import { Users } from '../../../../../../../DummyData';
import LearnContent from './LearnContent';
import axios from "axios";



const Learn = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let isMounted = true;
        axios.get('api/user/getAllLearningSession').then(res =>{
    
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                //   setLiveChat(res.data.livechats);
                    setInterval(() => {
                        setPosts(res.data.post);
                        //setstatus(false);
                    }, 300);
                    console.log(res.data.post);
                }
            }           
        });
    }, []);

    console.log(posts);
    return (
        <>
            
            {posts.map((u) => (
                <LearnContent key={u.id} post={u} />
            ))}
        </>
    )
}

export default Learn
