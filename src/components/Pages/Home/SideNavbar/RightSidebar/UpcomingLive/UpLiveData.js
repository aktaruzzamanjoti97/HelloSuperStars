import React from 'react'
import UpLiveContent from './UpLiveContent'
import Shakib from "../../../../../../images/Profile/Shakibpro.png"

const UpLiveData = props => {
    return (
        <>
            <UpLiveContent
                image={Shakib}
                name="Shakib All Hasan"
            /> 
            <UpLiveContent
                image={Shakib}
                name="Ayman Saddiq"
            />
        </>
    )
}

export default UpLiveData
