import React from "react";
import "./RegisterUser.css";
import fatema from "../../../../images/admin-panel/fatema.jpg";
// import sakib from '../../../../images/LiveChat/Shakib-Al-Hasan.jpg'

import ReactPlayer from "react-player";


const RegisterUser = () => {
  return (
    <div className="row ">
      <div className="col-md-8 ">
        <div className="table-info my-2">
          <h5 className="text-warning mx-2 p-2">Registered Users</h5>
          <table className="table text-light">
            <tbody>
              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn" >
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>

              <tr>
                <th scope="row">
                  <img src={fatema} alt="" className="rounded-circle mx-1" />
                  <span> Fatema Akter</span>
                </th>
                <th>11:50 pm</th>
                <th>5 minute</th>
                <th>
                  <button className="btn call-btn">
                    <span>
                      <i className="fas fa-video mx-1"></i>
                    </span>
                    Call
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-md-4 ">
        <div className="card right-card-live mx-auto my-2">
          {/* <img className="card-img-top" src={sakib} alt="sakib img"  />
           */}
          <ReactPlayer
            url="https://youtu.be/dgfTiONcnTc"
            playing={false}
            volume={1}
            width="100%"
          
            style={{ margin: "0 auto" }}
            onReady={() => console.log("ready now")}
          />

          <div className="card-body">
            <h5 className="card-title text-light">Instruction</h5>
            <p className="card-text text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              minus inventore? Libero asperiores aliquid dolorum?
            </p>
            <p className="text-light">Lorem ipsum dolor sit amet.</p>

            <div className="time-table d-flex  ">
              <span className="clock">
                <i className="fas fa-calendar-week fa-3x p-2"></i>
              </span>
              <div className="other mx-1 p-2">
                <span className="text-light">Date</span>
                <br></br>
                <span className="text-warning date-font">21th November</span>
              </div>
            </div>

            <div className="time-table2 d-flex  my-3">
              <span className="clock">
                <i className="fas fa-clock  fa-3x p-2"></i>
              </span>
              <div className="other mx-1 p-2">
                <span className="text-light">Time</span>
                <br></br>
                <span className="text-warning date-font">10pm-11pm</span>
              </div>
            </div>

            <div className="time-table3 d-flex  my-3">
              <span className="clock">
                <i className="fas fa-dollar-sign fa-3x p-2"></i>
              </span>
              <div className="other mx-1 p-2">
                <span className="text-light">Cost per minute</span>
                <br></br>
                <span className="text-warning date-font">1200 BDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
