import React from 'react'
const Online = props => {
    return (
        <>
            <div className="accordion-header chatListname" id="headingTwo">
                
                <span> 
                    <img src={props.image} alt="" className="SidebarStarListImage"/>
                </span>
                
                <span className="OnlineGreen"><i class="fas fa-circle"></i></span>
                <span className='chatName'>{props.name}</span>
               
            </div>  
        </>
    )
}

export default Online

