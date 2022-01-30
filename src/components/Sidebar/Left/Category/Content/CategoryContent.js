import React, { useState } from "react";
import { Link } from 'react-router-dom';
import EventImg from '../../../../../images/FootbalImage.jpg';
import BlockCat from "../Content/Block/BlockCat";
import './CategoryJs.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Dropdown } from "react-bootstrap";
const CategoryContent = () => {

  const [modalShow, setModalShow] = useState(false);
  const [mainData, setMainData] = useState([{
    id: 1,
    bgImg: EventImg,
    categoryName: 'Cricket',
    follow: true,
    block: false,

  },
  {
    id: 2,
    bgImg: EventImg,
    categoryName: 'FootBall',
    follow: false,
    block: true,
  },
  {
    id: 3,
    bgImg: EventImg,
    categoryName: 'Tennes',
    follow: true,
    block: true,

  },
  {
    id: 4,
    bgImg: EventImg,
    categoryName: 'Tennes',
    follow: true,
    block: true,

  },
  {
    id: 5,
    bgImg: EventImg,
    categoryName: 'Tennes',
    follow: true,
    block: true,

  },

  {
    id: 6,
    bgImg: EventImg,
    categoryName: 'Tennes',
    follow: true,
    block: false,

  }


  ])
  const [data, setData] = useState([
    {
      id: 1,
      bgImg: EventImg,
      categoryName: 'Cricket',
      follow: true,
      block: false,
    },
    {
      id: 2,
      bgImg: EventImg,
      categoryName: 'FootBall',
      follow: false,
      block: true,
    },
    {
      id: 3,
      bgImg: EventImg,
      categoryName: 'Tennes',
      follow: true,
      block: true,

    },
    {
      id: 4,
      bgImg: EventImg,
      categoryName: 'Tennes',
      follow: true,
      block: true,
    },
  ])

  const [value, setValue] = useState(true);
  const [btn, setBtn] = useState("Follow");
  const headerStyle = {
    BorderStyle: {
      borderRadius: '5px',
    }
  }

  return (
    <>

      <div className="bg-dark my-4 d-flex justify-content-between" style={headerStyle.BorderStyle}>
        <h4 className="text-light p-3">Entertainment</h4>
        <h4 className="p-3">
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              <FilterListIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item onClick={() => setData(mainData)} className="text-warning">Show all</Dropdown.Item>
              <Dropdown.Item onClick={() => setData(data.filter((item) => {
                return item.follow === true;
              }))} className="text-warning">Following</Dropdown.Item>
              <Dropdown.Item onClick={() => setData(mainData.filter((item) => {
                return item.block === true;
              }))} className="text-warning">Blocked</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </h4>
      </div>







      <div className="col-md-12 mt-3">
        <div className="row">
          {data.map((singleData) => {
            return (
              <div className="containerSa col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={singleData.bgImg} className="ImgCatView" alt={EventImg} />
                      <button className="border-light bottom-left-View text-light" onClick={() =>
                        setModalShow(true)}>Block</button>
                      <BlockCat show={modalShow} onHide={() => setModalShow(false)} />

                      <div class="CenterAda p-3">|</div>
                      <button className="border-light bottom-right-View text-light" type="button" onClick={() => {
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

                <Link to='/category-profile'>
                  <div className='CatBgView '>
                    <div className="text-success fw-bold ">
                      <h6 className='centeredASd fw-bold text-warning'>
                        {singleData.categoryName}
                      </h6>
                    </div>
                  </div>
                </Link>

              </div>
            )
          })}


          {/* 
      <div className="containerSa col-md-4 mb-3">

        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EventImg} className="ImgCatView" alt={EventImg} />
              <button className="border-light bottom-left-View text-light" onClick={()=>
                setModalShow(true)}>Block</button>
              <BlockCat show={modalShow} onHide={()=> setModalShow(false)} />
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

        <Link to='/category-profile'>
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
              <button className="border-light bottom-left-View text-light" onClick={()=>
                setModalShow(true)}>Block</button>
              <BlockCat show={modalShow} onHide={()=> setModalShow(false)} />
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

        <Link to='/category-profile'>
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
              <button className="border-light bottom-left-View text-light" onClick={()=>
                setModalShow(true)}>Block</button>
              <BlockCat show={modalShow} onHide={()=> setModalShow(false)} />
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

        <Link to='/category-profile'>
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
              <button className="border-light bottom-left-View text-light" onClick={()=>
                setModalShow(true)}>Block</button>
              <BlockCat show={modalShow} onHide={()=> setModalShow(false)} />
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

        <Link to='/category-profile'>
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
              <button className="border-light bottom-left-View text-light" onClick={()=>
                setModalShow(true)}>Block</button>
              <BlockCat show={modalShow} onHide={()=> setModalShow(false)} />
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

        <Link to='/category-profile'>
        <div className='CatBgView '>
          <div className="text-success fw-bold ">
            <h6 className='centeredASd fw-bold text-warning'>
              Tennis
            </h6>
          </div>
        </div>
        </Link>

      </div> */}

        </div>
      </div>
    </>
  )
}

export default CategoryContent