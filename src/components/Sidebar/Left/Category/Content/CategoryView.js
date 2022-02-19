import React, { useEffect, useState } from "react";
import Navigation from "../../../../Header/Navigation";
import LeftSidebar from "../../../LeftSidebar";
import { Dropdown } from "react-bootstrap";
import RightSidebar from "../../../RightSidebar";
import CategoryContent from "./CategoryContent";
import SuggestedCategory from "./SugesstedCategory";
import axios from "axios";
import { useHistory } from "react-router-dom";

import cricketImg from '../../../../../images/cricket.jpg';
import footballImg from '../../../../../images/footballImg.jpg';
import tennisImg from '../../../../../images/tennis.jpeg';
import golfImg from '../../../../../images/golf.jpg'
import pubg from '../../../../../images/pubg.jpeg'
import archaryImg from '../../../../../images/archery.jpg'

import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryContentMap from './CategoryContentMap';

const CategoryView = (props) => {
  const [subCategory, setSubCategory] = useState([]);

  const headerStyle = {
    BorderStyle: {
      borderRadius: '5px',
    }
  }

  let history = useHistory();

  function handleClick() {
    history.push("/category");
  }

  useEffect(() => {
    const cat_slug = props.match.params.slug;
    console.log(cat_slug);

    axios.get(`/api/subcategory/${cat_slug}`).then((res) => {
      if (res.data.status === 200) {
        setSubCategory(res.data.subcategory);
        setData(res.data.subcategory);
        console.log("subcat", res.data.subcategory);
      }
    });
  }, [props.match.params.slug]);

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
    
    
  ])

  return (
    <React.Fragment>
      <Navigation />
      <div className="homebody" style={{ background: "#000000" }}>
        <div className="container-fluid  custom-container">
          <div className="row">
            <div className="col-sm-3 justify-content-center container-fluid custom-container-left-Right postLeft">
              <LeftSidebar />
            </div>

            <div className="col-sm-6 justify-content-center postTab">
              <div
                className="bg-dark my-4 d-flex justify-content-between"
                style={headerStyle.BorderStyle}
              >
                <div className="d-flex justify-content-center px-3 pt-4 pb-2">
                  <button
                    onClick={handleClick}
                    className="mx-2 bg-dark border-0 pb-2"
                  >
                    <i className="fas fa-backward text-warning fw-bold "></i>
                  </button>

                  <h4 className="text-light fw-bolder mt-1">Entertainment</h4>
                </div>

                <h4 className="px-3 pt-3 pb-2">
                  <div className="dropdownCategory">
                    <Dropdown>
                      <Dropdown.Toggle variant="bg-warning" id="dropdown-basic">
                        <FilterListIcon className="text-white" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setData(mainData)}
                          className="text-white borderBottomDropdown fw-bold py-3"
                        >
                          Show all
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            setData(
                              data.filter((item) => {
                                return item.follow === true;
                              })
                            )
                          }
                          className="text-white fw-bold borderBottomDropdown py-3"
                        >
                          Following
                        </Dropdown.Item>
                        <Dropdown.Item className="text-white fw-bold borderBottomDropdown py-3">
                          UnFollowing
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            setData(
                              mainData.filter((item) => {
                                return item.block === true;
                              })
                            )
                          }
                          className="text-white borderBottomDropdown fw-bold py-3"
                        >
                          Blocked
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </h4>
              </div>

              <div className="col-md-12 mt-3">
                <div className="row">
                  {data.map((singleData) => {
                    return (
                      
                      <CategoryContentMap
                        singleData={singleData}
                        key={singleData.id}
                      />
                    );
                  })}
                </div>
              </div>

              <SuggestedCategory headerStyle={headerStyle} />
            </div>

            <div className="col-md-3 justify-content-center container-fluid custom-container-left-Right  postRight">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryView;
