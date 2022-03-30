import {React,useState} from "react";
import { Collapse, Container } from "react-bootstrap";
import CommentPro from "./CommentPro";
import Lock from '../../../../images/lockScreen.png'
import { Link } from "react-router-dom";
const RightSideCard = (props) => {
const [open, setOpen] = useState(false);
return (
<>
  <div className="card left-col-box mb-3">
    <div className=" container">
      <div className="row">
        <div className=" col-2 mt-2">
          <img src={props.profileLogo} className="PostImgHome" alt={props.profileLogo} />
        </div>
        <div className="col-10 mt-2">
          <h6 className='text-light'>{props.Name}</h6>
          <small className='profile-time-text'>5:31pm</small> <small className='profile-time-text'>2nd july</small>
        </div>
      </div>
    </div>

    <div className="container my-2 text-light">
      <p>
        {props.Msg} <i className="far fa-heart mx-1"></i>
      </p>
    </div>

    <div className="card PostCard">
      <img src={props.profileImg} alt="..." />
    </div>

    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <i className="fas fa-heart heart mx-1 "></i>
            <small className="profile-card-text">240</small>
          </div>
          <div className="col-8 d-flex justify-content-around">
            <div className="right-text">
              {/* <i className="fas fa-comment  text-light mx-1"></i> */}

              <small className=" profile-card-text">160 Comment</small>
            </div>
            <div className="left-text">
              {/* <i className="fas fa-share d-inline text-light mx-1"></i> */}

              <small className="d-inline profile-card-text">250 Share</small>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr-line" />

      <div className="text-center">
        <button className="btn btn-warning mt-1">
          <i className="fas fa-heart text-danger  mx-1"></i>
          <small className="text-light"> Like</small>
        </button>
        <button className="btn btn-warning mx-2 mt-1" variant="link" onClick={()=> setOpen(!open)}
          aria-expanded={open} aria-controls="collapseID">
          <i className="fas fa-comment  mx-1 "></i>
          <small> Comment</small>
        </button>
        <button className="btn btn-warning mt-1">
          <i className="fas fa-share  mx-1"></i>
          <small> Share</small>
        </button>
      </div>

      {/* Comment Section */}
      <Collapse in={open}>
        <div id="collapseID">
          <CommentPro />
        </div>
      </Collapse>

    </div>
  </div>

  <div className="card left-col-box mb-3">
    <div className=" container">
      <div className="row">
        <div className=" col-2 mt-2">
          <img src={props.profileLogo} className="PostImgHome" alt={props.profileLogo} />
        </div>
        <div className="col-10 mt-2">
          <h6 className='text-light'>{props.Name}</h6>
          <small className='profile-time-text'>5:31pm</small> <small className='profile-time-text'>2nd july</small>
        </div>
      </div>
    </div>

    <div className="container my-2 text-light">
      <p>
        {props.Msg} <i className="far fa-heart mx-1"></i>
      </p>
    </div>

    <div className="card PostCard">
      <img src={props.profileImg} alt="..." className="Blur_vp" />
      <div class="centered-p-c-d">
      <center><img src={Lock} alt={Lock} className="LockWidth" /></center>
        <center> 
          <Link to="/starprofile/4/unlock-pay" className="link-starPorfile">
            <button className="btn bg-warning fw-bold UnlockBtnV">Unlock Now for 10$</button>  
          </Link>
        </center>
                      
      </div>
    </div>

    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <i className="fas fa-heart heart mx-1 "></i>
            <small className="profile-card-text">240</small>
          </div>
          <div className="col-8 d-flex justify-content-around">
            <div className="right-text">
              {/* <i className="fas fa-comment  text-light mx-1"></i> */}

              <small className=" profile-card-text">160 Comment</small>
            </div>
            <div className="left-text">
              {/* <i className="fas fa-share d-inline text-light mx-1"></i> */}

              <small className="d-inline profile-card-text">250 Share</small>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr-line" />

      <div className="text-center">
        <button className="btn btn-warning mt-1">
          <i className="fas fa-heart text-danger  mx-1"></i>
          <small className="text-light"> Like</small>
        </button>
        <button className="btn btn-warning mx-2 mt-1" variant="link" onClick={()=> setOpen(!open)}
          aria-expanded={open} aria-controls="collapseID">
          <i className="fas fa-comment  mx-1 "></i>
          <small> Comment</small>
        </button>
        <button className="btn btn-warning mt-1">
          <i className="fas fa-share  mx-1"></i>
          <small> Share</small>
        </button>
      </div>

      {/* Comment Section */}
      <Collapse in={open}>
        <div id="collapseID">
          <CommentPro />
        </div>
      </Collapse>

    </div>
  </div>
</>
);
};

export default RightSideCard;