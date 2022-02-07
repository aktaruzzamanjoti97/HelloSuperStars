import React, { useState } from "react";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import profilePhoto from "../../../../../images/Shakib/13.jpg";
import Jainamaz from "../../../../../images/LiveChat/balhasan.jpg";
import "../../../../CSS/Profile/Souviner/Souviner.css";
import smileImg from "../../../../../images/LiveChat/smileImg.jpg";
import { Carousel } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SouvinerModal from "./StarChat/SouvinerModal";
function Souviner({star_id}) {
const [more, setmore] = useState(false);
const [modalShow, setModalShow] = React.useState(false);
return (
<div className="container">
  <div className="row">
    <div className="col-md-8 mt-3">
      <div className="card left-col-box PostCard mb-3 mt-3 left-card-souviner mx-auto">
        <div className="accordion-item PostBack d-flex justify-content-between">
          <h2 className="accordion-header PostBack">
            <div className="accordion-button-fx profile1-accordion-button PostBack  collapsed">
              <img src={profilePhoto} className="PostImgHome" alt="..." />
              <span className="mx-2 text-warning text-light">
                Shakib Al Hasan
                <br></br>
                <small className="category-size-chat ">
                  <span className="Post-small-text">5.31pm</span>
                </small>
                <small className="category-size-chat ">
                  <span className="Post-small-text-r">2nd july</span>
                </small>
              </span>
            </div>
          </h2>
          <div className="">
            <button className="btn btn-sm btn-danger mx-2 px-3">Live</button>
          </div>
        </div>

        <div className="card-body ">
          <div className="text-center ">
          <img src={Jainamaz} alt="" className="img-fluid" />
            {/* <Carousel>
              <Carousel.Item>
                <img src={Jainamaz} className="img-fluid souviner-img" alt="" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Jainamaz} className="img-fluid souviner-img" alt="" />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Jainamaz} className="img-fluid souviner-img" alt="" />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
          <h4 className="mt-3 mx-1 text-light">Gloves</h4>
          <h6 className="mt-3 mx-1  text-light">Live</h6>
          <p className="text-warning">19th Sep 2021 to 25th Sep 2021</p>

          <h6 className="mt-3 mx-1  text-light">Details</h6>
          <div className="souviner-details">
            <p className="text-light">
            The 33-year-old, whose two-year ban from the ICC coincided with the suspension from international cricket, followed...
              <span className="seemore text-warning" onClick={()=> {
                setmore(!more);
                }}
                >
                see more
              </span>
            </p>

            {more ? (
            <p className="text-light">
             teammate Mushfiqur Rahim, who auctioned the bat in 2013 after winning the first double ODI in Bangladesh has been restored. Four times the base amount before the end of the auction on a Facebook page on Wednesday night. The funds raised from Shakib's bat will be donated to his foundation to fight the epidemic.
            </p>
            ) : (
            ""
            )}
          </div>
        </div>
      </div>

      <div className="card my-4 left-card-souviner mx-auto">
        <div className="card-body">
          <h5 className="card-title text-warning">Biding</h5>
          <OwlCarousel className="owl-theme" loop margin={0} items={4} nav>
            <div className="item">
              <div className="card loopCard h-25">
                <div className="text-center">
                  <img src={smileImg} className="img-fluid rounded-circle" height="50px" width="50px" alt="" />
                </div>
                <div className="card-body text-center">
                  <h6 className="card-title simleName">Mr. Abul</h6>
                  <p className="card-text">2000 BDT</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
          
          
        </div>
        <div className="participate-btn my-2 mx-3">
  <button className="btn btn-warning px-5 py-2" onClick={() => setModalShow(true)}>
Participate Now!
  </button>
</div>

<SouvinerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
      </div>

    

      {/* <div className="card my-4 left-card-souviner mx-auto">
        <div className="card-body">
          <h5 className="card-title text-warning">Start Biding</h5>

          <form>
            <div className="row">
              <div className="col">
                <input type="number" className="form-control souviner-form" placeholder="Price" />
              </div>
              <div className="col">
                <input type="password" className="form-control souviner-form" placeholder="Password" />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col ">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-light mx-1" for="flexCheckDefault">
                  <small> Stay Anonmyous</small>
                </label>
              </div>
              <div className="col">
                <button className='w-100 btn btn-warning'>Bid</button>
              </div>
            </div>
          </form>

        </div>
      </div> */}

    </div>

    <div className="col-md-4">
      <StarProfileRightContent star_id={star_id} />
    </div>
  </div>
</div>
);
}

export default Souviner;