import React from 'react'
import AuditionsContent from './AuditionsContent'
import Shakib from "../../../../../../images/Profile/Shakibpro.png"

const AuditionsData = props => {
    return (
        <>
            <AuditionsContent
                image={Shakib}
                name="Shakib All Hasan"
            /> 
            <AuditionsContent
                image={Shakib}
                name="Ayman Saddiq"
            />
        </>
    )
}

export default AuditionsData
