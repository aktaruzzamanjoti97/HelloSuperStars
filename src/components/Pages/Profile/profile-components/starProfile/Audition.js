import React from 'react'
import { Card } from 'react-bootstrap'
import quranLight from '../../../../../images/Audition-images/quranLight-removebg-preview.png'
import ReactPlayer from "react-player";
import '../../../../CSS/Audition/Audition.css'
import AuditionCard from './AuditionCard';
import { youtubeLink } from '../../../../../DummyData'

export default function Audition() {
    return (
        <div>
            <div className="text-light">
                <Card>
                    <Card.Body style={{ backgroundColor: '#9689ef' }}>
                        <div className="row">
                            <div className="col-md-5">
                                <img className="w-75 pb-2 img-fluid" src={quranLight} alt="" />
                            </div>
                            <div className="col-md-7">
                                <div className="d-flex align-items-center w-100 h-100">

                                    <div className="p-2">
                                        <h3>Quran Reciting Challenge</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima dolores eveniet facere debitis in blanditiis error rerum accusantium repellendus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <div className="row">
                    {
                        youtubeLink.map(video => <AuditionCard video={video} />)
                    }
                </div>


                {/* <div className="row">
                    <div className="col-md-6">

                    </div>

                    <div className="col-md-6">
                        <Card className="audition-card-style">
                            <Card.Body>
                                <ReactPlayer url="https://youtu.be/3jtqM_EsUCQ" className="img-fluid" playing={false}
                                    volume={1} onReady={() => console.log("ready now")}
                                />


                            </Card.Body>

                            <Card.Footer style={{ border: 'none' }}>
                                <div className="row audition-belowDiv">
                                    <div className="col-md-5">
                                        <button className="d-flex justify-content-center icon-style" style={{ backgroundColor: '#ffad00', width: '100%', height: '100%', border: 'none' }}>
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
                                                    <span>120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div> */}
            </div>
        </div>
    )
}