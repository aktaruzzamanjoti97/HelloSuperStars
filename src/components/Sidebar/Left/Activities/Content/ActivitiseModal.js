import React from 'react'
import { Modal, Button} from 'react-bootstrap'
import Clock from "../../../../../images/clock.png"
import ClockImg from '../../../../../images/ActivitiseMo.jpg'
const ActivitiseModal = (props) => {
return (
<>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered className=''>

        <Modal.Body className='Modal_B-Ac py-5'>
            <div className=' d-flex'>

                <div className='left-X-M-Ax col-md-6 mx-5'>
                    <p >Connect with</p>
                    <h1 className='fw-bold mb-3'>Sakib All Hasan</h1>

                    <div className='d-flex '>
                        <span> <img src={Clock} alt="" /> </span> &nbsp;&nbsp;&nbsp;
                        <span>
                            <h1 className='fw-bold text-warning'>50</h1>
                        </span>
                    </div>

                </div>

                <div className='right-X-M-Ax col-md-3 mx-5'>
                    <img src={ClockImg} alt="" className='Img-Mo_s img-fluid' />
                </div>
            </div>
            <button class="top-right_cross bg-warning" onClick={props.onHide}><i class="fas fa-times-circle "></i></button>
        </Modal.Body>
        <center>
            <Button  className='btn bg-warning Modal_btn-xa mb-3'>Call Now</Button>
        </center>

    </Modal>
</>
)
}

export default ActivitiseModal