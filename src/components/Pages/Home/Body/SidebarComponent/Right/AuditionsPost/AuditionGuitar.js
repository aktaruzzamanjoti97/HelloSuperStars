import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import '../../../../CSS/Audition/Audition.css';
// import { youtubeLink } from '../../../../../../../DummyData'
import './AuditionGuitar.css'
import BannerL from '../../../../../../../images/maxresdefault.jpg'
import avaterImage from "../../../../../../../images/maxresdefault.jpg";
// import guitarParticipant from "../../../../../../../../images/guitarParticipate.png";
// import singleFrame from "../../../../../../../../images/Normal-User/Single-frame.png";
// import applePayLogo from "../../../../../../../../images/Payment-img/Apple_Pay_logo.png";
// import bKashLogo from "../../../../../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
// import payoneerLogo from "../../../../../../../../images/Payment-img/Payoneer-Logo.wine.png";
// import payPalLogo from "../../../../../../../../images/Payment-img/PayPal-Logo.wine.png";
// import visaLogo from "../../../../../../../../images/Payment-img/Visa_Inc._logo.svg.png";

const AuditionGuitar = (props) => {
console.log();
return (
<>
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

        <div className="row AuB mt-3 px-5">
            <h4 className="text-warning text-center fw-bold pt-5 pb-3 hrT">Guitar chord</h4>
            <p className='text-light text-center'>Description</p>
            <p className='text-light text-center'>orem ipsum dolor sit amet,consectetur adipiscing elit. Duis accumsan
                vel nulla at euismod. Sed ipsum magna orem ipsum dolor sit amet,consectetur adipiscing elit. Duis
                accumsan vel nulla at euismod. Sed ipsum magna orem ipsum dolor sit amet,consectetur adipiscing elit.
                Duis accumsan vel nulla at euismod. Sed ipsum magna</p>

            <div className="MainAu">
                <img src={BannerL} alt="" className='ImgAudi img-fluid mb-3' />
                <button class="centered-Au fw-bold ">Show Result</button>
                <h6 class="Left-Au fw-bold text-light">🤍 120</h6>
                <h5 class="Right-Au fw-bold text-light"><i class="fa-solid fa-expand "></i></h5>
            </div>

        </div>

        <div className="row AuB mt-3">
            <div className="row ms-1">
                <h4 className="text-warning text-center fw-bold pt-3 pb-1 hrT ">Participants</h4>
            </div>
            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                    <Card.Body>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=LRtEJPSj2-8"} className="img-fluid VideoAU"
                            playing={false} volume={1} onReady={()=> console.log("ready now")}
                            />
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
            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                    <Card.Body>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=LRtEJPSj2-8"} className="img-fluid VideoAU"
                            playing={false} volume={1} onReady={()=> console.log("ready now")}
                            />
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

            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                    <Card.Body>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=LRtEJPSj2-8"} className="img-fluid VideoAU"
                            playing={false} volume={1} onReady={()=> console.log("ready now")}
                            />
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
            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                    <Card.Body>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=LRtEJPSj2-8"} className="img-fluid VideoAU"
                            playing={false} volume={1} onReady={()=> console.log("ready now")}
                            />
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
            <div className="col-md-4">
                <Card className="AUa my-3 p-2">
                    <Card.Body>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=LRtEJPSj2-8"} className="img-fluid VideoAU"
                            playing={false} volume={1} onReady={()=> console.log("ready now")}
                            />
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
        </div>

    </div>
</>
);
};

export default AuditionGuitar;