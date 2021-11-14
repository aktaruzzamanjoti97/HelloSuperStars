import React from 'react'
const UpLiveContent = props => {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                <img src={props.image} className="Live-RS-img" alt="Jane" />
                <span className="Live-RS-Name">{props.name}</span>
                </div>
            </div>
        </>
    )
}


export default UpLiveContent
