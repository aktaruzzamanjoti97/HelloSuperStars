import React, { useState, useEffect } from 'react';
import { Users } from '../../../../../../../DummyData';
import LearnContent from './LearnContent';
import axios from "axios";



const Learn = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('api/user/getAllLearningSession').then(res =>{
            if(res.data.status === 200)
            {
                setPosts(res.data.post);
                console.log('learning',res.data.post);

            }          
        });
    }, []);

    return (
        <>
            {posts.map((u) => (
                <LearnContent key={u.id} post={u} />
            ))}
        </>
    )
}

export default Learn
