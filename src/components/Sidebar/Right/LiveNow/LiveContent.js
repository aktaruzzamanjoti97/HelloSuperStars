import React from 'react'
import './LiveContent.css'

export default function LiveContent ({Live}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={Live.profilePicture} className="Live-RS-img" alt={Live.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center"><small>{Live.username}</small></p>
                    </div>

                    <div class="ContentLight">
                        🔴
                    </div>

                </div>
            </div>
        </>
    )
}
