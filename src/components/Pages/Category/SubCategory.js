import React, { useState, useEffect } from 'react';
import "../../CSS/Category/Category.css";
import frame from "../../../images/Normal-User/Single-frame.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../../Header/Navigation';
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const images = ['abc', 'nfrdsg', 'sdfsd', 'faef', 'srgrs', 'sfdf'];


const SubCategory = () => {

  const [subCategory, setSubCategory] = useState([]);

  



  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const [Checked, setChecked] = useState([]);

  const history = useHistory();
  

  

  const handleToggle = (value, index) => {

    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];


    if (currentIndex === -1) {
        newChecked.push(value)
    } 
    else {
        newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)

}





const categorySubmit = (e) => {
  e.preventDefault();

  //console.log(Checked);
  
  const data = {
      cat: Checked
  }



  
      axios.post(`/api/select_sub_category`, data).then(res => {
          if(res.data.status === 200)
              {
                  //swal("Success",res.data.message,"success");

                  console.log(res.data.length);

                  //history.push('/subCategory');

                  history.push({
                    pathname: '/starselection',
                    // search: '?query=abc',
                    state: { detail: res.data.length }
                  });
              }
              else if(res.data.status === 401)
              {
                  swal("Warning",res.data.message,"warning");
              }
              
      });

  
}



  useEffect(() => {

      setSubCategory(location.state.detail);

      //console.log(subCategory);
      //console.log(images);

      setLoading(false);

  }, [location]);

  //console.log(subCategory);


  ////// New Carousel  ///////


  const NextArrow = ({ onClick }) => {
    return (
      <span></span>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <span></span>
    );
  };



  const [imageIndex, setImageIndex] = useState(0);

  var totalSlides = subCategory.length;

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: totalSlides >= 3 ? 3 : totalSlides,
    slidesToScroll: 3,
    //slidesToShow: 3,
    //loopIfEqual: false,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: totalSlides >= 3 ? 3 : totalSlides,
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
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };





  var viewCategory = "";

  if(loading)
  {
    return <h5>Loading Category...</h5>
  }
  else
  {
    viewCategory = 
    subCategory.map( (subCategory, idx) => {
      return (


// <div class='superstar-item adjust' key={index}>
//   <div className="text-center" id="id_work_days2">
//     <label>
//     <input name="checkbox" value={subCategory.id} type="checkbox" onChange={() => handleToggle(subCategory.id, index)}/>
//     <img src={`http://localhost:8000/${subCategory.image}`} className='img-fluid low' alt="" />
//     {/* <span className='btn star-btn mb-1 sub-btn'></span> */}
//     <span className="dot1 d-flex justify-content-center align-items-center"> <i className='fa fa-spinner text-light fa-spin'></i> </span>
    
//     </label>
//   </div>
// </div> 



        <div className={idx === imageIndex ? "slide activeSlide" : "slide"} id="id_work_days2">
          <label style={{ minHeight: "366px" }}>
            <input name="checkbox" value={subCategory.id} type="checkbox" onChange={() => handleToggle(subCategory.id)}/>
            <img src={`http://localhost:8000/${subCategory.image}`} className='img-fluid low' alt="" />
            <span className="dot1 d-flex justify-content-center align-items-center"> <i className='fa fa-spinner text-light fa-spin'></i> </span>

            
          </label>
        </div>
    
      )
    });
  }

  


    return (
      <>
      <Navigation />
        <div className="main-container">
      <div className="container category-contaienr p-5 bg-dark  bg-img">
        <div className="d-flex justify-content-center align-items-center">
          <div className="center-frame">
            {/* <img src={frame} alt="" className="frame" /> */}
            <p className='star-choosing'>CHOOSE STAR CATEGORY</p>
          </div>
        </div>

      <div className="carousel-items my-4">

      <Slider {...settings}>
        {viewCategory}
      </Slider>


      </div>


        <div className="category-footer mt-4 ">
          <h6 className=" text-center mt-2">
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <span className="text-light">Choose at least 5 Categories</span>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>
          </h6>

          <div className="ct-btn text-center">
            <button onClick={categorySubmit} className="btn mt-3 cg-done">Done</button>
          </div>
        </div>

        
      </div>
    </div>

    
      
    </>
    );
};

export default SubCategory;