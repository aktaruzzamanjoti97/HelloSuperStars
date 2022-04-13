import { CardContent } from "@mui/material";
import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import ReactPlayer from "react-player";
import audioBanner from "../../../../../../images/auditionWithStar/firstBanner.png";
import fourthIMage from "../../../../../../images/auditionWithStar/fourthImage.png";
import singleFrame from "../../../../../../images/Normal-User/Single-frame.png";
import applePayLogo from "../../../../../../images/Payment-img/Apple_Pay_logo.png";
import bKashLogo from "../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import payoneerLogo from "../../../../../../images/Payment-img/Payoneer-Logo.wine.png";
import payPalLogo from "../../../../../../images/Payment-img/PayPal-Logo.wine.png";
import visaLogo from "../../../../../../images/Payment-img/Visa_Inc._logo.svg.png";
import "./AuditionWithStar.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <div onClick={props.onHide} className="d-flex justify-content-end">
                    <div className="closeNotificationDrop text-center">X</div>
                </div>
        <Card
          className="my-4"
          style={{ backgroundColor: "#343434" }}
          sx={{ minWidth: 275 }}
        >
          <CardContent>
            <div className="text-center image-middle">
              <img className="singleFrame-style" src={singleFrame} alt="" />
              <h3 className="centered">Payment Method</h3>
            </div>

            <div>
              <OwlCarousel className="owl-theme" loop margin={0} nav>
                <div className="item">
                  <img
                    src={applePayLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={bKashLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={payoneerLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={payPalLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
                <div className="item">
                  <img
                    src={visaLogo}
                    alt=""
                    className="img-fluid payment-img"
                  />
                </div>
              </OwlCarousel>
            </div>

            <div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Cardholder Name</big>
                      <input
                        type="email"
                        className="form-control input-overlay"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group my-3">
                      <big className="text-white">Card number</big>
                      <input
                        type="password"
                        className="form-control input-overlay"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                 

         
                   
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Date</big>
                          <input
                            type="email"
                            className="form-control input-overlay"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">CCV</big>
                          <input
                            type="email"
                            className="form-control input-overlay"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                      </div>
                   
            
                </div>

                {/* <button  onClick={formSubmit}  className="my-3 btn btn-gold">Confirm Payment</button> */}
                <div className="d-flex justify-content-center">
                <button type="submit" className="my-3 btn btn-gold">
                  Confirm Payment
                </button>
                </div>
               
              </form>
            </div>
          </CardContent>
        </Card>
      </Modal.Body>
    
    </Modal>
  );
}

const AuditionWithStar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const audio = true;
  const video = true;

  return (
    <div>
      <div className="container my-3">
        {audio ? (
          <div className="photoRelative">
            <img
              src={audioBanner}
              className="img-fluid audioBanner my-3"
              alt=""
            />
            <h2 className="registrationDate text-white p-3 fw-bolder">
              REGISTRATION DATE JUNE 25 - JULY 30
            </h2>
          </div>
        ) : null}
        {!video ? (
          <ReactPlayer
            className="my-3 videoBanner"
            url="https://www.youtube.com/watch?v=3CaBNtaTrbo"
            playing={false}
            volume={1}
            width="100%"
            height="320px"
            style={{ margin: "0 auto" }}
          />
        ) : null}

        {audio && video ? (
          <div className="img-bg my-4 p-3 rounded-3">
            <p className="text-center withText fw-bold">
              <i>With: </i>{" "}
            </p>
            <div className="d-flex justify-content-center">
              <img src={fourthIMage} className="imageWidthTwo" alt="" />
              <img src={fourthIMage} className="imageWidth" alt="" />
              <img src={fourthIMage} className="imageWidthTwo" alt="" />
            </div>
          </div>
        ) : null}

        {audio ? (
          <div className="img-bgImg my-4 p-3 rounded-3">
            <p className="text-center text-white withText fw-bold">
              <i>With: </i>{" "}
            </p>
            <div className="d-flex justify-content-center">
              <img src={fourthIMage} className="imageWidthTwo" alt="" />
              <img src={fourthIMage} className="imageWidth" alt="" />
              <img src={fourthIMage} className="imageWidthTwo" alt="" />
            </div>
          </div>
        ) : null}

        {audio && video ? (
          <div className="guitarBorder">
            <div className="p-5">
              <h3 className="text-warning">Guitar For The Beginners</h3>
              <div className="guitarBorderGold my-3"></div>

              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="text-light listStyle">
                      <li>Start</li>
                      <li>End</li>
                      <li>Fee</li>
                    </div>
                    <div className="text-light listStyle ms-5">
                      <li>02/05/2022</li>
                      <li>15/06/2022</li>
                      <li>250 BDT</li>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-light">
                  <h6>Description</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, quibusdam veniam perferendis labore, necessitatibus
                    sequi impedit repudiandae fugiat ex alias saepe dolore
                    explicabo, qui ea fuga recusandae accusantium. A, sunt.
                  </p>
                </div>
              </div>

              <div className="my-4">
                <div className="row my-3">
                  <div className="col-md-6">
                    <h6 className="text-light">Participant name</h6>
                    <input type="text" className="form-control input-gray" />
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-light">Phone number</h6>
                    <input type="number" className="form-control input-gray" />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-md-6">
                    <h6 className="text-light">Date of birth</h6>
                    <input type="text" className="form-control input-gray" />
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-light">Password</h6>
                    <input type="number" className="form-control input-gray" />
                  </div>
                </div>

                <div className="text-center my-4">
                  <button
                    onClick={() => setModalShow(true)}
                    className="btn btn-warning w-25 my-3"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {audio ? (
          <div className="guitarBorder my-3 formLiner">
            <div className="p-5">
              <h3 className="text-warning">Guitar For The Beginners</h3>
              <div className="guitarBorderGold my-3"></div>

              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="text-light listStyle">
                      <li>Start</li>
                      <li>End</li>
                      <li>Fee</li>
                    </div>
                    <div className="text-light listStyle ms-5">
                      <li>02/05/2022</li>
                      <li>15/06/2022</li>
                      <li>250 BDT</li>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-light">
                  <h6>Description</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, quibusdam veniam perferendis labore, necessitatibus
                    sequi impedit repudiandae fugiat ex alias saepe dolore
                    explicabo, qui ea fuga recusandae accusantium. A, sunt.
                  </p>
                </div>
              </div>

              <form className="my-4">
                <div className="row my-3">
                  <div className="col-md-6">
                    <h6 className="text-light">Participant name</h6>
                    <input type="text" className="form-control input-gray" />
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-light">Phone number</h6>
                    <input type="number" className="form-control input-gray" />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-md-6">
                    <h6 className="text-light">Date of birth</h6>
                    <input type="text" className="form-control input-gray" />
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-light">Password</h6>
                    <input type="number" className="form-control input-gray" />
                  </div>
                </div>

                <div className="text-center my-4">
                  <button className="btn btn-warning w-25 my-3">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default AuditionWithStar;
