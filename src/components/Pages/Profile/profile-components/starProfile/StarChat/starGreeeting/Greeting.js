import React,{useState} from "react";
import StarProfileRightContent from "../../StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import "./Greeting.css";

import ReactPlayer from 'react-player'
const Greeting = ({star_id}) => {
const [check, setcheck] = useState(true);
function handleClick(){
    setcheck(false);
}
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-3">
          <div class="card live-card-bg my-4 mx-auto">
                <div class="card-body">
               <div className="d-flex justify-content-between">
               <h5 class="card-title text-warning">Greeting request</h5>
               <p className="btn-warning btn-sm">Demo video</p>
               </div>
                  <div className="star-line"></div>
                  

                 <div className="container-fluid my-2">
                 <ReactPlayer
                    url="https://www.youtube.com/watch?v=3CaBNtaTrbo"
                    playing={false}
                    volume={1}
                    width="100%"
                    height="320px"
                    style={{ margin: "0 auto" }}
                    onReady={() => console.log("ready now")}
                  />
                 </div>


                </div>
              </div>

            <div className="text-warning">
              <div class="card live-card-bg my-4 mx-auto">
                <div class="card-body">
                  <h5 class="card-title text-warning">Instructions</h5>
                  <div className="star-line"></div>
                  <div className="instruct">
                    <p class=" my-4 text-light">
                      1. User can only chat with the superstar for minimum 1
                      minute to maximum 5 minutes.
                    </p>
                    <p class=" my-4 text-light">
                      2. User should not insult superstar or speak about their
                      personal topics. There should be no insults or blasphemy
                      with a superstar.
                    </p>
                    <p class=" my-4 text-light">
                      3. User should proofread the chat to superstar before
                      sending it to superstar{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="card live-card-bg my-4 mx-auto">
                <div class="card-body">
                  <h5 class="card-title text-warning">Cost</h5>
                  <div className="star-line"></div>
                  <div className="instruct">
                    <h5 className='my-2 text-light'>200 BDT</h5>
                  </div>
                </div>
              </div>



              <div class="card live-card-bg my-4 mx-auto">
                <div class="card-body">
                  <h5 class="card-title text-warning">Apply</h5>
                  <div className="star-line"></div>
                <h5 className='my-3 text-light'>Greet receiving date and time</h5>

                <div className="row mt-3">
              <div className="col-6 ">
             
                  <div className="left-slot greeting  w-75 text-center p-1">
                  <input type='text' placeholder='20 Sep 2021' name="minute"   className='form-control time' disabled></input>
                  </div>
                
              </div>
              
              <div className="col-6 ">
           
                <div className="left-slot greeting w-75 text-center p-1">
                <input type='text' readOnly text-center placeholder='11:59 PM' className='form-control time' disabled ></input>
                </div>
              </div>
            </div>
            {check?<button className='my-3 btn btn-warning px-4 py-2' onClick={handleClick}>Apply Now!</button>:<button className='my-3 btn btn-success px-4 py-2' disabled>Applied <i class="fas fa-check-circle mx-1"></i></button>}


                </div>
              </div>
          </div>
          <div className="col-md-4  mt-3">
            <StarProfileRightContent star_id={star_id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
