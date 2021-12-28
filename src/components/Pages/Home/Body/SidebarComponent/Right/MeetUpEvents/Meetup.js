import React from 'react'
import { Users } from '../../../../../../../DummyData';
import MeetupContent from './MeetupContent';

const Meetup = () => {
    console.log(Users);
    return (
        <>
            {Users.map((u) => (
                <MeetupContent key={u.id} user={u} />
            ))}
        </>
    )
}

export default Meetup
