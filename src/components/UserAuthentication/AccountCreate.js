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
       <>
       <div className="container">
           <div className="row">

 <div className="col-md-4  account-create-bg mt-3 ">
<div className="avater-img my-3 text-center">
<img src={file===''?avaterImage:file} className='img-fluid avater-img-src' alt='profile-pic' />
</div>
<div className="upload-input text-center my-2">
 
    <div class="parent-div">
      <button class="btn btn-dark btn-upload">Upload Profile Picture</button>
      <input type="file" className='btn' onChange={handleChange}/>
    </div>



</div>












               </div>
               <div className="col-md-8 text-center mt-3">
                   other information here
               </div>
           </div>
       </div>
       
       
       
       </>
    )
}

export default AccountCreate
