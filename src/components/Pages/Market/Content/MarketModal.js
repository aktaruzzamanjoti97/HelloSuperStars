import React , {useEffect,useState} from 'react'
import { Modal, Button} from 'react-bootstrap'
import Purchase from '../../../../images/Souvenir/shopping-basket.png'
import { Link } from 'react-router-dom';

const MarketModal = (props) => {

return (
<>
    <Modal {...props} centered className='ModalPur'>

        <div className='UrcModal '>

            <center><img src={Purchase} alt="" className='img-fluid Purchase  m-5' /></center>

            <h3 className='text-warning text-center'>Purchase confirmation</h3>
            <p className='text-light text-center'>Are you sure to buy the product?</p>

            <center className='mt-4 mb-3'>

                <Button className='btn bg-success' onClick={props.onHide}>Go Back</Button>

                <Link to='/activities'><Button className='btn bg-warning mx-3'>Buy Now</Button></Link>

            </center>

            <i class="fas fa-times-circle MarketNM text-light" onClick={props.onHide}></i>

        </div>

    </Modal>
</>

)
}

export default MarketModal