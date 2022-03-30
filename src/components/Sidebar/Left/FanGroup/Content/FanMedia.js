import React from 'react'
import Media from '../../../../../images/vuiuru1u.png'
import Media1 from '../../../../../images/tx40i2ib.png'
import Media2 from '../../../../../images/bmsrbccp.png'
import Media3 from '../../../../../images/e3fyn0v1.png'
import Media4 from '../../../../../images/1ukfvg1a.png'
import Media5 from '../../../../../images/ltfqhym3.png'
import '../Content/FanStar.css'
const FanMedia = () => {
return (
<>

    <div className="MediaBG mt-3">

        <div className="row ms-1 me-1">

            <img src={Media} className='img-fluid MediaImg col-md-4 m-2' alt="" />
            <img src={Media1} className='img-fluid MediaImg col-md-4 m-2' alt="" />
            <img src={Media2} className='img-fluid MediaImg col-md-4 m-2' alt="" />
            <img src={Media3} className='img-fluid MediaImg col-md-4 m-2' alt="" />
            <img src={Media4} className='img-fluid MediaImg col-md-4 m-2' alt="" />
            <img src={Media5} className='img-fluid MediaImg col-md-4 m-2' alt="" />

        </div>

    </div>

</>
)
}

export default FanMedia