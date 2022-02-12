import React, {useEffect} from 'react';
import axios from "axios";
import swal from "sweetalert";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Children from '../../../../../../../images/bat.jpg';
import Jainamaj from '../../../../../../../images/ball.jpg';
import Topi from '../../../../../../../images/greens.jpg';
import Habibi from '../../../../../../../images/bat.jpg';
import Vector1 from '../../../../../../../images/starProfile/starPostLeftContent/Card3/1.jpg';
import Vector2 from '../../../../../../../images/starProfile/starPostLeftContent/Card3/2.jpg';
import { Link,useRouteMatch,useHistory } from 'react-router-dom';
// import LiveChatpic from '../../../../../../../images/LiveChat/Live.png'
// css design comes from star post page
const StarProfileRightContent = ({ star_id }) => {
  const history = useHistory();
  

  let greetingsCheck = () => {

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get("/api/user/greetings_star_status/"+star_id).then((res) => {
        if (res.data.status === 200) {
          
          if (res.data.action) {
            history.push(`/starprofile/${star_id}/greeting`);
          } else {
            swal("Unavailable now", "Greetings Not Available Now", "warning");
          }
  
        } else {
          swal("error", "Data base Error", "error");
  
        }
      });
    });
    // 

  }
  const {url}=useRouteMatch();

    return (
        <>
  <div class="card mx-auto my-4 left-card-star left-star-card">
            
            <div class="card-body">
            <h6 class="card-title text-warning">Requested for</h6>

              <div className=" d-flex justify-content-around">
                <img
                  src={Vector1}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
                <img
                  src={Vector2}
                  class="img-fluid souviner-request-img"
                  alt=""
                />
              </div>
            </div>

            <div className="container mb-2">
              <div className="row">
                <div className="col-6 ">


                  
                 {/* <Link to={`/starprofile/${star_id}/greeting`}  > */}
                  <button className="w-100 star-last-btn p-1" onClick={greetingsCheck}>
                    Greeting
                  </button>
                {/* </Link>  */}
                
                </div>
                <div className="col-6">
                <Link to={`/starprofile/${star_id}/livechat`}> <button className="w-100 star-last-btn p-1">Live Chat</button></Link>
                </div>
              </div>
            </div>
          </div>


 {/* <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning"> Live chat</h6>
            
             <div className="container d-flex justify-content-center align-items-center">
               <img src={LiveChatpic} alt="" className='pulse-button  img-fluid liveChatpic'/>
             </div>
   <div className="text-center mt-3 ">
 <button className='w-100 enroll-btn '>Live chat</button>
   </div>

            </div>
          </div> */}


            <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Audition Announcement</h6>

              <div className="container star-content">
                <img
                  src={Children}
                  class="card-img-top img-fluid star-left-photo"
                  alt="..."
                />
                <div className="other-content">
                  <h6 className="text-bold">Quran Recetiong Audition</h6>
                  <small>Form july 22 to july 25</small>
                </div>
              </div>

              <div className="text-center ">
                <button className="w-100 enroll-btn mt-3">Enroll now</button>
              </div>
            </div>
          </div>

          <div class="card mx-auto my-4 left-card-star left-star-card">
            <div class="card-body">
              <h6 class="card-title text-warning">Souvenir</h6>

              <div className="container">
                <OwlCarousel className="owl-theme" loop margin={5} nav>
                  <div class="item">
                    <img
                      src={Jainamaj}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Topi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                  <div class="item">
                    <img
                      src={Habibi}
                      alt=""
                      className="img-fluid"
                      class="souviner-product-img"
                    />
                  </div>
                </OwlCarousel>
                ;
              </div>

              <div className="text-center">
                <button className="w-100 enroll-btn">
                  Browse Mizanur Rahman Souvenir
                </button>
              </div>
            </div>
          </div>

        
        </>
    );
};

export default StarProfileRightContent;