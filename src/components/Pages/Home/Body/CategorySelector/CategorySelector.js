import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import slide4 from '../../../../../images/homepage/homepage/images/education.webp';
import slide3 from '../../../../../images/homepage/homepage/images/enterTainment.jpg';
import slide6 from '../../../../../images/homepage/homepage/images/fbInsta.jpg';
import slide1 from '../../../../../images/homepage/homepage/images/imagefs.jpg';
import slide5 from '../../../../../images/homepage/homepage/images/religion.jpg';
import slide2 from '../../../../../images/homepage/homepage/images/socialMedia.jpg';
import './CategorySelector.css';
import { fakeCategoryData } from './fakeCategoryData';

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


const CategorySelector = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(fakeCategoryData)
    }, [list])

    const [select, setSelect] = useState({
        selectedCheckboxes: []
    });

    console.log(select.selectedCheckboxes);

    const onChange = (obj) => {
        const selectedCheckboxes = select.selectedCheckboxes;

        // Find index
        const findIdx = selectedCheckboxes.indexOf(obj);

        // Index > -1 means that the item exists and that the checkbox is checked
        // and in that case we want to remove it from the array and uncheck it
        if (findIdx > -1) {
            selectedCheckboxes.splice(findIdx, 1);
        } else {
            selectedCheckboxes.push(obj);
        }

        setSelect({
            selectedCheckboxes: selectedCheckboxes
        });
    };


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



    const handleSubCategory = (obj) => {

        const selectedCategory = select.selectedCheckboxes.filter((data) => obj.id === data.id)
        console.log('SelectedCategory', selectedCategory);



        function statementFunction() {
            selectedCategory.map((single) => {
                return (
                    <>
                        {
                            single.categoryName == 'Sports' ? history.push('/sport-category') : single.categoryName == 'Live News' ? history.push('/live-news-category') : single.categoryName == 'Entertainment' ? history.push('/entertainment-category') : single.categoryName == 'Education' ? history.push('/education-category') : single.categoryName == 'Religion' ? history.push('/religion-category') : null 
                        }
                        
                    </>
                )
            })

        }


        return (
            <>

                {selectedCategory.length ? statementFunction() : null}


            </>
        )
    }

    // useEffect(() => {
    //     console.log(imageInfo);
    // }, [imageInfo])

    const { selectedCheckboxes } = select;

    return (
        <div className="bgCategory container containerCategorySelector mt-3">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                    <small className="text-white mx-2"> Category </small>
                </div>

                <Slider {...settings}>
                    {
                        list.map((i, idx) => {
                            return (
                                <>
                                    <div key={i.id} className="p-1">
                                        <div>
                                            <img onClick={() => handleSubCategory(i)} src={i.slider} alt="" className="img-fluid homePageCarouselImg" />
                                        </div>
                                        <div className="d-flex justify-content-center socialMedia">
                                            <div className="mx-1">
                                                <div class="content">
                                                    <label class="switch m5">
                                                        <input type="checkbox"
                                                            onChange={() => onChange(i)}
                                                            selected={selectedCheckboxes.includes(i.id)}
                                                        // handleSubCategory = {() => handleSubCategory(idx)}
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
                    {/* <div className="p-1">
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
                    </div> */}
                </Slider>
            </div>

        </div>
    );
};

export default CategorySelector;