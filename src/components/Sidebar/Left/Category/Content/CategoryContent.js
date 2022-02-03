import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import EventImg from '../../../../../images/FootbalImage.jpg';
import BlockCat from "../Content/Block/BlockCat";
import './CategoryJs.css';
import cricketImg from '../../../../../images/cricket.jpg';
import footballImg from '../../../../../images/footballImg.jpg';
import tennisImg from '../../../../../images/tennis.jpeg';
import golfImg from '../../../../../images/golf.jpg'
import pubg from '../../../../../images/pubg.jpeg'
import archaryImg from '../../../../../images/archery.jpg'
import SuggestedCategory from "./SugesstedCategory";
import { useHistory } from "react-router-dom";

const CategoryContent = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/category");
  }

  const [modalShow, setModalShow] = useState(false);
  const [mainData, setMainData] = useState([
    {
    id: 1,
    bgImg: cricketImg,
    categoryName: 'Cricket',
    follow: true,
    block: false,

  },
  {
    id: 2,
    bgImg: footballImg,
    categoryName: 'FootBall',
    follow: false,
    block: true,
  },
  {
    id: 3,
    bgImg: tennisImg,
    categoryName: 'Tennis',
    follow: true,
    block: true,
  },
  {
    id: 4,
    bgImg: golfImg,
    categoryName: 'Golf',
    follow: true,
    block: true,

  },
  {
    id: 5,
    bgImg: pubg,
    categoryName: 'Pubg',
    follow: true,
    block: true,

  },

  {
    id: 6,
    bgImg: archaryImg,
    categoryName: 'Archery',
    follow: true,
    block: false,

  }


  ])
  const [data, setData] = useState([
    {
      id: 1,
      bgImg: cricketImg,
      categoryName: 'Cricket',
      follow: true,
      block: false,
  
    },
    {
      id: 2,
      bgImg: footballImg,
      categoryName: 'FootBall',
      follow: false,
      block: true,
    },
    {
      id: 3,
      bgImg: tennisImg,
      categoryName: 'Tennis',
      follow: true,
      block: true,
    },
    {
      id: 4,
      bgImg: golfImg,
      categoryName: 'Golf',
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

        <div className="d-flex justify-content-center px-3 pt-4 pb-2">
          <button onClick={handleClick} className="mx-2 bg-dark border-0 pb-2"><i className="fas fa-backward text-warning fw-bold "></i></button>

          <h4 className="text-light fw-bolder mt-1">Entertainment</h4>
        </div>





        <h4 className="px-3 pt-3 pb-2">
          <div className="dropdownCategory">
            <Dropdown>

              <Dropdown.Toggle variant="bg-warning" id="dropdown-basic">
                <FilterListIcon className="text-white" />
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item onClick={() => setData(mainData)} className="text-white borderBottomDropdown fw-bold py-3">Show all</Dropdown.Item>
                <Dropdown.Item onClick={() => setData(data.filter((item) => {
                  return item.follow === true;
                }))} className="text-white fw-bold borderBottomDropdown py-3">Following</Dropdown.Item>
                <Dropdown.Item className="text-white fw-bold borderBottomDropdown py-3">UnFollowing</Dropdown.Item>
                <Dropdown.Item onClick={() => setData(mainData.filter((item) => {
                  return item.block === true;
                }))} className="text-white borderBottomDropdown fw-bold py-3">Blocked</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>


        </h4>
      </div>

      <div className="col-md-12 mt-3">
        <div className="row">
          {data.map((singleData) => {
            return (
              <div className="containerSa  col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active cateAS">
                      <img src={singleData.bgImg} className="ImgCatView" alt={EventImg} />

                      <div className="CatBG"></div>

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


        </div>
      </div>


      <SuggestedCategory headerStyle={headerStyle} />
    </>
  )
}

export default CategoryContent