import React from 'react'
import { Lives } from '../../../DummyData';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';

import LiveSection from './LiveSction';

const LiveNowMenu = () => {
console.log(Lives);

return (
<>
    <div className="mt-3 LiveMoBG">
        <div className="text-light justify-content-between"> .</div> 
        <div className="">
            <OwlCarousel items={4} loop autoplay autoplayTimeout={3000} margin={0} dots={false}>
                {Lives.map((l) => (
                <LiveSection key={l.id} Live={l} name='check' />
                ))}

            </OwlCarousel>



        </div>
    </div>
</>
)
}

export default LiveNowMenu