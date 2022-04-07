import React, { useEffect, useState } from 'react';
import { Card, Carousel, Form } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel";
import ReactPlayer from 'react-player';
// import '../../../../CSS/Audition/Audition.css';
// import { youtubeLink } from '../../../../../../../DummyData'
import './AuditionGuitar.css'
import BannerL from '../../../../../../../images/maxresdefault.jpg'
import avaterImage from "../../../../../../../images/maxresdefault.jpg";
import Navigation from '../../../../../../Header/Navigation';
import guitarParticipant from "../../../../../../../images/guitarParticipate.png";
import singleFrame from "../../../../../../../images/Normal-User/Single-frame.png";
import applePayLogo from "../../../../../../../images/Payment-img/Apple_Pay_logo.png";
import bKashLogo from "../../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import payoneerLogo from "../../../../../../../images/Payment-img/Payoneer-Logo.wine.png";
import payPalLogo from "../../../../../../../images/Payment-img/PayPal-Logo.wine.png";
import visaLogo from "../../../../../../../images/Payment-img/Visa_Inc._logo.svg.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Markup } from 'interweave';

const AuditionGuitar = () => {

    const params = useParams();

    const [participateAudition,setParticipant] = useState([]);
    const [mainVideo,setMainVideo] = useState([]);

    useEffect(()=>{
        axios.get(`/api/user/audition/participate/video/${params.id}`).then((res)=>{

          console.log('participant video',res.data.participateAudition,)
          setParticipant(res.data.participateAudition)
          setMainVideo(res.data.ownVideo)
          console.log("my video",res.data.ownVideo)

        })
       
         },[params.id])
        
  


console.log('main video',mainVideo);
return (
<>
    <Navigation />

    

    {participateAudition.map((audition)=>(
        <>
            <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={`http://localhost:8000/${audition.banner}`} alt="First slide" />

        </Carousel.Item>
    </Carousel>
    <div className="container">

        <div className="d-flex justify-content-center mb-3">
        {audition.judge.map((judge)=>(
        <>
      
            <div className="avater-img mb-3 mx-2 text-center">
                <img src={`http://localhost:8000/${judge.user?.image}`}className="img-fluid avatar-img-src" alt="" />
            </div>
        </>
      ))}

        </div>

        <div className="row AuB mt-3 px-5">
            <h4 className="text-warning text-center fw-bold pt-5 pb-3 hrT">{audition.title}</h4>
            <p className='text-light text-center'>Description</p>
            <p className='text-light text-center'>{<Markup content={audition.description}/>}</p>

            <div className="MainAu">

        
            <video width="100%" controls>
                  <source
                    src={
                        mainVideo.video_url != null
                        ? `http://localhost:8000/${mainVideo.video_url}`
                        : "https://youtu.be/dgfTiONcnTc"
                    }
                    type="video/mp4"
                  />
                </video>
        
                <button class="centered-Au fw-bold ">Show Result</button>
                <h6 class="Left-Au fw-bold text-light">🤍 120</h6>
            </div>

        </div>

        <div className="row AuB mt-3">
            <div className="row ms-1">
                <h4 className="text-warning text-center fw-bold pt-3 pb-1 hrT ">Participants</h4>
            </div>


{audition.participant.map((videos)=>(

            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                   
                        <Card.Body>
                
                    <video width="100%" controls>
                  <source
                    src={
                        videos?.video_url != null
                        ? `http://localhost:8000/${mainVideo.video_url}`
                        : "https://youtu.be/dgfTiONcnTc"
                    }
                    type="video/mp4"
                  />
                </video>
               
                    </Card.Body>
                     
                    <Card.Footer style={{ border: 'none' }}>
                        <div className="row audition-belowDiv">
                            <div className="col-md-5">
                                <button className="d-flex justify-content-center icon-style"
                                    style={{ backgroundColor: '#ffad00'}}>
                                    <div className="mt-2">
                                        <i style={{ color: '#fff' }} class="fas fa-heart mx-1"></i>
                                        <span className="text-white">Like</span>
                                    </div>
                                </button>
                            </div>

                            <div className="col-md-7">
                                <div className="love-count">
                                    <div className="d-flex justify-content-end">
                                        <div className="mt-2 me-2">
                                            <i style={{ color: 'red' }} className="fas fa-heart mx-1"></i>
                                            <span className='text-light'>120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>

            </div>

            ))}




        </div>

    </div>
        </>
    ))}
</>
);
};

export default AuditionGuitar;