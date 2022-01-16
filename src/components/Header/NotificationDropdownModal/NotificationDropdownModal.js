import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notificationCongratulations from '../../../images/notificationDropdownModal.PNG';
import sorryNotificationImage from '../../../images/sorryNotificationDropdown.PNG';
import './NotificationDropdownModal.css';

const NotificationDropdownModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="notificationDropdownModal1"
            centered
        >

            <Modal.Body className="modal-bg-image">
                <div onClick={props.onHide} className="d-flex justify-content-end">
                    <div className="closeNotificationDrop text-center">X</div>
                </div>


                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-center p-5">
                        <img src={notificationCongratulations} className="img-fluid border-0" alt="" />
                        <div>
                            <h1 className="text-white">Congratulations! 🥳 </h1>
                            <h2 className="text-warning">Shakib Al Hasan Responded</h2>

                            <div className="text-muted mt-4">
                                <p>Please Register before 20 December</p>
                                <p>To get your desired wish from Shakib Al Hasan</p>
                            </div>
                        </div>
                        <Link to='/starProfile/user-greetings-pay'>
                            <button className="btn btn-warning w-50 mt-3">
                                Register Now
                               
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

export default NotificationDropdownModal;