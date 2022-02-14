import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notificationCongratulations from '../../../../../../../../images/notificationDropdownModal.PNG';
import './CongratulationModal.css';

const CongratulationModal = (props) => {



    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="congratulationModal"
        centered
    >

        <Modal.Body className="congo-bg-image">
            <div onClick={props.onHide} className="d-flex justify-content-end">
                <div className="congoNotificationDrop text-center">X</div>
            </div>


            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center p-5">
                    <img src={notificationCongratulations} className="img-fluid border-0" alt="" />
                    <div>
                        <h1 className="text-warning fw-bold my-2">Congratulations! </h1>
                        <p className="text-white mt-4">Application  Confirmed</p>

                        <div className="text-white mt-4">
                            <p>You will be notify before the event</p>
                        </div>
                    </div>
                    <Link to='/'>
                        <button className="btn btn-warning w-50 mt-3">
                            Home
                           
                        </button>
                    </Link>

                </div>
            </div>


            {/* <div className="d-flex justify-content-center align-items-center">
                <div className="text-center p-5">
                    <img src={sorryNotificationImage} className="img-fluid border-0" alt="" />
                    <div>
                        <h1 className="text-white">Sorry 😢</h1>
                        <h2 className="text-warning">Shakib Al Hasan couldn't Respond</h2>

                        <div className="text-muted mt-4">
                            <p>Shakib Al Hasan could not able to respond</p>
                            <p>To your request, please try again with another schedule</p>
                        </div>
                    </div>
                    <a href='/'><button className="btn btn-warning w-50 mt-3">
                        Return Home
                    </button></a>

                </div>
            </div> */}

            {/* <h1>This</h1> */}
        </Modal.Body>
    </Modal>
    );
};

export default CongratulationModal;