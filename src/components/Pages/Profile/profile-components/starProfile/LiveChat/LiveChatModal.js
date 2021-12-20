import React from 'react';
import { Modal } from 'react-bootstrap';
import Congrass from '../../../../../../images/LiveChat/Congress.png'
import Sorry from '../../../../../../images/LiveChat/sorry.png'
import { useHistory,useRouteMatch } from "react-router-dom"

const LiveChatModal = (props) => {
const {url}=useRouteMatch()

let history = useHistory();

function handleClick() {
  history.push({
    pathname: `${url}/starChat`,
    state: { data: props.data }
  });
  }



return (
 
<div>
  <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header className='text-light' style={{ background:'black' }}>
      <Modal.Title id="contained-modal-title-vcenter">
        <button className='cross-liveChat' onClick={props.onHide}></button>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-img text-light'>

        <div className="info-message px-5">
          {props.available? <img src={Congrass} alt="" className='img-fluid' /> : <img src={Sorry} alt=""  className='img-fluid' />}
          
          {props.available? <h1 className='text-center congress'>Congratulation !</h1> : <h1 className='text-center congress'>Sorry !</h1>}

          
          <h4 className='text-center my-3'>{props.mesg}</h4>
   
          {props.available? <h5 className='text-center '>Apply for live chat as soon as possible !</h5>: null}
      
      </div>
      <div className="text-center py-3">
        {props.available? <button className='btn btn-warning text-light'  onClick={handleClick}>Apply now !</button>: null}
      </div>

    </Modal.Body>

  </Modal>
</div>
);
};

export default LiveChatModal;