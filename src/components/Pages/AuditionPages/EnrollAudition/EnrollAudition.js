import React, {useState} from "react";
// import Enroll from "../../Sidebar/Left/EnrolledAuditions/Enroll";
import Img1 from "../../../../images/Group 1169.png";
import Img2 from "../../../../images/Group 1170.png";
import Img3 from "../../../../images/Group 1168.png";
import { useHistory } from "react-router-dom";
import "./EnrollAudition.css";
import { Link } from "react-router-dom";
import { setHours } from "date-fns";

const EnrollAudition = () => {
  // const location = useLocation();
  let history = useHistory();
    const countDownDate = new Date().getTime();
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

  setInterval(() => {
    const now = new Date("May 20, 2022 15:37:25").getTime();
    const distance =  now - countDownDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    setDay(days)

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHour(hours)

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setMinute(minutes)

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  }, 1000);
const handleClick=()=>{
  history.push({
    pathname: `/enrolled-auditions-round`,
    state: {
    pending:'pending'
    },
  });
}
const handleClick2=()=>{
  history.push({
    pathname: `/enrolled-auditions-round`,
    state: {
    pending:'running'
    },
  });
}
  return (
    <>

      {/* Page no 562 */}

      <div className="m-3">
        <div className="row">

          <div className="col-md-6 mb-3">
            <div className="card text-center CardEn " onClick={handleClick}>
              <img src={Img1} alt="Img1" />
              {/* <Link to="/enrolled-auditions-round"> */}
                <h3 className="fw-bold pt-3 pb-1 EnHead">
                  audition Title name 
                </h3>
              {/* </Link> */}
              <div className="PositionEn d-flex">

                  <div className="card ENtext py-1 px-3 mx-2">
                    <h3 className="fw-bold text-black">{day}</h3>
                    <small className="fw-bold EnDay">Days</small>
                  </div>

                  <div className="card ENtext text-black py-1 px-3 mx-2">
                    <h3 className="fw-bold ">{hour}</h3>
                    <small className="fw-bold EnDay">Hrs</small>
                  </div>
                  
                  <div className="card ENtext text-black py-1 px-3 mx-2">
                    <h3 className="fw-bold ">{minute}</h3>
                    <small className="fw-bold EnDay">Min</small>
                  </div>
                  
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card text-center CardEn " onClick={handleClick}>
              <img src={Img2} alt="Img1" />
              {/* <Link to="/enrolled-auditions-round"> */}
                <h3 className="fw-bold pt-3 pb-1 EnHead">
                  audition Title name
                </h3>
              {/* </Link> */}
              <div className="PositionEn d-flex">

                  <div className="card ENtext py-1 px-3 mx-2">
                    <h3 className="fw-bold text-black">{day}</h3>
                    <small className="fw-bold EnDay">Days</small>
                  </div>

                  <div className="card ENtext text-black py-1 px-3 mx-2">
                    <h3 className="fw-bold ">{hour}</h3>
                    <small className="fw-bold EnDay">Hours</small>
                  </div>
                  
                  <div className="card ENtext text-black py-1 px-3 mx-2">
                    <h3 className="fw-bold ">{minute}</h3>
                    <small className="fw-bold EnDay">Min</small>
                  </div>
                  
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card text-center CardEn ">
              <img src={Img3} alt="Img1" />
             
                <h3 className="fw-bold pt-3 pb-1 EnHead">
                  audition Title name
                </h3>
          
              <div className="PositionEn d-flex">

                  <div className="card ENtext1 px-4 py-2" onClick={handleClick2}>
                  {/* <Link to="/enrolled-auditions-round"> */}
                    <h3 className="fw-bold text-dark mx-2" style={{cursor:'pointer'}}>Running</h3>
                    {/* </Link> */}
                  </div>
                  
              </div>
            </div>
          </div>

        </div>
      </div>


      
      {/* <Enroll /> */}
    </>
  );
};

export default EnrollAudition;
