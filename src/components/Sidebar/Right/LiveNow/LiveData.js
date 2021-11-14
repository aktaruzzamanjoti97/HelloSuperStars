import React from 'react'
import LiveContent from './LiveContent'
import Shakib from "../../../../images/Profile/Shakibpro.png"

const LiveData = props => {
    return (
        <>
            <LiveContent
                image={Shakib}
                name="Shakib All Hasan"
            /> 
            <LiveContent
                image={Shakib}
                name="Ayman Saddiq"
            />
        </>
    )
}

export default LiveData
