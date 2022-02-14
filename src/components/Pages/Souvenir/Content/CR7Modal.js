import {React , useEffect,useState} from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CR7Mo from '../../../../images/Souvenir/Icons/sorry.png';

const CR7Modal = (props) => {
return (
<>
    <Modal {...props} centered size='lm'>

        {/* <Modal.Body className='mODALcR7 '>

            <div className='containerModalCr7 fw-bold mx-5 m-4'>
                <img src={CR7Mo} alt="" className='img-fluid CR7Mo' />
            </div>
            <div className='containerModalCr7 fw-bold mx-5 mb-4'>
                You're not in the top bidders list. Only the top bidders can apply for product acquiring.
            </div>

            <i className="fas fa-times-circle  top-right_cross text-warning btn" onClick={props.onHide}></i>


        <center >
            <Link to='/'><Button
                className='btn bg-dark Modal_btn-xa mb-3 text-light fw-bold Call-btn-v mx-3'>Home</Button></Link>
            <Link to='/'><Button
                className='btn bg-warning Modal_btn-xa mb-3 text-dark fw-bold Call-btn-v mx-3'>Back</Button></Link>
        </center>

        </Modal.Body> */}


        <Modal.Body className='mODALcR7'>

            <div className='mx-3 my-4'>
                <h5 className='text-warning mb-4'>Acquire product process</h5>
                <p className='text-light Cr7Text'>1. You have to give your payment details and submit application. </p>
                <p className='text-light Cr7Text'>2. After reviewing, if you are eligible to buy the product the amount
                    wil l be deducted from your account. </p>
                <p className='text-light Cr7Text'>3. Hello superstar team will contact you after that. </p>
                <p className='text-light Cr7Text'>4. Otherwise we won't dedcuct anything from your account.</p>
                
            </div>

                <i className="fas fa-times-circle  top-right_cross text-warning btn" onClick={props.onHide}></i>


                <center className=''>
            <Button className='btn bg-dark Modal_btn-xa mb-3 text-light Call-btn-v mx-3'
                onClick={props.onHide}>Cancel</Button>

            <Link to='/souvenir-apply'><Button
                className='btn bg-warning Modal_btn-xa mb-3 text-dark Call-btn-v mx-3'>Continue</Button></Link>
        </center>

        </Modal.Body>
       

    </Modal>
</>
)
}

export default CR7Modal