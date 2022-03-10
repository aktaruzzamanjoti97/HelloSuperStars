import React from 'react'
import { Link } from 'react-router-dom'
import YoursImg from '../../../../../images/Profile/ShakibPost.jpg'
import './FanStar.css'

const FanYoursGroup = () => {
return (
<>
    <div className="row mx-1 justify-content-between FanHome mt-3 py-3 ">
        <p className='text-light fw-bold'><i class="fa-solid fa-user-group IconFan p-2 text-warning">
            </i> Yours Groups</p>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <Link to='/your-group'> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
                    class="fa-solid fa-right-long"></i></button></Link>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <Link to='/your-group'> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
                    class="fa-solid fa-right-long"></i></button></Link>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <Link to='/your-group'> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
                    class="fa-solid fa-right-long"></i></button></Link>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <Link to='/your-group'> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
                    class="fa-solid fa-right-long"></i></button></Link>
        </div>
    </div>
</>
)
}

export default FanYoursGroup