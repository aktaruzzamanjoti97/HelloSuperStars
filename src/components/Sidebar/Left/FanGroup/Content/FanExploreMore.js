import React from 'react'
import YoursImg from '../../../../../images/Profile/ShakibPost.jpg'

const FanExploreMore = () => {
  return (
    <>
      <div className="row mx-1 justify-content-between FanHome mt-3 py-3 ">
      <p className='text-light fw-bold'><i class="fa-solid fa-user-group IconFan p-2 text-warning">
                </i> &nbsp;Explore More</p>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <div className="FanBg"></div>
            <div className="bottom-Fan">Sakib Khan VS Jayed Khan</div>
            <button className='btn w-100 ExploreBtnMore btn-success'>Explore &nbsp;<i class="fa-solid fa-right-long"></i></button>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <div className="FanBg"></div>
            <div className="bottom-Fan">Pewdiepie VS Mr Beast</div>
            <button className='btn w-100 ExploreBtnMore btn-success'>Explore &nbsp;<i class="fa-solid fa-right-long"></i></button>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <div className="FanBg"></div>
            <div className="bottom-Fan">Sakib Khan VS Jayed Khan</div>
            <button className='btn w-100 ExploreBtnMore btn-success'>Explore &nbsp;<i class="fa-solid fa-right-long"></i></button>
        </div>
        <div className="YourGroups col-md-6 pb-3">
            <img src={YoursImg} className="YoursImg img-fluid" alt="" />
            <div className="FanBg"></div>
            <div className="bottom-Fan">Salman VS Shahrukh Fan group</div>
            <button className='btn w-100 ExploreBtnMore btn-success'>Explore &nbsp;<i class="fa-solid fa-right-long"></i></button>
        </div>
    </div>
    </>
  )
}

export default FanExploreMore
