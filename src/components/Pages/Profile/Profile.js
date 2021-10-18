import React from 'react';
import '../../CSS/Profile/profile.css';
import coverImg from '../../../images/Profile/cover.jpg';
import profileImg from '../../../images/Profile/profile.jpg';
import LeftCard from './profile-components/LeftCard';


const Profile = () => {
    return (
        <div className='full-container'>
            {/* cover photo work start   */}
            <div className="container mb-2">
                <div className="profile-img-cover ">
                    <img src={coverImg} alt="bg-img" className='img-fluid profile-cover' />

                </div>
                <div className="profile-div" >
                    <img src={profileImg} alt="profile-img" className='img-fluid profile-img' />
                    <div className="prodile-pic-info text-center">
                        <h5 className='text-warning'>Atif Hossain</h5>
                        <h6 className='text-warning'>Student</h6>
                    </div>
                </div>
            </div>

            {/* cover photo work end   */}
            {/* main body container start */}
<div className="container main-div ">
<div className="row">
<div className="col-md-5 ">
    
<LeftCard  title='Photos'/>
<div className="mt-3">
<LeftCard title='Videos'/>
</div>

<div className="container left-col-box p-3 mt-3">
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       simple text here
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>

</div>

<div className="col-md-7 bg-warning">
    here celebrity photos
</div>









</div>




</div>

            {/* main body container end */}


        </div>
    );
};

export default Profile;