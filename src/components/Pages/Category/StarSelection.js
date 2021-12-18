import React from 'react';
import "../../CSS/Category/Category.css";
// import frame from "../../../images/Normal-User/Single-frame.png";
import Cricketer from '../../../images/Cricket.png';
import Tamim from '../../../images/category/imgonline-com-ua-resize-89OYdRk8U8q-removebg-preview.png';
import Musfiqur from '../../../images/category/musfiqur.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Navigation from '../../Header/Navigation';

const StarSelection = () => {
    return (
      <>
      <Navigation />


      
        <div className="main-container">
        <div className="star-container category-contaienr py-5 bg-dark  bg-img">
          <div className="d-flex justify-content-center align-items-center">
            <div className="center-frame">
              <p className='star-choosing'>CHOOSE SUPERSTARS</p>
            </div>
          </div>



<OwlCarousel   center className='owl-theme' loop margin={0} items={3} mouseDrag >


  
  <div class='superstar-item'>
  
  <img src={Tamim}className='img-fluid ' alt="" />
<div className="text-center">
<button className='btn  star-btn sub-btn mb-1'>Tamim Iqbal <i className='fa fa-spinner text-light fa-spin'></i></button>
</div>
  </div>



  <div class='superstar-item'>
  
  <img src={Cricketer}className='img-fluid ' alt="" />
<div className="text-center">
<button className='btn  star-btn sub-btn mb-1'>Sakib Al Hasan <i className='fa fa-spinner text-light fa-spin'></i></button>
</div>
  </div>

  <div class='superstar-item'>
  
  <img src={Musfiqur}className='img-fluid ' alt="" />
<div className="text-center">
<button className='btn  star-btn sub-btn mb-1'>Mushfiqur Rahim <i className='fa fa-spinner text-light fa-spin'></i></button>
</div>
  </div>
 
 
</OwlCarousel>


{/* <OwlCarousel center className='owl-theme' loop margin={15} items={3} mouseDrag  className='owl-theme' loop margin={15} items={3} mouseDrag  >

<div class='superstar-item adjust'>



  <div className="text-center" id="id_work_days3">

    <label>
    <input name="checkbox"  type="checkbox" />
    <img src={Cricketer} className='img-fluid low' alt="" />


    <div className="text-center">
    <button className='btn btn-primary mb-1'>Tamim Iqbal &nbsp; <i className='fa fa-spinner text-light fa-spin'></i> </button>
    </div>
    

    </label>
  </div>
  



  </div> 



  <div class='superstar-item adjust'>



<div className="text-center" id="id_work_days3">

  <label>
  <input name="checkbox"  type="checkbox" />
  <img src={Cricketer} className='img-fluid low' alt="" />


  <div className="text-center">
  <button className='btn btn-primary mb-1'>Tamim Iqbal &nbsp; <i className='fa fa-spinner text-light fa-spin'></i> </button>
  </div>
 

  </label>
</div>





</div> 

<div class='superstar-item adjust'>



  <div className="text-center" id="id_work_days3">

    <label>
    <input name="checkbox"  type="checkbox" />
    <img src={Cricketer} className='img-fluid low' alt="" />


    <div className="text-center">
    <button className='btn btn-primary mb-1'>Tamim Iqbal &nbsp; <i className='fa fa-spinner text-light fa-spin'></i> </button>
    </div>
    

    </label>
  </div>

  </div> 
      

</OwlCarousel> */}





          

        
  
          <div className="category-footer mt-4 ">
            <h6 className=" text-center mt-2">
              <i className="far fa-star text-warning mx-1"></i>
              <i className="far fa-star text-warning mx-1"></i>
              <span className="text-light">Choose at least 5 Categories</span>
              <i className="far fa-star text-warning mx-1"></i>
              <i className="far fa-star text-warning mx-1"></i>
            </h6>
  
            <div className="ct-btn text-center">
            { localStorage.auth_id ? <Link to='/'> <button className="btn mt-3 cg-done">Done</button></Link> : <Link to='/guest'> <button className="btn mt-3 cg-done">Done</button></Link> }
             

            </div>
          </div>
        </div>
      
      </div>
      </>
    );
};

export default StarSelection;