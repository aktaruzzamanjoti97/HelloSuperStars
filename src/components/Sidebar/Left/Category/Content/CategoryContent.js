import { React, useState} from "react";
import { Link } from 'react-router-dom'
import './CategoryJs.css'
import EventImg from '../../../../../images/FootbalImage.jpg'

const CategoryContent = () => {

const [value, setValue] = useState(true);
const [btn, setBtn] = useState("Follow");

return (
<>

  <div className="col-md-12 mt-3">
    <div className="row">

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Football
            </h6>
          </div>
        </div>
        </Link>

      </div>

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Cricket
            </h6>
          </div>
        </div>
        </Link>

      </div>

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Tennis
            </h6>
          </div>
        </div>
        </Link>

      </div>

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Football
            </h6>
          </div>
        </div>
        </Link>

      </div>

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Cricket
            </h6>
          </div>
        </div>
        </Link>

      </div>

      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light">Block</button>
              <div class="CenterAda p-3">|</div>
              <button className="border-light bottom-right-View text-light" type="button" onClick={()=> {
                setValue(!value);
                if (value === true) {
                setBtn("Unfollow");
                }
                else {
                setBtn("Follow");
                }
                }}
                style={
                value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                }
                >{btn}</button>
            </div>
          </div>
        </div>

        <Link to='category-view'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Tennis
            </h6>
          </div>
        </div>
        </Link>

      </div>

    </div>
  </div>
</>
)
}

export default CategoryContent