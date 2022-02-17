import React, {useState, useEffect, useRef} from 'react';
import '../CSS/AccountCreate/accountCreate.css'
import avaterImage from '../../images/CreateAccount-page/Avater.png'
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../Header/Navigation'
import axios from 'axios';
import swal from 'sweetalert';




const AccountCreate = () => {
  const [file, setFile] = useState('');
  const [user, setUser] = useState([]);
  const [interest, setInterestType] = useState([]);
  const [modal, setModal] = useState(false);
  const [imagedata, setImagedata] = useState('');

  const history = useHistory();


  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);
}


  function ModalClick(event) {
    event.preventDefault();
    setModal(!modal);
    console.log(modal);
  }


    const [registerInput, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        dob: '',
        error_list: []
    });

    const [infoInput, setInfo] = useState({
      occupation: '',
      edu_level: '',
      institute: '',
      subject: '',
      position: '',
      company: '',
      salery_range: '',
      error_list: []

  });

    const [dateInput, setDate] = useState('');
    const [countryInput, setCountry] = useState('');


    //const [regvalue,setRegValue]=useState('');

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const handleInfo = (e) => {
      e.persist();
      setInfo({...infoInput, [e.target.name]: e.target.value});
    }

    const handleDateInput = (e) => {
        setDate(e.target.value);
    }

    const handleCountryInput = (e) => {
      setCountry(e.target.value);
    }

    

    useEffect(() => {
      axios.get(`/api/user_info`).then(res =>{
        
        if(res.status === 200)
        {
          setUser(res.data.users)
          setRegister(res.data.users)
          setInfo(res.data.info)
          setFile('http://localhost:8000/'+res.data.users.image)
          //setFile(`http://localhost:8000/${star.image}`)
          //setDate(registerInput.user_info != null ? registerInput.user_info.dob : '')
          setDate(res.data.users.user_info != null ? res.data.users.user_info.dob : '')
          setCountry(res.data.users.user_info != null ? res.data.users.user_info.country: '')
        }
  
        // console.log(dateInput);
      });
      
      axios.get(`/api/user/interest/type`).then(res =>{
        
        if(res.status === 200)
        {
          setInterestType(res.data.allinteresttypes)
        }
  
        
      });

      }, []);

      // console.log('check ',interesttype)


      const registerSubmit = (e) => {
        e.preventDefault();

        const fData = new FormData();

        fData.append('image', imagedata);
        fData.append('first_name', registerInput.first_name);
        fData.append('last_name', registerInput.last_name);
        fData.append('phone', registerInput.phone);
        fData.append('email', registerInput.email);
        fData.append('dob', dateInput);
        fData.append('country', countryInput);
        
        // const data = {
        //     first_name: registerInput.first_name,
        //     last_name: registerInput.last_name,
        //     email: registerInput.email,
        //     phone: registerInput.phone,
        //     dob: dateInput,
        //     country: countryInput,
        //     image: imagedata,
        // }


        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post(`/api/user_info_update`, fData).then(res => {
            if(res.data.status === 200)
              {
                swal("Success",res.data.message,"success");
              }
              else if(res.data.status === 401)
                {
                  swal("Warning",res.data.message,"warning");
                }
              else{
                  setRegister({ ...registerInput,error_list: res.data.validation_errors });
                }
            });
        });

      }


      const infoSubmit = (e) => {
        e.preventDefault();

        const fData = new FormData();

        fData.append('occupation', infoInput.occupation);
        fData.append('edu_level', infoInput.edu_level);
        fData.append('institute', infoInput.institute);
        fData.append('subject', infoInput.subject);
        fData.append('position', infoInput.position);
        fData.append('company', infoInput.company);
        fData.append('salery_range', infoInput.salery_range);

        console.log(infoInput.occupation);


        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post(`/api/user_otherInfo_update`, fData).then(res => {
            if(res.data.status === 200)
              {
                //swal("Success",res.data.message,"success");

                setModal(!modal);
              }
              else if(res.data.status === 401)
                {
                  swal("Warning",res.data.message,"warning");
                }
              else{
                  setRegister({ ...registerInput,error_list: res.data.validation_errors });
                }
            });
        });

      }


      // console.log('check ',interest)
  return (

    <>
    <Navigation />
      <div className='full-container'>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12  account-create-bg my-5 ">
              <div className="avater-img my-3 text-center">
                <img
                  src={file === "" ? avaterImage : file}
                  
                  className="img-fluid avater-img-src"
                  alt={file}
                />
              </div>
              <div className="upload-input text-center my-2">
                <div className="parent-div">
                  <button className="btn btn-dark btn-upload">
                    Upload Profile Picture
                  </button>
                  <input type="file" className="btn" onChange={(e) => handleChange(e.target.files)} />
                </div>
              </div>

              {/* Basic info form style start here left side */}
              <form className="p-3" onSubmit={registerSubmit}>
                <div className="form-group row my-4">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-3 col-form-label col-form-label-sm text-light"
                  >
                    Name
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control form-control-sm account-input-style"
                      id="colFormLabelSm"
                      onChange={handleInput} name='first_name' value={registerInput.first_name}
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control form-control-sm account-input-style"
                      id="colFormLabelSm"
                      placeholder="Last Name"
                      value={registerInput.last_name}
                      onChange={handleInput} name='last_name'
                    />
                  </div>
                </div>

                <div className="form-group row my-3">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-3 col-form-label col-form-label-sm text-light"
                  >
                    Phone
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control form-control-sm account-input-style"
                      id="colFormLabelSm"
                      
                      onChange={handleInput} name='phone' value={registerInput.phone}
                    />
                  </div>
                </div>

                <div className="form-group row my-3">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-3 col-form-label col-form-label-sm text-light"
                  >
                    Email
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control form-control-sm account-input-style"
                      id="colFormLabelSm"
                     
                      onChange={handleInput} name='email' value={registerInput.email}
                    />
                  </div>
                </div>

                <div className="form-group row my-3">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-3 col-form-label col-form-label-sm text-light"
                  >
                    Birthday
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="date"
                      className="form-control form-control-sm account-input-style"
                      name="dob"
                      value={dateInput}
                      onChange={handleDateInput}
                    />
                  </div>

                  
                </div>

                <div className="form-group row my-3">
                  <label
                    for="colFormLabelSm"
                    className="col-sm-3 col-form-label col-form-label-sm text-light"
                  >
                    Country
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control form-control-sm account-input-style"
                      id="colFormLabelSm"
                      name='country'
                      //defaultValue={registerInput.user_info != null ? registerInput.user_info.country : ''}
                      value={countryInput}
                      onChange={handleCountryInput}
                    />
                  </div>
                </div>

                <div className="text-center my-2 ">
                  <button className="btn btn-warning px-4 w-50 text-light" type='submit'>
                    Save
                  </button>
                </div>
              </form>

              {/* Basic info form style end here left side */}
            </div>

            {/* left div end */}
            {/* 
right div and info field start */}

            <div className="col-md-8 col-sm-12 col-lg-8 mt-5  ">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 account-create-bg p-4">
                    {/* professional info form start */}
                    <form onSubmit={infoSubmit}>
                      <h5 className="text-warning other-info-title my-2">
                        Other Information
                      </h5>
                      <div className="form-group row my-3">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light "
                        >
                          Selected your Occupation
                        </label>
                        <div className="col-sm-6">
                          <select class="form-control form-control-sm account-input-style" onChange={handleInfo} name='occupation' value={infoInput.occupation}>
                            <option value="Student">Student</option>
                            <option value="Businessman">Businessman</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <h5 className="text-warning other-info-title mt-2">
                        Education
                      </h5>
                      <div className="form-group row my-3">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light"
                        >
                          Educational Level
                        </label>
                        <div className="col-sm-6">
                          <select class="form-control form-control-sm account-input-style" onChange={handleInfo} name='edu_level' value={infoInput.edu_level}>
                            <option value="JSC">JSC</option>
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="Honours/Degree">Honours/Degree</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row my-3">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light"
                        >
                          Institute
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-sm account-input-style"
                            id="colFormLabelSm"
                            placeholder="Daffodil International University"
                            onChange={handleInfo} name='institute' value={infoInput.institute}
                          />
                        </div>
                      </div>

                      <div className="form-group row my-3">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light"
                        >
                          Subject
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-sm account-input-style"
                            id="colFormLabelSm"
                            placeholder="CSE"
                            onChange={handleInfo} name='subject' value={infoInput.subject}
                          />
                        </div>
                      </div>
                      <h5 className="text-warning other-info-title mt-2">
                        Employment
                      </h5>
                      <div className="form-group row my-3">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light"
                        >
                          Position
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-sm account-input-style"
                            id="colFormLabelSm"
                            placeholder="IT manager"
                            onChange={handleInfo} name='position' value={infoInput.position}
                          />
                        </div>
                      </div>
                      <div className="form-group row my-4">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light"
                        >
                          Company
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-sm account-input-style"
                            id="colFormLabelSm"
                            placeholder="TFP solutions ltd"
                            onChange={handleInfo} name='company' value={infoInput.company}
                          />
                        </div>
                      </div>

                      <div className="form-group row my-4">
                        <label
                          for="colFormLabelSm"
                          className="col-sm-6 col-form-label col-form-label-sm text-light pb-4"
                        >
                          Salay range
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-sm account-input-style"
                            id="colFormLabelSm"
                            placeholder="15000-20000"
                            onChange={handleInfo} name='salery_range' value={infoInput.salery_range}
                          />
                        </div>

                        
                      </div>

                      <div className="form-group row my-1">
                        <div className='col-sm-6'></div>
                        <button type='submit' className='btn btn-warning text-light col-md-6 col-sm-6 col-xs-6 mx-auto'>Save</button>
                      </div>


                    </form>

                    {/* professional info form end */}
                  </div>
                  {/* middle div end */}
                  {/* right side div start */}
                  <div className="col-md-4 px-4 d-flex justify-content center align-items-center account-create-bg">
                    <div className="vl w-25"></div>
                    <div className="checkbox-items">
                      <h5 className="text-warning other-info-title">
                        Field of interest
                      </h5>
                      <form className="text-warning checkbox-input-size" >

                       {/* {console.log('check ',interest)} */}

                       {interest.map((event) => 
                        //  {console.log('check ',event.interest_type)}
                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            {event.interest_type}
                          </label>
                        </div>
                        )}

                        <button onClick={ModalClick} className='btn btn-warning text-light sav-btn-ca  my-4'>Save</button>
                        


                      </form>
                      <div className=''>
                     <Link to='/coreCategory'> <button className='Skip-bt-ac mb-3'>Skip</button></Link>
                      </div>
                    
                  </div>
                    
                      
                    </div>
                    

                  {/* left div end */}
                  
                </div>
               
              </div>
            </div>
          </div>
          
        </div>
        

        {/* Modal start */}

      </div>
      {modal && (
        <div className="modal-container1">
          <div onClick={ModalClick} className="overlay-color1"></div>
          <div className="modal-content1">
            <p className='text-light'>
              Would you like to get our newsletter and promotional offers through email?
            </p>
            <div className="choose-btn1">
              <Link to='/coreCategory' className='btn btn-warning text-light w-25'>Yes</Link>
              <button className="btn text-warning w-25" onClick={ModalClick}>
                No
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )

}

export default AccountCreate
