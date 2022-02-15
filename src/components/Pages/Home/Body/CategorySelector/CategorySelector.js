import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from "react-slick";
import slide4 from '../../../../../images/homepage/homepage/images/education.webp';
import slide3 from '../../../../../images/homepage/homepage/images/enterTainment.jpg';
import slide6 from '../../../../../images/homepage/homepage/images/fbInsta.jpg';
import slide1 from '../../../../../images/homepage/homepage/images/imagefs.jpg';
import slide5 from '../../../../../images/homepage/homepage/images/religion.jpg';
import slide2 from '../../../../../images/homepage/homepage/images/socialMedia.jpg';
import LeftArrow from '../../../../../images/left-arrow.svg';
import RightArrow from '../../../../../images/right-arrow.svg';
import './CategorySelector.css';


const CategorySelector = () => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );


    var settings = {
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bgCategory container">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                    <small className="text-white mx-2"> Category </small>
                </div>

                <Slider {...settings}>
                    <div className="p-1">
                        <div>
                            <img src={slide1} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Sports</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide2} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Live News</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide3} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Entertainment</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide4} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Education</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide5} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Religion</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide6} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Social Media</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide1} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Social Media</small>
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <img src={slide2} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">Social Media</small>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default CategorySelector;