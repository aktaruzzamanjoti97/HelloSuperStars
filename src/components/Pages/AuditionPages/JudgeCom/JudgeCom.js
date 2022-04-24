import React from "react";
import "./JudgeCom.css";
import james from "../../../../images/Rounds/james.png";
import retangle from "../../../../images/Rounds/retangle.png";
import momotaz from "../../../../images/Rounds/Momotaz.png";
import protik from "../../../../images/Rounds/protik.png";
import onihossain from "../../../../images/Rounds/onihossain.png";
import rafa from "../../../../images/Rounds/rafa.png";
const JudgeCom = () => {
  return (
    <div className="card bg-dark">
      <div className="card-body">
        <p className="text-warning">Audition judges</p>
        <div style={{ borderTop: "2px solid black" }}></div>

        <div className="h3 text-center text-warning my-4">
          Who will judge you?
        </div>

        <div className="row">
          <div className="col-md-6 my-2">
            <div className="card bg-warning">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={james}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </div>
              </div>

              <div className="judgeretangle" style={{ position: "relative" }}>
                <img src={retangle} alt="" className="img-fluid" />

                <div className="judge-content">
                  <h6 className="text-light text-center star-title-judge">Super Star</h6>
                  <h2 className="text-light text-center fw-bold star-title-name-judge">James</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 my-2">
            <div className="card bg-warning">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={momotaz}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </div>
              </div>

              <div className="judgeretangle" style={{ position: "relative" }}>
                <img src={retangle} alt="" className="img-fluid" />

                <div className="judge-content">
                  <h6 className="text-light text-center star-title-judge">Super Star</h6>
                  <h2 className="text-light text-center fw-bold star-title-name-judge">Momotaz</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="card bg-warning">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={protik}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </div>
              </div>

              <div className="judgeretangle" style={{ position: "relative" }}>
                <img src={retangle} alt="" className="img-fluid" />

                <div className="judge-content">
                  <h6 className="text-light text-center star-title-judge">Super Star</h6>
                  <h2 className="text-light text-center fw-bold star-title-name-judge">Protik </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h3 text-center text-warning mt-3 mb-3">
          Incretibles Jury wainting for you
        </div>
        <div style={{ borderTop: "2px solid black" }}></div>

        <div className="row my-3">
          <div className="col-md-6 my-2">
            <div className="card" style={{backgroundColor:'black'}}>
              <div className="card-body">

              <div className="text-center my-3">
                  <img
                    src={onihossain}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      border:'2px solid gold'
                    }}
                    alt=""
                  />
                </div>
                <h5 className="text-light text-center star-title-name-judge">Oni Hasan</h5>
                <h6 className="text-light text-center">
                    Music Specilist
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="card" style={{backgroundColor:'black'}}>
              <div className="card-body">

              <div className="text-center my-3">
                  <img
                    src={rafa}
                    className="img-fluid"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      border:'2px solid gold'
                    }}
                    alt=""
                  />
                </div>
                <h5 className="text-light text-center star-title-name-judge">Rafa</h5>
                <h6 className="text-light text-center">
                    Music Specilist
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeCom;
