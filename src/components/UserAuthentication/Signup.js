import React, { useRef, useState } from 'react';
import { Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import HelloSuperStarDemo from './HelloSuperStarDemo';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import '../CSS/SignUpPage/SignUp.css'
import DropDownLanguage from './DropDownLanguage';
const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [changeIcon, setChange] = useState(false);
    const [changIcon1, setChangeIcon1] = useState(false);

    function handleChangeIcon() {
        setChange(!(changeIcon));

    }

    function handleChangeIcon1() {
        setChangeIcon1(!(changIcon1));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== ConfirmPasswordRef.current.value) {
            return setError("Password does not match!");
        }
        try {
            setLoading(true);
            setError("");
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/otp');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

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

                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                            <div className="w-100" style={{ maxWidth: "400px" }}>
                                                <Card className='form-card-bg'>
                                                    <Card.Body>
                                                        <div className="d-flex justify-content-center">
                                                            <h5 className="text-center mb-4 sign-up-header">Create an Account</h5>
                                                        </div>
                                                        {error ? <Alert variant="danger">{JSON.stringify(error)}</Alert> : ""}

                                                        <form onSubmit={handleSubmit}>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <input type="text" ref={nameRef} class="form-control sign-up-style" placeholder='First name' required />
                                                                </div>
                                                                <div class="col">
                                                                    <input type="text" class="form-control sign-up-style" placeholder="Last name" />
                                                                </div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col">
                                                                    <input type="email" class="form-control sign-up-style" placeholder="Email or phone" ref={emailRef} required />
                                                                </div>
                                                                <div class="col">
                                                                    <input type="text" class="form-control sign-up-style" placeholder="NID or password" />
                                                                </div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col">
                                                                    <input type={changeIcon ? `text` : `password`} ref={passwordRef} class="form-control sign-up-style" placeholder="Create password" required />
                                                                    <span className='sign-up-eye-icon-1' >
                                                                        <FontAwesomeIcon onClick={handleChangeIcon} icon={changeIcon ? faEye : faEyeSlash} />
                                                                    </span>
                                                                </div>
                                                                <div class="col">
                                                                    <input type={changIcon1 ? `text` : `password`} ref={ConfirmPasswordRef} class="form-control sign-up-style" placeholder="Confirm password" required />
                                                                    <span className='sign-up-eye-icon-2' onClick={handleChangeIcon1} >
                                                                        <FontAwesomeIcon icon={changIcon1 ? faEye : faEyeSlash} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="text-center mt-4">
                                                                <Button to='/otp' disabled={loading} className="w-50 btn btn-warning" type="submit">Signup</Button>
                                                            </div>
                                                            <div className="d-flex  justify-content-around mt-4 ">
                                                                <Link to='/login' className='btn btn-outline-warning  px-4 mx-2 userBtn-font'>Login</Link>
                                                                <Link to='/guestUser' className='btn btn-outline-warning  mx-2 userBtn-font'>Guest user</Link>
                                                            </div>
                                                        </form>


                                                        {/* <Form onSubmit={handleSubmit}>
                                                            <Form.Group id="name">
                                                                <Form.Label>Name</Form.Label>
                                                                <Form.Control ref={nameRef} type="text" required />
                                                            </Form.Group>
                                                            <Form.Group id="email">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control ref={emailRef} type="email" required />
                                                            </Form.Group>
                                                            <Form.Group id="password">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control ref={passwordRef} type="password" required />
                                                            </Form.Group>
                                                            <Form.Group id="ConfirmPassword">
                                                                <Form.Label>Password Comnfirmation</Form.Label>
                                                                <Form.Control ref={ConfirmPasswordRef} type="password" required />
                                                            </Form.Group>
                                                            <br />
                                                            <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                                                        </Form> */}
                                                    </Card.Body>
                                                </Card>
                                                {/* <div className="w-100 text-center mt-2">
                                                    Already have an account? <Link to="/login">Log In!</Link>
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

export default Signup;


