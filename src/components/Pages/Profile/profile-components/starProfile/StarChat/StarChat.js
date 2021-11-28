import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import azhari from '../../../../../../images/starProfile/StarPhotos/1.jpg';
import '../../../../../CSS/Profile/starProfile/starChat.css';

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

const StarChat = () => {
    return (
        <>
            <Card style={{ backgroundColor: '#343434' }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="row whole-m-p">
                        <div className="col-md-3">
                            <div className="play-button-container">
                                <img
                                    src={azhari}
                                    alt=""
                                    className="img-fluid star-card-chat-demo-video"
                                />
                                <div class="play-center">
                                    <i class="fas fa-play fa-3x"></i>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-9">
                            <h4 className="starChat-heading">Live Chat</h4>
                            <div className="vb"></div>

                            <div className="mt-3 row">

                                <div className="col-md-6 display-style-starChat">
                                    <div className="me-5 starChat-child-style text-white">
                                        <h6>Star</h6>
                                        <h6>Date</h6>
                                        <h6>Time</h6>
                                        <h6>Fee</h6>
                                    </div>

                                    <div style={{ color: "#c2c2c2" }} className="mx-5 starChat-child-style">
                                        <h6>Mizanur Rahman Azhari</h6>
                                        <h6>12 / 08 / 2021</h6>
                                        <h6>11.59 PM</h6>
                                        <h6>999 BDT</h6>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="mx-2 starChat-child-style">
                                        <h5 className="text-white">Instructions</h5>
                                        <p style={{ color: '#c2c2c2' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis rerum, ex recusandae facere dolorem quia cumque sapiente natus cum nulla quas possimus corrupti minus tempora officia dolor earum sunt sit vel. Architecto, accusamus neque non minima doloribus culpa itaque!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="whole-m-p">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Name</big>
                                        <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Date of Birth</big>
                                        <input type="password" className="form-control input-overlay" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Phone Number</big>
                                        <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Location</big>
                                        <input type="password" className="form-control input-overlay" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group my-1">
                                <big className="text-white">Additional Message</big>
                                <input type="password" className="form-control input-overlay" id="exampleInputPassword1" />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group my-3">
                                        <big className="text-white">Password</big>
                                        <input type="password" className="form-control input-overlay" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="my-3 btn btn-gold">Register</button>
                        </form>
                    </div>

                </CardContent>

                {/* This is me */}
            </Card>
        </>
    );
};

export default StarChat;