import  React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import FollowingMap from "./FollowingMap";
import FollowingCarousel from "./FollowingCarousel";

const FollowMain = () => {
  return (
    <>
      <div className="fl2">

        <div className="owlCarousel-sticky">
          <OwlCarousel className="owl-theme mt-2 btn-flo fowl-carousel" loop margin={0} nav>
              <FollowingCarousel/>
          </OwlCarousel>
        </div>
        
        <div className="col-12 row d-flex mainCat-follow ">
            <FollowingMap/>
        </div>
      
      </div>
    </>
  );
};

export default FollowMain;

