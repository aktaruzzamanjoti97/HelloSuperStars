import React, { useState } from "react";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import profilePhoto from "../../../../../images/Shakib/13.jpg";
import Jainamaz from "../../../../../images/LiveChat/Jainamaz.jpg";
import "../../../../CSS/Profile/Souviner/Souviner.css";
import smileImg from "../../../../../images/LiveChat/smileImg.jpg";
import { Carousel } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Souviner() {
const [more, setmore] = useState(false);
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
          <div className="text-center">
            <Carousel>
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
            </Carousel>
          </div>
          <h4 className="mt-3 mx-1 text-light">Jainamaz</h4>
          <h6 className="mt-3 mx-1  text-light">Live</h6>
          <p className="text-warning">19th Sep 2021 to 25th Sep 2021</p>

          <h6 className="mt-3 mx-1  text-light">Details</h6>
          <div className="souviner-details">
            <p className="text-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Adipisci nulla tempora asperiores iusto dicta iure rerum
              recusandae enim accusamus tenetur.{" "}
              <span className="seemore text-warning" onClick={()=> {
                setmore(!more);
                }}
                >
                see more
              </span>
            </p>

            {more ? (
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates voluptatibus dolorum magni, iure vel repellendus
              alias itaque voluptatem provident harum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Veritatis dolorum
              quis laboriosam modi, perferendis culpa minima, nemo atque
              sint ipsam temporibus omnis sit. A tenetur vel similique
              blanditiis corporis eius.
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
          <OwlCarousel className="owl-theme" loop margin={0} items={3} nav>
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
          ;
        </div>
      </div>

      <div className="card my-4 left-card-souviner mx-auto">
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
      </div>
    </div>

    <div className="col-md-4">
      <StarProfileRightContent />
    </div>
  </div>
</div>
);
}

export default Souviner;