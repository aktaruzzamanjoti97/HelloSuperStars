import React, { useRef, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
//import { useAuth } from "./AuthContext";
import HelloSuperStarDemo from './HelloSuperStarDemo';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import '../CSS/SignUpPage/SignUp.css'
import DropDownLanguage from './DropDownLanguage';
import axios from "axios";
import swal from 'sweetalert';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const inputStyle = {
    width: "160px",
    fontSize: "12px",
    borderBottom: "2px solid #E7DA5D",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: "0px",
  background:'#343434',
  color:'white'
    //   background:'black',
    //   color:'white'
  };

const Signup = () => {
    
    const ConfirmPasswordRef = useRef();
    //const { signup } = useAuth();

    // const [loading, setLoading] = useState(false);
    const loading=false;
    const [changeIcon, setChange] = useState(false);
    const [changIcon1, setChangeIcon1] = useState(false);



    function handleChangeIcon() {
        setChange(!(changeIcon));

    }

    function handleChangeIcon1() {
        setChangeIcon1(!(changIcon1));
    }


    const history = useHistory();
    const [registerInput, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        error_list: []
    });
    //const [regvalue,setRegValue]=useState('');

    const [getPhone,setPhone]=useState('');

    const handleInput = (e) => {

        const {name,value}=e.target;
        setRegister((prev)=>{
            return({...prev,[name]:value});
        })
    }

    const phoneInput = (e) => {
        //const {name,value}=e.target;
        console.log(e.target.value);
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        console.log(getPhone);

        const data = {
            first_name: registerInput.first_name,
            last_name: registerInput.last_name,
            email: registerInput.email,
            phone: getPhone,
            password: registerInput.password,
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_id', res.data.id);
                    swal("Success",res.data.message,"success");
                    history.push('/otp');
                }
                else{
                    setRegister({ ...registerInput,error_list: res.data.validation_errors });
                }
            });
        });
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
                                                        {/* {error ? <Alert variant="danger">{JSON.stringify(error)}</Alert> : ""} */}

                                                        <form onSubmit={registerSubmit}>
                                                           
                                                            <div className="row">
                                                                <div className="col">
                                                                    <input type="text" onChange={handleInput} name='first_name' value={registerInput.first_name} className="form-control sign-up-style" placeholder='First name' required />
                                                                    <span>{registerInput.error_list.name}</span>
                                                                </div>
                                                                <div className="col">
                                                                    <input type="text" onChange={handleInput} name='last_name' value={registerInput.last_name} className="form-control sign-up-style" placeholder="Last name" />
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col">
                                                                    <input type="email" name='email' className="form-control sign-up-style" placeholder="Email" onChange={handleInput} value={registerInput.email}  />
                                                                    <span><small className='text-danger'>{registerInput.error_list.email}</small></span>
                                                                </div>
                                                                <div className="col">
                                                                    <PhoneInput country={'bd'} inputStyle={inputStyle}  buttonStyle={{ background:'none',border:'0' }} name="phone" onChange={phone => setPhone(phone)}/> 
                                                                     {/*<input type="text" name="phone" className="form-control sign-up-style" placeholder="Phone" onChange={handleInput} value={registerInput.phone} required />*/}
                                                                    <span><small className='text-danger'>{registerInput.error_list.phone}</small></span> 
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col">
                                                                    <input type={changeIcon ? `text` : `password`} onChange={handleInput}  name='password' value={registerInput.password} className="form-control sign-up-style" placeholder="Create password"  />
                                                                    <span className='sign-up-eye-icon-1' >
                                                                        <FontAwesomeIcon onClick={handleChangeIcon} icon={changeIcon ? faEye : faEyeSlash} />
                                                                    </span>
                                                                    <span>{registerInput.error_list.password}</span>
                                                                </div>
                                                                
                                                                <div className="col">
                                                                    <input type={changIcon1 ? `text` : `password`} ref={ConfirmPasswordRef} className="form-control sign-up-style" placeholder="Confirm password"  />
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