import React,{useState} from 'react'
import '../CSS/AccountCreate/accountCreate.css'
import avaterImage from '../../images/CreateAccount-page/Avater.png'
const AccountCreate = () => {
    const [file,  setFile] = useState('');
    console.log('file='+file);
    const handleChange = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]))
      }
    return (
       <div className='full-container'>
       <div className="container">
           <div className="row">

 <div className="col-md-4 col-sm-12  account-create-bg my-5 ">
<div className="avater-img my-3 text-center">
<img src={file===''?avaterImage:file} className='img-fluid avater-img-src' alt='profile-pic' />
</div>
<div className="upload-input text-center my-2">
    <div class="parent-div">
      <button class="btn btn-dark btn-upload">Upload Profile Picture</button>
      <input type="file" className='btn' onChange={handleChange}/>
    </div>

</div>

{/* Basic info form style start here left side */}
<form  className='p-3'>
  <div class="form-group row my-4">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Name</label>
    <div class="col-sm-8">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder='John Doe' />
    </div>
  </div>

  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Phone</label>
    <div class="col-sm-8">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="+880182700000" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Email</label>
    <div class="col-sm-8">
      <input type="email" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="myname@gmail.com" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Birthday</label>
    <div class="col-sm-8">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="12 Sep 1999" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Country</label>
    <div class="col-sm-8">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="Bangladesh" />
    </div>
  </div>

<div className="text-center my-2 ">
<button className='btn btn-warning px-4 w-50 text-light'>Save</button>
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
  <form >
<h5 className='text-warning other-info-title my-2'>Other Information</h5>
<div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light ">Selected your Occupation</label>
    <div class="col-sm-6">
  

      
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="Student" />
    </div>
  </div>
  <h5 className='text-warning other-info-title mt-2'>Education</h5>
  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light">Educational Level</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="Bsc" />
    </div>
  </div>

  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light">Institute</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="Daffodil International University" />
    </div>
  </div>

  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light">Subject</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="CSE" />
    </div>
  </div>
  <h5 className='text-warning other-info-title mt-2'>Employment</h5>
  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light">Position</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="IT manager" />
    </div>
  </div>
  <div class="form-group row my-4">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light">Company</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="TFP solutions ltd" />
    </div>
  </div>
  <div class="form-group row my-4">
    <label for="colFormLabelSm" class="col-sm-6 col-form-label col-form-label-sm text-light pb-4">Salay range</label>
    <div class="col-sm-6">
      <input type="text" class="form-control form-control-sm account-input-style" id="colFormLabelSm" placeholder="15000-20000" />
    </div>
  </div>


</form>

{/* professional info form end */}



</div>
{/* middle div end */}
{/* right side div start */}
<div className="col-md-4 px-4 d-flex justify-content center align-items-center account-create-bg">
<div class="vl w-25"></div>
<div className="checkbox-items">
  
<h5 className='text-warning other-info-title'>Field of interest</h5>
<form className='text-warning checkbox-input-size'>


<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Traveling
  </label>
</div>
<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Food
  </label>
</div>
<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   Technology
  </label>
</div>

<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   Entertainment
  </label>
</div>
<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   Digital World
  </label>
</div>

<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   Gaming
  </label>
</div>

<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  Environment
  </label>
</div>
<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  Education
  </label>
</div>

  <button className='btn btn-warning text-light w-75  my-4'>Save</button>

</form>
</div>

</div>

{/* left div end */}
        </div>
                </div>











                
               </div>
           </div>
       </div>
       
       
       
       </div>
    )
}

export default AccountCreate
