import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import slide4 from '../../../../../../images/homepage/homepage/images/education.webp';
import slide3 from '../../../../../../images/homepage/homepage/images/enterTainment.jpg';
import slide6 from '../../../../../../images/homepage/homepage/images/fbInsta.jpg';
import slide1 from '../../../../../../images/homepage/homepage/images/imagefs.jpg';
import slide5 from '../../../../../../images/homepage/homepage/images/religion.jpg';
import slide2 from '../../../../../../images/homepage/homepage/images/socialMedia.jpg';
import SubCategoryHomePage from '../SubCategoryHomePage';



const sliderImageLink = [
    {
        id: 1,
        slider: slide1,
        categoryName: "Sports"
    },
    {
        id: 2,
        slider: slide2,
        categoryName: "Live News"
    },
    {
        id: 3,
        slider: slide3,
        categoryName: "Entertainment"
    },
    {
        id: 4,
        slider: slide4,
        categoryName: "Education"
    },
    {
        id: 5,
        slider: slide5,
        categoryName: "Religion"
    },
    {
        id: 6,
        slider: slide6,
        categoryName: "Social Media"
    },
    {
        id: 7,
        slider: slide1,
        categoryName: "Sports"
    },
    {
        id: 8,
        slider: slide2,
        categoryName: "LiveNews"
    },
]


const SubCategorySelector = (id) => {

    const selectedSubCategory = sliderImageLink.find((single) => single.id === id);
    console.log(selectedSubCategory);

    const [imageInfo, setImageInfo] = useState([]);
    const history = useHistory();

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
        setImageInfo((state) => ([...state, {
            id: item.id,
            slider: item.slider,
            categoryName: item.categoryName
        }
        ]))
    }

    const handleSubCategory = (id) => {

        const selectedCategory = imageInfo.filter((imgData) => id === imgData.id)

        return (
            <>
                {
                    selectedCategory.length ? <SubCategoryHomePage id={id} /> : null
                }
            </>
        )
    }

    return (
        <div className="bgCategory container containerCategorySelector mt-3">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                    <small className="text-white mx-2"> Sub Category </small>
                </div>

                <Slider {...settings}>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input  type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
                        </div>
                        <div className="d-flex justify-content-center socialMedia">
                            <div className="mx-1">
                                <div class="content">
                                    <label class="switch m5">
                                        <input  type="checkbox" />
                                        <small></small>
                                    </label>
                                </div>
                            </div>
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    <div key={selectedSubCategory.id} className="p-1">
                        <div>
                            <img src={selectedSubCategory.slider} alt="" className="img-fluid homePageCarouselImg" />
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
                            <small className="text-white mx-1">{selectedSubCategory.categoryName}</small>
                        </div>
                    </div>
                    {/* {
                        sliderImageLink.map((i) => {
                            return (
                                <>


                                </>
                            )
                        })
                    } */}
                </Slider>
            </div>

        </div>
    );
};

export default SubCategorySelector;