import React, {useState, useEffect} from 'react';
import { Users } from '../../../../../../../DummyData';
import MeetupContent from './MeetupContent';
import axios from 'axios';

const Meetup = () => {
    const [meetupList, setMeetuplist] = useState([]);

    useEffect(() => {
        axios.get(`/api/user/meetupEventList`).then(res =>{
          console.log(res.data.meetup);
          if(res.status === 200)
          {
            setMeetuplist(res.data.meetup)
          }
        });
      }, []);


    console.log(meetupList);
    return (
        <>
            {meetupList.map((meetupList) => (
                <MeetupContent key={meetupList.id} event={meetupList} />
            ))}
            
        </>
    )
}

export default Meetup
