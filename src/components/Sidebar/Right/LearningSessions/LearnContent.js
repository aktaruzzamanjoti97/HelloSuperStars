import React from 'react'
import '../../../CSS/Sidebar/Right/Right.css'

export default function LearnContent({leran})  {
    return (
        <>

            <div class="column">
                <div className="column-bg">
                    <img src={leran.profilePicture} className="Live-RS-img img-fluid" alt={leran.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center p-text-liv"><small>{leran.username}</small></p>
                    </div>

                    <div class="ContentLight">
                        🔴
                    </div>

                </div>
            </div>
        </>
    )
}

