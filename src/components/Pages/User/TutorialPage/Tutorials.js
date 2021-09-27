import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../../CSS/Tutorial-page/Tutorials.css';
import TutorialCarousel1 from '../../../../images/Tutorial-Graphic_Web-04.png'
import TutorialCarousel2 from '../../../../images/Tutorial-Graphic_Web-04.png'
import TutorialCarousel3 from '../../../../images/Tutorial-Graphic_Web-04.png'

const Tutorials = () => {
return (
    <>
        <body className="bodyBG">
        <div className="CarouselBg">
        <div className="CarouselTutorial align-items-center">
            <div className="CarouselHead ">
                <div className="CarouselT1 d-block  align-items-center">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block " src={TutorialCarousel1 } alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block " src={TutorialCarousel2} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block " src={TutorialCarousel3 } alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                    
                </div>
            </div>
        </div>
    </div>
        
        </body>
</>
)
}

export default Tutorials