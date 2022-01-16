import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Con from '../../../../images/notificationDropdownModal.PNG'
const BookNowModal= (props) =>{
return (
<>
  <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='BookModalN'>

    <Modal.Body className='BGbookN'>
    <i className="fas fa-window-close CloseBN mb-3" onClick={props.onHide}></i>
      <div className="d-flex justify-content-center align-items-center my-4 ">
        
        <div className="text-center">
          <img src={Con} className="img-fluid " alt="" />
          <div>
            <h1 className="text-warning">Congratulations</h1>

            <div className="text-light ">
              <p>You registered successfully </p>
            </div>
          </div>

          <Link to='/'>
          <button className="btn fw-bold BNbtnpay ">
            Home
          </button>
          </Link>

        </div>
      </div>
    </Modal.Body>
    
  </Modal>

</>
)
}

export default BookNowModal