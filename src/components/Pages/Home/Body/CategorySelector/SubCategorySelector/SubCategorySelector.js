import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import slide6 from "../../../../../../images/homepage/images/Badminton.jpg";
import slide5 from "../../../../../../images/homepage/images/chess.jpg";
import slide4 from "../../../../../../images/homepage/images/education.webp";
import slide3 from "../../../../../../images/homepage/images/hacky.jpg";
import slide2 from "../../../../../../images/homepage/images/messi-ronaldo-1593920966.jpg";
import slide1 from "../../../../../../images/homepage/images/sakibCri.jpg";

const sliderImageLink = [
  {
    id: 1,
    slider: slide1,
    categoryName: "Cricket",
  },
  {
    id: 2,
    slider: slide2,
    categoryName: "Football",
  },
  {
    id: 3,
    slider: slide3,
    categoryName: "Tennis",
  },
  {
    id: 4,
    slider: slide4,
    categoryName: "Hacky",
  },
  {
    id: 5,
    slider: slide5,
    categoryName: "Chess",
  },
  {
    id: 6,
    slider: slide6,
    categoryName: "Badminton",
  },
];

const SubCategorySelector = ({onSelect, setOnSelect, catId, setCatId}) => {

  console.log(catId)

  let history = useHistory();

  const [select, setSelect] = useState({
    selectedCheckboxes: [],
  });

  console.log(select.selectedCheckboxes);

  const onChange = (obj) => {
    const selectedCheckboxes = select.selectedCheckboxes;

    // Find index
    const findIdx = selectedCheckboxes.indexOf(obj);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(obj);
    }

    setSelect({
      selectedCheckboxes: selectedCheckboxes,
    });
  };

  const [imageInfo, setImageInfo] = useState({});

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    // <img src={LeftArrow} alt="prevArrow" {...props} />
    <FaArrowLeft {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <FaArrowRight {...props} />
  );

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleSubCategory = (obj) => {
    const selectedCategory = select.selectedCheckboxes.filter(
      (data) => obj.id === data.id
    );
    console.log("SelectedCategory", selectedCategory);

    return (
      <>
        {selectedCategory.length
          ? history.push("/selector-nested-category")
          : null}
      </>
    );
  };

  const toggleHandler = (item) => () => {
    setImageInfo((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            slider: item.slider,
            categoryName: item.categoryName,
          },
    }));
  };
  

  const [subCatList, setSubCatlist] = useState([]);

  console.log('subCatList subCatList ', subCatList);

  useEffect(() => {
      axios.get(`/api/user/subcategory/${catId}`).then((res) => {
          console.log(res.data.category);
          if (res.status === 200) {
            setSubCatlist(res.data.allSubCat);
          }
      });
  }, []);

  const { selectedCheckboxes } = select;

  return (
    <div className="bgCategory container containerCategorySelector mt-3">
      <div className="p-1 sliderCategory">
        <div className="d-flex">
          {/* <Link to="/"> */}
            {" "}
            <button onClick={ () => setOnSelect(false)} className="btn btn-warning btnAngleDouble">
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
          {/* </Link> */}
          <small className="text-white mx-2">Sub Category </small>
        </div>

        <Slider {...settings}>
          {subCatList.map((i, idx) => {
            return (
              <>
                <div key={i.id} className="p-1">
                  <div>
                    <img
                      onClick={() => handleSubCategory(i)}
                      src={`http://localhost:8000/${i.image}`}
                      alt=""
                      className="img-fluid homePageCarouselImg btn"
                    />
                  </div>
                  <div className="d-flex justify-content-center socialMedia">
                    <div className="mx-1">
                      <div class="content">
                        <label class="switch m5">
                          <input
                            type="checkbox"
                            onChange={() => onChange(i)}
                            selected={selectedCheckboxes.includes(i.id)}
                          />
                          <small></small>
                        </label>
                      </div>
                    </div>
                    <small className="text-white mx-1">{i.name}</small>
                  </div>
                </div>
                {}
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SubCategorySelector;
