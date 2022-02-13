import React from 'react'
import { Modal, Button} from 'react-bootstrap'
import Pur from "../../../../../images/Profile/cover.jpg"
import Clock from '../../../../../images/Souvenir/pending.png'
import Delivery from '../../../../../images/Souvenir/delivery.png'
import Message from '../../../../../images/message-solid.svg'
import Box from '../../../../../images/Souvenir/box.png'
import { Link } from 'react-router-dom';

const PurchaseModal = (props) => {
return (
<>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size='lg' centered className=''>

        <Modal.Body className='PurModal '>
            <div className="row m-3">

                <h5 className='text-light mb-3'>Purchase status</h5>
                <div className="col-md-5 d-flex">
                    <img src={Pur} alt="" className='img-fluid PurImg mb-3' />
                </div>

                <div className="col-md-7 d-flex">

                    <div className="row">
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Owner</div>
                            <div className="SpRight d-flex col-md-9">Christiano Ronaldo</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Description</div>
                            <div className="SpRight d-flex col-md-9">Lorem ipsum some demo text goes here as the product
                                description given before</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Price</div>
                            <div className="SpRight d-flex col-md-9">$ &nbsp; 199.00</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Ordered</div>
                            <div className="SpRight d-flex col-md-9">10 - 01 - 2022</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Paid on</div>
                            <div className="SpRight d-flex col-md-9">12 - 01 - 2022</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Delivery</div>
                            <div className="SpRight d-flex col-md-9">Pending</div>
                        </div>
                    </div>

                </div>

                <div className="Delivery d-flex mt-4">

                    <div className="">
                        <div className='BoxR mx-3 btn-light p-2'> 
                        <img src={Clock} alt="" className='DeliveryImg' />
                        </div>
                        <p className='text-light text-center PSize'>Pending</p>
                        
                    </div>
                    <span className='Box-Line mt-3'></span>

                    <div className="">
                        <div className='BoxR PenCol mx-3 btn-light p-2'> 
                        <img src={Delivery} alt="" className='DeliveryImg' />
                        </div>
                        <p className='text-light text-center PSize'>Delivered</p>
                        
                    </div>
                    <span className='Box-Line mt-3'></span>

                    <div className="">
                        <div className='BoxR PenCol mx-3 btn-light p-2'> 
                        <img src={Box} alt="" className='DeliveryImg' />
                        </div>
                        <p className='text-light text-center PSize'>Received</p>
                        
                    </div>

                    
                </div>

            </div>
            <i class="fas fa-times-circle text-warning top-right_cross btn" onClick={props.onHide}></i>
            <img src={Message} alt="" className='ImgRightP' />

        </Modal.Body>

    </Modal>
</>
)
}

export default PurchaseModal