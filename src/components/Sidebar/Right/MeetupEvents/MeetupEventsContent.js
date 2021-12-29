import React from 'react'

export default function MeetupEventsContent ({Audition}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                <img src={Audition.profilePicture} className="Live-RS-img img-fluid" alt={Audition.profilePicture} />
                <div className="Live-rs-text-parent">
                        <p className="text-center p-text-liv"><small>{Audition.username}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}
