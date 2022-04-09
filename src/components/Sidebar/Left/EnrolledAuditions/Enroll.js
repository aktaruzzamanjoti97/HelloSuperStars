import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  {Users} from '../../../../DummyData'
import EnrollContent from './EnrollContent';

const Enroll = () => {


    const [Users,setUsers] = useState([]);


    useEffect(()=>{

        axios.get('api/user/audition/enrolled').then(res =>{
            if(res.data.status === 200)
            {
                console.log('Enroll Auditions ',res.data.enrolledAuditions);
                setUsers(res.data.enrolledAuditions);

            }          
        });
    },[])


    return (
        <>
        
            {Users.map((e) => (
                <EnrollContent key={e.id} data={e} />
            ))}
        </>
    )
}

export default Enroll
