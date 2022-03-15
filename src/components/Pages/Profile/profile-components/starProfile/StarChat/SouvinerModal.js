import React from 'react';
import ModalImg from '../../../../../../images/starProfile/modalImg.png'
import {Modal,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function SouvinerModal(props) {
  return <Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  
  centered
>
 
<div className='BidBorder'>
<Modal.Body className='bg-img '>
   <div className="d-flex justify-content-end">
       <i class="fas fa-times-circle MarketNM text-warning btn " onClick={props.onHide}></i>
   </div>
    <div className='text-center'>
        <img src={ModalImg} className='img-fluid' alt="" />
     <h2 className="text-warning">Bidding Participation</h2>
     <h4 className="text-light">
         Are you sute to Participate on this bidding?
     </h4>
    </div>
    <div className="text-center my-2">
        <button className="btn btn-dark px-5 py-2" onClick={props.onHide}>
            Not Now 
        </button>

        <Link to={`/souvenir/${props.data}`}><button className="btn btn-warning  px-5 py-2 mx-3">
            Bid Now
        </button></Link>

    </div>
  </Modal.Body>
</div>


{/* <Modal.Footer>
<Button onClick={props.onHide}>Close</Button>
</Modal.Footer> */}

</Modal>;
}

export default SouvinerModal;

