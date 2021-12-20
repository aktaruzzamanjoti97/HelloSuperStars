import React, { useState, useEffect, useRef  } from 'react';

import '../../../../../CSS/Profile/LiveChat/liveChat.css';
import StarProfileRightContent from '../StarCardComponent/StarProfileRightContent/StarProfileRightContent';
import LiveChatModal from './LiveChatModal';
import axios from "axios";
import moment from 'moment';
import loading from '../../../../../../images/LiveChat/Loading2.gif'


const LiveChat = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [liveChat, setLiveChat] = useState([]);
  const [minuteInput, setMinuteInput] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [singleLiveChatEvent, setSingleLiveChatEvent] = useState({});
  const [timeError, setTimeError] = useState();
  const [minuteError, setMinuteError] = useState();
  const [message, setMessage] = useState();
  const [availableStatus, setAvailableStatus] = useState()
  const [feeCount, setFeeCount] = useState()
  const [fee, setFee] = useState(0)
  const [status, setStatus] = useState(false);
  

  useEffect(() => {
    let isMounted = true;
    axios.get('/api/user/getAllLiveChatEvent').then(res =>{

        if(isMounted)
        {
            if(res.data.status === 200)
            {
              setLiveChat(res.data.livechats);
      
            }
        }           
    });
  }, []);


  const [formData, setFormData] = useState({
    id: '',
    minute: '',
    error_list: []
  });





  const InputFormData = {
    id: eventId,
    minute: minuteInput
  }


  //form validation 
  const validateFormData = () => { 
   
    if (minuteInput != "" && eventId != null && minuteInput < 6 && minuteInput >= 1) {
      setStatus(true)
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get(`/api/user/getSingleLiveChatEvent/${minuteInput}/${eventId}`).then(res => {
                if(res.data.status === 200)
                {
                  console.log(res.data.available);
                  if (res.data.available == true) {
                    setModalShow(true)
                    setMessage(res.data.message)
                    setAvailableStatus(true)
                    setMinuteError("")
                    setTimeError("")
                    setStatus(false)
                  } else {
                    setModalShow(true)
                    setMessage(res.data.message)
                    setAvailableStatus(false)
                    setMinuteError("")
                    setTimeError("")
                    setStatus(false)
                  }
                }
        });
      });
      
    } else {

      if (minuteInput == null) {
        setMinuteError("Insert a valu !")
      } else if(minuteInput < 1) {
        setMinuteError("Invalid valu !")

      } else if(minuteInput > 5) {
        setMinuteError("Select Less than 5 minute !")
      }else {
        setMinuteError("")
      }

      if (eventId == null) {
        
        setTimeError("Please Select date !")
      } else {
        setTimeError("")
      }
      

    }
  }
  
 const getEventInfo = (e) => {
   let id = e.target.value
   setEventId(id);
   console.log(id);
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/user/getSingleLiveChatEvent/${id}`).then(res => {
                    if(res.data.status === 200)
                    {
                      // alert(2)
                      setSingleLiveChatEvent(res.data.livechat)
                      setFee(res.data.livechat.fee)
                      setFeeCount(res.data.livechat.fee)
            
                   
                      
                    }
            });
        });
      // console.log(id);
  }
  
  
  const getFeeCount = (e) => {
    let minute = e.target.value
    setMinuteInput(minute);
    if (minute <= 0) {
      setFeeCount(fee)
    } else {
      setFeeCount(fee * minute)
    }
 
    
  }
  



  const LiveEventTimeDate = liveChat.map((item) => {
    return (
      <option onClick={getEventInfo} value={item.id} >{moment(item.date).format('LL')}-- {moment(item.start_time).format('h:mm A')} To {moment(item.end_time).format('h:mm A')}</option>
    )
  });
  

  
  
return (
<div className='container'>
  <div className="row">
    <div className="col-md-8">

      <div class="card live-card-bg my-4 mx-auto">
        <div class="card-body">
          <h5 class="card-title text-warning">Live Chat Instructions</h5>
          <div className="star-line"></div>
          <div className="instruct">
            <p class=" my-3 text-light">1.	User can only chat with the superstar for minimum 1 minute to maximum 5 minutes.</p>
            <p class=" my-3 text-light">2.	User should not insult superstar or speak about their personal topics. There should be no insults or blasphemy with a superstar.</p>
            <p class=" my-3 text-light">3.	User should proofread the chat to superstar before sending it to superstar </p>
            <p class=" my-3 text-light">4.	User should be friendly and cheerful with the star to maintain the conversation positive.</p>
            <p class=" my-3 text-light">5.	User should maintain the basic Grammar, Spelling, and Use of Language with the superstar.</p>
            <p class=" my-3 text-light">6.	User should be proactive but not intrusive.</p>
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
              <div className="col-12">
                <div className="left-slot  w-75 text-center p-1">
                  <from>
                    <select  onChange={getEventInfo}  name="id" class="form-select star-select-xop" aria-label="Default select example">
                      <option selected disabled >Select Date</option>
                        
                        {LiveEventTimeDate}
                      
                      </select>
                  </from>
                </div>
                  <p className="" style={{ color:'red' }}>{timeError}</p>
              </div>
              {/* <div className="col-6 ">
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
              </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-6 ">
              <h6 className='text-light'>Time PeriodTime</h6>
                  <div className="left-slot  w-75 text-center p-1">
                  <input type='number' placeholder='Maximum 5 minute' name="minute"  onChange={getFeeCount}  className='form-control time'></input>
                  </div>
                  <p className="" style={{ color:'red' }}>{minuteError}</p>
              </div>
              
              <div className="col-6 ">
              <h6 className='text-light'>Cost per minutes</h6>
                <div className="left-slot  w-75 text-center p-1">
                <input type='text' value={feeCount} readOnly text-center placeholder='1200tk' className='form-control time' disabled ></input>
                </div>
              </div>
            </div>

          </div>

          <center>
            {/* <div className="Right-slot slot-btn bg-warning  w-25 text-center p-1" onClick={()=> setModalShow(true)}>
              <span className='text-dark'>Check Slot</span>
            </div> */}
            <div className="Right-slot slot-btn bg-warning  w-25 text-center p-1" onClick={validateFormData}>
                <span className='text-dark'>Check Slot</span>{status? <img src={loading}  style={{ width:'20px',marginLeft: '10px' }} alt="" /> :null}
            </div>
          </center>
          <LiveChatModal data={InputFormData} show={modalShow} mesg={message} available={availableStatus} onHide={()=> setModalShow(false)}
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