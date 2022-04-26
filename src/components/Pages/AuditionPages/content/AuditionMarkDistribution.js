import React from "react";
import User1 from "../../../../images/Groupadm.png";
import User2 from "../../../../images/Groupadmj.png";
import User3 from "../../../../images/Groupadms.png";

const AuditionMarkDistribution = () => {
  return (
    <>

    {/* Page no 568  */}
    

      {/* <Round1com/> */}

      <div className="m-3">
        <div className="row ">
          <div className="card bg-dark">
            <h4 className="col-md-12 text-warning pt-2 pb-2 RowAmd">
              Audition Mark Distribution
            </h4>
            <hr />

            <div className="row">
            <div className="d-flex justify-content-between mb-3">
              <div className="col-md-1 ImgNb">
                <img src={User1} alt="" className="img-fluid ps-3 ImgB pt-2" />
              </div>
              <div className="col-md-6">
                <div className="card BGadm pt-1 px-3">
                  <h4 className="text-light py-2 UserMark">User Vote</h4>
                </div>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className=" pt-3 pb-3 px-3 card BGadm2"
                  placeholder="30"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="col-md-1 ImgNb">
                <img src={User2} alt="" className="img-fluid ps-3 ImgB pt-2" />
              </div>
              <div className="col-md-6">
                <div className="card BGadm pt-1 px-3">
                  <h4 className="text-light py-2 UserMark">Jury Mark</h4>
                </div>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className=" pt-3 pb-3 px-3 card BGadm2"
                  placeholder="30"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="col-md-1 ImgNb">
                <img src={User3} alt="" className="img-fluid ps-3 ImgB pt-2" />
              </div>
              <div className="col-md-6">
                <div className="card BGadm pt-1 px-3">
                  <h4 className="text-light py-2 UserMark">Start Mark</h4>
                </div>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className=" pt-3 pb-3 px-3 card BGadm2"
                  placeholder="30"
                />
              </div>
            </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AuditionMarkDistribution;
