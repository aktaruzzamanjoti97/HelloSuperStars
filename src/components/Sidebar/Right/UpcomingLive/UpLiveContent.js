import React from 'react'
import '../../../CSS/Sidebar/Right/Right.css'

export default function UpLiveContent ({UpcLive}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={UpcLive.profilePicture} className="Live-RS-img img-fluid" alt={UpcLive.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center p-text-liv"><small>{UpcLive.username}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}
