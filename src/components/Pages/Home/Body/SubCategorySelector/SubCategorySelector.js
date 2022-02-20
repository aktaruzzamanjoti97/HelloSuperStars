import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import slide4 from '../../../../../images/homepage/images/education.webp';
import slide3 from '../../../../../images/homepage/images/enterTainment.jpg';
import slide6 from '../../../../../images/homepage/images/fbInsta.jpg';
import slide1 from '../../../../../images/homepage/images/imagefs.jpg';
import slide5 from '../../../../../images/homepage/images/religion.jpg';
import slide2 from '../../../../../images/homepage/images/socialMedia.jpg';

const sliderImageLink = [
    {
        id: 1,
        slider: slide1,
        categoryName: "Cricket"
    },
    {
        id: 2,
        slider: slide2,
        categoryName: "Football"
    },
    {
        id: 3,
        slider: slide3,
        categoryName: "Tennis"
    },
    {
        id: 4,
        slider: slide4,
        categoryName: "Hacky"
    },
    {
        id: 5,
        slider: slide5,
        categoryName: "Chess"
    },
    {
        id: 6,
        slider: slide6,
        categoryName: "Badminton"
    },
    {
        id: 7,
        slider: slide1,
        categoryName: "Golf"
    },
    {
        id: 8,
        slider: slide2,
        categoryName: "Volleyball"
    },
]

const SubCategorySelector = () => {

    const [imageInfo, setImageInfo] = useState({});

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        // <img src={LeftArrow} alt="prevArrow" {...props} />
        <FaArrowLeft {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <FaArrowRight {...props} />
    );


    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
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

    const toggleHandler = (item) => () => { 
        setImageInfo((state) => ({
            ...state,
            [item.id] : state[item.id]
                ? null
                : {
                    id: item.id,
                    slider: item.slider,
                    categoryName: item.categoryName
                }
        }))
    }

    
    return (
        <div className="bgCategory container containerCategorySelector mt-3">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <Link to='/'> <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button></Link>
                    <small className="text-white mx-2">Sub Category </small>
                </div>

                <Slider {...settings}>
                    {
                        sliderImageLink.map((i) => {
                            return (
                                <>
                                    <div  key={i.id} className="p-1">
                                        <div>
                                            <img src={i.slider} alt="" className="img-fluid homePageCarouselImg" />
                                        </div>
                                        <div className="d-flex justify-content-center socialMedia">
                                            <div className="mx-1">
                                                <div class="content">
                                                    <label class="switch m5">
                                                        <input onChange={toggleHandler(i)} type="checkbox" />
                                                        <small></small>
                                                    </label>
                                                </div>
                                            </div>
                                            <small className="text-white mx-1">{i.categoryName}</small>
                                        </div>
                                    </div>
                                    {

                                    }
                                </>
                            )
                        })
                    }
                    
                </Slider>
            </div>

        </div>
    );
};

export default SubCategorySelector;

