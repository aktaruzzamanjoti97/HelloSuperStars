import React, { useState } from 'react';
import { Button, Card, Form, Container } from 'react-bootstrap';
//import { useAuth } from "./AuthContext";
import HelloSuperStarDemo from "./HelloSuperStarDemo";
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Login-page/logIn.css';
import DropDownLanguage from './DropDownLanguage';
import axios from "axios";
import swal from 'sweetalert';

const Login = () => {
    // function handleChangeIcon() {
    //     setChange(!(changeIcon));

    // }

    

    const history = useHistory();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`, data).then(res => {
                if(res.data.status === 200)
                    {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.name);
                        localStorage.setItem('auth_id', res.data.id);
                        swal("Success",res.data.message,"success");
                        history.push('/');
                    }
                    else if(res.data.status === 403)
                    {
                        swal("Success",res.data.message,"success");
                        history.push('/otp');
                    }
                    else if(res.data.status === 401)
                    {
                        swal("Warning",res.data.message,"warning");
                    }
                    else{
                        setLogin({ ...loginInput,error_list: res.data.validation_errors });
                    }
            });
        });
        
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
                                        <div class="">
                                            <HelloSuperStarDemo />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 header-img">
                                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                            <div className="w-100" >
                                                <Card className='logIn-bg'>
                                                    <Card.Body>

                                                        <div className="d-flex justify-content-center parent-border">
                                                            <h5 className="text-center mb-4 logIn-header"> Log in</h5>

                                                        </div>
                                                        
                                                        <Form onSubmit={loginSubmit} className='text-center'>
                                                            <Form.Group id="email" className='mb-4'>

                                                                <input className='input-style w-50' name="email" onChange={handleInput} value={loginInput.email} type="text" placeholder='Email or Phone' required />
                                                                <span>{loginInput.error_list.email}</span>
                                                            </Form.Group>
                                                            <p>
                                                                <Form.Group id="password">
                                                                    <input type={changeIcon ? `text` : `password`} 
                                                                    className='input-style w-50' name="password" onChange={handleInput} v
                                                                    alue={loginInput.password} placeholder='Password' required />
                                                                    <span onClick={handleChangeIcon} className='eye-icons'>
                                                                        <FontAwesomeIcon icon={changeIcon ? faEye : faEyeSlash} />
                                                                    </span>
                                                                    <span>{loginInput.error_list.password}</span>

                                                                </Form.Group>
                                                            </p>

                                                            <br />
                                                            <Button className="btn btn-warning w-50" type="submit">Log In</Button>
                                                        </Form>
                                                        <div className="d-flex  justify-content-around mt-4 ">
                                                            <Link to='/signup' className='btn btn-outline-warning px-3 mx-2 userBtn-font'>Sign Up</Link>
                                                            <Link to='/coreCategory' className='btn btn-outline-warning px-3 mx-2 userBtn-font'>Guest user</Link>
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