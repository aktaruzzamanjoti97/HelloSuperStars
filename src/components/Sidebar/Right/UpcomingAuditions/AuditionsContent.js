import React from 'react'
export default function AuditionsContent ({Audition}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                <img src={Audition.profilePicture} className="Live-RS-img" alt={Audition.profilePicture} />
                <div className="Live-rs-text-parent">
                        <p className="text-center"><small>{Audition.username}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

