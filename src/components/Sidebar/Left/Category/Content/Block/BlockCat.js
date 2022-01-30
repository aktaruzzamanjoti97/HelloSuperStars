import React ,{ useState}  from 'react'
import { Modal, Button} from 'react-bootstrap'
import './BlockCat.css'
const BlockCat = (props) => {
  const [value, setValue] = useState(true);
const [btn, setBtn] = useState("Block");
return (
<>
  <Modal {...props}  size="ls" centered className='CatModal'>

    <Modal.Body className='BlockCat'>
      <div className=' d-flex'>

        <div className='mx-5'>
          <div className='d-flex mt-3'>
            <span> <i className="fas fa-ban text-danger mt-3"></i> </span>&nbsp;&nbsp;
            <span className='fw-bold text-light CtaBL'>Block Hollywood </span>
          </div>

          <p className='text-light mt-2'>You will not see any superstar from Hollywood.</p>
          <p className='text-light mb-5'>Are you sure?</p>

        </div>
      </div>

      <button className="top-right_cross bg-danger border-round Cross-Btn-v text-light" onClick={props.onHide}>
        <i className="fas fa-times-circle "></i></button>

      <div className='d-flex justify-content-center'>
        <div className='mx-4'>
          <Button className='btn CatBlockBtn border-warning text-warning 'type="button" onClick={()=> {
                  setValue(!value);
                  if (value === true) {
                  setBtn("Unblock");
                  }
                  else {
                  setBtn("Block");
                  }
                  }}
                  style={
                  value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                  }
                  >{btn}</Button>
        </div>
        <div className='mx-4'>
          <Button className='btn CatBlockBtn border-warning bg-warning text-dark' onClick={props.onHide}>Not Now</Button>
        </div>
      </div>

    </Modal.Body>

  </Modal>
</>
)
}

export default BlockCat