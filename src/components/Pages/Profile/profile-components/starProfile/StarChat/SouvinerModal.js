import React from 'react';
import ModalImg from '../../../../../../images/starProfile/modalImg.png'
import {Modal,Button} from 'react-bootstrap'
function SouvinerModal(props) {
  return <Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
 
  <Modal.Body className='bg-img'>
   <div className="d-flex justify-content-end">
       <button className="btn btn-warning" onClick={props.onHide}>close</button>
   </div>
    <div className='text-center'>
        <img src={ModalImg} className='img-fluid' alt="" />
     <h2 className="text-warning">Bidding Participation</h2>
     <h4 className="text-light">
         Are you sute to Participate on this bidding?
     </h4>
    </div>
    <div className="text-center my-2">
        <button className="btn btn-dark px-5 py-2">
            Not Now 
        </button>
        <button className="btn btn-warning  px-5 py-2 mx-3">
            Bit Now
        </button>
    </div>
  </Modal.Body>

</Modal>;
}

export default SouvinerModal;


{/* <Modal.Footer>
<Button onClick={props.onHide}>Close</Button>
</Modal.Footer> */}