import React from 'react'
import PicMa from "../../../../../../images/05.jpg";
import DefaultImg from '../../.../../../../../../images/default.png'
const Default = () => {
return (
<>
  <div className=" MessengerBody py-3 ps-2 text-light">
    <h6 className="fw-bold mx-2">Group inbox</h6>

    <div className="top-right-messenger">

      <span><img src={PicMa} alt="" className="PicMessenger" /></span>
      <span><img src={PicMa} alt="" className="PicMessenger" /></span>
      <span><img src={PicMa} alt="" className="PicMessenger" /></span>
      <span className="messengerUser"> & 20 more</span>
    </div>
  </div>

  <div className="container MessageImgBody   ps-2 text-light ">

    <img src={DefaultImg} alt="" className='MessageImg' />
    <div className="ImgCenterText">
      <span className='fw-bold'>Join group to </span>
      <h3 className='fw-bold'>get full access</h3>
    </div>

  </div>

  <div className="d-flex MessengerFooter  py-2 ps-2 text-light">

    <div className="IconMessage col-md-3 me-3 d-flex">
      <i className="text-light IconMessageT m-2 fa-solid fa-circle-plus"></i>
      <i className="text-light IconMessageT m-2 fa-solid fa-image"></i>
      <i className="text-light IconMessageT m-2 fa-solid fa-face-smile-beam"></i>
    </div>

    <div className="IconMessage col-md-7 d-flex">
      <input type="text" className="MessageWidth ps-3" placeholder="type text..." />
    </div>

    <div className="IconMessage col-md-1 d-flex ms-2">
      <i class="m-2 me-3 text-light IconMessageT SendT text-left fa-brands fa-telegram"></i>
    </div>

  </div>
</>
)
}

export default Default