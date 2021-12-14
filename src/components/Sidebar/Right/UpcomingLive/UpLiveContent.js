import React from 'react'
export default function UpLiveContent ({UpcLive}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={UpcLive.profilePicture} className="Live-RS-img" alt={UpcLive.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center"><small>{UpcLive.username}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}
