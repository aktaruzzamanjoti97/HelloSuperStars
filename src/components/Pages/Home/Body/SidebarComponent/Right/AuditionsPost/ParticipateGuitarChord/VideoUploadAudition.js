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

const VideoUploadAudition = () => {

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
              </CardContent>
            </Card>
            
                  <Card
              className="my-4"
              style={{ backgroundColor: "#343434" }}
              sx={{ minWidth: 275 }}
            >
              <CardContent>
                <FileUpload id ={params.id}/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
        </>
      ))}
    </div>
  );
};

export default VideoUploadAudition;
