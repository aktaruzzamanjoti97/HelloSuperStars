import React from 'react'
import '../../CSS/Navbar.css'
import $ from 'jquery'
import {Link, withRouter} from 'react-router-dom'

const SideNavbar = ({history}) => {

console.log(history)
const getColor=(curr)=>
{
if (history.location.pathname===curr)
return "#FFAD00"
}


$(document).ready(function(){
$('.nav_btn').click(function(){
$('.mobile_nav_items').toggleClassNclassName('active');
});
});

return (
    <>

      <header>
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
          {/* <h3>Coding <span>Snow</span></h3> */}
        </div>
        <div className="right_area">
          {/* <Link className="logout_btn">Logout</Link> */}
        </div>
      </header>

      <div className="mobile_nav">
        <div className="nav_bar">
          {/* <img src="1.png" className="mobile_profile_image" alt="" /> */}
          <i className="fa fa-bars nav_btn"></i>
        </div>
        <div className="mobile_nav_items">
          <Link to='/admin/'style={{backgroundColor:getColor('/admin')}}><i className="fas fa-desktop"></i><span>Dashboard</span></Link>
          <Link to='/admin/progressbar' style={{backgroundColor:getColor('/admin/progressbar')}}><i className="fas fa-cogs"></i><span>Progress bar</span></Link>
          <Link to='/admin/'><i className="fas fa-table"></i><span>Audition</span></Link>
          <Link to='/admin/live-video'  style={{backgroundColor:getColor('/admin/live-video')}}><i className="fas fa-th "></i><span>Live Video</span></Link>
          <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Meetup Events</span></Link>
          <Link to='/admin/live-chat' style={{backgroundColor:getColor('/admin/live-chat')}}><i className="fas fa-info-circle"></i><span>Live Chat</span></Link>
          <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Greetings</span></Link>
          <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Souvenir</span></Link>
          <Link to='/admin/'> <i className="fas fa-info-circle"></i><span>Wallet</span></Link>
          <Link to='/admin/'><i className="fas fa-sliders-h"></i><span>Settings</span></Link>
        </div>
      </div>

      <div className="sidebar">

        <Link to='/admin/'style={{backgroundColor:getColor('/admin')}}><i className="fas fa-desktop"></i><span>Dashboard</span></Link>
        <Link to='/admin/progressbar' style={{backgroundColor:getColor('/admin/progressbar')}}><i className="fas fa-cogs"></i><span>Progress bar</span></Link>
        <Link to='/admin/'><i className="fas fa-table"></i><span>Audition</span></Link>
        <Link to='/admin/live-video'  style={{backgroundColor:getColor('/admin/live-video')}}><i className="fas fa-th"></i><span>Live Video</span></Link>
        <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Meetup Events</span></Link>
        <Link to='/admin/live-chat' style={{backgroundColor:getColor('/admin/live-chat')}}><i className="fas fa-info-circle"></i><span>Live Chat</span></Link>
        <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Greetings</span></Link>
        <Link to='/admin/'><i className="fas fa-info-circle"></i><span>Souvenir</span></Link>
        <Link to='/admin/'> <i className="fas fa-info-circle"></i><span>Wallet</span></Link>
        <Link to='/admin/'><i className="fas fa-sliders-h"></i><span>Settings</span></Link>

      </div>

    </>
  )
}

export default withRouter(SideNavbar)