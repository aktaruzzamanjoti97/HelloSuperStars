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

 <div className="col-md-4  account-create-bg my-5 ">
<div className="avater-img my-3 text-center">
<img src={file===''?avaterImage:file} className='img-fluid avater-img-src' alt='profile-pic' />
</div>
<div className="upload-input text-center my-2">
    <div class="parent-div">
      <button class="btn btn-dark btn-upload">Upload Profile Picture</button>
      <input type="file" className='btn' onChange={handleChange}/>
    </div>

</div>

{/* Form style start */}

<form  className='p-3'>
  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Name</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
    </div>
  </div>

  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Phone</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Birthday</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
    </div>
  </div>


  <div class="form-group row my-3">
    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm text-light">Country</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-sm " id="colFormLabelSm" placeholder="col-form-label-sm" />
    </div>
  </div>

<div className="text-center my-3 ">
<button className='btn btn-warning px-4 mb-3 text-light'>Save</button>
</div>
  
</form>










               </div>
               <div className="col-md-8 col-lg-8 mt-5 ">
        <div className="container">
        <div className="row">
<div className="col-md-8 account-create-bg">
<h5 className='text-warning other-info-title mt-2'>Other Information</h5>











</div>

<div className="col-md-4 bg-primary">
  field of interest
</div>
        </div>
                </div>











                
               </div>
           </div>
       </div>
       
       
       
       </div>
    )
}

export default AccountCreate
