import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import frame from "../../../images/CHOOSE-CATEGORY-Box.png";
import "../../CSS/Category/Category.css";
import Navigation from "../../Header/Navigation";
import "./components/CategoryBtn";
import './CoreCategory.css';

const CoreCategory = () => {

  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setCategory] = useState([]);

  // const [checked, setChecked] = useState([]);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  console.log('IsCheck State', isCheck);
  console.log('SelectAll', isCheckAll);



  const history = useHistory();


  // @TODO: Loading Category Data
  useEffect(() => {
    axios.get(`/api/view-category`).then(res => {
      // console.log(res.data.category);
      if (res.status === 200) {
        setCategoryList(res.data.category)
      }
      setLoading(false);
    });
  }, []);


  // @TODO: All Select Functionality
  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(categoryList.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([])
    }
  }



  // @TODO: Select Unselect Functionality
  const handleClick = (e) => {
    const { id, checked } = e.target;
    const parseId = parseInt(id);
    setIsCheck([...isCheck, parseId]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseId));
    }
  };






  const handleInput = (e) => {
    e.persist();
    setCategory({ ...selectCategory, [e.target.name]: e.target.value });
  }

  // const handleToggle = (value) => {

  //   const currentIndex = checked.indexOf(value);

  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value)
  //   } else {
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   setChecked(newChecked);

  // }


  const loginSubmit = (e) => {

    if (isCheck.length > 0) {
      e.preventDefault();

      //console.log(Checked);

      const data = {
        cat: isCheck
      }


      axios.post(`/api/select_category`, data).then(res => {
        if (res.data.status === 200) {
          //swal("Success",res.data.message,"success");
          //  console.log(res.data.length);
          //localStorage.setItem('category', res.data.length);

          //history.push('/subCategory');

          history.push({
            pathname: '/',
            //search: '?query=abc',
            //state: { detail: res.data.length }
          });
        }
        else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        }
        else {
          setCategory({ ...selectCategory, error_list: res.data.validation_errors });
        }
      });
    }



  }



  const handleRoute = () => {
    history.push('/')
  }





  var viewCategory = "";

  if (loading) {
    //return <h5>Loading Category...</h5>
  }
  else {
    viewCategory =
      categoryList.map((item, index) => {
        return (
          <div className="col-md-3  text-center" id="id_work_days">

            <label className=''>
              <input key={item.id} id={item.id} name={item.name} type="checkbox" onChange={handleClick} checked={isCheck.includes(item.id)} />
              <span className='btn btn-warning core-category-btn my-3 category-core py-auto'>{item.name}</span>
            </label>

          </div>

        )
      });
  }





  return (
    <>

      <Navigation />

      <div className="main-container">
        <div className="container category-contaienr p-5 bg-dark  bg-img">
          <div className="d-flex justify-content-center align-items-center">
            <div className="center-frame">
              <img src={frame} alt="" className="frame" />
              <h6 className="category-title">CHOOSE CATEGORY</h6>
            </div>
          </div>

          <div className="row">
            {viewCategory}
          </div>

          <div className="category-footer mt-5 ">
            {/* <h6 className=" text-center mt-2">
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <span className="text-light">Choose at least 5 Categories</span>{" "}
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <i className="far fa-star text-warning mx-1"></i>
            </h6> */}




            <div className="ct-btn d-flex justify-content-between">
              <div>
                <div className='d-flex coreCategory'>

                  <input className='css-checkbox mx-2' type="checkbox" id="selectAll" name="selectAll" onChange={handleSelectAll} checked={isCheckAll} />
                  <label className='selectAll' for="selectAll"><span className="ms-2">Select All</span></label>

                  {/* <p className="text-warning">Select All</p>
                  <input name="checkbox" className='checkboxInput' type="checkbox" id="" /> */}
                </div>

              </div>

              <div>

                <button onClick={loginSubmit} className="btn mt-3 mx-2 cg-done">Done</button>
              </div>


              <div>
                <div onClick={handleRoute} className='d-flex align-items-center coreCategorySkip px-4 py-1'>
                  <div className='text-warning pt-1 skipFont'>Skip</div>
                  <i className="fa-solid fa-arrow-right text-light pt-1 iconRight ms-2"></i>
                </div>
              </div>




            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoreCategory;
