import React, {useState, useEffect} from 'react';
import "../../CSS/Category/Category.css";
import CategoryBtn from "./components/CategoryBtn";
import "./components/CategoryBtn";
import $ from 'jquery'
import frame from "../../../images/Normal-User/Single-frame.png";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../../Header/Navigation";
import axios from 'axios';
import swal from 'sweetalert';

const CoreCategory = () => {

  // $(document).ready(function () {

  //   var tmp = [];
    
  //   $("input[name='checkbox']").change(function() {
  //   var checked = $(this).val();
  //     if ($(this).is(':checked')) {
  //       tmp.push(checked);
  //     }else{
  //     tmp.splice($.inArray(checked, tmp),1);
  //     }
  //   });
   
  //   $('#button').on('click', function () {
  //      console.log(tmp);
  //   });
    
  // });

  const [loading, setLoading] = useState(true);
  const [categorylist, setCategorylist] = useState([]);
  const [selectCategory, setCategory] = useState([]);

  const [Checked, setChecked] = useState([]);

  const history = useHistory();

  const handleInput = (e) => {
    e.persist();
    setCategory({...selectCategory, [e.target.name]: e.target.value});
  }

  const handleToggle = (value) => {

    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];

    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)

}

  
  const loginSubmit = (e) => {
    e.preventDefault();

    //console.log(Checked);
    
    const data = {
        cat: Checked
    }

    
        axios.post(`/api/select_category`, data).then(res => {
            if(res.data.status === 200)
                {
                    swal("Success",res.data.message,"success");
                    console.log(res.data.length);
                    localStorage.setItem('category', res.data.length);

                    //history.push('/subCategory');

                    history.push({
                      pathname: '/subCategory',
                      search: '?query=abc',
                      state: { detail: res.data.length }
                    });
                }
                else if(res.data.status === 401)
                {
                    swal("Warning",res.data.message,"warning");
                }
                else{
                    setCategory({ ...selectCategory,error_list: res.data.validation_errors });
                }
        });

    
  }

  useEffect(() => {
    axios.get(`/api/view-category`).then(res =>{
      console.log(res.data.category);
      if(res.status === 200)
      {
        setCategorylist(res.data.category)
      }
      setLoading(false);
    });
  }, []);

  var viewCategory = "";

  if(loading)
  {
    //return <h5>Loading Category...</h5>
  }
  else
  {
    viewCategory = 
    categorylist.map( (item, index) => {
      return (
        <div className="col-md-3  text-center" id="id_work_days">

              <label >
                <input name="checkbox" value={item.id} type="checkbox" onChange={() => handleToggle(item.id)}/>
                <span className='btn btn-warning core-category-btn my-3 py-auto'>{item.name}</span>
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

        <div className="category-footer mt-4 ">
          <h6 className=" text-center mt-2">
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <span className="text-light">Choose at least 5 Categories</span>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>
          </h6>

          


          <div className="ct-btn text-center">
            <button onClick={loginSubmit} className="btn mt-3 cg-done">Done</button>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default CoreCategory;
