import React, { useState, useEffect } from 'react';
import "../../CSS/Category/Category.css";
import frame from "../../../images/Normal-User/Single-frame.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Navigation from '../../Header/Navigation';
import { useLocation, useHistory } from "react-router-dom";


const SubCategory = () => {

  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const [Checked, setChecked] = useState([]);

  const history = useHistory();

  

  const handleToggle = (value) => {

    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];

    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)

}



  useEffect(() => {

      setSubCategory(location.state.detail);

      console.log(subCategory);

      setLoading(false);


  }, [location]);

  //console.log(subCategory);



  var viewCategory = "";

  if(loading)
  {
    return <h5>Loading Category...</h5>
  }
  else
  {
    viewCategory = 
    subCategory.map( (subCategory, index) => {
      return (
        
          <div class='item' id="id_work_days">
              <input name="checkbox" value={subCategory.id} type="checkbox" onChange={() => handleToggle(subCategory.id)}/>
              <img src={`http://localhost:8000/${subCategory.image}`} alt=""/>
              <h4 className="text-white text-center">{subCategory.name}</h4>
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
            <img src={frame} alt="" className="frame" />
            <h6 className="category-title">CHOOSE CATEGORY</h6>
          </div>
        </div>

      <div className="carousel-items my-4">

<OwlCarousel center className='owl-theme' loop margin={15} items={3} mouseDrag  className='owl-theme' loop margin={15} items={3} mouseDrag  >
      
  


        {viewCategory}
      

</OwlCarousel>





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
            <Link to='/Starselection'><button className="btn mt-3 cg-done">Done</button></Link>
          </div>
        </div>

        
      </div>
    </div>
      
    </>
    );
};

export default SubCategory;