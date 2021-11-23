import { Card, Container } from 'react-bootstrap';

import HelloSuperStarDemo from "./HelloSuperStarDemo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../CSS/Login-page/logIn.css';
import '../CSS/Otp-page/OtpPage.css';

const Otp = () => {

    return (
        <>
            <div className="bg-img">
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                        <div className="mt-3">
                                            <HelloSuperStarDemo />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-2 order-lg-2 header-img">
                                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                            <div className="w-100" style={{ maxWidth: "480px" }}>
                                                <Card className='logIn-bg'>
                                                    <Card.Body>

                                                        <div className="d-flex justify-content-center parent-border">
                                                            <h5 className="text-center mb-4 logIn-header">OTP Verification</h5>
                                                        </div>
                                                        <div className="otp">
                                                            <FontAwesomeIcon className="ino mb-2" icon={faEnvelopeOpenText} />
                                                            <p>We have sent an OTP number to your phone. Enter the OTP below to verify your identity</p>
                                                            <b>00:52</b> <br />

                                                            <div className="otpS">
                                                                <input type="text" />
                                                                <input type="text" />
                                                                <input type="text" />
                                                                <input type="text" />
                                                                <input type="text" />
                                                                <input type="text" />
                                                            </div>

                                                            <div className="btnO col-lg-12">
                                                                <div className="btnS col-sm-6">
                                                                    <Link to="/accountCreate"> <button>Verify</button></Link>
                                                                </div>
                                                                <div className="btnA col-sm-6 mt-2">
                                                                    <a href="/">Resend</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <h6 className="log-otp">Already have an account ? <Link to="/login">Log In</Link></h6>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Otp;