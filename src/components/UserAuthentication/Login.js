import React, { useRef, useState } from 'react';
import { Button, Card, Form, Alert, Container } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import HelloSuperStarDemo from "./HelloSuperStarDemo";
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Login-page/logIn.css';
import DropDownLanguage from './DropDownLanguage';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const history = useHistory();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const [changeIcon, setChange] = useState(false);
    function handleChangeIcon() {
        setChange(!(changeIcon));

    }

    return (
        <>
            <div className="bg-img">
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10  mx-auto">
                                <div className="row">
                                    <div className="col-md-6  pt-5 pt-lg-0  d-flex justify-content-center  flex-column">
                                        <div className="mt-3 ">
                                            <HelloSuperStarDemo />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 header-img">
                                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                            <div className="w-100" style={{ maxWidth: "480px" }}>
                                                <Card className='logIn-bg'>
                                                    <Card.Body>

                                                        <div className="d-flex justify-content-center parent-border">
                                                            <h5 className="text-center mb-4 logIn-header"> Log in</h5>

                                                        </div>
                                                        {error ? <Alert variant="danger">{JSON.stringify(error)}</Alert> : ""}
                                                        <Form onSubmit={handleSubmit} className='text-center'>
                                                            <Form.Group id="email" className='mb-4'>

                                                                <input className='input-style w-50' ref={emailRef} type="email" placeholder='Email or Phone' required />
                                                            </Form.Group>
                                                            <p>
                                                                <Form.Group id="password">
                                                                    <input className='input-style w-50' ref={passwordRef} type={changeIcon ? 'text' : 'password'} placeholder='Password' required />
                                                                    <span onClick={handleChangeIcon} className='eye-icons'>
                                                                        <FontAwesomeIcon icon={changeIcon ? faEye : faEyeSlash} />
                                                                    </span>

                                                                </Form.Group>
                                                            </p>

                                                            <br />
                                                            <Button disabled={loading} className="btn btn-warning w-50" type="submit">Log In</Button>
                                                        </Form>
                                                        <div className="d-flex  justify-content-around mt-4 ">
                                                            <Link to='/signup' className='btn btn-outline-warning px-3 mx-2 userBtn-font'>Sign Up</Link>
                                                            <Link to='/guestUser' className='btn btn-outline-warning px-3 mx-2 userBtn-font'>Guest user</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                                {/* <div className="w-100 text-center mt-2">
                                                    Don't have an account? <Link to="/signup">Sign Up!</Link>
                                                </div> */}
                                            </div>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="topright text-light">
                    <DropDownLanguage />

                </div>
            </div>
        </>
    )
}

export default Login;