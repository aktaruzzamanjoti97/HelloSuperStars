import React, { useState, useEffect } from 'react';
// import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Button, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Iframe from 'react-iframe';
import ShahRukhKhan from '../../images/shahruk-khan.jpg'
import helloSuperstarLogo from '../../images/HelloSuperStarLogo.png';
import Momotaz from '../../images/Momotaz.jpg';
import accountImg from '../../images/navbar/account.jpg';
import Shakib from "../../images/sakib.jpg";
import Srabanti from '../../images/srabanti.jpg';
import Sarika from '../../images/NotificationDropdown/Sarika-Sabah-14.jpg'
import Tamim from '../../images/NotificationDropdown/Tamim.jpg'
import Ayman from '../../images/NotificationDropdown/ayman.jpg'
import Azhari from '../../images/NotificationDropdown/mizanurAzhari.jpg'
import '../CSS/Navbar/navbar.css';
import './Navigation.css';
import NotificationDropdownModal from './NotificationDropdownModal/NotificationDropdownModal';
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import swal from "sweetalert";
import axios from "axios";
import moment from 'moment'
import ApprovedImg from '../Header/NotificationDropdownModal/defultImg/approved.png'

const Navigation = () => {

const [notiDropdownShow, setNotiDropdownShow] = React.useState(false);
const [isNavOpen, setIsNavOpen] = useState(false)

const [isChatOpen, setIsChatOpen] = useState(false)

const [notificationChatDropdown, setNotificationChatDropdown] = useState(false)

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [notifictions, setNotifictions] = useState([]);
const [greetingInfo, setGreetingInfo] = useState([]);
const [greetinsTyps, setGreetinsTyps] = useState([]);
const [load, setLoad] = useState(true);
const history = useHistory();

useEffect(() => {
checkNotification()

},[])

let checkNotification = () => {
axios.get("/sanctum/csrf-cookie").then((response) => {
axios.get('/api/user/check_notification').then((res) => {
if (res.data.status === 200) {
setNotifictions(res.data.notifiction)
setGreetingInfo(res.data.greeting_info)
setGreetinsTyps(res.data.greeting_type)

if (notifictions.length > 0) {
setLoad(false)
}

} else {
swal("error", "Data base Error", "error");

}
});
});
}

function navToggle(isNavOpen) {
setIsNavOpen(isNavOpen)
}

const handleChatIsOpen = () => {
setIsChatOpen(!isChatOpen)
}

const handleNotificationDropdown = () => {
checkNotification()
setNotificationChatDropdown(!notificationChatDropdown)
}

const greetingsDetailsForm = (notification_id, view_status) => {
if (view_status == 0) {

history.push({
pathname: `/starprofile/${greetingInfo.star_id}/greetings_registration_form`,
state: {
greetingInfo: greetingInfo,
notification_id: notification_id,
greetins_typs: greetinsTyps,

}
});
} else {
history.push("/activities")
}
}

return (
<>
    <div className="Mobile">
        <div className="bg-dark text-light  d-flex justify-content-between HeaderMobile">

            <div className="d-flex mx-3 ">
                <h4 className='mt-3 text-warning LogoH'>hello superstars</h4>
            </div>

            <div className="d-flex ">

                <form action="" role="search" className="search-form text-light btn">
                    <input type="search" name="q" className="search-text text-black" placeholder="Search..."
                        autocomplete="off" />
                </form>

            </div>
        </div>

    </div>

    <div className='sticky-top'>

        <div className="Mobile ">

            <div className="navigation bg-dark text-light ">

                <div className="d-flex mx-2">
                    <NavLink className="active-link" to='/'>
                        <i className="fa fa-home circle-icon circle-icon-x" />
                    </NavLink>
                </div>

                {/* Message */}
                <div className="d-flex mx-2">
                    <div className="dropdown dropDownIconRemove">

                        <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fa fa-comment circle-icon"></i>
                        </div>

                        <div className="container chatContainer dropdown-menu toggle"
                            aria-labelledby="dropdownMenuButton1">

                            <div className="container mb-4 mt-2 form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control search-design"
                                    placeholder="Search Superstar" />
                            </div>

                            <div
                                onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')">
                                <div className="d-flex justify-content-between m-3">
                                    <div className="d-flex">

                                        <img className="img-fluid liveChatVideoPic"
                                            style={{ width: "55px", height: "55px", borderRadius: "48%" }} src={Shakib}
                                            alt="" />
                                        <div className="text-white ms-1 profileName">
                                            <a className="text-decoration-none"
                                                href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                <button
                                                    onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                    className="link-open">
                                                    <p className="text-margin-bottom"><b>Shakib Al Hasan</b></p>
                                                    <p className="text-margin-bottom"><small>You have a
                                                            schedule</small></p>
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
                                            <b>
                                                <p className="mt-1">1m 20s</p>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                className="mt-4">
                                <div className="d-flex justify-content-between m-3">
                                    <div className="d-flex">
                                        <img className="img-fluid liveChatVideoPic"
                                            style={{ width: "55px", height: "55px", borderRadius: "48%" }} src={Momotaz}
                                            alt="" />
                                        <div className="text-white ms-1 mt-1 profileName">
                                            <a className="text-decoration-none"
                                                href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                <button
                                                    onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                    className="link-open">
                                                    <p className="text-margin-bottom"><b>Momotaz Begum</b></p>
                                                    <p className="text-margin-bottom"><small>You have a
                                                            schedule</small></p>
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

                            <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                className="mt-4">
                                <div className="d-flex justify-content-between m-3">
                                    <div className="d-flex">
                                        <img className="img-fluid liveChatVideoPic"
                                            style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                            src={ShahRukhKhan} alt="" />
                                        <div className="text-white ms-1 profileName">
                                            <a className="text-decoration-none"
                                                href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                <button
                                                    onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                    className="link-open">
                                                    <p className="text-margin-bottom"><b>Shahrukh Khan</b></p>
                                                    <p className="text-margin-bottom"><small>You have a
                                                            schedule</small></p>
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
                                        <img className="img-fluid liveChatVideoPic"
                                            style={{ width: "55px", height: "55px", borderRadius: "48%" }} src={Shakib}
                                            alt="" />
                                        <div className="text-white ms-1 profileName">
                                            <a className="text-decoration-none">
                                                <button className="link-open">
                                                    <p className="text-margin-bottom"><b>Mustafizur Rahman</b>
                                                    </p>
                                                    <p className="text-margin-bottom"><small>You have a
                                                            schedule</small></p>
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
                </div>
                {/* Message End */}
                
                {/* Notify */}
                <div className="d-flex mx-2">
                    <div className="dropdown dropDownIconRemove">

                        <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fa fa-bell circle-icon" />
                        </div>

                        <div className="container chatContainer dropdown-menu toggle"
                            aria-labelledby="dropdownMenuButton1">

                            {load? [1].map(data =>

                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <div className="borderBottomNotificationDropdown">
                                    <div className="d-flex justify-content-between m-2">
                                        <div className="d-flex">

                                            <Skeleton height={55} width={55} circle={true} />

                                            <div className="text-white ms-1 profileName">
                                                <div className="text-decoration-none">
                                                    <div className="link-open px-2 py-2">
                                                        <Skeleton width={180} height={15} />
                                                        <Skeleton width={200} height={10} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="timeStampColor">

                                        </div>

                                    </div>
                                </div>
                            </SkeletonTheme>
                            ) :

                            notifictions.map(data =>

                            <div className="borderBottomNotificationDropdown" onClick={()=>
                                greetingsDetailsForm(data.id,data.view_status)}>
                                <div className="d-flex justify-content-between m-2">
                                    <div className="d-flex">
                                        <img className="img-fluid liveChatVideoPic"
                                            style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                            src={ApprovedImg} alt="" />

                                        <div className="text-white ms-1 mt-1 profileName">
                                            <div className="text-decoration-none">
                                                <div className="link-open">
                                                    <h6 className="text-margin-bottom">
                                                        <b>{data.notification_text.type}</b></h6>
                                                    <p className="text-margin-bottom">
                                                        <small>{data.notification_text.text}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeStampColor">
                                        <p className="text-margin-bottom">
                                            {moment(data.notification_text.created_at).format('LT')}</p>
                                        <p className="text-margin-bottom">
                                            <small>{moment(data.notification_text.created_at).format('LL')}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )

                            }

                            <div>
                                <button className="btn btn-warning w-100">See More</button>
                            </div>

                        </div>

                    </div>
                </div>
                {/* Notify End*/}

                <div className="d-flex mx-2">
                    <NavLink to='/marketplace'> <i className="fa fa-store circle-icon" /></NavLink>
                </div>

                <div className="d-flex mx-2">
                <NavLink to='/profile'><img src={accountImg} className='MobileImg'
                                    alt='account create ' /></NavLink>
                </div>

                <div className="d-flex mx-2">
                    <NavLink to="/"> <i class="fas fa-bars IconMobile mx-2"></i></NavLink>
                </div>

            </div>
        </div>

        <Navbar className='navbar-bg navbar-position ' expand="lg">

            <div className="container-fluid  custom-container-nv ">
                <Navbar.Brand href="#">
                    <NavLink to='/'> <img src={helloSuperstarLogo} alt="hello superstar logo" className='log-navbar' />
                    </NavLink>
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
                            <NavLink className="active-link" to='/'><i
                                    className="fa fa-home circle-icon circle-icon-x" />
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link onClick={handleChatIsOpen} className="navPadpd">
                            <div className="dropdown dropDownIconRemove">

                                <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa fa-comment circle-icon"></i>
                                </div>

                                <div className="container chatContainer dropdown-menu toggle"
                                    aria-labelledby="dropdownMenuButton1">

                                    <div className="container mb-4 mt-2 form-group has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control search-design"
                                            placeholder="Search Superstar" />
                                    </div>

                                    <div
                                        onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')">
                                        <div className="d-flex justify-content-between m-3">
                                            <div className="d-flex">

                                                <img className="img-fluid liveChatVideoPic"
                                                    style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                    src={Shakib} alt="" />
                                                <div className="text-white ms-1 profileName">
                                                    <a className="text-decoration-none"
                                                        href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                        <button
                                                            onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                            className="link-open">
                                                            <p className="text-margin-bottom"><b>Shakib Al Hasan</b></p>
                                                            <p className="text-margin-bottom"><small>You have a
                                                                    schedule</small></p>
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
                                                    <b>
                                                        <p className="mt-1">1m 20s</p>
                                                    </b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                        className="mt-4">
                                        <div className="d-flex justify-content-between m-3">
                                            <div className="d-flex">
                                                <img className="img-fluid liveChatVideoPic"
                                                    style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                    src={Momotaz} alt="" />
                                                <div className="text-white ms-1 mt-1 profileName">
                                                    <a className="text-decoration-none"
                                                        href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                        <button
                                                            onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                            className="link-open">
                                                            <p className="text-margin-bottom"><b>Momotaz Begum</b></p>
                                                            <p className="text-margin-bottom"><small>You have a
                                                                    schedule</small></p>
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

                                    <div onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                        className="mt-4">
                                        <div className="d-flex justify-content-between m-3">
                                            <div className="d-flex">
                                                <img className="img-fluid liveChatVideoPic"
                                                    style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                    src={ShahRukhKhan} alt="" />
                                                <div className="text-white ms-1 profileName">
                                                    <a className="text-decoration-none"
                                                        href="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8">
                                                        <button
                                                            onClick="parent.open('https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8')"
                                                            className="link-open">
                                                            <p className="text-margin-bottom"><b>Shahrukh Khan</b></p>
                                                            <p className="text-margin-bottom"><small>You have a
                                                                    schedule</small></p>
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
                                                <img className="img-fluid liveChatVideoPic"
                                                    style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                    src={Shakib} alt="" />
                                                <div className="text-white ms-1 profileName">
                                                    <a className="text-decoration-none">
                                                        <button className="link-open">
                                                            <p className="text-margin-bottom"><b>Mustafizur Rahman</b>
                                                            </p>
                                                            <p className="text-margin-bottom"><small>You have a
                                                                    schedule</small></p>
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

                        {/* Notification Dropdown */}
                        <Nav.Link onClick={handleNotificationDropdown} className="navPadpd">
                            <div className="dropdown dropDownIconRemove">

                                <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa fa-bell circle-icon" />
                                </div>

                                <div className="container chatContainer dropdown-menu toggle"
                                    aria-labelledby="dropdownMenuButton1">

                                    {load? [1].map(data =>

                                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                        <div className="borderBottomNotificationDropdown">
                                            <div className="d-flex justify-content-between m-2">
                                                <div className="d-flex">

                                                    <Skeleton height={55} width={55} circle={true} />

                                                    <div className="text-white ms-1 profileName">
                                                        <div className="text-decoration-none">
                                                            <div className="link-open px-2 py-2">
                                                                <Skeleton width={180} height={15} />
                                                                <Skeleton width={200} height={10} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="timeStampColor">

                                                </div>

                                            </div>
                                        </div>
                                    </SkeletonTheme>
                                    ) :

                                    notifictions.map(data =>

                                    <div className="borderBottomNotificationDropdown" onClick={()=>
                                        greetingsDetailsForm(data.id,data.view_status)}>
                                        <div className="d-flex justify-content-between m-2">
                                            <div className="d-flex">
                                                <img className="img-fluid liveChatVideoPic"
                                                    style={{ width: "55px", height: "55px", borderRadius: "48%" }}
                                                    src={ApprovedImg} alt="" />

                                                <div className="text-white ms-1 mt-1 profileName">
                                                    <div className="text-decoration-none">
                                                        <div className="link-open">
                                                            <h6 className="text-margin-bottom">
                                                                <b>{data.notification_text.type}</b></h6>
                                                            <p className="text-margin-bottom">
                                                                <small>{data.notification_text.text}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="timeStampColor">
                                                <p className="text-margin-bottom">
                                                    {moment(data.notification_text.created_at).format('LT')}</p>
                                                <p className="text-margin-bottom">
                                                    <small>{moment(data.notification_text.created_at).format('LL')}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    )

                                    }

                                    <div>
                                        <button className="btn btn-warning w-100">See More</button>
                                    </div>

                                </div>

                            </div>

                        </Nav.Link>

                        <Nav.Link className="navPadpd">
                            <NavLink to='/marketplace'> <i className="fa fa-store circle-icon" /></NavLink>
                        </Nav.Link>

                        <Nav.Link className="navPadpd">
                            <NavLink to='/profile'><img src={accountImg} className='img-fluid account-create'
                                    alt='account create ' /></NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <select name="" id="" className='language-select'>
                                <option value="0" className='bg-dark'>EN</option>
                                <option value="0" className='bg-dark'>BN</option>
                                <option value="0" className='bg-dark'>HN</option>
                            </select>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </div>

            <Modal dialogClassName="my-modal" style={{ height: '100vh' }} className="liveChatModalVideo" show={show}
                onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Body>
                    <Iframe
                        url="https://hellosuperstar-livechat.herokuapp.com/?room=HelloSuperStar-LiveChat_eworfj924t6"
                        width="100%" height="600px" id="myId" allow="camera;microphone" className="myClassname"
                        display="initial" position="relative" />
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>

            <NotificationDropdownModal show={notiDropdownShow} onHide={()=> setNotiDropdownShow(false)}
                />

        </Navbar>
    </div>
</>
);
};

export default Navigation;