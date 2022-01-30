import React from 'react'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
const FollowingCarousel = () => {
return (
<>
<OwlCarousel className='owl-theme DotsCAt' >
    <div class='item'>
        <h6 className='text-light py-2'>Hollywood</h6>
    </div>
    <div class='item'>
        <h6 className='text-light py-2'>Bollywood</h6>
    </div>
    <div class='item'>
        <h6 className='text-light py-2'>Dhallywood</h6>
    </div>
    <div class='item'>
        <h6 className='text-light py-2'>Hollywood</h6>
    </div>
    <div class='item'>
        <h6 className='text-light py-2'>Bollywood</h6>
    </div>
    <div class='item'>
        <h6 className='text-light py-2'>Dhallywood</h6>
    </div>
</OwlCarousel>;
</>
)
}

export default FollowingCarousel