import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import jhakanaka from '../../../../../images/jhakanaka.png';
import './PromoVideo.css';
const Links = ["https://www.youtube.com/watch?v=Ruv3VLFh5iM", "https://www.youtube.com/watch?v=Iuy8Hft2Hy0&list=PL4LV3R46qAC_WExDhBdvZsW-u8tYDQbE9", "https://www.youtube.com/watch?v=uldI_cQhQe0", "https://www.youtube.com/watch?v=jxojteqxuoI", "https://www.youtube.com/watch?v=gEZDHI6X97o"];


const PromoVideo = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [videoIndex, setVideoIndex] = useState(0);

    const settings = {
        autoplay: true,
        infinite: true,
        lazyLoad: false,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setVideoIndex(next),
    };

    return (
        <div className="mt-3 promoSlider">
            {/* <Slider className="" {...settings}>
                {Links.map((video, i) => (
                    <Card className="">
                        <Card.Body className={i === videoIndex ? "slide activeSlide videoCard" : "slide videoCard"}>
                            <ReactPlayer

                                url={video}
                                playing={i === videoIndex ? true : false}
                                muted={true}
                                controls={true}
                                width="100%"
                                height="25vh"
                            />
                        </Card.Body>

                    </Card>
                ))}

               
            </Slider> */}
            <img src={jhakanaka} className="img-fluid" alt="" />

        </div>
    );
};

export default PromoVideo;