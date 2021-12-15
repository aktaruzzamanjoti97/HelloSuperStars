import React from 'react'
import '../../../../../CSS/Profile/LiveChat/liveChat.css'
import StarProfileRightContent from '../StarCardComponent/StarProfileRightContent/StarProfileRightContent'
import LiveChatModal from './LiveChatModal';
const LiveChat = () => {
const [modalShow, setModalShow] = React.useState(false);
return (
<div className='container'>
  <div className="row">
    <div className="col-md-8">

      <div class="card live-card-bg my-4 mx-auto">
        <div class="card-body">
          <h5 class="card-title text-warning">Live Chat Instructions</h5>
          <div className="star-line"></div>
          <div className="instruct">
            <p class=" my-3 text-light">1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sunt,
              voluptatum excepturi minima facilis quisquam.</p>
            <p class=" my-3 text-light">2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, repellat perspiciatis sit ut
              excepturi minus aperiam consectetur eaque nostrum ex ab porro corporis quidem deleniti, vel quae corrupti
              natus. Id.</p>
            <p class=" my-3 text-light">3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis.
              Lorem ipsum dolor sit amet. </p>

            <p class=" my-3 text-light">4. Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>

            <p class=" my-3 text-light">5. Lorem ipsum dolor sit amet .</p>
          </div>

        </div>
      </div>

      <div class="card live-card-bg my-4 mx-auto">
        <div class="card-body">
          <h5 class="card-title text-warning">Slot checking</h5>
          <div className="star-line"></div>
          <div className="card-body">

            <h6 className='text-light'>Live Chat date & time perfered</h6>

            <div className="row mt-3">
              <div className="col-6 ">
                <div className="left-slot  w-75 text-center p-1">
                  <from>
                    <select class="form-select star-select-xop" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </from>
                </div>
              </div>
              <div className="col-6 ">
                <div className="Right-slot  w-75 text-center p-1">
                  <from>
                    <select class="form-select star-select-xop" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </from>
                </div>
              </div>
            </div>

            

            <div className="row mt-3">
              <div className="col-6 ">
              <h6 className='text-light'>Time PeriodTime</h6>
                <div className="left-slot  w-75 text-center p-1">
                  <input type='number' placeholder='Maximum 5 minute' className='form-control time'></input>
                </div>
              </div>
              
              <div className="col-6 ">
              <h6 className='text-light'>Cost per minutes</h6>
                <div className="left-slot  w-75 text-center p-1">
                <input type='text' text-center placeholder='1200tk' className='form-control time' disabled></input>
                </div>
              </div>
            </div>

          </div>

          <center>
            <div className="Right-slot slot-btn bg-warning  w-25 text-center p-1" onClick={()=> setModalShow(true)}>
              <span className='text-dark'>Check Slot</span>
            </div>
          </center>
          <LiveChatModal show={modalShow} onHide={()=> setModalShow(false)}
            />

        </div>
      </div>

    </div>

    <div className="col-md-4">
      <StarProfileRightContent />
    </div>
  </div>

</div>
)
}

export default LiveChat