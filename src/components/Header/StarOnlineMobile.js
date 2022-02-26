import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Pic from '../../images/Shakib/pro.jpg';
const StaronLineMoStarbile = () => {
return (
<>
    <div className="StarOnline mb-3 my-2">

        <h6 className='text-warning mx-2 pt-2'>Star Online</h6>
        <OwlCarousel className='owl-theme PicOnC'>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
            <div className='item'>
                <img src={Pic} alt="" className='PicOn' />
                <div class="onLineMoStar">🟢</div>
                <h6 className='text-light StarOName mt-1'>Shakib Al Hasan</h6>
            </div>
        </OwlCarousel>
    </div>

</>
)
}

export default StaronLineMoStarbile