import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../../../../CSS/Audition/Audition.css';

const AuditionCard = (props) => {
    console.log();
    return (

        <div className="col-md-6">
            <Card className="audition-card-style my-3 p-2">
                <Card.Body>
                    <ReactPlayer url={props.video.link} className="img-fluid" playing={false}
                        volume={1} onReady={() => console.log("ready now")}
                    />
                </Card.Body>

                <Card.Footer style={{ border: 'none' }}>
                    <div className="row audition-belowDiv">
                        <div className="col-md-5">
                            <button className="d-flex justify-content-center icon-style" style={{ backgroundColor: '#ffad00'}}>
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


    );
};

export default AuditionCard;