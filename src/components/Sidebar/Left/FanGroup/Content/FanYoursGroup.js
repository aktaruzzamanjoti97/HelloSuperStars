import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YoursImg from '../../../../../images/Profile/ShakibPost.jpg'
import './FanStar.css'

const FanYoursGroup = () => {
  const [fanList, setFanList] = useState([]);
  useEffect(() => {
    axios.get(`/api/user/fan/group/list`).then(res => {
      // console.log(res.data.category);
      if (res.status === 200) {
        setFanList(res.data.fanList)
      }

    });
  }, []);

  return (
    <>
      <div className="row mx-1 justify-content-between FanHome mt-3 py-3 ">
        <p className='text-light fw-bold'><i class="fa-solid fa-user-group IconFan p-2 text-warning">
        </i> Yours Groups</p>

        {fanList.map((fan, index) => (
          <div className="YourGroups col-md-6 pb-3">
            <img src={`http://localhost:8000/${fan.banner}`} className="YoursImg img-fluid" alt="" />
            <div className="FanBg"></div>
            <div className="bottom-Fan">{fan.group_name}</div>
            <Link to={`group/${fan.slug}`}> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
              class="fa-solid fa-right-long"></i></button></Link>
          </div>
        ))}


      </div>
    </>
  )
}

export default FanYoursGroup