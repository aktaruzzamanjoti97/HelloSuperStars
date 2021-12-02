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


               
            </div>
        </div>
    )
}