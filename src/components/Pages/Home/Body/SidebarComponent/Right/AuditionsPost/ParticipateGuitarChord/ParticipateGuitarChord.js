import { CardContent } from "@mui/material";
import React from "react";
import { Card, Carousel, Form } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
// import avaterImage from "../../../../../../../../images/CreateAccount-page/Avater.png";
import avaterImage from "../../../../../../../../images/avatarImage.webp";
import guitarParticipant from "../../../../../../../../images/guitarParticipate.png";
import singleFrame from "../../../../../../../../images/Normal-User/Single-frame.png";
import applePayLogo from "../../../../../../../../images/Payment-img/Apple_Pay_logo.png";
import bKashLogo from "../../../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import payoneerLogo from "../../../../../../../../images/Payment-img/Payoneer-Logo.wine.png";
import payPalLogo from "../../../../../../../../images/Payment-img/PayPal-Logo.wine.png";
import visaLogo from "../../../../../../../../images/Payment-img/Visa_Inc._logo.svg.png";
import Navigation from "../../../../../../../Header/Navigation";
import FileUpload from "./FileUpload";
import "./ParticipateGuitarChord.css";

const ParticipateGuitarChord = () => {
  return (
    <div>
      <Navigation />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={guitarParticipant}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={guitarParticipant}
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={guitarParticipant}
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
      <div className="container">

        <div className="d-flex justify-content-center mb-3">
          <div className="avater-img mb-3 mx-2 text-center">
            <img
              src={avaterImage}
              className="img-fluid avatar-img-src"
              alt=""
            />
          </div>
          <div className="avater-img mb-3 mx-2 text-center">
            <img
              src={avaterImage}
              className="img-fluid avatar-img-src"
              alt=""
            />
          </div>
          <div className="avater-img mb-3 mx-2 text-center">
            <img
              src={avaterImage}
              className="img-fluid avatar-img-src"
              alt=""
            />
          </div>
        </div>

        <div>
          <div>
            <Card style={{ backgroundColor: "#343434" }} sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="row whole-m-p">
                  <div className="col-md-12">
                    <h4 className="starChat-heading">Guitar Chord</h4>

                    <div className="vb"></div>

                    <div className="mt-3 row">
                      <div className="col-md-6 display-style-starChat">
                        <div className="me-5 starChat-child-style text-white">
                          <h6>Start</h6>
                          <h6>End</h6>
                          <h6>Fee</h6>
                        </div>

                        <div
                          style={{ color: "#c2c2c2" }}
                          className="mx-5 starChat-child-style"
                        >
                          <h6>12/08/21</h6>
                          <h6>12/08/21</h6>
                          <h6>100 BDT</h6>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mx-2 starChat-child-style">
                          <h5 className="text-white">Description</h5>
                          <p style={{ color: "#c2c2c2" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim unde, magnam nemo atque similique facere
                            architecto repudiandae? Id qui cumque dicta
                            perspiciatis illum amet aliquid iure blanditiis
                            magnam expedita possimus vitae, quisquam temporibus
                            earum commodi. Placeat voluptas nostrum tempore
                            porro.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="whole-m-p">
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Participate Name</big>
                          <big className="text-danger"> *</big>
                          <input
                            type="hidden"
                            name="notification_id"
                            value=""
                          />

                          <input
                            type="text"
                            value=""
                            className="form-control input-overlay"
                            name="name"
                          />
                        </div>
                        <p className="" style={{ color: "red" }}></p>
                        <div className="form-group my-3">
                          <big className="text-white">Date of Birth</big>
                          <big className="text-danger"> *</big>
                          <input
                            type="date"
                            className="form-control input-overlay"
                            name="date_b"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Phone Number</big>
                          <big className="text-danger"> *</big>

                          <input
                            type="phone"
                            value=""
                            className="form-control input-overlay"
                            name="phone"
                          />
                        </div>
                        <p className="" style={{ color: "red" }}></p>
                        <div className="form-group my-3">
                          <big className="text-white">Password</big>
                          <big className="text-danger"> *</big>

                          <input
                            type="password"
                            value=""
                            className="form-control input-overlay"
                            name="password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <button
                          type="submit"
                          className="my-3 btn btn-gold submit-greetings-btn"
                        >
                          Register
                        </button>
                      </div>
                    </div>

                    {/* <CustomToggle eventKey="0">
                         
                      </CustomToggle> */}
                  </Form>
                </div>
              </CardContent>
            </Card>

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
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Card number</big>
                          <input
                            type="password"
                            className="form-control input-overlay"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
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
                              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
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
                              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <button  onClick={formSubmit}  className="my-3 btn btn-gold">Confirm Payment</button> */}
                    <button type="submit" className="my-3 btn btn-gold">
                      Confirm Payment
                    </button>
                  </form>
                </div>
              </CardContent>
            </Card>

            <Card
              className="my-4"
              style={{ backgroundColor: "#343434" }}
              sx={{ minWidth: 275 }}
            >
              <CardContent>
                <FileUpload />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateGuitarChord;
