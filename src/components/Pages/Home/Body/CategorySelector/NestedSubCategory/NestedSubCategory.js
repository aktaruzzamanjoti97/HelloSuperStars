import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import '../CategorySelector.css';
import { nestedCategoryData } from '../fakeCategoryData';


const NestedSubCategory = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(nestedCategoryData)
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };



    const handleSubCategory = (obj) => {

        const selectedCategory = select.selectedCheckboxes.filter((data) => obj.id === data.id)
        console.log('SelectedCategory', selectedCategory);


        return (
            <>

                {selectedCategory.length ? history.push('/selector-sub-category') : null}


            </>
        )
    }



    const { selectedCheckboxes } = select;

    return (
        <div className="bgCategory container containerCategorySelector mt-3">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                    <small className="text-white mx-2"> Cricket </small>
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

                </Slider>
            </div>

        </div>
    );
};

export default NestedSubCategory;