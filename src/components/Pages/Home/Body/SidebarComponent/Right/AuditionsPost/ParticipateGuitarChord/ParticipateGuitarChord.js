import { CardContent } from "@mui/material";
import axios from "axios";
import { Markup } from "interweave";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Form } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link, useParams } from "react-router-dom";
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

  const params = useParams();
  const [participateAudition,setParticipant] = useState([]);
  const [user,setUser] = useState([]);
  const [payment,setPayment] = useState([]);
  const [goPayment,setPaymentPortal] = useState(0);
  const [uploadVideo,setUploadVideo] = useState(0);


const [participantData, setParticipantData] = useState({
  audition_id: params.id,
  password:''
})

  const handleInput = (e) => {

    const {name,value}=e.target;
    setParticipantData((prev)=>{
        return({...prev,[name]:value});
    })
  }

const [cardInfo, setCardInfo] = useState({

  audition_id: params.id,
  card_holder_name:'',
  card_number:'',


})
  
  const handleCardInput = (e) => {

    const {name,value}=e.target;
    setCardInfo((prev)=>{
        return({...prev,[name]:value});
    })
  }
 const paymentSubmit = (e) => {
    e.preventDefault();
    const data = {
  
      audition_id: cardInfo.audition_id,
      card_holder_name:cardInfo.card_holder_name,
      card_number:cardInfo.card_number,
    }
     axios.post(`/api/user/payment/participate`, data).then(res => {
        if(res.data.status === 200)
        {
          setUploadVideo(1);
        }
        
    });
  }


  const auditionSubmit = (e) => {
    e.preventDefault();
    const data = {
  
      audition_id: participantData.audition_id,
      password: participantData.password,
    }
     axios.post(`/api/user/register/participate`, data).then(res => {
        if(res.data.status === 200)
        {
          setPaymentPortal(1);
        }
        
    });
  }

    useEffect(()=>{
      axios.get(`/api/user/audition/participate/${params.id}`).then((res)=>{
        console.log("Participant Data",res.data.participateAudition)
        setParticipant(res.data.participateAudition)
        setUser(res.data.user)
        setPayment(res.data.payment)
      })
     
       },[params.id])
      


  return (
    <div>
      <Navigation />

      {participateAudition.map((audition)=>(
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`http://localhost:8000/${audition.banner}`}
            alt="First slide"
          />

        </Carousel.Item>
      </Carousel>
      <div className="container">
           <div className="d-flex justify-content-center mb-3">
      {audition.judge.map((judge)=>(
        <>

          <div className="avater-img mb-3 mx-2 text-center">
            <img
              src={`http://localhost:8000/${judge.user?.image}`}
              className="img-fluid avatar-img-src"
              alt=""
            />
          </div>
      
        </>
      ))}

      
        </div>
        <div>
          <div>
            <Card style={{ backgroundColor: "#343434" }} sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="row whole-m-p">
                  <div className="col-md-12">
                    <h4 className="starChat-heading">{audition.title}</h4>

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
                          <h6>{moment(audition.start_time).format('LL')}</h6>
                          <h6>{moment(audition.end_time).format('LL')}</h6>
                          <h6>${audition.fee}</h6>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mx-2 starChat-child-style">
                          <h5 className="text-white">Description</h5>
                          <p style={{ color: "#c2c2c2" }}>
                           <Markup content={audition.description}/>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
{user.map((info)=>(
  <>
<div className="whole-m-p">
                  <Form onSubmit={auditionSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Participate Name</big>
                          <big className="text-danger"> *</big>

                          <input
                            type="text"
                            value={info.first_name}
                            className="form-control input-overlay"
                            name="first_name"
                          />
                        </div>
                        <p className="" style={{ color: "red" }}></p>
                        <div className="form-group my-3">
                          <big className="text-white">Date of Birth</big>
                          <big className="text-danger"> *</big>
                          <input
                            type="date"
                            className="form-control input-overlay"
                            name="birth"
                            value={info.birth} 
                        
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Phone Number</big>
                          <big className="text-danger"> *</big>

                          <input
                            type="phone"
                            value={info.phone}
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
                            value={participantData.password} 
                            className="form-control input-overlay"
                            name="password"
                            onChange={handleInput}
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
  </>
))}
                
              </CardContent>
            </Card>

            {goPayment == 1?<>       <Card
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
                  <form onSubmit={paymentSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group my-3">
                          <big className="text-white">Cardholder Name</big>
                          <input
                            type="text"
                            name="card_holder_name"
                            value={cardInfo.card_holder_name}
                            onChange={handleCardInput}
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
                            type="text"
                            name="card_number"
                            value={cardInfo.card_number}
                            onChange={handleCardInput}
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

</>:null}

     

    {/* {uploadVideo == 1?<>
                  <Card
              className="my-4"
              style={{ backgroundColor: "#343434" }}
              sx={{ minWidth: 275 }}
            >
              <CardContent>
                <FileUpload id ={params.id}/>
              </CardContent>
            </Card>
            
    </>:null} */}



          </div>
        </div>
      </div>
        </>
      ))}
    </div>
  );
};

export default ParticipateGuitarChord;
