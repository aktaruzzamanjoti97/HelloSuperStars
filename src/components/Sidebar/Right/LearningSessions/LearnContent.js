import React from 'react'

export default function LearnContent({leran})  {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={leran.profilePicture} className="Live-RS-img" alt={leran.profilePicture} />
                    <div className="Live-rs-text-parent">
                        <p className="text-center"><small>{leran.username}</small></p>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

