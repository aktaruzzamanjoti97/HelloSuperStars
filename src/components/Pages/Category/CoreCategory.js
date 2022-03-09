import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import frame from "../../../images/Normal-User/Single-frame.png";
import "../../CSS/Category/Category.css";
import Navigation from "../../Header/Navigation";
import "./components/CategoryBtn";
import './CoreCategory.css';

const CoreCategory = () => {

  const [loading, setLoading] = useState(true);
  const [categorylist, setCategorylist] = useState([]);
  // console.log(categorylist);
  const [selectCategory, setCategory] = useState([]);
  console.log( 'selectcategory',selectCategory);

  const [checkAll, setCheckAll]=useState(false);
  const [checked, setChecked] = useState([]);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  console.log(checked)

  const history = useHistory();

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...selectCategory, [e.target.name]: e.target.value });
  }

  const handleToggle = (value) => {

    const currentIndex = checked.indexOf(value);

    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked);

  }


  const loginSubmit = (e) => {
    e.preventDefault();

    //console.log(Checked);

    const data = {
      cat: checked
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





  useEffect(() => {
    axios.get(`/api/view-category`).then(res => {
      // console.log(res.data.category);
      if (res.status === 200) {
        setCategorylist(res.data.category)
      }
      setLoading(false);
    });
  }, []);

  

  var viewCategory = "";

  if (loading) {
    //return <h5>Loading Category...</h5>
  }
  else {
    viewCategory =
      categorylist.map((item, index) => {
        return (
          <div className="col-md-3  text-center" id="id_work_days">

            <label className=''>
              <input name="checkbox" value={item.id} type="checkbox"  onChange={() => handleToggle(item.id)} />
              <span className='btn btn-warning core-category-btn my-3 category-core py-auto'>{item.name}</span>
            </label>

          </div>

        )
      });
  }

  const handleClick = () => {
    setCheckAll(!checkAll);
    setChecked(categorylist.map((item) => item.id));

    if(checkAll) {
      setChecked([])
    }
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

          <div className="category-footer mt-4 ">
            <h6 className=" text-center mt-2">
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <span className="text-light">Choose at least 5 Categories</span>{" "}
              <i className="far fa-star text-warning mx-1"></i>{" "}
              <i className="far fa-star text-warning mx-1"></i>
            </h6>




            <div className="ct-btn d-flex justify-content-between">
              <div>
                <div className='d-flex coreCategory'>

                  <input  className='css-checkbox me-2' type="checkbox" id="weekday-2" name="weekday-2" onChange={handleClick} checked={checkAll} />
                  <label className='selectAll' for="weekday-2">Select All</label>

                  {/* <p className="text-warning">Select All</p>
                  <input name="checkbox" className='checkboxInput' type="checkbox" id="" /> */}
                </div>

              </div>

              <div>
                <button onClick={loginSubmit} className="btn mt-3 mx-2 cg-done">Done</button>
                {/* <Link to='/'> <button className="btn mt-3 mx-2 cg-skip">Skip</button> </Link> */}
              </div>

              <div>
                <p className='text-warning'>Skip</p>
              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoreCategory;
