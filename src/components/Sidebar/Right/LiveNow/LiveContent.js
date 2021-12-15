import React from 'react'
import './LiveContent.css'
import '../../../CSS/Sidebar/Right/Right.css'

export default function LiveContent ({Live}) {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={Live.profilePicture} className="Live-RS-img img-fluid" alt={Live.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center p-text-liv"><small>{Live.username}</small></p>
                    </div>

                    <div class="ContentLight">
                        🔴
                    </div>

                </div>
            </div>
        </>
    )
}
