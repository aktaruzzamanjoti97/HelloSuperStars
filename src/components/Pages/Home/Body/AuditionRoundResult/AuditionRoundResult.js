import React from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "./AuditionRoundResult.css";
import people from "../../../../../images/Audition-images/Group.png";
import bar from "../../../../../images/Audition-images/Group1137.png";
import star from "../../../../../images/Audition-images/Group1111.png";
import dash from "../../../../../images/Audition-images/Group1176.png";

const AuditionRoundResult = () => {
  var settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="auditionRoundBg">
      <p className='p-3 colorTitle' >Result</p>
      <div className="bottomLineBlack"></div>
      <p className='p-3 colorTitle'>Your uploaded Round 1 videos</p>
      <div className="bottomLineBlack"></div>

      <div>
        <Slider {...settings}>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
              className="img-fluid"
              playing={false}
              volume={1}
              height=""
            />
            <div className="divBlackResult d-flex justify-content-around py-2 mt-2">
              <div>
                <img height="25px" src={people} alt="" />
                <div className="mark mt-2 text-center">20</div>
              </div>
              <div>
                <img height="25px" src={bar} alt="" />
                <div className="mark mt-2 text-center">15</div>
              </div>
              <div>
                <img height="25px" src={star} alt="" />
                <div className="mark mt-2 text-center">10</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="totalMarkBg p-3 mt-3 d-flex justify-content-around">
        <div>
          <img width="50px" src={dash} alt="" />
        </div>

        <div className="yourTotalMark p-2 d-flex align-items-center">
          <p>
            <big className="text-white">Your Total Mark</big>
          </p>
        </div>

        <div className="yourTotalMark p-2">
          <h1 className="fw-bolder text-light px-2">86</h1>
        </div>

        <div className="qualifiedMessage d-flex justify-content-center align-items-center">
          <h4 className="fw-bold text-white p-1">You are not qualified for the next round</h4>
        </div>
      </div>

      <div className='appealRequestBtn text-center p-4'>
          <button className='appealBtn'>Appeal Request</button>
      </div>
    </div>
  );
};

export default AuditionRoundResult;
