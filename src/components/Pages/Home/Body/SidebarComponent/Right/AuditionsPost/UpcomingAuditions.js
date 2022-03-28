import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { Users } from '../../../../../../../DummyData';
import AuditionsContent from './UpcomingAuditionsContent';


const UpcomingAuditions = () => {

    const[Users, setUpcomingAuditions] = useState([]);
    useEffect(()=>{

        axios.get("/api/user/getUpcomingAuditions").then((res) => {
            if (res.data.status === 200) {
                //console.log('upcomingAuditions',res.data.upcomingAuditions)
                setUpcomingAuditions(res.data.upcomingAuditions);
                
            }
  
        });
    },[])

    return (
        <>
            {Users.map((e) => (
                <AuditionsContent key={e.id} user={e} />
            ))}
        </>
    )
}

export default UpcomingAuditions
