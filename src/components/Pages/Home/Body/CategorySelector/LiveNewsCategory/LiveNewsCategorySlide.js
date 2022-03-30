import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { liveNewsData } from '../fakeCategoryData';

const LiveNewsCategorySlide = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        setList(liveNewsData)
    }, [list])

    const [select, setSelect] = useState({
        selectedCheckboxes: []
    });

    console.log(select.selectedCheckboxes);

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




return (
    <div className="bgCategory container containerCategorySelector mt-3">
    <div className="p-1 sliderCategory">
        <div className="d-flex">
            <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
            <small className="text-white mx-2"> Live News - Category </small>
        </div>

        <Slider {...settings}>
            {
                list.map((i, idx) => {
                    return (
                        <>
                            <div key={i.id} className="p-1">
                                <div>
                                    <img src={i.slider} alt="" className="img-fluid homePageCarouselImg" />
                                </div>
                                <div className="d-flex justify-content-center socialMedia">
                                    <div className="mx-1">
                                        <div class="content">
                                            <label class="switch m5">
                                                <input type="checkbox"
                                                  
                                                />
                                                <small></small>
                                            </label>
                                        </div>
                                    </div>
                                    <small className="text-white mx-1">{i.categoryName}</small>
                                </div>
                            </div>

                        </>
                    )
                })
            }
          
        </Slider>
    </div>

</div>
);
};

export default LiveNewsCategorySlide;