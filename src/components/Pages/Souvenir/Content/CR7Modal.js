import {React , useEffect,useState} from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CR7Mo from '../../../../images/Souvenir/Icons/sorry.png';

const CR7Modal = (props) => {
return (
<>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>

        {/* <Modal.Body className=' py-5 Modal_B-Ac  containerModalBg mODALcR7'>

            <div className='containerModalCr7 fw-bold mx-5 mb-3'>
                <img src={CR7Mo} alt="" className='img-fluid CR7Mo' />
            </div>
            <div className='containerModalCr7 fw-bold mx-5'>
                You're not in the top bidders list. Only the top bidders can apply for product acquiring.
            </div>

            <button className="top-right_cross bg-warning Cross-Btn-v text-light" onClick={props.onHide}>
                <i className="fas fa-times-circle "></i>
            </button>

        </Modal.Body>
        <center className='mODALcR7'>
            <Link to='/'><Button
                className='btn bg-dark Modal_btn-xa mb-3 text-light fw-bold Call-btn-v mx-3'>Home</Button></Link>
            <Link to='/'><Button
                className='btn bg-warning Modal_btn-xa mb-3 text-dark fw-bold Call-btn-v mx-3'>Back</Button></Link>
        </center> */}

        <Modal.Body className=' py-5 Modal_B-Ac  containerModalBg mODALcR7'>

            <div className='mx-3'>
                <h5 className='text-warning mb-4'>Acquire product process</h5>
                <p className='text-light Cr7Text'>1. You have to give your payment details and submit application. </p>
                <p className='text-light Cr7Text'>2. After reviewing, if you are eligible to buy the product the amount
                    wil l be deducted from your account. </p>
                <p className='text-light Cr7Text'>3. Hello superstar team will contact you after that. </p>
                <p className='text-light Cr7Text'>4. Otherwise we won't dedcuct anything from your account.</p>
            </div>
            <button className="top-right_cross bg-warning Cross-Btn-v text-light" onClick={props.onHide}>
                <i className="fas fa-times-circle "></i>
            </button>

        </Modal.Body>
        <center className='mODALcR7'>
            <Button className='btn bg-dark Modal_btn-xa mb-3 text-light Call-btn-v mx-3'
                onClick={props.onHide}>Cancel</Button>

            <Link to='/souvenir-apply'><Button
                className='btn bg-warning Modal_btn-xa mb-3 text-dark Call-btn-v mx-3'>Continue</Button></Link>
        </center>

    </Modal>
</>
)
}

export default CR7Modal