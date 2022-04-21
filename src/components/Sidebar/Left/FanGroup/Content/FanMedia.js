import React, { useEffect, useState } from 'react'
import Media from '../../../../../images/vuiuru1u.png'
import Media1 from '../../../../../images/tx40i2ib.png'
import Media2 from '../../../../../images/bmsrbccp.png'
import Media3 from '../../../../../images/e3fyn0v1.png'
import Media4 from '../../../../../images/1ukfvg1a.png'
import Media5 from '../../../../../images/ltfqhym3.png'
import ReactPlayer from "react-player";
import '../Content/FanStar.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const FanMedia = () => {

    const { slug } = useParams();
    console.log("slug ", slug);
    const [fanMedia, setFanMedia] = useState([]);
    const [fanMediaVideo, setFanMediaVideo] = useState([]);
    console.log("fanMedia xxxxxxxxxxxxxxxx ", fanMediaVideo);

    useEffect(() => {
        axios.get(`/api/user/fan/group/post/show/${slug}`).then((res) => {
            console.log("fan Group", res.data);
            if (res.status === 200) {
                setFanMedia(res.data.fanMedia);
                setFanMediaVideo(res.data.fanVideo);
            }
        });
    }, [slug]);

return (
<>

    <div className="MediaBG mt-3">

        <div className="row ms-1 me-1">

            {fanMedia.map((media, i) => ( 
                <img src={`http://localhost:8000/${media.image}`} className='img-fluid MediaImg col-md-4 m-2' style={{height: '150px'}} alt="" />
            ))}
        </div>

    </div>

    <div className="MediaBG mt-3">

        <div className="row ms-1 me-1">
        
        {fanMediaVideo.map((media, i) => ( 
                <ReactPlayer className='MediaVideosg mb-3'
                  url={`http://localhost:8000/${media.video}`}
                  autoplay
                  controls="true"
                />
                ))}
        </div>

    </div>

</>
)
}

export default FanMedia