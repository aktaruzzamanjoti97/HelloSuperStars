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
import { Link,NavLink } from 'react-router-dom'
import { useState } from 'react';
import './Navigation.css'


const Navigation = () => {

    const external_link="https://superstargroup-chat.herokuapp.com/?room=StarConversation_pofzeg96ul";
    // const internal_link="http://localhost:3001/about"

    const [isNavOpen, setIsNavOpen] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // const url = new URL(external_link)
    // if (url.hostname === HOSTNAME ) return <a target="_blank" href={link}>{link}</a>
    // else
    

    function navToggle(isNavOpen){
        setIsNavOpen(isNavOpen)
    }

    return (
        <>
                <Navbar className='navbar-bg' expand="lg" sticky="top">
                   
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

                                <Nav.Link onClick={handleShow} className="navPadpd">
                                    <i className="fa fa-comment circle-icon" />
                                </Nav.Link>

                                <Nav.Link className="navPadpd">
                                    <i className="fa fa-bell circle-icon" />
                                </Nav.Link>

                                <Nav.Link className="navPadpd">
                                    <NavLink to='/marketplace'> <i className="fa fa-store circle-icon" /></NavLink>
                                </Nav.Link>

                                <Nav.Link className="navPadpd">
                                    <NavLink  to='/profile'><img src={accountImg} className='img-fluid account-create' alt='account create ' /></NavLink>
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

                      <Modal className="liveChatModalVideo" show={show} onHide={handleClose}  dialogClassName="" aria-labelledby="example-custom-modal-styling-title">
                          
                        <Modal.Body>
                            <iframe src={external_link} style={{width:'100%',height:'400px'}}/>
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

// class Navigation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isNavOpen: false,
//         }
//     }
//     navToggle = () => {
//         this.setState({
//             isNavOpen: !this.state.isNavOpen
//         })
//     }
//     render() {
//         return (
//             <>
//                 <Navbar className='navbar-bg' expand="lg" sticky="top">
                   
//                       <div className="container-fluid  custom-container-nv ">
//                       <Navbar.Brand href="#" >
//                             <Link to='/'> <img src={helloSuperstarLogo} alt="hello superstar logo" className='log-navbar' /></Link>
//                         </Navbar.Brand>
//                         <Form className='form-width-change'>
//                             <div className="form-group has-search">
//                                 <span className="fa fa-search form-control-feedback"></span>
//                                 <input type="text" className="form-control search-design " placeholder="Search Superstar" />
//                             </div>
//                         </Form>
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Navbar.Collapse id="navbarScroll">


//                             <Nav className="ms-auto my-2 my-lg-0 " navbarScroll>

//                                 <Nav.Link className="navPadpd">
//                                     <NavLink className="active-link" to='/'><i className="fa fa-home circle-icon circle-icon-x" /></NavLink>
//                                 </Nav.Link >

//                                 <Nav.Link className="navPadpd">
//                                     <i className="fa fa-comment circle-icon" />
//                                 </Nav.Link>

//                                 <Nav.Link className="navPadpd">
//                                     <i className="fa fa-bell circle-icon" />
//                                 </Nav.Link>

//                                 <Nav.Link className="navPadpd">
//                                     <NavLink to='/marketplace'> <i className="fa fa-store circle-icon" /></NavLink>
//                                 </Nav.Link>

//                                 <Nav.Link className="navPadpd">
//                                     <NavLink  to='/profile'><img src={accountImg} className='img-fluid account-create' alt='account create ' /></NavLink>
//                                 </Nav.Link>

//                                 <Nav.Link >
//                                     <select name="" id="" className='language-select'>
//                                         <option value="0" className='bg-dark'>EN</option>
//                                         <option value="0" className='bg-dark'>BN</option>
//                                         <option value="0" className='bg-dark'>HN</option>
//                                     </select>
//                                 </Nav.Link>

//                             </Nav>

//                         </Navbar.Collapse>
//                       </div>
                    
//                 </Navbar>
//             </>
//         )
//     }

// }

// export default Navigation;