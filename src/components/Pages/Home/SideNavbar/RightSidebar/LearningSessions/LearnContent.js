import React from 'react'
const LearnContent = props => {
    return (
        <>

            <div class="column">
                <img src={props.image} className="Live-RS-img" alt="Jane" />
                <span className="Live-RS-Name">{props.name}</span>
            </div>
        </>
    )
}


export default LearnContent
