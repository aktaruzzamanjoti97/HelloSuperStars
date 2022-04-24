import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import './CategorySelector.css';
import { fakeCategoryData } from './fakeCategoryData';



const CategorySelector = () => {
    // const [list, setList] = useState([]);

    // const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    
    // @TODO: Select Unselect Functionality
    const handleClick = (e) => {
        const { id, checked } = e.target;
        const parseId = parseInt(id);
        setIsCheck([...isCheck, parseId]);
        handleChange([...isCheck, parseId]);

        if (!checked) {
            const checked_data =  isCheck.filter((item) => item !== parseId);
            setIsCheck(checked_data);
            handleChange(checked_data);
        } 
    };

    
    

    function handleChange(data){
        const formData = new FormData();

        console.log('All Done is Check ', data);
        
        formData.append('category', JSON.stringify(data));

        axios.post(`/api/user/selected/category/store`, formData).then((res)=>{
            if (res.status === 200) {
                console.log('Done');
            }
        })
    }

    

    // useEffect(() => {
    //     setList(fakeCategoryData)
    // }, [list])

    // const [select, setSelect] = useState({
    //     selectedCheckboxes: []
    // });

    // console.log(select.selectedCheckboxes);

    // const onChange = (obj) => {
    //     const selectedCheckboxes = select.selectedCheckboxes;

    //     // Find index
    //     const findIdx = selectedCheckboxes.indexOf(obj);

    //     // Index > -1 means that the item exists and that the checkbox is checked
    //     // and in that case we want to remove it from the array and uncheck it
    //     if (findIdx > -1) {
    //         selectedCheckboxes.splice(findIdx, 1);
    //     } else {
    //         selectedCheckboxes.push(obj);
    //     }

    //     setSelect({
    //         selectedCheckboxes: selectedCheckboxes
    //     });
    // };


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



    // const handleSubCategory = (obj) => {

    //     const selectedCategory = select.selectedCheckboxes.filter((data) => obj.id === data.id)
    //     console.log('SelectedCategory', selectedCategory);


    //     return (
    //         <>

    //             {selectedCategory.length ? history.push('/selector-sub-category') : null}


    //         </>
    //     )
    // }

    const [categorylist, setCategorylist] = useState([]);

    useEffect(() => {
        axios.get(`/api/view-category`).then((res) => {
            console.log(res.data.category);
            if (res.status === 200) {
                setCategorylist(res.data.category);
                setIsCheck(res.data.selectedCategory);
            }
        });
    }, []);

    //   useEffect(() => {
    //     axios.post(`/api/user/selected/category/store`).then((res) => {
    //       console.log(res.data.category);
    //       if (res.status === 200) {
    //         setCategorylist(res.data.category);
    //         setIsCheck(res.data.selectedCategory);
    //       }
    //     });
    //   }, []);


    //   const loginSubmit = (e) => {

    //     if (isCheck.length > 0) {
    //       e.preventDefault();

    //       //console.log(Checked);

    //       const data = {
    //         cat: isCheck
    //       }


    //       axios.post(``, data).then(res => {
    //         if (res.data.status === 200) {
    //           console.log('Done');
    //         }
    //         // else if (res.data.status === 401) {
    //         //   swal("Warning", res.data.message, "warning");
    //         // }
    //         // else {
    //         //   setCategory({ ...selectCategory, error_list: res.data.validation_errors });
    //         // }
    //       });
    //     }

    //   }



    //   const loginSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData()

    //     console.log('New Check ', isCheck);

    //     formData.append('category', isCheck);

    //     await axios.post(`/api/user/selected/category/store`, formData).then((res)=>{
    //         if (res.status === 200) {
    //             console.log('Done');
    //           }
    //     })
    //   }





    // const { selectedCheckboxes } = select;

    return (
        <div className="bgCategory container containerCategorySelector mt-3">
            <div className="p-1 sliderCategory">
                <div className="d-flex">
                    <button className="btn btn-warning btnAngleDouble">   <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                    <small className="text-white mx-2"> Category</small>
                </div>

                <Slider {...settings}>
                    {
                        categorylist.map((i, idx) => {
                            return (
                                <>
                                    <div key={i.id} className="p-1">
                                        <div>
                                            <img src={`http://localhost:8000/${i.image}`} alt="" className="img-fluid homePageCarouselImg" />
                                            {/* <img onClick={() => handleSubCategory(i)} src={`http://localhost:8000/${i.image}`} alt="" className="img-fluid homePageCarouselImg" /> */}
                                        </div>
                                        <div className="d-flex justify-content-center socialMedia">
                                            <div className="mx-1">
                                                <div class="content">
                                                    <label class="switch m5">
                                                        {/* <input type="checkbox"
                                                            onChange={() => onChange(i)}
                                                            selected={selectedCheckboxes.includes(i.id)}
                                                        // handleSubCategory = {() => handleSubCategory(idx)}
                                                        /> */}
                                                        <input key={i.id} id={i.id} name={i.name} type="checkbox" onChange={handleClick} checked={isCheck.includes(i.id)} />
                                                        <small></small>
                                                    </label>
                                                </div>
                                            </div>
                                            <small className="text-white mx-1">{i.name}</small>
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

export default CategorySelector;