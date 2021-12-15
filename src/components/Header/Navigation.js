import React, { Component } from 'react';
// import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Navbar, Nav, Form, Modal, Button } from 'react-bootstrap'
// import { Link } from "react-router-dom";
// import HomeIcon from '@material-ui/icons/Home';
// import ChatIcon from '@material-ui/icons/Chat';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import helloSuperstarLogo from '../../images/HelloSuperStarLogo.png';
import accountImg from '../../images/navbar/account.jpg'
import '../CSS/Navbar/navbar.css';
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import './Navigation.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Shakib from "../../images/sakib.jpg";
import Momotaz from '../../images/Momotaz.jpg'

const Navigation = () => {

    const external_link = "https://superstargroup-chat.herokuapp.com/?room=StarConversation_pofzeg96ul";
    // const internal_link="http://localhost:3001/about"

    const [isNavOpen, setIsNavOpen] = useState(false)

    const [isChatOpen, setIsChatOpen] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const url = new URL(external_link)
    // if (url.hostname === HOSTNAME ) return <a target="_blank" href={link}>{link}</a>
    // else


    function navToggle(isNavOpen) {
        setIsNavOpen(isNavOpen)
    }

    const handleChatIsOpen = () => {
        setIsChatOpen(!isChatOpen)
    }

    return (
        <>
            <Navbar className='navbar-bg navbar-position' expand="lg" sticky="top">

                <div className="container-fluid  custom-container-nv ">
                    <Navbar.Brand href="#" >
                        <Link to='/'> <img src={helloSuperstarLogo} alt="hello superstar logo" className='log-navbar' /></Link>
                    </Navbar.Brand>
                    <Form className='form-width-change'>
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control search-design " placeholder="Search Superstar" />
                        </div>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">


                        <Nav className="ms-auto my-2 my-lg-0 " navbarScroll>

                            <Nav.Link className="navPadpd">
                                <NavLink className="active-link" to='/'><i className="fa fa-home circle-icon circle-icon-x" /></NavLink>
                            </Nav.Link >

                            <Nav.Link onClick={handleChatIsOpen} className="navPadpd">
                                <div className="dropdown dropDownIconRemove">
                                    {/* <div className="superStarChatBar"> */}
                                        <div class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-comment circle-icon"></i>
                                        </div>
                                    {/* </div> */}

                                    <div class="dropdown-menu toggle" aria-labelledby="dropdownMenuButton1">
                                        <div>
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid"
                                                        style={{ width: "60px", borderRadius: "50%" }}
                                                        src={Shakib}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1">
                                                        <p className="text-margin-bottom"><b>Shakib Al Hasan</b></p>
                                                        <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                    </div>
                                                </div>

                                                <div className="timeStampColor">
                                                    <p className="text-margin-bottom">7/9/2021</p>
                                                    <p className="text-margin-bottom"><small>5.10 PM</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid"
                                                        style={{ width: "60px", borderRadius: "50%" }}
                                                        src={Momotaz}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1">
                                                        <p className="text-margin-bottom"><b>Shakib Al Hasan</b></p>
                                                        <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                    </div>
                                                </div>

                                                <div className="timeStampColor">
                                                    <p className="text-margin-bottom">7/9/2021</p>
                                                    <p className="text-margin-bottom"><small>5.10 PM</small></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </Nav.Link>

                            {/* <div>
                                {
                                    isChatOpen ? (
                                        <div className="liveChatVideoDropdown">
                                            <div style={{position: 'absolute',}} className="card">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item bg-dark">
asdfasdf
                                                    </li>
                                                    <li className="list-group-item bg-dark">

                                                    </li>
                                                    <li className="list-group-item">A third item</li>
                                                </ul>
                                            </div>

                                            

                                        </div>
                                    ) : null
                                }
                            </div> */}

                            <Nav.Link className="navPadpd">
                                <i className="fa fa-bell circle-icon" />
                            </Nav.Link>

                            <Nav.Link className="navPadpd">
                                <NavLink to='/marketplace'> <i className="fa fa-store circle-icon" /></NavLink>
                            </Nav.Link>

                            <Nav.Link className="navPadpd">
                                <NavLink to='/profile'><img src={accountImg} className='img-fluid account-create' alt='account create ' /></NavLink>
                            </Nav.Link>

                            <Nav.Link >
                                <select name="" id="" className='language-select'>
                                    <option value="0" className='bg-dark'>EN</option>
                                    <option value="0" className='bg-dark'>BN</option>
                                    <option value="0" className='bg-dark'>HN</option>
                                </select>
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </div>

                <Modal className="liveChatModalVideo" show={show} onHide={handleClose} dialogClassName="" aria-labelledby="example-custom-modal-styling-title">

                    <Modal.Body>
                        <iframe src={external_link} style={{ width: '100%', height: '400px' }} />
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Body>
                </Modal>

            </Navbar>
        </>
    );
};

export default Navigation;