import React, { useState, useEffect } from 'react';
import "../../CSS/Category/Category.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from '../../Header/Navigation';
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const images = ['abc', 'nfrdsg', 'sdfsd', 'faef', 'srgrs', 'sfdf'];


const StarSelection = () => {

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





const starSubmit = (e) => {
  e.preventDefault();

  console.log(Checked);
  
  const data = {
      cat: Checked
  }

  
      axios.post(`/api/select_star`, data).then(res => {
          if(res.data.status === 200)
              {
                  //swal("Success",res.data.message,"success");

                  console.log(res.data.result)

                  history.push({
                    pathname: '/',
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

      console.log(subCategory);

      setLoading(false);

  }, [location]);





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
    autoplaySpeed: 1000,
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
        <>
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"} id="id_work_days2">
          <label>
            <input name="checkbox" value={subCategory.id} type="checkbox" onChange={() => handleToggle(subCategory.id)}/>
            <img src={`http://localhost:8000/${subCategory.super_star.image}`} className='img-fluid low' alt={`http://localhost:8000/${subCategory.super_star.image}`} />
            {/* <span className="dot1 d-flex justify-content-center align-items-center">
              <img src={Lock} alt="" style={{width: '165px'}}/> 
            </span> */}
            <div className='text-center'>
              <button className="btn btn-primary mb-3"> 
                {subCategory.super_star.first_name} {subCategory.super_star.last_name} 
                &nbsp; <i className='fa fa-spinner text-light fa-spin'></i> 
              </button>
            </div>
            
          </label>
        </div>
        </>
        
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
            <p className='star-choosing'>CHOOSE SUPER STAR</p>
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
            { (localStorage.getItem('auth_token') === '[]')  ?  <Link to='/guest'> <button className="btn mt-3 cg-done">Gest Login</button></Link>  : <button onClick={starSubmit} className="btn mt-3 cg-done">Done</button> }
          </div>


        </div>

        
      </div>
    </div>

    
      
    </>
    );
};

export default StarSelection;