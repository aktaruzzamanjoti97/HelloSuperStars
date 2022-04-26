import React from "react";
import ReactPlayer from "react-player";
import Vect from "../../../../images/Group 1124.png";
import Group from "../../../../images/Group 1175.png";
import "../EnrollAudition/EnrollAudition.css";
import AuditionModal from "./AuditionModal";
import AuditionModal1 from "./AuditionModal1";
import CertificateModal from "./CertificateModal";

const AuditionResult = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShowCertificate, setModalShowCertificate] = React.useState(false);

  return (
    <>
      <div className="m-3">
        <div className="row ">
          <div className="card bg-dark">
            <h4 className="col-md-12 text-warning pt-2 pb-2 RowAmd">Result</h4>
            <hr />

            <div className="row">
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
              <div className="col-md-4 mb-5 mt-4">
                <div className="card bg-dark mVie">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls
                    autoplay="true"
                    className="img-fluid NamVe"
                  />
                  <img src={Group} alt="" className="imgbx" />
                  <p className="PCenterL text-warning p-1 Pbi ">20</p>
                  <p className="PCenter text-warning p-1 Pbi ">20</p>
                  <p className="PCenterR text-warning p-1 Pbi ">20</p>
                </div>
              </div>
            </div>

            <div className="mb-3 mt-3 row justify-content-between BTsd p-2 mb-3 ">
              <div className="col-md-1 IMGLs ps-2">
                <img src={Vect} alt="" />
              </div>
              <div className="col-md-4 text-center BlackUou text-light YourT pt-3 fw-bold ms-3">
                Your Total Mark
              </div>
              <div className="col-md-2 BlackUou BlackUouZ ">
                <input
                  type="text"
                  placeholder="86"
                  className="from-control wIn fw-bold mt-2"
                />
              </div>
              <div className="col-md-4 bg-danger text-center BlackUouZ fw-bold rounded-3 text-light py-1">
                You are not Qualified for the next Round
              </div>
            </div>

            <center>
              <button
                className="btn px-5 w-50 btnApp mb-5 fw-bold"
                onClick={() => setModalShow(true)}
              >
                Appeal Request
              </button>
            </center>

            <AuditionModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <center>
              {/* Page 586 */}
              <button
                className="btn px-5 w-50 btnApp mb-5 fw-bold"
                onClick={() => setModalShow1(true)}
              >
                Apply for the certificate
              </button>
            </center>

            <AuditionModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />

            {/* Page 586 end */}

            <div className="row">
              {/* Page no 587 */}
              <div className="mb-3 mt-3 row justify-content-between p-2 mb-5 ">
                <div className="col-md-7 text-center BlackUou text-light pt-3 fw-bold ms-3">
                  Download Your Certificate
                </div>

                <div className="col-md-4  text-center fw-bold rounded-3 text-light py-1">
                  <button
                    onClick={() => setModalShowCertificate(true)}
                    className="btnAppD py-2 px-5 fw-bold"
                  >
                    Download
                  </button>
                </div>
              </div>
              {/* Page no 587 end */}
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        show={modalShowCertificate}
        onHide={() => setModalShowCertificate(false)}
      />
    </>
  );
};

export default AuditionResult;
