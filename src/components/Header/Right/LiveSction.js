import React from 'react'

const LiveSection = ({Live}) => {
return (
<>

  <div className="item  ">
    <img src={Live.profilePicture} className='LivePIcM' alt={Live.profilePicture}/>
    <div class="top-right-c">🔴</div>
    <div class="LivePIcM_t">{Live.username}</div>
  </div>

</>
)
}

export default LiveSection