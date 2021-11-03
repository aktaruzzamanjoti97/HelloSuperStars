import React from 'react'
import LearnContent from './LearnContent'
import Shakib from "../../../../../../images/Profile/Shakibpro.png"

const LearnData = props => {
    return (
        <>
            <LearnContent
                image={Shakib}
                name="Shakib All Hasan"
            /> 
            <LearnContent
                image={Shakib}
                name="Ayman Saddiq"
            />
        </>
    )
}

export default LearnData
