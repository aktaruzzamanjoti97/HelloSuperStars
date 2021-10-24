import React from 'react';
import '../../CSS/Profile/profile.css';
import coverImg from '../../../images/Profile/cover.jpg';
import profileImg from '../../../images/Profile/profile.jpg';
import LeftCard from './profile-components/LeftCard';

import Azhari from '../../../images/Profile/Shakib.jpg';


const Profile = () => {
    return (
        <div className='full-container py-3 '>
            {/* cover photo work start   */}
            <div className="container mb-2">
                <div className="profile-img-cover ">
                  <div className="profile-container">
                  <img src={coverImg} alt="bg-img" className='img-fluid profile-cover' />
                  
                  </div>
                   

                </div>
                <div className="profile-div" >
                  
                   <img src={profileImg} alt="profile-img" className='img-fluid profile-img' />
                 
                    <div className="prodile-pic-info text-center">
                        <h5 className='profile-font-color'>Atif Hossain</h5>
                        <h6 className='profile-font-color'>Student</h6>
                    </div>
                </div>
            </div>

            {/* cover photo work end   */}
            {/* main body container start */}
<div className="container main-div">
<div className="row">
<div className="col-md-5 ">
    {/* phototos and videos components added */}
<LeftCard  title='Photos'/>
<div className="mt-3">
<LeftCard title='Videos'/>
</div>

<div className="container left-col-box p-3 mt-3">


<div className="accordion" id="accordionExample">
  <div className="accordion-item left-bottom">
    <h2 className="accordion-header " id="headingOne">
      <button className="accordion-button profile-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <span><i className="fas fa-layer-group mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Category <br></br>
     <small className='category-size'> 5 selectd</small>
      
      </span>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
    <p className='profile-font-color'>Category loop start here</p>
      </div>
    </div>
  </div>

  
  <div className="accordion-item mt-1 left-bottom">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span><i className="fas fa-star mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Following <br></br>
     <small className='category-size'> 25 star</small>
      
      </span>
      </button>
    </h2>
  </div>


  <div className="accordion-item mt-1 left-bottom">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span><i className="fas fa-wallet mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Wallet <br></br>
     <small className='category-size'> 200 star</small>
      
      </span>
      </button>
    </h2>
  </div>


  <div className="accordion-item mt-1 left-bottom">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span><i className="fas fa-id-card mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Enrolled audition <br></br>
     <small className='category-size'> 1 pending</small>
      
      </span>
      </button>
    </h2>
  </div>


  <div className="accordion-item mt-1 left-bottom">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span><i className="fas fa-cog mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Setting 
      </span>
      </button>
    </h2>
  </div>


  <div className="accordion-item mt-1 left-bottom">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button profile1-accordion-button left-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span><i className="fas fa-sign-out-alt mx-2 profile-font-color fa-2x"></i></span> <span className='mx-2 profile-font-color'>Logout 
      </span>
      </button>
    </h2>
  </div>

</div>




</div>

</div>

<div className="col-md-6 bg-success">
  

<div className="cards-start">

<div className="card w-lg-75 w-sm-100 mx-auto mt-1">

  <img src={Azhari} className="card-img-top profile-card-img img-fluid mx-auto" alt="..." />
  <div className="card-body">
    <div className="container">
<div className="row">
<div className="col-6">
 
<i className="fas fa-heart heart mx-1"></i>
<small className='profile-card-text'>240</small>

</div>

<div className="col-3">
 <i className="fas fa-comment d-inline mx-1"></i>
<small className='d-inline profile-card-text'>Comment</small>
</div>


<div className="col-3">
<i className="fas fa-share d-inline mx-1"></i>
<small className='d-inline profile-card-text'>Share</small>
</div>








</div>






    </div>

<hr />

<div className="text-center">

  <button className='btn btn-warning '>
  <i className="fas fa-heart text-danger  mx-1"></i>
  <small className='text-light'> Like</small>
  
  </button>
  <button className='btn btn-warning mx-2 '>

  <i className="fas fa-comment  mx-1 "></i>
 <small>  Comment</small>
  </button>
  <button className='btn btn-warning'>
  <i className="fas fa-share  mx-1"></i>
 <small> Share</small>

  </button>





</div>





  </div>
</div>


















</div>















</div>









</div>




</div>

            {/* main body container end */}


        </div>
    );
};

export default Profile;