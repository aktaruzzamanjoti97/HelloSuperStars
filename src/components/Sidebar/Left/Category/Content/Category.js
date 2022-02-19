import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EntertainmentImg from "../../../../../images/entertainmentImg.jpg";
import EventImg from "../../../../../images/FootbalImage.jpg";
import religionImg from "../../../../../images/religionImage.jpg";
import sportImg from "../../../../../images/sports.jpg";
import politicsImg from "../../../../../images/politics.jpg";
import educationImg from "../../../../../images/education.jpeg";
import musicImg from "../../../../../images/music.jpeg";
import "./CategoryJs.css";
import axios from "axios";

const Category = () => {
  const [categorylist, setCategorylist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/view-category`).then((res) => {
      console.log(res.data.category);
      if (res.status === 200) {
        setCategorylist(res.data.category);
      }
      setLoading(false);
    });
  }, []);

  var viewCategory = "";

  if (loading) {
    //return <h5>Loading Category...</h5>
  } else {
    viewCategory = categorylist.map((item, index) => {
      return (
        <div className="containerSa col-md-6 mb-3">
          <div
            id="carouselExampleCaptions"
            className="carousel w-100 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`http://localhost:8000/${item.image}`}
                  className="ImgCat"
                  alt={`http://localhost:8000/${item.image}`}
                />
                <div className="carousel-caption">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>


              {/* <div className="carousel-item">
                <img
                  src={EntertainmentImg}
                  className="ImgCat"
                  alt={EntertainmentImg}
                />
                <div className="carousel-caption">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={EntertainmentImg}
                  className="ImgCat"
                  alt={EntertainmentImg}
                />
                <div className="carousel-caption">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div> */}


            </div>
          </div>

          <Link to={`/category-view/${item.slug}`} >
            <div className="CatBgS ">
              <div className="text-success fw-bold ">
                <h4 className="centeredASd fw-bold text-warning">
                  <i className="fas fa-film"></i>&nbsp;
                  {item.name}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  return (
    <>
      <div className="col-md-12 mt-3">
        <div className="row">{viewCategory}</div>
      </div>
    </>
  );
};

export default Category;
