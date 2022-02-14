import React from 'react';
import Slider from "react-slick";
import './CategorySelector.css';
import homePageCarousel from '../../../../../images/Homepage.png'

const CategorySelector = () => {


    var settings = {
        // autoplay: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
        <div className="bgCategory">
            <h5 className="text-white"> Category </h5>
            <Slider {...settings}>
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
                <div className="p-3">
                    <div>
                        <img src={homePageCarousel} alt="" className="img-fluid homePageCarouselImg" />
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
    );
};

export default CategorySelector;