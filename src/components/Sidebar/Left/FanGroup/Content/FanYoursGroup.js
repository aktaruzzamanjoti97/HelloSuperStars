import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import YoursImg from '../../../../../images/Profile/ShakibPost.jpg'

const FanYoursGroup = () => {

  
    const [useFanGroup, setFanUserGroup] = useState([]);
    console.log("fanPost yyyyyyy ", useFanGroup);

    // useEffect(() => {
    //     axios.get(`/api/user/fan/group/post/show/${slug}`).then((res) => {
    //         console.log("fan Group", res.data);
    //         if (res.status === 200) {
    //           setFanUserGroup(res.data.useFanGroup);
    //         }
    //     });
    // }, [slug]);

    useEffect(() => {
      axios.get(`/api/user/fan/group/list`).then(res => {
        console.log('My res ',res.data);
        if (res.status === 200) {
          setFanUserGroup(res.data.useFanGroup)
        }
  
      });
    }, []);

    

  
  return (
    <>
      <div className="row mx-1 justify-content-between FanHome mt-3 py-3 ">
      <p className='text-light fw-bold'><i class="fa-solid fa-user-group IconFan p-2 text-warning">
                </i> &nbsp;Yours Groups</p>

          {useFanGroup.map((fan, index) => (
            <div className="YourGroups col-md-6 pb-3">
                <img src={`http://localhost:8000/${fan.banner}`} className="YoursImg img-fluid" alt="" />
                <div className="FanBg"></div>
                <div className="bottom-Fan">{fan.group_name}</div>
                {/* <button className='btn w-100 ExploreBtnMore btn-success'>Explore &nbsp;<i class="fa-solid fa-right-long"></i></button> */}
                <Link to={`group/${fan.slug}`}> <button className='btn w-100 ExploreBtn'>Explore &nbsp;<i
              class="fa-solid fa-right-long"></i></button></Link>
              
            </div>
          ))}
    </div>
    </>
  )
}

export default FanYoursGroup
