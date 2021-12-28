import React from 'react'
import { Meetup } from '../../../../DummyData';
import MeetupEventsContent from './MeetupEventsContent';

const MeetupEvents = () => {
    console.log(Meetup);
    const first2=Meetup.slice(0,2);
    console.log(first2);

    return (
        <>
      
            {first2.map((a) => (
            <MeetupEventsContent key={a.id} Audition={a} name='check' />
            ))}
        </>
    )
}

export default MeetupEvents

