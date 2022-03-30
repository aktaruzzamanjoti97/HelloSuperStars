import React from 'react'
import { Modal, Button} from 'react-bootstrap'
import Pur from "../../../../../images/Profile/cover.jpg"
import Clock from '../../../../../images/Souvenir/pending.png'
import Delivery from '../../../../../images/Souvenir/delivery.png'
import Message from '../../../../../images/message-solid.svg'
import Box from '../../../../../images/Souvenir/box.png'
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import moment from 'moment';

const PurchaseModal = (props) => {

    const product = props?.activity;
// console.log("modal data working "+product)

return (
<>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size='lg' centered className=''>

        <Modal.Body className='PurModal '>
            <div className="row m-3">

                <h5 className='text-light mb-3'>Purchase status</h5>
                <div className="col-md-5 d-flex">
                    <img src={`http://localhost:8000/${product.marketplace?.image}`} alt="" className='img-fluid PurImg mb-3' />
                </div>

                <div className="col-md-7 d-flex">

                    <div className="row">
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Owner</div>
                            <div className="SpRight d-flex col-md-9">{product.marketplace?.superstar.first_name} {product.marketplace?.superstar.last_name}</div>
                            
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Description</div>
                            <div className="SpRight d-flex col-md-9">
                                <Markup content={product.marketplace?.description}/>
                            </div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Price</div>
                            <div className="SpRight d-flex col-md-9">$ &nbsp; { product.total_price }</div>
                        </div>
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Ordered</div>
                            <div className="SpRight d-flex col-md-9">{moment(product.created_at).format('LL')}</div>
                        </div>

                        {(product.status === '2') ?
                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Paid on</div>
                            <div className="SpRight d-flex col-md-9">{moment(product.delivery_at).format('LL')}</div>
                        </div>
                        : ''
                        }

                        <div className="owner d-flex text-light">
                            <div className="SpLeft d-flex col-md-3 fw-bold">Delivery</div>
                            {(product.status === '0') ?
                            <div className="SpRight d-flex col-md-9 text-warning ">Pending</div>
                            :
                            product.status === '1' ?
                            <div className="SpRight d-flex col-md-9 text-warning ">Delivered</div>
                            :
                            <div className="SpRight d-flex col-md-9 text-warning ">Received</div>
                            }
                        </div>
                    </div>

                </div>

                <div className="Delivery d-flex mt-4">

                    <div className="">
                        <div className='BoxR mx-3 btn-warning text-light p-2'> 
                        <img src={Clock} alt="" className='DeliveryImg' />
                        </div>
                        <p className='text-light text-center PSize'>Pending</p>
                        
                    </div>
                    <span className='Box-Line mt-3'></span>

                    {/* console.log('Activity ' ) */}

                    
                    <div className="">
                    {(product.status === '1' || product.status === '2') ?
                    
                        <div className='BoxR  mx-3 btn-warning text-light p-2'> 
                        <img src={Delivery} alt="" className='DeliveryImg' />
                        </div>

                        :

                        <div className='BoxR PenCol mx-3 btn-warning text-light p-2'> 
                        <img src={Delivery} alt="" className='DeliveryImg' />
                        </div>
                }
                        <p className='text-light text-center PSize'>Delivered</p> 
                    </div>



                    <span className='Box-Line mt-3'></span>
                    

                    <div className="">
                        {(product.status === '2') ?
                            <div className='BoxR mx-3 btn-warning text-light p-2'> 
                            <img src={Box} alt="" className='DeliveryImg' />
                            </div>
                            :
                            <div className='BoxR PenCol mx-3 btn-warning text-light p-2'> 
                            <img src={Box} alt="" className='DeliveryImg' />
                            </div>
                        }
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