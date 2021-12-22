import React, { useState } from 'react';
// import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Button, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Iframe from 'react-iframe';
import ShahRukhKhan from '../../images/shahruk-khan.jpg'
// import { Link } from "react-router-dom";
// import HomeIcon from '@material-ui/icons/Home';
// import ChatIcon from '@material-ui/icons/Chat';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import helloSuperstarLogo from '../../images/HelloSuperStarLogo.png';
import Momotaz from '../../images/Momotaz.jpg';
import accountImg from '../../images/navbar/account.jpg';
import Shakib from "../../images/sakib.jpg";
import Srabanti from '../../images/srabanti.jpg';
import '../CSS/Navbar/navbar.css';
import './Navigation.css';


const Navigation = () => {

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
            <Navbar className='navbar-bg navbar-position' expand="lg" >

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
                     
                                    <div class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-comment circle-icon"></i>
                                    </div>
              

                                    <div class="container chatContainer dropdown-menu toggle" aria-labelledby="dropdownMenuButton1">

                                        <div className="container mb-4 mt-2 form-group has-search">
                                            <span className="fa fa-search form-control-feedback"></span>
                                            <input type="text" className="form-control search-design" placeholder="Search Superstar" />
                                        </div>

                                        <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')">
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid liveChatVideoPic"
                                                        style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                        src={Shakib}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1 profileName">
                                                        <a className="text-decoration-none" href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                            <button onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')" className="link-open">
                                                                <p className="text-margin-bottom"><b>Shakib Al Hasan</b></p>
                                                                <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                            </button>
                                                        </a>

                                                    </div>
                                                </div>

                                                <div className="timeStampColor">
                                                    {/* <p className="text-margin-bottom">7/9/2021</p>
                                                    <p className="text-margin-bottom"><small>5.10 PM</small></p> */}

                                                    <div className="d-flex text-warning">
                                                        <div className="timeStamp-text-icon">
                                                            <i className="mt-1 me-2 far fa-clock"></i>
                                                        </div>
                                                        <b><p className="mt-1">1m 20s</p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')" className="mt-4">
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid liveChatVideoPic"
                                                        style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                        src={Momotaz}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1 mt-1 profileName">
                                                        <a className="text-decoration-none" href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                            <button onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')" className="link-open">
                                                                <p className="text-margin-bottom"><b>Momotaz Begum</b></p>
                                                                <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="timeStampColor">
                                                    <p className="text-margin-bottom">7/9/2021</p>
                                                    <p className="text-margin-bottom"><small>5.10 PM</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')" className="mt-4">
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid liveChatVideoPic"
                                                        style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                        src={ShahRukhKhan}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1 profileName">
                                                        <a className="text-decoration-none" href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                            <button onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')" className="link-open">
                                                                <p className="text-margin-bottom"><b>Shahrukh Khan</b></p>
                                                                <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                            </button>
                                                        </a>

                                                    </div>
                                                </div>

                                                <div className="timeStampColor">
                                                    <p className="text-margin-bottom">7/9/2021</p>
                                                    <p className="text-margin-bottom"><small>5.10 PM</small></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div onClick={handleShow} className="mt-4">
                                            <div className="d-flex justify-content-between m-3">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-fluid liveChatVideoPic"
                                                        style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                        src={Srabanti}
                                                        alt=""
                                                    />
                                                    <div className="text-white ms-1 profileName">
                                                        <a className="text-decoration-none">
                                                            <button className="link-open">
                                                                <p className="text-margin-bottom"><b>Srabanti Chaterjee</b></p>
                                                                <p className="text-margin-bottom"><small>You have a schedule</small></p>
                                                            </button>
                                                        </a>

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

                <Modal dialogClassName="my-modal" style={{height:'100vh'}} className="liveChatModalVideo" show={show} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>

                    <Modal.Body>
                        <Iframe url="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8"
                            width="100%"
                            height="600px"
                            id="myId"
                            allow="camera;microphone"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
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